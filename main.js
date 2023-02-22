//Functions
function markerStatus (markerVisible,markerHidden){
    markerVisible.style.visibility = 'visible'
    markerHidden.style.visibility = 'hidden'
}

function changeImage(variable,routeDesktop = '',routeMobile = '' ){
    if(innerWidth >= 1440 ){
        variable.src = routeDesktop;
    }else {
        variable.src  = routeMobile;
    } 
}
//nav-bar
const hamburguer = document.querySelector('.menu-img')
let nav = document.querySelector('.nav')

// Images variables
//Img orange header
let backgroundOrange = document.getElementById('orange-header')

// Description Images
let eggImg = document.querySelector('.img-egg')
let cupImg = document.querySelector('.img-cup')
let cherryImg = document.querySelector('.img-cherry')
let orangeImg = document.querySelector('.img-orange')
//Markers
let marker = document.querySelectorAll('.border')
let markerEgg = document.querySelector('.fruits__egg__description__border')
let markerCup = document.querySelector('.fruits__cup__description__border')
const learnText = document.querySelectorAll('.learn-p')

//Gallery Images
let milkImg = document.getElementById('milk')
let orangeGallery = document.getElementById('orange')
let coneImg = document.getElementById('cone')
let sugarImg = document.getElementById('sugar')

//Background Orange Change with resize
window.addEventListener('resize',e=>{
    if(e.currentTarget.innerWidth >= 1440 ){
        backgroundOrange.src = './images/desktop/image-header.jpg';
        cherryImg.src = './images/desktop/image-graphic-design.jpg'
        orangeImg.src = './images/desktop/image-photography.jpg'
        milkImg.src = './images/desktop/image-gallery-milkbottles.jpg'
        orangeGallery.src = './images/desktop/image-gallery-orange.jpg'
        coneImg.src = './images/desktop/image-gallery-cone.jpg'
        sugarImg.src = './images/desktop/image-gallery-sugarcubes.jpg'
    }else if(e.currentTarget.innerWidth < 1440) {
        backgroundOrange.src  = './images/mobile/image-header.jpg';
        cherryImg.src = './images/mobile/image-graphic-design.jpg'
        orangeImg.src = './images/mobile/image-photography.jpg'
        milkImg.src = './images/mobile/image-gallery-milkbottles.jpg'
        orangeGallery.src = './images/mobile/image-gallery-orange.jpg'
        coneImg.src = './images/mobile/image-gallery-cone.jpg'
        sugarImg.src = './images/mobile/image-gallery-sugar-cubes.jpg'

    } 
})
hamburguer.addEventListener('click',()=>{
    nav.classList.toggle('show-nav')
})
learnText.forEach(element => {
    element.addEventListener('mouseenter',e=>{
        learnMore = e.fromElement.className;
        if(learnMore === 'fruits__cup__description div-description'){
            markerStatus(markerCup,markerEgg)
        }else{
            markerStatus(markerEgg,markerCup)
        }
        element.addEventListener('mouseleave',()=>{
            markerCup.style.visibility = 'hidden'
            markerEgg.style.visibility = 'hidden'
        })
    })
})