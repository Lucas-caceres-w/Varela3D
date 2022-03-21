(() => {
const d = document;
const slider = d.querySelector(".slider");
const botonDer = d.querySelector(".boton-right");
const botonIzq = d.querySelector(".boton-left");
let slidimg = d.querySelectorAll(".slid-img");
let sliderLast = slidimg[slidimg.length -1];
let btnizq = d.querySelector('.detail');
let btnder = d.querySelector('.contactme');
let contacto = d.querySelector('.contactme-rsp')
let menu = d.querySelector('.menuder');
let subMenuRsp = d.querySelector('.menuder-rsp')
let galeria = d.querySelectorAll('.container')
let contGaleria = d.querySelector('.conteiner-galeria')
let nav = d.querySelector('.navegador')
let lista = d.querySelectorAll('.links-redes-rsp')
let cambiarModo = d.querySelector('.cambiar-modo')
let cambiarModoRsp = d.querySelector('.cambiar-modo-rsp')
let info = d.querySelector('.conteiner-info')
let subMenu = d.querySelectorAll('.enlaces')
let sombraSlid = d.querySelector('.contslider')
let impresora = d.querySelector('.impresora')
let search = d.querySelector('.buscar')
let portada = d.querySelector('.contenido')
let body = d.body;
let burger = d.querySelector('.flex')
let barra1 = d.querySelector('.nth1')
let barra2 = d.querySelector('.nth2')
let barra3 = d.querySelector('.nth3')
let barras = d.querySelectorAll('.burgers')
let menuRsp = d.querySelector('.menu-rsp')

/*---------------Funciones Declaradas-------------------- */

const typed2 = new Typed('#typed2', {
    strings: ['VARELA 3D' , 'Diseño e Impresiones 3D', '<i class="tipeable3">Diseñamos tus ideas y las hacemos realidad!</<i>'],
    typeSpeed: 40,
    backSpeed: 40,
    fadeOut: true,
    loop: true
});

let Next = () => {
	let sliderFirst = d.querySelectorAll(".slid-img")[0];
	slider.style.marginLeft = "-225%";
	slider.style.transition = "all 1s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeend' , sliderFirst);
		slider.style.marginLeft = "-115%";
	}, 1000);
}

let Prev = () => {
	let slidimg = d.querySelectorAll(".slid-img");
	let sliderLast = slidimg[slidimg.length -1];
	slider.style.marginLeft = "0";
	slider.style.transition = "all 1s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('afterbegin' , sliderLast);
		slider.style.marginLeft = "-110%";
	}, 1000);
}

let DarkMode = () => {
	cambiarModo.classList.add('move-circle')
	cambiarModo.style.transition = '.5s'
	cambiarModo.classList.add('dark-mode')
	cambiarModoRsp.classList.add('move-circle-rsp')
	cambiarModoRsp.style.transition = '.5s'
	body.classList.add('color-body')
	body.style.transition = '.5s'
	nav.classList.add('nav-color')
	nav.style.transition = '.5s'
	sombraSlid.classList.add('slider-shadow')
	sombraSlid.style.transition = '.5s'
	info.classList.add('info-color')
	info.classList.add('info-borde')
	info.style.transition = '.5s'
	search.classList.add('dark-borde')
	search.style.transition = '.5s'
	impresora.classList.add('shadow-impresora')
	impresora.style.transition = '1s'
	subMenuRsp.classList.add('menu-rsp-dark')
	subMenuRsp.style.transition = ".5s"
	lista.forEach(e => {	
		e.classList.add('lista-dark')
		e.style.transition = ".1s"
	})
	subMenu.forEach(e => {
		e.classList.add('enlaces-color')
	})
	galeria.forEach(e => {
		e.classList.add('shadow-image')
		e.style.transition = '1s'
	});
	barras.forEach(e => {
		e.classList.add('burgers-dark')
		e.style.transition = ".5s"
	})
	localStorage.setItem('theme' , 'dark')
}

