export function RoverSelectDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/roverSelect/roverSelect.html',
    scope: {
        rover: '=',
        onClick: '&'
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

    // "this.creation" is avaible by directive option "bindToController: true"
    //this.relativeDate = moment(this.creationDate).fromNow();
  }

  click() {
    if (this.onClick) {
      this.onClick(this.rover);
    }
  }
}
