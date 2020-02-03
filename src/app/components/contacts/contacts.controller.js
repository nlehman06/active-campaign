/* @ngInject */
export default class ContactsController {

   constructor(activeCampaign) {
      this.activeCampaign = activeCampaign;
      this.contacts = [];
      this.tags = [];
      this.contactTags = [];
      this.contactDeals = [];
      this.contactData = [];
      this.offset = 0;
      this.meta = undefined;
      this.getContacts();
   }

   getContacts() {
      this.activeCampaign.getContacts(this.offset)
         .then(response => {
            this.contacts = response.contacts;
            this.tags = response.tags;
            this.contactTags = response.contactTags;
            this.contactDeals = response.contactDeals;
            this.contactData = response.contactData;
            this.meta = response.meta;
         })
         .catch(error => {
            console.log(error)
         });
   }

   listTags(contactId) {
      return this.contactTags
         .filter(contactTag => contactTag.contact === contactId)
         .flatMap(contactTag => this.tagsList(contactTag))
         .join(", ");
   }

   tagsList(contactTag) {
      return this.tags
         .filter(tag => tag.id === contactTag.tag)
         .map(tag => tag.tag.length > 8 ? tag.tag.substr(0, 8) + "..." : tag.tag);
   }

   dealsCount(contactId) {
      return this.contactDeals
         .filter(contactDeal => contactDeal.contact === contactId)
         .length;
   }

   sumValues(values) {
      return values.reduce((a, b) => parseInt(a) + parseInt(b), 0);
   }

   location(contactId) {
      let data = this.contactData.find(data => data.contact === contactId);
      return data ? data.geoCity ? data.geoCity + ", " + data.geoState : "" : ""
   }

   getNextPage() {
      this.offset += 20;
      this.getContacts();
   }
   getPreviousPage() {
      this.offset -= 20;
      this.getContacts();
   }
   disablePrevious() {
      return this.meta ? this.meta.page_input.offset === 0 : false;
   }

}