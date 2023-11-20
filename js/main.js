const { createApp } = Vue

createApp({
	data() {
		return {
			emailList : [],
		}
	},
	methods: {

		eMail() {
			// genero 10 email
			for(i = 0; i < 10; i++) {

				axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(r => {
				console.log("Ricevuto: ", r.data);
				let email = r.data.response;
				this.emailList.push(email);
				});
			}
		}
			
	},
	mounted() {
		console.log("Tutto ok!");

		
	}
}).mount('#app')