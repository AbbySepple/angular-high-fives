myApp.controller('jakeController', ['GetNumber', 'OooNumber', 'CompareHighFive', function(GetNumber, OooNumber, CompareHighFive) {
  console.log('Made it to the jakeController');
  OooNumber.highfive();
  CompareHighFive.ranNumUser(6, 10);


}]);
