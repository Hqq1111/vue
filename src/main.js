// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import {Header} from 'mint-ui'
// Vue.component(Header.name, Header);
import { Tabbar, TabbarItem, Swipe, SwipeItem, NavBar, Toast, Card, Button } from 'vant';
import 'vant/lib/index.css';


import VueResource from 'vue-resource';

import 'animate.css'

Vue.use(VueResource)
Vue.http.options.root = 'http://127.0.0.1:5000/'


Vue.use(Swipe)
  .use(SwipeItem)
  .use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Toast)
  .use(Card)
  .use(Button);



//定义全局过滤器
 

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: c => c(App)
})
