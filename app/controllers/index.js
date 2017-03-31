import Ember from 'ember';

export default Ember.Controller.extend({

    isDisabled: true,

    emailAddress: '',

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    actions: {

        saveEmailAddress() {
            const email = this.get('emailAddress');

            const newSubscription = this.store.createRecord('newsletter', {
                email: email });
            newSubscription.save();

            newSubscription.save().then((response) => {
                this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
                this.set('emailAddress', '');
            });
        }
    }

});
