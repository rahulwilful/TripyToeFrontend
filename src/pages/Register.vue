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
</style>
<template>
  <div class="main vh-100">
    <div class="container container-md container-lg">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-5 bg-light text-dark rounded shadow-lg my-5">
          <h1 class="text-center mt-2">Register</h1>
          <form class="my-3 mx-2">
            <div class="row">
              <div class="col-6 border-end">
                <div class="mb-4">
                  <label for="form.name" class="form-label">Name*</label>
                  <input type="text" class="form-control" id="form.name" v-model="form.name" />
                </div>
                <div class="mb-4">
                  <label for="form.mobile_no" class="form-label"> Mobile Number*</label>
                  <input type="number" class="form-control" id="form.mobile_no" v-model="form.mobile_no" />
                </div>
              </div>
              <!-- ////////////////////////////////////// New colunn starts /////////////////////////////////////////////// -->
              <div class="col-6">
                <div class="mb-4">
                  <label for="form.email" class="form-label">Email address*</label>
                  <input type="email" class="form-control" id="form.email" v-model="form.email" />
                </div>
                <div class="mb-4">
                  <label for="form.password" class="form-label">Password*</label>
                  <input type="password" class="form-control" id="form.password" v-model="form.password" />
                </div>
              </div>
            </div>

            <div class="d-grid gap-2 mt-2">
              <button v-on:click.prevent="handleSubmit" class="btn btn-dark" type="button">Register</button>
            </div>
            <div class="my-2 text-center">OR</div>
            <div class="row">
              <div class="col">
                <div class="d-grid gap-2 mt-2">
                  <button v-on:click="handleGoogleSign" class="btn btn-primary" type="button">Sign Up With <i class="bi bi-google"></i></button>
                </div>
              </div>
              <div class="col">
                <div class="d-grid gap-2 mt-2">
                  <button v-on:click="handleFacebookSignIn" class="btn btn-primary" type="button">Sign Up With <i class="bi bi-facebook"></i></button>
                </div>
              </div>
            </div>

            <p class="text-center mt-3">Have an account ? then</p>
            <div class="text-center">
              <button class="btn btn-dark me-md-3 mr-1" v-on:click="handleLogin">LogIn</button>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosClient from "../axiosClient";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import facebookLogin from "facebook-login-vuejs";

export default {
  name: "Register",
  components: {
    facebookLogin,
  },
  data() {
    return {
      form: {
        name: "",
        mobile_no: "",
        email: "",
        password: "",
        facebook: "",
        instagram: "",
        whatsapp_status: false,
        whatsapp_no: "",
      },
      error: [],

      userId: "",
      token: "",
    };
  },

  async created() {},

  methods: {
    async handleSubmit() {
      console.log(this.form);
      this.error = [];
      for (const item in this.form) {
        if (this.form.email === "" && this.form.mobile_no === "") {
          this.error.push(item);
        }
      }

      if (this.error.length === 0) {
        try {
          const response = await axiosClient.post("user/add", this.form);

          //console.log("User registered successfully", response.data.result);
          this.userId = response.data.result._id;
          this.token = response.data.result.token;
          console.log("userId", this.userId, ", ", this.token);
          await new Promise((resolve) => setTimeout(resolve, 1500));
          if (this.userId) {
            this.varifyEmail();
          }
        } catch (error) {
          console.error("Error registering user", error);
          /* if (error.response.status == 403) {
            toast.error("Enter password", {
              autoClose: 1500,
            });
          } else if (error.response.status == 401) {
            toast.error("check all the required feilds ", {
              autoClose: 1500,
            });
          } else if (error.response.status == 402) {
            toast.error("Enter Email ", {
              autoClose: 1500,
            });
          } else if (error.response.status == 400) {
            toast.error("User already exists", {
              autoClose: 1500,
            });
          } else {
            toast.error("Something went wrong", {
              autoClose: 1500,
            });
          } */
        }
      } else {
        console.log("Form Values Are ", this.form, this.error);
      }
    },
    //funtion for email verification and redirect if verification email sent successfully
    async varifyEmail() {
      //function to invoke emailjs
      console.log("varifyEmail called");
      (function () {
        emailjs.init("xFvWy_f4EAZfIazRD");
      })();
      //sericeId and templateId of emailjs
      var serviceID = "service_q76t9xj";
      var templateID = "template_uhooied";
      var flag = 0; //flag for better notification handling

      try {
        var params = {
          to: this.form.email,
          message: `https://tripytoe.netlify.app/varifyemail/${this.userId}/${this.token}`,
        };

        await emailjs.send(serviceID, templateID, params);
        toast.success("Varification link sent on email", {
          autoClose: 1500,
        });

        toast.success("Registerd successfully", {
          autoClose: 1500,
        });
        flag = 1;
        setTimeout(() => {
          this.$router.push(`/login`);
        }, 1500);
      } catch (err) {
        console.error("error", err); // Log the error object, not 'object'
        if (err.response.status == 404) {
          toast.error("User does not exist", {
            autoClose: 1500,
          });
        }
      }
      if (flag === 0) {
        toast.success("Registerd successfully", {
          autoClose: 1500,
        });

        setTimeout(() => {
          this.$router.push(`/login`);
        }, 1500);
      }
    },

    handleLogin() {
      this.$router.push("/login");
    },

    handleGoogleSign() {
      this.$router.push("/googlesignup");
    },
    handleFacebookSignIn() {
      this.$router.push("/facebooksignup");
    },
  },
};
</script>
