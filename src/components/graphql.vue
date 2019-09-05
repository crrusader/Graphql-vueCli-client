<template>
<div class="hello">
  <div id="root">
      {{msg}}
  </div>
</div>
</template>

<script>
export default {
  name: 'Graphql',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  async mounted() {
    const root = document.getElementById('root');
    root.classList.add('playgroundIn');
    GraphQLPlayground.init(root, {
      "endpoint": "http://localhost:4040/graphql",
      "subscriptionEndpoint": "http://localhost:4040/graphql",
      "version": "1.7.31",
      "canSaveConfig": false
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "./gql.css";
</style>
