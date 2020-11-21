//js para carrossel
$('.owl-carousel').owlCarousel({
    loop:true, //permite voltar ao início do carrossel quando acaba
    margin:10, //margem entre as opções
    nav:false, //botão de navegação que pode ou não existir
    responsive:{ //conforme o tamanho da tela, tem mais ou menos opções
        0:{
            items:1
        },
        750:{
            items:3
        },
        1000:{
            items:6
        }
    }
})