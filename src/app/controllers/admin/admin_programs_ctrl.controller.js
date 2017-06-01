var app = angular
  .module('feedbackapp');

app
  .controller('AdminProgramsCtrl', function($scope, $state, $stateParams, AdminProgramsFactory, AdminProgramManagersFactory, toastr) {
    $scope.program = {};
    $scope.programs = [];
    $scope.prog_managers = [];

    $scope.all_programs = function(){
      AdminProgramsFactory.getAll(function(successResp){
        $scope.programs = successResp.data;
      }, function(failResp){
        toastr.error("Could not retrieve programs", failResp.data);
      });
    }

    $scope.create_program = function(program){
      AdminProgramsFactory.create(program, function(successResp){
        $state.go('admin.program', { id: successResp.data.id });
      }, function(failResp){
        toastr.error("Could not create program", failResp.data);
      });
    }

    $scope.update_program = function(program){
      AdminProgramsFactory.update(program, function(successResp){
        $state.go('admin.program', { id: program.id })
      }, function(failResp){
        toastr.error("Could not update program", failResp.data);
      });
    }

    $scope.get_program = function(){
      AdminProgramsFactory.get($stateParams.id, function(successResp){
        $scope.program = successResp.data;
      }, function(failResp){
        toastr.error("Could not retrieve program", failResp.data);
      });
    }

    $scope.edit_program = function(){
      $scope.get_program();
      AdminProgramManagersFactory.getAll(function(successResp){
        $scope.prog_managers = successResp.data;
      }, function(failResp){
        toastr.error("Could not retrieve program managers", failResp.data);
      });
    }

    $scope.destroy_program = function(program) {
      AdminProgramsFactory.destroy(program.id, function(successResp){
        prog_index = $scope.programs.indexOf(program);
        if (prog_index > -1) {
          $scope.programs.splice(prog_index, 1);
        }
      }, function(failResp){
        toastr.error("Could not delete program", failResp.data);
      });
    }
  });
