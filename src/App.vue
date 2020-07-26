<template>
  <div id="app">
    <DefaultLayout />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout'

export default {
  name: 'App',
  components: { DefaultLayout },
  data () {
    return {

    }
  }
}

</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
</style>
