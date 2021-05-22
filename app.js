const app = Vue.createApp({
    data(){
        return {
            firstName: 'Moeses Reo',
            lastName: 'Barluado',
            email: 'yongfreelancer@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    }

})

app.mount('#app')