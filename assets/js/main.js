$('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:10,
    nav:false,
    items:1,
    lazyLoad: true,
    
  responsive:{
        0:{
            items:1,
            stagePadding: 60
        },
        375:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 250
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 400
        }
    }
})



function openNav(){
	document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
	document.getElementById("myNav").style.width = "0";
}
