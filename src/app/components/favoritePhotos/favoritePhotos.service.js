// Service to track a list of favorite photos viewed through the site.
// Saves to local storage for persistence across page loads.
export class FavoritePhotosService {
  constructor (localStorageService) {
    'ngInject';

    this.localStorageKey = "rover.photos.favorites";
    this.localStorageService = localStorageService;

    this.photos = localStorageService.get(this.localStorageKey);
  }

  // Return all favorited photos
  getFavorites() {
    return this.photos;
  }

  // Add the given photo to the favorites list
  addFavorite(photo) {

    // Store a clone so we don't get weird effects when we mess with the active property of the photos via the carousel
    var clone = _.clone(photo, true);
    clone.active = false;
    this.photos.push(clone);

    // Save to local storage
    this.localStorageService.set(this.localStorageKey, this.photos);
  }

  // Return true if the given photo is in the favorites list, false otherwise
  isFavorite(photo) {
    return _.any(this.photos, { id: photo.id });
  }

  // Add or remove the given photo from the favorites list
  toggleFavorite(photo) {
    if (this.isFavorite(photo)) {
      this.removeFavorite(photo);
    }
    else {
      this.addFavorite(photo);
    }

  }

  // Remove the given photo from the favorites list
  removeFavorite(photo) {
    _.remove(this.photos, { id: photo.id });

    // Save to local storage
    this.localStorageService.set(this.localStorageKey, this.photos);
  }
}
