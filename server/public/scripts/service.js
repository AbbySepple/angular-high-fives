myApp.service('GetNumber', function(){

  this.randomNumber = function(min, max){
    var theNum = Math.floor(Math.random() * (max) + min);
    // console.log( 'in randomNumber with:', theNum);
    return theNum;
  };//end randomNumber

});//end myApp


myApp.service('OooNumber', function(){
  var vm = this;
  vm.highfive = function() {
    vm.ranNum = GetNumber.randomNumber(1, 10);
    console.log('inside highfive:', vm.ranNum);
  };
}); //end OooNumber
