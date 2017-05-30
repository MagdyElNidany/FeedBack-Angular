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
        }, {
          mentor: {
            apiUrl: 'http://localhost:3000/mentor'
          }
        }, {
          prog_manager: {
            apiUrl: 'http://localhost:3000/prog_manager'
          }
        }

      ]);

      $locationProvider.html5Mode(true);
    });
