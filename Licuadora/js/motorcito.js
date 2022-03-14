let estadoLicuadora = 'Apagado';

let sonidoLicuadora = document.getElementById('blender-sound');
let botonLicuadora = document.getElementById('blender-button-sound');
let licuadora = document.getElementById('blender');

function controlarLicuadora(){
	if(estadoLicuadora=='Apagado'){
		estadoLicuadora='Encendido';
		licuadora.classList.add('active');
		hacerSonido();
		// console.log("me prendiste");
	}else{
		estadoLicuadora='Apagado';
		licuadora.classList.remove('active');
		hacerSonido();
		// console.log("me pagaste")
	}
}

function hacerSonido(){
	if(sonidoLicuadora.paused){
		botonLicuadora.play();
		sonidoLicuadora.play();
	}else{
		botonLicuadora.play();
		sonidoLicuadora.pause();
		sonidoLicuadora.currentTime=0;
	}
}