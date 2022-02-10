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

//-------------------------------------------------------------------//

window.addEventListener('scroll', function()  {
	let info = document.querySelector('.info');
	let obj = info.getBoundingClientRect().top;
	let screenSize = window.innerHeight/3;

		if (obj < screenSize) {
			info.classList.add('info-up');
			info.style.transition = '1s';
		}
});

window.addEventListener('scroll' , function(){
	let galeria = document.querySelector('.conteiner-galeria')
	let obj = galeria.getBoundingClientRect().top;
	let screenSize = window.innerHeight/2;

		if (obj < screenSize) {
			galeria.classList.add('visible-conteiner');
			galeria.style.transition = '1s';
		}
	
})

let btnizq = document.querySelector('.detail');
let mostrar = document.querySelector('.menuizq');

btnizq.addEventListener('click' , function(){
	mostrar.classList.toggle('mostrar');
	mostrar.style.transition = '0.5s';
})

let btnder = document.querySelector('.contactme');
let menu = document.querySelector('.menuder');

btnder.addEventListener('click' , function(){
	menu.classList.toggle('mostrar2');
	menu.style.transition = '0.5s';
})
