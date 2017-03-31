import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.store.createRecord('tours');
    },

    actions: {


        saveLibrary(newTour) {
            //send newTour to tours home page
            newTour.save().then(() => this.transitionTo('tours'));
        },

        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
        }
    }
});