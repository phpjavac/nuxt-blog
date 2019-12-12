import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1e05be74 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _7b4d4c7c = () => interopDefault(import('..\\pages\\archives\\index.vue' /* webpackChunkName: "pages_archives_index" */))
const _3d52d11a = () => interopDefault(import('..\\pages\\tags\\index.vue' /* webpackChunkName: "pages_tags_index" */))
const _7d823ee4 = () => interopDefault(import('..\\pages\\articles\\_id\\index.vue' /* webpackChunkName: "pages_articles__id_index" */))
const _d47e8842 = () => interopDefault(import('..\\pages\\tags\\_tag\\index.vue' /* webpackChunkName: "pages_tags__tag_index" */))
const _328c45da = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _1e05be74,
      name: "about"
    }, {
      path: "/archives",
      component: _7b4d4c7c,
      name: "archives"
    }, {
      path: "/tags",
      component: _3d52d11a,
      name: "tags"
    }, {
      path: "/articles/:id?",
      component: _7d823ee4,
      name: "articles-id"
    }, {
      path: "/tags/:tag",
      component: _d47e8842,
      name: "tags-tag"
    }, {
      path: "/",
      component: _328c45da,
      name: "index"
    }],

    fallback: false
  })
}
