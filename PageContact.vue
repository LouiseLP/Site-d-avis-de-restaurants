<template>
  <div>
    <div id="containerContact">
      <p id="titleHome">Break / Fast</p>
      <p id="introHome">Contactez-nous</p>
    </div>

    <p id="contactInfo">
      Vous avez des questions ? Un problème ? N'hésitez pas à nous contacter.
      <br />Nos équipes sont là pour vous aider à améliorer votre expérience.
    </p>

    <font-awesome-icon icon="envelope" class="fas fa-envelope fa-3x" />
    <p id="contactAddress">Break / Fast Cie, 248 Rue de Rivoli, 75001 Paris</p>

    <font-awesome-icon icon="phone" class="fas fa-phone fa-3x" />
    <p id="contactPhone">(+33) 01 53 45 84 40</p>

    <font-awesome-icon icon="at" class="fas fa-at fa-3x" />
    <p id="contactEmail">contact@breakfastcie.fr</p>
  </div>
</template>

<script>
export default {
  name: "contact"
};
</script>

<style>
#containerPage {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#containerContact {
  position: absolute;
  z-index: 1;
  width: 90%;
  height: 800px;
  left: 90px;
  top: 100px;
  background-image: url("./Images/phones.jpg");
  background-position: center;
  background-size: cover;
  color: #da972e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

#contactInfo {
  position: absolute;
  left: 17%;
  top: 1000px;
  color: #da972e;
  font-size: 45px;
  text-align: center;
  font-family: "Amatic SC";
}

.fa-envelope {
  position: absolute;
  left: 25%;
  top: 1300px;
}
.fa-phone {
  position: absolute;
  left: 25%;
  top: 1500px;
}
.fa-at {
  position: absolute;
  left: 25%;
  top: 1700px;
}

#contactAddress {
  width: 350px;
  height: 100px;
  color: #da972e;
  font-family: "Amatic SC";
  font-size: 35px;
  text-align: center;
  position: absolute;
  left: 35%;
  top: 1300px;
  background-color: #212529;
}

#contactPhone {
  width: 350px;
  height: 100px;
  color: #da972e;
  font-family: "Amatic SC";
  font-size: 35px;
  text-align: center;
  position: absolute;
  left: 35%;
  top: 1500px;
  background-color: #212529;
}

#contactEmail {
  width: 350px;
  height: 100px;
  color: #da972e;
  font-family: "Amatic SC";
  font-size: 35px;
  text-align: center;
  position: absolute;
  left: 35%;
  top: 1700px;
  background-color: #212529;
}
</style>
