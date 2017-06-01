var app = angular
  .module('feedbackapp');

app.controller('MentorInvitationsCtrl', function($scope, $state, $stateParams, $http, $log) {
  $scope.InfoPage = {};
  $log.debug("HELLO")
  $scope.submitForm = function(mentor) {
    mentor.invitation_token = $stateParams.token

    $http({
      method  : 'PATCH',
      url     : 'http://localhost:3000/mentor/auth/invitation',
      data    : { mentor: mentor }, //forms user object
    }).then(function(data) {
      $log.debug("SUCCESS")
    }).catch(function(data){
      $log.debug("FAIL");
    });    
  };

});