let LightMode = () => {
	cambiarModo.classList.remove('move-circle')
	cambiarModo.style.transition = 'all .5s'
	cambiarModo.classList.add('light-mode')
	cambiarModoRsp.classList.remove('move-circle-rsp')
	cambiarModoRsp.style.transition = '.5s'
	body.classList.remove('color-body')
	body.style.transition = 'all .5s'
	nav.classList.remove('nav-color')
	nav.style.transition = 'all .5s'
	sombraSlid.classList.remove('slider-shadow')
	sombraSlid.style.transition = 'all .5s'
	info.classList.remove('info-color')
	info.classList.remove('info-borde')
	info.style.transition = 'all .5s'
	search.classList.remove('dark-borde')
	search.style.transition = '.5s'
	impresora.classList.remove('shadow-impresora')
	impresora.style.transition = 'all 1s'
	subMenuRsp.classList.remove('menu-rsp-dark')
	subMenuRsp.style.transition = ".5s"
	lista.forEach(e => {	
		e.classList.remove('lista-dark')
		e.style.transition = ".1s"
	})
	subMenu.forEach(e => {
		e.classList.remove('enlaces-color')
	})
	galeria.forEach(e => {
		e.classList.remove('shadow-image')
		e.style.transition = '1s'
	});
	barras.forEach(e => {
		e.classList.remove('burgers-dark')
		e.style.transition = ".5s"
	})
	localStorage.setItem('theme' , 'light')
}

let ScrollSpy = () => {
	let sections = d.querySelectorAll('.sections')

	const cb = (entries) => {
		entries.forEach((entry) => {
			const id = entry.target.getAttribute('id')
			if(entry.isIntersecting){
				d.querySelector(`a[href="#${id}"`).classList.add('active');
			} else {
				d.querySelector(`a[href="#${id}"`).classList.remove('active');
			}
	})
}
const observador = new IntersectionObserver(cb, {
	rootMargin: "-250px" 
});
	sections.forEach(el => observador.observe(el));
}

let addScroll = () => {
	barra1.classList.add('nth-1')
	barra1.style.transition = ".5s"
	barra2.classList.add('nth-2')
	barra3.classList.add('nth-3')
	barra3.style.transition = ".5s"
	menuRsp.classList.add('menu-rsp-mostrar')
	menuRsp.classList.remove('quitar')
	body.style.overflow = "hidden"
	cambiarModoRsp.classList.add('move-circle-rsp')
	cambiarModoRsp.style.transition = ".5s"
}

let removeScroll = () => {
	barra1.classList.remove('nth-1')
	barra1.style.transition = ".5s"
	barra2.classList.remove('nth-2')
	barra3.classList.remove('nth-3')
	barra3.style.transition = ".5s"
	menuRsp.classList.add('quitar')
	body.style.overflow = "visible"
	subMenuRsp.classList.remove('mostrar-contacto')
	subMenuRsp.style.transition = ".2s"
	menuRsp.classList.remove('menu-rsp-mostrar')
	cambiarModoRsp.classList.remove('move-circle-rsp')
	cambiarModoRsp.style.transition = ".5s"
}

let ScrollInfo = () => {
	let info = d.querySelector('.info');
	let obj = info.getBoundingClientRect().top;
	let screenSize = window.innerHeight/2;

		if (obj < screenSize) {
			info.classList.add('info-up');
			info.style.transition = '.5s';
		}
}

let ScrollGaleria = () => {
	let galeria = d.querySelector('.conteiner-galeria')
	let fotos = d.querySelectorAll('.container');
	let obj = galeria.getBoundingClientRect().top;
	let screenSize = window.innerHeight/1;

		if (obj < screenSize) {
			fotos.forEach(e => {
				e.classList.add('container-vis')
				e.style.transition = ".5s"
			});
		}
}

let menuRight = () => {
	menu.classList.toggle('mostrar2');
	menu.style.transition = '0.5s';
}

