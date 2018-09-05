SApp.controller('ViewEmpRcrdCtrl',  ['$scope', '$http', 'record', function($scope, $http, record) {
 function init(){
  
        $scope.regdata = record;
    }
init();

}]);