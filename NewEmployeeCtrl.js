 SApp.controller('NewEmployeeCtrl', function ($scope, $http) {
    $scope.btntext = "Save";

    $scope.savedata = function (reg) {
        console.log(reg);
  
        $scope.btntext = "Please wait...!";
      

        $http({
            method: "POST",
            url: "http://empdbdev.southeastasia.cloudapp.azure.com/api/employee/AddEmployee",
            dataType: 'json',
            data: reg
         //   headers: { "Content-Type": "application/json" }
        }).then(function(result) {
            alert('Employee Added Successfully');
            $scope.btntext = "Save";
         }, function(error) {
            alert('Failed');
            $scope.btntext = "Save";
         });  
        

    }
    $scope.designationList= function ()  {
        $http.get("http://empdbdev.southeastasia.cloudapp.azure.com/api/Designation")
        .then(function(response){ $scope.designationDetails = response.data;
     
         });
        
      }
   
      $scope.locationList= function (){
        $http.get("http://empdbdev.southeastasia.cloudapp.azure.com/api/Location")
        .then(function(response){ $scope.locationDetails = response.data; });
      
        
      }

     $scope.projectList =function (){
        $http.get("http://empdbdev.southeastasia.cloudapp.azure.com/api/Project")
        .then(function(response){ $scope.projectDetails = response.data; });
      }
$scope.designationList();
$scope.locationList();
$scope.projectList();

});