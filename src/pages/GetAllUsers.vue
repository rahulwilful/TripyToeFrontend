<style scoped>
.main {
  padding-top: 5rem;
  min-height: 100vh;
}

.card {
  background: #ffffff;
  width: 70vw;
  max-width: 1000px;
}

.list {
  height: 7vh;
  border-radius: 5px;
}

#list:hover {
  transition: transform 0.3s ease-in-out;
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.card-hover:hover {
  background: #f1f1f1;
  transition: transform 0.2s ease-in-out;
  transform: scale(1.02, 1.02);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.hover-icon:hover {
  transition: transform 0.3s ease-in-out;
  transform: translateY(-5px);
}

@media (max-width: 900px) {
  .card {
    background: #ffffff;
    width: 90vw;
  }
  strong {
    font-size: 3vw;
  }
  i {
    display: none;
  }
  span {
    font-size: 3vw;
  }
}

@media (max-width: 600px) {
  .card {
    background: #ffffff;
    width: 90vw;
  }
  strong {
    font-size: 3vw;
  }
  i {
    display: none;
  }
  span {
    font-size: 3vw;
  }
  .list {
    height: 5vh;
    border-radius: 5px;
  }
}

@media (max-width: 600px) {
  .card {
    background: #ffffff;
    width: 90vw;
  }
  strong {
    font-size: 3.3vw;
  }
  i {
    display: none;
  }
  span {
    font-size: 3.3vw;
  }
  .list {
    height: 4vh;
    border-radius: 5px;
  }
}

.fade-in {
  animation: fade-in linear;
  /* animation-timeline: view(100% 0%); */
  animation-timeline: view();
  animation-duration: 3s;
  animation-range-start: cover;
  animation-range-end: cover;
}

@keyframes fade-in {
  0% {
    scale: 0;
    opacity: 0;
  }
  10% {
    scale: 1;
    opacity: 1;
  }
  100% {
    scale: 1;
    opacity: 1;
  }
}
</style>

<template>
  <div v-auto-animate class="main bg-body-secondary">
    <div v-if="usersFlag">
      <div>
        <div>
          <div class="">
            <div class="container container-sm container-md container-lg container-xl container-xxl d-flex justify-content-center align-items-center pb-5">
              <div v-auto-animate class="">
                <div v-auto-animate class="card shadow-lg">
                  <div class="w-100">
                    <h1 class="d-flex justify-content-center align-items-center my-3" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)">All Users</h1>
                  </div>
                  <div>
                    <div class="row gap-2 px-3">
                      <div class="col-6 col-sm-3">
                        <input type="text" id="inputPassword6" class="form-control border border-dark" @change="searchAtChange" v-model="searchName" placeholder="Enter Name" aria-describedby="passwordHelpInline" />
                      </div>
                      <div class="col-6 col-sm-3">
                        <button type="button" @click="searchAtClick" class="btn btn-dark">Search</button>
                      </div>
                      <div class="col-6 col-sm-3 d-none d-sm-block"></div>
                    </div>
                  </div>
                  <div class="card-body d-flex justify-content-around w-100">
                    <div class="w-25 d-flex justify-content-center">
                      <h5 class="mb-1 text-dark bg-transparent d-flex">
                        <strong><i class="bi bi-person-badge"></i> Profile</strong>
                      </h5>
                    </div>
                    <div class="w-25 d-flex justify-content-center">
                      <h5 class="mb-1 text-dark bg-transparent d-flex">
                        <strong><i class="bi bi-person-fill"></i> Name</strong>
                      </h5>
                    </div>
                    <div class="w-25 d-flex justify-content-center">
                      <h5 class="mb-1 text-dark d-flex bg-transparent">
                        <strong><i class="bi bi-envelope"></i> Email</strong>
                      </h5>
                    </div>

                    <div class="w-25 d-flex justify-content-center">
                      <h5 class="mb-1 text-dark d-flex bg-transparent">
                        <strong><i class="bi bi-tools fw-bold"></i> Action</strong>
                      </h5>
                    </div>
                  </div>
                </div>
                <!--  -->
                <div v-auto-animate v-for="item in users" :key="item">
                  <div v-if="item.active == true" v-auto-animate class="card card-hover shadow-lg mt-2 pe-auto" style="cursor: pointer">
                    <div v-auto-animate class="card-body d-flex justify-content-around w-100">
                      <div @click="getUser(item._id)" class="w-25 d-flex justify-content-center">
                        <h5 class="mb-1 text-dark bg-transparent d-flex text-capitalize">
                          <span v-if="item.profile"> <img :src="item.profile" class="img-account-profile rounded-circle" alt="" style="width: 33px; height: 33px; object-fit: cover" /></span>
                          <span v-else> <img src="../assets/profile-circle copy.svg" style="width: 33px; height: 33px; object-fit: cover" /> </span>
                        </h5>
                      </div>
                      <div @click="getUser(item._id)" class="w-25 d-flex justify-content-center">
                        <h5 class="mb-1 text-dark bg-transparent d-flex text-capitalize">
                          <span> {{ item.name }}</span>
                        </h5>
                      </div>

                      <div @click="getUser(item._id)" class="w-25 d-flex justify-content-center">
                        <p class="mb-1 text-dark d-flex bg-transparent text-capitalize">
                          <span v-if="item.email"> {{ item.email }}</span>
                          <span v-else> </span>
                        </p>
                      </div>

                      <div class="w-25 d-flex justify-content-center">
                        <p class="mb-1 text-dark d-flex bg-transparent gap-2">
                          <span @click="deleteUser(item._id)" class="pe-auto hover-icon"> <i class="bi bi-trash3"></i> </span>
                          <span @click="getItinerarysByUser(item._id)" class="pe-auto hover-icon"><i class="bi bi-body-text"></i></span>
                          <span @click="getSearchedByUser(item._id)" class="pe-auto hover-icon"><i class="bi bi-search"></i></span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
                  <div v-else v-auto-animate class="card card-hover bg-danger shadow-lg mt-2 pe-auto" style="cursor: pointer">
                    <div v-auto-animate class="card-body d-flex justify-content-around w-100">
                      <div @click="getUser(item._id)" class="w-25 d-flex justify-content-center">
                        <h5 class="mb-1 text-dark bg-transparent d-flex text-capitalize">
                          <span v-if="item.profile"> <img :src="item.profile" class="img-account-profile rounded-circle" alt="" style="width: 33px; height: 33px; object-fit: cover" /></span>
                          <span v-else> <img src="../assets/profile-circle copy.svg" style="width: 33px; height: 33px; object-fit: cover" /> </span>
                        </h5>
                      </div>
                      <div @click="getUser(item._id)" class="w-25 d-flex justify-content-center">
                        <h5 class="mb-1 text-dark bg-transparent d-flex text-capitalize">
                          <span> {{ item.name }}</span>
                        </h5>
                      </div>

                      <div @click="getUser(item._id)" class="w-25 d-flex justify-content-center">
                        <p class="mb-1 text-dark d-flex bg-transparent text-capitalize">
                          <span v-if="item.email"> {{ item.email }}</span>
                          <span v-else> </span>
                        </p>
                      </div>

                      <div class="w-25 d-flex justify-content-center">
                        <p class="mb-1 text-dark d-flex bg-transparent">
                          <span @click="deleteUser(item._id)" class="pe-auto hover-icon"> <i class="bi bi-arrow-counterclockwise"></i> </span>
                          <span @click="getItinerarysByUser(item._id)" class="pe-auto hover-icon"><i class="bi bi-body-text"></i></span>
                          <span @click="getSearchedByUser(item._id)" class="pe-auto hover-icon"><i class="bi bi-search"></i></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!usersFlag" class="d-flex justify-content-center align-items-center" style="height: 100%">
      <h1 style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)">No Users</h1>
    </div>
  </div>
