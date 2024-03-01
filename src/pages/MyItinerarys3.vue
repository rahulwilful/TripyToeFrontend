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

.delete-button:hover {
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
    <div v-if="itineraryFlag">
      <div>
        <div>
          <div class="">
            <div class="container container-sm container-md container-lg container-xl container-xxl d-flex justify-content-center align-items-center pb-5">
              <div v-auto-animate class="">
                <div v-auto-animate class="card shadow-lg">
                  <div class="w-100">
                    <h1 class="d-flex justify-content-center align-items-center my-3" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)">My Itinerarys</h1>
                  </div>
                  <div class="card-body d-flex justify-content-around w-100">
                    <div class="w-25 d-flex justify-content-center">
                      <h5 class="mb-1 text-dark bg-transparent d-flex">
                        <strong><i class="bi bi-geo-alt-fill"></i> Destination</strong>
                      </h5>
                    </div>
                    <div class="w-25 d-flex justify-content-center">
                      <h5 class="mb-1 text-dark d-flex bg-transparent">
                        <strong><i class="bi bi-people-fill"></i> Peaple</strong>
                      </h5>
                    </div>

                    <div class="w-25 d-flex justify-content-center">
                      <h5 class="mb-1 text-dark d-flex bg-transparent">
                        <strong><i class="bi bi-cash-coin"></i> Budget</strong>
                      </h5>
                    </div>
                    <div class="w-25 d-flex justify-content-center">
                      <h5 class="mb-1 text-dark d-flex bg-transparent">
                        <strong><i class="bi bi-trash3"></i> Delete</strong>
                      </h5>
                    </div>
                  </div>
                </div>
                <!--  -->
                <div v-for="item in itinerarys" :key="item">
                  <div
                    v-if="item.leftSide == true"
                    v-motion
                    :initial="{ opacity: 0, x: -500 }"
                    :visible="{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 700,
                        type: 'keyframes',
                        ease: 'easeIn',
                      },
                    }"
                    :delay="100"
                    class="card card-hover shadow-lg mt-2 pe-auto"
                    style="cursor: pointer"
                  >
                    <div class="card-body d-flex justify-content-around w-100">
                      <div @click="getItinerary(item.itinerary._id)" class="w-25 d-flex justify-content-center">
                        <h5 class="mb-1 text-dark bg-transparent d-flex text-capitalize">
                          <span> {{ item.itinerary.destination }}</span>
                        </h5>
                      </div>

                      <div @click="getItinerary(item.itinerary._id)" class="w-25 d-flex justify-content-center">
                        <p class="mb-1 text-dark d-flex bg-transparent text-capitalize">
                          <span> {{ item.itinerary.no_of_ppl }}</span>
                        </p>
                      </div>
                      <div @click="getItinerary(item.itinerary._id)" class="w-25 d-flex justify-content-center">
                        <p class="mb-1 text-dark d-flex bg-transparent text-capitalize">
                          <span> {{ item.itinerary.budget }}</span>
                        </p>
                      </div>
                      <div class="w-25 d-flex justify-content-center">
                        <p class="mb-1 text-dark d-flex bg-transparent">
                          <span @click="deleteItinerary(item.itinerary._id)" class="pe-auto delete-button"> <i class="bi bi-trash3"></i> </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    v-if="item.leftSide == false"
                    v-motion
                    :initial="{ opacity: 0, x: 500 }"
                    :visible="{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 700,
                        type: 'keyframes',
                        ease: 'easeIn',
                      },
                    }"
                    :delay="100"
                    class="card card-hover shadow-lg mt-2 pe-auto"
                    style="cursor: pointer"
                  >
                    <div class="card-body d-flex justify-content-around w-100">
                      <div @click="getItinerary(item.itinerary._id)" class="w-25 d-flex justify-content-center">
                        <h5 class="mb-1 text-dark bg-transparent d-flex text-capitalize">
                          <span> {{ item.itinerary.destination }}</span>
                        </h5>
                      </div>

                      <div @click="getItinerary(item.itinerary._id)" class="w-25 d-flex justify-content-center">
                        <p class="mb-1 text-dark d-flex bg-transparent text-capitalize">
                          <span> {{ item.itinerary.no_of_ppl }}</span>
                        </p>
                      </div>
                      <div @click="getItinerary(item.itinerary._id)" class="w-25 d-flex justify-content-center">
                        <p class="mb-1 text-dark d-flex bg-transparent text-capitalize">
                          <span> {{ item.itinerary.budget }}</span>
                        </p>
                      </div>
                      <div class="w-25 d-flex justify-content-center">
                        <p class="mb-1 text-dark d-flex bg-transparent">
                          <span @click="deleteItinerary(item.itinerary._id)" class="pe-auto delete-button"> <i class="bi bi-trash3"></i> </span>
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
    <div v-if="!itineraryFlag" class="d-flex justify-content-center align-items-center" style="height: 100%">
      <h1 style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)">No Saved Itinerarys</h1>
    </div>
  </div>
</template>

<script>
import axiosClient from "../axiosClient";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  name: "My Itinerarys",
  data() {
    return {
      leftSide: true,
      id: "",
      itinerarys: [],
      itineraryId: "",
      destination: "",
      end_date: "",
      start_date: "",
      no_of_ppl: 0,
      preference: "",
      budget: 0,
      itineraryFlag: true,
      form: {
        id: "",
      },
    };
  },
  async created() {
    try {
      const token = await axiosClient.get("user/getcurrentuser/").catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          this.$router.push("/login");
        }
      });
      console.log("token", token);
      this.id = token.data.data._id;
      const response = await axiosClient.get(`user/getitinerarys/${this.id}`);
      console.log(response.data.result);
      const itinerarys = response.data.result;
      var flag = 1;
      for (let i in itinerarys) {
        if (flag == 1) {
          this.itinerarys.push({ itinerary: itinerarys[i], leftSide: true });
          flag = 0;
        } else {
          this.itinerarys.push({ itinerary: itinerarys[i], leftSide: false });
          flag = 1;
        }
      }

      console.log(this.itinerarys);
      if (this.itinerarys.length == 0) {
        this.itineraryFlag = false;
      }
      console.log(this.itinerarys);
      console.log("itineraryFlag : ", this.itineraryFlag);
    } catch (e) {
      console.log("error: ", e);
      this.$router.push("/login");
    }
  },

  methods: {
    async getItinerary(id) {
      this.itineraryId = id;
      console.log("getItinerary called");
      this.$router.push(`/itinerary/${this.itineraryId}`);
    },

    async deleteItinerary(id) {
      this.form.id = id;
      try {
        const response = await axiosClient.post(`user/deleteitinerarbyid/${id}`);
        if (response) {
          toast.success("Itinerary Deleted successfully", {
            autoClose: 1500,
          });

          this.itinerarys = this.itinerarys.filter((itinerary) => itinerary.itinerary._id != id);
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
