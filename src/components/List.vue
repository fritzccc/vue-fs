<template>
  <v-list>

  </v-list>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['todos'])
  }
}
</script>

<style>

</style>
