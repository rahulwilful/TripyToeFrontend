<style scoped>
.main {
  position: relative;
  width: 100%;
  min-height: 100vh;
}
::placeholder {
  color: rgb(131, 131, 131);
  font-family: "Trebuchet MS", sans-serif;
}
.lable {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 20px;
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
  border: 1px solid rgba(111, 72, 170, 0.9);
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
  border-top: 2px solid rgba(150, 108, 214, 0.9);
  border-bottom: 2px solid rgba(150, 108, 214, 0.9);
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

.btn-select-item {
  background-color: rgba(111, 72, 170, 0.9);
  color: white;
}

.btn-select-item:hover {
  transition: transform 0.2s ease-in-out;
  color: rgba(111, 72, 170, 0.9);
  background-color: white;
  transform: scale(1.02, 1.02);

  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
}

.dropdown-item {
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: rgb(197, 197, 197);
  transition: transform 0.2s ease-in-out;
  transform: scale(1.02, 1.02);
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

  .form3 {
    width: 85vw;
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
  .form3 {
    width: 45vw;
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
  .form3 {
    width: 40vw;
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
  .form3 {
    width: 45vw;
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
  .form3 {
    width: 40vw;
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
  <div class="main-div">
    <button class="generate-itinerary rounded border-0 px-3 py-3 shadow-lg text-light fw-semibold" type="button" style="background-color: #a95fe8" v-if="next == 0" @click="handleNext">Generate Itinerary</button>
    <span v-if="next > 0" class="form1 rounded shadow-lg mx-4 mx-sm-4 mx-md-4 mx-lg-5 mx-xl-5 mx-xxl-5">
      <div v-auto-animate class="row gx-1 gx-sm-1 gx-md-2 gx-lg-2 gx-xl-3 gx-xxl-3 pt-3 pt-sm-3 pt-md-3 pt-lg-2 pt-xl-3 pt-xxl-3 px-3 px-sm-3 px-md-3 px-lg-2 px-xl-3 px-xxl-3">
        <div v-if="next == 1" class="mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label for="exampleFormControlInputDestination" class="form-label lable">Where You Want To Go ?</label>
          <input class="form-control text-dark border-0 border-dark border-bottom bg-transparent text-capitalize" id="exampleFormControlInputDestination" v-model="form.destination" type="text" placeholder="Goa" aria-label=".form-control-sm example" />
        </div>
        <div v-if="next == 2" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div class="">
            <label for="exampleFormControlInputNo_of_ppl" class="form-label lable">Who is Going? <i class="bi bi-backpack4-fill"></i></label>
            <div v-auto-animate>
              <div v-if="no_of_ppl == 1" class="rounded-3 mt-1 d-flex flex-shrink pe-auto" style="background-color: rgba(111, 72, 170, 0.9); border: 1px solid rgba(111, 72, 170, 0.9)">
                <span class="py-3 ps-3 text-light">
                  <h5 class="">Only Me <i class="bi bi-person-walking"></i></h5>
                  Traveling Solo ,Just You
                </span>
              </div>
              <div v-else @click="handleNo_of_ppl(1)" class="rounded-3 mt-1 d-flex flex-shrink pe-auto" style="background-color: rgb(224, 224, 224)">
                <span class="py-3 ps-3">
                  <h5 class="">Only Me <i class="bi bi-person-walking"></i></h5>
                  Traveling Solo ,Just You
                </span>
              </div>
            </div>

            <div v-auto-animate>
              <div v-if="no_of_ppl == 2" class="rounded-3 mt-1 d-flex flex-shrink pe-auto" style="background-color: rgba(111, 72, 170, 0.9); border: 1px solid rgba(111, 72, 170, 0.9)">
                <span class="py-3 ps-3 text-light">
                  <h5 class="">Couples <i class="bi bi-heart-fill text-danger"></i></h5>
                  Romantic Tour For Two
                </span>
              </div>
              <div v-else @click="handleNo_of_ppl(2)" class="rounded-3 mt-1 d-flex flex-shrink pe-auto" style="background-color: rgb(224, 224, 224)">
                <span class="py-3 ps-3">
                  <h5 class="">Couples <i class="bi bi-heart-fill text-danger"></i></h5>
                  Romantic Tour For Two
                </span>
              </div>
            </div>

            <div v-auto-animate>
              <div v-auto-animate v-if="family == false">
                <div v-if="no_of_ppl == 3" @click="handleNo_of_ppl(3)" class="rounded-3 mt-1 d-flex flex-shrink pe-auto" style="background-color: rgba(111, 72, 170, 0.9); border: 1px solid rgba(111, 72, 170, 0.9)">
                  <span class="py-3 ps-3 text-light">
                    <h5 class="">Family <i class="bi bi-person-hearts"></i></h5>
                    Qulity Time With Your Loved Once
                  </span>
                </div>
                <div v-else @click="handleNo_of_ppl(3)" class="rounded-3 mt-1 d-flex flex-shrink pe-auto" style="background-color: rgb(224, 224, 224)">
                  <span class="py-3 ps-3">
                    <h5 class="">Family <i class="bi bi-person-hearts"></i></h5>
                    Qulity Time With Your Loved Ones
                  </span>
                </div>
              </div>
              <div v-if="family == true && no_of_ppl == 3">
                <div class="rounded-3 mt-1 d-flex flex-column pe-auto" style="background-color: rgb(224, 224, 224); border: 1px solid rgba(111, 72, 170, 0.9)">
                  <span class="py-3 px-3">
                    <label for="exampleFormControlInputNo_of_family" class="form-label lable">Enter Number Of Loved Ones </label>
                    <input @change="handleFamily()" class="form-control form-control-sm text-dark border border-dark bg-transparent" v-model="members" type="number" placeholder="No. Of People" aria-label=".form-control-sm example" id="exampleFormControlInputNo_of_family" />
                  </span>
                </div>
              </div>
            </div>
            <div v-auto-animate>
              <div v-auto-animate v-if="friends == false">
                <div v-if="no_of_ppl == 4" @click="handleNo_of_ppl(4)" class="rounded-3 mt-1 d-flex flex-shrink pe-auto" style="background-color: rgba(111, 72, 170, 0.9); border: 1px solid rgba(111, 72, 170, 0.9)">
                  <span class="py-3 ps-3 text-light">
                    <h5 class="">Friends <i class="bi bi-person-arms-up"></i><i class="bi bi-person-raised-hand"></i></h5>
                    Adventure With Your Closest Path
                  </span>
                </div>
                <div v-else @click="handleNo_of_ppl(4)" class="rounded-3 mt-1 d-flex flex-shrink pe-auto" style="background-color: rgb(224, 224, 224)">
                  <span class="py-3 ps-3">
                    <h5 class="">Friends <i class="bi bi-person-arms-up"></i><i class="bi bi-person-raised-hand"></i></h5>
                    Adventure With Your Closest Path
                  </span>
                </div>
              </div>
              <div v-if="friends == true && no_of_ppl == 4">
                <div class="rounded-3 mt-1 d-flex flex-column pe-auto" style="background-color: rgb(224, 224, 224); border: 1px solid rgba(111, 72, 170, 0.9)">
                  <span class="py-3 px-3">
                    <label for="exampleFormControlInputNo_of_friends" class="form-label lable">Enter Number Friends</label>
                    <input @change="handleFriends()" class="form-control form-control-sm text-dark border border-dark bg-transparent" v-model="members" type="number" placeholder="Number Of Friends" aria-label=".form-control-sm example" id="exampleFormControlInputNo_of_friends" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="next == 3" class="mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div class="row gx-2">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label for="date" class="form-label lable">When You Want To Go ?</label>
              <input placeholder="2014/12/01" class="form-control text-dark border-0 border-bottom border-dark bg-transparent textbox-n" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" v-model="form.start_date" aria-label=".form-control-sm example" />
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
              <label for="date" class="form-label lable">When Your Trip ends ?</label>
              <input placeholder="2014/12/01" class="form-control text-dark border-0 border-bottom border-dark bg-transparent textbox-n" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" v-model="form.end_date" aria-label=".form-control-sm example" />
            </div>
          </div>
        </div>
        <!-- <div v-if="next == 4" class="d-flex mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div> -->
        <div v-if="next == 4" class="mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <!-- <input class="form-control text-light border-0 border-secondary border-bottom bg-transparent" v-model="form.budget" type="number" placeholder="Please Enter Your Budget" aria-label=".form-control-sm example" /> -->
          <div v-auto-animate class="">
            <label for="exampleFormControlInputBudget" class="form-label lable">Please Select Your Budget ?</label>
            <div v-auto-animate>
              <div v-if="budget == 1" class="rounded-3 mt-1 d-flex flex-shrink pe-auto" style="background-color: rgba(111, 72, 170, 0.9); border: 1px solid rgba(111, 72, 170, 0.9)">
                <span class="py-3 ps-3 text-light">
                  <h5 class="">Balanced <i class="bi bi-bus-front"></i></h5>
                  Moderate Spending For Balanced Trip
                </span>
              </div>
              <div v-else @click="handleBudget(1)" class="rounded-3 mt-1 d-flex flex-shrink pe-auto" style="background-color: rgb(224, 224, 224)">
                <span class="py-3 ps-3">
                  <h5 class="">Balanced <i class="bi bi-bus-front"></i></h5>
                  Moderate Spending For Balanced Trip
                </span>
              </div>
            </div>

            <div v-auto-animate>
              <div v-if="budget == 2" class="rounded-3 mt-1 d-flex flex-shrink pe-auto" style="background-color: rgba(111, 72, 170, 0.9); border: 1px solid rgba(111, 72, 170, 0.9)">
                <span class="py-3 ps-3 text-light">
                  <h5 class="">Luxury <i class="bi bi-train-front"></i></h5>
                  High-End Indulgent Experiences
                </span>
              </div>
              <div v-else @click="handleBudget(2)" class="rounded-3 mt-1 d-flex flex-shrink pe-auto" style="background-color: rgb(224, 224, 224)">
                <span class="py-3 ps-3">
                  <h5 class="">Luxury <i class="bi bi-train-front"></i></h5>
                  High-End Indulgent Experiences
                </span>
              </div>
            </div>

            <div v-auto-animate>
              <div v-if="budget == 3" class="rounded-3 mt-1 d-flex flex-shrink pe-auto" style="background-color: rgba(111, 72, 170, 0.9); border: 1px solid rgba(111, 72, 170, 0.9)">
                <span class="py-3 ps-3 text-light">
                  <h5 class="">Flexible <i class="bi bi-airplane-engines"></i></h5>
                  No Budget Restrictions
                </span>
              </div>
              <div v-else @click="handleBudget(3)" class="rounded-3 mt-1 d-flex flex-shrink pe-auto" style="background-color: rgb(224, 224, 224)">
                <span class="py-3 ps-3">
                  <h5 class="">Flexible <i class="bi bi-airplane-engines"></i></h5>
                  No Budget Restrictions
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="next == 5" class="mb-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div>
            <label for="exampleFormControlInputPreference" class="form-label lable">Please Select Your Preference</label>
            <div class="d-flex justify-content-evenly flex-wrap overflow-y-scroll">
              <div v-auto-animate v-for="items in preference" :key="items" class="">
                <button type="button" @click="handlePreferenceSelection(items.name)" v-if="items.selected == false" class="border mx-2 my-2 rounded-pill px-2 pe-auto bg-body-secondary">{{ items.name }}</button>
                <button type="button" @click="handlePreferenceSelection(items.name)" v-if="items.selected == true" class="border mx-2 my-2 rounded-pill px-2 pe-auto text-light" style="background-color: rgba(111, 72, 170, 0.9)">{{ items.name }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Next Button -->
      <button v-if="next < 5" type="button" @click="handleNext" class="btn btn-primary btn-sm float-end mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 my-2 my-sm-2 my-md-2 my-lg-2 my-xl-3 my-xxl-3 border-0" style="background-color: #a95fe8">Next</button>
      <!-- Go Button -->
      <button v-if="next == 5" type="button" @click="props.handleSubmit(form)" class="btn btn-primary btn-sm float-end mx-2 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-3 mx-xxl-3 my-2 my-sm-2 my-md-2 my-lg-2 my-xl-3 my-xxl-3 border-0" style="background-color: #a95fe8">
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
</template>

<script>
export default {
  name: "Home",

  props: {
    handleSubmit: {
      type: Function,
    },
  },

  data() {
    return {
      other_options: ["Colvale Beach", "Beach Cafe", "Mountain Falls", "Big Lake"],
      modify: false,
      preferenceToggler: false,
      budget: 0,
      no_of_ppl: 0,
      button: true,
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

      preference: [
        { name: "Nightlife", selected: false },
        { name: "Cultural Exploration", selected: false },
        { name: "City Breaks", selected: false },
        { name: "Adventure Travel", selected: false },
        { name: "Offbeat", selected: false },
        { name: "Road Trips", selected: false },
        { name: "Wine Tours", selected: false },
        { name: "Beach Vacations", selected: false },
        { name: "Art Gallaries", selected: false },
      ],

      //preference: ["nightlife", "offbeat", "Adventure Travel", "City Breaks", "Cultural Exploration", "Nature Escapes", "Road Trips", "Art Gallaries", "Beach Vacations", "Wine Tours"],
      form: {
        id: "",
        destination: "" /* "shimla" */,
        no_of_ppl: "" /* "solo" */,
        no_of_days: "" /*  "2" */,
        start_date: "" /* "2024-01-27" */,
        end_date: "" /* "2024-01-27" */,
        budget: "0" /* "Balanced" */,
        preference: /* "nightlife" */ [],
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

      //carousel settings
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

  methods: {
    handleBudget(no) {
      this.budget = no;
      if (no == 1) {
        this.form.budget = "Balanced";
      } else if (no == 2) {
        this.form.budget = "Luxury";
      } else {
        this.form.budget = "Flexible";
      }
    },

    handlePreferenceSelection(item) {
      console.log("handlePreferenceSelection called", item);
      for (var item2 in this.preference) {
        if (item == this.preference[item2].name) {
          if (this.preference[item2].selected == false) {
            this.preference[item2].selected = !this.preference[item2].selected;
            this.form.preference.push(item);
            console.log("preference", this.form.preference);
          } else {
            this.preference[item2].selected = !this.preference[item2].selected;
            this.form.preference = this.form.preference.filter((word) => word !== item);
            console.log("preference", this.form.preference);
            return;
          }

          return;
        }
      }
    },

    handleNo_of_ppl(no) {
      this.no_of_ppl = no;
      if (no == 1) {
        console.log("", no);
        this.form.no_of_ppl = "solo";
        this.family = false;
        this.friends = false;
      }
      if (no == 2) {
        console.log("", no);
        this.form.no_of_ppl = "couple";
        this.family = false;
        this.friends = false;
      }
      if (no == 3) {
        console.log("", no);
        this.toggleFamily();
      }
      if (no == 4) {
        console.log("", no);
        this.toggleFriends();
      }
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
        this.family = false;
        this.friends = false;
        console.log(this.form.no_of_ppl);
      }
      this.next++;
      console.log(this.next);
    },

    toggleButton() {
      this.button = !this.button;
    },

    handlePrev() {
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
  },
};
</script>
