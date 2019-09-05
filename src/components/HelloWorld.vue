<template>
<div class="hello">
  <!-- <h1>{{ msg }}</h1> -->
  <h2 @click="getData('gql1')">Get a three request.</h2>
  <h2 @click="getData('gql2')">Get a books request.</h2>
  <h2 @click="getData('gql3')">Get a person request.</h2>
  <h2 @click="getData('gql4')">Get a showcase request.<input type="text" v-model="code"></h2>

  <p class="data">{{ response }}</p>
</div>
</template>

<script>
import gql from 'graphql-tag';
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Your Vue-Apollo App',
      response: 'null',
      code: '',
      gql1: `query three{
                rollThreeDice
            }`,
      gql2: `query books{
          books{
            title
            author
          }
        }`,
      gql3: `query person{
          queryMap{
            name
            appearsIn
          }
        }`,
      gql4: `query showcase($code:String!){
          showcase(code:$code){
            color
          }
        }`,
    }
  },
  mounted() {
    // this.getData('gql1')
    // this.getData('gql2')
    // this.getData('gql3')
  },
  methods: {
    async getData(item) {
      let res = await this.$apollo.query({
          query: gql `${this[item]}`,
          // fetchPolicy: 'no-cache',
          // fetchPolicy: 'network-only',
          variables:{
            code: this.code,
          },
        })
        .then(res => {
          this.response = res && res.data
        }).catch(err => {
          this.response = err
        })

        console.log('response', this.response);
    },
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

h2 {
  user-select: none;
  cursor: pointer;
}

.hello {
  margin-top: 50px;
  text-align: center;
}

.data {
  white-space: pre;
  text-align: left;
  width: auto;
  display: inline-block;
}
</style>
