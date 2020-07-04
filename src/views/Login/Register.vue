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
        city: "Madrid"
      },
      typingTimer: null
    };
  },
  mounted() {
    this.Strings = stringsImport.screen_registration;
  },
  methods: {
    storeImage(event) {
		let validationResult = validation.validateImageExtension(this.$refs["file-input"].files[0].name)
		if (validationResult.isError) { 
			console.log(validationResult.errorMessage);
			return
		}
	  this.userData.image = this.$refs["file-input"].files[0];

    },
    getCitySuggestions() {
      if (this.userData.city.length < 3) {
        return;
      }

      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(() => {
        //   this.makeApiCall()
      }, 1000);
    },
    makeApiCall() {
      user_services.getGoogleMapSuggestion(this.userData.city).then(res => {
        console.log(res);
      });
    },
    sendData() {
      const formData = new FormData();

      let isValidData = validation.validateRegisterData(this.userData);
      if (isValidData.isError) {
        console.log(isValidData.errorMessage);
        return;
      }

      formData.append("email", this.$store.getters.user);
      formData.append("username", this.userData.username);
      formData.append("age", this.userData.age);
      formData.append("image", this.userData.image);
      formData.append("city", this.userData.city);

      user_services.uploadData(formData).then(res => {
        console.log(res);
      });
    }
  },
  watch: {},
  components: {}
};
</script>

<style scoped>
/*-------------- IPHONE 5 ----------------*/
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait) {
  .register {
    padding: 1rem 2rem;
  }
  .headerTitle {
    font-size: 1.3rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }
  .inputFields {
    background-color: rgb(243, 243, 243);
    border-radius: 8px;
    margin-top: 0.2rem;
    height: 2.3rem;
    width: 100%;
    padding: 2px 0.3rem;
    font-size: 0.9rem;
    color: #666666;
  }

  .inputWrapper {
    margin-bottom: 1rem;
  }

  .shadow {
    -moz-box-shadow: inset 0 0 1px #cfcfcf;
    -webkit-box-shadow: inset 0 0 1px #cfcfcf;
    box-shadow: inset 0 0 1px #cfcfcf;
  }

  ::placeholder {
    color: rgb(190, 190, 190);
    font-size: 0.8rem;
  }

  input:focus {
    outline: none;
  }

  .cityInput {
    margin-bottom: 2rem;
  }

  /*  File input */

  .inputFiles {
    display: grid;
  }

  .uploadAPictureText {
    font-size: 0.8rem;
    text-align: center;
  }

  .imgWrapper {
    justify-self: center;
    display: grid;
    background-color: rgb(128, 128, 128);
    height: 120px;
    width: 120px;
    border-radius: 50%;
  }

  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    justify-self: center;
  }

  .inputfile,
  .inputFileButton {
    margin-top: 5px;
    justify-self: center;
    background-color: rgba(255, 0, 0, 0.979);
    height: 30px;
    width: 30px;
    color: white;
    border-radius: 50%;
    display: grid;
  }

  .profilePicture {
    justify-self: center;
    height: 100px;
    background-color: rgba(128, 128, 128, 0);
  }

  /*  Submit button */

  .submitButtonWrapper {
    margin-top: 3rem;
    display: grid;
  }

  .submitButton {
    justify-self: center;
  }
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


