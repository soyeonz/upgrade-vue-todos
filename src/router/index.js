import Vue from 'vue' // import Vue
import Router from 'vue-router' // import vue-router library
import Layouts from '@/components/layouts' // import the layouts.vue component

Vue.use(Router) // Globally register the Router component, which will be bound to the Vue instance

// create a router instance, then pass 'routes' configuration
export default new Router({
  routes: [
    {
      path: '/', // access path
      name: 'Layouts', // path name
      component: Layouts // accessed components, access '/', which load all the components of the Layouts component
    }
  ]
});