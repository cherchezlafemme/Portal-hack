import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // Need to figure out the right path to api
  host: 'ttp://hacking-events-api.azurewebsites.net/api/People'
});