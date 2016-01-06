import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeArrayResponse(store, type, payload) {
    var normalizedRecords = [];
    payload.message.body.track_list.map(function(track) {
      normalizedRecords.push({
        'id': track.track.track_id,
        'type': type.modelName,
        'attributes': {
          'share_url': track.track.track_share_url,
          'track_id': track.track.track_id,
          'artist': track.track.artist_name,
          'spotify_id': track.track.spotify_id,
          'album': track.track.album_name,
          'name': track.track.track_name
        }
      })
    })
    normalizedRecords = {data: normalizedRecords};
    return normalizedRecords;
  }
});
