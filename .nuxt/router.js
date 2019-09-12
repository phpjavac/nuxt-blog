import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _26b8427c = () => interopDefault(import('..\\pages\\archives\\index.vue' /* webpackChunkName: "pages_archives_index" */))
const _33a726d4 = () => interopDefault(import('..\\pages\\tags\\index.vue' /* webpackChunkName: "pages_tags_index" */))
const _4599ba6a = () => interopDefault(import('..\\pages\\articles\\_id\\index.vue' /* webpackChunkName: "pages_articles__id_index" */))
const _5e085e19 = () => interopDefault(import('..\\pages\\tags\\_tag\\index.vue' /* webpackChunkName: "pages_tags__tag_index" */))
const _1cf0f366 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/archives",
      component: _26b8427c,
      name: "archives"
    }, {
      path: "/tags",
      component: _33a726d4,
      name: "tags"
    }, {
      path: "/articles/:id?",
      component: _4599ba6a,
      name: "articles-id"
    }, {
      path: "/tags/:tag",
      component: _5e085e19,
      name: "tags-tag"
    }, {
      path: "/",
      component: _1cf0f366,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
