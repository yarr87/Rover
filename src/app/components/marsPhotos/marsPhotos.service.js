// Service to return photos of Mars via api
export class MarsPhotosService {
  constructor ($http) {
    'ngInject';

    this.$http = $http;

    // Free api key from nasa.gov.  Good for 1000 requests/hour
    this.apiKey = "FAsAyfKoLwXo3XBxCC6Awxb0RhLkioBLSuG2wpQX";
  }

  // Return photos from the given rover on the given date
  getPhotos(rover, date) {  

    if (!date) {
      date = rover.minDate;
    }

    var url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.name}/photos?earth_date=${date}&api_key=${this.apiKey}`;

    return this.$http.get(url).then((result) => {
      // The actual array is under a "photos" property, so just return that.
      var photos = result.data.photos;
      return photos;
    }).catch(() => {
      // The api returns a 400 when there are no photos.  Just return an empty array in this case.  This ignores legit errors, but that's out of scope.
      return [];
    });
  }
}
