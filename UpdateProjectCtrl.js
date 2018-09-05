SApp.controller('UpdateProjectCtrl', ['$scope', '$http', 'record', function ($scope, $http, record) {
    $scope.updateRecord = function(data){
      console.log(data)
       $http({
           method: "POST",
           url: "http://empdbdev.southeastasia.cloudapp.azure.com/api/Project/UpdateProject/"+data.ProjectID,
           
          
           data: data
         
        //   headers: { "Content-Type": "application/json" }
       }).then(function(result) {
        $scope.getProject();
           alert('Project Updated Successfully');
         
        }, function(error) {
           alert('Failed');
         
        }); 
    }
       $scope.regdata = {};
       
       function init() {
        
           $scope.regdata.ProjectID = parseInt(record[0].ProjectID);
           $scope.regdata.ProjectName = record[0].ProjectName;
           $scope.regdata.ProjectManager = record[0].ProjectManager;
           $scope.regdata.ProjectStartDate = new Date(record[0].ProjectStartDate);
           $scope.regdata.ProjectEndDate = new Date(record[0].ProjectEndDate);
           $scope.regdata.ProjectResourceCount =parseInt(record[0].ProjectResourceCount);
           $scope.regdata. ProjectBilling = parseInt(record[0]. ProjectBilling);
          
        
          
       }
       $scope.updateProject = function (data)
        {
           console.log(data)
           $scope.updateRecord(data);
           
       }
       init();
       
   }]);
   
   
   
   
   
   
   
   
   
   