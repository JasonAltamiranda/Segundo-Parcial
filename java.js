gsap.registerPlugin(ScrollTrigger);

gsap.from('.intro-logo',{
    opacity:0,
    duration:2
})
let intro =gsap.timeline({
    scrollTrigger:{
        
        trigger:'header',
        start:'top top',
        scrub: 1,
        pin: true,
        pinSpacing: false,
        end: '+=300',
    }
});
intro.to('.intro-logo',{
    scale:0.8
})
.from('.intro-sub',{
    opacity: 0,
    y: 600
},'<')
.from('.bg-black', {
    duration: 4,
    yPercent: 100,
})


/* PRIMER SECTION*/

let paralax =gsap.timeline({
    scrollTrigger:{
        
        trigger:'.paralax-wrapper',
        start:'top top',
        scrub:true,
        end:'+=100',
        pin: true,
    }
});
paralax.from('.video',{
    y: 100
},'<')
paralax.from('.paralax-title',{
    scale:20.8,
    y: 400
},'<')

/*SEGUNDO SECTION*/


let fuego =gsap.timeline({
    scrollTrigger:{
        
        trigger:'.fuego-wrapper2',
        start:'top top',
        scrub:true,
        end:'+=300',
        pin: true,
    }
});
fuego.from('.video2',{
    y: 600
},'<')
fuego.from('.-title2',{
    scale:14.8,
    y: 600,
    x:-370,
    transformOrigin: 'right'
})

fuego.from('.img1', {
    opacity:0,
    y:500,
    x:10200,
    transformOrigin: 'left',
},'<')

let discos1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.discos1',
        start: 'top 50%',
        scrub: 1,
        end: '+=2000',
    }});

discos1.from('.discos1 .year', {
    y:2200,
    opacity:0
})

.from('.cd1 .cd-name', {
    y:400,
    opacity:0
},0)

.from('.cd1 .cd-info', {
    y: 900,
    opacity:0
},0)

.from('.cd1 .cd-img', {
    opacity:0,
    x:-800,
    transformOrigin: 'left center',
},0)

.from('.cd2 .cd-name', {
    y:300,
    opacity:0
},)

.from('.cd2 .cd-info', {
    y: 500,
    opacity:0
},'<')

.from('.cd2 .cd-img', {
    opacity:0,
    x:-800,
    transformOrigin: 'left center',
},'<')