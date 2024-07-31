import { createWebHistory, createRouter } from "vue-router";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
//import Home from "../pages/Home/Home9.vue";
import Home from "../pages/Home8.vue";
import MyAccount from "../pages/MyAccount2.vue";
import UserEdit from "../pages/UserEdit.vue";
import NotFound from "../pages/NotFound.vue";
import ManageUsers from "../pages/ManageUsers.vue";
import AdminUserEdit from "../pages/AdminUserEdit.vue";
import CreateAdmin from "../pages/CreateAdmin.vue";
import GoogleSignUp from "../pages/GoogleSignUp.vue";
import GoogleLogin from "../pages/GoogleLogin.vue";
import ForgotPassword from "../pages/ForgotPassword.vue";
import ResetPassword from "../pages/ResetPassword.vue";
import VarifyEmail from "../pages/VarifyEmail.vue";
import DefaultView from "../views/DefaultView.vue";
import DashboardView from "../views/DashboardView.vue";
import FacebookSignUp from "../pages/FacebookSignUp.vue";
import FacebookLogin from "../pages/FacebookLogin.vue";
import MyItinerarys from "../pages/MyItinerarys2.vue";
import Itinerary from "../pages/Itinerary3.vue";
import AddDestination from "../pages/AddDestination.vue";
import Destination from "../pages/Destination.vue";
import GetAllUsers from "../pages/GetAllUsers.vue";
import GetUser from "../pages/GetUserById.vue";
import GetItinerarysByUser from "../pages/GetItinerarysByUser.vue";
import Searched from "../pages/Searched.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: DefaultView,
    children: [
      {
        path: "/login",
        component: Login,
      },
      {
        path: "/register",
        component: Register,
      },
      {
        path: "/googlesignup",
        component: GoogleSignUp,
      },
      {
        path: "/googlelogin",
        component: GoogleLogin,
      },
      {
        path: "/facebooksignup",
        component: FacebookSignUp,
      },
      {
        path: "/facebooklogin",
        component: FacebookLogin,
      },
      {
        path: "/varifyemail/:id/:token",
        component: VarifyEmail,
        props: (route) => ({
          id: route.params.id,
          token: route.params.token,
        }),
      },
      {
        path: "/forgotpassword",
        component: ForgotPassword,
      },
      {
        path: "/resetpassword/:email/:paramsotp",
        name: "EnterEmail",
        component: ResetPassword,
        props: (route) => ({
          email: route.params.email,
          paramsotp: parseInt(route.params.paramsotp),
        }),
      },
    ],
  },
  {
    path: "/",
    component: DashboardView,
    children: [
      {
        path: "/myitinerarys",
        component: MyItinerarys,
      },
      {
        path: "/itinerary/:itineraryid",
        name: "MyItinerarys",
        component: Itinerary,
        props: (route) => ({
          id: route.params.id,
          itineraryid: route.params.itineraryid,
        }),
      },
      {
        path: "/home",
        component: Home,
      },
      {
        path: "/add-destination",
        component: AddDestination,
      },
      {
        path: "/myaccount",
        component: MyAccount,
      },
      {
        path: "/useredit",
        component: UserEdit,
      },
      {
        path: "/getallusers",
        component: GetAllUsers,
      },
      {
        path: "/destination/:destination/",
        component: Destination,
        props: (route) => ({
          destination: route.params.destination,
        }),
      },
      {
        path: "/getuser/:userId",
        component: GetUser,
        props: (route) => ({
          userId: route.params.userId,
        }),
      },
      {
        path: "/get-itinerarysbyuser/:userId",
        component: GetItinerarysByUser,
        props: (route) => ({
          userId: route.params.userId,
        }),
      },
      {
        path: "/get-searched/:userId",
        component: Searched,
        props: (route) => ({
          userId: route.params.userId,
        }),
      },
      {
        path: "/varifyemail/:id/:token",
        component: VarifyEmail,
        props: (route) => ({
          id: route.params.id,
          token: route.params.token,
        }),
      },
      {
        path: "/manageusers",
        component: ManageUsers,
      },
      {
        path: "/createadmin",
        component: CreateAdmin,
      },

      {
        path: "/adminuseredit/:userId",
        name: "Admin",
        component: AdminUserEdit,
        props: true,
      },
      {
        path: "/:pathMatch(.*)*",
        component: NotFound,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

/* {
    path: "/",
    component: DefaultView,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/login",
        component: Login,
      },
      {
        path: "/register",
        component: Register,
      },
      {
        path: "/googlesignin",
        component: GoogleSignIn,
      },
      {
        path: "/forgotpassword",
        component: ForgotPassword,
      },
      {
        path: "/resetpassword/:email/:paramsotp",
        name: "EnterEmail",
        component: ResetPassword,
        props: (route) => ({
          email: route.params.email,
          paramsotp: parseInt(route.params.paramsotp),
        }),
      },
    ],
  },
  {
    path: "/",
    component: DashboardView,
    children: [
      {
        path: "/myaccount",
        component: MyAccount,
      },
      {
        path: "/edit",
        component: Edit,
      },
      
      {
        path: "/admin",
        component: Admin,
      },
      {
        path: "/createadmin",
        component: CreateAdmin,
      },

      
      {
        path: "/moredetails/:userId",
        name: "dashboard",
        component: MoreDetails,
        props: true,
      },
      {
        path: "/:pathMatch(.*)*",
        component: NotFound,
      },
    ],
  }, */

/*  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/forgotpassword",
    component: ForgotPassword,
  },
  {
    path: "/resetpassword/:email/:paramsotp",
    name: "EnterEmail",
    component: ResetPassword,
    props: (route) => ({
      email: route.params.email,
      paramsotp: parseInt(route.params.paramsotp),
    }),
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/register",
    component: Register,
  },

  {
    path: "/myaccount",
    component: MyAccount,
  },
  {
    path: "/useredit",
    component: UserEdit,
  },

  {
    path: "/manageusers",
    component: ManageUsers,
  },
  {
    path: "/createadmin",
    component: CreateAdmin,
  },
  {
    path: "/googlesignin",
    component: GoogleSignIn,
  },
  {
    path: "/adminuseredit/:userId",
    name: "Admin",
    component: AdminUserEdit,
    props: true,
  },

  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  }, */
