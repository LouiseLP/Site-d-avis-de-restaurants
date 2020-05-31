<template>
  <div id="containerStars">
    <div
      id="starsEl"
      v-for="star in listStars"
      :key="star.index"
      @click="() => changeValue(star.index)"
    >
      <Stars :full="star.index <= rating" class="fa-lg"></Stars>
    </div>
  </div>
</template>

<script>
import Stars from "./Stars";

export default {
  data() {
    return {
      rating: 0
    };
  },
  computed: {
    listStars() {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        stars.push({ index: i });
      }
      return stars;
    }
  },
  components: {
    Stars
  },
  methods: {
    changeRating(newRating) {
      this.rating = newRating + 1;
    },
    changeValue(newRating) {
      this.rating = newRating;
      if (typeof this.onChange == "function") {
        this.onChange(this.rating + 1);
      }
    }
  },
  props: {
    onChange: Function
  }
};
</script>

<style>
#containerStars {
  display: flex;
  flex-direction: row;
}
#starsEl {
  margin-right: 4px;
}
</style>
