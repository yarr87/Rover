export class MainController {
  constructor ($state, MarsPhotosService, toastr, rovers) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1448141193385;
    this.toastr = toastr;
    this.rovers = rovers;
    this.$state = $state;
  }

  onRoverClick(rover) {
    this.$state.go('roverPhotos', { rover: rover.name });
  }

  selectImage(photo) {
    this.selectedPhotoUrl = photo.img_src;
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
