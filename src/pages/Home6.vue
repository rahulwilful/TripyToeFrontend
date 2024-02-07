<style scoped>
.main {
  position: relative;
  width: 100%;
  height: 100vh;
}
::placeholder {
  color: rgb(131, 131, 131);
}
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
/* Zoom Out Zoom In Animation */
.img-fluid1 {
  animation: zoom-in-zoom-out 15s ease infinite;
}

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1.2, 1.2);
  }
  50% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1.2, 1.2);
  }
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

.form1 {
  background: rgba(255, 255, 255, 0.795);
  backdrop-filter: blur(10px);
  max-width: 900px;
}

.collapse-2 {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  max-width: 900px;
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

.form2 {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

@media (max-width: 400px) {
  .form1 {
    width: 90vw;
  }
  .collapse-2 {
    width: 40vw;
  }
}

@media (min-width: 401px) {
  .form1 {
    width: 70vw;
  }
}

@media (max-width: 575px) {
  .collapse-2 {
    width: 75vw;
  }
}

@media (min-width: 576px) {
  .collapse-2 {
    width: 40vw;
  }
}

@media (min-width: 992px) {
  .form1 {
    width: 40vw;
  }
  .form2 {
    width: 65%;
  }

  .collapse-2 {
    width: 40vw;
  }
}

@media (max-width: 500) {
  .card {
    width: 20rem;
    height: 13.3rem;
    position: relative;
    overflow: hidden;
  }
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

.Itinerary-header-info {
  width: 50%;

  background-color: rgba(111, 72, 170, 0.9);
  height: 100%;
}

.searched-header {
  height: 50%;
}

.searched-card {
  height: 50%;
}

.edit-modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.edit-modal-container {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.edit-modal-inputs {
  width: 50vw;
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
  .searched-header {
    height: 30%;
  }

  .searched-card {
    height: 70%;
  }
  .edit-modal-inputs {
    width: 95vw;
    min-height: 20rem;
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
  .edit-modal-inputs {
    width: 90vw;
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
  .edit-modal-inputs {
    width: 80vw;
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
  .edit-modal-inputs {
    width: 70vw;
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
  .edit-modal-inputs {
    width: 50vw;
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
  <div>
    <div class="main">
      <div class="content">
        <div v-auto-animate class="content2">
          <div v-if="!searched" class="scroll-container">
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
            <div v-if="!searched" class="container container-sm container-md container-lg container-xl container-xxl flex-column d-flex justify-content-center align-items-center position-relative" style="height: calc(100vh - 20px)">
              <div v-auto-animate class="d-flex justify-content-center align-items-center px-3 px-sm-3 px-md-3 px-lg-5 px-xl-5 px-xxl-5">
                <button class="generate-itinerary rounded border-0 px-3 py-3 shadow-lg text-light fw-semibold" type="button" style="background-color: #a95fe8" v-if="next == 0" @click="handleNext">Generate Itinerary</button>
                <span v-if="next > 0" class="form1 rounded shadow-lg mx-4 mx-sm-4 mx-md-4 mx-lg-5 mx-xl-5 mx-xxl-5">
                  <div v-auto-animate class="row gx-1 gx-sm-1 gx-md-2 gx-lg-2 gx-xl-3 gx-xxl-3 pt-3 pt-sm-3 pt-md-3 pt-lg-2 pt-xl-3 pt-xxl-3 px-3 px-sm-3 px-md-3 px-lg-2 px-xl-3 px-xxl-3">
                    <div v-if="next == 1" class="mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <label for="exampleFormControlInputDestination" class="form-label">Where You Want To Go ?</label>
                      <input class="form-control text-dark border-0 border-dark border-bottom bg-transparent" id="exampleFormControlInputDestination" v-model="form.destination" type="text" placeholder="Goa" aria-label=".form-control-sm example" />
                    </div>
                    <div v-if="next == 2" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <div class="">
                        <label for="exampleFormControlInputNo_of_ppl" class="form-label">Who is Going?</label>

                        <p
                          id="exampleFormControlInputNo_of_ppl"
                          class="d-inline-flex border-0 border-bottom border-dark rounded bg-transparent text-dark px-2 d-flex justify-content-between"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                          style="width: 100%"
                        >
                          <span class="text-secondary" v-if="!form.no_of_ppl"> Couple </span>
                          <span class="" v-else>{{ form.no_of_ppl }}</span>
                          <span class=""><i class="bi bi-chevron-down text-dark"></i></span>
                        </p>
                        <div class="collapse" id="collapseExample" style="position: absolute">
                          <div class="form1 px-2 py-2 rounded bg-dark text-light">
                            <div @click="handleSolo" style="cursor: pointer">Solo</div>
                            <div @click="handleCouple" style="cursor: pointer">Couple</div>
                            <div style="cursor: pointer">
                              <div class="row">
                                <div @click="toggleFamily" class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl">Family</div>
                                <div class="col-8 col-sm-5 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                  <div v-if="family == true">
                                    <input class="form-control form-control-sm text-light border border-dark bg-transparent" v-model="members" type="number" placeholder="No. Of People" aria-label=".form-control-sm example" />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div style="cursor: pointer">
                              <div class="row">
                                <div @click="toggleFriends" class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl">Friends</div>
                                <div class="col-8 col-sm-5 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                  <div v-if="friends == true">
                                    <input class="form-control form-control-sm mb-1 text-light border border-dark bg-transparent" v-model="members" type="number" placeholder="Number Of Friends" aria-label=".form-control-sm example" />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="d-flex justify-content-end">
                              <button v-if="next > 1" type="button" @click="handlePrev" class="btn btn-primary btn-sm border-0" style="background-color: #a95fe8">Prev</button>
                              <button v-if="next < 5" type="button" @click="handleNext" class="btn btn-primary btn-sm mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 border-0" style="background-color: #a95fe8">Next</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="next == 3" class="mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <div class="row gx-2">
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <label for="date" class="form-label">When You Want To Go ?</label>
                          <input placeholder="2014/12/01" class="form-control text-dark border-0 border-bottom border-dark bg-transparent textbox-n" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" v-model="form.start_date" aria-label=".form-control-sm example" />
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                          <label for="exampleFormControlInputNo_of_days " class="form-label">For How Many Days ?</label>
                          <input class="form-control text-dark border-0 border-bottom border-dark bg-transparent" v-model="form.no_of_days" type="number" placeholder="5" aria-label=".form-control-sm example" />
                        </div>
                      </div>
                    </div>
                    <!-- <div v-if="next == 4" class="d-flex mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div> -->
                    <div v-if="next == 4" class="mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <!-- <input class="form-control text-light border-0 border-secondary border-bottom bg-transparent" v-model="form.budget" type="number" placeholder="Please Enter Your Budget" aria-label=".form-control-sm example" /> -->
                      <div>
                        <label for="exampleFormControlInputBudget" class="form-label">Please Select Your Budget</label>
                        <select id="exampleFormControlInputBudget" class="form-select border-0 border-dark border-bottom bg-transparent" v-model="form.budget">
                          <option class="bg-light text-secondary" value="0">Balanced</option>
                          <option class="bg-light text-dark" :value="item" v-for="item in budget_plans" :key="item">{{ item }}</option>
                        </select>
                      </div>
                    </div>
                    <div v-if="next == 5" class="mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <div>
                        <label for="exampleFormControlInputPreference" class="form-label">Please Select Your Preference</label>
                        <select id="exampleFormControlInputPreference" class="form-select text-dark border-0 border-secondary border-bottom bg-transparent" v-model="form.preference">
                          <option class="bg-light" value="0">Night-Out</option>
                          <option class="bg-light" :value="item" v-for="item in preference" :key="item">{{ item }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- Next Button -->
                  <button v-if="next < 5" type="button" @click="handleNext" class="btn btn-primary btn-sm float-end mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 my-2 my-sm-2 my-md-2 my-lg-2 my-xl-3 my-xxl-3 border-0" style="background-color: #a95fe8">Next</button>
                  <!-- Go Button -->
                  <button v-if="next == 5" type="button" @click="handleSubmit" class="btn btn-primary btn-sm float-end mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 my-2 my-sm-2 my-md-2 my-lg-2 my-xl-3 my-xxl-3 border-0" style="background-color: #a95fe8">
                    <span v-if="!loading"> Go <i class="bi bi-arrow-right"></i> </span>
                    <div v-if="loading" class="mx-2">
                      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                      <span class="visually-hidden" role="status">Loading...</span>
                    </div>
                  </button>
                  <!-- Previous Button -->
                  <button v-if="next > 1" type="button" @click="handlePrev" class="btn btn-primary btn-sm float-end my-2 my-sm-2 my-md-2 my-lg-2 my-xl-3 my-xxl-3 border-0" style="background-color: #a95fe8">Prev</button>
                </span>
              </div>
              <!-- ////////////////////////////////////////////////////////////// -->
              <div class="row mb-3 px-3 w-100 position-absolute bottom-0">
                <div class="footer1 mb-2 mb-sm-2 text-center text-sm-center text-md-start text-lg-start text-xl-start text-xxl-start col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <span class="text-light" style="font-weight: 500; text-shadow: 0 0 20px #000">© 2023 TRIPYTOE</span>
                </div>
                <div class="footer2 text-center text-sm-center text-md-end text-lg-end text-xl-end text-xxl-end col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <span class="text-light" style="font-weight: 500; text-shadow: 0 0 20px #000">
                    Made with
                    <i class="bi bi-heart-fill text-danger" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)"></i>
                    in GOA</span
                  >
                </div>
              </div>
            </div>

            <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

            <div v-auto-animate v-if="searched" class="">
              <div class="" style="height: 60vh">
                <div id="carouselExampleAutoplaying" class="carousel slide" style="height: 100%" data-bs-ride="carousel">
                  <div v-auto-animate class="carousel-inner" style="height: 100%; position: relative">
                    <div class="carousel-item active" style="height: 100%">
                      <img :src="searchedImgSource + form.destination + night + form.prefernce" class="d-block w-100" style="object-fit: cover; height: 100%" alt="..." />
                    </div>
                    <div class="carousel-item" style="height: 100%">
                      <img :src="searchedImgSource + form.destination + morning + form.prefernce" class="d-block w-100" style="object-fit: cover; height: 100%" alt="..." />
                    </div>
                    <div class="carousel-item" style="height: 100%">
                      <img :src="searchedImgSource + form.destination + evening + form.prefernce" class="d-block w-100" style="object-fit: cover; height: 100%" alt="..." />
                    </div>
                    <div class="h-100 w-100 py-3" style="position: absolute">
                      <div class="w-100 searched-header d-flex justify-content-center align-items-end align-items-sm-center">
                        <span v-if="form.no_of_days == 1">
                          <h2 class="text-light fw-semibold mb-3 mb-sm-0" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); text-transform: capitalize">{{ form.no_of_days }} Day Trip To {{ form.destination }}</h2>
                        </span>
                        <span v-else>
                          <h2 class="text-light fw-semibold mb-3 mb-sm-0" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); text-transform: capitalize">{{ form.no_of_days }} Days Trip To {{ form.destination }}</h2>
                        </span>
                      </div>
                      <div class="searched-card">
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
                              <div class="w-100 h-50 overflow-y-scroll px-2 d-flex justify-content-center text-light align-items-center">
                                <div v-auto-animate class="">
                                  <div v-if="card == 0" class="" style="text-align: justify">
                                    <div>Goa is known for its beautiful beaches, vibrant nightlife, and rich Portuguese heritage. It's a popular tourist destination, so be prepared for crowds, especially during peak season</div>
                                  </div>
                                  <div v-if="card == 1" class="" style="text-align: justify">
                                    <div>
                                      Goa has a tropical monsoon climate. The weather is hot and humid throughout the year. In the winter (November to February), temperatures range from 70-90°F (20-32°C) with little to no rainfall. In the summer (March to May), temperatures can soar above 100°F
                                      (38°C) with high humidity. The monsoon season (June to September) brings heavy rainfall.
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

              <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

              <div class="d-flex justify-content-center align-items-center my-3 my-sm-3 my-md-3 my-lg-4 my-xl-5 my-xxl-5 position-relative">
                <div class="position-absolute start-0 d-flex flex-column flex-sm-row">
                  <button @click="handleBack()" style="background-color: rgb(123, 84, 163); border: none" type="button" class="px-3 px-sm-3 px-md-3 px-lg-3 px-xl-3 px-xxl-3 py-1 py-sm-1 py-md-1 py-lg-1 py-xl-1 py-xxl-1 rounded ms-2 ms-sm-3 text-light fw-semibold">
                    <i class="bi bi-arrow-left"></i>
                  </button>
                  <button @click="edit = true" style="background-color: rgb(123, 84, 163); border: none" type="button" class="px-3 px-sm-3 px-md-3 px-lg-3 px-xl-3 px-xxl-3 py-1 py-sm-1 py-md-1 py-lg-1 py-xl-1 py-xxl-1 rounded ms-2 ms-sm-3 mt-1 mt-sm-0 text-light fw-semibold">Edit</button>
                </div>
                <div class="position-absolute end-0">
                  <button @click="saveToItinerarys()" style="background-color: rgb(123, 84, 163); border: none" type="button" class="px-3 px-sm-3 px-md-3 px-lg-3 px-xl-3 px-xxl-3 py-1 py-sm-1 py-md-1 py-lg-1 py-xl-1 py-xxl-1 rounded me-2 me-sm-3 text-light fw-semibold">Save</button>
                </div>
                <div>
                  <h5 class="d-flex justify-content-center">Starting date</h5>
                  <button style="background-color: rgb(123, 84, 163); border: none" type="button" class="px-3 rounded-pill text-light fw-semibold">{{ form.start_date }} <i class="bi bi-calendar2-week"></i></button>
                </div>
              </div>

              <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

              <div class="" style="">
                <div>
                  <div v-for="day in itinerary" :key="day" class="itinerarys">
                    <div class="itinerary my-3 mb-sm-3 mb-md-3 mb-lg-4 mb-xl-5 mb-xxl-5 container container-sm container-md container-lg container-xl container-xxl rounded-4 d-flex justify-content-center" style="background-color: rgb(238, 233, 248)">
                      <div class="itinery-box rounded mx-0 mx-sm-1 mx-md-2 mx-lg-4 mx-xl-5 mx-xxl-5">
                        <div class="itinerary-heading w-100 my-2 my-3">
                          <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start">
                              <h1 class="day-heading">{{ day.day_no }}</h1>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start">
                              <div class="day-heading-subject">
                                <h4 class="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start">{{ day.day_sub }}</h4>
                                <h6 class="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start">{{ day.other_detail }}</h6>
                              </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-around justify-content-xl-around justify-content-xxl-around align-items-end">
                              <button type="button" style="background-color: rgb(141, 97, 187); border: none" class="px-2 rounded-pill text-light mx-1 fw-semibold">Modify</button>
                              <button type="button" style="background-color: rgb(141, 97, 187); border: none" class="px-2 rounded-pill text-light mx-1 fw-semibold">Regenerate</button>
                            </div>
                          </div>
                        </div>
                        <div class="itinerary-day-box w-100 bg-light rounded-4 my-2 p-3 p-sm-3 p-md-3 p-lg-3 p-xl-4 p-xxl-4 my-3" style="box-shadow: 0px 5px 7px 4px rgba(0, 0, 0, 0.1)">
                          <div v-for="dayActivities in day.activities" :key="dayActivities" class="w-100 h-100">
                            <div class="py-1 fs-6" style="text-align: justify">
                              <span
                                ><strong class="fw-semibold">{{ dayActivities.activity_time }} : </strong></span
                              ><span class="fw-normal" v-html="highlightEntities(dayActivities.activity)"> </span>
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

                <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

                <div class="row mb-3 px-3">
                  <div class="footer1 mb-2 mb-sm-2 text-center text-sm-center text-md-start text-lg-start text-xl-start text-xxl-start col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <span class="" style="color: rgb(123, 84, 163); font-weight: 500; text-shadow: 0 0 20px #000">© 2023 TRIPYTOE</span>
                  </div>
                  <div class="footer2 text-center text-sm-center text-md-end text-lg-end text-xl-end text-xxl-end col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <span class="" style="color: rgb(123, 84, 163); font-weight: 500; text-shadow: 0 0 20px #000">
                      Made with
                      <i class="bi bi-heart-fill text-danger" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)"></i>
                      in GOA</span
                    >
                  </div>
                </div>
              </div>

              <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

              <div v-if="edit == true" class="edit-modal">
                <div class="edit-modal-container d-flex justify-content-center align-items-center">
                  <div v-auto-animate class="edit-modal-inputs bg-light rounded-3 p-3 flex-column d-flex justify-content-center align-items-center border border-success">
                    <div class="row px-2 px-sm-3">
                      <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <input class="form-control text-dark border-0 border-dark border-bottom bg-transparent" id="exampleFormControlInputDestination" v-model="form.destination" type="text" placeholder="Goa" aria-label=".form-control-sm example" />
                      </div>
                      <div class="mt-3 mt-sm-0 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-end">
                        <span class="w-100">
                          <div
                            id="exampleFormControlInputNo_of_ppl"
                            class="border-0 border-bottom border-dark rounded bg-transparent text-dark px-2 d-flex justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                            style="width: 100%"
                          >
                            <span class="text-secondary" v-if="!form.no_of_ppl"> Couple </span>
                            <span class="" v-else>{{ form.no_of_ppl }}</span>
                            <span class=""><i class="bi bi-chevron-down text-dark"></i></span>
                          </div>
                          <div class="collapse" id="collapseExample" style="position: absolute">
                            <div class="form1 px-2 py-2 rounded bg-dark text-light">
                              <div @click="handleSolo" style="cursor: pointer">Solo</div>
                              <div @click="handleCouple" style="cursor: pointer">Couple</div>
                              <div style="cursor: pointer">
                                <div class="row">
                                  <div @click="toggleFamily" class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl">Family</div>
                                  <div class="col-8 col-sm-5 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div v-if="family == true">
                                      <input class="form-control form-control-sm text-light border border-dark bg-transparent" v-model="members" type="number" placeholder="No. Of People" aria-label=".form-control-sm example" />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div style="cursor: pointer">
                                <div class="row">
                                  <div @click="toggleFriends" class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl">Friends</div>
                                  <div class="col-8 col-sm-5 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div v-if="friends == true">
                                      <input class="form-control form-control-sm mb-1 text-light border border-dark bg-transparent" v-model="members" type="number" placeholder="Number Of Friends" aria-label=".form-control-sm example" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="d-flex justify-content-end">
                                <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" class="btn btn-primary bg-transparent btn-sm mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 border-0">
                                  <i class="bi bi-x-lg"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                      <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <input placeholder="2014/12/01" class="form-control text-dark border-0 border-bottom border-dark bg-transparent textbox-n" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" v-model="form.start_date" aria-label=".form-control-sm example" />
                      </div>
                      <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <input class="form-control text-dark border-0 border-bottom border-dark bg-transparent" v-model="form.no_of_days" type="number" placeholder="5" aria-label=".form-control-sm example" />
                      </div>
                      <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <div>
                          <select id="exampleFormControlInputBudget" class="form-select border-0 border-dark border-bottom bg-transparent" v-model="form.budget">
                            <option class="bg-light text-secondary" value="0">Balanced</option>
                            <option class="bg-light text-dark" :value="item" v-for="item in budget_plans" :key="item">{{ item }}</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <div>
                          <select id="exampleFormControlInputPreference" class="form-select text-dark border-0 border-secondary border-bottom bg-transparent" v-model="form.preference">
                            <option class="bg-light" value="0">Night-Out</option>
                            <option class="bg-light" :value="item" v-for="item in preference" :key="item">{{ item }}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="w-100 rounded mt-2">
                      <div>
                        <button v-auto-animate type="button" @click="handleSubmit" class="btn btn-primary btn-sm float-end mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 border-0" style="background-color: #a95fe8">
                          <span v-if="!loading"> Go <i class="bi bi-arrow-right"></i> </span>
                          <div v-if="loading" class="mx-2">
                            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            <span class="visually-hidden" role="status">Loading...</span>
                          </div>
                        </button>
                        <button type="button" @click="edit = false" class="btn btn-primary btn-sm float-end mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 border-0" style="background-color: #a95fe8">
                          <span> Close</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
            </div>
          </div>
        </div>

        <div>
          <div v-if="!searched" class="carousel-content">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div v-if="activeIndex == 0" class="carousel-item active carousel-images">
                  <img src="../assets/slideImg5.jpg" class="d-block w-100 img-fluid1" alt="..." style="width: 100%; height: 100vh; object-fit: cover; transition: transform 2s ease-in-out" />
                </div>
                <div v-if="activeIndex == 1" class="carousel-item active carousel-images">
                  <img src="../assets/slideImg11.jpg" class="d-block w-100 img-fluid1" alt="..." style="width: 100%; height: 100vh; object-fit: cover; transition: transform 2s ease-in-out" />
                </div>
                <div v-if="activeIndex == 2" class="carousel-item active carousel-images">
                  <img src="../assets/slideImg13.jpg" class="d-block w-100 img-fluid1" alt="..." style="width: 100%; height: 100vh; object-fit: cover; transition: transform 2s ease-in-out" />
                </div>
                <div v-if="activeIndex == 3" class="carousel-item active carousel-images">
                  <img src="../assets/slideImg14.jpg" class="d-block w-100 img-fluid1" alt="..." style="width: 100%; height: 100vh; object-fit: cover; transition: transform 2s ease-in-out" />
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
  name: "Home6",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      edit: false,
      card: 0,
      night: ",night",
      morning: ",morning",
      evening: " ,evening",
      budget_plans: ["Balanced", "Luxury", "Flexible"],
      who_is_going: ["solo", "couple", "family", "friends"],
      tempNo_of_ppl: "0",
      traveller: true,
      friends: false,
      family: false,
      loading: false,
      searched: false,
      members: "",
      next: 0,
      itinerary: [],
      preference: ["nightlife", "offbeat"],
      form: {
        id: "",
        destination: "shimla",
        no_of_ppl: "solo",
        no_of_days: 2,
        start_date: "2024-01-27",
        budget: "Balanced",
        preference: "nightlife",

        itineraryDays: [],
      },

      imgSource: "https://source.unsplash.com/1400x720/?beach,goa",
      searchedImgSource: "https://source.unsplash.com/1400x720/?",
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
      this.form.id = token.data.data._id;
      console.log("ID : ", this.form.id);
      // Log the state of items after initialization
      console.log("Initialized items:", this.items);
    } catch (err) {
      console.log("error: ", err);
    }
  },
  mounted() {
    this.startProgressOfBars();
  },

  methods: {
    handleNext() {
      if (this.next == 2 && this.members != "") {
        if (this.family == true) {
          this.form.no_of_ppl = this.members + ", Family Members";
          this.members = "";
        }

        if (this.friends == true) {
          this.form.no_of_ppl = this.members + ", Friends";
          this.members = "";
        }
      }
      this.next++;
      console.log(this.next);
    },
    handlePrev() {
      /*  if (this.next == 2) {
        if (this.family == true) {
          this.family = false;
          this.traveller = true;
          return;
        }
        if (this.friends == true) {
          this.friends = false;
          this.traveller = true;
          return;
        }
      } */

      this.next--;
      console.log(this.next);
    },
    handleSolo() {
      this.form.no_of_ppl = "Solo";
      this.next++;
    },
    handleCouple() {
      this.form.no_of_ppl = "Couple";
      this.next++;
    },

    toggleFamily() {
      if (this.members != "") {
        this.handleFamily();
      }
      this.family = !this.family;
      this.friends = false;
    },

    toggleFriends() {
      if (this.members != "") {
        this.handleFriends();
      }
      this.friends = !this.friends;
      this.family = false;
    },

    handleFamily() {
      this.form.no_of_ppl = this.members + ", Family Members";
    },

    handleFriends() {
      this.form.no_of_ppl = this.members + ", Friends";
    },

    async handleSubmit() {
      this.error = [];
      for (const item in this.form) {
        if (this.form[item] == "") {
          if (item != "itineraryDays") {
            /* console.log("error", item); */
            this.error.push(item);
          }
        }
      }

      if (this.error.length == 0) {
        if (this.form.budget == "0") {
          toast.error(`Please Select Your Budget`, {
            autoClose: 1500,
          });
          this.next = 4;
          return;
        }
        console.log("handleSubmit called");
        try {
          this.loading = true;
          this.traveller = true;
          this.family = false;
          this.friends = false;
          this.members = "";
          const form = this.form;
          console.log(form);
          //const response = await axios.post(`https://expo-web-service.onrender.com/api/v1/tripytoe/get/itinerary`, this.form);

          const response = await axiosClient.post(`destinations/getdestinations/${this.form.id}`, form);
          console.log(response);

          const itineraryString = response.data.result[1].itinerary;
          this.itinerary = response.data.result[1].itinerary;
          this.form.itineraryDays = response.data.result[1].itinerary;
          this.name_entity = response.data.result[1].name_entity;
          console.log("Itinerary JSON", this.itinerary);
          for (let day in itineraryString) {
            for (let day2 in day) {
              console.log("day: ", day);
              console.log("day2: ", day2);
            }
          }

          console.log("Itinerary", this.itinerary);
          this.searched = true;
          this.next = 0;
          this.loading = false;
          this.edit = false;
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
          } else if (item == "no_of_ppl") {
            this.next = 2;
            toast.error(`Enter Number Of People`, {
              autoClose: 1500,
            });
            break;
          } else if (item == "no_of_days") {
            this.next = 3;
            toast.error(`Enter Number Of Days`, {
              autoClose: 1500,
            });
            break;
          } else if (item == "start_date") {
            this.next = 3;
            toast.error(`Enter Start Date`, {
              autoClose: 1500,
            });
            break;
          } else if (item == "budget") {
            this.next = 4;
            toast.error(`Enter Budget`, {
              autoClose: 1500,
            });
            break;
          } else {
          }
        }
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

    /*  highlightEntities(line) {
      // Highlight entities in the line using name_entity array
      for (const entity of this.name_entity) {
        const regex = new RegExp(`\\b${entity}\\b`, "gi");
        line = line.replace(regex, `<span style="color: rgb(94, 28, 201);text-decoration:underline;cursor: pointer; text-transform:capitalize">${entity}</span>`);
      }
      return line;
    }, */

    async saveToItinerarys() {
      try {
        console.log("saveToItenerarys called");
        console.log("form", this.form);
        const response = await axiosClient.post(`user/saveitinerays`, this.form);
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

    handleBack() {
      this.form.destination = "";
      this.form.no_of_ppl = "";
      this.form.no_of_days = null;
      this.form.start_date = "";
      this.form.budget = 0;
      this.form.preference = 0;
      this.searched = false;
      console.log("handleBack Called");
    },

    startProgressOfBars() {
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
            if (this.card != 3) {
              this.card++;
            }
          } else {
            this.imageIndex = (this.imageIndex + 1) % this.items.length;
            this.activeIndex = 0;
            this.card = 0;
          }
        }
      }, 200);
    },
  },
};
</script>
