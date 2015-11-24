export function RoverSelectDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/roverSelect/roverSelect.html',
    scope: {
        rover: '=',
        onClick: '&',
        selectable: '='
    },
    controller: RoverSelectController,
    controllerAs: 'roverSelectCtrl',
    bindToController: true
  };

  return directive;
}

class RoverSelectController {
  constructor () {
    'ngInject';
  }

  click() {
    if (this.onClick) {
      this.onClick(this.rover);
    }
  }
}
