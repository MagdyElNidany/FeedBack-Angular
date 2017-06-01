var app = angular
  .module('feedbackapp');

app.controller('InvitationsCtrl', function($scope, $state, $stateParams, $http, $log) {
  $scope.InfoPage = {};
  $log.debug("HELLO")
  $scope.submitForm = function(attendee) {
    attendee.invitation_token = $stateParams.token

    $http({
      method  : 'PATCH',
      url     : 'http://localhost:3000/attendee/auth/invitation',
      data    : { attendee: attendee }, //forms user object
    }).then(function(data) {
      $log.debug("SUCCESS")
    }).catch(function(data){
      $log.debug("FAIL");
    });    
  };

});
