<template>
  <div class="home">
    <h1>VideoJuegos</h1>
    <b-button to="/agregar-juego" variant="primary" class="float-left mb-4">Agregar</b-button>
    <Table :campos="campos" :items="allGames" :busy="getLoading">
      <template slot="actions" slot-scope="{ item }">
        <b-button
          @click="onEditar(item)"
        >
          Editar
        </b-button>
        <b-button
          @click="onEliminar(item)"
          variant="danger"
          class="ml-2"
        >
          Eliminar
        </b-button>
      </template>
      </Table>
  </div>
</template>

<script>
import Table from '../components/Table'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Table
  },
  data() {
    return {
      campos: [
        { key: 'id', label: 'Serie' },
        { key: 'nombre', label: 'Nombre'},
        { key: 'desarrolladora', label: 'Desarrolladora'},
        { key: 'lanzamiento', label: 'Lanzamiento'},
        { key: 'actions', label: 'Acciones'}
      ]
    }  
  },
  computed: {
    ...mapGetters(['allGames', 'getLoading'])
  },
  methods:{
    ...mapActions(['setJuegos','eliminarJuego']),
    onEditar(item) {
      console.log(item);
      this.$router.push({
        name: 'Editar',
        params: {
          id: item.item.id
        }
      })
    },
    onEliminar(item) {
      console.log(item)
        this.$bvModal.msgBoxConfirm('Esta opción no se puede deshacer', {
          title: '¿Esta seguro que desea eliminar',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Aceptar',
          cancelTitle: 'Cancelar',
          centered: true
        })
          .then(value => {
            if(value) {
              this.eliminarJuego({
              id: item.item.id,
              onComplete: (response) => {
                  console.log(response)
                  this.$notify({
                      type: 'success',
                      title: response.data.mensaje
                  })
                  setTimeout(() => this.setJuego(), 1000)
                },
              onError: (error) => {
                  this.$notify({
                      type: 'error',
                      title: error.response.data.mensaje
                  })
                }
            })
            }
          
          })
          .catch(err => {
          })
    }
  },
  mounted() {
    this.setJuegos();
  }

}
</script>
