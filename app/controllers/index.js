import Ember from 'ember';

export default Ember.Controller.extend({

    isDisabled: true,

    emailAddress: '',

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    actions: {

        saveEmailAddress() {
            const email = this.get('emailAddress');

            const newSubscription = this.store.createRecord('newsletter', { email: email });
            newSubscription.save();

            this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
            this.set('emailAddress', '');
        }
    }

});
