/* global _: false, malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { RoverPhotosController } from './roverPhotos/roverPhotos.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { RoversService } from '../app/components/rovers/roversService';
import { RoverSelectDirective } from '../app/components/roverSelect/roverSelect.directive';
import { MarsPhotosService } from '../app/components/marsPhotos/marsPhotosService';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('rover', ['ngAnimate', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('_', _)
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('RoversService', RoversService)
  .service('MarsPhotosService', MarsPhotosService)
  .controller('MainController', MainController)
  .controller('RoverPhotosController', RoverPhotosController)
  .directive('roverSelect', RoverSelectDirective)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
