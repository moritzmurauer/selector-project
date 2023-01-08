import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Explore from "../views/Explore.vue";
import Artworks from "../views/Artworks.vue";
import Login from "../views/auth/Login.vue";
import CreatePost from "../views/posts/CreatePost.vue";
import PostDetail from "../views/posts/PostDetails.vue";
import AddProfileInfo from "../views/Profile/AddProfileInfo.vue";
import UserPosts from "../views/posts/UserPosts.vue";
import Category from "../views/Category/Category.vue";
import Signup from "../views/auth/Signup.vue";

// route guard
import { projectAuth } from "../firebase/config";

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "Login" });
  } else {
    next();
  }
};

// routes for SPA
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/posts/create",
    name: "CreatePost",
    component: CreatePost,
    beforeEnter: requireAuth,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
  },
  {
    path: "/artworks",
    name: "Artworks",
    component: Artworks,
  },
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: PostDetail,
    props: true,
  },
  {
    path: "/profile/:id",
    name: "UserPosts",
    component: UserPosts,
    beforeEnter: requireAuth,
  },
  {
    path: "/profile/addInfo",
    name: "AddProfileInfo",
    component: AddProfileInfo,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
