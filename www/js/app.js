// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'tabs/tabs.html'
  })

  .state('tab.comprar', {
    url: '/comprar',
    views: {
      'comprar': {
        templateUrl: 'comprar/comprar.html',
        controller: 'ComprarCtrl as ctrl'
      }
    }
  })

  .state('tab.vender', {
      url: '/vender',
      views: {
        'vender': {
          templateUrl: 'vender/vender.html',
          controller: 'VenderCtrl as ctrl' 
        }
      }
    })

  .state('tab.cuenta', {
    url: '/cuenta',
    views: {
      'cuenta': {
        templateUrl: 'cuenta/cuenta.html',
        controller: 'CuentaCtrl as ctrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/comprar');
  var config = {
    apiKey: "AIzaSyCiqGGdMusRFOqRFQ31Or9iWxAgY-UEe3A",
    authDomain: "marketplace-7fc3e.firebaseapp.com",
    databaseURL: "https://marketplace-7fc3e.firebaseio.com",
    projectId: "marketplace-7fc3e",
    storageBucket: "",
    messagingSenderId: "92685812595"
  };
  firebase.initializeApp(config);

});
