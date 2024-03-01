<style scoped>
::-webkit-scrollbar {
  margin-bottom: 1rem;
  width: 5px; /* Set the width of the scrollbar */
  height: 10px; /* Set the height of the scrollbar */
}
::-webkit-scrollbar-track {
  margin-bottom: 1rem;
  background: #d1e5ff;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(to right, #642bff, #ff22e6);
  border-radius: 5px;
}

.main {
  height: 100vh;
  width: 100%;
}

.card {
  width: 8.5rem;
  height: 12rem;
  position: relative;
  overflow: hidden;
  /* box-shadow: 0px 20px 20px 10px rgba(0, 0, 0, 0.1); */
}
.itinerary-day-box {
  font-weight: 700;
  font-family: "__Sora_5b1d51", "__Sora_Fallback_5b1d51";
  font-size: 0.7rem;
}
.day-heading {
  color: rgb(94, 28, 201);
  font-weight: 10;
}

.day-heading-btn {
  background: rgb(141, 97, 187);
  border: none;
  border-radius: 10px;
  font-weight: 500;
}

.day-heading-subject h4 {
  color: rgb(94, 28, 201);
  font-weight: 500;
}
.itinerary {
  border-top: 2px solid rgba(150, 108, 214, 0.9);
  border-bottom: 2px solid rgba(150, 108, 214, 0.9);
  width: 57%;
  height: auto;
}
.itinery-box {
  width: 75%;
  height: auto;
}

.Itinerary-header-info {
  width: 95%;
  background-color: rgba(111, 72, 170, 0.9);
  height: 100%;
}

@media (max-width: 576px) {
  .itinery-box {
    width: 95%;
    height: auto;
  }
  .itinerary {
    width: 99%;
    height: auto;
  }
  .Itinerary-header-info {
    width: 95%;

    background-color: rgba(111, 72, 170, 0.9);
    height: 100%;
  }
  .day-heading-btn {
    height: 30%;
  }
}

@media (min-width: 576px) {
  .itinery-box {
    width: 90%;
    height: auto;
  }
  .itinerary {
    width: 90%;
    height: auto;
  }
  .Itinerary-header-info {
    width: 90%;

    background-color: rgba(111, 72, 170, 0.9);
    height: 100%;
  }
  .day-heading-btn {
    height: 40%;
  }
}

@media (min-width: 768px) {
  .itinery-box {
    width: 90%;
    height: auto;
  }
  .itinerary {
    width: 80%;
    height: auto;
  }
  .Itinerary-header-info {
    width: 80%;

    background-color: rgba(111, 72, 170, 0.9);
    height: 100%;
  }
  .day-heading-btn {
    height: 45%;
  }
}

@media (min-width: 992px) {
  .itinery-box {
    width: 90%;
    height: auto;
  }
  .itinerary {
    width: 70%;
    height: auto;
  }

  .Itinerary-header-info {
    width: 70%;

    background-color: rgba(111, 72, 170, 0.9);
    height: 100%;
  }

  .day-heading-btn {
    height: 50%;
  }
}

@media (min-width: 1200px) {
  .itinery-box {
    width: 90%;
    height: auto;
  }
  .itinerary {
    width: 57%;
    height: auto;
  }

  .Itinerary-header-info {
    width: 50%;

    background-color: rgba(111, 72, 170, 0.9);
    height: 100%;
  }
  .day-heading-btn {
    height: 50%;
  }
}

.itinerarys {
  animation: fade-in linear;

  /* animation-timeline: view(100% 0%); */
  animation-timeline: view();

  animation-range-start: cover;
  animation-range-end: cover;
}

