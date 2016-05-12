/**
 * This module handles the protected (signed in) areas of the application.
 */
var mainModule = angular.module("duck.main");

mainModule.controller("MainController", function ($scope, LocaleService) {
    var controller = this;
    
    controller.locales = LocaleService.getLocales();
    // signal that the main controller has been loaded and Foundation should be initialized
    if (!$scope.initFoundation) {
        $scope.initFoundation = true;
    }

});

mainModule.controller("SignoutController", function (CurrentUser, $state) {

    /**
     * Logs the user out of the system by clearing the local storage token.
     */
    this.signout = function () {
        CurrentUser.reset();
        $state.go("signin");
    }

});


