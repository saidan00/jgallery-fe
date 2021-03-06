import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import NotFound from '../views/NotFound';

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
  component: () => import('../views/Album.vue'),
}, {
  path: '/404',
  alias: '*',
  component: NotFound
}, {
  path: '*',
  redirect: '/404'
}
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/jgallery-fe/' : '/',
  routes
});

router.beforeEach((to, from, next) => {
  next();
})

router.afterEach(() => {
  // NProgress.done()
  // setTimeout(() => console.log('after'), 1500); // timeout for demo purposes;
  // console.log('after');
})

export default router
