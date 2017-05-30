var app = angular
  .module('feedbackapp');

app
  .controller('HomeCtrl', function($scope, AdminAuthentication) {
    $scope.logged_user_email = AdminAuthentication.object.email;
  });