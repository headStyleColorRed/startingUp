<template>
  <div class="login">
    <!--- - - L E F T   C O N T A I N E R - - - -->
    <div class="leftContainer">
      <!--- - - left container top - - - -->
      <div class="leftContainer-top">
        <p v-if="isShowingLogin">
          {{Strings.notAMemberYet}}
          <b
            class="header_login"
            v-on:click="changeLoginScreen()"
          >{{Strings.signUp}}</b>
        </p>
        <p v-else>
          {{Strings.alreadyAMember}}
          <b
            class="header_login"
            v-on:click="changeLoginScreen()"
          >{{Strings.signIn}}</b>
        </p>
      </div>

      <!--- - - left container medium - - - -->
      <div class="leftContainer-medium">
        <h2 class="leftContainer-medium-title">{{isShowingLogin ? Strings.signIn : Strings.signUp}}</h2>
        <login-form :loginStatus="isShowingLogin" @clicked="onClickChild"/>
      </div>

      <!--- - - left container bottom - - - -->
      <div class="leftContainer-bottom">
        <div class="divisorsContainer">
          <hr class="divisors" />
          <p id="divisorText">Or</p>
          <hr class="divisors" />
        </div>
        <div class="externalLoginButtons">
          <div class="externalLogin">
            <img src="../assets/Photos/googleIcon.svg" alt />
            <span>Sign up with Google</span>
          </div>
          <div class="externalLogin">
            <img src="../assets/Photos/linkedinIcon.svg" alt />
            <span>Sign up with Linkedins</span>
          </div>
        </div>
      </div>
    </div>

    <!--- - - R I G H T   C O N T A I N E R  - - - -->
    <div class="rightContainer">
      <p class="inspirationalQuote">
        CREATE A
        <span class="inspirationalQuoteEnding">PROJECT</span>
        <br />FIND A
        <span class="inspirationalQuoteEnding">TEAM</span>
        <br />LAUNCH YOUR
        <span class="inspirationalQuoteEnding">STARTUP</span>
      </p>
    </div>
  </div>
</template>

<script>
import stringsImport from "../assets/Strings_en.json";
import loginForm from "../components/loginForm.vue";

export default {
  name: "login",
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
	},
	processUserInputData(isLogin) {
		console.log("parent");
		if (isLogin)
			parseLoginData()
		else
			parseRegisteringData()
	},
	parseLoginData() {
		console.log("parse login");
	},
	parseRegisteringData() {
		console.log("parse register");
	},
	onClickChild (value) {
      console.log(value) // someValue
    }
  },
  components: {
    "login-form": loginForm
  }
};
</script>

<style scoped>
.login {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  color: #666666;
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

/* - - - left container bottom - - - */
.leftContainer-bottom {
  padding: 0 10rem;
}

.divisorsContainer {
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
}

.divisors {
  border: 0.1px solid rgb(223, 223, 223);
}

#divisorText {
  text-align: center;
  margin-top: -0.6rem;
  margin-left: -0.2rem;
  color: rgb(179, 179, 179);
  font-size: 0.9rem;
}

.externalLoginButtons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}

.externalLogin {
  display: grid;
  border-radius: 3px;
  grid-template-columns: 1fr 5fr;
  border: 1px solid rgb(175, 175, 175);
  padding: 0.7rem;
  cursor: pointer;
}

.externalLogin:hover {
  border: none;
  background-color: rgb(221, 221, 221);
}

.externalLogin img {
  height: 1.3rem;
  justify-self: center;
  align-self: center;
}

.externalLogin span {
  justify-self: center;
  align-self: center;
}

/* - - - - - - - R I G H T   C O N T A I N E R - - - - - */
.rightContainer {
  background-color: rgb(238, 238, 238);
  height: 100vh;
  position: relative;
}

.inspirationalQuote {
  position: absolute;
  top: 20vh;
  left: 2vw;
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
}

.inspirationalQuoteEnding {
  color: rgb(61, 110, 5);
  font-weight: 400;
}

</style>
