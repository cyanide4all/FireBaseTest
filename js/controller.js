var app = angular.module("irene", ["firebase"]);
var del2 = document.getElementById("borrarCantidad")


app.controller("controllerCompras", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("ListaDeLaCompra");
  // create a synchronized array
  $scope.ListaDeLaCompra = $firebaseArray(ref);
  // add articulos a la lista en firebase mediante magia
  $scope.addArticulo = function() {
    var cantidadAux = $scope.nuevoArticulo_cantidad
    if($scope.nuevoArticulo_cantidad == null){
      cantidadAux = 1
    }
    $scope.ListaDeLaCompra.$add({
      text: $scope.nuevoArticulo_nombre,
      cantidad: cantidadAux
    });
    borrarCampos()
  };
});

function borrarCampos() {
  var del1 = document.getElementById("borrarNombre")
  var del2 = document.getElementById("borrarCantidad")
  del1.value=''
  del2.value=1


}


/*
ver aqui el putno 6, realmente últil para ahora
https://github.com/firebase/angularfire/blob/master/docs/quickstart.md
//ESTRUCTURA
DATABASE
    mensaje1: heuhue
    mensajen: hueheun
*/
