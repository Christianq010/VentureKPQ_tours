import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('menu');
  this.route('about');

  this.route('admin', function() {
    this.route('subscriptions');
  });

  this.route('tours', function() {
    this.route('new');
  });
});

export default Router;
