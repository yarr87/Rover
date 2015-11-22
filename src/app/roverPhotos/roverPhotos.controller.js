export class RoverPhotosController {
  constructor ($scope, $stateParams, MarsPhotosService, rover) {
    'ngInject';

    this.rover = rover;

    this.date = this.rover.maxDate;
    this.datePopupOpen = false;
    this.invalidDate = false;
    this.photos = [];
    this.hasPhotos = false;
    
    this.dateOptions = {
      'show-button-bar': false
    };

    this.activate(MarsPhotosService);

    $scope.$watch(() => {
      return this.date;
    }, (oldVal, newVal) => {
      if (oldVal !== newVal) {
        this.activate(MarsPhotosService);
      }
    });
  }

  activate(MarsPhotosService) {

    this.invalidDate = false;
    var dt = moment(this.date);

    if (!this.date || !dt.isValid()) {
      this.invalidDate = true;
      return;
    }

    this.hasPhotos = false;
    
    MarsPhotosService.getPhotos(this.rover, dt.format('YYYY-MM-DD')).then((photos) => {
      this.photos.length = 0;
      Array.prototype.push.apply(this.photos, photos);
      this.photos[0].active = true;
      this.selectPhoto(0);
      this.hasPhotos = true;
    });

  }

  next() {
    this.selectPhoto(this.selectedPhotoIndex + 1);
  }

  prev() {
    this.selectPhoto(this.selectedPhotoIndex - 1);
  }

  selectPhoto(index) {

    if (index < 0) index = 0;
    else if (index > this.photos.length - 1) index = this.photos.length - 1;

    this.selectedPhotoIndex = index;
    this.selectedPhoto = this.photos[index];

  }

  openDatePopup() {
    this.datePopupOpen = true;
  };
}
