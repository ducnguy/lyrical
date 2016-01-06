define('lyrical-frontend/tests/adapters/search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/search.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/search.js should pass jshint.\nadapters/search.js: line 17, col 7, Bad line breaking before \'+\'.\nadapters/search.js: line 22, col 12, \'$\' is not defined.\nadapters/search.js: line 19, col 40, \'snapshot\' is defined but never used.\n\n3 errors');
  });
});
define('lyrical-frontend/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/components/search-result.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/search-result.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/search-result.js should pass jshint.\ncomponents/search-result.js: line 7, col 7, \'$\' is not defined.\n\n1 error');
  });
});
define('lyrical-frontend/tests/controllers/userfeed.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/userfeed.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/userfeed.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('lyrical-frontend/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'lyrical-frontend/tests/helpers/start-app', 'lyrical-frontend/tests/helpers/destroy-app'], function (exports, _qunit, _lyricalFrontendTestsHelpersStartApp, _lyricalFrontendTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _lyricalFrontendTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _lyricalFrontendTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('lyrical-frontend/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/helpers/resolver', ['exports', 'ember/resolver', 'lyrical-frontend/config/environment'], function (exports, _emberResolver, _lyricalFrontendConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _lyricalFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _lyricalFrontendConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('lyrical-frontend/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/helpers/start-app', ['exports', 'ember', 'lyrical-frontend/app', 'lyrical-frontend/config/environment'], function (exports, _ember, _lyricalFrontendApp, _lyricalFrontendConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _lyricalFrontendConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _lyricalFrontendApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('lyrical-frontend/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/integration/components/search-result-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('search-result', 'Integration | Component | search result', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 17
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'search-result', ['loc', [null, [1, 0], [1, 17]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.11',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.11',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'search-result', [], [], 0, null, ['loc', [null, [2, 4], [4, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('lyrical-frontend/tests/integration/components/search-result-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/search-result-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/search-result-test.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/models/search-result.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/search-result.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/search-result.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/models/search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/search.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/search.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/old/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - old');
  QUnit.test('old/app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'old/app.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/old/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - old');
  QUnit.test('old/router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'old/router.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/routes/search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/search.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/search.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/routes/userfeed.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/userfeed.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/userfeed.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/serializers/search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/search.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/search.js should pass jshint.\nserializers/search.js: line 19, col 9, Missing semicolon.\nserializers/search.js: line 20, col 7, Missing semicolon.\nserializers/search.js: line 23, col 7, Missing semicolon.\n\n3 errors');
  });
});
define('lyrical-frontend/tests/test-helper', ['exports', 'lyrical-frontend/tests/helpers/resolver', 'ember-qunit'], function (exports, _lyricalFrontendTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_lyricalFrontendTestsHelpersResolver['default']);
});
define('lyrical-frontend/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/unit/adapters/search-lyrics-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:search-lyrics', 'Unit | Adapter | search lyrics', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('lyrical-frontend/tests/unit/adapters/search-lyrics-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/search-lyrics-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/search-lyrics-test.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/unit/adapters/search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:search', 'Unit | Adapter | search', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('lyrical-frontend/tests/unit/adapters/search-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/search-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/search-test.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/unit/controllers/userfeed-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:userfeed', 'Unit | Controller | userfeed', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('lyrical-frontend/tests/unit/controllers/userfeed-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/userfeed-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/userfeed-test.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/unit/models/search-result-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('search-result', 'Unit | Model | search result', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('lyrical-frontend/tests/unit/models/search-result-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/search-result-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/search-result-test.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/unit/routes/search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:search', 'Unit | Route | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('lyrical-frontend/tests/unit/routes/search-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/search-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/search-test.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/unit/routes/userfeed-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:userfeed', 'Unit | Route | userfeed', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('lyrical-frontend/tests/unit/routes/userfeed-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/userfeed-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/userfeed-test.js should pass jshint.');
  });
});
define('lyrical-frontend/tests/unit/serializers/search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('search', 'Unit | Serializer | search', {
    // Specify the other units that are required for this test.
    needs: ['serializer:search']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('lyrical-frontend/tests/unit/serializers/search-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers');
  QUnit.test('unit/serializers/search-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/search-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('lyrical-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map