
angular.module('blogApp').controller('homeController', function($scope){
	$scope.bienvenida = "Bienvenido Usuario!";
	$scope.edad = cacularEdad("19911219");
	$scope.sub_titulo = "Aquí encontrarás mi información personal.";
	$scope.infoPersonal = "Mi nombre es Pablo Enrique Rossetti, tengo "+edad+" años y estudio Ingeniería en Sistemas de Información en la UTN FRBA. Me gusta mucho desarrollar y aprender cosas nuevas.";
	$scope.lenguajes = {
		nombre: "Tengo experiencia laboral en:",
		lista: ["SQL Server","PHP","JavaScript","C#","HTML","CSS"]
	};
	$scope.companies = {
		nombre: "Trabajé en las siguientes compañías:",
		empresas: ["Oracle", "Access Informática", "CobusGroup"]
	};
	function cacularEdad(fecNacimiento) {
		date = new Date();
		anio = fecNacimiento.substring(0,4);
		mes = parseInt(fecNacimiento.substring(4,6));
		dia = parseInt(fecNacimiento.substring(6,8));
		edad = date.getFullYear()-anio;

		if (date.getMonth()+1 < mes) {
			edad--;	
		} else if (date.getMonth()+1 == mes && date.getDay()-1 < dia) {
			edad--;
		}
		return edad;
	}
});