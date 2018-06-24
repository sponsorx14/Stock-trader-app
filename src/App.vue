<template>
  <div id="app">
    <Header></Header>
    <div class="row">
      <div class="col-xs-12">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    components: {
      Header
    },
    created(){
      this.$store.dispatch('initStocks')
    }
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
