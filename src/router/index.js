import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
}, {
  path: '/album/:id',
  name: 'Album',
  props: true,
  component: () => import('../views/Album.vue')
}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  // NProgress.start()
  // console.log('before');
  next()
})
router.afterEach(() => {
  // NProgress.done()
  // setTimeout(() => console.log('after'), 1500); // timeout for demo purposes;
  // console.log('after');
})

export default router
