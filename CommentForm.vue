<template>
  <div id="commentFormSection">
    <b-row class="my-1">
      <b-col sm="4">
        <b-form-input
          id="input-small"
          size="sm"
          placeholder="Votre nom"
          v-model="name"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-form-textarea
      id="avis"
      v-model="comment"
      placeholder="Votre avis"
      rows="3"
      max-rows="6"
    >
    </b-form-textarea>

    <Rating
      :onChange="rating => alertRating(rating)"
      :rating="this.rating"
      id="notation"
    ></Rating>

    <button
      class="ui submit button"
      @click="submit"
      style="background-color: #E0E1E2"
    >
      Envoyer
    </button>
  </div>
</template>

<script>
import Rating from "./Rating";

export default {
  data() {
    return {
      rating: 0,
      comment: "",
      name: ""
    };
  },
  methods: {
    submit() {
      this.onSubmit({ rating: this.rating, comment: this.comment, name: this.name  });
    },
    alertRating(rating) {
      this.rating = rating;
    }
  },
  props: {
    onSubmit: Function
  },
  components: {
    Rating
  }
};
</script>

<style>
.submit {
  width: 80px;
  height: 30px;
  border-radius: 2px;
  color: #616162;
  background-color: #fbf9f5;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  justify-content: center;
}
#avis {
  display: flex;
  width: 95%;
  margin-left: 10px;
  margin-top: 15px;
}
#notation {
  display: flex;
  width: 10%;
  height: 5%;
  margin-left: 10px;
  margin-top: 5px;
}
#commentFormSection {
  display: flex;
  flex-direction: column;
  align-items: left;
}
#input-small {
  margin-left: 12px;
  margin-top: 2px;
}
</style>
