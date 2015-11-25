// Directive to display a single rover with an image and some info about it
export function RoverSelectDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/roverSelect/roverSelect.html',
    scope: {
        rover: '=',       // The rover to show
        onClick: '&',     // Optional click handler
        selectable: '='   // Flag to tell if the rover is selectable by mouse - affects styling
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
