Vue.createApp({
    data() {
        return {
            sumPrice: 0,
            arr: [
                {
                    name: 'Парикмахерская', 
                    price: 12000,
                    flag: false,
                },
                {
                    name: 'Маникюр', 
                    price: 2000,
                    flag: false,
                },
                {
                    name: 'Наращивание ресниц', 
                    price: 2500,
                    flag: false,
                },
                {
                    name: '"Счастье" для бровей', 
                    price: 2200,
                    flag: false,
                },
                {
                    name: 'Макияж', 
                    price: 5700,
                    flag: false,
                },
                {
                    name: 'Услуги стилиста', 
                    price: 12000,
                    flag: false,
                }
            ]
        };
    }
}).mount('#app');

let box = document.getElementsByTagName("button");
for (let i = 0; i < box.length; i++){
    box[i].onclick = function() {
        if (this.style.backgroundColor == "")
            this.style.backgroundColor = "#42f54b";
        else 
            this.style.backgroundColor = ""
    };
}
