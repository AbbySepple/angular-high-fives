myApp.service('GetNumber', function(){

  this.randomNumber = function(min, max){

    var theNum = Math.floor(Math.random() * (max) + min);
    console.log( 'in randomNumber with:', theNum);
    return theNum;
  };//end randomNumber

});//end myApp
