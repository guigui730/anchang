import Vue from 'vue';
import VueRouter  from  'vue-router';
import App from './App';
import VueResource from 'vue-resource';
import indens from 'components/indens/indens.vue';
import weihu from 'components/weihu/weihu.vue';
import upDown from 'components/upDown/upDown.vue';
import houseManage from 'components/houseManage/houseManage.vue';
import list from 'components/list/list.vue';
import loupan from 'components/loupan/loupan.vue';
import cusManage from 'components/cusManage/cusManage.vue';
import loudong from  'components/loudong/loudong.vue';
import louceng from 'components/louceng/louceng.vue';
import business from 'components/business/business.vue';
import check from 'components/check/check.vue';
import numManage from 'components/numManage/numManage.vue';

import  'common/stylus/index.styl';


Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
  linkActiveClass:  'active'
});


router.map({
  '/indens': {
    component:  indens
  },
  '/weihu': {
    component:  weihu
  },
  '/upDown': {
    component:  upDown,
    subRoutes: {
      '/loupan': {
        component: loupan
      },
      '/list': {
        component: list
      }
    }
  },
  '/houseManage': {
    component:  houseManage
  },
  '/cusManage': {
    component:  cusManage
  },
  '/business': {
    component:  business
  },
  '/check': {
    component:  check
  },
  '/numManage': {
    component:  numManage
  },
  '/loudong': {
    component:  loudong
  },
  '/louceng': {
    component:  louceng
  }
});

router.start(app,'#app');

/*router.go('/indens');*/
