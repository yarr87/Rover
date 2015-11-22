export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
  	.state('layout', {
  		templateUrl: 'app/layout/layout.html'
  	})
    .state('home', {
      url: '/',
      parent: 'layout',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      resolve: {
      	rovers: function(RoversService) {
      		return RoversService.getRovers();
      	}
      }
    })
    .state('roverPhotos', {
    	url: '/:rover/photos',
    	parent: 'layout',
    	templateUrl: 'app/roverPhotos/roverPhotos.html',
    	controller: 'RoverPhotosController',
    	controllerAs: 'roverPhotosCtrl',
    	resolve: {
    		rover: function($q, $stateParams, RoversService) {
    			var rover = RoversService.getRover($stateParams.rover); 

    			if (!rover) {
    				return $q.reject();
    			}

    			return rover;
    		}
    	}
    });

  $urlRouterProvider.otherwise('/');
}
