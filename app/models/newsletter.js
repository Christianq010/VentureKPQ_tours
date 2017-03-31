import DS from 'ember-data';

//Model for our Email stored via Subscription on Home Page
export default DS.Model.extend({
  email: DS.attr('string')
});
