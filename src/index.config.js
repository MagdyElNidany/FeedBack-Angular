var app = angular
  .module('feedbackapp');

app
  .config(function($authProvider, $locationProvider) {
      $authProvider.configure([{
          default: {
            apiUrl: 'http://localhost:3000'
          }
        }, {
          admin: {
            apiUrl: 'http://localhost:3000/admin'
          }
        }
      ]);

      $locationProvider.html5Mode(true);
    });
