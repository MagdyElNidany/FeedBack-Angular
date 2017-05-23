var app = angular
  .module('feedbackapp');

app
  .controller('AccountsCtrl', function($scope, $auth) {
    $scope.handleUpdateAccountBtnClick = function() {
      $auth.updateAccount($scope.updateAccountForm)
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
    };
  });
