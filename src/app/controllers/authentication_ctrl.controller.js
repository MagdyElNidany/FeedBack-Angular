var app = angular
  .module('feedbackapp');

app
  .controller('AuthenticationCtrl', function($scope, $state, AttendeeAuthentication) {
    $scope.handleSignIn = function(loginForm) {
      AttendeeAuthentication.signin(loginForm, function(){
        $state.go('home');
        console.log("HI!!!");
      }, function(){
        console.log('emshy men hena yala');
      });
    };

    $scope.handleSignOutBtnClick = function() {
      AttendeeAuthentication.signout();
    };
  });
