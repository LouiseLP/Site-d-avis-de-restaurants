<template>
  <div id="containerPage">
    <div id="containerL">
      <p id="titleHome">Break / Fast</p>
      <p id="introHome">Site d'avis de Restaurants</p>
    </div>

    <div id="cont1">
      <div id="actuOne">
        <img class="imageAbout" src="./Images/fullplate.jpg" />
      </div>
      <p id="textOne">
        Trouvez les meilleurs restaurants à proximité sans difficultés.
      </p>
    </div>

    <div id="cont2">
      <p id="textTwo">Partagez votre avis avec les autres utilisateurs.</p>
      <div id="actuTwo">
        <img class="imageAbout" src="./Images/salteddisplay.jpg" />
      </div>
    </div>

    <div id="cont3">
      <div id="actuThree">
        <img class="imageAbout" src="./Images/instacoffeeshop.jpg" />
      </div>
      <p id="textThree">
        Vous ne voyez pas votre restaurant favoris ? <br />Ajoutez- le et
        partagez avec nous vos meilleures adresses.
      </p>
    </div>

  </div>
</template>

<style>
#containerPage {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#containerL {
  position: absolute;
  z-index: 1;
  width: 90%;
  height: 800px;
  left: 90px;
  top: 100px;
  background-image: url("./Images/coffeeshop.jpg");
  background-position: center;
  background-size: cover;
  color: #da972e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

#titleHome {
  margin-bottom: 20px;
  font-size: 170px;
  font-family: "Amatic SC";
}

#introHome {
  font-size: 65px;
  font-family: "Amatic SC";
}

#cont1 {
  width: 800px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  position: absolute;
  z-index: 1;
  left: 40%;
  top: 1000px;
}

#cont2 {
  width: 800px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  position: absolute;
  z-index: 1;
  left: 9%;
  top: 1400px;
}
#cont3 {
  width: 800px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  position: absolute;
  z-index: 1;
  left: 40%;
  top: 1800px;
}

.imageAbout {
  max-width: 100%;
  max-height: 100%;
  display: block;
  border-radius: 150px;
}

#actuOne {
  display: flex;
  flex-direction: row;
  width: 240px;
  height: 240px;
}
#textOne {
  text-align: center;
  margin-top: 90px;
  margin-left: 25px;
  font-size: 30px;
  font-family: "Amatic SC";
  color: #da972e;
}

#actuTwo {
  display: flex;
  flex-direction: row;
  width: 240px;
  height: 240px;
}
#textTwo {
  text-align: center;
  margin-top: 90px;
  margin-right: 25px;
  font-size: 30px;
  font-family: "Amatic SC";
  color: #da972e;
}

#actuThree {
  display: flex;
  flex-direction: row;
  width: 240px;
  height: 240px;
}
#textThree {
  text-align: center;
  margin-top: 90px;
  margin-left: 25px;
  font-size: 30px;
  font-family: "Amatic SC";
  color: #da972e;
}

.fa-facebook-square {
  position: absolute;
  z-index: 1;
  left: 40%;
  top: 2000px;
}

@media screen and (max-width: 1310px) {
  #cont1 {
    width: 800px;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    position: absolute;
    z-index: 1;
    left: 200px;
    top: 1000px;
  }

  #cont2 {
    width: 800px;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    position: absolute;
    z-index: 1;
    left: 9%;
    top: 1400px;
  }
  #cont3 {
    width: 800px;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    position: absolute;
    z-index: 1;
    left: 200px;
    top: 1800px;
  }
}
</style>
