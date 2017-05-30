var app = angular
  .module('feedbackapp');

app
  .controller('AuthenticationCtrl', function($scope, $state, AdminAuthentication) {
    $scope.handleSignIn = function(loginForm) {
      //AdminAuthentication.signin(loginForm, function(){
        //$state.go('prog_manager_invitation');
        //console.log("HI!!!");
      //}, function(){
        //console.log('emshy men hena yala');
      //});
    };

    $scope.handleSignOutBtnClick = function() {
      //AdminAuthentication.signout();
    };
  });
