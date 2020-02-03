import angular from 'angular'
import { $q } from '@uirouter/angularjs';

const HTTP = new WeakMap();

/* @ngInject */
class ActiveCampaign {

   constructor($http, $rootScope) {
      HTTP.set(this, $http);
      this.rootScope = $rootScope;
   }

   getContacts(offset) {
      if(!this.rootScope.apiToken) return $q.reject('Missing API Key')
      return HTTP
         .get(this)
         .get('https://cors-anywhere.herokuapp.com/https://lamppoststudios.activehosted.com/api/3/contacts?include=contactTags.tag,contactDeals,contactData&offset=' + offset, {
            headers: {
               'Api-Token': this.rootScope.apiToken
            }
         })
         .then(response => {
            return response.data;
         })
         .catch(error => {
            console.log(error)
         })
   }

}

ActiveCampaign.$inject = ["$http", "$rootScope"]
export default angular.module('services.active-campaign', [])
   .service('activeCampaign', ActiveCampaign)
   .name