// Controller for the photos page
export class RoverPhotosController {
  constructor ($scope, FavoritePhotosService, MarsPhotosService, rover) {
    'ngInject';

    this.rover = rover;
    this.FavoritePhotosService = FavoritePhotosService;
    this.MarsPhotosService = MarsPhotosService;

    this.date = {
      format: 'YYYY-MM-DD',
      isInvalid: false,
      isPopupOpen: false
    };

    this.date.min = moment(this.rover.minDate, this.date.format).toDate();
    this.date.max = moment(this.rover.maxDate, this.date.format).toDate();
    this.date.value = this.date.max;

    // The photos to display
    this.photos = [];
    this.activePhoto = {};

    // Flag used to indicate if photos have been loaded when changing dates
    this.photosLoaded = false;

    // Flag used to indicate that the selected date has no photos
    this.noPhotosForDate = false;

    this.loadPhotos(this.date.value);

    // Get new photos whenever the selected date changes
    $scope.$watch(() => {
      return this.date.value;
    }, (oldVal, newVal) => {
      if (oldVal !== newVal) {
        this.loadPhotos(this.date.value);
      }
    });
  }

  // Call the api for the given date and show the resulting photos
  loadPhotos(date) {

    this.date.isInvalid = false;
    var dt = moment(date);

    if (!date || !dt || !dt.isValid()) {
      this.date.isInvalid = true;
      return;
    }

    // Pseudo-hack.  The carousel control doesn't like it when you just change the array of photos.  This flag is bound to an ng-if, so setting it
    // to false removes the carousel from the DOM altogether.  After the new photos are loaded it is set to true, which re-adds the carousel with
    // the new photos.
    this.photosLoaded = false;
    
    this.MarsPhotosService.getPhotos(this.rover, dt.format(this.date.format)).then((photos) => this.displayPhotos(photos));
  }

  // Show the given photos in the carousel
  displayPhotos(photos) {
    if (photos.length === 0) {
      this.noPhotosForDate = true;
      return;
    }

    // Flag each photo as a favorite or not
    _.each(photos, (photo) => {
      photo.isFavorite = this.FavoritePhotosService.isFavorite(photo);
    });

    this.photos = photos;

    this.noPhotosForDate = false;
    this.photosLoaded = true;
  }

  // Toggle the date popup, used when the calendar icon is clicked or the date input is focused
  openDatePopup() {
    this.date.isPopupOpen = true;
  }

  // Select a random date.  Updates this.date, which will trigger a photo reload.
  randomDate() {
    var min = moment(this.date.min);
    var max = moment(this.date.max);

    // Number of days between min and max date
    var days = max.diff(min, 'days');

    // To get a random day, pick a random number of days from 0 to {days}, then add to the minDate.
    var randomDays =  Math.floor(Math.random() * days);

    this.date.value = min.add(randomDays, 'days').toDate();
  }

  addOrRemoveFavorite() {
    this.FavoritePhotosService.toggleFavorite(this.activePhoto);
  }
}
