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
                  <h3 class="text-center">Google Sign-Up</h3>
                </div>
                <div class="card-body shadow-lg">
                  <div class="my-5">
                    <GoogleLogin :callback="handleGoogleSignUp" />
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
  name: "GoogleSignUp",
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
    handleGoogleSignUp(response) {
      console.log("logged in");
      const user = decodeCredential(response.credential);
      console.log(user);
      this.form.name = user.name;
      this.form.email = user.email;
      this.form.googleId = user.sub;

      this.handleSubmit();
    },

    async handleSubmit() {
      this.form.name = this.capitalize(this.form.name);
      this.error = [];
      for (const item in this.form) {
        if (this.form[item] === "" || this.form[item].length === 0) {
          this.error.push(item);
        }
      }
      if (this.error.length === 0) {
        try {
          const response = await axiosClient.post("user/googlesignup", this.form);
          this.userId = response.data.result._id;
          this.token = response.data.result.token;
          console.log("userId", this.userId, ", ", this.token);
          if (this.userId) {
            this.varifyEmail();
          } else {
            toast.error("Something went wrong", {
              autoClose: 1500,
            });
          }
        } catch (error) {
          console.error("Error registering user", error);
          if (error.response.status == 403) {
            toast.error("only admin can create admin", {
              autoClose: 1500,
            });
          } else if (error.response.status == 401) {
            toast.error("check all the required feilds ", {
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
          }
        }
      } else {
        console.log("Form Values Are ", this.error);
      }
    },

    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    //funtion for email verification and redirect if verification email sent successfully
    async varifyEmail() {
      console.log("varifyEmail called");
      (function () {
        //function to invoke emailjs
        emailjs.init("xFvWy_f4EAZfIazRD");
      })();
      //sericeId and templateId of emailjs
      var serviceID = "service_q76t9xj";
      var templateID = "template_uhooied";
      var flag = 0; //flag for better notification

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
  },
};
</script>

<style scoped>
#card-body {
  padding-top: 10px;
}
</style>
