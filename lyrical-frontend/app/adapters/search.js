import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace:'ws/1.1/',
  host: 'http://api.musixmatch.com/',
  headers: {
    'api_key': '2e165c9c4113265e932f48c2be93c705'
  },
  ajaxOptions: function(url, type, options = {}) {
    options.crossDomain = true;
    options.dataType = 'json';
    options.xhrFields = {withCredentials : false};
    return this._super(url, type, options);
  },
  buildURL: function(id) {
    return this.get('host') + this.get('namespace') + 'track.search?format=JSONP&callback=?&page_size=30&apikey=' + this.get('headers').api_key
      +'&q=' + id.split(' ').join('%20');
  },
  query: function(store, type, params, snapshot) {
    const URL = this.buildURL(params.search);
    console.log(URL);
    return $.getJSON(URL);
  }
});
