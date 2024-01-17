import router from "./routes/router.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import vue3GoogleLogin from "vue3-google-login";
import { createApp } from "vue";
import App from "./App.vue";

const CLIENT_ID = "871528412959-42luo4kpnifun9fj0coig2qb27bnni8i.apps.googleusercontent.com";
/* const CLIENT_ID = "1062452874261-t6lu2d8kk1j2ci01mm4q6v08pgdamq34.apps.googleusercontent.com"; */

createApp(App)
  .use(router)
  .use(vue3GoogleLogin, {
    clientId: CLIENT_ID,
  })
  .mount("#app");
