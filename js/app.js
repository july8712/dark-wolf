const luna = document.getElementById('luna');
const capa1 = document.getElementById('capa1');
const capa2 = document.getElementById('capa2');
const capa3 = document.getElementById('capa3');
const capa4 = document.getElementById('capa4');
const slogan = document.getElementById('slogan');

var prev_value_capa2 = parseFloat(window.getComputedStyle(capa2).right) || 0;
var prev_value_capa4 = parseFloat(window.getComputedStyle(capa4).left) || 0;

const menuBtn = document.querySelector(".menu-btn");
const menuLateral = document.querySelector(".menu-lateral");
const menu = document.querySelector(".menu");
let menuOpen = false;



menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menu.classList.add('corrido');
        menuLateral.classList.remove('cerrado');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menu.classList.remove('corrido');
        menuLateral.classList.add('cerrado');
        menuOpen = false;
    }
})

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    luna.style.right = value * .8 + "px";
    luna.style.top =  value * .2 + "px";
    capa2.style.right =  value * 0.07 + prev_value_capa2 + "px";
    capa4.style.left = value * 0.05 + prev_value_capa4 + "px";
})