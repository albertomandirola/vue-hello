const { createApp } = Vue

createApp ( {
    data () {
        return {
            message: 'Hello!',
            img: 'https://basicappleguy.com/s/HelloLight_Mac.png'
        }
    }    
}) .mount ('#app')