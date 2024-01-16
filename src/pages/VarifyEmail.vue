<template>
  <div class="main">
    <div class="container">
      <div v-if="isVarified" class="container-fluid d-flex justify-content-center align-items-center vh-100">
        <h1>Email Varification Successfull</h1>
      </div>
    </div>
  </div>
</template>
<script>
import axiosClient from "../axiosClient";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "VarifyEmail",
  props: {
    id: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isVarified: false,
      isLoggedIn: false,
    };
  },
  async created() {
    if (localStorage.getItem("token")) {
      this.isLoggedIn = true;
    }
    try {
      const user = await axiosClient.post(`user/varifyemail/${this.id}/${this.token}`);
      console.log(user);

      //checking if email verified

      this.isVarified = true;
      toast.success("Email varification successfull", {
        autoClose: 1500,
      });
      if (this.isLoggedIn) {
        setTimeout(() => {
          this.$router.push("/myaccount");
        }, 1500);
      } else {
        setTimeout(() => {
          this.$router.push("/login");
        }, 1500);
      }
    } catch (err) {
      if (err.response.status == 400) {
        toast.error("Unauthorised user", {
          autoClose: 1500,
        });
      }

      if (err.response.status == 404) {
        toast.error("Varification Link Expired", {
          autoClose: 1500,
        });
      } else {
        toast.error("Something went wrong", {
          autoClose: 1500,
        });
      }
      console.log("error", err);
      if (this.isLoggedIn) {
        setTimeout(() => {
          this.$router.push("/myaccount");
        }, 1500);
      } else {
        setTimeout(() => {
          this.$router.push("/login");
        }, 1500);
      }
    }
  },
};
</script>
