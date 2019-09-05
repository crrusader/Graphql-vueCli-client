// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/* APOLLO AREA */
import {ApolloClient} from 'apollo-client'
import {BatchHttpLink} from 'apollo-link-batch-http'  // 可以合并请求
import {HttpLink} from 'apollo-link-http'           // 正常请求
import {InMemoryCache} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import {ApolloLink} from 'apollo-link'

const apiLink = new BatchHttpLink({
  uri: 'http://localhost:4040/graphql',
})

const apiClient = new ApolloClient({
  link: apiLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      // fetchPolicy: 'cache-and-network'
    },
    query: {
      // fetchPolicy: 'network-only'
    },
  }
})

const apolloProvider = new VueApollo({
  defaultClient: apiClient,
})

Vue.use(VueApollo)
/* APOLLO AREA */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  provide: apolloProvider.provide(),
})
