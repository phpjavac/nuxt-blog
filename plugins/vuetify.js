import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/src/stylus/app.styl';

// Theme
const theme = {
  base:"d7d7d7",
  primary: '#3D4451',
  secondary: '#D7D7D7',
  accent: '#E8676B',
};

// Use Vuetify
Vue.use(Vuetify, {
  iconfont: 'fa',
  theme
});
