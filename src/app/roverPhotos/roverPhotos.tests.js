// Tests for the rover photos page controller
describe('controller: RoverPhotosController', () => {
  var $rootScope, ctrl, photos, rover, MarsPhotosService;

  beforeEach(angular.mock.module('rover'));

  beforeEach(inject(($controller, $q, _$rootScope_, FavoritePhotosService, _MarsPhotosService_) => {

  	$rootScope = _$rootScope_;
  	MarsPhotosService = _MarsPhotosService_;

  	photos = [{}];

  	rover = {
  		name: 'test rover',
  		minDate: '2015-10-01',
  		maxDate: '2015-11-25'
  	};

  	MarsPhotosService.getPhotos = () => { return $q.when(photos); };
  	FavoritePhotosService.isFavorite = () => { return true; };

  	var $scope = $rootScope.$new();

    ctrl = $controller('RoverPhotosController', { '$scope': $scope, rover: rover });
  }));

  describe('method: contructor', function() {

	it('should set min date', function() {
		expect(ctrl.date.min).toEqual(new Date(2015, 9, 1));
	});

	it('should set max date', function() {
		expect(ctrl.date.max).toEqual(new Date(2015, 10, 25));
	});

	it('should set current date to max date', function() {
		expect(ctrl.date.value).toEqual(new Date(2015, 10, 25));
	});

  });

  describe('method: loadPhotos', function() {

  	it('should not accept invalid date', function() {
  		ctrl.loadPhotos('asdf');
  		expect(ctrl.date.isInvalid).toBe(true);
  	});

  	it('should call service to get photos', function() {

  		spyOn(MarsPhotosService, 'getPhotos').and.callThrough();

  		var date = new Date(2015, 9, 15);
  		ctrl.loadPhotos(date);

  		expect(MarsPhotosService.getPhotos).toHaveBeenCalledWith(rover, '2015-10-15');
  	});

  	it('should display resulting photos', function() {
		spyOn(ctrl, 'displayPhotos').and.callThrough();

  		var date = new Date(2015, 9, 15);
  		ctrl.loadPhotos(date);

  		$rootScope.$digest();

  		expect(ctrl.displayPhotos).toHaveBeenCalledWith(photos);
  	});

  });

  describe('method: displayPhotos', function() {

  	it('should set noPhotosForDate to true when there are no photos', function() {
  		ctrl.displayPhotos([]);
  		expect(ctrl.noPhotosForDate).toBe(true);
  	});

  	it('should set isFavorite flag on each photo', function() {
  		var mockPhotos = [{}, {}];

  		ctrl.displayPhotos(mockPhotos);

  		_.each(mockPhotos, (photo) => {
  			expect(photo.isFavorite).toBe(true);
  		});
  	});

  	it('should set noPhotosForDate to false when there are photos', function() {
  		ctrl.displayPhotos([{}]);
  		expect(ctrl.noPhotosForDate).toBe(false);
  	});

  	it('should set photosLoaded to true', function() {
		ctrl.displayPhotos([{}]);
  		expect(ctrl.photosLoaded).toBe(true);
  	});

  });

});
