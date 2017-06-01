var app = angular
  .module('feedbackapp');

app.factory('AdminProgramsFactory', function($http) {
  var apiUrl = 'http://localhost:3000/admin/programs/';

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
      $http.post(apiUrl, { program: model }).then(function(resp){
        success(resp);
      }).catch(function(resp){
        fail(resp);
      })
    },
    update: function(model, success, fail){
      $http.put(apiUrl + model.id, { program: model }).then(function(resp){
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
