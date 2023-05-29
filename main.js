// Descrizione:
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.



const {createApp} = Vue
createApp({
    // Definisco i data
    data() {
        return {
            emailList: [],
            allEmailsGenerated: false
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


