const { createApp } = Vue;

createApp({
    data() {
        return {
            count: 0,
            price: 0,
            fullPrice: 0
        };
    },
    watch: {
        // Figyeljük a count változását
        count() {
            this.calculateFullPrice();
        },
        // Figyeljük a price változását
        price() {
            this.calculateFullPrice();
        }
    },
    computed: {
        // A fullPrice ezres tagolással ellátott formázása (pl. 11000 -> 11.000)
        formattedFullPrice() {
            return this.fullPrice.toLocaleString('hu-HU').replace(/\s/g, '.');
        }
    },
    methods: {
        // Belső segédfüggvény a szorzáshoz, amit a watch meghív
        calculateFullPrice() {
            this.fullPrice = this.count * this.price;
        }
    }
}).mount('#app');