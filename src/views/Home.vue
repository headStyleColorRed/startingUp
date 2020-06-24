<template>
  <div class="home">
	  <h1>Hello home!</h1>
	  <v-btn color="green" v-on:click="logOut()">Log Out</v-btn>
  </div>
</template>

<script>
import stringsImport from "../assets/Strings_en.json";
import login_services from "../Services/Login/login_services.js";

export default {
  name: "Home",
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
	  logOut() {
		  let user = {
			  username: this.$store.getters.user,
			  password: this.$store.getters.password
		  }

		  login_services.logOut(user.username, user.password).then((res) => {
			  this.$store.commit("resetAuthState")
   				window.localStorage.clear();
			  this.$router.push("/login")
		  })
	  }
  },
  components: {
  }
};
</script>

<style scoped>

</style>
