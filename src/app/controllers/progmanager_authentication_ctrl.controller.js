var app = angular
  .module('feedbackapp');

app
    .controller('ProgManagerAuthenticationCtrl', function($scope, $state, AdminAuthentication) {
    $scope.handleSignIn = function(loginForm) {
      AdminAuthentication.signin(loginForm, function(){
        $state.go('home');
        console.log("HI!!!");
      }, function(){
        console.log('emshy men hena yala');
      });
    };

    $scope.handleSignOutBtnClick = function() {
      AdminAuthentication.signout();
    };
  });
