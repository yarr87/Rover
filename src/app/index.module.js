/* global _: false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { FavoritesController } from './favorites/favorites.controller.js';
import { MainController } from './main/main.controller';
import { RoverPhotosController } from './roverPhotos/roverPhotos.controller';

import { RoversService } from '../app/components/rovers/roversService';
import { FavoritePhotosService } from '../app/components/favoritePhotos/favoritePhotos.service';
import { MarsPhotosService } from '../app/components/marsPhotos/marsPhotos.service';

import { PhotoViewerDirective } from '../app/components/photoViewer/photoViewer.directive';
import { RoverSelectDirective } from '../app/components/roverSelect/roverSelect.directive';

angular.module('rover', ['LocalStorageModule', 'ngAnimate', 'ui.router', 'ui.bootstrap'])
  .constant('_', _)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('FavoritePhotosService', FavoritePhotosService)
  .service('RoversService', RoversService)
  .service('MarsPhotosService', MarsPhotosService)
  .controller('FavoritesController', FavoritesController)
  .controller('MainController', MainController)
  .controller('RoverPhotosController', RoverPhotosController)
  .directive('photoViewer', PhotoViewerDirective)
  .directive('roverSelect', RoverSelectDirective);
