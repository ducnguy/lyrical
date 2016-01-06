import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeArrayResponse(store, type, payload) {
    var normalizedRecords = [];
    payload.message.body.track_list.map(function(track) {
      normalizedRecords.push({
        'id': track.track.track_id,
        'type': type.modelName,
        'attributes': {
          'track_share_url': track.track.track_share_url
        }
      })
    })
    normalizedRecords = {data: normalizedRecords};
    return normalizedRecords;
  }
});
