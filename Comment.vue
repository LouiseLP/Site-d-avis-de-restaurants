<template>
  <div>
    <div>
      <div class="infoReview">
        <p id="authorInfo">{{ comment.author_name }}</p>
        <div id="containerStarsReviews">
          <div id="starsElement" v-for="star in listStars" :key="star.index">
            <Stars :full="comment.rating > star.index"></Stars>
          </div>
        </div>
        <p id="timeStampReview">{{ comment.relative_time_description }}</p>
      </div>
      <p id="reviewText">{{ comment.text }}</p>
    </div>
  </div>
</template>

<script>
import Stars from "./Stars";

export default {
  props: {
    comment: {}
  },
  components: {
    Stars
  },
  computed: {
    listStars() {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        stars.push({ index: i });
      }
      return stars;
    }
  }
};
</script>

<style>
#authorInfo {
  font-style: italic;
  font-size: 13px;
}
.infoReview {
  display: flex;
  flex-direction: row;
}
#containerStarsReviews {
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-right: 5px;
  margin-top: -7px;
}
#starsElement {
  margin-right: 4px;
}
#timeStampReview {
  font-size: 12px;
  opacity: 0.4;
}
#reviewText {
  font-size: 14px;
}
</style>
