var app = angular.module('demo', []);

app.controller('ProjectController', ['$scope', function ($scope) {
    var counter = 0;
   
    $scope.project = {
        name: 'Initial project to be sent to the directive'
    };

    $scope.name = 6;

    $scope.projects = [
        {
            name: 'Project 1'
        },
        {
            name: 'Project 2'

        },
        {
            name: 'Project 3'

        }
    ];

    $scope.changeData = function () {
        counter++;

        $scope.projects.push({name:'Project ' + counter})

    };

} ]);