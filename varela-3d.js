const slider = document.querySelector(".slider");
const botonDer = document.querySelector(".boton-right");
const botonIzq = document.querySelector(".boton-left");
let slidimg = document.querySelectorAll(".slid-img");
let sliderLast = slidimg[slidimg.length -1];


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

slider.insertAdjacentElement("afterbegin" , sliderLast);

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
let nav = document.querySelector('.navegador')
let cambiarModo = document.querySelector('.cambiar-modo')
let info = document.querySelector('.conteiner-info')
let subMenu = document.querySelectorAll('.enlaces')
let sombraSlid = document.querySelector('.contslider')
let impresora = document.querySelector('.impresora')
let body = document.body;

let DarkMode = () => {
	cambiarModo.classList.add('move-circle')
	cambiarModo.style.transition = '.5s'
	cambiarModo.classList.add('dark-mode')
	body.classList.add('color-body')
	body.style.transition = '.5s'
	nav.classList.add('nav-color')
	nav.style.transition = '.5s'
	sombraSlid.classList.add('slider-shadow')
	sombraSlid.style.transition = '.5s'
	info.classList.add('info-color')
	info.classList.add('info-borde')
	info.style.transition = '.5s'
	impresora.classList.add('shadow-impresora')
	impresora.style.transition = '1s'
	subMenu.forEach(e => {
		e.classList.add('enlaces-color')
	})
	galeria.forEach(e => {
		e.classList.add('shadow-image')
		e.style.transition = '1s'
	});
	localStorage.setItem('theme' , 'dark')
}

let LightMode = () => {
	cambiarModo.classList.remove('move-circle')
	cambiarModo.style.transition = 'all .5s'
	cambiarModo.classList.add('light-mode')
	body.classList.remove('color-body')
	body.style.transition = 'all .5s'
	nav.classList.remove('nav-color')
	nav.style.transition = 'all .5s'
	sombraSlid.classList.remove('slider-shadow')
	sombraSlid.style.transition = 'all .5s'
	info.classList.remove('info-color')
	info.classList.remove('info-borde')
	info.style.transition = 'all .5s'
	impresora.classList.remove('shadow-impresora')
	impresora.style.transition = 'all 1s'
	subMenu.forEach(e => {
		e.classList.remove('enlaces-color')
	})
	galeria.forEach(e => {
		e.classList.remove('shadow-image')
		e.style.transition = '1s'
	});
	localStorage.setItem('theme' , 'light')
}

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

cambiarModo.addEventListener('click' , () => {
	
	if(cambiarModo.classList.contains('move-circle'))
	return(
		LightMode()
	)
	if(cambiarModo.classList.contains('light-mode'))
	return(
		DarkMode()
	)

})

btnder.addEventListener('click' , menuRight)

btnizq.addEventListener('click' , menuLeft)

window.addEventListener('scroll' , () => {
	scrollGaleria()
	ScrollInfo()
})

window.addEventListener('DOMContentLoaded' , () => {
	if(localStorage.getItem('theme') === null)
		localStorage.setItem('theme','dark')

	if(localStorage.getItem('theme') === 'light')(
		LightMode()
		)
		
	if(localStorage.getItem('theme') === 'dark')(
		DarkMode()
	)

})
