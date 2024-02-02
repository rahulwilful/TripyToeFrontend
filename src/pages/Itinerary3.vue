<style scoped>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #d1e5ff;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(#2860fc, #42aaff);
  border-radius: 5px;
}

.main {
  padding-top: 5rem;
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
  width: 57%;
  height: auto;
}
.itinery-box {
  width: 75%;
  height: auto;
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
  .day-heading-btn {
    height: 50%;
  }
}
</style>

<template>
  <div class="main">
    <div class="">
      <div>
        <div class="container container-sm container-md container-lg container-xl container-xxl" style="margin-top: 11vh">
          <div class="d-flex justify-content-center align-items-center">
            <span class="border border-dark rounded bg-info shadow-lg">
              <div class="row gx-1 gx-sm-1 gx-md-2 gx-lg-2 gx-xl-3 gx-xxl-3 pt-2 pt-sm-2 pt-md-2 pt-lg-2 pt-xl-3 pt-xxl-3 px-2 px-sm-2 px-md-2 px-lg-2 px-xl-3 px-xxl-3">
                <div class="col">
                  <input class="form-control form-control-sm border border-primary" disabled v-model="destination" type="text" placeholder="Place" aria-label=".form-control-sm example" />
                </div>
                <div class="col">
                  <input class="form-control form-control-sm border border-primary" disabled v-model="no_of_ppl" type="number" placeholder="People" aria-label=".form-control-sm example" />
                </div>
                <div class="col">
                  <input class="form-control form-control-sm border border-primary" disabled v-model="start_date" type="date" placeholder="Start Date" aria-label=".form-control-sm example" />
                </div>
              </div>
              <div class="row gx-1 gx-sm-1 gx-md-2 gx-lg-2 gx-xl-3 gx-xxl-3 py-2 py-sm-2 py-md-2 py-lg-2 py-xl-3 py-xxl-3 px-2 px-sm-2 px-md-2 px-lg-2 px-xl-3 px-xxl-3">
                <div class="col">
                  <input class="form-control form-control-sm border border-primary" disabled v-model="no_of_days" type="number" placeholder="Days" aria-label=".form-control-sm example" />
                </div>
                <div class="col">
                  <input class="form-control form-control-sm border border-primary" disabled v-model="budget" type="number" placeholder="Budget" aria-label=".form-control-sm example" />
                </div>
                <div class="col">
                  <input class="form-control form-control-sm border border-primary" disabled v-model="preference" type="text" placeholder="Budget" aria-label=".form-control-sm example" />
                </div>
              </div>
              <!-- Go Button -->
            </span>
          </div>
          <!-- Itinerary -->
        </div>
        <div>
          <div v-for="(day, dayIndex) in itinerary" :key="dayIndex">
            <div class="itinerary my-5 container container-sm container-md container-lg container-xl container-xxl rounded-4 d-flex justify-content-center" style="background-color: rgb(238, 233, 248)">
              <div class="itinery-box rounded mx-0 mx-sm-1 mx-md-2 mx-lg-4 mx-xl-5 mx-xxl-5">
                <div class="itinerary-heading w-100 my-2 my-3">
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start">
                      <h1 class="day-heading">Day {{ countDay() }}</h1>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start">
                      <div class="day-heading-subject">
                        <h4 class="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start">Exploring the Heritage</h4>
                        <h6 class="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start">Goa Itinerary - February 21</h6>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-around justify-content-xl-around justify-content-xxl-around align-items-end">
                      <button type="button" class="day-heading-btn px-2 rounded-pill text-light d-flex align-items-center mx-1">Modify</button>
                      <button type="button" class="day-heading-btn px-2 rounded-pill text-light d-flex align-items-center mx-1">Regenerate</button>
                    </div>
                  </div>
                </div>
                <div class="itinerary-day-box w-100 bg-light rounded-4 my-2 p-1 p-sm-1 p-md-2 p-lg-3 p-xl-4 p-xxl-4 my-3" style="box-shadow: 0px 5px 7px 4px rgba(0, 0, 0, 0.1)">
                  <div class="w-100 h-100">
                    <div v-for="(line, lineIndex) in day" :key="lineIndex" class="my-2 fs-6">
                      <!--  <span><strong>Morning : </strong></span
                      ><span class="fw-normal fs-6"
                        >Start your day by visiting the Old Goa (Goa Velha), a UNESCO World Heritage Site. Marvel at the stunning architecture of the Basilica of Bom Jesus (Borea Jezuchi Bajilika) and explore the historical significance of the area. Afterward, head to Gunpowder for a delicious South
                        Indian breakfast.</span
                      > -->
                      <span class="fw-normal fs-6" v-html="highlightEntities(line)"></span>
                    </div>
                  </div>
                </div>
                <div class="carousel-box w-100 my-3">
                  <div class="">
                    <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
                      <Slide v-for="name in name_entity" :key="name" class="pe-auto">
                        <router-link to="#" class="">
                          <div class="">
                            <div class="card text-bg-dark">
                              <img :src="imgSource + name" class="img-fluid" alt="..." style="width: 100%; height: 100%; object-fit: cover" />

                              <div class="card-img-overlay" style="width: 100%; height: 100%; position: absolute; bottom: 0; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 44%, rgba(0, 0, 0, 0.77) 100%)">
                                <div class="position-relative">
                                  <div class="ratings position-absolute top-0 end-0">
                                    <span class="px-2 py-1 rounded shadow-lg" style="background-color: #a95fe8">4.4</span>
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
      dayCount: 0,
      destination: "",
      no_of_days: null,
      start_date: "",
      no_of_ppl: null,
      preference: "",
      budget: null,
      itinerary: [],
      name_entity: ["Arambol Beach", "Pandava caves ", "Anjuna Flea Market", "Mandovi River", "Chapora river", "Dudhsagar Falls", "panaji", "margao", "mapusa", "bicholim", "calangut", "baga", "vaghature", "anjuna"],
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
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 400px and up
        400: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        500: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        600: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        768: {
          itemsToShow: 2.5,
          snapAlign: "center",
        },
        // 1024 and up
        992: {
          itemsToShow: 3,
          snapAlign: "start",
        },
        1100: {
          itemsToShow: 3.5,
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
    id: {
      type: String,
      required: true,
    },
    itineraryid: {
      type: String,
      required: true,
    },
  },

  async created() {
    console.log("id: ", this.id, " itineraryid ", this.itineraryid);
    try {
      const response = await axiosClient.get(`user/getitinerarybyid/${this.id}/${this.itineraryid}`);
      console.log(response);
      this.destination = response.data.result.itinerarys[0].destination;
      const date = response.data.result.itinerarys[0].start_date;
      this.no_of_days = response.data.result.itinerarys[0].no_of_days;
      this.no_of_ppl = response.data.result.itinerarys[0].no_of_ppl;
      this.preference = response.data.result.itinerarys[0].preference;
      this.budget = response.data.result.itinerarys[0].budget;
      const itineraryString = response.data.result.itinerarys[0].plan;

      const rawDate = response.data.result.itinerarys[0].start_date;
      const formattedDate = new Date(rawDate).toLocaleDateString();
      this.start_date = date.slice(0, 10);

      const itineraryArray = itineraryString.split("\\n\\n");
      console.log("start date", this.start_date);
      this.itinerary = [];
      for (const day of itineraryArray) {
        // Remove extra spaces and format with line breaks and numbering
        const formattedDay = day
          .replace(/\\n/g, "\n")
          .replace(/\\t/g, "")
          .replace(/(\d+\.\s+)/g, (match) => match.trim());

        // Split the formatted day into lines
        const lines = formattedDay.split("\n");

        // Filter out empty lines
        const nonEmptyLines = lines.filter((line) => line.trim() !== "");

        // Check if nonEmptyLines is not empty before pushing into the itinerary array
        if (nonEmptyLines.length > 0) {
          this.itinerary.push(nonEmptyLines);
        }
      }

      console.log(this.itinerary);
    } catch (error) {
      console.log("error: ", error);
      if (error.response.status == 404) {
        toast.error(`Itinerary not exist`, {
          autoClose: 1500,
        });
      } else {
        toast.error(`Something went wrong`, {
          autoClose: 1500,
        });
      }
    }
  },

  methods: {
    countDay() {
      if (this.dayCount < this.itinerary.length) {
        console.log("beforeCal :", this.dayCount);
        this.dayCount = this.dayCount + 1;
        console.log("afterCal :", this.dayCount);

        return this.dayCount;
      }
    },
    highlightEntities(line) {
      // Highlight entities in the line using name_entity array
      for (const entity of this.name_entity) {
        const regex = new RegExp(`\\b${entity}\\b`, "gi");
        line = line.replace(regex, `<span style="color: blue">${entity}</span>`);
      }
      return line;
    },
  },
};
</script>
