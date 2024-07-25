<style scoped>
.main {
  padding-top: 5rem;
}
.edit-button {
  margin-right: 2px;
}

.varify-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 11px rgba(0, 0, 0, 0.5);
  box-shadow: 0 -8px -11px rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px;
}
</style>

<template>
  <div class="main">
    <div class="container-xl px-4">
      <div class="row">
        <div class="col-xl-4">
          <!-- Profile picture card-->
          <div class="card mb-4 mb-xl-0">
            <div class="card-header">Profile Picture</div>
            <div class="card-body text-center">
              <!-- Profile picture image-->
              <img v-if="profile" class="img-account-profile rounded-circle mb-2" :src="profile" alt="Profile Picture" style="width: 270px; height: 300px" />
              <img v-else class="img-account-profile rounded-circle mb-2" src="../assets/profile-circle.svg" alt="Default Profile Picture" />

              <!-- Profile picture help block-->
              <div class="small font-italic text-muted mb-4">
                <h5>{{ name }}</h5>
              </div>
              <!-- Profile picture upload button-->
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <!-- Account details card-->
          <div class="card mb-4">
            <div class="card-header">Account Details</div>
            <div class="card-body">
              <div>
                <!-- Form Group (username)-->
                <div class="mb-3">
                  <label class="small mb-1" for="name">Name</label>
                  <input :disabled="true" class="form-control" id="name" type="text" v-model="name" />
                </div>
                <!-- Form Row -->
                <div class="row gx-3 mb3">
                  <div class="col-md-6">
                    <div class="mt-1">
                      <div class="row">
                        <div class="col-2"><label class="small mb-1" for="email">Email</label></div>

                        <div class="col-4"></div>
                        <!--  <div class="col-2">
                          <div v-if="!emailVerified">
                            <button class="varify-button" @click="varifyEmail">Varify Email</button>
                          </div>
                        </div> -->
                        <div class="col-6">
                          <div v-if="emailVerified">
                            <i class="bi bi-patch-check-fill" style="color: blue"></i>
                            <span style="color: rgb(167, 167, 167); font-size: small"> Email Varified</span>
                          </div>
                          <div v-else>
                            <span class="varify-button">
                              <button style="border: none; background-color: transparent; border-radius: 5px">
                                <i class="bi bi-patch-check-fill" style="color: red"></i>
                                <span style="color: rgb(167, 167, 167); font-size: small"> Varify Email</span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <input :disabled="true" class="form-control" id="email" type="text" v-model="email" />
                    </div>
                    <!-- Form Group (location)-->
                    <div class="mt-2">
                      <label class="small mb-1" for="mobile_no">Mobile Number</label>
                      <input :disabled="true" class="form-control" id="mobile_no" type="text" v-model="mobile_no" />
                    </div>
                    <div class="mt-2">
                      <label class="small mb-1" for="mobile_no">Role</label>
                      <div class="dropdown">
                        <a class="btn btn-light border dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> {{ role.value }} </a>

                        <ul class="dropdown-menu dropdown-menu-light">
                          <li v-for="roles in role_types" :key="roles" style="cursor: pointer">
                            <span @click="changeRole(roles._id)" v-if="roles.name != role.name" class="dropdown-item pe-auto">{{ roles.value }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- ///////////////////////////////// New colunn starts //////////////////////////////////// -->
                  <div class="col-md-6">
                    <div class="mt-2" v-if="whatsapp_status">
                      <label class="small mb-1" for="whatsapp_no">Whatsapp Number</label>
                      <input :disabled="true" class="form-control" id="whatsapp_no" type="text" name="birthday" v-model="whatsapp_no" />
                    </div>
                    <div class="mt-2">
                      <label class="small mb-1" for="facebook">Facebook</label>
                      <input :disabled="true" class="form-control" id="facebook" type="text" v-model="facebook" />
                    </div>

                    <div class="mt-2">
                      <label class="small mb-1" for="instagram">Instagram</label>
                      <input :disabled="true" class="form-control" id="instagram" type="text" name="instagram" v-model="instagram" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  <div class="row">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col">
              <div class="float-right">
                <router-link to="useredit" class="btn btn-primary my-2" tabindex="-1" role="button" data-toggle="tooltip" title="Edit User"> <i class="bi bi-pen mx-3"></i></router-link>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axiosClient from "../axiosClient";

export default {
  name: "MyAccount",

  data() {
    return {
      id: "",
      name: "",
      mobile_no: "",
      email: "",
      facebook: "",
      instagram: "",
      whatsapp_status: false,
      whatsapp_no: "",
      department: "",
      role_type: "",
      joining_date: "",
      profile: "",
      tempProfile: "",
      profile_url: "",
      emailVerified: false,
      mobileNoVerified: false,
      token: "",
      role: {},
      role_types: [],
    };
  },

  props: {
    userId: {
      type: String,
      required: true,
    },
  },

  async created() {
    console.log("userId: ", this.userId);
    try {
      const user = await axiosClient.get("user/getcurrentuser/").catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          this.$router.push("/login");
        }
      });
      console.log("user: ", user);

      this.id = user.data.data._id;
      const role_name = user.data.data.role_type.name;

      if (role_name != "super_admin") {
        this.$router.push("/home");
      }

      const userDetails = await axiosClient.get(`user/get/${this.userId}`).catch((err) => {
        console.log(err);
      });

      console.log("userDetails: ", userDetails);

      this.name = userDetails.data.name;
      this.mobile_no = userDetails.data.mobile_no;
      this.email = userDetails.data.email;
      this.facebook = userDetails.data.facebook;
      this.instagram = userDetails.data.instagram;
      this.whatsapp_status = userDetails.data.whatsapp_status;
      this.whatsapp_no = userDetails.data.whatsapp_no;
      this.emailVerified = userDetails.data.email_verified;
      this.mobileNoVerified = userDetails.data.mobile_no_verified;
      this.profile = userDetails.data.profile;
      const rawJoiningDate = userDetails.data.createDate;
      this.role = userDetails.data.role_type;
      const formattedJoiningDate = new Date(rawJoiningDate).toLocaleDateString();
      this.joining_date = formattedJoiningDate;
      const profile_url = await axiosClient.get(`config/`).catch((err) => {
        console.log(err);
      });
      this.profile_url = profile_url.data.result[0].profile_url;

      const role_types = await axiosClient.get(`roles/get_all_role_types`);
      console.log("role_types: ", role_types.data.result);
      this.role_types = role_types.data.result;

      console.log("this.role_types: ", this.role_types, " role: ", this.role);
    } catch (e) {
      console.log("error: ", e);
    }
  },

  methods: {
    async changeRole(id) {
      console.log("id: ", id);
      try {
        const response = await axiosClient.post(`user/update_roletype/${this.userId}`, { role_type: id });
        if (response) {
          toast.success(`Role Changed Successfully`, {
            autoClose: 1500,
          });
          setTimeout(() => {
            this.$router.go(0);
          }, 1500);
        }
      } catch (err) {
        console.error("error: ", err);
        toast.error(`Something went wrong`, {
          autoClose: 1500,
        });
      }
    },
    //funtion for email verification and redirect if verification email sent successfully
    async varifyEmail() {
      console.log("varifyEmail called");
      (function () {
        //function to invoke emailjs
        emailjs.init("xFvWy_f4EAZfIazRD");
      })();
      //sericeId and templateId of emailjs
      var serviceID = "service_q76t9xj";
      var templateID = "template_uhooied";

      try {
        const newToken = await axiosClient.post(`user/createtoken/${this.id}`);
        if (!newToken.data.result.token) {
          toast.error("Something went wrong", {
            autoClose: 1500,
          });
          return;
        }
        console.log("newToken : ", newToken);
        this.token = newToken.data.result.token;
        var params = {
          to: this.email,
          message: `http://localhost:5173/varifyemail/${this.id}/${this.token}`,
        };

        await emailjs.send(serviceID, templateID, params);
        toast.success("Varification link sent on email", {
          autoClose: 1500,
        });
      } catch (err) {
        console.error("error", err); // Log the error object, not 'object'
        if (err.response.status == 404) {
          toast.error("User does not exist", {
            autoClose: 1500,
          });
        } else {
          toast.error("Something went wrong", {
            autoClose: 1500,
          });
        }
      }
    },
  },
};
</script>
