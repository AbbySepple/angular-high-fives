myApp.service('GetNumber', function(){

  this.randomNumber = function(min, max){
    var theNum = Math.floor(Math.random() * (max) + min);
    // console.log( 'in randomNumber with:', theNum);
    return theNum;
  };//end randomNumber

});//end myApp


myApp.service('OooNumber', ['GetNumber', function(GetNumber){
  var vm = this;
  vm.highfive = function() {
    vm.ranNum = GetNumber.randomNumber(1, 10);
    console.log('inside highfive:', vm.ranNum);
  };
}]); //end OooNumber


myApp.service('CompareHighFive', ['GetNumber', function(GetNumber){
  // var vm = this;
// vm.highfiveUser = function(min, max) {
  this.ranNumUser = GetNumber.randomNumber;

  console.log('inside compare highfive', this.ranNumUser);
  // vm.maybeHighFive = function() {
    console.log('inside maybeHighFive');
    if (this.ranNumUser >= this.ranNum) {
      this.count++;
      console.log('High Five Man! ');
    } else {
      console.log('Too Bad Bro, Try Again. ');
    }
// };

}]);//end compare highfive
