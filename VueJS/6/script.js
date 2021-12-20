Vue.createApp({
    data() {
        return {
            visible1: true,
            visible2: false,
             articles: [
                { 
                    article: 'Nissan',
                    url:'https://www.nissan.ru/', 
                    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Nissan_2020_logo.svg/1024px-Nissan_2020_logo.svg.png"  
                },
                {
                    article: 'Mazda',
                    url:'https://www.mazda.ru/',
                    img:'https://main-cdn.goods.ru/hlr-system/634/425/185/524/164/8/100025294718b0.jpg'  
                },
                 {
                     article: 'Ford', 
                     url:'https://www.ford.ru/', 
                     img:'https://interior-stickers.ru/68628-thickbox_default/logotip-ford-ford.jpg'
                 },
                 {
                     article: 'Totota', 
                     url:'https://www.toyota.ru/', 
                     img:'https://main-cdn.goods.ru/hlr-system/1571438726/600000374933b0.png'  
                 }
            ]
        };
    }
}).mount('#app');
