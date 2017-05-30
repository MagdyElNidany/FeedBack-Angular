var app = angular
  .module('feedbackapp');

app
  .controller('AdminInvitationsCtrl', function($scope, $state, $http) {
    $scope.inviteProgManager = function(invitation) {
      $http.post(
        "http://localhost:3000/admin/prog_manager/invitations", 
        { prog_manager: invitation }
      ).then(function(resp){
        console.log(resp);
      }).catch(function(resp){
        console.log(resp);
      });
    }
  });
