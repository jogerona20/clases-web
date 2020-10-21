console.log("Hola Mundo");

//Variables: var y let

var mes = "Octubre";
console.log(typeof(mes));

var dia=21;
console.log(typeof(dia));

var esFestivo;
esFestivo=null;
console.log(esFestivo);

var var1, var2, var3;

dia = 'veiniuno';
console.log(typeof(dia));

console.log(document);

function suma(a, b){
	document.getElementByid('resultado').innerHTML = a + b;
	alert("hiciste click");
}

//LocalStorage

var impirmir =function(){
	document.getElementById("valor").innerHTML(dato);
}

var aumentar = function(){
	LocalStorage.contador++;
	impirmir(LocalStorage.contador);
}

var reiniciar = function(){
	LocalStorage.contador = 0;
	impirmir(LocalStorage.contador);
}

var eliminar = function(){
	LocalStorage.removeItem("contador");
	impirmir(LocalStorage.contador);
}

if(typeof(Storage) != "undefined"){
	if(LocalStorage.contador){
		impirmir(LocalStorage.contador);
	}else{
		LocalStorage.contador = 0;
	}
}

