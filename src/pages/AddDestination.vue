<style scoped>
.main {
  padding-top: 4.5rem;
}

.neomorphic {
  background: #e0e0e0;
  border-radius: 1rem;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}

.neomorphic-input {
  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;
}

.neomorphic-select {
  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;
  background: transparent;
}

@media (max-width: 576px) {
}

/* Small devices (≥576px) */
@media (min-width: 576px) {
}

/* Medium devices (≥768px) */
@media (min-width: 768px) {
}

/* Large devices (≥992px) */
@media (min-width: 992px) {
  .form {
    max-width: 50%;
  }
}

/* X-Large devices (≥1200px) */
@media (min-width: 1200px) {
}

/* XX-Large devices (≥1400px) */
@media (min-width: 1400px) {
}
</style>

<template>
  <div class="main vw-100">
    <div class="container mt-5 neomorphic p-4 form">
      <div class="d-flex justify-content-center">
        <h1 class="">Add Destination</h1>
      </div>
      <div class="">
        <form @submit.prevent="submitForm">
          <div class="form-group mb-3">
            <label for="title">Title</label>
            <input type="text" id="title" class="form-control neomorphic-input" v-model="form.title" required />
          </div>
          <div class="d-flex justify-content-evenly flex-wrap">
            <div class="form-group mb-3">
              <label for="location">Location</label>
              <v-select v-model="form.location" :options="location" :searchable="true" class="neomorphic-select" placeholder="Select location" required></v-select>
            </div>
            <div class="form-group mb-3">
              <label for="category">Category</label>
              <v-select v-model="form.category" :options="category" :searchable="true" class="neomorphic-select bg-transparent" placeholder="Select a category" required></v-select>
            </div>
            <div class="form-group mb-3">
              <label for="tags">Tags</label>
              <v-select v-model="form.tags" :options="tags" multiple :searchable="true" class="neomorphic-select" placeholder="Select tags"></v-select>
            </div>
          </div>
          <div class="form-group mb-3">
            <label for="imageUrl">Image URL</label>
            <input type="text" id="imageUrl" class="form-control neomorphic-input" v-model="form.imageUrl" required />
          </div>

          <div class="form-group mb-3">
            <label for="where">Where</label>
            <input type="text" id="where" class="form-control neomorphic-input" v-model="form.where" />
          </div>
          <div class="d-flex justify-content-evenly flex-wrap">
            <div class="form-group mb-3 d-flex flex-column align-items-center">
              <label for="best_time_to_visit_start">Best Time to Visit (Start Month)</label>
              <v-select v-model="form.best_time_to_visit.start_month" :options="months" class="neomorphic-input bg-transparent" placeholder="Select start month" required></v-select>
            </div>
            <div class="form-group mb-3 d-flex flex-column align-items-center">
              <label for="best_time_to_visit_end ">Best Time to Visit (End Month)</label>
              <v-select v-model="form.best_time_to_visit.end_month" :options="months" class="neomorphic-input bg-transparent" placeholder="Select end month" required></v-select>
            </div>
          </div>
          <div class="form-group mb-3">
            <label for="about">How To Reach</label>
            <textarea id="about" class="form-control neomorphic-input" v-model="form.how_to_reach" rows="4" required></textarea>
          </div>
          <div class="form-group mb-3">
            <label for="about">About</label>
            <textarea id="about" class="form-control neomorphic-input" v-model="form.about" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary neomorphic text-dark fw-semibold shadow hover">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-next-select/dist/index.css";
import vSelect from "vue-next-select";
import axiosClient from "../axiosClient";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "AddDestination",
  components: { vSelect },
  data() {
    return {
      tags: [
        "famous forts in goa",
        "fort goa",
        "forts to visit in goa",
        "goa fort history",
        "North Goa Islands",
        "Beautiful islands in Goa",
        "Goa islands",
        "Hidden islands of Goa",
        "Island hopping in Goa",
        "Lesser-known islands in Goa",
        "hidden waterfalls in north goa",
        "hidden waterfalls in south goa",
        "less crowded waterfalls in goa",
      ],

      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

      location: ["North Goa", "South Goa", "Old Goa"],
      category: ["Water Fall", "Fort", "Beach", "Lake", "Church", "Temple", "Spring", "River", "Mountain", "Forest", "Wild Life Sanctuary", "Island", "City"],
      form: {
        title: "",
        category: "",
        imageUrl: "",
        where: "",
        best_time_to_visit: {
          start_month: "",
          end_month: "",
        },
        location: "",
        tags: [],
        how_to_reach: "",
        about: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.form);
      try {
        if (this.form.title == "") {
          toast.error("Titile Required", {
            autoClose: 1500,
          });

          return;
        }

        if (this.form.category == "") {
          toast.error("Category Required", {
            autoClose: 1500,
          });

          return;
        }
        if (this.form.imageUrl == "") {
          toast.error("Image Url Required", {
            autoClose: 1500,
          });

          return;
        }
        if (this.form.where == "") {
          toast.error("Where Required", {
            autoClose: 1500,
          });

          return;
        }
        if (this.form.location == "") {
          toast.error("Location Required", {
            autoClose: 1500,
          });

          return;
        }

        if (this.form.how_to_reach == "") {
          toast.error("How To Reach Required", {
            autoClose: 1500,
          });

          return;
        }

        if (this.form.about == "") {
          toast.error("About Required", {
            autoClose: 1500,
          });

          return;
        }

        if (this.form.best_time_to_visit.start_month == "") {
          toast.error("Start Month Required", {
            autoClose: 1500,
          });

          return;
        }

        if (this.form.best_time_to_visit.end_month == "") {
          toast.error("End Month Required", {
            autoClose: 1500,
          });

          return;
        }

        if (this.form.tags.length == 0) {
          toast.error("Tags Required", {
            autoClose: 1500,
          });

          return;
        }

        const response = axiosClient.post(`destinations/add-destination`, this.form);
        toast.success("New Destination Added", {
          autoClose: 1500,
        });
        this.form.title = "";
        this.form.location = "";
        this.form.category = "";
        this.form.tags = [];
        this.form.imageUrl = "";
        this.form.where = "";
        this.form.best_time_to_visit.start_month = "";
        this.form.best_time_to_visit.end_month = "";
        this.form.about = "";
        this.form.how_to_reach = "";
      } catch (err) {
        console.error("error: ", err);
        toast.error("Something went wrong", {
          autoClose: 1500,
        });
      }
    },
  },
};
</script>
