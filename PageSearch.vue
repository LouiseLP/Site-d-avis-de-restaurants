<template>
  <div id="globalContainer">
    <div id="containerHeader">
      <p id="titleHome">Break / Fast</p>
      <p id="introHome">Trouver un restaurant près de chez vous</p>
    </div>

    <div id="containerMapCards">
      <div id="containerCards">
        <div id="searchFilter">
          <button type="button" class="btn btn-dark" @click="filteringOption">
            Filter les restaurants :
          </button>
          <b-dropdown
            :text="this.min"
            class="filters"
            id="filterMin"
            v-if="filtering"
          >
            <b-dropdown-item
              :class="{ selected: min === 'Quatre' }"
              @click.prevent="min = 'Quatre'"
              >4 étoiles</b-dropdown-item
            >
            <b-dropdown-item
              :class="{ selected: min === 'Trois' }"
              @click.prevent="min = 'Trois'"
              >3 étoiles</b-dropdown-item
            >
            <b-dropdown-item
              :class="{ selected: min === 'Deux' }"
              @click.prevent="min = 'Deux'"
              >2 étoiles</b-dropdown-item
            >
            <b-dropdown-item
              :class="{ selected: min === 'Un' }"
              @click.prevent="min = 'Un'"
              >1 étoile</b-dropdown-item
            >
          </b-dropdown>

          <b-dropdown :text="this.max" class="filters" v-if="filtering">
            <b-dropdown-item
              :class="{ selected: max === 'Cinq' }"
              @click.prevent="max = 'Cinq'"
            >
              5 étoiles</b-dropdown-item
            >
            <b-dropdown-item
              :class="{ selected: max === 'Quatre' }"
              @click.prevent="max = 'Quatre'"
              >4 étoiles</b-dropdown-item
            >
            <b-dropdown-item
              :class="{ selected: max === 'Trois' }"
              @click.prevent="max = 'Trois'"
              >3 étoiles</b-dropdown-item
            >
            <b-dropdown-item
              :class="{ selected: max === 'Deux' }"
              @click.prevent="max = 'Deux'"
              >2 étoiles</b-dropdown-item
            >
          </b-dropdown>
        </div>

        <ItemCard
          v-for="resto in restoList"
          :resto="resto"
          :key="resto && resto.index"
        ></ItemCard>
      </div>
      <div id="mapContainer">
        <GoogleMapLoader
          apiKey="KEY"
          :markers="markers"
          :mapConfig="{
            zoom: 10
          }"
        ></GoogleMapLoader>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from "./ItemCard";
import GoogleMapLoader from "./GoogleMapLoader";
export default {
  name: "app",
  data() {
    return {
      min: "Un",
      max: "Cinq",
      filtering: false
    };
  },
  components: {
    ItemCard,
    GoogleMapLoader
  },
  computed: {
    restoList() {
      //Filtre liste restaurants
      if (this.min === "Un" && this.max === "Deux") {
        return this.$store.getters.oneTwoStars;
      } else if (this.min === "Un" && this.max === "Trois") {
        return this.$store.getters.oneThreeStars;
      } else if (this.min === "Un" && this.max === "Quatre") {
        return this.$store.getters.oneFourStars;
      } else if (this.min === "Un" && this.max === "Cinq") {
        return this.$store.getters.allStars;
      } else if (this.min === "Deux" && this.max === "Trois") {
        return this.$store.getters.twoThreeStars;
      } else if (this.min === "Deux" && this.max === "Quatre") {
        return this.$store.getters.twoFourStars;
      } else if (this.min === "Deux" && this.max === "Cinq") {
        return this.$store.getters.twoFiveStars;
      } else if (this.min === "Deux" && this.max === "Deux") {
        return this.$store.getters.twoStars;
      } else if (this.min === "Trois" && this.max === "Quatre") {
        return this.$store.getters.threeFourStars;
      } else if (this.min === "Trois" && this.max === "Cinq") {
        return this.$store.getters.threeFiveStars;
      } else if (this.min === "Trois" && this.max === "Trois") {
        return this.$store.getters.threeStars;
      } else if (this.min === "Quatre" && this.max === "Cinq") {
        return this.$store.getters.fourFiveStars;
      } else if (this.min === "Quatre" && this.max === "Quatre") {
        return this.$store.getters.fourStars;
      } else if (
        (this.min === "Trois" && this.max === "Deux") ||
        (this.min === "Quatre" && this.max === "Deux") ||
        (this.min === "Quatre" && this.max === "Trois")
      ) {
        return this.$store.getters.allStars;
      } else {
        return this.$store.getters.allStars || [];
      }
    },
    markers() {
      //Créer les markers avec GoogleMapLoader
      return this.restoList.map(resto => resto);
    }
  },
  mounted() {
  },
  methods: {
    filteringOption() {
      this.filtering = !this.filtering;
    }
  }
};
</script>

<style>
#app {
  font-family: "Poppins";
}
/* ItemCard*/
.ui.items {
  display: flex;
  margin-top: 6px;
}
/* Container pour Cards et Google Map*/
#containerMapCards {
  display: flex;
  justify-content: space-between;
}
/* Header */
#containerHeader {
  position: absolute;
  z-index: 1;
  width: 90%;
  height: 800px;
  left: 90px;
  top: 100px;
  background-image: url("./Images/barcoffeshop.jpg");
  background-position: center;
  background-size: cover;
  color: #da972e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
/* Container des ItemCards */
#containerCards {
  width: 650px;
  height: 850px;
  position: absolute;
  z-index: 2;
  left: 50px;
  top: 1000px;
  background-color: #eaeaed;
  border-radius: 5px;
  overflow: scroll;
}
/* Container Google Map*/
#mapContainer {
  width: 650px;
  height: 750px;
  position: absolute;
  z-index: 2;
  left: 825px;
  top: 1100px;
  background-color: #f0f0ef;
  box-shadow: 0 3px 9px #16192a;
  border-radius: 5px;
}
.google-map {
  width: 100%;
  height: 750px;
}
/* Filtre */
#filterMin {
  margin-left: 10px;
  margin-right: 5px;
}
#filterToggle {
  margin-left: 5px;
}
@media screen and (min-width: 1670px) {
  #containerCards {
    width: 800px;
    left: 130px;
  }
  #mapContainer {
    width: 750px;
    left: 1000px;
  }
}
@media screen and (max-width: 1490px) {
  #containerCards {
    left: 10px;
  }
  #mapContainer {
    left: 705px;
  }
}
@media screen and (max-width: 1365px) {
  #containerMapCards {
    position: absolute;
    z-index: 1;
    left: 10%;
    top: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #containerCards {
    width: 1000px;
    position: relative;
    top: 110px;
  }
  #mapContainer {
    width: 1000px;
    height: 500px;
    overflow: hidden;
    position: relative;
    left: 1%;
    top: 150px;
  }
}
@media screen and (max-width: 1130px) {
  #containerCards {
    width: 1000px;
    position: relative;
    left: 20px;
    top: 110px;
  }
  #mapContainer {
    width: 1000px;
    height: 400px;
    overflow: hidden;
    position: relative;
    left: 20px;
    top: 130px;
  }
}
</style>