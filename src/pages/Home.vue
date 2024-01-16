<style scoped>
.main {
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  transition: background 1.5s ease;
}

/* Restyle the scrolling container to create proper scrolling */
.scroll-container {
  position: relative;
  z-index: 1;
  overflow-y: auto;
  max-height: 100vh;
}

/* Style for the scrolling container */
.container-s {
  position: relative; /* Set relative positioning for scrolling container */
  z-index: 1; /* Ensure the scrolling container is above the background */
  overflow-y: auto; /* Enable vertical overflow for scrolling */
  max-height: 80vh; /* Set a maximum height for scrolling container */
}

/* Add the following styles to make the input fields and list move on scrolling */
.input-feild,
.container2,
.container3,
.search-preview,
.preview,
.itenerary,
.itinerary-2 {
  position: relative;
  z-index: 2; /* Ensure these elements are above the background */
}

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

@media (max-width: 576px) {
  .main {
    height: auto; /* Adjust height for small screens */
  }
  .preview {
    width: 100%;
    height: auto;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to right, #642bff, #ff22e6);
    border-image-slice: 1;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  }
}

.input-feild {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6); /* Shadow effect */
  width: 400px;
  height: 40px;
  border-radius: 17px;
  text-align: center;
  color: black;
}

.container-s {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
.itenerary {
  align-items: center;
  justify-content: center;
  height: auto;
  width: 70rem;
}

.itinerary-2 {
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, #642bff, #ff22e6);
  border-image-slice: 1;
}

.container2 {
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, #642bff, #ff22e6);
  border-image-slice: 1;

  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  padding: 15px;
}
.container3 {
  padding: 15px;
}
.search-preview {
  width: 40rem;
  margin-bottom: 2.5rem;
  height: 6rem;
  background: rgba(0, 0, 0, 0);

  border-radius: 5px;
}

.preview {
  width: 100%;
  height: auto;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, #642bff, #ff22e6);
  border-image-slice: 1;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.highlight {
  background-color: yellow; /* Adjust the background color as needed */
  font-weight: bold; /* Adjust the font weight as needed */
}

.searched {
  margin-top: 5rem;
}

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
  <div class="main" :style="{ 'background-image': 'url(' + items[imageIndex].imageUrl + ')' }">
    <div class="vh-100">
      <div class="scroll-container">
        <div class="container-fluid">
          <div>
            <div class="row gx-2" style="position: sticky">
              <div class="col" v-for="(progress, i) in progressBars" :key="i">
                <div class="progress bg-secondary mt-1" :style="{ height: '3px', marginBottom: '5px' }">
                  <div class="progress-bar" role="progressbar" :style="{ width: progress + '%' }" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div v-if="!searched" class="container-s d-flex justify-content-center align-items-center">
              <div class="container2">
                <div class="row gx-3">
                  <div class="col-4 col-md-4 col-sm-4 col-xl-4">
                    <div>
                      <input type="text" class="form-control shadow-lg bg-transparent border-0 border-dark border-bottom border-bottom text-light" v-model="form.destination" placeholder="Destination" />
                    </div>
                  </div>
                  <div class="col-4 col-md-4 col-sm-4 col-xl-4">
                    <div>
                      <input type="number" class="form-control shadow-lg bg-transparent border-0 border-dark border-bottom text-light" v-model="form.no_of_days" placeholder="Number Of Days" />
                    </div>
                  </div>
                  <div class="col-4 col-md-4 col-sm-4 col-xl-4">
                    <div>
                      <input type="date" class="form-control shadow-lg bg-transparent border-0 border-dark border-bottom text-light" v-model="form.start_date" placeholder="Start Date" />
                    </div>
                  </div>
                </div>
                <div class="row gx-3 mt-2">
                  <div class="col-4 col-md-4 col-sm-4 col-xl-4">
                    <div>
                      <input type="number" class="form-control shadow-lg bg-transparent border-0 border-dark border-bottom text-light" v-model="form.no_of_ppl" placeholder="Number Of People" />
                    </div>
                  </div>
                  <div class="col-4 col-md-4 col-sm-4 col-xl-4">
                    <div>
                      <select class="form-select bg-transparent border-0 border-dark border-bottom text-light" aria-label="Default select example" placeholder="select" v-model="form.preference">
                        <option class="bg-dark" selected>select preference</option>
                        <option class="bg-dark" :value="item" v-for="item in preference" :key="item">{{ item }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-4 col-md-4 col-sm-4 col-xl-4">
                    <div class="d-flex justify-content-center align-items-center">
                      <div>
                        <span class="fw-bold text-light">Budget {{ form.budget }} Rs</span>
                        <input type="range" class="form-range text-light" id="budgetRange" min="10000" max="100000" step="10000" v-model="form.budget" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-end mt-2">
                  <button type="button" @click="handleSubmit" class="btn btn-primary">Go <i class="bi bi-arrow-right"></i></button>
                </div>
              </div>
            </div>

            <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

            <div class="searched">
              <div v-if="searched" class="">
                <div class="">
                  <div class="container d-flex justify-content-center align-items-center">
                    <div class="preview">
                      <div class="preview-2 pt-1">
                        <div class="row mb-3">
                          <div class="col d-flex justify-content-center align-items-center">
                            <strong class="text-light align-middle">Destination: {{ form.destination }}</strong>
                          </div>
                          <div class="col d-flex justify-content-center align-items-center">
                            <strong class="text-light">Days: {{ form.no_of_days }}</strong>
                          </div>
                          <div class="col d-flex justify-content-center align-items-center">
                            <strong class="text-light">Start Date: {{ form.start_date }}</strong>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col d-flex justify-content-center align-items-center">
                            <span
                              ><strong class="text-light">People: {{ form.no_of_ppl }}</strong></span
                            >
                          </div>
                          <div class="col d-flex justify-content-center align-items-center">
                            <strong class="text-light">Preference: {{ form.preference }}</strong>
                          </div>
                          <div class="col d-flex justify-content-center align-items-center">
                            <strong class="text-light">Budget: {{ form.budget }}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

                <div class="d-flex justify-content-center align-items-center pt-3">
                  <div class="itenerary">
                    <div>
                      <button type="button" @click="searched = false" class="btn btn-secondary mb-2"><i class="bi bi-arrow-left px-2"></i></button>
                      <div class="itinerary-2" style="backdrop-filter: blur(10px); background-color: rgba(0, 0, 0, 0.5)">
                        <div class="container3 justify-content-center bg-transparent align-items-center pt-3">
                          <ol class="" style="max-height: 250px; overflow-y: auto">
                            <li v-for="(day, dayIndex) in itinerary" :key="dayIndex" class="bg-transparent text-light mb-2">
                              <!-- Use another v-for to iterate over the lines within each day -->
                              <div v-for="(line, lineIndex) in day" :key="lineIndex" class="bg-transparent">
                                <!-- Highlight entities in the line -->
                                <span v-html="highlightEntities(line)"></span>
                                {{ line }}
                              </div>
                            </li>
                          </ol>
                        </div>
                        <div class="p-2">
                          <div class="p-2 position-absolute bottom-0 end-0">
                            <button @click="saveToItinerarys" type="button" class="btn btn-secondary btn-sm">Save1</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div class="mb-3 mt-3">
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
                      <div class="container">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import axiosClient from "../axiosClient";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      form: {
        destination: "goa",
        no_of_days: 3,
        start_date: "2024-01-01",
        no_of_ppl: 2,
        preference: "",
        budget: 10000,
        plan: "",
      },
      img: "https://source.unsplash.com/1400x720/?beach,goa",
      name_entity: [],
      preference: ["nightlife", "offbeat"],
      itinerary: [],
      searched: false,
      error: [],
      loadingPercentage: 0,
      activeIndex: 0,
      id: "",
      activities: ["Breakfast:", "Morning Activity:", "Lunch:", "Evening Activity:", "Night:"],

      imageIndex: 0,
      items: [
        { imageUrl: "/src/assets/home-images/pexels-artem-saranin-1214011.jpg" },
        { imageUrl: "/src/assets/home-images/pexels-dillon-kydd-11523148.jpg" },
        { imageUrl: "/src/assets/home-images/pexels-james-wheeler-1539225.jpg" },
        { imageUrl: "/src/assets/home-images/pexels-mayur-sable-13612812.jpg" },
      ],
      progressBars: [0, 0, 0, 0],

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
  async created() {
    const auth = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    try {
      const token = await axiosClient.get("user/getcurrentuser/", auth).catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          this.$router.push("/login");
        }
      });
      this.id = token.data.data._id;
    } catch (e) {
      console.log("error: ", e);
    }
  },
  mounted() {
    this.startProgress();
  },

  methods: {
    async handleSubmit() {
      console.log("handleSubmit called");
      this.error = [];
      for (const item in this.form) {
        if (this.form[item] == "") {
          if (item != "plan") {
            /* console.log("error", item); */
            this.error.push(item);
          }
        }
      }

      if (this.error.length == 0) {
        try {
          const form = this.form;
          console.log(form);
          //const response = await axios.post(`https://expo-web-service.onrender.com/api/v1/tripytoe/get/itinerary`, this.form);

          const response = await axiosClient.post(`destinations/getdestinations/${this.id}`, form);
          console.log(response);
          // Assuming the response.data contains the itinerary string
          //const itineraryString = response.data.itinerary;
          const itineraryString = response.data.result[0].itinerary;
          this.form.plan = response.data.result[0].itinerary;
          this.name_entity = response.data.result[0].name_entity;

          // Split the itinerary string into an array based on the day separator
          //const itineraryArray = itineraryString.split("\n\n");

          // Update the itinerary array in your data
          /* this.itinerary = itineraryArray.filter((item) => item.trim() !== ""); */
          const itineraryArray = itineraryString.split("\\n\\n");

          this.itinerary = [];

          var transformedItinerary = {};

          for (const day of itineraryArray) {
            // Remove extra spaces and format with line breaks and numbering
            const formattedDay = day
              .replace(/\\n/g, "\n")
              .replace(/\\t/g, "")
              .replace(/(\d+\.\s+)/g, (match) => match.trim());

            // Split the formatted day into lines
            let lines = formattedDay.split("\n");

            // If there are no "\n" characters, split lines using full stops
            if (lines.length === 1) {
              lines = formattedDay.split(".");
            }

            // Filter out empty lines
            const nonEmptyLines = lines.filter((line) => line.trim() !== "");

            // Check if nonEmptyLines is not empty before pushing into the itinerary array
            if (nonEmptyLines.length > 0) {
              this.itinerary.push(nonEmptyLines);
            }
          }

          console.log("Itinerary", this.itinerary);
          this.searched = true;
        } catch (error) {
          console.error("Somthing went wrong", error);
        }
      } else {
        console.log("Form Values Are ", this.form, this.error);
        for (const item of this.error) {
          toast.error(`Enter ${item}`, {
            autoClose: 1500,
          });
        }
      }
    },

    highlightEntities(line) {
      // Highlight entities in the line using name_entity array
      for (const entity of this.name_entity) {
        const regex = new RegExp(`\\b${entity}\\b`, "gi");
        line = line.replace(regex, `<span style="color: yellow">${entity}</span>`);
      }
      return line;
    },

    async saveToItinerarys() {
      try {
        console.log("saveToItenerarys called");
        const response = await axiosClient.post(`user/itinerays/${this.id}/`, this.form);
        console.log("response", response);
        toast.info(`Saved To Itinerarys`, {
          autoClose: 1500,
        });
      } catch (error) {
        console.error("error: ", error);
        toast.error(`Something Went wrong`, {
          autoClose: 1500,
        });
      }
    },

    startProgress() {
      setInterval(() => {
        this.loadingPercentage += 5;
        this.progressBars[this.activeIndex] = this.loadingPercentage;
        if (this.loadingPercentage > 105) {
          this.loadingPercentage = 0;
          this.progressBars[this.activeIndex] = 0;
          /* console.log("progressbar", this.progressBars.length);
          console.log("activeindex", this.activeIndex); */
          if (this.activeIndex < this.progressBars.length - 1) {
            // Change the background image to the next one
            this.imageIndex = (this.imageIndex + 1) % this.items.length;
            // Move to the next progress bar
            this.activeIndex++;
          } else {
            this.imageIndex = (this.imageIndex + 1) % this.items.length;
            // Reset to the first progress bar
            this.activeIndex = 0;
          }
        }
      }, 200);
    },
  },
};
</script>
