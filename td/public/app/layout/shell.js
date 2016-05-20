﻿
'use strict';

var angular = require('angular');

function shell($rootScope, $scope, $location, common, config) {
    /*jshint validthis: true */
    var controllerId = 'shell';
    var vm = this;
    var logSuccess = common.logger.getLogFn(controllerId, 'success');
    var events = config.events;

    $scope.$on('$viewContentLoaded', function () {
        $rootScope.appLoaded = true;
    });

    activate();

    function activate() {
        if (angular.isDefined($location.search().suppressbanner)) {
            vm.suppressBanner = $location.search().suppressbanner;
        }
        else {
            vm.suppressBanner = false;
        }

        logSuccess('Threat Dragon loaded!', null, true);
        common.activateController([], controllerId);
    }

    function toggleSpinner(on) { vm.isBusy = on; }

    $rootScope.$on('$routeChangeStart',
        function (event, next, current) { }
    );

    $rootScope.$on(events.controllerActivateSuccess,
        function (data) { }
    );
}

module.exports = shell;