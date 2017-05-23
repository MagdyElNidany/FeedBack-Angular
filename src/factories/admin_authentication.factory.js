var app = angular
  .module('feedbackapp');

app.factory('AdminAuthentication', function($auth){
  var user = {
    signedIn: false,
    signin: function(loginForm, successfulLogin){
      var self = this;

      $auth.submitLogin(loginForm)
        .then(function(resp) {
          self.signedIn = true;
          successfulLogin();
        })
        .catch(function(resp) {
          self.signedIn = false;
        });

        return self.signedIn;
    },
    signout: function(){
      $auth.signOut()
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
    }
  }

  return user;
});
