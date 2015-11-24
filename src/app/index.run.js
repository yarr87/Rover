export function runBlock ($log, $rootScope) {
  'ngInject';

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
  	$rootScope.currentStateName = toState.name;
  });

}
