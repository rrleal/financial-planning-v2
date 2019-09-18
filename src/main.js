import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import '../public/css/sb-admin-2.css';
import Layout from './views/layout/Layout';
import PageHeader from './components/PageHeader';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false;

Vue.component('default-layout', Layout);
Vue.component('page-header', PageHeader);

Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
