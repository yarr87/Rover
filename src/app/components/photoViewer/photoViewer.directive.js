// Directive to display a list of photos in a carousel
export function PhotoViewerDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/photoViewer/photoViewer.html',
    scope: {
        photos: '=',
        activePhoto: '='
    },
    controller: PhotoViewerController,
    controllerAs: 'photoViewerCtrl',
    bindToController: true,
    transclude: true
  };

  return directive;
}

class PhotoViewerController {
  constructor () {
    'ngInject';

    this.selectPhoto(0);
  }

  // Move to the next photo
  next() {
    this.selectPhoto(this.selectedPhotoIndex + 1);
  }

  // Move to the previous photo
  prev() {
    this.selectPhoto(this.selectedPhotoIndex - 1);
  }

  // Activate the photo with the given index
  selectPhoto(index) {

    if (!this.photos || this.photos.length === 0) return;

    if (index < 0) index = 0; 
    else if (index > this.photos.length - 1) index = this.photos.length - 1;

    this.selectedPhotoIndex = index;
    this.photos[index].active = true;

    this.activePhoto = this.photos[index];
  }
}
