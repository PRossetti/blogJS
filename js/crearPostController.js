
angular.module('blogApp').controller('crearPostController', function($scope){

$scope.tag = "";

$scope.tags = ["test"];

$scope.mouseOverDetected = false;

$scope.nuevoPost = {
	titulo: "",
 	texto: "",
 	link: {
		texto: "Haz click aquí para ir al link",
		url: ""
	},
 	tags: [],
 	imagen: {
 		src: ""
 	}
};
$scope.posts = [];

angular.element(document).ready(function () {
    console.log("[DEBUG] Página cargada.");
	$scope.frm.hashtag.$setValidity('unique',false);
});

$scope.mostrarErrores = function() {
	$scope.mouseOverDetected = true;
	console.log("[DEBUG] Mouse Over detected.");
}

$scope.limpiarForm = function () {
	$scope.nuevoPost = {
		titulo: "",
	 	texto: "",
	 	link: {
			texto: "Haz click aquí para ir al link",
			url: ""
		},
	 	tags: [],
	 	imagen: {
	 		src: ""
	 	}
	};
	$scope.tag = "";
	document.getElementById("fileImage").value = null;
	$scope.mouseOverDetected = false;
	$scope.frm.$setUntouched();
};

// $scope.validarTagInput = function () {
// 	if ($scope.nuevoPost.tags.length < 4 ) {
// 		// $scope.frm.tagg.$invalid = true;
// 		// $scope.frm.$invalid = true;
// 		$scope.frm.hashtag.$setValidity('unique',false);
// 	} else if (!$scope.frm.titulo.$invalid && !frm.mensaje.$invalid && !frm.file.$invalid) {
// 		$scope.frm.hashtag.$setValidity('unique',true);
// 		// $scope.frm.tagg.$invalid = false;
// 		// $scope.frm.$invalid = false;
// 	}
// }

$scope.validarTagInput = function () {
	if ($scope.nuevoPost.tags.length < 4 ) {
		$scope.frm.hashtag.$setValidity('unique',false);
	} else
		$scope.frm.hashtag.$setValidity('unique',true);
}

$scope.pushTag = function () {
	if ($scope.tag=="") {
		alert("No puede agregar un tag vacio");
	} else if ($scope.nuevoPost.tags.includes($scope.tag)) {
		alert("No puede agregar tags repetidos");
	} else
		$scope.nuevoPost.tags.push($scope.tag);

	$scope.validarTagInput();
};

$scope.pullTag = function (element) {
	var idx = $scope.nuevoPost.tags.indexOf(element);
	$scope.nuevoPost.tags.splice(idx,1);
	$scope.validarTagInput();
};

/* No está en uso */
$scope.agregarPost = function(isValid) {

	if (isValid) {
		console.log("Esta funcion no hace nada aún");	
	}

};

//esto es un workarround para poder tener la variable $event en el evento ng-change que no la acepta
$scope.targetField = null;
$scope.focusCallback = function($event) {
  if($event.target === null) {
    return;
  }

  $scope.targetField = $event.target;
};

$scope.fileNameChanged = function () {
	console.log("paso algo");

	var files = $scope.targetField.files;
	var imagen = files[0];
	var output = document.getElementById('output');

	// var l = files.length;
	// var namesArr = [];

	// for (var i = 0; i < l; i++) {
	//   namesArr.push(files[i].name);
	//   console.log("El nombre es "+files[i].type.substr(0,5));
	//   console.log("El nombre es "+files[i].size);
	// }
  
	if ( (imagen.size/1024)>100 ) {
		console.log("La imagen excede el tamaño permitido");
		document.getElementById("fileImage").value = null;		
		//document.getElementById("output").value = null;
		//$scope.nuevoPost.imagen.src = null;
		output.src = ""; /* si pongo null en lugar de "" me muestra la pic rota*/

	} else
	if ( imagen.type.substr(0,5)!="image" ) {
		console.log("El archivo no es una imagen");
		document.getElementById("fileImage").value = null;
		output.src = "";
	}
	else {

	var reader = new FileReader();

	reader.onload = function(){
		// var dataURL = reader.result;
		$scope.fileContent = reader.result;
		// output.src = $scope.fileContent;
		$scope.nuevoPost.imagen.src = $scope.fileContent;
		$scope.$apply(); /* clave el apply y ponerlo acá para que se actualice el DOM */
		
	};

	reader.readAsDataURL(imagen);
	}

}



});

