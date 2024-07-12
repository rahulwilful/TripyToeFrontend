<style scoped>
.main {
  background-image: url("../assets/pexels-pixabay-164041.jpg");
  background: cover;
  background-size: cover;
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>

<template>
  <div v-auto-animate class="main">
    <div class="container-fluid vh-100">
      <div class="row vh-100">
        <div class="col-md-8"></div>
        <div class="col-md-4">
          <div class="card justify-content-center align-content-center mt-4 shadow-lg border-light px-2">
            <h1 class="text-center mt-2">LogIn</h1>
            <form class="my-3 mt-2 mx-2">
              <div class="mb-3">
                <label for="form.email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="form.email" v-model="form.email" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="form.password" class="form-label">Password</label>
                <input type="password" class="form-control" id="form.password" v-model="form.password" />
              </div>
              <div class="d-grid gap-2">
                <button v-on:click.prevent="handleSubmit" class="btn btn-dark" type="button">Login</button>
                <router-link to="/forgotpassword"><p>forgot password?</p></router-link>
              </div>

              <div class="my-1 text-center">OR</div>

              <div class="d-grid gap-2 mt-3">
                <div class="row">
                  <div class="col-6 col-sm-6 col-xl-6 col-md-6">
                    <div class="d-grid">
                      <button v-on:click="handleGoogleLogin" class="btn btn-primary" type="button">Login With <i class="bi bi-google"></i></button>
                    </div>
                  </div>
                  <div class="col-6 col-sm-6 col-xl-6 col-md-6">
                    <div class="d-grid">
                      <button type="button" v-on:click="handleFacebookLogin" class="btn btn-primary btn-block">Login with <i class="bi bi-facebook"></i></button>
                    </div>
                  </div>
                </div>
              </div>

              <p class="text-center mt-3">Have an account ? then</p>
              <div class="text-center">
                <button class="btn btn-dark me-md-3 mr-1" v-on:click="handleRegister">Register</button>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { decodeCredential } from "vue3-google-login";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axiosClient from "../axiosClient";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "r@gmail.com",
        password: "111111",
      },
      error: [],
    };
  },

  async beforeCreate() {
    /* const token = localStorage.getItem("token");
    if (token) {
      this.$router.push("/home");
    } */
    try {
      const token = await axiosClient.get("user/getcurrentuser/");
      console.log(token);
      if (token) {
        this.$router.push("/home");
      }

      // Log the state of items after initialization
      console.log("Initialized items:", this.items);
    } catch (err) {
      if (err.response.status == 401) {
      }
      console.log("error: ", err);
    }
  },

  methods: {
    async handleSubmit(e) {
      this.error = [];
      for (const item in this.form) {
        if (this.form[item] === "" || this.form[item].length === 0) {
          this.error.push(item);
        }
      }

      if (this.error.length === 0) {
        const response = await axiosClient.post("user/login", this.form).catch((err) => {
          console.log(err);
          if (err.response.status == 404) {
            toast.error("User does not exist", {
              autoClose: 1500,
            });
          } else if (err.response.status == 400) {
            toast.error("User approvel is pending", {
              autoClose: 1500,
            });
          } else if (err.response.status == 401) {
            toast.error("Inavlid password", {
              autoClose: 1500,
            });
          } else {
            console.error("Error , cannot loggin", err);
            toast.error("Something Went wrong", {
              autoClose: 1500,
            });
          }
        });
        console.log("User loggedin successfully", response.data);
        console.log("User loggedin successfully", response.data.token);
        localStorage.setItem("token", response.data.token);
        toast.success("Log In Successfull", {
          autoClose: 1500,
        });
        setTimeout(() => {
          this.$router.push("/home");
        }, 1500);
      } else {
        console.log("Form Values Are ", this.form, this.error);
      }
    },

    handleRegister() {
      this.$router.push("/register");
    },
    handleGoogleLogin() {
      this.$router.push("/googlelogin");
    },
    handleFacebookLogin() {
      this.$router.push("/facebooklogin");
    },
  },
};
</script>
