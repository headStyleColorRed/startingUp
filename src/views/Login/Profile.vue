<template>
  <div class="profile">
	   </div>
</template>

<script>
import stringsImport from "../../assets/Strings_en.json";
import validation from "../../functionalities/validation.js";
import user_services from "../../Services/User/user_services.js";

export default {
  name: "profile",
  data() {
    return {
      Strings: new Object(),
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


