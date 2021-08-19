import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

function lazyLoad (view) {
  return () => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/enquire-one-to-one',
    name: 'enquire one to one',
    // route level code-splitting
    // this generates a separate chunk (calculator.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: lazyLoad('EnquireOneToOne')
  },
  {
    path: '/book-sessions',
    name: 'book sessions',
    // route level code-splitting
    // this generates a separate chunk (savings.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: lazyLoad('BookSessions')
  },
  {
    path: '/terms-and-conditions',
    name: 'terms and conditions',
    // route level code-splitting
    // this generates a separate chunk (savings.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: lazyLoad('TermsAndConditions')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
