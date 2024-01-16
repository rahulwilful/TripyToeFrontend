<style scoped>
.main {
  position: relative;
  width: 100%;
  height: 100vh;
}

.scroll-container {
  position: relative;
  z-index: 1;
  overflow-y: auto;
  max-height: 100vh;
}
.content {
  position: absolute;
  width: 100%;
  height: 100%;
}

.carousel-inner img {
  transition: transform 1s ease-in-out;
}

.content2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}

.carousel-content {
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div>
    <div class="main">
      <div class="content">
        <div class="content2">
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
              </div>
            </div>
          </div>
          <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
          <div class="content-itinerary">
            <div v-if="!searched" class="container container-sm container-md container-lg container-xl container-xxl d-flex justify-content-center align-items-center" style="height: calc(100vh - 20px)">
              <div class="d-flex justify-content-center align-items-center">
                <span class="border border-dark rounded bg-info shadow-lg">
                  <div class="row gx-1 gx-sm-1 gx-md-2 gx-lg-2 gx-xl-3 gx-xxl-3 pt-2 pt-sm-2 pt-md-2 pt-lg-2 pt-xl-3 pt-xxl-3 px-2 px-sm-2 px-md-2 px-lg-2 px-xl-3 px-xxl-3">
                    <div class="col">
                      <input class="form-control form-control-sm border border-primary" v-model="form.destination" type="text" placeholder="Place" aria-label=".form-control-sm example" />
                    </div>
                    <div class="col">
                      <input class="form-control form-control-sm border border-primary" v-model="form.no_of_ppl" type="number" placeholder="People" aria-label=".form-control-sm example" />
                    </div>
                    <div class="col">
                      <input class="form-control form-control-sm border border-primary" v-model="form.start_date" type="date" placeholder="Start Date" aria-label=".form-control-sm example" />
                    </div>
                  </div>
                  <div class="row gx-1 gx-sm-1 gx-md-2 gx-lg-2 gx-xl-3 gx-xxl-3 py-2 py-sm-2 py-md-2 py-lg-2 py-xl-3 py-xxl-3 px-2 px-sm-2 px-md-2 px-lg-2 px-xl-3 px-xxl-3">
                    <div class="col">
                      <input class="form-control form-control-sm border border-primary" v-model="form.no_of_days" type="number" placeholder="Days" aria-label=".form-control-sm example" />
                    </div>
                    <div class="col">
                      <input class="form-control form-control-sm border border-primary" v-model="form.budget" type="number" placeholder="Budget" aria-label=".form-control-sm example" />
                    </div>
                    <div class="col">
                      <div>
                        <select class="form-select form-select-sm border border-primary" v-model="form.preference">
                          <!-- <option class="bg-light" selected>select preference</option> -->
                          <option class="bg-light" :value="item" v-for="item in preference" :key="item">{{ item }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- Go Button -->
                  <button type="button" @click="handleSubmit" class="btn btn-primary btn-sm float-end mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 mb-2 mb-sm-2 mb-md-2 mb-lg-2 mb-xl-3 mb-xxl-3">Go <i class="bi bi-arrow-right"></i></button>
                </span>
              </div>
            </div>

            <div v-if="searched" class="container container-sm container-md container-lg container-xl container-xxl" style="margin-top: 11vh">
              <div class="d-flex justify-content-center align-items-center">
                <span class="border border-dark rounded bg-info shadow-lg">
                  <div class="row gx-1 gx-sm-1 gx-md-2 gx-lg-2 gx-xl-3 gx-xxl-3 pt-2 pt-sm-2 pt-md-2 pt-lg-2 pt-xl-3 pt-xxl-3 px-2 px-sm-2 px-md-2 px-lg-2 px-xl-3 px-xxl-3">
                    <div class="col">
                      <input class="form-control form-control-sm border border-primary" v-model="form.destination" type="text" placeholder="Place" aria-label=".form-control-sm example" />
                    </div>
                    <div class="col">
                      <input class="form-control form-control-sm border border-primary" v-model="form.no_of_ppl" type="number" placeholder="People" aria-label=".form-control-sm example" />
                    </div>
                    <div class="col">
                      <input class="form-control form-control-sm border border-primary" v-model="form.start_date" type="date" placeholder="Start Date" aria-label=".form-control-sm example" />
                    </div>
                  </div>
                  <div class="row gx-1 gx-sm-1 gx-md-2 gx-lg-2 gx-xl-3 gx-xxl-3 py-2 py-sm-2 py-md-2 py-lg-2 py-xl-3 py-xxl-3 px-2 px-sm-2 px-md-2 px-lg-2 px-xl-3 px-xxl-3">
                    <div class="col">
                      <input class="form-control form-control-sm border border-primary" v-model="form.no_of_days" type="number" placeholder="Days" aria-label=".form-control-sm example" />
                    </div>
                    <div class="col">
                      <input class="form-control form-control-sm border border-primary" v-model="form.budget" type="number" placeholder="Budget" aria-label=".form-control-sm example" />
                    </div>
                    <div class="col">
                      <div>
                        <select class="form-select form-select-sm border border-primary" v-model="form.preference">
                          <!-- <option class="bg-light" selected>select preference</option> -->
                          <option class="bg-light" :value="item" v-for="item in preference" :key="item">{{ item }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- Go Button -->
                  <button type="button" @click="handleSubmit" class="btn btn-primary btn-sm float-end mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 mb-2 mb-sm-2 mb-md-2 mb-lg-2 mb-xl-3 mb-xxl-3">Go <i class="bi bi-arrow-right"></i></button>
                </span>
              </div>
              <!-- Itinerary -->
              <div class="mt-3">
                <!-- Back button -->
                <button type="button" @click="searched = false" class="btn btn-primary btn-sm mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 mb-2 mb-sm-2 mb-md-2 mb-lg-2 mb-xl-3 mb-xxl-3"><i class="bi bi-arrow-left px-2 px-sm-2 px-md-2 px-lg-3 px-xl-3 px-xxl-3"></i></button>

                <div class="border border-dark rounded-3 shadow-lg bg-light p-2 p-sm-2 p-md-2 p-lg-2 p-xl-3 p-xxl-3">
                  <div class="itinerary overflow-auto" style="height: 50vh">
                    <div class="p-1 p-sm-1 p-md-1 p-lg-1 p-xl-2 p-xxl-2">
                      <ol class="" style="max-height: 250px; overflow-y: auto">
                        <li v-for="(day, dayIndex) in itinerary" :key="dayIndex" class="bg-transparent text-dark mb-2">
                          <!-- Use another v-for to iterate over the lines within each day -->
                          <div v-for="(line, lineIndex) in day" :key="lineIndex" class="bg-transparent">
                            <!-- Highlight entities in the line -->
                            <span v-html="highlightEntities(line)"></span>
                            {{ line }}
                          </div>
                          <hr class="divider" />
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <div class="d-flex justify-content-end">
                      <button type="button" @click="saveToItinerarys" class="btn btn-primary btn-sm mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 mt-2 mt-sm-2 mt-md-2 mt-lg-2 mt-xl-3 mt-xxl-3">
                        <span class="px-1"> Save </span>
                      </button>
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
                    <div class="container">
                      <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
                        <Slide v-for="name in name_entity" :key="name">
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

        <div>
          <div class="carousel-content">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div v-if="activeIndex == 0" class="carousel-item active">
                  <img src="../assets/slideImg1.jpg" class="d-block w-100" alt="..." style="width: 100%; height: 100vh; transition: transform 1s ease-in-out" />
                </div>
                <div v-if="activeIndex == 1" class="carousel-item active">
                  <img src="../assets/slideImg2.jpg" class="d-block w-100" alt="..." style="width: 100%; height: 100vh; transition: transform 1s ease-in-out" />
                </div>
                <div v-if="activeIndex == 2" class="carousel-item active">
                  <img src="../assets/slideImg3.jpg" class="d-block w-100" alt="..." style="width: 100%; height: 100vh; transition: transform 1s ease-in-out" />
                </div>
                <div v-if="activeIndex == 3" class="carousel-item active">
                  <img src="../assets/slideImg4.jpg" class="d-block w-100" alt="..." style="width: 100%; height: 100vh; transition: transform 1s ease-in-out" />
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
  name: "HomeTrial",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      searched: false,
      itinerary: [],
      preference: ["nightlife", "offbeat"],
      form: {
        destination: "goa",
        no_of_days: 3,
        start_date: "2024-01-27",
        no_of_ppl: 2,
        preference: "nightlife",
        budget: 10000,

        plan: "",
      },
      id: "",
      imgSource: "https://source.unsplash.com/1400x720/?beach,goa",
      loadingPercentage: 0,
      activeIndex: 0,
      progressBars: [0, 0, 0, 0],
      imageIndex: 0,
      name_entity: ["Bora Bora", "Santorini", "Kyoto", "Banff National Park", "Marrakech", "Barcelona", "Great Barrier Reef", "Machu Picchu", "Maui", "New Zealand (South Island)"],
      items: ["slideImg1.jpg", "slideImg2.jpg", "slideImg3.jpg", "slideImg4.jpg"],
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

      this.id = token.data.data._id;

      // Log the state of items after initialization
      console.log("Initialized items:", this.items);
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
        line = line.replace(regex, `<span style="color: blue">${entity}</span>`);
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
        console.log("Active Index", this.activeIndex);
        this.loadingPercentage += 5;
        this.progressBars[this.activeIndex] = this.loadingPercentage;
        if (this.loadingPercentage > 105) {
          this.loadingPercentage = 0;
          this.progressBars[this.activeIndex] = 0;
          if (this.activeIndex < this.progressBars.length - 1) {
            this.imageIndex = (this.imageIndex + 1) % this.items.length;
            this.activeIndex++;
          } else {
            this.imageIndex = (this.imageIndex + 1) % this.items.length;
            this.activeIndex = 0;
          }
        }
      }, 200);
    },
  },
};
</script>
