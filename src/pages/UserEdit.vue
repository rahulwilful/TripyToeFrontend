<style scoped>
.main {
  padding-top: 5rem;
}

.profile-image {
  width: 20vw;
  height: 20vw;
  object-fit: cover;
}
@media (max-width: 1199px) {
  .profile-image {
    width: 30vw;
    height: 30vw;
    object-fit: cover;
  }
}

@media (max-width: 600px) {
  .profile-image {
    width: 40vw;
    height: 40vw;
    object-fit: cover;
  }
}

@media (max-width: 400px) {
  .profile-image {
    width: 60vw;
    height: 60vw;
    object-fit: cover;
  }
}
/* Add your responsive styling here */
</style>

<template>
  <div v-auto-animate class="main">
    <div class="container-xl px-4 mt-4">
      <div class="row">
        <div class="col-xl-4">
          <!-- Profile picture card-->
          <div v-auto-animate class="card mb-4 mb-xl-0">
            <div class="card-header">Profile Picture</div>
            <div v-auto-animate class="card-body text-center">
              <!-- Profile picture image-->
              <img v-if="form.profile" class="img-account-profile profile-image rounded-circle mb-2" :src="form.profile" alt="Profile Picture" />
              <img v-else class="img-account-profile rounded-circle mb-2" src="../assets/profile-circle.svg" alt="Default Profile Picture" />

              <!-- Profile picture help block-->
              <div class="small font-italic text-muted mb-4">
                <h5>{{ form.name }}</h5>
              </div>
              <!-- Profile picture upload form -->
              <div>
                <!-- Profile picture upload button-->
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Change Profile</button>

                <!-- Modal for image upload -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="upload_image">Upload Image</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div class="mb-3">
                          <label for="imageInput" class="form-label">Upload Image</label>
                          <input class="form-control" type="file" id="imageInput" name="image" accept="image/*" @change="handleFileChange" />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="changeProfile">
                          <div v-if="!loading">Save Image</div>
                          <div v-if="loading" class="mx-4">
                            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            <span class="visually-hidden" role="status">Loading...</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <!-- Account details card -->
          <div class="card mb-4">
            <div class="card-header">Edit Details</div>
            <div class="card-body">
              <div>
                <form>
                  <!-- Form Group (username) -->
                  <div class="mb-3">
                    <label class="small mb-1" for="inputUsername">Name</label>
                    <input class="form-control" id="inputUsername" type="text" v-model="form.name" />
                  </div>
                  <!-- Form Row -->
                  <div v-auto-animate class="row gx-3 mb3">
                    <div class="col-md-6">
                      <div class="mt-1">
                        <label class="small mb-1" for="email">Email</label>
                        <input :disabled="true" class="form-control" id="email" type="text" v-model="form.email" />
                      </div>
                      <!-- Form Group (location)-->
                      <div class="mt-2">
                        <label class="small mb-1" for="mobile_no">Mobile Number</label>
                        <input class="form-control" id="mobile_no" type="text" v-model="form.mobile_no" />
                      </div>
                    </div>

                    <!-- Next Column -->
                    <div class="col-md-6">
                      <div class="form-check mb-3">
                        <label class="form-check-label" for="form.whatsapp_status">Whatsapp Number</label>
                        <input v-model="form.whatsapp_status" class="form-check-input border border-dark" type="checkbox" @click="form.whatsapp_status = !form.whatsapp_status" />
                      </div>
                      <div class="mb-3" v-if="form.whatsapp_status">
                        <input type="number" class="form-control" id="form.whatsapp_no" v-model="form.whatsapp_no" placeholder="Enter Whatsapp Number" />
                      </div>
                      <div class="mt-2">
                        <label class="small mb-1" for="facebook">Facebook</label>
                        <input class="form-control" id="facebook" type="text" v-model="form.facebook" />
                      </div>

                      <div class="mt-2">
                        <label class="small mb-1" for="instagram">Instagram</label>
                        <input class="form-control" id="instagram" type="text" name="birthday" v-model="form.instagram" />
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center align-items-center mt-3">
                    <button class="btn btn-primary" type="button" @click="handleSubmit">Save changes</button>
                  </div>
                </form>
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

