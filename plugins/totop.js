import Vue from 'vue'
import vueToTop from 'vue-totop'
if (process.client) {
    Vue.use(vueToTop);
}
