<style scoped>
.main {
  padding-top: 4.5rem;
}

.para {
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

@media (max-width: 576px) {
  .img {
    height: 40vh;
  }
}

/* Small devices (≥576px) */
@media (min-width: 576px) {
  .img {
    height: 40vh;
  }
}

/* Medium devices (≥768px) */
@media (min-width: 768px) {
  .img {
    height: 75vh;
  }
}

/* Large devices (≥992px) */
@media (min-width: 992px) {
}

/* X-Large devices (≥1200px) */
@media (min-width: 1200px) {
}

/* XX-Large devices (≥1400px) */
@media (min-width: 1400px) {
}
h1 {
}

.para {
  font-family: "Outfit", sans-serif;
}
</style>

<template>
  <div class="main d-flex justify-content-center align-items-center">
    <div v-if="title != ''" class="container">
      <div class="py-2 text-center">
        <h1 style="">{{ title }}</h1>
      </div>
      <div class="mb-5 mt-3">
        <div class="py-3 d-flex justify-content-center">
          <img :src="imageUrl" alt="" class="w-100 img border rounded-4 shadow-lg" />
        </div>
      </div>
      <div class="para">
        <div>
          <div>
            <p>
              <span class="fw-bold">Location of {{ title }} : </span> {{ location }}
            </p>
          </div>
          <div>
            <p><span class="fw-bold"> Where : </span> {{ where }}</p>
          </div>

          <p><span class="fw-bold"> Best Time Of Visit: </span> {{ start_month }} - {{ end_month }}</p>
          <div class="my-5">
            <p style="text-align: justify"><span class="fw-bold"> How To Reach : </span> {{ how_to_reach }}</p>
          </div>
        </div>

        <div class="my-5 pb-5">
          <div>
            <p style="text-align: justify"><span class="fw-bold">About : </span> {{ about }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container h-100 d-flex justify-content-center align-items-center">
      <h3>No Information About {{ destination }}</h3>
    </div>
  </div>
</template>

<script>
import axiosClient from "../axiosClient";
export default {
  name: "Destination",

  data() {
    return {
      destination: "",
      title: "",
      where: "",
      categoty: "",
      imageUrl: "",
      start_month: "",
      end_month: "",
      location: "",
      tags: [""],
      how_to_reach: "",
      about: "",
    };
  },

  async created() {
    console.log("destination: ", this.destination);
  },

  methods: {
    async getDestination(destination) {
      console.log("destination: ", destination);
      try {
        const response = await axiosClient.get(`destinations/get-destination/${destination}`);
        console.log(response);
        this.title = response.data.result.title;
        this.location = response.data.result.location;
        this.where = response.data.result.where;
        this.imageUrl = response.data.result.imageUrl;
        this.how_to_reach = response.data.result.how_to_reach;
        this.end_month = response.data.result.end_month;
        this.start_month = response.data.result.start_month;
        this.tags = response.data.result.tags;
        this.about = response.data.result.about;
        this.destination = "";
      } catch (err) {
        console.log("error: ", err);
        this.title = "";
        this.location = "";
        this.where = "";
        this.imageUrl = "";
        this.how_to_reach = "";
        this.end_month = "";
        this.start_month = "";
        this.tags = "";
        this.about = "";
        this.destination = destination;
      }
    },
  },
};
</script>
