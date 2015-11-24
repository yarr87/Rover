/* global _: false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { RoverPhotosController } from './roverPhotos/roverPhotos.controller';
import { RoversService } from '../app/components/rovers/roversService';
import { RoverSelectDirective } from '../app/components/roverSelect/roverSelect.directive';
import { MarsPhotosService } from '../app/components/marsPhotos/marsPhotosService';

angular.module('rover', ['ngAnimate', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('_', _)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('RoversService', RoversService)
  .service('MarsPhotosService', MarsPhotosService)
  .controller('MainController', MainController)
  .controller('RoverPhotosController', RoverPhotosController)
  .directive('roverSelect', RoverSelectDirective);
