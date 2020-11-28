<template>
    <div>
        <ul>
            <li v-for="el in elementos" :key="el.id">
                {{el.nombre}} - {{el.cantidad}}
            </li>
        </ul>
    </div>
  
</template>

<script>
export default {
    name: 'ListaElementos',
    props:{
        elementos: Array,
        titulo: {
            type: String,
            default: 'Mi lista'
        }
    }
}
</script>

<style>

</style>