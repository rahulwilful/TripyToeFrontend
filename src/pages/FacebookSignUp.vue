<style scoped>
.main {
  background-image: url("../assets/pexels-pixabay-164041.jpg");
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: auto;
}
.container2 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
</style>

<template>
  <div class="main">
    <div class="main-container">
      <div class="container d-flex vh-100">
        <div class="container text-center">
          <div class="row mt-5">
            <div class="container2">
              <div class="card" style="width: 20rem">
                <div class="card-header">
                  <h3 class="text-center text-primary">Facebook Sign-Up</h3>
                </div>
                <div class="card-body shadow-lg">
                  <div class="my-5">
                    <button type="button" @click="logInWithFacebook" class="btn btn-primary">Login with Facebook</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosClient from "../axiosClient";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "FacebookSignUp",
  data() {
    return {
      name: "",
      facebookId: "",
      flag: 0,
    };
  },

  methods: {
    async handleFacebookRegistration() {
      console.log("handleFacebookRegistration called");
      console.log("form.id:- ", this.facebookId);
      console.log("form.name:- ", this.name);

      const formData = {
        facebookId: this.facebookId,
        name: this.name,
      };

      try {
        const response = await axiosClient.post(`user/facebooksignup`, formData);
        toast.success("Registered successfully", {
          autoClose: 1500,
        });
        console.log("response", response);
        setTimeout(() => {
          this.$router.push(`/login`);
        }, 1500);
      } catch (error) {
        console.error("Error registering user", error);
        if (error.response.status == 400) {
          toast.error("User already exists", {
            autoClose: 1500,
          });
        } else {
          toast.error("Something went wrong", {
            autoClose: 1500,
          });
        }
      }
    },

    async logInWithFacebook() {
      console.log("Facebook Login Called");
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
      await window.FB.login((response) => {
        console.log(response.authResponse);
        if (response.status === "connected") {
          FB.api("/me", { locale: "tr_TR", fields: "locale,name,picture" }, (response) => {
            console.log("response:- ", response);

            this.name = response.name;
            this.facebookId = response.id;
            console.log("form.id:- ", this.facebookId);
            console.log("form.name:- ", this.name);
            this.flag = 1; // set flag to 1 for connected response
            this.handleFacebookRegistration();
          });
        }
      });

      console.log("form.id2:- ", this.facebookId);
      console.log("form.name2:- ", this.name);
      return false;
    },

    async initFacebook() {
      console.log("Facebook Login Called");
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "739795751395881", //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          xfbml: true,
          version: "v18.0",
        });
      };
    },

    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    },
  },
};
</script>
