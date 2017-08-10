
angular.module('blogApp').controller('layoutController', function($scope){

	$scope.cabecera = "Este es mi blog personal";
	$scope.botonera = [
		{
			text: "Home",
			sref: ".home"
		},
		{
			text:"Posts",
			sref: ".posts"
		}
		// ,
		// {
		// 	text:"Más",
		// 	link: "mas"
		// },
		// {
		// 	text:"Contacto",
		// 	link: "contacto"
		// }
	];

	// $scope.imagenes = ["perfil.jpg","htmlcssjs.png","csharp.jpg","angular-ionic.jpg"];
	$scope.imagenes = { perfil: "perfil.jpg", web:"htmlcssjs.png", desk: "csharp.jpg", app: "angular-ionic.jpg" };
	$scope.footer = "Este es el footer de la web, todos los derechos reservados.";
	$scope.webs = {
		lista: "Mis páginas web:",
		elementos: ["Sample 1", "Sample 2", "Sample 3"]
	};
	$scope.desktops = {
		lista: "Mis desarrollos desktop:",
		elementos: ["Sample 1", "Sample 2", "Sample 3"]
	};
	$scope.mobile = {
		lista: "Mis aplicaciones web/mobile",
		elementos: ["Sample 1", "Sample 2", "Sample 3"]
	};

})