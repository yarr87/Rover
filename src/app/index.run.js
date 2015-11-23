export function runBlock ($log, $rootScope) {
  'ngInject';
  $log.debug('runBlock end');

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
  	$rootScope.currentStateName = toState.name;
  });

}
