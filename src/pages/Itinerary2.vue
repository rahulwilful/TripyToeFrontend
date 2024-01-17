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
}

.preview {
  width: 70%;
  padding-bottom: 2rem;
  height: 5rem;
  border: 1px solid;
  border-image: linear-gradient(to right, #642bff, #ff22e6);

  border-image-slice: 1;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}
.container3 {
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, #642bff, #ff22e6);
  border-image-slice: 1;
}

#card1 {
  padding: 15px;
}

/* .d-flex.overflow-hidden {
  overflow-x: hidden;
} */

.carousel {
  display: flex;
  overflow-x: auto; /* Make the carousel scrollable horizontally */
  transition: transform 0.5s ease;
}

.carousel ol {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.carousel li {
  margin-right: 15px; /* Adjust the margin between items as needed */
}

/* .card {
  transition: transform 0.5s ease; 
} */

#list::-webkit-scrollbar {
  margin-bottom: 1rem;
  width: 5px; /* Set the width of the scrollbar */
  height: 10px; /* Set the height of the scrollbar */
}

#list::-webkit-scrollbar-track {
  margin-bottom: 1rem;
  background: #d1e5ff;
  border-radius: 5px;
}

#list::-webkit-scrollbar-thumb {
  background: linear-gradient(to right, #642bff, #ff22e6);
  border-radius: 5px;
}
</style>

<template>
  <div class="main bg-body-secondary">
    <div>
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
          <div class="mt-3">
            <!-- Back button -->
            <div class="border border-dark rounded-3 shadow-lg bg-light p-2 p-sm-2 p-md-2 p-lg-2 p-xl-3 p-xxl-3">
              <div class="itinerary overflow-auto" style="height: 50vh">
                <div class="pt-1 pt-sm-1 pt-md-1 pt-lg-1 pt-xl-2 pt-xxl-2">
                  <ol class="" style="overflow-y: auto">
                    <li v-for="(day, dayIndex) in itinerary" :key="dayIndex" class="bg-transparent text-dark mb-2">
                      <!-- Use another v-for to iterate over the lines within each day -->
                      <div v-for="(line, lineIndex) in day" :key="lineIndex" class="bg-transparent">
                        <!-- Highlight entities in the line -->
                        <span v-html="highlightEntities(line)"></span>
                        <!-- {{ line }} -->
                      </div>
                      <hr class="divider" />
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div class="my-3">
                <!-- <div class="container w-auto mt-3 mb-3">
                        <div class="d-flex overflow-hidden">
                          <div id="list" class="carousel" ref="nameEntityCarousel">
                            <ol class="d-flex mb-3">
                              <li v-for="name in name_entity" :key="name" class="d-flex">
                                <div class="card text-bg-dark" style="width: 15rem; height: 10rem; position: relative; overflow: hidden">
                                  <img :src="img + name" class="card-img" alt="..." style="width: 100%; height: 100%; object-fit: cover" />
                                  <div class="card-img-overlay" style="width: 100%; height: 100%; position: absolute; bottom: 0; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 44%, rgba(0, 0, 0, 0.77) 100%)">
                                    <div class="mb-2 d-flex justify-content-center" style="width: 100%; position: absolute; bottom: 0">
                                      <p class="card-text" style="overflow: hidden">{{ name }}</p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div> -->
                <div class="">
                  <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
                    <Slide v-for="name in name_entity" :key="name" class="pe-auto">
                      <router-link to="#" class="">
                        <div class="carousel__item">
                          <div class="card text-bg-dark" style="width: 15rem; height: 10rem; position: relative; overflow: hidden">
                            <img :src="imgSource + name" class="card-img img-fluid" alt="..." style="width: 100%; height: 100%; object-fit: cover" />
                            <div class="card-img-overlay" style="width: 100%; height: 100%; position: absolute; bottom: 0; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 44%, rgba(0, 0, 0, 0.77) 100%)">
                              <div class="mb-2 d-flex justify-content-center" style="width: 100%; position: absolute; bottom: 0">
                                <p class="card-text" style="overflow: hidden">{{ name }}</p>
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
</template>

<script>
import axiosClient from "../axiosClient";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "Itinerary",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
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
        300: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 400px and up
        400: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4.5,
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
