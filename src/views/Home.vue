<template>
  <div class="home">
    <div class="leftContainer">
		<!--- - - left container top - - - -->
      <div class="leftContainer-top">
        <p v-if="isShowingLogin">
          {{Strings.alreadyAMember}}
          <b
            class="header_login"
            v-on:click="changeLoginScreen()"
          >{{Strings.signIn}}</b>
        </p>
        <p v-else>
          {{Strings.notAMemberYet}}
          <b
            class="header_login"
            v-on:click="changeLoginScreen()"
          >{{Strings.signUp}}</b>
        </p>
      </div>
		<!--- - - left container medium - - - -->
      <div class="leftContainer-medium">
		  <h2 class="leftContainer-medium-title">{{Strings.signUp}}</h2>
		  <login-form/>
	  </div>
      <div class="leftContainer-bottom"></div>
    </div>
    <div class="rightContainer"></div>
  </div>
</template>

<script>
import stringsImport from "../assets/Strings_en.json";
import loginForm from "../components/loginForm.vue"

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
  components: {
	  "login-form": loginForm,
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
}

/* - - - - - - - - L E F T   C O N T A I N E R - - - - - */
.leftContainer {
  position: relative;
  background-color: rgb(255, 255, 255);
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
}
/* - - - left container top - - - */
.leftContainer-top p {
  padding: 2rem;
  text-align: right;
}

.header_login {
  font-weight: 400;
  color: rgb(61, 110, 5);
  cursor: pointer;
}

/* - - - left container medium - - - */
.leftContainer-medium {
	position: relative;
	padding: 0 10rem;
}

.leftContainer-medium-title {
	font-size: 2.5rem;
	font-weight: 300;
	margin-bottom: 2rem;
}

.leftContainer-bottom {
  background-color: rgb(77, 139, 35);
}

/* - - - - - - - R I G H T   C O N T A I N E R - - - - - */
.rightContainer {
  background-color: rgb(235, 240, 240);
  height: 100vh;
}
</style>
