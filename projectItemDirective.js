angular.module('demo').directive('projectItem', function () {
    return {
        scope: {
            datasource: '=',
            action: '&'
        },
        template: '<ul><li ng-repeat="prop in datasource">{{ prop }}</li></ul> ' +
                  '<button ng-click="action()">Add Project</button>'
    };
    
});