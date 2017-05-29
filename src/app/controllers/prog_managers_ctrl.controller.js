var app = angular
  .module('feedbackapp');

app.controller('ProgManagersCtrl', function($scope, $state, $stateParams, $http, $log) {
  $scope.InfoPage = {};
  $scope.submitForm = function(progManager) {
    progManager.invitation_token = $stateParams.token

    $http({
      method  : 'PATCH',
      url     : 'http://localhost:3000/prog_manager/auth/invitation',
      data    : { prog_manager: progManager }, //forms user object
    }).then(function(data) {
      $log.debug("SUCCESS")
    }).catch(function(data){
      $log.debug("FAIL");
    });    
  };

});