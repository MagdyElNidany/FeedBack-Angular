var app = angular
  .module('feedbackapp');

app.factory('AdminProgramManagersFactory', function($http) {
  var apiUrl = 'http://localhost:3000/admin/prog_managers/';

  var model = {
    getAll: function(success, fail){
      $http.get(apiUrl).then(function(resp){
        success(resp);
      }).catch(function(resp){
        fail(resp);
      });
    },
    get: function(id, success, fail){
      $http.get(apiUrl + id).then(function(resp){
        success(resp);
      }).catch(function(resp){
        fail(resp);
      });
    },
    create: function(model, success, fail){
      $http.post(apiUrl, { prog_manager: model }).then(function(resp){
        success(resp);
      }).catch(function(resp){
        fail(resp);
      })
    },
    update: function(model, success, fail){
      $http.put(apiUrl + model.id, { prog_manager: model }).then(function(resp){
        success(resp);
      }).catch(function(resp){
        fail(resp);
      })
    },
    destroy: function(id, success, fail) {
      $http.delete(apiUrl + id, { }).then(function(resp){
        success(resp);
      }).catch(function(resp){
        fail(resp);
      })
    }
  }

  return model;
});
