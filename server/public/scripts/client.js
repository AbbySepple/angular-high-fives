var myApp = angular.module('myApp', []);
//this is my controller
myApp.controller('HighFiveController', function(GetNumber) {
  // console.log('inside myApp controller 1');

  // variable global to this controller
  var vm = this;
  // var ranNum = 0;


  vm.highfive = function() {
    // console.log('inside highfive');
    vm.ranNum = GetNumber.randomNumber(1, 10);
  }; //end jake's high five

  vm.highsix = function() {
    // console.log('inside highfive');
    vm.ranNum = GetNumber.randomNumber(6, 10);
  }; //end finns's high five

  vm.highfour = function() {
    // console.log('inside highfive');
    vm.ranNum = GetNumber.randomNumber(4, 10);
  }; //end lady's high five


  vm.maybeHighFive = function() {
    console.log('inside maybeHighFive');
    vm.try = [];
    if (vm.highfive >= vm.highfive) {
      console.log('High Five Man! ');
    } else {
      console.log('Too Bad Bro, Try Again. ');
    }
    return vm.try;
  }; //end maybeHighFive

}); //end myApp.controller