export default {
  name: "UserEdit",
  data() {
    return {
      form2: {
        profile_url: "",
      },
      loading: false,

      form: {
        name: "",
        mobile_no: "",
        email: "",
        facebook: "",
        instagram: "",
        whatsapp_status: false,
        whatsapp_no: "",
        profile: "",
        newProfile: "",
        emailVerified: false,
        mobileNoVerified: false,
      },
      id: "",
      error: [],
      profile_url: "",
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

      const userDetails = await axiosClient.get(`user/get/${this.id}`).catch((err) => {
        console.log(err);
      });
      console.log(userDetails.data);
      this.form.name = userDetails.data.name;
      this.form.mobile_no = userDetails.data.mobile_no;
      this.form.email = userDetails.data.email;
      this.form.facebook = userDetails.data.facebook;
      this.form.instagram = userDetails.data.instagram;
      this.form.whatsapp_status = userDetails.data.whatsapp_status;
      this.form.whatsapp_no = userDetails.data.whatsapp_no;
      this.form.profile = userDetails.data.profile;
      this.id = userDetails.data._id;
      this.form.emailVerified = userDetails.data.email_verified;
      this.form.mobileNoVerified = userDetails.data.mobile_no_verified;

      const profile_url = await axiosClient.get(`config/`).catch((err) => {
        console.log(err);
      });
      this.profile_url = profile_url.data.result[0].profile_url;
    } catch (e) {
      console.log("error: ", e);
    }
  },

  methods: {
    async handleSubmit() {
      this.error = [];
      if (this.form.mobile_no === "") {
        toast.error("Phone number required", {
          autoClose: 1500,
        });
        return;
      }
      if (this.form.name === "") {
        toast.error("name cannot be empty", {
          autoClose: 1500,
        });
        return;
      }
      if (this.form.email === "") {
        toast.error("email cannot be empty", {
          autoClose: 1500,
        });
        return;
      }

      console.log("handleSubmit called");
      if (this.error.length === 0) {
        try {
          const response = await axiosClient.post(`user/update/${this.id}`, this.form);
          console.log("User updated successfully", response.data);
          toast.success("User updated successfully", {
            autoClose: 1500,
          });
          this.$router.go(0);
        } catch (error) {
          console.error("Error updating user details", error);
          if (error.response.status == 400) {
            toast.error("Check all the required fields", {
              autoClose: 1500,
            });
          } else {
            toast.error("Something went wrong", {
              autoClose: 1500,
            });
          }
        }
      } else {
        console.log("Form Values Are ", this.form, this.error);
      }
    },

    async handleFileChange(event) {
      this.form.newProfile = event.target.files[0];
    },

    async changeProfile() {
      console.log(this.form.newProfile);
      if (!this.form.newProfile) {
        toast.error("Please select a valid image", {
          autoClose: 1500,
        });

        return;
      }

      this.loading = true;
      const formData = new FormData();
      formData.append("image", this.form.newProfile);
      try {
        // const response = await axiosClient.post(`user/upload/${this.id}`, formData);
        const profile = await axiosClient.post(`user/updateprofile`, formData);

        this.form2.profile_url = profile.data.result.secure_url;

        console.log("ProfileUrl", this.form2.profile_url);
        const updateProfile = await axiosClient.post(`user/updateprofileurl/${this.id}`, this.form2);
        console.log("User updated successfully", updateProfile);
        this.loading = false;
        toast.success("Profile updated successfully", {
          autoClose: 1500,
        });
        setTimeout(() => {
          this.$router.go(0);
        }, 1500);
      } catch (error) {
        this.loading = false;
        console.error("Error updating profile", error);
        toast.error("Something went wrong", {
          autoClose: 1500,
        });
      }
    },
  },
};
</script>
