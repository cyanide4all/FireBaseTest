var app = angular.module("irene", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = firebase.database().ref()
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "compra");
});


/*
ver aqui el putno 6, realmente últil para ahora
https://github.com/firebase/angularfire/blob/master/docs/quickstart.md
//ESTRUCTURA
DATABASE
    mensaje1: heuhue
    mensajen: hueheun
*/
