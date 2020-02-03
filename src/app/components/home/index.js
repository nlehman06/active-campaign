import './home.scss'

import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import routing from './home.routes'
import HomeController from './home.controller'

/* @ngInject */
export default angular.module('app.home', [uirouter])
    .config(routing)
    .controller('HomeController', HomeController)
    .name