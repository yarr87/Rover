export class RoverPhotosController {
  constructor ($scope, $stateParams, MarsPhotosService, rover) {
    'ngInject';

    this.rover = rover;

    this.minDate = moment(this.rover.minDate, 'YYYY-MM-DD').toDate();
    this.maxDate = moment(this.rover.maxDate, 'YYYY-MM-DD').toDate();

    this.date = this.maxDate;
    this.datePopupOpen = false;
    this.invalidDate = false;
    this.photos = [];
    this.hasPhotos = false;

    this.noPhotosForDate = false;

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

      if (photos.length === 0) {
        this.noPhotosForDate = true;
        return;
      }
      else {
        this.noPhotosForDate = false;
        Array.prototype.push.apply(this.photos, photos);
        this.photos[0].active = true;
        this.selectPhoto(0);
        this.hasPhotos = true;
      }
      
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

    if (this.selectedPhoto) {
      this.selectedPhoto.active = false;
    }

    this.selectedPhotoIndex = index;
    this.photos[index].active = true;

  }

  openDatePopup() {
    this.datePopupOpen = true;
  };

  randomDate() {
    var min = moment(this.minDate);
    var max = moment(this.maxDate);

    // Number of days between min and max date
    var days = max.diff(min, 'days');

    // To get a random day, pick a random number of days from 0 to {days}, then add to the minDate.
    var randomDays =  Math.floor(Math.random() * days);

    this.date = min.add(randomDays, 'days').toDate();
  }
}
