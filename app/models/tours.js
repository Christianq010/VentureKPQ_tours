import DS from 'ember-data';

//Model Data for Tours that is stored on firebase
export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  rating: DS.attr('number')
});
