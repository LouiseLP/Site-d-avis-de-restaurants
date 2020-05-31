<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
    <RestaurantForm
      id="formR"
      v-if="displayForm"
      :onSubmitRestaurant="this.submitForm"
    ></RestaurantForm>
    <template v-if="Boolean(this.google) && Boolean(this.map)"> </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";
import RestaurantForm from "./RestaurantForm";
export default {
  props: {
    mapConfig: Object,
    apiKey: String,
    markers: Array,
    onMapClick: Function
  },
  data() {
    return {
      google: null,
      map: null,
      infoWindow: null,
      displayForm: false,
      lat: null,
      lng: null
    };
  },
  async mounted() {
    //Inialisation de la carte au chargement de la page
    const googleMapApi = await GoogleMapsApiLoader({
      libraries: ["places"],
      apiKey: this.apiKey
    });
    this.google = googleMapApi;
    this.initializeMap.call(this);
  },
  components: {
    RestaurantForm
  },
  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, {
        center: this.$store.state.geolocation,
        zoom: 14
      });
     let flag = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"; 
      const placesApi = new this.google.maps.places.PlacesService(this.map);
      /* eslint-disable */
      console.log("resultats", placesApi);
      this.$store.dispatch("initGoogleApi", {
        placesApi
      });
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            if (position) {
              this.$store.dispatch("changeLocation", position);

              new this.google.maps.Marker({
                position: {
                  lat: this.$store.state.geolocation.lat,
                  lng: this.$store.state.geolocation.lng
                },
                map: this.map,
                icon: flag,
                animation: google.maps.Animation.DROP
              });
            } else {
              this.$store.dispatch("changeLocation", {
                coords: {
                  latitude: 48.87858401380672,
                  longitude: 2.353651712454166
                }
              });
            }
          },
          () => {
            this.$store.dispatch("changeLocation", {
              coords: {
                latitude: 48.87858401380672,
                longitude: 2.353651712454166
              },
            });
          }
        );
      }
      this.$store.subscribe((mutation, state) => {
        const lat =
          typeof mutation.payload.lat === "function"
            ? mutation.payload.lat()
            : mutation.payload.lat;
        const lng =
          typeof mutation.payload.lng === "function"
            ? mutation.payload.lng()
            : mutation.payload.lng;
        if (mutation.type === "ADD_RESTAURANT") {
          new this.google.maps.Marker({
            position: { lat, lng },
            map: this.map
          });
        }
        if (mutation.type === "CHANGE_LOCATION") {
          this.map.setCenter({
            lat: mutation.payload.coords.latitude,
            lng: mutation.payload.coords.longitude
          });
        }
      });
      this.map.addListener("click", this.addMarker);
    },
    addMarker(event) {
      //Ouverture du formulaire de nouveau restaurant au click
      this.displayForm = !this.displayForm;
      this.lat = event.latLng.lat();
      this.lng = event.latLng.lng();
    },
    submitForm({ restaurantName, address }) {
      this.$store.commit("ADD_RESTAURANT", {
        restaurantName,
        address,
        lat: this.lat,
        lng: this.lng,
        id: btoa(Date.now().toString() + restaurantName)
      });
    }
  }
};
</script>

<style>
/* Formulaire restaurant */
#formR {
  width: 50%;
  height: 200px;
  position: fixed;
  top: 25%;
  left: 25%;
  margin-top: -50px;
  margin-left: -100px;
  z-index: 4;
}
</style>
