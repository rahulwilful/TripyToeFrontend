<style scoped>
.main {
  padding-top: 5rem;
}

.card {
  background: rgb(125, 192, 255);
  width: 50rem;
}

.list {
  height: 3rem;
  border-radius: 5px;
}

#list:hover {
  transition: transform 0.3s ease-in-out;
  transform: translateY(-5px);
}
</style>

<template>
  <div class="main">
    <div class="d-flex justify-content-center align-items-center">
      <div>
        <div>
          <div>
            <h1 class="d-flex justify-content-center align-items-center">My Itinerarys</h1>
            <div class="pt-3">
              <div class="card">
                <div class="card-body bg-transparent">
                  <div class="bg-transparent">
                    <div class="bg-transparent">
                      <ol class="list-group bg-transparent">
                        <li class="list-group-item bg-transparent border border-secondary mb-2 align-middle">
                          <div class="list">
                            <div class="row bg-transparent" style="height: 100%; align-items: center">
                              <div class="col-3 col-sm-3 col-xl-3 col-lg-3 bg-transparent">
                                <h5 class="mb-1 text-dark bg-transparent d-flex">
                                  <strong><i class="bi bi-geo-alt-fill"></i> Destination</strong>
                                </h5>
                              </div>
                              <div class="col-3 col-sm-3 col-xl-3 col-lg-3 bg-transparent">
                                <p class="mb-1 text-dark d-flex bg-transparent">
                                  <strong><i class="bi bi-people-fill"></i> Peaple</strong>
                                </p>
                              </div>
                              <div class="col-3 col-sm-3 col-xl-3 col-lg-3 bg-transparent">
                                <p class="mb-1 text-dark d-flex bg-transparent">
                                  <strong><i class="bi bi-calendar-week-fill"> </i> Days</strong>
                                </p>
                              </div>
                              <div class="col-3 col-sm-3 col-xl-3 col-lg-3 bg-transparent">
                                <p class="mb-1 text-dark d-flex bg-transparent">
                                  <strong><i class="bi bi-cash-coin"></i> Budget</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li id="list" @click="getItinerary(item._id)" v-for="item in itinerarys" :key="item" class="list-group-item bg-transparent border border-secondary mb-2 align-middle">
                          <div class="list">
                            <div class="row bg-transparent" style="height: 100%; align-items: center">
                              <div class="col-3 col-sm-3 col-xl-3 col-lg-3 bg-transparent">
                                <h5 class="mb-1 text-dark bg-transparent d-flex">
                                  <span> {{ item.destination }}</span>
                                </h5>
                              </div>
                              <div class="col-3 col-sm-3 col-xl-3 col-lg-3 bg-transparent">
                                <p class="mb-1 text-dark d-flex bg-transparent">
                                  <span> {{ item.no_of_days }}</span>
                                </p>
                              </div>
                              <div class="col-3 col-sm-3 col-xl-3 col-lg-3 bg-transparent">
                                <p class="mb-1 text-dark d-flex bg-transparent">
                                  <span> {{ item.no_of_ppl }}</span>
                                </p>
                              </div>
                              <div class="col-3 col-sm-3 col-xl-3 col-lg-3 bg-transparent">
                                <p class="mb-1 text-dark d-flex bg-transparent">
                                  <span> {{ item.budget }}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ol>
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
</template>

<script>
import axiosClient from "../axiosClient";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  name: "My Itinerarys",
  data() {
    return {
      id: "",
      itinerarys: [],
      itineraryId: "",
      destination: "",
      no_of_days: 0,
      start_date: "",
      no_of_ppl: 0,
      preference: "",
      budget: 0,
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
      console.log(response);
      this.itinerarys = response.data.result;
      console.log(this.itinerarys);
    } catch (e) {
      console.log("error: ", e);
      this.$router.push("/login");
    }
  },

  methods: {
    async getItinerary(id) {
      this.itineraryId = id;
      console.log("getItinerary called");
      this.$router.push(`/itinerary/${this.id}/${this.itineraryId}`);
    },
  },
};
</script>
