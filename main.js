const {createApp} = Vue
createApp({

    // Definisco i DATI
    data() {
        return {
            // Creo una lsta vuota che conterrà le email dell'API
            emailList: [],

            // Creo una variabile Booleana
            allEmailsGenerated: false
        }
    },

    // Definisco i METODI
    methods: {
        // Creo una funzione per cambiare tonalità di colori alla pagina
        toggleMode(){
            const body = document.querySelector('#myapp');
            const title = document.querySelector('#title');
            body.classList.toggle('dark-mode');
            title.classList.toggle('dark-mode');
        }
        },


    mounted() {
        for (let i = 0; i < 10; i++) {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                response => {
                    this.emailList.push(response.data.response)
                    if (this.emailList.length === 10) {
                        this.allEmailsGenerated = true;
                    }
                });

    }}

}).mount('#myapp');


