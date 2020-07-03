<template>
  <div class="register">
    <div class="header"></div>

    <h2 class="headerTitle">{{Strings.fillYourInfoHeader}}</h2>
    <div class="inputWrapper">
      <!--- - - Username  - - - -->
      <div class="inputWrapper">
        <label>{{Strings.username}}</label>
        <br />
        <input class="inputFields shadow" type="text" v-model="userData.username" />
      </div>

      <!--- - - Age  - - - -->
      <div class="inputWrapper">
        <label>{{Strings.age}}</label>
        <br />
        <input class="inputFields shadow" type="number" v-model="userData.age" />
      </div>

      <!--- - - City  - - - -->
      <div class="inputWrapper cityInput">
        <label>{{Strings.city}}</label>
        <br />
        <input
          class="inputFields shadow"
          type="text"
          v-model="userData.city"
          v-on:input="getCitySuggestions()"
        />
      </div>

      <!--- - - Picture  - - - -->
      <div class="inputWrapper inputFiles">
        <p class="uploadAPictureText">Take a minute to upload a profile photo!</p>
        <div class="imgWrapper">
          <img class="profilePicture" src="../../assets/Photos/emptyProfilePic.png" alt />
          <input
            ref="file-input"
            id="file"
            type="file"
            class="inputfile"
            name="image"
            v-on:change="storeImage()"
          />
          <label class="inputFileButton" for="file">
            <v-icon class="addFileIcon" style="color: white;">fas fa-plus</v-icon>
          </label>
        </div>
      </div>

      <!--- - - Submit button  - - - -->
      <div class="submitButtonWrapper">
        <v-btn v-on:click="sendData()" class="submitButton" color="green">submit</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import stringsImport from "../../assets/Strings_en.json";
import validation from "../../functionalities/validation.js";
import user_services from "../../Services/User/user_services.js";

export default {
  name: "register",
  data() {
    return {
      Strings: new Object(),
      userData: {
        username: "Rodrigo",
        age: "28",
        image: null,
        city: "",
        typingTimer: null,
      }
    };
  },
  mounted() {
    this.Strings = stringsImport.screen_registration;
  },
  methods: {
  },
  watch: {},
  components: {}
};
</script>

<style scoped>
/*-------------- IPHONE 5 ----------------*/
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait) {
}
/*-------------- IPHONE 6 ----------------*/
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
}
/*---------------- IPAD ----------------*/
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/*-------------- HALF SCREEN ----------------*/
@media only screen and (min-device-width: 500px) and (max-width: 1000px) {
}
/*-------------- FULL SCREEN ----------------*/
@media only screen and (min-width: 1001px) and (max-width: 1450px) {
}
/*-------------- MONITOR SCREEN ----------------*/
@media only screen and (min-width: 1450px) {
}
</style>


