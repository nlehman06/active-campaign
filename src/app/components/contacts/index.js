import './contacts.scss'

import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import routing from './contacts.routes'
import ContactsController from './contacts.controller'
import activeCampaign from '../../services/activeCampaign.service'

export default angular.module('app.contacts', [uirouter, activeCampaign])
   .config(routing)
   .controller('ContactsController', ContactsController)
   .name