import angular from 'angular'

const HTTP = new WeakMap();

/* @ngInject */
class ActiveCampaign {

   constructor($http) {
      HTTP.set(this, $http);
   }

   getContacts(offset) {
      return HTTP
         .get(this)
         .get('https://cors-anywhere.herokuapp.com/https://lamppoststudios.activehosted.com/api/3/contacts?include=contactTags.tag,contactDeals,contactData&offset=' + offset, {
            headers: {
               'Api-Token': ''
            }
         })
         .then(response => {
            console.log(response.data)
            return response.data;
         })
         .catch(error => {
            console.log(error)
         })
   }

}

ActiveCampaign.$inject = ["$http"]
export default angular.module('services.active-campaign', [])
   .service('activeCampaign', ActiveCampaign)
   .name