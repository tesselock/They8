// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"game/json/ActionCards.js":[function(require,module,exports) {
var cards = [{
  "id": 1,
  "name": "THE JOURNEY OF",
  "img": "the-journey.jpg",
  "desc": "it began with a single step...",
  "target": "NotActive",
  "location": "Deck",
  "acttext": "remove one Glory token from any one other player's God tile and return it to the common supply"
}, {
  "id": 2,
  "name": "THE SEDUCTION OF",
  "img": "the-seduction.jpg",
  "desc": "under the flowering trees...",
  "target": "NotActive",
  "location": "Deck",
  "acttext": "move one Infamy token from any one other player's God tile to a different player's God tile"
}, {
  "id": 3,
  "name": "THE JEALOUSY OF",
  "img": "the-jealousy.jpg",
  "desc": "it will all end in tears...",
  "target": "NotActive",
  "location": "Deck",
  "acttext": "add two Infamy tokens to any one other player's God tile"
}, {
  "id": 4,
  "name": "THE DIPLOMACY OF",
  "img": "the-diplomacy.jpg",
  "desc": "the voice of reason spoke...",
  "target": "NotActive",
  "location": "Deck",
  "acttext": "move one Glory token from any one other player's God tile to a different player's God tile"
}, {
  "id": 5,
  "name": "THE VALOUR OF",
  "img": "the-valour.jpg",
  "desc": "stepping upon the plain...",
  "target": "NotActive",
  "location": "Deck",
  "acttext": "add two Glory tokens to any one other player's God tile"
}, {
  "id": 6,
  "name": "THE DISGUISE OF",
  "img": "the-disguise.jpg",
  "desc": "the trickster changed shape...",
  "target": "NotActive",
  "location": "Deck",
  "acttext": "swap one Glory and one Infamy token between two different players' God tiles"
}, {
  "id": 7,
  "name": "THE TREACHERY OF",
  "img": "the-treachery.jpg",
  "desc": "desiring above all else...",
  "target": "NotActive",
  "location": "Deck",
  "acttext": "add one Glory token and one Infamy token to any one other player's God tile"
}, {
  "id": 8,
  "name": "THE KNOWLEDGE OF",
  "img": "the-knowledge.jpg",
  "desc": "insight was gained when...",
  "target": "NotActive",
  "location": "Deck",
  "acttext": "add one Glory token to any one other player's God tile"
}, {
  "id": 9,
  "name": "THE BIRTH OF",
  "img": "the-birth.jpg",
  "desc": "once long ago...",
  "target": "NotActive",
  "location": "Deck",
  "acttext": "remove one Infamy token from any one other player's God tile and return it to the common supply"
}, {
  "id": 10,
  "name": "THE CONFLICT OF",
  "img": "the-conflict.jpg",
  "desc": "brash were the words which led...",
  "target": "NotActive",
  "location": "Deck",
  "acttext": "add one Infamy token to any one other player's God tile"
}, {
  "id": 11,
  "name": "THE DECISION OF",
  "img": "the-decision.jpg",
  "desc": "guided by action...",
  "target": "AnyPlayer",
  "location": "Deck",
  "acttext": "move both one Glory and one Infamy token from one of your God tiles to any two other different players' God tiles"
}, {
  "id": 12,
  "name": "THE BARGAIN OF",
  "img": "the-bargain.jpg",
  "desc": "an agreement was struck...",
  "target": "ActiveOnly",
  "location": "Deck",
  "acttext": "regain the power of one of your Gods and add two Infamy tokens to that God tile"
}, {
  "id": 13,
  "name": "THE COMPELLING OF",
  "img": "the-compelling.jpg",
  "desc": "and so by their persuasion...",
  "target": "NotActive",
  "location": "Deck",
  "acttext": "remove one Glory and one Infamy token from any one other player's God tile and return them to the common supply"
}, {
  "id": 14,
  "name": "THE GIFTING OF",
  "img": "the-gifting.jpg",
  "desc": "given in promise...",
  "target": "AnyPlayer",
  "location": "Deck",
  "acttext": "add a token from whichever type has the least amount remaining (Glory or Infamy) to any one God tile"
}, {
  "id": 15,
  "name": "THE TRICKERY OF",
  "img": "the-trickery.jpg",
  "desc": "a price is paid...",
  "target": "NotActive",
  "location": "Deck",
  "acttext": "add two Glory tokens and one Infamy token to any one other player's God tile"
}, {
  "id": 16,
  "name": "THE WEAKNESS OF",
  "img": "the-weakness.jpg",
  "desc": "even in weakness there is...",
  "target": "NotActive",
  "location": "Deck",
  "acttext": "add two Infamy tokens and one Glory token to any one other player's God tile"
}];
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49771" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","game/json/ActionCards.js"], null)
//# sourceMappingURL=/ActionCards.893ab34b.js.map