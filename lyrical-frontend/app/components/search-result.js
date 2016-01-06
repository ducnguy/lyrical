import Ember from 'ember';

export default Ember.Component.extend({
  lyrics: '',
  actions: {
    getLyrics: function(id) {
      $.getJSON('http://api.musixmatch.com/ws/1.1/track.lyrics.get?format=JSONP&callback=?&apikey=2e165c9c4113265e932f48c2be93c705&track_id=' + id)
        .then(function(res) {
          this.set('lyrics', res.message.body.lyrics.lyrics_body);
        }.bind(this));
    }
  }
});
