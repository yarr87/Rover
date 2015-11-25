export function runBlock ($log, $rootScope) {
  'ngInject';

  // Set a scope variable to the current state's name.  This will be set as a class on the body, so we can
  // show/hide the background image on different states.
  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
    $rootScope.currentStateName = toState.name;
  }); 

}
