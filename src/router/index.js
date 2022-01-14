import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import Magazines from '../views/Magazines.vue'
import News from '../views/News.vue'
import Events from '../views/Events.vue'
import newsItem from '../components/newsItem.vue'
import event from '../components/event.vue'
import signIn from '../views/signIn.vue'
import signUp from '../views/signUp.vue'
import full from '../components/fullArticle.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Magazines',
      name: 'Magazines',
      component: Magazines
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Events',
      name: 'Events',
      component: Events
    },
    {
      path: '/News/:id',
      props: true,
      name: 'newsItem',
      component: newsItem
    },
    {
      path: '/Events/:id',
      props: true,
      name: 'event',
      component: event
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/News/:id',
      props: true,
      name: 'fullArticle',
      component: full
    },


  ],
  mode: 'history'
})





