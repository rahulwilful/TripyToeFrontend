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
  <div class="main">
    <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="card text-center my-5 shadow-lg">
        <div class="card-body my-5 mx-5">
          <h1 class="card-title">Password Reset</h1>
          <div class="mb-4 mt-4">
            <input type="email" class="form-control" v-model="form.email" id="form.email" placeholder="Enter Email to Reset Password" />
          </div>
          <button type="button" v-on:click="handleSubmit" class="btn btn-primary">Send OTP</button>
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
  name: "ForgotPassword",
  data() {
    return {
      form: {
        email: "",
      },
    };
  },

  methods: {
    async handleSubmit() {
      (function () {
        emailjs.init("xFvWy_f4EAZfIazRD");
      })();
      const random4didgit = this.random4DigitNumber();
      var params = {
        to: this.form.email,
        message: random4didgit,
      };
      console.log("random4digi: ", random4didgit);

      var serviceID = "service_q76t9xj";
      var templateID = "template_1yz2kb1";

      try {
        await axiosClient.post("user/varifyuser", this.form);
        await emailjs.send(serviceID, templateID, params);
        toast.success("OTP Sent", {
          autoClose: 1500,
        });
        const paramsotp = 58777878797977 * random4didgit;
        setTimeout(() => {
          this.$router.push(`/resetpassword/${this.form.email}/${paramsotp}`);
        }, 1500);
      } catch (err) {
        console.error("error", err); // Log the error object, not 'object'
        if (err.response.status == 404) {
          toast.error("User does not exist", {
            autoClose: 1500,
          });
        }
      }
    },
    random4DigitNumber() {
      return Math.floor(1000 + Math.random() * 9000);
    },
  },
};
</script>

<!-- 
  async handleSubmit() {
      (function () {
        emailjs.init("xFvWy_f4EAZfIazRD");
      })();
      const random4didgit = this.random4DigitNumber();
      /*  var params = {
        to: this.form.email,
        message: random4didgit,
      }; */
      console.log("random4digi: ", random4didgit);
      let flag = 1;
      try {
        console.log(this.form.email);
        await axiosClient.post("user/varifyemail", this.form);
        await Email.send({
          Host: "smtp.elasticemail.com",
          Username: "rahre49@gmail.com",
          Password: "A3EC805AFD41F77ED9B1F128F4609B4373C3",
          To: this.form.email,
          From: "rahre49@gmail.com",
          Subject: "OTP For Password Reset",
          Body: `Your OTP for password reset is ${random4didgit}`,
        }).then((message) => {
          if (message === "ok") {
            toast.success("OTP sent", {
              autoClose: 1500,
            });
          } else {
            console.log(message);
            toast.error("OTP not sent, something went wrong", {
              autoClose: 1500,
            });

            flag = 1;
          }
        });
        if (flag == 1) return;
        const paramsotp = 58777878797977 * random4didgit;
        setTimeout(() => {
          this.$router.push(`/resetpassword/${this.form.email}/${paramsotp}`);
        }, 1500);
      } catch (err) {
        console.error("error", err); // Log the error object, not 'object'
        if (err.response.status == 404) {
          toast.error("User does not exist", {
            autoClose: 1500,
          });
        }
      }
    },
    random4DigitNumber() {
      return Math.floor(1000 + Math.random() * 9000);
    },
  },
};
 -->
