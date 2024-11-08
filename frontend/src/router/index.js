import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BrandView from '@/views/BrandView.vue'
import RoyalenfieldModel from '@/views/RoyalenfieldModel.vue'
import ContactusView from '@/views/ContactusView.vue'
import Services from '@/views/Services.vue'
import AdminView from '@/views/AdminView.vue'
import AdminLayout from '@/views/AdminLayout.vue'
import BikesView from '@/views/BikesView.vue'
import CustomersView from '@/views/CustomersView.vue'
import PaymentsView from '@/views/PaymentsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',

      component: Layout,
      children: [{
        path: '',
        component: HomeView,
        name: 'home'
      },
      {
        path: 'about',
        component: AboutView,
        name: 'about'
      },
      {
        path: 'brand',
        component: BrandView,
        name: 'brand'

      },
      {
        path: 'contactus',
        component: ContactusView,
        name: 'contactus'

      },
      {
        path: 'services',
        component: Services,
        name: 'services'

      },
    {
      path: 'admin-login',
      component: AdminView,
      name: 'adminlogin'
    }]

    },
    {
      path: '/RoyalenfieldModel/:id',
      component: RoyalenfieldModel,
      name: 'RoyalenfieldModel'
    },
    {
      path: '/admin',
      component: AdminLayout,
      name: 'AdminLayout',
      children: [{
        path: '',
        component: BikesView, 
        name: 'Admin-Bikes'
      },
    {
      path: '/customers',
      component: CustomersView,
      name: 'Customers'

    },
    {
      path: '/payments',
      component: PaymentsView,
      name: 'Payments'
    }
  ]
    }


  ]
})

export default router
