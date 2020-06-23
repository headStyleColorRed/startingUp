<template>
  <div class="loginForm">
    <!--- - - E m a i l  - - - -->
    <div class="inputWrapper inputEmail">
      <label>{{Strings.email}}</label>
      <br />
      <input class="inputFields shadow" type="text" v-model="user.email" />
    </div>

    <!--- - - P a s s w o r d  - - - -->
    <div class="inputWrapper inputPassword">
      <label>{{Strings.password}}</label>
      <br />
      <input class="inputFields shadow" type="password" v-model="user.password" />
    </div>

    <!--- - - C o n f i r m   P a s s w o r d  - - - -->
    <div v-if="!loginStatus" class="inputWrapper inputConfirmPassword">
      <label>{{Strings.passwordConfirmation}}</label>
      <br />
      <input
        class="inputFields shadow"
        :placeholder="Strings.moreThanNCharacters"
        type="password"
        v-model="user.passwordConfirmation"
      />
    </div>

    <!--- - - T e r m s   A n d   C o n d i t i o n s - - - -->
    <div v-if="!loginStatus" class="termsAndConditions">
      <input
        type="checkbox"
        class="checkbox"
        v-model="isTermsAndConditionsAccepted"
        v-on:click="checkTermsAndConditions()"
      />
      <span class="termsAndConditionsText">
        {{Strings.termsAndConditionsAgree}}
        <b
          class="termsOfService"
          v-on:click="goToTermsAndConditions()"
        >{{Strings.termsAndConditionsPage}}</b>
      </span>
    </div>

    <!--- - - B u t t o n  - - - -->
    <div class="buttonWrapper">
      <div v-on:click="parseInput()" class="buttonContainer">
        <p v-if="loginStatus" class="buttonText">{{Strings.signIn}}</p>
        <p v-else class="buttonText">{{Strings.createAccount}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import stringsImport from "../assets/Strings_en.json";

export default {
  props: {
    loginStatus: {
      type: Boolean,
      required: true
    }
  },
  name: "login",
  data() {
    return {
      isTermsAndConditionsAccepted: false,
      Strings: new Object(),
      user: {
        email: null,
        password: null,
        passwordConfirmation: null
      }
    };
  },
  mounted() {
    this.Strings = stringsImport.screen_login;
  },
  methods: {
    changeLoginScreen() {
      this.loginStatus = !this.loginStatus;
    },
    checkTermsAndConditions() {
      this.isTermsAndConditionsAccepted = !this.isTermsAndConditionsAccepted;
      console.log(this.isTermsAndConditionsAccepted);
    },
    goToTermsAndConditions() {
	},
	parseInput() {
		if (this.loginStatus)
			parseLoginData()
		else
			parseRegisteringData()
	},
	parseLoginData() {

	},
	parseRegisteringData() {
		
	}
  },
  components: {}
};
</script>

<style scoped>
.loginForm {
  height: 27vw;
  width: 30rem;
  color: #666666;
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

.termsAndConditionsText {
  font-size: 0.9rem;
}

.termsOfService {
  font-weight: 400;
  color: rgb(61, 110, 5);
  cursor: pointer;
  text-decoration: underline;
}

.checkbox {
  transform: scale(1.2);
  margin-right: 0.5rem;
}

.buttonWrapper {
  display: grid;
}

.buttonContainer {
  display: grid;
  position: relative;
  justify-self: center;
  background-color: rgb(39, 38, 38);
  color: white;
  margin-top: 2rem;
  height: 3.4rem;
  width: 15rem;
  border-radius: 5rem;
  cursor: pointer;
}

.buttonText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

