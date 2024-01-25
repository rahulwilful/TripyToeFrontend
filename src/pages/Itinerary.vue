<style scoped>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #d1e5ff;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(#642bff, #ff22e6);
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
  <div class="main">
    <div>
      <div>
        <div class="container">
          <!-- <h1 class="d-flex justify-content-center align-items-center">Itineray</h1> -->
          <div class="d-flex justify-content-center align-items-center">
            <div class="preview">
              <div class="preview-2 pt-1">
                <div class="row mb-3">
                  <div class="col d-flex justify-content-center align-items-center">
                    <strong class="text-light">Destination: {{ destination }}</strong>
                  </div>
                  <div class="col d-flex justify-content-center align-items-center">
                    <strong class="text-light">Days: {{ no_of_days }}</strong>
                  </div>
                  <div class="col d-flex justify-content-center align-items-center">
                    <strong class="text-light">Start Date: {{ start_date }}</strong>
                  </div>
                </div>
                <div class="row">
                  <div class="col d-flex justify-content-center align-items-center">
                    <span
                      ><strong class="text-light">People: {{ no_of_ppl }}</strong></span
                    >
                  </div>
                  <div class="col d-flex justify-content-center align-items-center">
                    <strong class="text-light">Preference: {{ preference }}</strong>
                  </div>
                  <div class="col d-flex justify-content-center align-items-center">
                    <strong class="text-light">Budget: {{ budget }}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container bg-transparent">
            <div id="card1" class="card bg-transparent border border-0">
              <div class="card-body bg-transparent">
                <div class="container3 justify-content-center align-items-center p-3" style="backdrop-filter: blur(10px); background-color: rgba(0, 0, 0, 0.5)">
                  <ol class="" style="max-height: 350px; overflow-y: auto">
                    <li v-for="(day, dayIndex) in itinerary" :key="dayIndex" class="bg-transparent text-light mb-2" style="background-color: rgba(255, 255, 255, 0.7); border-radius: 8px">
                      <!-- Use another v-for to iterate over the lines within each day -->
                      <div v-for="(line, lineIndex) in day" :key="lineIndex" class="bg-transparent">
                        <!-- {{ line }} -->
                        <span v-html="highlightEntities(line)"></span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div class="mb-3">
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
                <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
                  <Slide v-for="name in name_entity" :key="name">
                    <div class="carousel__item">
                      <div class="card text-bg-dark" style="width: 15rem; height: 10rem; position: relative; overflow: hidden">
                        <img :src="img + name" class="card-img" alt="..." style="width: 100%; height: 100%; object-fit: cover" />
                        <div class="card-img-overlay" style="width: 100%; height: 100%; position: absolute; bottom: 0; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 44%, rgba(0, 0, 0, 0.77) 100%)">
                          <div class="mb-2 d-flex justify-content-center" style="width: 100%; position: absolute; bottom: 0">
                            <p class="card-text" style="overflow: hidden">{{ name }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
      img: "https://source.unsplash.com/1400x720/?goa,white",

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
          itemsToShow: 1.5,
          snapAlign: "center",
        },
        600: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        900: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1100: {
          itemsToShow: 4.3,
          snapAlign: "start",
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
      this.start_date = response.data.result.itinerarys[0].start_date;
      this.no_of_days = response.data.result.itinerarys[0].no_of_days;
      this.no_of_ppl = response.data.result.itinerarys[0].no_of_ppl;
      this.preference = response.data.result.itinerarys[0].preference;
      this.budget = response.data.result.itinerarys[0].budget;
      const itineraryString = response.data.result.itinerarys[0].plan;

      const rawDate = response.data.result.itinerarys[0].start_date;
      const formattedDate = new Date(rawDate).toLocaleDateString();
      this.start_date = formattedDate;

      const itineraryArray = itineraryString.split("\\n\\n");

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
        line = line.replace(regex, `<span style="color: yellow">${entity}</span>`);
      }
      return line;
    },
  },
};
</script>
