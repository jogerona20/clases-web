<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="30">
    <p>Mi total:{{ total}}</p>
    <p>{{ $store.state.otra}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Home',
  components: {
  },
  computed:{
    ...mapState(['total'])
  }
}
</script>
