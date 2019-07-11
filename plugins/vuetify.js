import Vue from 'vue';
import LRU from 'lru-cache';
import Vuetify from 'vuetify';
import 'vuetify/src/stylus/app.styl';

// Theme
const theme = {
  primary: '#3D4451',
  secondary: '#D7D7D7',
  accent: '#E8676B',
};

// Options
const options = {
  minifyTheme: (css) => {
    return process.env.NODE_ENV === 'production'
      ? css.replace(/[\s|\r\n|\r|\n]/g, '')
      : css;
  },
  themeCache: new LRU({
    max: 10,
    maxAge: 60 * 60 * 24 * 7,
  }),
  customProperties: true,
  cspNonce: 'Q1veajC7P6p',
};

// Use Vuetify
Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: theme,
  options: options,
});
