<style scoped>
#dropdown-button {
  border: none;
}

nav {
  padding-right: 1vw;
  padding-left: 1vw;
}

.custom-dropdown-menu {
  width: 50%; /* Set the desired width, in this case, 90% of the original width */
}
</style>

<template>
  <nav class="navbar navbar-expand-lg bg-transparent fixed-top" data-bs-theme="dark">
    <div class="container-fluid navbar-container">
      <router-link class="navbar-brand" to="/home">
        <img src="../assets/LOGO.png" alt="" style="width: 150px; height: auto" />
      </router-link>
      <div class="my-profile">
        <div class="dropdown dropstart">
          <button class="btn btn-secondary dropdown-toggle bg-transparent border-transparent" id="dropdown-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img v-if="form.profile" class="img-account-profile rounded-circle mb-2" :src="form.profile" alt="Profile Picture" style="width: 33px; height: 33px; object-fit: cover" />
            <img v-else src="../assets/profile-circle copy.svg" />
          </button>
          <ul class="dropdown-menu dropdown-menu-dark border border-dark">
            <li>
              <div class="">
                <router-link class="dropdown-item" to="/myaccount">My Account</router-link>
              </div>
            </li>
            <li>
              <div class="">
                <router-link class="dropdown-item" to="/myitinerarys">My Itinerarys</router-link>
              </div>
            </li>
            <li v-if="role_name == 'super_admin' || role_name == 'admin'">
              <div class="">
                <router-link class="dropdown-item" to="/add-destination">Add Destination</router-link>
              </div>
            </li>
            <li v-if="role_name == 'super_admin'">
              <div class="">
                <router-link class="dropdown-item" to="/getallusers">All Users</router-link>
              </div>
            </li>

            <li><hr class="dropdown-divider" /></li>
            <li>
              <div class="dropdown-item">
                <button class="btn btn-danger me-md-3 mr-1" v-on:click="logout"><i class="bi bi-box-arrow-right"></i>Logout</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axiosClient from "../axiosClient";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "Navbar",
  data() {
    return {
      form: {
        name: "",
        role_type: "",
        profile: "",
      },
      id: "",
      newUsers: [],
      newUserCount: 0,
      profile_url: "",
      role_name: "",
    };
  },

  async created() {
    const auth = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    try {
      const user = await axiosClient.get("user/getcurrentuser/").catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          this.$router.push("/login");
        }
      });
      if (user) {
        this.id = user.data.data._id;
        this.role_name = user.data.data.role_type.name;
      }

      const userDetails = await axiosClient.get(`user/get/${this.id}`).catch((err) => {
        console.log(err);
        this.$router.push("/login");
      });
      if (userDetails) {
        this.form.name = userDetails.data.name;
        this.form.profile = userDetails.data.profile;

        console.log(this.form.profile);
      }

      const profile_url = await axiosClient.get(`config/`).catch((err) => {
        console.log(err);
      });
      this.profile_url = profile_url.data.result[0].profile_url;
      /* console.log(this.profile_url); */
    } catch (e) {
      console.log("error: ", e);
    }
  },

  methods: {
    async approveUser(id) {
      try {
        const userDetails = await axiosClient.post(`user/approveuser/${id}`).catch((err) => {
          console.log(err);
        });
        this.newUsers = this.newUsers.filter((user) => user._id !== id);
        this.newUserCount--;
        toast.success("approved " + userDetails.data.result.name, {
          autoClose: 1500,
        });
      } catch {
        toast.error("Something went wrong", {
          autoClose: 1500,
        });
        console.log("error: ", e);
      }
    },

    logout() {
      const token = localStorage.getItem("token");
      console.log("token: ", token);
      if (!token) {
        toast.error("You Are Already Logged Out", {
          autoClose: 1500,
        });
        setTimeout(() => {
          this.$router.push("/login");
        }, 1500);
      } else {
        localStorage.removeItem("token");
        toast.info("Log Out Sucessfull", {
          autoClose: 1500,
        });
        setTimeout(() => {
          this.$router.push("/login");
        }, 1500);
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  position: absolute;
  width: 100%;
  z-index: 1000;
  border: none;
}

.navbar-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
  z-index: -1;
}
</style>