let Mostrar = () => {
	subMenuRsp.classList.toggle('mostrar-contacto')
	subMenuRsp.style.transition = ".5s"
}

function FormValidation() {
	const form = d.querySelector('.formulario');
	inputs = d.querySelectorAll('.formulario [required]');

	inputs.forEach((input) => {
		const span = d.createElement('span');
		span.id = input.name;
		span.textContent = input.title;
		span.classList.add('contact-error')
		input.insertAdjacentElement('afterend' , span)
	});

	document.addEventListener('keyup' , e => {
		if(e.target.matches(".formulario [required]")){
			let	input = e.target
			 	pattern = input.pattern || input.dataset.pattern;
		if(pattern && input.value !== "") {
			let regexp = new RegExp(pattern);
			return !regexp.exec(input.value)
			? document.getElementById(input.name).classList.add('span-active')
			: document.getElementById(input.name).classList.remove('span-active')
		}
		if(!pattern) {
			return input.value === ""
			? document.getElementById(input.name).classList.add('span-active')
			: document.getElementById(input.name).classList.remove('span-active')
		}
		}
	})

	document.addEventListener('submit' , (e) => {
		e.preventDefault();
		const loader = document.querySelector('.loader')
			enviado = document.querySelector('.enviado')

				enviado.classList.add('none')
				loader.classList.remove('none')
				setTimeout(() => {
					loader.classList.add('none')
					enviado.classList.remove('none')
					form.reset();
					setTimeout(() => {
						enviado.classList.add('none')
					}, 2000);
				}, 2000);
	})
}

async function getData() {
	const galeria = d.querySelector('.conteiner-galeria')
		fragmento = d.createDocumentFragment();
	try {
		let res = await axios.get("Productos.json"),
		json = await res.data;
		/* console.log(res, json) */
		json.forEach((e) => {
			const foto = d.createElement("div")
				foto.classList.add('container')
				foto.innerHTML = `<img class="image" src="${e.url}">`
				fragmento.appendChild(foto)
			const titulo = d.createElement('div')
				titulo.classList.add('middle')
				titulo.innerHTML = `<i class="text">${e.title}</i>`
				foto.appendChild(titulo)
		})
		setTimeout(() => {
			galeria.appendChild(fragmento)
		}, 2000);
	} catch (err) {
		let mensaje = err.response.statusText || "Ocurrio un error!"
			galeria.innerHTML = `<b class="error">ERROR <b style="color:red">${err.response.status}</b> ${mensaje}</b>`
	} finally {
		let loader = d.querySelector('.loader-imagenes')
			setTimeout(() => {	
				loader.classList.add('none')
			}, 2000);
	}
}

//-----------------------Funciones Calleadas------------------------------

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
		
cambiarModoRsp.addEventListener('click' , () => {
			
	if(cambiarModo.classList.contains('move-circle'))
	return(
		LightMode()
	)
	if(cambiarModo.classList.contains('light-mode'))
	return(
		DarkMode()
	)
					
})
				
contacto.addEventListener('click' , Mostrar)

btnder.addEventListener('click' , menuRight)

window.addEventListener('scroll' , () => {
	ScrollInfo()
	ScrollSpy()
	ScrollGaleria()
})

burger.addEventListener('click' , () => {
	
	if(menuRsp.classList.contains('quitar'))
	return(
		addScroll()
		)
	if(menuRsp.classList.contains('menu-rsp-mostrar'))
	return(
		removeScroll()
		)
	})
		
filtro('.buscar','.container')
		
function filtro(input, selector){
	d.addEventListener('keyup', (e) => {
		if(e.target.matches(input)){
		if (e.key === "Escape")(e.target.value = "")
		d.querySelectorAll(selector).forEach(el => 
		el.textContent.toLowerCase().includes(e.target.value)
		?el.classList.remove('filtro')
		:el.classList.add('filtro')
		);
	}
});
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
			
FormValidation()
			
getData();
})();
			
			
