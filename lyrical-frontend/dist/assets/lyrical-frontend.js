"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('lyrical-frontend/adapters/search', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
    namespace: 'ws/1.1/',
    host: 'http://api.musixmatch.com/',
    headers: {
      'api_key': '2e165c9c4113265e932f48c2be93c705'

    },
    ajaxOptions: function ajaxOptions(url, type) {
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      options.crossDomain = true;
      options.dataType = 'json';
      options.xhrFields = { withCredentials: false };
      return this._super(url, type, options);
    },
    buildURL: function buildURL(id) {
      return this.get('host') + this.get('namespace') + 'track.search?format=JSONP&callback=?&apikey=' + this.get('headers').api_key + '&q=' + id.split(' ').join('%20');
    },
    query: function query(store, type, params, snapshot) {
      var URL = this.buildURL(params.search);
      console.log(URL);
      return $.getJSON(URL);
    }
  });
});
define('lyrical-frontend/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'lyrical-frontend/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _lyricalFrontendConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _lyricalFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _lyricalFrontendConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _lyricalFrontendConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('lyrical-frontend/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'lyrical-frontend/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _lyricalFrontendConfigEnvironment) {

  var name = _lyricalFrontendConfigEnvironment['default'].APP.name;
  var version = _lyricalFrontendConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('lyrical-frontend/components/search-result', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    lyrics: '',
    actions: {
      getLyrics: function getLyrics(id) {
        $.getJSON('http://api.musixmatch.com/ws/1.1/track.lyrics.get?format=JSONP&callback=?&apikey=2e165c9c4113265e932f48c2be93c705&track_id=' + id).then((function (res) {
          this.set('lyrics', res.message.body.lyrics.lyrics_body);
        }).bind(this));
      }
    }
  });
});
define('lyrical-frontend/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('lyrical-frontend/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('lyrical-frontend/controllers/userfeed', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    queryParams: ['search'],
    search: ''
  });
});
define('lyrical-frontend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'lyrical-frontend/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _lyricalFrontendConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_lyricalFrontendConfigEnvironment['default'].APP.name, _lyricalFrontendConfigEnvironment['default'].APP.version)
  };
});
define('lyrical-frontend/initializers/export-application-global', ['exports', 'ember', 'lyrical-frontend/config/environment'], function (exports, _ember, _lyricalFrontendConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_lyricalFrontendConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _lyricalFrontendConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_lyricalFrontendConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('lyrical-frontend/models/search-result', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr()
  });
});
define('lyrical-frontend/models/search', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    share_url: _emberData['default'].attr('String'),
    track_id: _emberData['default'].attr('String'),
    artist: _emberData['default'].attr('String'),
    spotify_id: _emberData['default'].attr('String'),
    album: _emberData['default'].attr('String'),
    name: _emberData['default'].attr('String')
  });
});
define('lyrical-frontend/old/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'lyrical-frontend/old/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _lyricalFrontendOldConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _lyricalFrontendOldConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _lyricalFrontendOldConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _lyricalFrontendOldConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('lyrical-frontend/old/router', ['exports', 'ember', 'lyrical-frontend/old/config/environment'], function (exports, _ember, _lyricalFrontendOldConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _lyricalFrontendOldConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('lyrical-frontend/router', ['exports', 'ember', 'lyrical-frontend/config/environment'], function (exports, _ember, _lyricalFrontendConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _lyricalFrontendConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('userfeed');
    this.resource('search');
  });

  exports['default'] = Router;
});
define('lyrical-frontend/routes/search', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend();
});
define('lyrical-frontend/routes/userfeed', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    queryParams: {
      search: {
        refreshModel: true
      }
    },
    model: function model(params) {
      return this.store.find('search', params);
    }
  });
});
define('lyrical-frontend/serializers/search', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPISerializer.extend({
    normalizeArrayResponse: function normalizeArrayResponse(store, type, payload) {
      var normalizedRecords = [];
      payload.message.body.track_list.map(function (track) {
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
        });
      });
      normalizedRecords = { data: normalizedRecords };
      return normalizedRecords;
    }
  });
});
define("lyrical-frontend/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 27,
            "column": 0
          }
        },
        "moduleName": "lyrical-frontend/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "navbar navbar-default navbar-fixed-top");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "navbar-header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "navbar-toggle collapsed");
        dom.setAttribute(el4, "data-toggle", "collapse");
        dom.setAttribute(el4, "data-target", "#bs-example-navbar-collapse-1");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "navbar-brand");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("Lyrical");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "collapse navbar-collapse");
        dom.setAttribute(el3, "id", "bs-example-navbar-collapse-1");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "nav navbar-nav");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "#");
        var el7 = dom.createTextNode("Home");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "#");
        var el7 = dom.createTextNode("My Profile");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "user-journal");
        dom.setAttribute(el2, "class", "col-md-6");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 1, 1);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [24, 4], [24, 14]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("lyrical-frontend/templates/components/search-result", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 10
          }
        },
        "moduleName": "lyrical-frontend/templates/components/search-result.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("a");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "entry panel panel-default");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "panel-body");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        return morphs;
      },
      statements: [["element", "action", ["getLyrics", ["get", "result.track_id", ["loc", [null, [1, 24], [1, 39]]]]], [], ["loc", [null, [1, 3], [1, 41]]]], ["content", "yield", ["loc", [null, [3, 0], [3, 9]]]], ["content", "lyrics", ["loc", [null, [5, 0], [5, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("lyrical-frontend/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 0
          }
        },
        "moduleName": "lyrical-frontend/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("lyrical-frontend/templates/search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "lyrical-frontend/templates/search.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("lyrical-frontend/templates/userfeed", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 2
              },
              "end": {
                "line": 12,
                "column": 2
              }
            },
            "moduleName": "lyrical-frontend/templates/userfeed.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "style", "opacity:0.5;");
            var el3 = dom.createTextNode("by ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" in ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [2]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(element0, 0, 0);
            morphs[1] = dom.createMorphAt(element1, 1, 1);
            morphs[2] = dom.createMorphAt(element1, 3, 3);
            return morphs;
          },
          statements: [["content", "result.name", ["loc", [null, [11, 7], [11, 22]]]], ["content", "result.artist", ["loc", [null, [11, 53], [11, 70]]]], ["content", "result.album", ["loc", [null, [11, 74], [11, 90]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "lyrical-frontend/templates/userfeed.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "search-result", [], ["result", ["subexpr", "@mut", [["get", "result", ["loc", [null, [10, 26], [10, 32]]]]], [], []]], 0, null, ["loc", [null, [10, 2], [12, 20]]]]],
        locals: ["result"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 9
          }
        },
        "moduleName": "lyrical-frontend/templates/userfeed.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "input-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "input-group-addon");
        dom.setAttribute(el2, "id", "basic-addon1");
        var el3 = dom.createTextNode("Search for a song");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 3, 3);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "search", ["loc", [null, [3, 16], [3, 22]]]]], [], []]], ["loc", [null, [3, 2], [3, 24]]]], ["block", "each", [["get", "model", ["loc", [null, [9, 18], [9, 23]]]]], [], 0, null, ["loc", [null, [9, 0], [13, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('lyrical-frontend/config/environment', ['ember'], function(Ember) {
  var prefix = 'lyrical-frontend';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("lyrical-frontend/app")["default"].create({"name":"lyrical-frontend","version":"0.0.0+fde41a35"});
}

/* jshint ignore:end */
//# sourceMappingURL=lyrical-frontend.map