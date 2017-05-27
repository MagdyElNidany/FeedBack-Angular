var app = angular
  .module('feedbackapp2', []);

app.controller('ProgManagerCtrl', function($scope, $http) {
  $scope.InfoPage = {};
  $scope.submitForm = function() {
    $http({
      method  : 'POST',
      url     : 'http://localhost:3001',
      data    : { data: $scope.ProgManagerInfo }, //forms user object
    })
    $scope.submitForm = function () {
      if(myForm.$valid) {
        $state.href('https://github.com/ryanb/letter_opener');
      }
    }
    .success(function(data) {
       if (data.errors) {
         // Showing errors.
         $scope.errorProgManagerInfo = data.errors.errorProgManagerInfo;
       } else {
         $scope.InfoPage = data.InfoPage;
       }
     });    
  };

});