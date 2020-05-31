<template>
  <div id="app">
    <div class="navbar">
      <p id="brand">Break / Fast</p>
      <div id="aNav">
        <!--  balises VueRouter   -->
        <router-link :to="{ name: 'home' }">Accueil</router-link>
        <router-link :to="{ name: 'onSearch' }">
          Chercher un restaurant</router-link
        >
        <router-link :to="{ name: 'contact' }">Nous contacter</router-link>
      </div>
    </div>
    <!-- view du composant  -->
    <router-view></router-view>

    <!-- footer  -->
    <div id="socialNetworks">
      <span class="copyright">Copyright &copy; Break/Fast 2020</span>
      <a class="socials" href="https://www.facebook.com"
        ><img src="./components/Images/fb.png"
      /></a>
      <a class="socials" href="https://twitter.com"
        ><img src="./components/Images/twi.png"
      /></a>
      <a class="socials" href="https://www.instagram.com"
        ><img src="./components/Images/inst.png"
      /></a>
      <div>
        <ul>
          <li>
            <a href="https://www.webself.net/politique-de-confidentialite"
              >Politique</a
            >
          </li>
          <li>
            <a href="https://www.planethoster.com/fr/Termes-Utilisation"
              >Terme d'utilisation</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  async mounted() {
  }
};
</script>

<style>
#app {
  height: 2400px;
}
/* The navigation bar */
.navbar {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 1;
}
#aNav {
  float: right;
  display: block;
  margin-left: 1000px;
}
/* Container de a NavBar*/
.navbar a {
  color: #23241c;
  padding-top: 10px;
  padding-right: 15px;
  text-decoration: none;
}
/* Change background on mouse-over */
.navbar a:hover {
  color: #da972e;
}
/* Nom cie */
#brand {
  font-family: "Amatic SC";
  color: #23241c;
  font-size: 2.7em;
  margin-left: 10px;
}
/* Footer */
#socialNetworks {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  float: bottom;
  justify-content: center;
  margin-top: 40px;
  font-family: "Amatic SC";
  color: #da972e;
}
.socials {
  margin-left: 20px;
}
.copyright {
  margin-right: 50px;
}
ul {
  margin-left: 50px;
}
@media screen and (max-width: 1620px) {
  #aNav {
    float: right;
    display: block;
    margin-left: 700px;
  }
}
@media screen and (max-width: 1290px) {
  #aNav {
    float: right;
    display: block;
    margin-left: 300px;
  }
}
@media screen and (max-width: 905px) {
  #aNav {
    float: right;
    display: block;
    margin-left: 20px;
  }
}
@media screen and (max-width: 630px) {
  #aNav {
    position: fixed;
    display: block;
    margin-top: 10px;
  }
}
</style>
