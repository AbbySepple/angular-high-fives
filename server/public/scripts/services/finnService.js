
myApp.service('GetNumber', function(){

  this.randomNumber = function(min, max){

    var theNum = Math.floor(Math.random() * (max) + min);
    // console.log( 'in randomNumber with:', theNum);
    return theNum;
  };//end randomNumber

});//end myApp


//this is my controller
myApp.controller('HighFiveController', function(GetNumber) {
  // console.log('inside myApp controller 1');

  // variable global to this controller
  var vm = this;
  vm.count= 0;

//this is finn's number
  vm.highfive = function() {
    vm.ranNum = GetNumber.randomNumber(1, 10);
    console.log('inside highfive:', vm.ranNum);

  };

  vm.highfiveUser = function() {
    vm.ranNumUser = GetNumber.randomNumber(6, 10);

    console.log('inside highfive', vm.ranNumUser);
    // vm.maybeHighFive = function() {
      console.log('inside maybeHighFive');
      if (vm.ranNumUser >= vm.ranNum) {
        vm.count++;
        console.log('High Five Man! ');
      } else {
        console.log('Too Bad Bro, Try Again. ');
      }

  }; //end finn's high five

});
