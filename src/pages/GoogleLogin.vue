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
          <!-- Google login option -->
          <div class="row mt-5">
            <div class="container2">
              <div class="card" style="width: 20rem">
                <div class="card-header">
                  <h3 class="text-center">Google Login</h3>
                </div>
                <div class="card-body shadow-lg">
                  <div class="my-5">
                    <GoogleLogin :callback="handleGoogleLogin" />
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
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axiosClient from "../axiosClient";
import { decodeCredential } from "vue3-google-login";

export default {
  name: "GoogleLoginPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        googleId: "",
      },
      error: [],
      userId: "",
      token: "",
      isSignedUp: false, //check for google login
    };
  },
  methods: {
    async handleGoogleLogin(response) {
      const user = decodeCredential(response.credential);
      console.log(user.email);
      this.form.email = user.email;

      const googleResponse = await axiosClient.post("user/googlelogin", this.form).catch((err) => {
        console.log(err);
        if (err.response.status == 404) {
          toast.error("User does not exist", {
            autoClose: 1500,
          });
        } else if (err.response.status == 400) {
          toast.error("User approvel is pending", {
            autoClose: 1500,
          });
        } else {
          console.error("Error , cannot loggin", err);
          toast.error("Somthing Went wrong", {
            autoClose: 1500,
          });
        }
      });
      console.log("User loggedin successfully", googleResponse.data);
      console.log("User loggedin successfully", googleResponse.data.token);
      localStorage.setItem("token", googleResponse.data.token);
      toast.success("Log In Successfull", {
        autoClose: 1500,
      });
      setTimeout(() => {
        this.$router.push("/home");
      }, 1500);
    },
  },
};
</script>

<style scoped>
#card-body {
  padding-top: 10px;
}
</style>