@keyframes fade-in {
  /* from {
    scale: 0.8;
    opacity: 0;
  }
  to {
    scale: 1;
    opacity: 1;
  } */

  0% {
    scale: 0;
    opacity: 0;
  }
  30% {
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
  <div class="main">
    <div class="">
      <div>
        <div class="">
          <div class="d-flex justify-content-center align-items-center">
            <div class="" style="height: 60vh; width: 100%">
              <div id="carouselExampleAutoplaying" class="carousel slide" style="height: 100%" data-bs-ride="carousel">
                <div v-auto-animate class="carousel-inner" style="height: 100%; position: relative">
                  <div class="carousel-item active" style="height: 100%">
                    <img :src="searchedImgSource + destination + night" class="d-block w-100" style="object-fit: cover; height: 100%" alt="..." />
                  </div>
                  <div class="carousel-item" style="height: 100%">
                    <img :src="searchedImgSource + destination + morning" class="d-block w-100" style="object-fit: cover; height: 100%" alt="..." />
                  </div>
                  <div class="carousel-item" style="height: 100%">
                    <img :src="searchedImgSource + destination + evening" class="d-block w-100" style="object-fit: cover; height: 100%" alt="..." />
                  </div>
                  <div class="h-100 w-100 py-3" style="position: absolute">
                    <div class="w-100 h-50 d-flex justify-content-center align-items-center">
                      <span>
                        <h2 class="text-light fw-semibold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); text-transform: capitalize">Vacation In {{ destination }}</h2>
                      </span>
                    </div>
                    <div class="h-50">
                      <div class="d-flex justify-content-center h-100 align-items-center">
                        <div class="Itinerary-header-info rounded-5 mb-2 h-100 px-4 py-3 shadow-lg">
                          <div class="h-100">
                            <div class="w-100 h-25 d-flex justify-content-center text-light align-items-center">
                              <div v-auto-animate>
                                <h2 v-if="card == 0" class="d-flex justify-content-center align-items-center text-light">Location</h2>
                                <h2 v-if="card == 1" class="d-flex justify-content-center align-items-center text-light">Wheather</h2>
                                <h2 v-if="card == 2" class="d-flex justify-content-center align-items-center text-light">Price</h2>
                                <h2 v-if="card == 3" class="d-flex justify-content-center align-items-center text-light">Language</h2>
                              </div>
                            </div>
                            <div class="w-100 h-50 overflow-y-scroll px-2 d-flex justify-content-center text-light align-items-start">
                              <div v-auto-animate class="">
                                <div v-if="card == 0" class="" style="text-align: justify">
                                  <div>Goa is known for its beautiful beaches, vibrant nightlife, and rich Portuguese heritage. It's a popular tourist destination, so be prepared for crowds, especially during peak season</div>
                                </div>
                                <div v-if="card == 1" class="" style="text-align: justify">
                                  <div>
                                    Goa has a tropical monsoon climate. The weather is hot and humid throughout the year. In the winter (November to February), temperatures range from 70-90°F (20-32°C) with little to no rainfall. In the summer (March to May), temperatures can soar above 100°F (38°C)
                                    with high humidity. The monsoon season (June to September) brings heavy rainfall.
                                  </div>
                                </div>
                                <div v-if="card == 2" class="" style="text-align: justify">
                                  <div>The currency in Goa is the Indian Rupee (INR). The average cost of a cup of coffee is around 100-150 INR, which is approximately $1.50-2.00 USD.</div>
                                </div>
                                <div v-if="card == 3" class="" style="text-align: justify">
                                  <div>The dominant languages spoken in Goa are Konkani and Marathi, but English is widely understood and spoken due to the tourism industry.</div>
                                </div>
                              </div>
                            </div>
                            <div class="w-100 h-25 d-flex justify-content-center text-light align-items-center">
                              <div class="">
                                <div class="d-flex">
                                  <div v-auto-animate>
                                    <span v-if="card == 0" @click="card = 0" class="border border-light p-2 mx-2 rounded-circle d-flex justify-content-center align-items-center bg-light" style="width: 1.8rem; height: 1.8rem; cursor: pointer"><i class="bi bi-geo-alt-fill text-dark"></i></span>
                                    <span v-else @click="card = 0" class="border border-light p-2 mx-2 rounded-circle d-flex justify-content-center align-items-center" style="width: 1.8rem; height: 1.8rem; cursor: pointer"><i class="bi bi-geo-alt-fill text-light"></i></span>
                                  </div>
                                  <div v-auto-animate>
                                    <span v-if="card == 1" @click="card = 1" class="border border-light p-2 mx-2 rounded-circle d-flex justify-content-center align-items-center bg-light" style="width: 1.8rem; height: 1.8rem; cursor: pointer"><i class="bi bi-cloud-sun-fill text-dark"></i></span>
                                    <span v-else @click="card = 1" class="border border-light p-2 mx-2 rounded-circle d-flex justify-content-center align-items-center" style="width: 1.8rem; height: 1.8rem; cursor: pointer"><i class="bi bi-cloud-sun-fill text-light"></i></span>
                                  </div>
                                  <div v-auto-animate>
                                    <span v-if="card == 2" @click="card = 2" class="border border-light p-2 mx-2 rounded-circle d-flex justify-content-center align-items-center bg-light" style="width: 1.8rem; height: 1.8rem; cursor: pointer"><i class="bi bi-currency-dollar text-dark"></i></span>
                                    <span v-else @click="card = 2" class="border border-light p-2 mx-2 rounded-circle d-flex justify-content-center align-items-center" style="width: 1.8rem; height: 1.8rem; cursor: pointer"><i class="bi bi-currency-dollar text-light"></i></span>
                                  </div>
                                  <div v-auto-animate>
                                    <span v-if="card == 3" @click="card = 3" class="border border-light p-2 mx-2 rounded-circle d-flex justify-content-center align-items-center bg-light" style="width: 1.8rem; height: 1.8rem; cursor: pointer"><i class="bi bi-wechat text-dark"></i></span>

                                    <span v-else @click="card = 3" class="border border-light p-2 mx-2 rounded-circle d-flex justify-content-center align-items-center" style="width: 1.8rem; height: 1.8rem; cursor: pointer"><i class="bi bi-wechat text-light"></i></span>
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
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center my-3 my-sm-3 my-md-3 my-lg-4 my-xl-5 my-xxl-5 position-relative">
          <div class="position-absolute start-0 top-0">
            <button @click="goBack()" style="background-color: rgb(123, 84, 163); border: none" type="button" class="px-3 py-1 rounded ms-3 text-light fw-semibold"><i class="bi bi-arrow-left"></i></button>
          </div>
          <div class="position-absolute end-0">
            <button @click="saveUpdatedItinerary()" style="background-color: rgb(123, 84, 163); border: none" type="button" class="px-3 px-sm-3 px-md-3 px-lg-3 px-xl-3 px-xxl-3 py-1 py-sm-1 py-md-1 py-lg-1 py-xl-1 py-xxl-1 rounded me-2 me-sm-3 text-light fw-semibold">Save</button>
          </div>
          <div>
            <h5 class="d-flex justify-content-center">Starting date</h5>
            <button style="background-color: rgb(123, 84, 163); border: none" type="button" class="px-3 rounded-pill text-light fw-semibold">{{ start_date }} <i class="bi bi-calendar2-week"></i></button>
          </div>
        </div>

        <div>
          <div>
            <div v-for="day in itinerary" :key="day" class="itinerarys pb-3">
              <div class="itinerary my-3 mb-sm-3 mb-md-3 mb-lg-4 mb-xl-5 mb-xxl-5 container container-sm container-md container-lg container-xl container-xxl rounded-4 d-flex justify-content-center" style="background-color: rgb(238, 233, 248)">
                <div class="itinery-box rounded mx-0 mx-sm-1 mx-md-2 mx-lg-4 mx-xl-5 mx-xxl-5">
                  <div class="itinerary-heading w-100 my-2 my-3">
                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start">
                        <h1 class="day-heading">{{ day.day.day_no }}</h1>
                      </div>
                      <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start">
                        <div class="day-heading-subject">
                          <h4 class="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start">{{ day.day_sub }}</h4>
                          <h6 class="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start">{{ day.other_detail }}</h6>
                        </div>
                      </div>
                      <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-around justify-content-xl-around justify-content-xxl-around align-items-end">
                        <button v-if="!day.modify" @click="day.modify = true" type="button" style="background-color: rgb(141, 97, 187); border: none" class="px-2 rounded-pill text-light mx-1 fw-semibold">Modify</button>
                        <button v-if="day.modify" @click="day.modify = false" type="button" style="background-color: rgb(141, 97, 187); border: none" class="px-2 rounded-pill text-light mx-1 fw-semibold">Done</button>

                        <button type="button" style="background-color: rgb(141, 97, 187); border: none" class="px-2 rounded-pill text-light mx-1 fw-semibold">Regenerate</button>
                      </div>
                    </div>
                  </div>
                  <div class="itinerary-day-box w-100 bg-light rounded-4 my-2 p-3 p-sm-3 p-md-3 p-lg-3 p-xl-4 p-xxl-4 my-3" style="box-shadow: 0px 5px 7px 4px rgba(0, 0, 0, 0.1)">
                    <div v-for="dayActivities in day.day.activities" :key="dayActivities" class="w-100 h-100">
                      <div class="py-1 fs-6" style="text-align: justify">
                        <span
                          ><strong class="fw-semibold">{{ dayActivities.activity_time }} : </strong></span
                        ><span v-if="!day.modify" class="fw-normal" v-html="highlightEntities(dayActivities.activity)"> </span>
                        <span v-if="day.modify" class="fw-normal"
                          ><input type="text" class="form-control form-control-sm border-0 border-bottom border-secondary-subtle rounded-3 shadow" v-model="dayActivities.activity" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="w-100 my-3">
                    <div class="">
                      <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
                        <Slide v-for="name in name_entity" :key="name" class="pe-auto">
                          <router-link to="#" class="">
                            <div class="">
                              <div id="card" class="card text-bg-dark">
                                <img :src="imgSource + name" class="img-fluid" alt="..." style="width: 100%; height: 100%; object-fit: cover" />

                                <div class="" style="width: 100%; height: 100%; position: absolute; bottom: 0; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 44%, rgba(0, 0, 0, 0.77) 100%)">
                                  <div class="position-relative">
                                    <div class="ratings position-absolute top-0 end-0">
                                      <div class="mx-2 mt-2">
                                        <span class="px-2 py-1 rounded shadow-lg" style="background-color: #a95fe8">4.4</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="mb-2" style="width: 100%; position: absolute; bottom: 0">
                                    <p class="card-text text-center" style="overflow: hidden; text-transform: capitalize">{{ name }}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </router-link>
                        </Slide>
                        <template #addons>
                          <Navigation />
                        </template>
                      </Carousel>
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
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "Itinerary3",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      modify: false,
      night: ",night",
      morning: ",morning",
      evening: " ,evening",
      card: 0,
      dayCount: 0,
      destination: "",
      no_of_days: null,
      start_date: "",
      no_of_ppl: null,
      preference: "",
      budget: null,
      itinerary: [],
      form: {
        itineraryDays: [],
      },
      searchedImgSource: "https://source.unsplash.com/1400x720/?",
      name_entity: ["Arambol Beach", "Pandava caves ", "Anjuna Flea Market", "Mandovi River", "Chapora river", "Dudhsagar Falls", "panaji", "margao", "mapusa", "bicholim", "calangut", "baga", "waghature", "anjuna"],
      imgSource: "https://source.unsplash.com/1400x720/?goa,white",

      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 300px and up
        0: {
          itemsToShow: 1.5,
          snapAlign: "center",
        },
        280: {
          itemsToShow: 1.7,
          snapAlign: "center",
        },
        330: {
          itemsToShow: 2,
          snapAlign: "center",
        },

        // 400px and up
        400: {
          itemsToShow: 2.5,
          snapAlign: "center",
        },
        500: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        600: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        768: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        // 1024 and up
        992: {
          itemsToShow: 3.5,
          snapAlign: "start",
        },
        1100: {
          itemsToShow: 4,
          snapAlign: "center",
        },
        1250: {
          itemsToShow: 4.5,
          snapAlign: "center",
        },
        2000: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },

  props: {
    itineraryid: {
      type: String,
      required: true,
    },
  },

  async created() {
    console.log(" itineraryid ", this.itineraryid);
    try {
      const response = await axiosClient.get(`user/getitinerarybyid/${this.itineraryid}`);
      console.log(response);
      this.destination = response.data.result.destination;
      const date = response.data.result.start_date;
      this.no_of_days = response.data.result.no_of_days;
      this.no_of_ppl = response.data.result.no_of_ppl;
      this.preference = response.data.result.preference;
      this.budget = response.data.result.budget;
      this.form.itineraryDays = response.data.result.itineraryDays;
      const itinerary = response.data.result.itineraryDays;
      const itinerary2 = [];

      for (let i in itinerary) {
        itinerary2.push({ day: itinerary[i], modify: false });
      }
      console.log(itinerary2);
      this.itinerary = itinerary2;
      const rawDate = response.data.result.start_date;
      //const formattedDate = new Date(rawDate).toLocaleDateString();
      this.start_date = date.slice(0, 10);

      console.log(this.form.itineraryDays);
    } catch (error) {
      console.log("error: ", error);
      if (error.response.status == 404) {
        toast.error(`Itinerary does not exist`, {
          autoClose: 1500,
        });
      } else {
        toast.error(`Something went wrong`, {
          autoClose: 1500,
        });
      }
    }

    this.startCards();
  },

  methods: {
    countDay() {
      if (this.dayCount < this.form.itineraryDays.length) {
        console.log("beforeCal :", this.dayCount);
        this.dayCount = this.dayCount + 1;
        console.log("afterCal :", this.dayCount);

        return this.dayCount;
      }
    },

    highlightEntities(line) {
      // Check if 'line' is defined
      if (line === undefined || line === null) {
        console.error("Input 'line' is undefined or null.");
        return line;
      }

      // Highlight entities in the line using name_entity array
      for (const entity of this.name_entity) {
        const regex = new RegExp(`\\b${entity}\\b`, "gi");

        // Log each replacement to see what's happening

        line = line.replace(regex, `<span style="color: rgb(94, 28, 201);text-decoration:underline;cursor: pointer; text-transform:capitalize">${entity}</span>`);
      }
      return line;
    },

    /* highlightEntities(line) {
      // Highlight entities in the line using name_entity array
      for (const entity of this.name_entity) {
        const regex = new RegExp(`\\b${entity}\\b`, "gi");
        line = line.replace(regex, `<span style="color: blue">${entity}</span>`);
      }
      return line;
    }, */

    async saveUpdatedItinerary() {
      console.log("saveUpdatedItinerary called");
      try {
        console.log("form : ", this.form);
        const response = await axiosClient.post(`user/updateitinerarbyid/${this.itineraryid}`, this.form);
        toast.info("Itinerary Updated", {
          autoClose: 1500,
        });
        console.log(response);
      } catch (err) {
        console.log(err);
        toast.error("Something went Wrong", {
          autoClose: 1500,
        });
      }
    },

    startCards() {
      setInterval(() => {
        if (this.card < 3) {
          this.card++;
        } else {
          this.card = 0;
        }
      }, 4000);
    },

    goBack() {
      this.$router.push("/myitinerarys");
    },
  },
};
</script>
