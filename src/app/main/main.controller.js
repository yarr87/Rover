// Controller for the main home page
export class MainController {
  constructor ($state, MarsPhotosService, rovers) {
    'ngInject';

    this.rovers = rovers;
    this.$state = $state;
  }

  // Go to a rover's page on click
  onRoverClick(rover) {
    this.$state.go('roverPhotos', { rover: rover.name });
  }
}
