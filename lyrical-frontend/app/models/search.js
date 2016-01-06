import DS from 'ember-data';

export default DS.Model.extend({
  share_url: DS.attr('String'),
  track_id: DS.attr('String'),
  artist: DS.attr('String'),
  spotify_id: DS.attr('String'),
  album: DS.attr('String'),
  name: DS.attr('String')
});
