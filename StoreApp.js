import Vue from "vue";

const state = {
  comments: [],
  restoLists: [],
  currentResto: [],
  currentRestoView: [],
  geolocation: { lat: 0, lng: 0 },
  geolocationLoaded: false,
  placesApi: {}
};

const getters = {
  comments: state => state.comments,
  allStars: state => state.restoLists,
  fiveStars: state => state.restoLists.filter(resto => resto.rating >= 5),
  fourStars: state =>
    state.restoLists.filter(resto => resto.rating >= 4 && resto.rating < 5),
  threeStars: state =>
    state.restoLists.filter(resto => resto.rating >= 3 && resto.rating < 4),
  twoStars: state =>
    state.restoLists.filter(resto => resto.rating >= 2 && resto.rating < 3),
  oneStars: state =>
    state.restoLists.filter(resto => resto.rating >= 1 && resto.rating < 2),
  oneTwoStars: state =>
    state.restoLists.filter(resto => resto.rating >= 1 && resto.rating < 3),
  oneThreeStars: state =>
    state.restoLists.filter(resto => resto.rating >= 1 && resto.rating < 4),
  oneFourStars: state =>
    state.restoLists.filter(resto => resto.rating >= 1 && resto.rating < 5),
  twoThreeStars: state =>
    state.restoLists.filter(resto => resto.rating >= 2 && resto.rating < 4),
  twoFourStars: state =>
    state.restoLists.filter(resto => resto.rating >= 2 && resto.rating < 5),
  twoFiveStars: state =>
    state.restoLists.filter(resto => resto.rating >= 2 && resto.rating <= 5),
  threeFourStars: state =>
    state.restoLists.filter(resto => resto.rating >= 3 && resto.rating < 5),
  threeFiveStars: state =>
    state.restoLists.filter(resto => resto.rating >= 3 && resto.rating <= 5),
  fourFiveStars: state =>
    state.restoLists.filter(resto => resto.rating >= 4 && resto.rating <= 5)
};

const mutations = {
  ADD_COMMENT: (state, { comment, rating, name }) => {
    state.comments.push({
      author_name: name,
      rating,
      text: comment,
      restoId: state.currentResto.place_id
    });
    if (!state.currentResto.reviews) {
      state.currentResto.reviews = [];
    }
    state.currentResto.reviews.push({
      author_name: name,
      rating,
      text: comment
    });
    //Recalcule la moyenne d'un restaurant à chaque nouveau commentaire
    const getRating =
      state.currentResto.reviews.reduce((acc, cur) => acc + cur.rating, 0) /
      state.currentResto.reviews.length;
    const newRating = getRating.toFixed(1);
    Vue.set(
      state.restoLists.find(({ id }) => id === state.currentResto.place_id),
      "rating",
      newRating || 0
    );
  },
  ADD_RESTAURANT: (
    state,
    { restaurantName, address, lat, lng, rating, id }
  ) => {
    state.restoLists.push({
      restaurantName,
      address,
      lat,
      lng,
      rating,
      id
    });
  },
  CURRENT_RESTAURANT: async (state, { id }) => {
    let restoDetails =
      (await new Promise(resolve => {
        store.state.placesApi.getDetails(
          {
            placeId: id,
            fields: ["name", "rating", "review"]
          },
          resolve
        );
      })) || {};
    const restoFromList = state.restoLists.find(resto => resto.id === id);
    const localReviews = state.comments.filter(c => c.restoId === id);
    restoDetails.reviews = [
      ...((restoDetails && restoDetails.reviews) || []),
      ...localReviews
    ];
    restoDetails = { ...restoDetails, ...restoFromList };
    state.currentResto = { ...restoDetails, place_id: id };
  },
  CURRENT_RESTAURANT_VIEW: async (state, { lat, lng }) => {
    state.currentRestoView = `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${lat()},${lng()}&fov=80&heading=70&pitch=0&key=KEY`;
  },
  CURRENT_LOCATION_USER: (state, payload) => {
    state.geolocation = payload;
  },
  CHANGE_LOCATION: (state, geolocation) => {
    state.geolocation = {
      lat: geolocation.coords.latitude,
      lng: geolocation.coords.longitude
    };
    state.geolocationLoaded = true;
  }
};

const actions = {
  addComment: (store, comment, rating) => {
    store.commit("ADD_COMMENT", comment, rating);
  },
  addRestaurant: (store, { restaurantName, address, lat, lng, id }) => {
    store.commit("ADD_RESTAURANT", { restaurantName, address, lat, lng, id });
  },
  loadData: async store => {
    const restoList = await new Promise(resolve => {
      store.state.placesApi.nearbySearch(
        {
          location: store.state.geolocation,
          radius: 5000,
          type: ["restaurant"]
        },
        resolve
      );
    });

    for (let resto of restoList) {
      store.commit("ADD_RESTAURANT", {
        restaurantName: resto.name,
        address: resto.vicinity,
        lat: resto.geometry.location.lat,
        lng: resto.geometry.location.lng,
        rating: resto.rating,
        id: resto.place_id
      });
    }
  },
  changeLocation: (store, payload) => {
    store.commit("CHANGE_LOCATION", payload);
    store.dispatch("loadData");
  },
  initGoogleApi: (store, payload) => {
    store.state.placesApi = payload.placesApi;
  }
};
let store = {
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
};

export default store;
