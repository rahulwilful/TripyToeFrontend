<style scoped>
.main {
  padding-top: 5rem;
}

.card {
  background: linear-gradient(to right, #575757, #a0a0a0);
  width: 50rem;
}

.list {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  height: 3rem;
  border-radius: 5px;
}

@media (max-width: 576px) {
  .main {
    height: auto; /* Adjust height for small screens */
  }
  .card {
    background: linear-gradient(to right, #713ffa, #2289ff);
    width: 25rem;
  }
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
                        <li @click="getItinerary(item._id)" v-for="item in itinerarys" :key="item" class="list-group-item bg-transparent border border-0 align-middle">
                          <div class="list">
                            <div class="row bg-transparent" style="height: 100%; align-items: center">
                              <div class="col-3 col-sm-3 col-xl-3 col-lg-3 bg-transparent">
                                <h5 class="mb-1 text-light bg-transparent d-flex"><strong>Name:</strong> {{ item.destination }}</h5>
                              </div>
                              <div class="col-3 col-sm-3 col-xl-3 col-lg-3 bg-transparent">
                                <p class="mb-1 text-light d-flex bg-transparent"><strong>Department:</strong> {{ item.no_of_days }}</p>
                              </div>
                              <div class="col-3 col-sm-3 col-xl-3 col-lg-3 bg-transparent">
                                <p class="mb-1 text-light d-flex bg-transparent"><strong>Role:</strong> {{ item.no_of_ppl }}</p>
                              </div>
                              <div class="col-3 col-sm-3 col-xl-3 col-lg-3 bg-transparent">
                                <p class="mb-1 text-light d-flex bg-transparent"><strong>Role:</strong> {{ item.budget }}</p>
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
