const app = Vue.createApp({
    data() {
        return {
            titulo: 'Mi título con Vue',
            frutas: ['Manzana', 'Uva', 'Fresa'],
            frutas2: [
                {nombre: 'Manzana', cantidad: 10},
                {nombre: 'Uva', cantidad: 5},
                {nombre: 'Fresa', cantidad: 8}
            ],
            nuevaFruta: '',
            total: 0
        }
    },
    methods: {
       agregarFruta() {
           this.frutas.push(this.nuevaFruta);
           this.frutas2.push({
               nombre: this.nuevaFruta,
               cantidad: 0
           });
           this.nuevaFruta = '';
       } 
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for (fruta of this.frutas2) {
               this.total = this.total + fruta.cantidad;
            }
            return this.total;
        },
        colorCantidad() {
            return this.total > 10 ? 'text-success' : 'text-danger';
        }
    },
});