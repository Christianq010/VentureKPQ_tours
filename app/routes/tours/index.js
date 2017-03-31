import Ember from 'ember';

export default Ember.Route.extend({

    //Retrieve all 'tours' records from the server
    model() {
        return this.store.findAll('tours');
    }

});