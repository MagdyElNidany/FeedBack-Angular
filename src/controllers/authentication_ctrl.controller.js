var app = angular
  .module('feedbackapp');

app
  .controller('AuthenticationCtrl', function($scope, $state, AdminAuthentication) {
    $scope.handleSignIn = function(loginForm) {
      AdminAuthentication.signin(loginForm, function(){
        $state.go('home');
        console.log("HI!!!");
      });
    };

    $scope.handleSignOutBtnClick = function() {
      AdminAuthentication.signout();
    };
  });
