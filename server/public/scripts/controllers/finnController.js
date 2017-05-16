myApp.controller('finnController', ['GetNumber', function(GetNumber) {
  console.log('Made it to the finnController');
  var self = this;
  self.finn = GetNumber;
}]);
