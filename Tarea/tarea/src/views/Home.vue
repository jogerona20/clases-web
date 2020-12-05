<template>
  <div class="home">
    <h1>Random de Personas</h1>
    

    <b-button variant="success" @click="getResults()">Random</b-button>
    <hr>
    <img class="imagen" :src=datos[0].picture.large>  

    <div class="info">
      <p class="dato">{{datos[0].name.first}} {{datos[0].name.last}} </p>
      <p>{{datos[0].gender}}</p>
      <p>{{datos[0].email}}</p>
      <p><img class="iconos" src="https://assets.stickpng.com/images/5a4525cd546ddca7e1fcbc84.png" alt=""> {{datos[0].phone}} </p>
      <p> <img  class="iconos" src="https://img.icons8.com/ios/452/cell-phone.png" alt=""> {{datos[0].cell}}</p>
    </div>
    
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import person from '../components/person'

export default {
  name: 'Home',
  components: {
    person
  },
  methods:{
    ...mapActions(['setResults', 'getResults'])
  },
  computed:{
    ...mapState(['results']),
    ...mapGetters(['datos'])
  },
  mounted(){
    this.getResults()
  }
}
</script>

<style scoped>
h1{
color: rgb(156, 121, 87);
font-weight: bold;
}
.imagen{
border-radius: 50px;
width: 15%;
}
.info{
  background-color: #FADBD8;
  width: 23%;
  margin-top: 40px;
  margin-left: 435px;
  border-radius: 50px;
}
.dato{
  font-size: 20px;
  font-weight: bold;
}
.iconos{
  width: 30px; height: 30px;
}
</style>
