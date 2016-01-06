import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['search'],
  search: ''
 /* actions: {
    findSong() {
      console.log('called')
      var query = this.get('searchQuery');
      console.log(this.store.query('search', {name: 'wildest dreams'}));
    }
  }*/
});
