SApp.controller('NewProjectCtrl', function ($scope, $http) {
    $scope.btntext = "Save";

    $scope.saveProject = function (projectData) {
        console.log(projectData)

        $scope.btntext = "Please wait...!";

        $http({
            method: "POST",
            url: "http://empdbdev.southeastasia.cloudapp.azure.com/api/Project/AddProject",
            dataType: 'json',
            data: projectData
        
        }).then(function(result) {
            alert('Project Added Successfully');
            $scope.btntext = "Save";
         }, function(error) {
            alert('Failed');
            $scope.btntext = "Save";
         });  

    }

});