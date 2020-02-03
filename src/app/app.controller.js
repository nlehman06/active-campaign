/* @ngInject */
export default class AppController {

    constructor($rootScope) {
        this.isCollapsed = true
        this.date = new Date();
        this.rootScope = $rootScope;
    }

}