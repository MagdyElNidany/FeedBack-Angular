var app = angular
  .module('feedbackapp');

app
  .controller('MentorAuthenticationCtrl', function($scope, $state, MentorAuthentication) {
    $scope.handleSignIn = function(loginForm) {
      MentorAuthentication.signin(loginForm, function(){
        $state.go('mentor_program_page');
        console.log("HI!!!");
      }, function(){
        console.log('emshy men hena yala');
      });
    };

    $scope.handleSignOutBtnClick = function() {
      MentorAuthentication.signout();
    };
  });