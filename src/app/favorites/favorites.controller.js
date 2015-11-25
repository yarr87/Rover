// Controller for the favorites page
export class FavoritesController {
  constructor (FavoritePhotosService, photos) {
    'ngInject';

    this.FavoritePhotosService = FavoritePhotosService;

    this.photos = photos;

    // Reset this flag, or if we revisit this page during a singel session it will start in the wrong spot.
    _.each(this.photos, (photo) => {
    	photo.active = false;
    });
    this.activePhoto = {};
  }

  // Remove the current photo from the favorites list
  removeFavorite() {

  	var index = this.photos.indexOf(this.activePhoto);

  	this.FavoritePhotosService.removeFavorite(this.activePhoto);

  	if (this.photos.length > 0) {
  		this.activePhoto = index >= this.photos.length ? this.photos[index - 1] : this.photos[index];
	}
  }
}
