<template>
  <div class="loginForm">
	       <div class="inputEmail">
          <p>Name</p>
		  <input class="inputFields" type="text" v-model="user.email">
		  <input type="text" id="fname" name="fname">
      </div>
      <div class="inputPassword"></div>
      <div v-if="!isShowingLogin" class="inputConfirmPassword"></div>
  </div>
</template>

<script>
import stringsImport from "../assets/Strings_en.json";

export default {
  name: "Home",
  data() {
    return {
      isShowingLogin: true,
      Strings: new Object()
    };
  },
  mounted() {
    this.Strings = stringsImport.screen_login;
  },
  methods: {
    changeLoginScreen() {
      this.isShowingLogin = !this.isShowingLogin;
    }
  },
  components: {}
};
</script>

<style scoped>
.loginForm {
	border: 1px solid black;
	height: 25vw;
	width: 30rem;
}

.inputFields {
	background-color: rgb(114, 114, 114);
}

</style>

