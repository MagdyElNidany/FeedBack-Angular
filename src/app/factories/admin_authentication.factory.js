var app = angular
  .module('feedbackapp');

app.factory('AdminAuthentication', function($auth) {
  var config = {
    config: 'admin'
  }

  var user = {
    signedIn: false,
    object: {},
    signin: function(loginForm, successfulLogin, failedLogin) {
      var self = this;

      $auth.submitLogin(loginForm, config)
        .then(function(resp) {
          self.signedIn = true;
          self.object = resp;
          successfulLogin();
        })
        .catch(function(resp) {
          self.signedIn = false;
          failedLogin();
        });
    },
    signout: function() {
      $auth.signOut(config)
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