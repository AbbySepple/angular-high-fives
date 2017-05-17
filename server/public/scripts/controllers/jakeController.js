myApp.controller('jakeController', ['GetNumber', 'OooNumber', 'CompareHighFive', function(GetNumber, OooNumber, CompareHighFive) {
  // console.log('Made it to the jakeController');
  OooNumber.highfive();
  CompareHighFive.yourSkill(6, 10);


}]);
