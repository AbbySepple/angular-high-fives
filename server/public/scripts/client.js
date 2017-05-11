var myApp = angular.module( 'myApp', [] );
//this is my controller
myApp.controller('HighFiveController', function(GetNumber){
  console.log('inside myApp controller 1');

  // variable global to this controller
  var vm = this;
  // var ranNum = 0;



  vm.highfive = function() {
    console.log('inside highfive');

  vm.ranNum = GetNumber.randomNumber(1, 10);
};

});//end myApp.controller
