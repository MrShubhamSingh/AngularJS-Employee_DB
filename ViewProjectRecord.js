SApp.controller('ViewProjectRcrdCtrl',  ['$scope', '$http', 'record', function($scope, $http, record) {
    function init(){
     
           $scope.regdata = record;
       }
   init();
   
   }]);