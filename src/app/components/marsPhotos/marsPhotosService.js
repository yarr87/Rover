export class MarsPhotosService {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
  };




  getPhotos(rover, date) {  

    if (!date) {
      date = rover.minDate;
    }

    var url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.name}/photos?earth_date=${date}&api_key=FAsAyfKoLwXo3XBxCC6Awxb0RhLkioBLSuG2wpQX`;

    return this.$http.get(url).then((result) => {

      var photos = result.data.photos;
      return photos;
    });
  }
}
