var app = angular
  .module('feedbackapp');

app.factory('AdminProgramsFactory', function($http) {
  var apiUrl = 'http://localhost:3000/admin/programs/';

  var program = {
    getAllPrograms: function(success, fail){
      $http.get(apiUrl).then(function(resp){
        success(resp);
      }).catch(function(resp){
        fail(resp);
      });
    },
    getProgram: function(id, success, fail){
      $http.get(apiUrl + id).then(function(resp){
        success(resp);
      }).catch(function(resp){
        fail(resp);
      });
    },
    createProgram: function(program, success, fail){
      $http.post(apiUrl, { program: program }).then(function(resp){
        success(resp);
      }).catch(function(resp){
        fail(resp);
      })
    },
    updateProgram: function(program, success, fail){
      $http.put(apiUrl + program.id, { program: program }).then(function(resp){
        success(resp);
      }).catch(function(resp){
        fail(resp);
      })
    },
    destroyProgram: function(id, success, fail) {
      $http.delete(apiUrl + id, { }).then(function(resp){
        success(resp);
      }).catch(function(resp){
        fail(resp);
      })
    }
  }

  return program;
});
