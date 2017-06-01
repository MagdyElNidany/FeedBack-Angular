var app = angular
  .module('feedbackapp');

app
    .controller('ProgManagerAuthenticationCtrl', function($scope, $state, ProgManagerAuthentication) {
    $scope.handleSignIn = function(loginForm) {
      ProgManagerAuthentication.signin(loginForm, function(){
        $state.go('home');
        console.log("HI!!!");
      }, function(){
        console.log('emshy men hena yala');
      });
    };

    $scope.handleSignOutBtnClick = function() {
      ProgManagerAuthentication.signout();
    };
  });
