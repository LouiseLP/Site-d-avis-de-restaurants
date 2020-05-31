<template>
  <div>
    <b-card bg-variant="light" v-if="displayClose">
      <b-form-group
        label-cols-lg="3"
        label="Restaurant"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label="Nom"
          label-align-sm="right"
          label-for="nomResto"
        >
          <b-form-input
            id="nomResto"
            type="text"
            v-model="nomResto"
          ></b-form-input>
          {{ nomResto }}
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Adresse"
          label-align-sm="right"
          label-for="restoAdresse"
        >
          <b-form-input
            id="restoAdresse"
            type="text"
            v-model="restoAdresse"
          ></b-form-input>
        </b-form-group>
        
 <p v-if="errors.length">
    <b>Veuillez remplir le(s) champs suivant(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>

        <b-button id="ajouter" @click="checkForm"
          >Ajouter Restaurant</b-button
        >
        <button
          id="fermer"
          type="button"
          class="btn btn-default"
          data-dismiss="modal"
          @click="fermer"
        >
          Close
        </button>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      displayClose: true,
      nomResto: "",
      restoAdresse: "",
      restoDescript: "",
       errors: [],
    };
  },
  methods: {
    fermer() {
      this.displayClose = !this.displayClose;
    },
   //Vérifie si un ou plusieurs inputs sont vides
      checkForm: function (e) {
      if (this.nomResto && this.restoAdresse) {
        return this.submitRestaurant();
      }

      this.errors = [];

      if (!this.nomResto) {
        this.errors.push('Nom');
      }
      if (!this.restoAdresse) {
        this.errors.push('Adresse');
      }

      e.preventDefault();
    },
     submitRestaurant() {
      this.displayClose = !this.displayClose;
      this.onSubmitRestaurant({
        restaurantName: this.nomResto,
        address: this.restoAdresse,

      });
    },
  },
  components: {
  },
  props: {
    onSubmitRestaurant: Function
  }
};
</script>

<style>
#ajouter {
  margin-left: 100px;
}
</style>
