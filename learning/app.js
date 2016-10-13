//app.js
var myModule = angular.module('MeuModulo', []);
myModule.controller('controllerContato', function($scope) {
	$scope.registros = [
	{ nome:"Sérgio Duarte", email:"sergio@gmail.com" },
	{ nome:"Kaio Kassiano", email:"kaio@gmail.com" },
	{ nome:"Matheus Gaudencio", email:"matheus@gmail.com" },
	{ nome:"Antunes Dantas", email:"antunes@gmail.com" }
	];
});

myModule.controller('controllerFormOpiniao',function($scope) {
	$scope.formularios = {formulario: ""
	};
	$scope.enviar = function(texto) {
		$scope.formularios.formulario = texto;
	}
});