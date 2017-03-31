import Ember from 'ember';

export default Ember.Route.extend({

    // Create a new 'tours' record and that will be the model
    model() {
        return this.store.createRecord('tours');
    },

    actions: {

        saveLibrary(newTour) {
            //Accept a parameter and save that model
            //send to Tours home page with transitionTo
            newTour.save().then(() => this.transitionTo('tours'));
        },

        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
        }
    }
});