<style scoped>
.main {
  position: relative;
  width: 100%;
  height: 100vh;
}
::placeholder {
  color: rgb(255, 255, 255);
}

input {
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
  transition: transform 2s ease-in-out;
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

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #d1e5ff;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(rgb(169, 95, 232), #8d1bf1);
  border-radius: 5px;
}

.form1 {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  max-width: 900px;
}

@media (max-width: 400px) {
  .form1 {
    width: 90vw;
  }
}

@media (min-width: 401px) {
  .form1 {
    width: 70vw;
  }
}

.form2 {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

@media (min-width: 992px) {
  .form1 {
    width: 40vw;
  }
  .form2 {
    width: 65%;
  }
}

.itinerary {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}
.card {
  width: 15rem;
  height: 10rem;
  position: relative;
  overflow: hidden;
}

@media (max-width: 500) {
  .card {
    width: 20rem;
    height: 13.3rem;
    position: relative;
    overflow: hidden;
  }
}

.lines {
  font-family: Georgia, serif;
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
              <div class="d-flex justify-content-center align-items-center px-3 px-sm-3 px-md-3 px-lg-5 px-xl-5 px-xxl-5">
                <button class="generate-itinerary rounded border-0 px-3 py-3 shadow-lg text-light fw-semibold" type="button" style="background-color: #a95fe8" v-if="next == 0" @click="handleNext">Generate Itinerary</button>
                <span v-if="next > 0" class="form1 border border-dark rounded shadow-lg mx-4 mx-sm-4 mx-md-4 mx-lg-5 mx-xl-5 mx-xxl-5">
                  <div class="row gx-1 gx-sm-1 gx-md-2 gx-lg-2 gx-xl-3 gx-xxl-3 pt-3 pt-sm-3 pt-md-3 pt-lg-2 pt-xl-3 pt-xxl-3 px-3 px-sm-3 px-md-3 px-lg-2 px-xl-3 px-xxl-3">
                    <div v-if="next == 1" class="mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <input class="form-control form-control-sm text-light border-0 border-secondary border-bottom bg-transparent" v-model="form.destination" type="text" placeholder="Where You Want To Go ?" aria-label=".form-control-sm example" />
                    </div>
                    <div v-if="next == 2" class="mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <input class="form-control form-control-sm text-light border-0 border-secondary border-bottom bg-transparent" v-model="form.no_of_ppl" type="number" placeholder=" With How Many People ?" aria-label=".form-control-sm example" />
                    </div>
                    <div v-if="next == 3" class="d-flex mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <input
                        placeholder="From When You Want To Start ?"
                        class="form-control form-control-sm text-light border-0 border-secondary border-bottom bg-transparent textbox-n"
                        type="text"
                        onfocus="(this.type='date')"
                        onblur="(this.type='text')"
                        id="date"
                        v-model="form.start_date"
                        aria-label=".form-control-sm example"
                      />
                    </div>
                    <div v-if="next == 4" class="mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <input class="form-control form-control-sm text-light border-0 border-secondary border-bottom bg-transparent" v-model="form.no_of_days" type="number" placeholder="For How Many Days ?" aria-label=".form-control-sm example" />
                    </div>
                    <div v-if="next == 5" class="mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <input class="form-control form-control-sm text-light border-0 border-secondary border-bottom bg-transparent" v-model="form.budget" type="number" placeholder="Please Enter Your Budget" aria-label=".form-control-sm example" />
                    </div>
                    <div v-if="next == 6" class="mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <div>
                        <select class="form-select form-select-sm text-light border-0 border-secondary border-bottom bg-transparent" v-model="form.preference">
                          <option class="bg-dark" value="0">Please Select Your Preference</option>
                          <option class="bg-dark" :value="item" v-for="item in preference" :key="item">{{ item }}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button v-if="next < 6" type="button" @click="handleNext" class="btn btn-primary btn-sm float-end mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 my-2 my-sm-2 my-md-2 my-lg-2 my-xl-3 my-xxl-3 border-0" style="background-color: #a95fe8">Next</button>

                  <!-- Go Button -->
                  <button v-if="next == 6" type="button" @click="handleSubmit" class="btn btn-primary btn-sm float-end mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 my-2 my-sm-2 my-md-2 my-lg-2 my-xl-3 my-xxl-3 border-0" style="background-color: #a95fe8">Go <i class="bi bi-arrow-right"></i></button>
                  <button v-if="next > 1" type="button" @click="handlePrev" class="btn btn-primary btn-sm float-end my-2 my-sm-2 my-md-2 my-lg-2 my-xl-3 my-xxl-3 border-0" style="background-color: #a95fe8">Prev</button>
                </span>
              </div>
            </div>

            <div v-if="searched" class="container container-sm container-md container-lg container-xl container-xxl" style="margin-top: 11vh">
              <div class="d-flex justify-content-center align-items-center">
                <span class="form2 border border-dark rounded shadow-lg mx-4 mx-sm-4 mx-md-4 mx-lg-5 mx-xl-5 mx-xxl-5">
                  <div class="row gx-1 gx-sm-1 gx-md-2 gx-lg-2 gx-xl-3 gx-xxl-3 pt-3 pt-sm-3 pt-md-3 pt-lg-2 pt-xl-3 pt-xxl-3 px-3 px-sm-3 px-md-3 px-lg-2 px-xl-3 px-xxl-3">
                    <div class="mb-1 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                      <input class="form-control form-control-sm text-light border-0 border-secondary border-bottom bg-transparent" v-model="form.destination" type="text" placeholder="Place" aria-label=".form-control-sm example" />
                    </div>
                    <div class="mb-1 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                      <input class="form-control form-control-sm text-light border-0 border-secondary border-bottom bg-transparent" v-model="form.no_of_ppl" type="number" placeholder="People" aria-label=".form-control-sm example" />
                    </div>
                    <div class="mb-1 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                      <input class="form-control form-control-sm text-light border-0 border-secondary border-bottom bg-transparent" v-model="form.start_date" type="date" placeholder="Start Date" aria-label=".form-control-sm example" />
                    </div>
                    <div class="mb-1 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                      <input class="form-control form-control-sm text-light border-0 border-secondary border-bottom bg-transparent" v-model="form.no_of_days" type="number" placeholder="Days" aria-label=".form-control-sm example" />
                    </div>
                    <div class="mb-1 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                      <input class="form-control form-control-sm text-light border-0 border-secondary border-bottom bg-transparent" v-model="form.budget" type="number" placeholder="Budget" aria-label=".form-control-sm example" />
                    </div>
                    <div class="mb-1 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                      <div>
                        <select class="form-select form-select-sm text-light border-0 border-secondary border-bottom bg-transparent" v-model="form.preference">
                          <option class="bg-dark" value="0">select preference</option>
                          <option class="bg-dark" :value="item" v-for="item in preference" :key="item">{{ item }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- Go Button -->
                  <button type="button" @click="handleSubmit" class="btn btn-primary btn-sm float-end mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 my-2 my-sm-2 my-md-2 my-lg-2 my-xl-3 my-xxl-3 border-0" style="background-color: #a95fe8">Go <i class="bi bi-arrow-right"></i></button>
                </span>
              </div>
              <!-- Itinerary -->
              <div class="mt-5">
                <!-- Back button -->
                <button type="button" @click="searched = false" class="btn btn-primary btn-sm mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 mb-2 mb-sm-2 mb-md-2 mb-lg-2 mb-xl-3 mb-xxl-3 border-0" style="background-color: #a95fe8; display: none">
                  <i class="bi bi-arrow-left px-2 px-sm-2 px-md-2 px-lg-3 px-xl-3 px-xxl-3"></i>
                </button>

                <div class="itinerary border border-dark rounded-3 shadow-lg py-2 py-sm-2 py-md-2 py-lg-2 py-xl-3 py-xxl-3 pe-2 pe-sm-2 pe-md-2 pe-lg-2 pe-xl-3 pe-xxl-3">
                  <div class="overflow-auto" style="height: 70vh">
                    <div class="pt-1 pt-sm-1 pt-md-1 pt-lg-1 pt-xl-2 pt-xxl-2 pe-2 ps-3 ps-sm-3 ps-md-4 ps-lg-4 ps-xl-4 ps-xxl-4">
                      <div class="" style="overflow-y: auto">
                        <div v-for="(day, dayIndex) in itinerary" :key="dayIndex" class="bg-transparent text-light">
                          <!-- Use another v-for to iterate over the lines within each day -->
                          <div style="text-align: justify" v-for="(line, lineIndex) in day" :key="lineIndex" class="bg-transparent mb-2 mb-sm-2 mb-md-2 mb-lg-3 mb-xl-3 mb-xxl-3">
                            <!-- Highlight entities in the line -->
                            <span class="lines" v-html="highlightEntities(line)"></span>
                            <!-- {{ line }} -->
                          </div>
                          <hr class="divider" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="d-flex justify-content-end mt-2">
                      <button type="button" @click="saveToItinerarys" class="btn btn-primary btn-sm mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 border-0" style="background-color: #a95fe8">
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
                    <div class="">
                      <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
                        <Slide v-for="name in name_entity" :key="name" class="pe-auto">
                          <router-link to="#" class="">
                            <div class="carousel__item">
                              <div class="card text-bg-dark">
                                <img :src="imgSource + name" class="img-fluid icon-link-hover" alt="..." style="width: 100%; height: 100%; object-fit: cover" />

                                <div class="card-img-overlay" style="width: 100%; height: 100%; position: absolute; bottom: 0; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 44%, rgba(0, 0, 0, 0.77) 100%)">
                                  <div class="position-relative">
                                    <div class="ratings position-absolute top-0 end-0">
                                      <span class="px-2 py-1 rounded shadow-lg" style="background-color: #a95fe8">4.4</span>
                                    </div>
                                  </div>
                                  <div class="mb-2 d-flex justify-content-center" style="width: 100%; position: absolute; bottom: 0">
                                    <p class="card-text" style="overflow: hidden; text-transform: capitalize">{{ name }}</p>
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
              <div class="row mb-3 px-3">
                <div class="footer1 mb-2 mb-sm-2 text-center text-sm-center text-md-start text-lg-start text-xl-start text-xxl-start col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <span class="" style="color: rgb(245, 245, 245); font-weight: 500; text-shadow: 0 0 20px #000">© 2023 TRIPYTOE</span>
                </div>
                <div class="footer2 text-center text-sm-center text-md-end text-lg-end text-xl-end text-xxl-end col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <span class="" style="color: rgb(245, 245, 245); font-weight: 500; text-shadow: 0 0 20px #000">
                    Made with
                    <i class="bi bi-heart-fill text-danger" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)"></i>
                    in GOA</span
                  >
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
                  <div style="position: relative; overflow: hidden">
                    <img src="../assets/slideImg5.jpg" class="d-block w-100 img-fluid" alt="..." style="width: 100%; height: 100vh; object-fit: cover; transition: transform 2s ease-in-out" />
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(161, 155, 199, 0.2); transition: background 1s ease-in-out"></div>
                  </div>
                </div>
                <div v-if="activeIndex == 1" class="carousel-item active">
                  <img src="../assets/slideImg11.jpg" class="d-block w-100 img-fluid" alt="..." style="width: 100%; height: 100vh; object-fit: cover; transition: transform 2s ease-in-out" />
                </div>
                <div v-if="activeIndex == 2" class="carousel-item active">
                  <img src="../assets/slideImg10.jpg" class="d-block w-100 img-fluid" alt="..." style="width: 100%; height: 100vh; object-fit: cover; transition: transform 2s ease-in-out" />
                </div>
                <div v-if="activeIndex == 3" class="carousel-item active">
                  <img src="../assets/slideImg6.webp" class="d-block w-100 img-fluid" alt="..." style="width: 100%; height: 100vh; object-fit: cover; transition: transform 2s ease-in-out" />
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
  name: "Home4",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      searched: false,
      next: 0,
      itinerary: [],
      preference: ["nightlife", "offbeat"],
      form: {
        destination: "",
        no_of_days: "",
        start_date: "" /* "2024-01-27" */,
        no_of_ppl: "",
        preference: "0",
        budget: "",

        plan: "",
      },
      id: "",
      imgSource: "https://source.unsplash.com/1400x720/?beach,goa",
      loadingPercentage: 0,
      activeIndex: 0,
      progressBars: [0, 0, 0, 0],
      imageIndex: 0,
      name_entity: [],
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
          itemsToShow: 1.3,
          snapAlign: "center",
        },
        // 400px and up
        400: {
          itemsToShow: 1.3,
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
    } catch (err) {
      console.log("error: ", err);
    }
  },
  mounted() {
    this.startProgress();
  },

  methods: {
    handleNext() {
      this.next++;
      console.log(this.next);
    },
    handlePrev() {
      this.next--;
      console.log(this.next);
    },
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
          this.next = 0;
        } catch (error) {
          console.error("Somthing went wrong", error);
        }
      } else {
        console.log("Form Values Are ", this.form, this.error);
        for (const item of this.error) {
          if (item == "destination") {
            this.next = 1;
            toast.error(`Enter Destination`, {
              autoClose: 1500,
            });
            break;
          }
          if (item == "no_of_ppl") {
            this.next = 2;
            toast.error(`Enter Number Of People`, {
              autoClose: 1500,
            });
            break;
          }
          if (item == "start_date") {
            this.next = 3;
            toast.error(`Enter Start Date`, {
              autoClose: 1500,
            });
            break;
          }
          if (item == "no_of_days") {
            this.next = 4;
            toast.error(`Enter Number Of Days`, {
              autoClose: 1500,
            });
            break;
          }
          if (item == "budget") {
            this.next = 5;
            toast.error(`Enter Budget`, {
              autoClose: 1500,
            });
            break;
          }
        }
      }
    },

    highlightEntities(line) {
      // Highlight entities in the line using name_entity array
      for (const entity of this.name_entity) {
        const regex = new RegExp(`\\b${entity}\\b`, "gi");
        line = line.replace(regex, `<span style="color: yellow;text-decoration:underline;cursor: pointer; text-transform:capitalize">${entity}</span>`);
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
        //console.log("Active Index", this.activeIndex);
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
