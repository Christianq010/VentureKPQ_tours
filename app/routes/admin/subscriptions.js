import Ember from 'ember';

//Retrieve our Subscriber data(emails) from Firebase using a Route Handler and Ember Data
export default Ember.Route.extend({
    model() {
        return this.store.findAll('newsletter');
    }
});
