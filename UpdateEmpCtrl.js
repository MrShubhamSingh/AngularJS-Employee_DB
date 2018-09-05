SApp.controller('UpdateEmpCtrl', ['$scope', '$http', 'record', function ($scope, $http, record) {
 $scope.updateRecord = function(data){
   console.log(data)
    $http({
        method: "POST",
        url: "http://empdbdev.southeastasia.cloudapp.azure.com/api/employee/UpdateEmployee/" +data.ID,
        
       
        data: data
      
     //   headers: { "Content-Type": "application/json" }
    }).then(function(result) {
        $scope.getEmployee();
        alert('Employee Updated Successfully');
       
     }, function(error) {
        alert('Failed');
      
     }); 
 }
    $scope.regdata = {};
    
    function init() {
     
        $scope.regdata.ID = (record[0].ID);
        $scope.regdata.FirstName = record[0].FirstName;
        $scope.regdata.MiddleName = record[0].MiddleName;
        $scope.regdata.LastName = record[0].LastName;
        $scope.regdata.EmailID = record[0].EmailID;
        $scope.regdata.JoiningDate = new Date(record[0].JoiningDate);
        $scope.regdata.AnnualCTC = parseInt(record[0].AnnualCTC);
        $scope.regdata.DesignationID= (record[0].DesignationID);
        $scope.regdata.CurrencyID= (record[0].CurrencyID);
        $scope.regdata.LocationID = (record[0].LocationID);
        $scope.regdata.ProjectID = record[0].ProjectID;
     
       
    }
    $scope.updateEmp = function (data)
     {
        console.log(data)
        $scope.updateRecord(data);
        
    }
    init();
    
}]);









