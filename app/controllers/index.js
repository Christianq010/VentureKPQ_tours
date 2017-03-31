import Ember from 'ember';

export default Ember.Controller.extend({

    isDisabled: true,

    emailAddress: '',

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    actions: {

        saveEmailAddress() {
            const email = this.get('emailAddress');

            //Save the email address (Subscription) onto Firebase via newsletter Model
            const newSubscription = this.store.createRecord('newsletter', {
                email: email });
            newSubscription.save();

            //Using ES2015
            //JS code to set the email box to empty (''), show respond message along with ID from Firebase
            newSubscription.save().then((response) => {
                this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
                this.set('emailAddress', '');
            });
        }
    }

});