</template>

<script>
import axiosClient from "../axiosClient";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  name: "GetAllUsers",
  data() {
    return {
      leftSide: true,
      id: "",
      tempUsers: [],
      users: [],
      user_id: "",
      name: "",
      email: "",
      profile_url: "",
      preference: "",
      budget: 0,
      usersFlag: true,
      searchName: "",
      form: {
        id: "",
      },
    };
  },
  async created() {
    try {
      const user = await axiosClient.get("user/getcurrentuser/").catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          this.$router.push("/login");
        }
      });

      this.id = user.data.data._id;

      const role_name = user.data.data.role_type.name;

      if (role_name != "super_admin") {
        this.$router.push("/home");
      }

      const response = await axiosClient.get(`user/getallusers`);
      console.log(response);
      for (let i in response.data) {
        if (response.data[i]._id != this.id) {
          this.users.push(response.data[i]);
        }
      }

      /*  this.users = response.data;
      this.uers = this.users.filter((user) => user._id == this.id); */
      this.tempUsers = this.users;
      console.log(this.users);
      if (this.users.length == 0) {
        this.usersFlag = false;
      }
      console.log("users: ", this.users);
      console.log("usersFlag : ", this.usersFlag);
    } catch (e) {
      console.log("error: ", e);
    }
  },

  methods: {
    searchAtChange() {
      console.log("searchAtChange Called");
      this.users = this.tempUsers.filter((user) => user.name.toLowerCase().includes(this.searchName.toLowerCase()));
    },

    async searchAtClick() {
      if (this.searchName == "") {
        toast.info(`Enter name`, {
          autoClose: 1500,
        });
      }
      const form = { name: this.searchName };
      console.log("searchAtClick Called: ", form);
      try {
        const response = await axiosClient.post(`user/search-byname`, form);
        console.log("rsponse", response);
        if (response.data.result.length == 0) {
          toast.info(`No user found with name "${this.searchName}"`, {
            autoClose: 1500,
          });
          this.searchName = "";
          this.users = this.tempUsers;
          return;
        }
        this.users = [];

        for (let i in response.data.result) {
          if (response.data.result[i]._id != this.id) {
            this.users.push(response.data.result[i]);
          }
        }
      } catch (err) {
        toast.error(`something went wrong`, {
          autoClose: 1500,
        });
      }
    },

    getUser(userId) {
      console.log("id: ", userId);
      this.$router.push(`getuser/${userId}`);
    },
    async getItinerarysByUser(userId) {
      console.log("getItinerarysByUser called", userId);
      this.$router.push(`/get-itinerarysbyuser/${userId}`);
    },

    async getSearchedByUser(userId) {
      console.log("getSearchedByUser called", userId);
      this.$router.push(`/get-searched/${userId}`);
    },

    async deleteUser(id) {
      this.form.id = id;
      try {
        const response = await axiosClient.post(`user/delete/${id}`);
        if (response) {
          for (let i in this.users) {
            if (this.users[i]._id == id) {
              this.users[i].active = !this.users[i].active;
              if (this.users[i].active == true) {
                toast.success("User Restored successfully", {
                  autoClose: 1500,
                });
              } else {
                toast.success("User Deleted successfully", {
                  autoClose: 1500,
                });
              }
            }
          }
        }
      } catch (err) {
        console.log("error : ", err);
        toast.error("Something Went Wrong", {
          autoClose: 1500,
        });
      }

      console.log("Id : ", id);
    },
  },
};
</script>
