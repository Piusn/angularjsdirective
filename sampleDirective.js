angular.module('demo').directive('sample', function () {
    return {
        restrict: 'EA',
        scope: {
            datasource: '=',
            add: '&',
        },
        controller: function ($scope) {

            $scope.addCustomer = function () {
                //Call external scope's function
                var name = 'New Customer Added by Directive';
                $scope.add();

                //Add new customer to directive scope
                $scope.customers.push({
                    name: name                
                });
            };
        },
        template: '<button ng-click="addCustomer()">Change Data</button><ul> <li ng-repeat="cust in customers">{{ cust.name }}</li></ul>'
    }
});