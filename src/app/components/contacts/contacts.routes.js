/* @ngInject */
export default function routes($stateProvider) {

   $stateProvider
      .state('contacts', {
         url: '/contacts',
         template: require('./contacts.html'),
         controller: 'ContactsController',
         controllerAs: 'contacts'
      });

}