var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/jake', {
    templateUrl: 'views/jake.html',
    controller: 'jakeController',
    controllerAs: 'vm'
  })
  .when('/finn', {
    templateUrl: 'views/finn.html',
    controller: 'finnController',
    controllerAs: 'vm'
  })
  .when('/lady',{
    templateUrl: 'views/lady.html',
    controller: 'ladyController',
    controllerAs: 'vm'
  })
  .otherwise({
    template: '<h2>That is a 404!</h2>'
  });
  $locationProvider.html5Mode(true);
}]);




// //this is my controller
// myApp.controller('HighFiveController', function(GetNumber) {
//   // console.log('inside myApp controller 1');
//
//   // variable global to this controller
//   var vm = this;
//   vm.count= 0;
//
//
//   vm.highfive = function() {
//     vm.ranNum = GetNumber.randomNumber(1, 10);
//     console.log('inside highfive:', vm.ranNum);
//
//   }; //end jake's high five




  //
  // vm.highsix = function() {
  //   // console.log('inside highfive');
  //   vm.ranNum = GetNumber.randomNumber(6, 10);
  // }; //end finns's high five
  //
  // vm.highfour = function() {
  //   // console.log('inside highfive');
  //   vm.ranNum = GetNumber.randomNumber(4, 10);
  // }; //end lady's high five
  //
  //






//   vm.highfiveUser = function() {
//     vm.ranNumUser = GetNumber.randomNumber(1, 10);
//
//     console.log('inside highfive', vm.ranNumUser);
//     // vm.maybeHighFive = function() {
//       console.log('inside maybeHighFive');
//       if (vm.ranNumUser >= vm.ranNum) {
//         vm.count++;
//         console.log('High Five Man! ');
//       } else {
//         console.log('Too Bad Bro, Try Again. ');
//       }
//
//   }; //end jake's high five
//
// }); //end myApp.controller
