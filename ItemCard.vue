<template>
  <div
    class="ui items"
    style="background-color: #E5E3DF; color:#23241C ;border-style: solid; border-color: #969492"
  >
    <div class="item">
      <div id="imageBox">
        <!-- Affiche l'image de Google Static View du restaurant actuel -->
        <img id="viewResto"
                v-if="
                  resto.id === this.$store.state.currentResto.place_id &&
                    showImage === true
                "
                :src="$store.state.currentRestoView"
              /> 
      </div>
      <div class="image">
        <div class="content">
          <div id="containerStarsRating">
            <p class="header">{{ resto.restaurantName }}</p>
            <div
              class="starsElement"
              v-for="star in listStars"
              :key="star.index"
            >
              <Stars :full="resto.rating > star.index"></Stars>
            </div>
            <p id="globalRatingNote">({{ resto.rating }})</p>
          </div>
          <div class="description">
            <p>{{ resto.address }}</p>
            <!-- Identifie le restaurant actuel en récupérant l'id pour afficher ses commentaires -->
            <font-awesome-icon
              icon="chevron-down"
              class="fas fa-chevron-down"
              v-if="!showForm"
              @click="() => collapse(resto.id)"
            />
            <!-- Identifie le restaurant actuel pour afficher sa Street View -->
            <font-awesome-icon
              icon="image"
              class="fas fa-image"
              @click="() => getImage(resto.id, resto.lat, resto.lng)"
            />
          </div>
        </div>
      </div>

      <div v-if="displayComments" id="commentSection">
        <hr id="separation" />
        <div
          v-if="resto.id === this.$store.state.currentResto.place_id"
          id="commentsFeed"
        >
        <!-- Liste des commentaires -->
          <Comment
            v-for="comment in getComments"
            :key="comment.text"
            :comment="comment"
            class="singleComment"
          >
          </Comment>
        </div>
        <!-- Formulaire d'ajout de commentaire -->
        <font-awesome-icon
          icon="pencil-alt"
          class="fas fa-pencil-alt"
          v-if="!showForm"
          @click="collapseForm"
        />
        <font-awesome-icon
          icon="times"
          class="fas fa-times"
          v-if="showForm"
          @click="collapseForm"
        />

        <CommentForm v-if="showForm" :onSubmit="addComment"></CommentForm>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "./Stars";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

export default {
  data() {
    return {
      show: false,
      displayComments: false,
      showForm: false,
      comments: [],
      stars: [],
      showImage: false
    };
  },
  props: {
    resto: {}
  },
  methods: {
    collapse(id) {
      //Determine le restaurant actuel pour les commentaires
      this.displayComments = !this.displayComments;
      this.$store.commit("CURRENT_RESTAURANT", { id });
    },
    collapseForm() {
      this.showForm = !this.showForm;
    },
    getImage(id, lat, lng) {
      //Determine le restaurant actuel et recupére la Street View
      this.showImage = !this.showImage;
      this.$store.commit("CURRENT_RESTAURANT", { id });
      this.$store.commit("CURRENT_RESTAURANT_VIEW", { lat, lng });
      this.show = true;
    },
    addComment({ comment, rating, name }) {
      this.$store.commit("ADD_COMMENT", {
        comment,
        rating,
        name
      });
      this.showForm = false;
    }
  },
  mounted() {
  },
  components: {
    Comment,
    CommentForm,
    Stars
  },
  computed: {
    getComments() {
      return (
        this.$store.state.currentResto && this.$store.state.currentResto.reviews
      );
    },
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
/* Container de Card */
.ui {
  display: flex;
  flex-direction: column;
  padding-right: 5px;
  padding-left: 5px;
  max-height: 680px;
  background-color: white;
  box-shadow: 0 2px 2px #224b65;
  border-radius: 3px;
  font-family: "Poppins";
}

/* Google Static View container */
#imageBox{
  float: right;
  width: 115px;
  height: 100px;
  margin-top: 5px;
  overflow: hidden;
}

/* View */
#viewResto{
  width: 100%;
  height: 100%;
}

/* Ligne de séparation Card top et comment section*/
#separation {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: solid;
  border-radius: 10px;
  border-width: 1px;
  border-color: #23241c;
  opacity: 0.2;
}

/* Affcihe des commentaires */
#commentsFeed {
  height: 250px;
  overflow: scroll;
  font-size: 14px;
}


/* Container */
.image {
  display: flex;
  flex-direction: row;
}

/*Contain p header and starsElement's container*/
#containerStarsRating {
  display: flex;
  flex-direction: row;
  margin-left: 5px;
  margin-top: 5px;
}
/* Contain 5 stars */
.starsElement {
  margin-right: 5px;
  margin-top: -5px;
}
/*Containe the p restaurant's name*/
.header {
  margin-right: 10px;
}

/* Moyenne restaurant */
#globalRatingNote {
  opacity: 0.4;
}

.singleComment {
  margin-bottom: 18px;
  color: #23241c;
}

#writeReview {
  margin-top: 3px;
  font-family: "Poppins";
  font-size: 14px;
  opacity: 0.8;
}

.fa-image {
  margin-left: 5px;
}
</style>
