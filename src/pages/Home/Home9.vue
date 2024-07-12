<style>
.home-cover {
  background-image: url("../../assets/slideImg14.jpg");
  background-size: cover;
}
@media (max-width: 576px) {
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
}

@media (max-width: 992px) {
}

@media (max-width: 1200px) {
}

@media (max-width: 1400px) {
}
</style>

<template>
  <div class="main-div">
    <div class="vh-100 border-5 home-cover">
      <div class="w-100 d-flex h-100 flex-column flex-sm-row">
        <div class="w-100 border border-danger border-3 h-100 d-flex flex-column justify-content-evenly align-items-center">
          <div class="border w-100 ps-2 ps-md-5 text-light">
            <h2>Let Tripytoe Be Your Expert Travel Planner</h2>
          </div>
          <div class="border w-100 ps-2 ps-md-5 text-light">
            <h4>Get your personalized travel plan now</h4>
          </div>
          <div class="border w-100 ps-2 ps-md-5 text-light">
            <button type="button" class="btn btn-primary">Primary</button>
          </div>
        </div>
        <div class="border border-danger border-3 h-100 d-none d-md-block flex-shrink-1 p-2 p-md-5" style="min-width: 35%">
          <div class="neomorphic border h-100">
            <div class="form-container border h-100">
              <form @submit.prevent="handleSubmit" class="border border-danger h-100 bg-light">
                <div>
                  <h3>Get Your Travel Plan Now</h3>
                </div>
                <div class="border h-100">
                  <div>
                    <h6>Where you wnat to spend your holiday</h6>
                  </div>

                  <div class="">
                    <input class="form-control" type="text" placeholder="Departing from" aria-label="default input example" />
                  </div>

                  <div class="">
                    <input class="form-control" type="text" placeholder="Where you want to go" aria-label="default input example" />
                  </div>

                  <div>
                    <div class="demo-date-picker">
                      <div class="block">
                        <el-date-picker v-model="dateRange" type="daterange" range-separator="To" start-placeholder="Start date" end-placeholder="End date" size="small" />
                      </div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center">
                    <button type="button" @click="handleSubmit" class="btn btn-primary">Primary</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      id: "",
      destination: "" /* "shimla" */,
      no_of_ppl: "" /* "solo" */,
      no_of_days: "" /*  "2" */,
      start_date: "" /* "2024-01-27" */,
      dateRange: "",
      end_date: "" /* "2024-01-27" */,
      budget: "0" /* "Balanced" */,
      preference: /* "nightlife" */ [],
      itineraryDays: [],
    };
  },

  methods: {
    handleSubmit() {
      // Handle the form submission logic here
      console.log("range: ", this.dateRange);
    },
  },
};
</script>

<!-- 
<script setup>
import { ref } from "vue";

const size = "small";

const value1 = ref("");
const value2 = ref("");

const shortcuts = [
  {
    text: "Last week",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: "Last month",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: "Last 3 months",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];
</script>-->
