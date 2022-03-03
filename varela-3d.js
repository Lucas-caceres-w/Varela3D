const slider = document.querySelector(".slider");
let slidimg = document.querySelectorAll(".slid-img");
let sliderLast = slidimg[slidimg.length -1];

const botonDer = document.querySelector(".boton-right");
const botonIzq = document.querySelector(".boton-left");

slider.insertAdjacentElement("afterbegin" , sliderLast);

function Next() {
	let sliderFirst = document.querySelectorAll(".slid-img")[0];
	slider.style.marginLeft = "-225%";
	slider.style.transition = "all 1s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeend' , sliderFirst);
		slider.style.marginLeft = "-115%";
	}, 1000);

}

function Prev() {
	let slidimg = document.querySelectorAll(".slid-img");
	let sliderLast = slidimg[slidimg.length -1];
	slider.style.marginLeft = "0";
	slider.style.transition = "all 1s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('afterbegin' , sliderLast);
		slider.style.marginLeft = "-110%";
	}, 1000);

}


botonDer.addEventListener('click' , function(){
	Next();
});
botonIzq.addEventListener('click' , function(){
	Prev();
});

setInterval(function(){
	Next();

}, 6000);

//-------------------------declaracionFunctions------------------------------------------//
let btnizq = document.querySelector('.detail');
let mostrar = document.querySelector('.menuizq');
let btnder = document.querySelector('.contactme');
let menu = document.querySelector('.menuder');
let galeria = document.querySelectorAll('.container')

let ScrollInfo = () => {
	let info = document.querySelector('.info');
	let obj = info.getBoundingClientRect().top;
	let screenSize = window.innerHeight/2;

		if (obj < screenSize) {
			info.classList.add('info-up');
			info.style.transition = '.5s';
		}
}

let scrollGaleria = () => galeria.forEach(el => {
	let obj = el.getBoundingClientRect().top;
	let screenSize = window.innerHeight/1;
	
	if (obj < screenSize) {
		el.classList.add('container-vis');
		el.style.transition = '.5s';
	}
});

let menuLeft = () => {
	mostrar.classList.toggle('mostrar');
	mostrar.style.transition = '0.5s';
}

let menuRight = () => {
	menu.classList.toggle('mostrar2');
	menu.style.transition = '0.5s';
}


//--------------call---------------------------------------=>

btnder.addEventListener('click' , menuRight)

btnizq.addEventListener('click' , menuLeft)

window.addEventListener('scroll' , () => scrollGaleria())

window.addEventListener('scroll', () => ScrollInfo())
