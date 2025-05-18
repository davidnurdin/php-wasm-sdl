
var createPhpModule = (() => {
  var _scriptDir = import.meta.url;
  
  return (
function(createPhpModule = {})  {

// include: shell.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof createPhpModule != 'undefined' ? createPhpModule : {};

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

// --pre-jses are emitted after the Module integration code, so that they can

  var Module = typeof createPhpModule !== 'undefined' ? createPhpModule : {};

  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }

  Module.expectedDataFileDownloads++;
  (function() {
    // Do not attempt to redownload the virtual filesystem data when in a pthread or a Wasm Worker context.
    if (Module['ENVIRONMENT_IS_PTHREAD'] || Module['$ww']) return;
    var loadPackage = function(metadata) {

      var PACKAGE_PATH = '';
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
      } else if (typeof process === 'undefined' && typeof location !== 'undefined') {
        // web worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
      }
      var PACKAGE_NAME = 'php-web.data';
      var REMOTE_PACKAGE_BASE = 'php-web.data';
      if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
        Module['locateFile'] = Module['locateFilePackage'];
        err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
      }
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];

      function fetchRemotePackage(packageName, packageSize, callback, errback) {
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', packageName, true);
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = function(event) {
          var url = packageName;
          var size = packageSize;
          if (event.total) size = event.total;
          if (event.loaded) {
            if (!xhr.addedTotal) {
              xhr.addedTotal = true;
              if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
              Module.dataFileDownloads[url] = {
                loaded: event.loaded,
                total: size
              };
            } else {
              Module.dataFileDownloads[url].loaded = event.loaded;
            }
            var total = 0;
            var loaded = 0;
            var num = 0;
            for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
              total += data.total;
              loaded += data.loaded;
              num++;
            }
            total = Math.ceil(total * Module.expectedDataFileDownloads/num);
            if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
          } else if (!Module.dataFileDownloads) {
            if (Module['setStatus']) Module['setStatus']('Downloading data...');
          }
        };
        xhr.onerror = function(event) {
          throw new Error("NetworkError for: " + packageName);
        }
        xhr.onload = function(event) {
          if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            var packageData = xhr.response;
            callback(packageData);
          } else {
            throw new Error(xhr.statusText + " : " + xhr.responseURL);
          }
        };
        xhr.send(null);
      };

      function handleError(error) {
        console.error('package error:', error);
      };

    function runWithFS() {

      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
Module['FS_createPath']("/", "src", true, true);
Module['FS_createPath']("/src", "src", true, true);
Module['FS_createPath']("/src/src", "assets", true, true);
Module['FS_createPath']("/src/src/assets", "fonts", true, true);
Module['FS_createPath']("/src/src/assets", "levels", true, true);
Module['FS_createPath']("/src/src/assets", "mixer", true, true);
Module['FS_createPath']("/src/src/assets/mixer", "music", true, true);
Module['FS_createPath']("/src/src/assets/mixer", "sound", true, true);
Module['FS_createPath']("/src/src/assets", "tileset", true, true);
Module['FS_createPath']("/src/src/assets/tileset", "levels", true, true);
Module['FS_createPath']("/src/src/assets/tileset", "sprites", true, true);
Module['FS_createPath']("/src/src", "config", true, true);
Module['FS_createPath']("/src/src", "src", true, true);
Module['FS_createPath']("/src/src/src", "AssetManager", true, true);
Module['FS_createPath']("/src/src/src", "Command", true, true);
Module['FS_createPath']("/src/src/src", "Entities", true, true);
Module['FS_createPath']("/src/src/src", "InputManager", true, true);
Module['FS_createPath']("/src/src/src", "Level", true, true);
Module['FS_createPath']("/src/src/src", "Loop", true, true);
Module['FS_createPath']("/src/src/src", "Renderer", true, true);
Module['FS_createPath']("/src/src/src", "Scene", true, true);
Module['FS_createPath']("/src/src/src", "Service", true, true);
Module['FS_createPath']("/src/src/src", "SoundManager", true, true);
Module['FS_createPath']("/src/src/src", "Utils", true, true);
Module['FS_createPath']("/src/src", "vendor", true, true);
Module['FS_createPath']("/src/src/vendor", "bin", true, true);
Module['FS_createPath']("/src/src/vendor", "composer", true, true);
Module['FS_createPath']("/src/src/vendor", "evenement", true, true);
Module['FS_createPath']("/src/src/vendor/evenement", "evenement", true, true);
Module['FS_createPath']("/src/src/vendor/evenement/evenement", "src", true, true);
Module['FS_createPath']("/src/src/vendor", "psr", true, true);
Module['FS_createPath']("/src/src/vendor/psr", "container", true, true);
Module['FS_createPath']("/src/src/vendor/psr/container", "src", true, true);
Module['FS_createPath']("/src/src/vendor", "react", true, true);
Module['FS_createPath']("/src/src/vendor/react", "event-loop", true, true);
Module['FS_createPath']("/src/src/vendor/react/event-loop", "src", true, true);
Module['FS_createPath']("/src/src/vendor/react/event-loop/src", "Tick", true, true);
Module['FS_createPath']("/src/src/vendor/react/event-loop/src", "Timer", true, true);
Module['FS_createPath']("/src/src/vendor", "symfony", true, true);
Module['FS_createPath']("/src/src/vendor/symfony", "config", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/config", "Builder", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/config", "Definition", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/config/Definition", "Builder", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/config/Definition", "Configurator", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/config/Definition", "Dumper", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/config/Definition", "Exception", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/config/Definition", "Loader", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/config", "Exception", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/config", "Loader", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/config", "Resource", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/config", "Util", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/config/Util", "Exception", true, true);
Module['FS_createPath']("/src/src/vendor/symfony", "console", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Attribute", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "CI", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Command", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "CommandLoader", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Completion", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console/Completion", "Output", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "DataCollector", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Debug", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "DependencyInjection", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Descriptor", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Event", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "EventListener", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Exception", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Formatter", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Helper", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Input", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Logger", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Messenger", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Output", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Question", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Resources", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console/Resources", "bin", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "SignalRegistry", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Style", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console", "Tester", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/console/Tester", "Constraint", true, true);
Module['FS_createPath']("/src/src/vendor/symfony", "dependency-injection", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection", "Argument", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection", "Attribute", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection", "Compiler", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection", "Config", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection", "Dumper", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection", "Exception", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection", "Extension", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection", "LazyProxy", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection/LazyProxy", "Instantiator", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection/LazyProxy", "PhpDumper", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection", "Loader", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection/Loader", "Configurator", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection/Loader/Configurator", "Traits", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection/Loader", "schema", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection/Loader/schema", "dic", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection/Loader/schema/dic", "services", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/dependency-injection", "ParameterBag", true, true);
Module['FS_createPath']("/src/src/vendor/symfony", "deprecation-contracts", true, true);
Module['FS_createPath']("/src/src/vendor/symfony", "filesystem", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/filesystem", "Exception", true, true);
Module['FS_createPath']("/src/src/vendor/symfony", "polyfill-ctype", true, true);
Module['FS_createPath']("/src/src/vendor/symfony", "polyfill-intl-grapheme", true, true);
Module['FS_createPath']("/src/src/vendor/symfony", "polyfill-intl-normalizer", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/polyfill-intl-normalizer", "Resources", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/polyfill-intl-normalizer/Resources", "stubs", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/polyfill-intl-normalizer/Resources", "unidata", true, true);
Module['FS_createPath']("/src/src/vendor/symfony", "polyfill-mbstring", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/polyfill-mbstring", "Resources", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/polyfill-mbstring/Resources", "unidata", true, true);
Module['FS_createPath']("/src/src/vendor/symfony", "service-contracts", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/service-contracts", "Attribute", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/service-contracts", "Test", true, true);
Module['FS_createPath']("/src/src/vendor/symfony", "string", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/string", "Exception", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/string", "Inflector", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/string", "Resources", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/string/Resources", "data", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/string", "Slugger", true, true);
Module['FS_createPath']("/src/src/vendor/symfony", "var-dumper", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper", "Caster", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper", "Cloner", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper/Cloner", "Internal", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper", "Command", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper/Command", "Descriptor", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper", "Dumper", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper/Dumper", "ContextProvider", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper", "Exception", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper", "Resources", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper/Resources", "bin", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper/Resources", "css", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper/Resources", "functions", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper/Resources", "js", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper", "Server", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-dumper", "Test", true, true);
Module['FS_createPath']("/src/src/vendor/symfony", "var-exporter", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-exporter", "Exception", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/var-exporter", "Internal", true, true);
Module['FS_createPath']("/src/src/vendor/symfony", "yaml", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/yaml", "Command", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/yaml", "Exception", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/yaml", "Resources", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/yaml/Resources", "bin", true, true);
Module['FS_createPath']("/src/src/vendor/symfony/yaml", "Tag", true, true);
Module['FS_createPath']("/src", "vendor", true, true);
Module['FS_createPath']("/src/vendor", "composer", true, true);

        var PACKAGE_UUID = metadata['package_uuid'];
        var indexedDB;
        if (typeof window === 'object') {
          indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        } else if (typeof location !== 'undefined') {
          // worker
          indexedDB = self.indexedDB;
        } else {
          throw 'using IndexedDB to cache data can only be done on a web page or in a web worker';
        }
        var IDB_RO = "readonly";
        var IDB_RW = "readwrite";
        var DB_NAME = "EM_PRELOAD_CACHE";
        var DB_VERSION = 1;
        var METADATA_STORE_NAME = 'METADATA';
        var PACKAGE_STORE_NAME = 'PACKAGES';
        function openDatabase(callback, errback) {
          try {
            var openRequest = indexedDB.open(DB_NAME, DB_VERSION);
          } catch (e) {
            return errback(e);
          }
          openRequest.onupgradeneeded = function(event) {
            var db = /** @type {IDBDatabase} */ (event.target.result);

            if (db.objectStoreNames.contains(PACKAGE_STORE_NAME)) {
              db.deleteObjectStore(PACKAGE_STORE_NAME);
            }
            var packages = db.createObjectStore(PACKAGE_STORE_NAME);

            if (db.objectStoreNames.contains(METADATA_STORE_NAME)) {
              db.deleteObjectStore(METADATA_STORE_NAME);
            }
            var metadata = db.createObjectStore(METADATA_STORE_NAME);
          };
          openRequest.onsuccess = function(event) {
            var db = /** @type {IDBDatabase} */ (event.target.result);
            callback(db);
          };
          openRequest.onerror = function(error) {
            errback(error);
          };
        };

        // This is needed as chromium has a limit on per-entry files in IndexedDB
        // https://cs.chromium.org/chromium/src/content/renderer/indexed_db/webidbdatabase_impl.cc?type=cs&sq=package:chromium&g=0&l=177
        // https://cs.chromium.org/chromium/src/out/Debug/gen/third_party/blink/public/mojom/indexeddb/indexeddb.mojom.h?type=cs&sq=package:chromium&g=0&l=60
        // We set the chunk size to 64MB to stay well-below the limit
        var CHUNK_SIZE = 64 * 1024 * 1024;

        function cacheRemotePackage(
          db,
          packageName,
          packageData,
          packageMeta,
          callback,
          errback
        ) {
          var transactionPackages = db.transaction([PACKAGE_STORE_NAME], IDB_RW);
          var packages = transactionPackages.objectStore(PACKAGE_STORE_NAME);
          var chunkSliceStart = 0;
          var nextChunkSliceStart = 0;
          var chunkCount = Math.ceil(packageData.byteLength / CHUNK_SIZE);
          var finishedChunks = 0;
          for (var chunkId = 0; chunkId < chunkCount; chunkId++) {
            nextChunkSliceStart += CHUNK_SIZE;
            var putPackageRequest = packages.put(
              packageData.slice(chunkSliceStart, nextChunkSliceStart),
              'package/' + packageName + '/' + chunkId
            );
            chunkSliceStart = nextChunkSliceStart;
            putPackageRequest.onsuccess = function(event) {
              finishedChunks++;
              if (finishedChunks == chunkCount) {
                var transaction_metadata = db.transaction(
                  [METADATA_STORE_NAME],
                  IDB_RW
                );
                var metadata = transaction_metadata.objectStore(METADATA_STORE_NAME);
                var putMetadataRequest = metadata.put(
                  {
                    'uuid': packageMeta.uuid,
                    'chunkCount': chunkCount
                  },
                  'metadata/' + packageName
                );
                putMetadataRequest.onsuccess = function(event) {
                  callback(packageData);
                };
                putMetadataRequest.onerror = function(error) {
                  errback(error);
                };
              }
            };
            putPackageRequest.onerror = function(error) {
              errback(error);
            };
          }
        }

        /* Check if there's a cached package, and if so whether it's the latest available */
        function checkCachedPackage(db, packageName, callback, errback) {
          var transaction = db.transaction([METADATA_STORE_NAME], IDB_RO);
          var metadata = transaction.objectStore(METADATA_STORE_NAME);
          var getRequest = metadata.get('metadata/' + packageName);
          getRequest.onsuccess = function(event) {
            var result = event.target.result;
            if (!result) {
              return callback(false, null);
            } else {
              return callback(PACKAGE_UUID === result['uuid'], result);
            }
          };
          getRequest.onerror = function(error) {
            errback(error);
          };
        }

        function fetchCachedPackage(db, packageName, metadata, callback, errback) {
          var transaction = db.transaction([PACKAGE_STORE_NAME], IDB_RO);
          var packages = transaction.objectStore(PACKAGE_STORE_NAME);

          var chunksDone = 0;
          var totalSize = 0;
          var chunkCount = metadata['chunkCount'];
          var chunks = new Array(chunkCount);

          for (var chunkId = 0; chunkId < chunkCount; chunkId++) {
            var getRequest = packages.get('package/' + packageName + '/' + chunkId);
            getRequest.onsuccess = function(event) {
              // If there's only 1 chunk, there's nothing to concatenate it with so we can just return it now
              if (chunkCount == 1) {
                callback(event.target.result);
              } else {
                chunksDone++;
                totalSize += event.target.result.byteLength;
                chunks.push(event.target.result);
                if (chunksDone == chunkCount) {
                  if (chunksDone == 1) {
                    callback(event.target.result);
                  } else {
                    var tempTyped = new Uint8Array(totalSize);
                    var byteOffset = 0;
                    for (var chunkId in chunks) {
                      var buffer = chunks[chunkId];
                      tempTyped.set(new Uint8Array(buffer), byteOffset);
                      byteOffset += buffer.byteLength;
                      buffer = undefined;
                    }
                    chunks = undefined;
                    callback(tempTyped.buffer);
                    tempTyped = undefined;
                  }
                }
              }
            };
            getRequest.onerror = function(error) {
              errback(error);
            };
          }
        }

      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer.constructor.name === ArrayBuffer.name, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        var compressedData = {"data":null,"cachedOffset":6807141,"cachedIndexes":[-1,-1],"cachedChunks":[null,null],"offsets":[0,1399,2568,2697,2800,3204,4724,6095,7761,9438,11330,12366,13703,14812,16451,17007,18567,20152,20693,21305,21858,22842,23758,24723,25951,26612,27927,28793,30127,31091,31738,32022,32829,33060,33875,35243,36160,37026,37766,38653,39919,41407,42551,43688,44647,45781,47075,48101,49306,50432,51625,52721,53057,53779,54410,54790,55708,56532,57520,58260,59047,59590,60137,60939,61818,62681,63630,64714,65436,66382,67183,68192,68967,69839,70752,71629,72456,73327,74284,74524,75586,75824,76124,77201,78805,79620,80227,81617,82423,82595,83271,83468,83677,83885,84108,84314,84509,84724,84922,85233,85430,85645,85849,86078,86329,86559,86835,87109,87520,87864,88118,88392,88638,88844,89036,89250,89452,89836,90148,90425,90679,90892,91104,91295,91511,91709,92160,92355,92565,92768,92967,93225,93532,93796,94073,94548,94897,95122,95327,95544,95758,95951,96167,96369,96817,97012,97268,97529,97854,98143,98417,98632,98833,99279,99475,99666,99874,100085,100295,100489,100769,101051,101423,101628,101864,102068,102275,102489,102683,102924,103244,103675,103876,104120,104403,104710,105001,105291,105482,105688,106115,106409,106646,106851,107057,107275,107473,107673,107875,108309,108511,108737,108941,109200,109487,109689,109916,110122,110555,110758,110954,111162,111410,111721,112067,112293,112496,112930,113131,113354,113560,113781,114078,114383,114606,114810,115237,115438,115763,116088,116386,116605,116805,117025,117231,117661,117862,118147,118458,118748,118965,119169,119390,119596,120020,120220,120434,120647,120995,121214,121414,121629,121836,122264,122465,122682,122934,123200,123482,123809,124168,124374,124793,124991,125201,125416,125721,125978,126257,126468,126676,127097,127300,127509,127721,128013,128284,128554,128765,128971,129383,129585,129804,130092,130440,130637,130837,131044,131255,131669,131873,132074,132347,132776,132967,133166,133371,133581,133886,134088,134293,134506,134710,134937,135138,135344,135554,135960,136166,136466,136774,136983,137186,137385,137584,137800,138109,138314,138512,138724,139027,139390,139674,139876,140090,140490,140696,140891,141105,141424,141778,142062,142257,142472,142851,143120,143364,143635,143872,144091,144299,144493,144708,145102,145309,145538,145758,145962,146212,146477,146777,147037,147440,147648,147845,148064,148280,148515,148779,149060,149336,149693,149975,150308,150552,150791,151004,151211,151408,151627,152021,152233,152428,152637,153003,153217,153425,153617,153835,154263,154541,154776,154973,155177,155384,155592,155788,156003,156388,156602,156831,157108,157386,157735,158016,158208,158418,158801,159012,159217,159452,159656,159859,160114,160361,160653,160952,161167,161368,161597,161805,162007,162215,162475,162733,163114,163326,163555,163865,164180,164513,164798,164999,165231,165645,165936,166169,166394,166603,166797,167005,167207,167434,167810,168022,168260,168575,168981,169182,169394,169597,169827,170196,170410,170637,170945,171321,171517,171728,171931,172154,172460,172676,172876,173093,173462,173662,173876,174078,174275,174680,174895,175255,175475,175684,175916,176216,176418,176637,176947,177157,177425,177777,178056,178259,178475,178675,178892,179257,179464,179732,180091,180355,180551,180766,180970,181186,181732,182065,182327,182536,182748,182945,183157,183360,183571,183930,184123,184453,184752,184962,185158,185366,185570,185784,186146,186379,186580,186785,187091,187325,187544,187784,188042,188397,188627,188832,189034,189338,189572,189786,190030,190291,190419,190444,190469,190494,190519,190544,190569,190594,190619,190644,190669,190694,190719,190744,190769,190794,190819,191075,191169,191543,193591,195639,197693,199750,201804,203860,205908,207956,210004,212052,214100,216148,218198,220254,222302,224355,226403,228460,230515,232563,234611,236665,238713,240761,242813,244863,246894,248942,250992,253049,255097,257145,259202,261247,263295,265350,267401,269449,271506,273554,275598,277646,279685,281733,283789,285843,287891,289939,291993,294046,296094,298148,300198,302246,304294,306342,308381,310428,312476,314524,316572,318621,320669,322712,324753,326801,328849,330897,332952,335000,337052,339101,341149,343197,345245,347293,349341,351389,353446,355494,357536,359584,361632,363680,365728,367776,369824,371858,373906,375954,378000,380048,382091,384146,386186,388234,390282,392330,394378,396435,398483,400510,402558,404610,406658,408693,410747,412795,414827,416875,418923,420971,423025,425035,427083,429131,431179,433222,435261,437309,439336,441384,443432,445489,447535,449583,451631,453660,455708,457756,459804,461854,463893,465941,467989,470037,472086,474134,476184,478215,480263,482314,484362,486418,488466,490514,492562,494610,496658,498706,500763,502811,504861,506917,508965,511020,513068,515116,517164,519212,521260,523308,525363,527411,529459,531502,533550,535598,537655,539703,541751,543808,545864,547912,549962,552010,554040,556091,558140,560184,562232,564281,566329,568386,570434,572484,574541,576589,578638,580686,582732,584780,586823,588867,590915,592964,595020,597061,599118,601170,603218,605272,607326,609374,611415,613463,615518,617573,619621,621669,623721,625765,627813,629867,631915,633964,635999,638047,640088,642136,644184,646236,648289,650342,652394,654429,656486,658538,660588,662636,664678,666726,668776,670822,672875,674909,676957,679011,681068,683114,685150,687198,689251,691308,693363,695411,697459,699511,701559,703590,705638,707693,709741,711787,713830,715878,717932,719982,722037,724090,726135,728185,730240,732277,734325,736371,738419,740474,742522,744579,746627,748675,750726,752783,754826,756881,758929,760977,763025,765073,767121,769169,771201,773249,775301,777349,779402,781450,783507,785555,787603,789647,791702,793741,795791,797838,799895,801943,803991,806039,808085,810133,812181,814228,816285,818342,820399,822451,824499,826547,828595,830643,832691,834739,836787,838835,840883,842939,844996,847044,849092,851140,853188,855236,857284,859332,861380,863428,865476,867524,869572,871620,873668,875725,877773,879821,881869,883917,885965,888013,890061,892109,894157,896205,898253,900301,902349,904397,906454,908502,910555,912603,914651,916705,918761,920809,922857,924905,926953,929001,931049,933097,935145,937202,939250,941298,943346,945394,947442,949490,951538,953586,955634,957682,959730,961778,963826,965874,967931,969979,972027,974075,976123,978171,980219,982267,984315,986372,988420,990468,992516,994564,996612,998669,1000717,1002765,1004813,1006861,1008909,1010957,1013005,1015053,1017101,1019149,1021197,1023245,1025293,1027341,1029397,1031445,1033493,1035541,1037589,1039637,1041685,1043733,1045781,1047829,1049877,1051925,1053973,1056021,1058069,1060126,1062174,1064222,1066270,1068318,1070366,1072418,1074473,1076521,1078569,1080617,1082665,1084713,1086761,1088809,1090866,1092914,1094962,1097010,1099058,1101106,1103154,1105202,1107250,1109298,1111346,1113394,1115442,1117490,1119538,1121595,1123643,1125691,1127739,1129787,1131835,1133883,1135931,1137979,1140036,1142084,1144132,1146180,1148228,1150276,1152333,1154381,1156429,1158477,1160525,1162573,1164621,1166669,1168717,1170765,1172813,1174861,1176909,1178957,1181005,1183059,1185107,1187162,1189210,1191258,1193306,1195354,1197402,1199450,1201498,1203546,1205594,1207642,1209690,1211738,1213795,1215843,1217891,1219939,1221987,1224035,1226083,1228131,1230179,1232227,1234275,1236323,1238371,1240419,1242467,1244515,1246563,1248611,1250659,1252707,1254755,1256803,1258851,1260899,1262947,1264995,1267043,1269091,1271139,1273187,1275244,1277292,1279340,1281388,1283436,1285484,1287532,1289580,1291628,1293676,1295724,1297761,1299814,1301862,1303910,1305967,1308015,1310063,1312111,1314159,1316207,1318255,1320303,1322351,1324399,1326447,1328495,1330543,1332591,1334639,1336689,1338737,1340785,1342833,1344881,1346929,1348977,1351025,1353073,1355121,1357169,1359217,1361265,1363313,1365361,1367418,1369466,1371514,1373562,1375610,1377658,1379706,1381754,1383808,1385856,1387904,1389961,1392009,1394057,1396105,1398153,1400201,1402249,1404297,1406345,1408393,1410441,1412489,1414537,1416585,1418633,1420681,1422729,1424777,1426825,1428882,1430930,1432978,1435026,1437074,1439122,1441170,1443218,1445266,1447323,1449371,1451419,1453467,1455524,1457572,1459629,1461677,1463725,1465773,1467804,1469851,1471894,1473940,1475993,1478029,1480077,1482100,1484150,1486196,1488244,1490294,1492344,1494392,1496437,1498485,1500527,1502575,1504623,1506680,1508728,1510777,1512825,1514873,1516920,1518977,1521034,1523088,1525140,1527183,1529231,1531279,1533327,1535364,1537412,1539452,1541505,1543561,1545618,1547671,1549719,1551776,1553818,1555869,1557913,1559970,1562018,1564056,1566104,1568159,1570207,1572254,1574297,1576354,1578406,1580454,1582484,1584532,1586589,1588644,1590692,1592739,1594787,1596820,1598867,1600911,1602959,1605007,1607055,1609103,1611151,1613208,1615265,1617313,1619361,1621410,1623457,1625505,1627553,1629601,1631650,1633699,1635737,1637780,1639828,1641884,1643941,1645996,1648052,1650100,1652148,1654202,1656250,1658305,1660361,1662409,1664456,1666504,1668552,1670600,1672648,1674697,1676745,1678795,1680852,1682900,1684948,1686996,1689027,1691082,1693125,1695175,1697222,1699276,1701324,1703372,1705429,1707475,1709523,1711571,1713619,1715667,1717699,1719747,1721794,1723842,1725890,1727943,1729991,1732048,1734103,1736145,1738179,1740227,1742275,1744323,1746378,1748426,1750474,1752522,1754570,1756618,1758666,1760714,1762762,1764810,1766867,1768915,1770963,1773011,1775059,1777107,1779155,1781203,1783251,1785299,1787347,1789395,1791443,1793491,1795539,1797596,1799644,1801692,1803740,1805788,1807836,1809884,1811932,1813980,1816028,1818076,1820124,1822181,1824229,1826277,1828334,1830382,1832430,1834478,1836526,1838574,1840622,1842678,1844726,1846783,1848831,1850879,1852927,1854975,1857023,1859080,1861128,1863176,1865224,1867272,1869320,1871368,1873425,1875473,1877521,1879569,1881617,1883665,1885713,1887761,1889818,1891866,1893914,1895962,1898010,1900058,1902106,1904154,1906202,1908250,1910298,1912346,1914394,1916442,1918490,1920547,1922595,1924643,1926691,1928739,1930787,1932835,1934883,1936931,1938979,1941027,1943075,1945123,1947171,1949219,1951276,1953324,1955372,1957420,1959468,1961516,1963564,1965612,1967660,1969708,1971756,1973804,1975852,1977900,1979948,1982005,1984053,1986101,1988151,1990199,1992247,1994295,1996343,1998391,2000439,2002487,2004535,2006583,2008631,2010679,2012736,2014784,2016832,2018880,2020928,2022976,2025024,2027072,2029120,2031168,2033216,2035264,2037312,2039360,2041408,2043465,2045513,2047561,2049609,2051657,2053705,2055753,2057801,2059849,2061897,2063945,2065993,2068041,2070089,2072137,2074194,2076242,2078290,2080338,2082386,2084434,2086461,2088509,2090557,2092605,2094653,2096701,2098749,2100789,2102837,2104894,2106942,2108990,2111035,2113083,2115131,2117179,2119227,2121275,2123323,2125371,2127419,2129467,2131515,2133563,2135620,2137668,2139716,2141764,2143821,2145869,2147917,2149965,2152013,2154061,2156109,2158157,2160205,2162253,2164301,2166358,2168406,2170454,2172502,2174550,2176605,2178653,2180701,2182749,2184797,2186845,2188893,2190941,2192991,2195039,2197096,2199153,2201201,2203249,2205297,2207345,2209393,2211441,2213489,2215537,2217585,2219633,2221681,2223731,2225787,2227842,2229890,2231938,2233986,2236034,2238082,2240130,2242178,2244226,2246282,2248330,2250378,2252426,2254474,2256522,2258570,2260618,2262666,2264714,2266762,2268810,2270858,2272906,2274954,2277002,2279050,2281098,2283146,2285194,2287242,2289290,2291338,2293386,2295434,2297482,2299530,2301578,2303626,2305674,2307722,2309770,2311818,2313866,2315914,2317962,2320017,2322065,2324113,2326161,2328209,2330257,2332305,2334353,2336401,2338449,2340497,2342545,2344593,2346641,2348689,2350746,2352794,2354842,2356898,2358946,2360994,2363037,2365085,2367133,2369181,2371229,2373277,2375318,2377375,2379423,2381480,2383528,2385576,2387624,2389680,2391716,2393773,2395820,2397876,2399909,2401964,2404012,2406047,2408095,2410143,2412200,2414248,2416296,2418344,2420391,2422439,2424494,2426542,2428589,2430637,2432691,2434726,2436774,2438822,2440873,2442926,2444980,2447033,2449076,2451129,2453177,2455225,2457273,2459321,2461369,2463425,2465473,2467516,2469564,2471613,2473655,2475703,2477744,2479792,2481840,2483897,2485945,2487993,2490041,2492089,2494137,2496189,2498238,2500290,2502346,2504391,2506447,2508495,2510549,2512563,2514611,2516662,2518710,2520758,2522807,2524852,2526903,2528946,2530994,2533042,2535093,2537141,2539197,2541253,2543301,2545350,2547403,2549455,2551506,2553561,2555616,2557664,2559701,2561749,2563805,2565862,2567910,2569958,2572010,2574050,2576098,2578147,2580199,2582247,2584295,2586343,2588391,2590439,2592491,2594545,2596595,2598645,2600699,2602747,2604795,2606843,2608891,2610939,2612995,2615043,2617063,2619111,2621161,2623209,2625257,2627304,2629352,2631391,2633443,2635497,2637546,2639589,2641645,2643693,2645745,2647789,2649844,2651896,2653937,2655980,2658037,2660094,2662142,2664188,2666244,2668292,2670349,2672397,2674445,2676493,2678541,2680589,2682637,2684685,2686733,2688790,2690838,2692886,2694934,2696982,2699030,2701078,2703126,2705174,2707222,2709270,2711318,2713366,2715414,2717462,2719519,2721567,2723615,2725663,2727711,2729759,2731807,2733855,2735903,2737951,2739999,2742052,2744108,2746156,2748204,2750261,2752309,2754357,2756407,2758455,2760503,2762551,2764599,2766647,2768695,2770743,2772791,2774839,2776887,2778569,2778659,2778749,2778844,2778934,2779034,2779124,2779211,2779301,2779392,2779496,2779590,2779680,2779770,2779861,2779964,2780054,2780144,2780239,2780329,2780429,2780519,2780606,2780696,2780787,2780891,2780985,2781075,2781165,2781256,2781359,2781449,2781539,2781634,2781724,2781824,2781914,2782001,2782091,2782182,2782286,2782380,2782470,2782560,2782651,2782754,2782844,2782934,2783029,2783119,2783219,2783309,2783396,2783486,2783577,2783681,2783775,2783865,2783955,2784046,2784149,2784239,2784329,2784424,2784514,2784614,2784704,2784791,2784881,2784972,2785076,2785170,2785260,2785350,2785441,2785544,2785634,2785724,2785819,2785909,2786009,2786099,2786186,2786276,2786367,2786471,2786565,2786655,2786745,2786836,2786939,2787029,2787119,2787214,2787304,2787404,2787494,2787581,2787671,2787762,2787866,2787960,2788050,2788140,2788231,2788334,2788424,2788514,2788609,2788699,2788799,2788889,2788976,2789066,2789157,2789261,2789355,2789445,2789535,2789626,2789729,2789819,2789909,2790004,2790094,2790194,2790284,2790371,2790461,2790552,2790656,2790750,2790840,2790930,2791021,2791124,2791214,2791304,2791399,2791489,2791589,2791679,2791766,2791856,2791947,2792051,2792145,2792235,2792325,2792416,2792519,2792609,2792699,2792794,2792884,2792984,2793074,2793161,2793251,2793342,2793446,2793540,2793630,2793720,2793811,2793914,2794004,2794094,2794189,2794279,2794379,2794469,2794556,2794646,2794737,2794841,2794935,2795025,2795115,2795206,2795309,2795399,2795489,2795584,2795674,2795774,2795864,2795951,2796041,2796132,2796236,2796330,2796420,2796510,2796601,2796704,2796794,2796884,2796979,2797069,2797169,2797259,2797346,2797436,2797527,2797631,2797725,2797815,2797905,2797996,2798099,2798189,2798279,2798374,2798464,2798564,2798654,2798741,2798831,2798922,2799026,2799120,2799210,2799300,2799391,2799494,2799584,2799674,2799769,2799859,2799959,2800049,2800136,2800226,2800317,2800421,2800623,2802276,2803323,2805312,2807360,2809408,2811456,2813504,2815552,2817600,2819648,2821696,2823744,2825792,2827840,2829888,2831936,2833991,2836039,2838087,2840135,2842183,2844239,2846287,2848335,2850383,2852431,2854479,2856527,2858575,2860623,2862671,2864724,2866772,2868829,2870877,2872925,2874973,2877021,2879069,2881126,2883174,2885222,2887270,2889318,2891366,2893414,2895462,2897510,2899558,2901606,2903654,2905702,2907750,2909807,2911855,2913903,2915951,2917999,2920047,2922103,2924151,2926199,2928256,2930304,2932352,2934408,2936456,2938504,2940552,2942600,2944648,2946696,2948744,2950792,2952840,2954888,2956936,2958984,2961032,2963080,2965137,2967185,2969233,2971281,2973329,2975377,2977425,2979473,2981521,2983569,2985617,2987665,2989713,2991761,2993809,2995857,2997905,2999953,3002006,3004054,3006102,3008159,3010207,3012262,3014310,3016358,3018411,3020459,3022507,3024562,3026610,3028663,3030711,3032759,3034807,3036855,3038903,3040951,3042999,3045047,3047095,3049143,3051191,3053239,3055293,3057341,3059389,3061437,3063485,3065533,3067581,3069629,3071677,3073725,3075773,3077821,3079869,3081917,3083965,3086013,3088061,3090109,3092157,3094205,3096253,3098301,3100358,3102415,3104463,3106511,3108559,3110607,3112655,3114703,3116751,3118799,3120847,3122895,3124943,3126991,3129039,3131095,3133143,3135191,3137239,3139287,3141335,3143383,3145431,3147479,3149535,3151583,3153631,3155679,3157727,3159775,3161823,3163871,3165919,3167967,3170015,3172063,3174119,3176167,3178215,3180263,3182311,3184359,3186407,3188455,3190503,3192551,3194599,3196647,3198695,3200751,3202799,3204847,3206895,3208943,3210991,3213047,3215095,3217143,3219200,3221248,3223296,3225344,3227392,3229440,3231488,3233536,3235584,3237632,3239680,3241728,3243785,3245842,3247890,3249938,3251986,3254034,3256082,3258130,3260178,3262226,3264281,3266329,3268377,3270425,3272473,3274521,3276569,3278617,3280665,3282713,3284761,3286809,3288857,3290905,3292953,3295001,3297058,3299106,3301163,3303217,3305265,3307322,3309370,3311418,3313466,3315514,3317562,3319610,3321658,3323706,3325754,3327810,3329858,3331915,3333972,3336020,3338077,3340125,3342173,3344221,3346269,3348317,3350365,3352413,3354461,3356509,3358565,3360621,3362669,3364717,3366765,3368813,3370861,3372909,3374957,3377005,3379053,3381110,3383158,3385206,3387254,3389302,3391350,3393398,3395446,3397494,3399542,3401590,3403638,3405686,3407734,3409782,3411830,3413878,3415926,3417983,3420031,3422079,3424127,3426183,3428231,3430279,3432327,3434375,3436423,3438471,3440519,3442567,3444615,3446663,3448711,3450759,3452807,3454855,3456903,3458951,3460999,3463055,3465103,3467151,3469199,3471247,3473295,3475352,3477400,3479456,3481504,3483552,3485600,3487648,3489696,3491744,3493799,3495847,3497900,3499948,3501996,3504044,3506092,3508140,3510188,3512236,3514293,3516341,3518389,3520437,3522493,3524541,3526594,3528647,3530695,3532752,3534800,3536848,3538896,3540953,3543001,3545049,3547097,3549145,3551193,3553241,3555289,3557337,3559394,3561451,3563499,3565551,3567599,3569647,3571695,3573743,3575791,3577839,3579896,3581953,3584008,3586056,3588104,3590160,3592208,3594256,3596313,3598361,3600409,3602457,3604505,3606553,3608606,3610654,3612707,3614755,3616811,3618868,3620916,3622964,3625012,3627060,3629108,3631165,3633213,3635268,3637324,3639381,3641429,3643477,3645525,3647573,3649623,3651680,3653732,3655780,3657837,3659885,3661933,3663981,3666029,3668077,3670125,3672173,3674221,3676277,3678325,3680373,3682421,3684469,3686517,3688565,3690613,3692661,3694709,3696757,3698813,3700861,3702909,3704957,3707005,3709062,3711110,3713158,3715206,3717254,3719302,3721350,3723398,3725446,3727494,3729542,3731590,3733638,3735686,3737734,3739782,3741837,3743894,3745942,3747990,3750038,3752086,3754134,3756182,3758230,3760278,3762326,3764374,3766422,3768470,3770518,3772566,3774623,3776671,3778719,3780767,3782815,3784863,3786911,3788959,3791007,3793055,3795103,3797151,3799199,3801247,3803303,3805351,3807399,3809447,3811504,3813552,3815609,3817657,3819705,3821753,3823801,3825849,3827904,3829961,3832009,3834057,3836105,3838153,3840209,3842257,3844305,3846353,3848401,3850449,3852497,3854545,3856593,3858641,3860689,3862737,3864785,3866833,3868881,3870929,3872977,3875025,3877073,3879121,3881169,3883217,3885265,3887313,3889361,3891412,3893460,3895508,3897556,3899604,3901652,3903700,3905748,3907796,3909844,3911892,3913948,3915996,3918044,3920092,3922140,3924188,3926236,3928284,3930332,3932380,3934428,3936476,3938532,3940580,3942628,3944676,3946724,3948772,3950820,3952868,3954916,3956964,3959012,3961060,3963108,3965156,3967204,3969260,3971308,3973356,3975404,3977452,3979500,3981548,3983596,3985644,3987692,3989740,3991788,3993836,3995884,3997941,3999989,4002037,4004085,4006133,4008181,4010229,4012277,4014325,4016373,4018421,4020469,4022524,4024572,4026620,4028668,4030716,4032764,4034812,4036860,4038908,4040956,4043004,4045052,4047100,4049148,4051196,4053244,4055292,4057340,4059388,4061436,4063484,4065532,4067588,4069636,4071684,4073732,4075780,4077828,4079876,4081924,4083972,4086020,4088068,4090116,4092164,4094212,4096260,4098308,4100356,4102404,4104461,4106509,4108557,4110605,4112661,4114709,4116757,4118805,4120853,4122901,4124949,4126997,4129045,4131093,4133141,4135189,4137244,4139292,4141349,4143397,4145445,4147493,4149541,4151597,4153645,4155702,4157750,4159798,4161846,4163894,4165942,4167990,4170038,4172086,4174141,4176189,4178237,4180285,4182333,4184381,4186429,4188485,4190533,4192581,4194629,4196683,4198731,4200785,4202842,4204897,4206953,4209010,4211066,4213114,4215162,4217210,4219267,4221315,4223363,4225411,4227459,4229507,4231555,4233603,4235660,4237708,4239756,4241804,4243852,4245900,4247948,4249996,4252044,4254101,4256149,4258206,4260254,4262302,4264350,4266404,4268452,4270500,4272548,4274596,4276644,4278692,4280740,4282788,4284844,4286892,4288940,4290988,4293036,4295088,4297136,4299184,4301232,4303280,4305328,4307376,4309431,4311479,4313527,4315575,4317623,4319671,4321719,4323767,4325815,4327863,4329911,4331959,4334007,4336055,4338103,4340151,4342199,4344247,4346295,4348343,4350400,4352448,4354496,4356544,4358592,4360640,4362688,4364745,4366793,4368841,4370889,4372937,4374985,4377033,4379081,4381129,4383186,4385234,4387282,4389330,4391378,4393426,4395474,4397522,4399570,4401618,4403666,4405714,4407771,4409819,4411875,4413923,4415971,4418019,4420067,4422115,4424172,4426220,4428268,4430316,4432364,4434420,4436468,4438516,4440564,4442612,4444660,4446708,4448756,4450804,4452852,4454900,4456948,4458996,4461044,4463092,4465140,4467188,4469245,4471293,4473341,4475389,4477437,4479485,4481533,4483581,4485629,4487677,4489725,4491773,4493821,4495869,4497917,4499965,4502013,4504070,4506118,4508166,4510214,4512262,4514310,4516358,4518406,4520454,4522502,4524550,4526604,4528652,4530700,4532748,4534796,4536844,4538900,4540955,4543003,4545051,4547099,4549152,4551200,4553248,4555296,4557344,4559380,4561428,4561823,4563705,4565736,4567779,4569829,4571877,4573927,4575983,4578018,4580065,4582113,4584161,4586215,4588263,4590311,4592359,4594407,4596455,4598503,4600551,4602599,4604647,4606695,4608743,4610791,4612839,4614887,4616935,4618983,4621031,4623079,4625136,4627184,4629232,4631280,4633328,4635376,4637424,4639472,4641520,4643568,4645625,4647682,4649730,4651778,4653826,4655874,4657922,4659970,4662018,4664066,4666114,4668162,4670219,4672267,4674315,4676363,4678411,4680459,4682516,4684564,4686613,4688661,4690718,4692775,4694830,4696878,4698926,4700983,4703031,4705079,4707127,4709175,4711223,4713271,4715328,4717385,4719437,4721485,4723533,4725581,4727629,4729677,4731725,4733773,4735828,4737883,4739931,4741979,4744027,4746075,4748123,4750171,4752228,4754276,4756324,4758372,4760420,4762468,4764521,4766569,4768617,4770674,4772722,4774770,4776818,4778866,4780914,4782962,4785003,4787046,4789096,4791144,4793201,4795251,4797302,4799324,4801381,4803429,4805483,4807531,4809579,4811627,4813675,4815723,4817771,4819819,4821867,4823924,4825980,4828028,4830085,4832133,4834181,4836229,4838286,4840334,4842382,4844430,4846487,4848535,4850591,4852639,4854687,4856739,4858787,4860835,4862883,4864931,4866979,4869027,4871084,4873132,4875188,4877236,4879284,4881341,4883389,4885437,4887485,4889533,4891581,4893629,4895677,4897725,4899781,4901829,4903886,4905941,4907989,4910045,4912093,4914141,4916189,4918237,4920285,4922333,4924381,4926429,4928477,4930525,4932573,4934621,4936669,4938726,4940774,4942822,4944870,4946918,4948966,4951014,4953062,4955110,4957158,4959215,4961263,4963313,4965361,4967409,4969466,4971514,4973571,4975622,4977670,4979718,4981766,4983814,4985862,4987919,4989975,4992023,4994071,4996128,4998176,5000224,5002266,5004306,5006348,5008396,5010452,5012507,5014564,5016594,5018618,5020666,5022714,5024762,5026810,5028858,5030906,5032954,5035002,5037050,5039098,5041146,5043194,5045242,5047290,5049338,5051386,5053434,5055482,5057530,5059578,5061633,5063681,5065729,5067777,5069825,5071881,5073929,5075977,5078025,5080073,5082121,5084173,5086221,5088269,5090317,5092365,5094399,5096441,5098491,5100539,5102587,5104635,5106683,5108731,5110779,5112827,5114876,5116924,5118972,5121024,5123072,5125120,5127168,5129216,5131264,5133292,5135348,5137329,5139275,5141183,5143150,5145198,5147246,5149303,5151335,5153383,5155440,5157488,5159542,5161599,5163648,5165696,5167744,5169799,5171844,5173892,5175920,5177968,5180016,5182064,5184101,5186037,5187243,5188095,5189014,5189896,5190835,5191626,5192526,5193437,5194318,5195180,5196047,5196895,5197754,5198590,5199416,5200254,5201180,5202010,5202975,5203913,5204767,5205636,5206602,5207707,5208777,5209843,5210747,5211507,5212124,5213053,5214116,5215102,5215977,5217014,5217983,5219019,5219999,5221101,5222269,5223077,5224097,5225108,5226132,5227147,5228157,5229281,5230440,5231437,5232244,5233563,5234504,5235379,5236346,5237242,5238193,5239266,5240101,5241398,5242444,5243503,5244185,5244809,5245848,5247045,5247913,5249163,5250305,5251213,5252293,5252891,5253746,5254659,5255556,5256477,5257399,5258283,5259210,5260041,5260976,5261867,5262789,5263616,5264443,5265310,5266211,5267006,5267882,5268860,5269673,5270618,5271577,5272446,5273335,5274279,5275033,5275675,5276242,5277080,5278668,5279822,5280641,5281378,5282661,5284020,5285344,5286851,5288365,5289833,5290837,5291689,5293236,5294620,5296225,5297478,5298779,5300113,5301474,5302849,5304342,5305412,5306916,5308334,5309808,5311274,5312711,5314152,5315650,5316923,5318258,5319463,5320234,5321189,5322426,5323309,5324020,5325032,5326264,5326999,5327890,5329348,5330173,5330946,5332045,5333303,5334033,5334950,5335860,5337086,5338177,5339455,5340221,5340979,5342228,5343568,5344892,5346023,5347393,5348686,5350046,5351356,5352558,5353882,5355037,5356472,5357254,5358375,5359531,5360889,5362105,5363164,5364088,5365345,5366489,5367541,5368697,5369780,5370750,5371846,5372881,5373779,5374901,5375891,5376823,5377903,5378901,5379880,5381064,5382412,5383786,5385010,5386121,5387426,5388404,5389450,5390444,5391511,5392674,5393887,5394798,5395830,5396928,5397679,5398763,5399779,5401038,5402145,5402998,5404154,5404897,5405991,5406940,5407623,5408690,5409846,5411022,5411623,5412515,5413543,5414570,5415206,5416201,5417418,5418309,5419097,5419963,5421106,5422252,5423314,5424364,5425534,5426532,5427494,5428507,5429591,5430475,5431374,5432328,5433378,5434390,5435382,5436482,5437767,5438951,5439935,5440785,5441726,5442929,5444146,5445349,5446589,5447638,5448892,5449911,5450918,5451914,5453018,5454410,5455569,5456656,5457759,5458993,5460157,5461422,5462731,5464293,5465368,5466492,5467576,5468551,5469675,5470812,5471901,5473055,5474083,5475011,5476269,5477495,5478722,5479863,5480892,5481869,5482839,5484087,5485142,5486152,5487117,5488375,5489412,5490657,5491761,5492924,5494062,5495029,5496266,5497261,5498450,5499413,5500661,5501285,5502359,5503482,5504310,5505469,5506374,5507397,5508182,5509251,5510356,5511447,5512534,5513626,5514530,5515661,5516699,5517204,5518338,5519133,5520185,5521300,5522296,5523532,5524834,5526210,5527637,5528748,5530133,5531492,5532990,5533891,5535013,5535869,5536925,5537950,5539175,5540307,5541424,5542338,5543399,5544435,5545324,5546455,5547637,5548798,5549819,5550735,5551931,5553188,5554349,5555592,5556749,5557590,5558412,5559574,5560866,5561953,5563004,5563927,5564801,5565766,5566848,5567876,5569141,5570299,5571227,5572220,5573456,5574456,5575323,5576299,5577294,5578099,5579010,5580050,5581022,5581683,5582953,5584117,5585078,5586312,5587225,5588306,5589287,5590224,5591125,5592187,5593188,5594090,5595189,5596208,5597129,5598020,5598795,5599827,5600985,5602024,5602813,5603822,5604813,5605864,5606888,5607829,5608644,5609530,5610492,5611701,5612667,5613743,5614796,5615799,5616722,5617440,5618452,5619461,5620507,5621599,5622636,5623875,5624924,5626013,5627058,5628275,5629047,5630210,5631415,5632605,5633829,5634867,5635833,5637012,5638299,5639587,5640770,5641938,5642983,5644058,5645017,5645741,5646835,5647868,5648770,5649735,5650606,5651642,5652837,5653759,5654851,5655993,5656996,5658055,5659032,5660312,5661434,5662403,5663714,5664926,5665984,5667193,5668231,5669300,5670180,5671143,5672007,5673011,5673867,5674710,5675734,5676921,5678055,5679043,5680261,5681215,5682208,5683168,5684385,5685552,5686653,5687630,5688431,5689226,5690007,5690757,5691442,5692764,5693789,5694851,5695728,5696802,5697718,5698949,5699983,5700921,5702081,5703025,5703895,5704982,5705986,5707124,5708050,5708875,5709741,5710673,5711581,5712735,5713717,5714736,5715884,5716839,5717645,5718718,5720010,5721261,5722427,5723631,5724609,5725694,5726736,5727886,5729032,5730017,5731148,5732256,5733400,5734660,5735877,5736881,5737612,5738718,5739498,5740746,5741944,5743246,5744323,5745371,5746537,5747631,5748519,5749344,5750530,5751972,5753377,5754493,5755587,5756927,5758070,5759490,5760949,5761969,5763142,5763923,5764852,5765821,5766876,5767668,5768662,5769721,5770760,5771941,5773262,5774113,5775147,5776404,5777494,5778562,5779833,5781102,5782138,5783059,5784217,5785381,5786465,5787475,5788641,5789920,5790965,5791985,5793077,5794135,5795242,5796195,5797393,5798468,5799678,5800821,5802072,5803200,5804344,5805492,5806407,5807578,5808779,5810108,5811494,5812773,5814155,5815432,5816689,5817979,5819223,5820550,5821804,5823123,5824511,5825696,5826805,5827885,5828888,5829713,5830595,5831736,5832965,5834034,5835056,5836128,5837198,5838306,5838923,5840015,5841147,5842192,5843302,5844330,5845369,5846263,5847406,5848430,5849408,5850471,5851612,5852317,5853305,5854296,5855388,5856493,5857593,5858849,5860147,5861387,5862653,5863416,5864503,5865612,5866880,5867971,5869246,5870211,5871396,5872502,5873756,5874718,5875661,5876666,5877667,5878835,5880044,5881296,5882199,5883346,5884473,5885530,5886511,5887353,5888400,5889402,5890318,5891238,5892318,5893392,5894562,5895487,5896190,5896989,5898134,5899013,5900061,5901146,5902118,5903311,5904437,5905620,5906705,5907784,5908884,5909905,5911037,5911972,5913252,5914350,5915477,5916493,5917545,5918494,5919457,5920412,5921258,5922413,5923393,5924321,5925283,5926488,5927461,5928517,5929500,5930702,5931860,5932717,5933587,5934672,5935700,5936697,5937873,5938949,5939774,5940994,5941855,5943105,5944262,5945386,5946448,5947524,5948518,5949835,5950898,5951865,5952816,5953883,5954940,5955945,5956888,5958103,5959125,5960084,5961085,5962170,5963242,5964094,5964820,5965798,5966768,5967584,5968481,5969513,5970644,5971715,5972646,5973795,5974681,5975615,5976762,5977777,5978700,5979632,5980771,5981764,5982848,5983819,5984854,5985632,5986756,5987862,5989036,5990078,5991310,5992180,5993283,5994319,5995412,5996559,5997570,5998570,5999394,6000377,6001213,6001933,6002830,6003911,6004952,6005720,6006889,6008018,6008998,6009973,6010859,6011823,6012954,6013852,6014994,6016035,6017234,6018423,6019447,6020261,6021232,6022241,6023307,6024434,6025305,6026327,6027279,6028364,6029310,6030275,6031277,6032160,6033072,6034064,6035016,6036059,6037158,6038220,6039120,6039936,6041027,6042165,6043129,6044196,6045126,6046040,6047101,6048022,6048948,6049864,6051047,6052091,6053190,6054309,6055521,6056597,6057702,6058808,6060131,6061192,6062192,6063242,6064116,6064968,6065687,6066573,6067467,6068115,6068992,6069931,6071153,6071840,6072794,6073779,6074603,6075644,6076712,6077790,6078716,6079811,6080758,6081560,6082539,6083768,6084901,6085808,6086708,6087784,6088739,6089667,6090630,6091726,6092725,6093849,6094810,6095667,6096885,6098102,6099123,6100260,6101710,6102787,6103859,6105024,6106010,6107118,6108159,6109252,6110255,6111217,6112108,6113085,6114063,6115038,6116210,6117022,6117457,6118305,6119299,6120467,6121696,6122756,6123896,6125007,6126050,6127334,6128168,6129252,6130203,6131120,6132295,6133275,6134511,6135566,6136272,6137558,6138594,6139862,6140940,6141951,6142749,6143711,6144828,6145998,6147265,6148396,6149548,6150734,6151792,6152737,6153807,6155017,6155986,6156987,6158007,6159065,6159945,6160744,6161613,6162768,6163672,6164758,6165892,6167015,6167948,6168765,6169701,6170751,6171907,6173025,6174029,6175089,6176035,6177090,6178200,6179130,6180218,6181367,6182385,6183390,6184247,6185053,6185986,6186876,6187803,6188804,6189896,6190931,6192011,6192947,6193871,6194870,6196052,6196792,6197508,6198148,6198687,6199371,6199931,6200584,6201360,6202314,6203437,6204542,6205638,6206633,6207587,6208556,6209662,6210761,6211798,6212712,6213832,6214960,6216136,6217261,6218395,6219520,6220876,6222355,6223674,6224796,6225777,6226722,6227766,6228908,6230021,6231108,6231918,6233030,6234100,6235231,6236338,6237491,6238555,6239873,6241072,6242214,6243779,6245061,6246260,6247201,6248185,6249170,6250253,6251207,6252175,6253449,6254529,6255694,6256814,6257977,6258972,6259649,6260635,6262239,6262920,6263778,6265151,6266860,6267893,6268562,6269755,6270927,6271875,6272766,6273745,6275252,6276490,6277497,6278505,6279470,6280647,6281609,6282585,6283591,6284520,6285437,6286319,6287189,6288064,6289006,6289989,6290978,6291957,6292882,6293833,6294676,6295440,6296351,6297279,6298323,6299356,6300344,6301354,6302274,6303223,6304205,6305188,6306153,6307010,6307832,6308579,6309394,6310137,6310958,6311698,6312755,6313709,6314669,6315601,6316611,6317591,6318571,6319539,6320518,6321494,6322420,6323367,6324245,6325026,6325882,6326723,6327540,6328398,6329299,6330062,6331098,6332032,6332950,6333870,6334791,6335708,6336624,6337510,6338393,6339259,6339968,6340894,6341977,6343302,6344771,6345647,6346899,6348002,6349100,6350170,6351105,6351918,6352688,6353473,6354549,6355453,6356327,6357225,6358214,6359058,6359837,6360789,6361781,6362829,6363876,6364920,6365965,6366940,6367878,6368820,6369816,6370794,6371761,6372654,6373576,6374695,6375910,6377101,6378256,6379298,6380357,6381401,6382405,6383335,6384274,6385209,6386194,6387165,6388134,6389054,6390016,6390943,6391536,6392035,6392729,6393629,6394328,6394865,6395531,6396223,6397570,6398966,6400604,6401725,6402798,6404127,6405406,6406685,6407865,6408980,6409998,6410979,6412333,6413364,6413982,6415097,6415989,6417032,6418195,6419226,6420262,6421446,6423000,6424192,6425561,6426667,6427658,6428693,6429754,6430661,6431750,6432695,6433706,6434726,6435727,6436803,6438185,6439367,6440142,6441133,6442148,6443234,6444098,6445548,6446627,6447432,6448312,6449148,6450292,6451296,6452379,6453280,6454281,6455441,6456334,6457347,6458615,6459697,6461083,6462158,6463216,6464601,6465835,6466977,6468007,6468640,6469284,6469916,6470559,6471216,6472019,6472685,6473334,6474001,6474687,6475377,6476038,6476744,6477714,6478760,6479936,6480862,6481801,6483018,6483906,6484703,6485637,6486503,6487536,6488812,6490173,6491443,6492171,6493153,6494393,6495597,6496706,6497762,6498900,6499974,6501173,6502266,6503363,6504175,6504933,6505673,6506438,6507365,6508534,6509733,6510769,6511822,6512844,6513706,6514775,6515787,6516782,6517827,6518849,6519933,6521373,6522346,6523587,6524625,6525694,6526717,6527286,6527823,6528650,6529879,6530934,6532067,6533136,6534221,6535354,6536327,6537353,6538442,6539002,6540079,6540951,6541803,6543115,6544106,6545119,6546145,6547034,6547944,6548900,6550192,6551185,6552220,6553178,6554085,6554950,6556144,6557331,6558253,6559305,6560388,6561314,6562388,6563459,6563998,6564486,6565027,6565449,6566050,6566590,6567143,6567693,6568838,6569944,6570997,6572178,6573064,6574062,6575106,6576163,6577037,6578172,6579272,6580390,6581635,6582749,6583497,6584173,6584819,6586118,6587131,6588274,6589403,6590709,6592042,6593126,6594280,6595596,6596861,6597814,6598840,6599770,6600784,6601658,6602727,6603673,6604526,6605726,6606999,6607953,6609264,6610199,6611460,6612593,6613651,6614778,6615958,6617048,6618140,6619242,6620050,6621117,6622206,6623231,6624447,6625410,6626498,6627647,6628626,6629812,6631108,6632720,6634025,6635307,6636529,6637716,6638737,6640069,6641259,6642382,6643424,6644553,6645873,6646839,6647895,6649072,6650352,6651344,6652431,6653449,6654548,6655444,6656395,6657357,6658504,6659359,6660152,6660956,6661849,6662621,6663759,6664754,6665582,6666656,6667701,6668692,6669544,6670880,6672340,6673309,6674307,6675398,6676226,6677084,6678251,6679427,6680405,6681490,6682466,6683174,6684123,6685271,6686147,6687195,6688279,6689198,6690028,6691081,6692036,6693197,6694232,6695186,6696292,6697496,6698928,6700425,6701816,6702916,6704277,6705615,6706921,6708199,6709438,6710650,6711928,6713056,6714195,6715414,6716446,6717298,6718403,6719578,6720619,6721546,6722605,6723787,6724935,6725920,6726954,6728085,6729058,6730108,6731222,6732222,6732932,6733852,6734946,6735661,6736412,6737359,6738370,6739405,6740840,6742266,6743324,6744362,6745220,6746380,6747133,6748139,6749236,6750009,6750611,6751406,6752173,6753236,6754344,6755204,6756243,6757206,6758125,6759061,6759884,6760900,6762140,6763237,6764046,6764791,6766001,6767228,6768211,6769467,6770717,6772713,6774747,6776781,6778823,6780871,6782922,6784970,6787003,6788805,6789946,6790900,6791741,6792537,6793568,6794564,6795643,6796821,6797781,6798848,6799813,6800390,6801413,6802683,6803746,6804484,6805901,6806844],"sizes":[1399,1169,129,103,404,1520,1371,1666,1677,1892,1036,1337,1109,1639,556,1560,1585,541,612,553,984,916,965,1228,661,1315,866,1334,964,647,284,807,231,815,1368,917,866,740,887,1266,1488,1144,1137,959,1134,1294,1026,1205,1126,1193,1096,336,722,631,380,918,824,988,740,787,543,547,802,879,863,949,1084,722,946,801,1009,775,872,913,877,827,871,957,240,1062,238,300,1077,1604,815,607,1390,806,172,676,197,209,208,223,206,195,215,198,311,197,215,204,229,251,230,276,274,411,344,254,274,246,206,192,214,202,384,312,277,254,213,212,191,216,198,451,195,210,203,199,258,307,264,277,475,349,225,205,217,214,193,216,202,448,195,256,261,325,289,274,215,201,446,196,191,208,211,210,194,280,282,372,205,236,204,207,214,194,241,320,431,201,244,283,307,291,290,191,206,427,294,237,205,206,218,198,200,202,434,202,226,204,259,287,202,227,206,433,203,196,208,248,311,346,226,203,434,201,223,206,221,297,305,223,204,427,201,325,325,298,219,200,220,206,430,201,285,311,290,217,204,221,206,424,200,214,213,348,219,200,215,207,428,201,217,252,266,282,327,359,206,419,198,210,215,305,257,279,211,208,421,203,209,212,292,271,270,211,206,412,202,219,288,348,197,200,207,211,414,204,201,273,429,191,199,205,210,305,202,205,213,204,227,201,206,210,406,206,300,308,209,203,199,199,216,309,205,198,212,303,363,284,202,214,400,206,195,214,319,354,284,195,215,379,269,244,271,237,219,208,194,215,394,207,229,220,204,250,265,300,260,403,208,197,219,216,235,264,281,276,357,282,333,244,239,213,207,197,219,394,212,195,209,366,214,208,192,218,428,278,235,197,204,207,208,196,215,385,214,229,277,278,349,281,192,210,383,211,205,235,204,203,255,247,292,299,215,201,229,208,202,208,260,258,381,212,229,310,315,333,285,201,232,414,291,233,225,209,194,208,202,227,376,212,238,315,406,201,212,203,230,369,214,227,308,376,196,211,203,223,306,216,200,217,369,200,214,202,197,405,215,360,220,209,232,300,202,219,310,210,268,352,279,203,216,200,217,365,207,268,359,264,196,215,204,216,546,333,262,209,212,197,212,203,211,359,193,330,299,210,196,208,204,214,362,233,201,205,306,234,219,240,258,355,230,205,202,304,234,214,244,261,128,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,256,94,374,2048,2048,2054,2057,2054,2056,2048,2048,2048,2048,2048,2048,2050,2056,2048,2053,2048,2057,2055,2048,2048,2054,2048,2048,2052,2050,2031,2048,2050,2057,2048,2048,2057,2045,2048,2055,2051,2048,2057,2048,2044,2048,2039,2048,2056,2054,2048,2048,2054,2053,2048,2054,2050,2048,2048,2048,2039,2047,2048,2048,2048,2049,2048,2043,2041,2048,2048,2048,2055,2048,2052,2049,2048,2048,2048,2048,2048,2048,2057,2048,2042,2048,2048,2048,2048,2048,2048,2034,2048,2048,2046,2048,2043,2055,2040,2048,2048,2048,2048,2057,2048,2027,2048,2052,2048,2035,2054,2048,2032,2048,2048,2048,2054,2010,2048,2048,2048,2043,2039,2048,2027,2048,2048,2057,2046,2048,2048,2029,2048,2048,2048,2050,2039,2048,2048,2048,2049,2048,2050,2031,2048,2051,2048,2056,2048,2048,2048,2048,2048,2048,2057,2048,2050,2056,2048,2055,2048,2048,2048,2048,2048,2048,2055,2048,2048,2043,2048,2048,2057,2048,2048,2057,2056,2048,2050,2048,2030,2051,2049,2044,2048,2049,2048,2057,2048,2050,2057,2048,2049,2048,2046,2048,2043,2044,2048,2049,2056,2041,2057,2052,2048,2054,2054,2048,2041,2048,2055,2055,2048,2048,2052,2044,2048,2054,2048,2049,2035,2048,2041,2048,2048,2052,2053,2053,2052,2035,2057,2052,2050,2048,2042,2048,2050,2046,2053,2034,2048,2054,2057,2046,2036,2048,2053,2057,2055,2048,2048,2052,2048,2031,2048,2055,2048,2046,2043,2048,2054,2050,2055,2053,2045,2050,2055,2037,2048,2046,2048,2055,2048,2057,2048,2048,2051,2057,2043,2055,2048,2048,2048,2048,2048,2048,2032,2048,2052,2048,2053,2048,2057,2048,2048,2044,2055,2039,2050,2047,2057,2048,2048,2048,2046,2048,2048,2047,2057,2057,2057,2052,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2053,2048,2048,2054,2056,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2052,2055,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2054,2048,2055,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2037,2053,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2050,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2054,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2057,2048,2057,2048,2048,2048,2031,2047,2043,2046,2053,2036,2048,2023,2050,2046,2048,2050,2050,2048,2045,2048,2042,2048,2048,2057,2048,2049,2048,2048,2047,2057,2057,2054,2052,2043,2048,2048,2048,2037,2048,2040,2053,2056,2057,2053,2048,2057,2042,2051,2044,2057,2048,2038,2048,2055,2048,2047,2043,2057,2052,2048,2030,2048,2057,2055,2048,2047,2048,2033,2047,2044,2048,2048,2048,2048,2048,2057,2057,2048,2048,2049,2047,2048,2048,2048,2049,2049,2038,2043,2048,2056,2057,2055,2056,2048,2048,2054,2048,2055,2056,2048,2047,2048,2048,2048,2048,2049,2048,2050,2057,2048,2048,2048,2031,2055,2043,2050,2047,2054,2048,2048,2057,2046,2048,2048,2048,2048,2032,2048,2047,2048,2048,2053,2048,2057,2055,2042,2034,2048,2048,2048,2055,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2057,2048,2048,2048,2048,2048,2048,2056,2048,2057,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2050,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2027,2048,2048,2048,2048,2048,2048,2040,2048,2057,2048,2048,2045,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2055,2048,2048,2048,2048,2048,2048,2048,2050,2048,2057,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2050,2056,2055,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2055,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2056,2048,2048,2043,2048,2048,2048,2048,2048,2041,2057,2048,2057,2048,2048,2048,2056,2036,2057,2047,2056,2033,2055,2048,2035,2048,2048,2057,2048,2048,2048,2047,2048,2055,2048,2047,2048,2054,2035,2048,2048,2051,2053,2054,2053,2043,2053,2048,2048,2048,2048,2048,2056,2048,2043,2048,2049,2042,2048,2041,2048,2048,2057,2048,2048,2048,2048,2048,2052,2049,2052,2056,2045,2056,2048,2054,2014,2048,2051,2048,2048,2049,2045,2051,2043,2048,2048,2051,2048,2056,2056,2048,2049,2053,2052,2051,2055,2055,2048,2037,2048,2056,2057,2048,2048,2052,2040,2048,2049,2052,2048,2048,2048,2048,2048,2052,2054,2050,2050,2054,2048,2048,2048,2048,2048,2056,2048,2020,2048,2050,2048,2048,2047,2048,2039,2052,2054,2049,2043,2056,2048,2052,2044,2055,2052,2041,2043,2057,2057,2048,2046,2056,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2053,2056,2048,2048,2057,2048,2048,2050,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,1682,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,94,90,90,91,103,90,90,95,90,100,90,87,90,91,104,202,1653,1047,1989,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2055,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2053,2048,2057,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2056,2048,2048,2057,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2053,2048,2048,2057,2048,2055,2048,2048,2053,2048,2048,2055,2048,2053,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2054,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2056,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2057,2048,2048,2048,2048,2048,2048,2048,2048,2055,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2057,2054,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2057,2057,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2057,2048,2056,2048,2048,2048,2048,2048,2048,2055,2048,2053,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2056,2048,2053,2053,2048,2057,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2057,2057,2048,2052,2048,2048,2048,2048,2048,2048,2057,2057,2055,2048,2048,2056,2048,2048,2057,2048,2048,2048,2048,2048,2053,2048,2053,2048,2056,2057,2048,2048,2048,2048,2048,2057,2048,2055,2056,2057,2048,2048,2048,2048,2050,2057,2052,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2055,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2057,2048,2057,2048,2048,2048,2048,2048,2055,2057,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2051,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2055,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2055,2048,2057,2048,2048,2048,2048,2056,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2055,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2054,2048,2054,2057,2055,2056,2057,2056,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2057,2048,2048,2048,2054,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2048,2048,2052,2048,2048,2048,2048,2048,2048,2055,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2056,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2054,2048,2048,2048,2048,2048,2056,2055,2048,2048,2048,2053,2048,2048,2048,2048,2036,2048,395,1882,2031,2043,2050,2048,2050,2056,2035,2047,2048,2048,2054,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2057,2048,2049,2048,2057,2057,2055,2048,2048,2057,2048,2048,2048,2048,2048,2048,2057,2057,2052,2048,2048,2048,2048,2048,2048,2048,2055,2055,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2053,2048,2048,2057,2048,2048,2048,2048,2048,2048,2041,2043,2050,2048,2057,2050,2051,2022,2057,2048,2054,2048,2048,2048,2048,2048,2048,2048,2048,2057,2056,2048,2057,2048,2048,2048,2057,2048,2048,2048,2057,2048,2056,2048,2048,2052,2048,2048,2048,2048,2048,2048,2057,2048,2056,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2057,2055,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2057,2048,2050,2048,2048,2057,2048,2057,2051,2048,2048,2048,2048,2048,2057,2056,2048,2048,2057,2048,2048,2042,2040,2042,2048,2056,2055,2057,2030,2024,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2055,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2052,2048,2048,2048,2048,2034,2042,2050,2048,2048,2048,2048,2048,2048,2048,2049,2048,2048,2052,2048,2048,2048,2048,2048,2028,2056,1981,1946,1908,1967,2048,2048,2057,2032,2048,2057,2048,2054,2057,2049,2048,2048,2055,2045,2048,2028,2048,2048,2048,2037,1936,1206,852,919,882,939,791,900,911,881,862,867,848,859,836,826,838,926,830,965,938,854,869,966,1105,1070,1066,904,760,617,929,1063,986,875,1037,969,1036,980,1102,1168,808,1020,1011,1024,1015,1010,1124,1159,997,807,1319,941,875,967,896,951,1073,835,1297,1046,1059,682,624,1039,1197,868,1250,1142,908,1080,598,855,913,897,921,922,884,927,831,935,891,922,827,827,867,901,795,876,978,813,945,959,869,889,944,754,642,567,838,1588,1154,819,737,1283,1359,1324,1507,1514,1468,1004,852,1547,1384,1605,1253,1301,1334,1361,1375,1493,1070,1504,1418,1474,1466,1437,1441,1498,1273,1335,1205,771,955,1237,883,711,1012,1232,735,891,1458,825,773,1099,1258,730,917,910,1226,1091,1278,766,758,1249,1340,1324,1131,1370,1293,1360,1310,1202,1324,1155,1435,782,1121,1156,1358,1216,1059,924,1257,1144,1052,1156,1083,970,1096,1035,898,1122,990,932,1080,998,979,1184,1348,1374,1224,1111,1305,978,1046,994,1067,1163,1213,911,1032,1098,751,1084,1016,1259,1107,853,1156,743,1094,949,683,1067,1156,1176,601,892,1028,1027,636,995,1217,891,788,866,1143,1146,1062,1050,1170,998,962,1013,1084,884,899,954,1050,1012,992,1100,1285,1184,984,850,941,1203,1217,1203,1240,1049,1254,1019,1007,996,1104,1392,1159,1087,1103,1234,1164,1265,1309,1562,1075,1124,1084,975,1124,1137,1089,1154,1028,928,1258,1226,1227,1141,1029,977,970,1248,1055,1010,965,1258,1037,1245,1104,1163,1138,967,1237,995,1189,963,1248,624,1074,1123,828,1159,905,1023,785,1069,1105,1091,1087,1092,904,1131,1038,505,1134,795,1052,1115,996,1236,1302,1376,1427,1111,1385,1359,1498,901,1122,856,1056,1025,1225,1132,1117,914,1061,1036,889,1131,1182,1161,1021,916,1196,1257,1161,1243,1157,841,822,1162,1292,1087,1051,923,874,965,1082,1028,1265,1158,928,993,1236,1000,867,976,995,805,911,1040,972,661,1270,1164,961,1234,913,1081,981,937,901,1062,1001,902,1099,1019,921,891,775,1032,1158,1039,789,1009,991,1051,1024,941,815,886,962,1209,966,1076,1053,1003,923,718,1012,1009,1046,1092,1037,1239,1049,1089,1045,1217,772,1163,1205,1190,1224,1038,966,1179,1287,1288,1183,1168,1045,1075,959,724,1094,1033,902,965,871,1036,1195,922,1092,1142,1003,1059,977,1280,1122,969,1311,1212,1058,1209,1038,1069,880,963,864,1004,856,843,1024,1187,1134,988,1218,954,993,960,1217,1167,1101,977,801,795,781,750,685,1322,1025,1062,877,1074,916,1231,1034,938,1160,944,870,1087,1004,1138,926,825,866,932,908,1154,982,1019,1148,955,806,1073,1292,1251,1166,1204,978,1085,1042,1150,1146,985,1131,1108,1144,1260,1217,1004,731,1106,780,1248,1198,1302,1077,1048,1166,1094,888,825,1186,1442,1405,1116,1094,1340,1143,1420,1459,1020,1173,781,929,969,1055,792,994,1059,1039,1181,1321,851,1034,1257,1090,1068,1271,1269,1036,921,1158,1164,1084,1010,1166,1279,1045,1020,1092,1058,1107,953,1198,1075,1210,1143,1251,1128,1144,1148,915,1171,1201,1329,1386,1279,1382,1277,1257,1290,1244,1327,1254,1319,1388,1185,1109,1080,1003,825,882,1141,1229,1069,1022,1072,1070,1108,617,1092,1132,1045,1110,1028,1039,894,1143,1024,978,1063,1141,705,988,991,1092,1105,1100,1256,1298,1240,1266,763,1087,1109,1268,1091,1275,965,1185,1106,1254,962,943,1005,1001,1168,1209,1252,903,1147,1127,1057,981,842,1047,1002,916,920,1080,1074,1170,925,703,799,1145,879,1048,1085,972,1193,1126,1183,1085,1079,1100,1021,1132,935,1280,1098,1127,1016,1052,949,963,955,846,1155,980,928,962,1205,973,1056,983,1202,1158,857,870,1085,1028,997,1176,1076,825,1220,861,1250,1157,1124,1062,1076,994,1317,1063,967,951,1067,1057,1005,943,1215,1022,959,1001,1085,1072,852,726,978,970,816,897,1032,1131,1071,931,1149,886,934,1147,1015,923,932,1139,993,1084,971,1035,778,1124,1106,1174,1042,1232,870,1103,1036,1093,1147,1011,1000,824,983,836,720,897,1081,1041,768,1169,1129,980,975,886,964,1131,898,1142,1041,1199,1189,1024,814,971,1009,1066,1127,871,1022,952,1085,946,965,1002,883,912,992,952,1043,1099,1062,900,816,1091,1138,964,1067,930,914,1061,921,926,916,1183,1044,1099,1119,1212,1076,1105,1106,1323,1061,1000,1050,874,852,719,886,894,648,877,939,1222,687,954,985,824,1041,1068,1078,926,1095,947,802,979,1229,1133,907,900,1076,955,928,963,1096,999,1124,961,857,1218,1217,1021,1137,1450,1077,1072,1165,986,1108,1041,1093,1003,962,891,977,978,975,1172,812,435,848,994,1168,1229,1060,1140,1111,1043,1284,834,1084,951,917,1175,980,1236,1055,706,1286,1036,1268,1078,1011,798,962,1117,1170,1267,1131,1152,1186,1058,945,1070,1210,969,1001,1020,1058,880,799,869,1155,904,1086,1134,1123,933,817,936,1050,1156,1118,1004,1060,946,1055,1110,930,1088,1149,1018,1005,857,806,933,890,927,1001,1092,1035,1080,936,924,999,1182,740,716,640,539,684,560,653,776,954,1123,1105,1096,995,954,969,1106,1099,1037,914,1120,1128,1176,1125,1134,1125,1356,1479,1319,1122,981,945,1044,1142,1113,1087,810,1112,1070,1131,1107,1153,1064,1318,1199,1142,1565,1282,1199,941,984,985,1083,954,968,1274,1080,1165,1120,1163,995,677,986,1604,681,858,1373,1709,1033,669,1193,1172,948,891,979,1507,1238,1007,1008,965,1177,962,976,1006,929,917,882,870,875,942,983,989,979,925,951,843,764,911,928,1044,1033,988,1010,920,949,982,983,965,857,822,747,815,743,821,740,1057,954,960,932,1010,980,980,968,979,976,926,947,878,781,856,841,817,858,901,763,1036,934,918,920,921,917,916,886,883,866,709,926,1083,1325,1469,876,1252,1103,1098,1070,935,813,770,785,1076,904,874,898,989,844,779,952,992,1048,1047,1044,1045,975,938,942,996,978,967,893,922,1119,1215,1191,1155,1042,1059,1044,1004,930,939,935,985,971,969,920,962,927,593,499,694,900,699,537,666,692,1347,1396,1638,1121,1073,1329,1279,1279,1180,1115,1018,981,1354,1031,618,1115,892,1043,1163,1031,1036,1184,1554,1192,1369,1106,991,1035,1061,907,1089,945,1011,1020,1001,1076,1382,1182,775,991,1015,1086,864,1450,1079,805,880,836,1144,1004,1083,901,1001,1160,893,1013,1268,1082,1386,1075,1058,1385,1234,1142,1030,633,644,632,643,657,803,666,649,667,686,690,661,706,970,1046,1176,926,939,1217,888,797,934,866,1033,1276,1361,1270,728,982,1240,1204,1109,1056,1138,1074,1199,1093,1097,812,758,740,765,927,1169,1199,1036,1053,1022,862,1069,1012,995,1045,1022,1084,1440,973,1241,1038,1069,1023,569,537,827,1229,1055,1133,1069,1085,1133,973,1026,1089,560,1077,872,852,1312,991,1013,1026,889,910,956,1292,993,1035,958,907,865,1194,1187,922,1052,1083,926,1074,1071,539,488,541,422,601,540,553,550,1145,1106,1053,1181,886,998,1044,1057,874,1135,1100,1118,1245,1114,748,676,646,1299,1013,1143,1129,1306,1333,1084,1154,1316,1265,953,1026,930,1014,874,1069,946,853,1200,1273,954,1311,935,1261,1133,1058,1127,1180,1090,1092,1102,808,1067,1089,1025,1216,963,1088,1149,979,1186,1296,1612,1305,1282,1222,1187,1021,1332,1190,1123,1042,1129,1320,966,1056,1177,1280,992,1087,1018,1099,896,951,962,1147,855,793,804,893,772,1138,995,828,1074,1045,991,852,1336,1460,969,998,1091,828,858,1167,1176,978,1085,976,708,949,1148,876,1048,1084,919,830,1053,955,1161,1035,954,1106,1204,1432,1497,1391,1100,1361,1338,1306,1278,1239,1212,1278,1128,1139,1219,1032,852,1105,1175,1041,927,1059,1182,1148,985,1034,1131,973,1050,1114,1000,710,920,1094,715,751,947,1011,1035,1435,1426,1058,1038,858,1160,753,1006,1097,773,602,795,767,1063,1108,860,1039,963,919,936,823,1016,1240,1097,809,745,1210,1227,983,1256,1250,1996,2034,2034,2042,2048,2051,2048,2033,1802,1141,954,841,796,1031,996,1079,1178,960,1067,965,577,1023,1270,1063,738,1417,943,297],"successes":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}
;
            compressedData['data'] = byteArray;
            assert(typeof Module['LZ4'] === 'object', 'LZ4 not present - was your app build with -sLZ4?');
            Module['LZ4'].loadPackage({ 'metadata': metadata, 'compressedData': compressedData }, false);
            Module['removeRunDependency']('datafile_php-web.data');
      };
      Module['addRunDependency']('datafile_php-web.data');

      if (!Module.preloadResults) Module.preloadResults = {};

        function preloadFallback(error) {
          console.error(error);
          console.error('falling back to default preload behavior');
          fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, processPackageData, handleError);
        };

        openDatabase(
          function(db) {
            checkCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME,
              function(useCached, metadata) {
                Module.preloadResults[PACKAGE_NAME] = {fromCache: useCached};
                if (useCached) {
                  fetchCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME, metadata, processPackageData, preloadFallback);
                } else {
                  fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE,
                    function(packageData) {
                      cacheRemotePackage(db, PACKAGE_PATH + PACKAGE_NAME, packageData, {uuid:PACKAGE_UUID}, processPackageData,
                        function(error) {
                          console.error(error);
                          processPackageData(packageData);
                        });
                    }
                  , preloadFallback);
                }
              }
            , preloadFallback);
          }
        , preloadFallback);

        if (Module['setStatus']) Module['setStatus']('Downloading...');

    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }

    }
    loadPackage({"files": [{"filename": "/src/composer.json", "start": 0, "end": 348}, {"filename": "/src/composer.lock", "start": 348, "end": 975}, {"filename": "/src/src/IDEA.md", "start": 975, "end": 1508}, {"filename": "/src/src/app.php", "start": 1508, "end": 2798}, {"filename": "/src/src/assets/fonts/NiseSegaSonic.TTF", "start": 2798, "end": 21406}, {"filename": "/src/src/assets/levels/level1.bin", "start": 21406, "end": 25502}, {"filename": "/src/src/assets/levels/level1.meta", "start": 25502, "end": 25915}, {"filename": "/src/src/assets/levels/level1.solidity", "start": 25915, "end": 26099}, {"filename": "/src/src/assets/levels/level10.bin", "start": 26099, "end": 30195}, {"filename": "/src/src/assets/levels/level10.meta", "start": 30195, "end": 30605}, {"filename": "/src/src/assets/levels/level10.solidity", "start": 30605, "end": 30781}, {"filename": "/src/src/assets/levels/level11.bin", "start": 30781, "end": 34877}, {"filename": "/src/src/assets/levels/level11.meta", "start": 34877, "end": 35287}, {"filename": "/src/src/assets/levels/level11.solidity", "start": 35287, "end": 35463}, {"filename": "/src/src/assets/levels/level12.bin", "start": 35463, "end": 39559}, {"filename": "/src/src/assets/levels/level12.meta", "start": 39559, "end": 39969}, {"filename": "/src/src/assets/levels/level12.solidity", "start": 39969, "end": 40145}, {"filename": "/src/src/assets/levels/level13.bin", "start": 40145, "end": 44241}, {"filename": "/src/src/assets/levels/level13.meta", "start": 44241, "end": 44653}, {"filename": "/src/src/assets/levels/level13.solidity", "start": 44653, "end": 44845}, {"filename": "/src/src/assets/levels/level14.bin", "start": 44845, "end": 48941}, {"filename": "/src/src/assets/levels/level14.meta", "start": 48941, "end": 49353}, {"filename": "/src/src/assets/levels/level14.solidity", "start": 49353, "end": 49545}, {"filename": "/src/src/assets/levels/level15.bin", "start": 49545, "end": 53641}, {"filename": "/src/src/assets/levels/level15.meta", "start": 53641, "end": 54052}, {"filename": "/src/src/assets/levels/level15.solidity", "start": 54052, "end": 54244}, {"filename": "/src/src/assets/levels/level16.bin", "start": 54244, "end": 58340}, {"filename": "/src/src/assets/levels/level16.meta", "start": 58340, "end": 58752}, {"filename": "/src/src/assets/levels/level16.solidity", "start": 58752, "end": 58968}, {"filename": "/src/src/assets/levels/level17.bin", "start": 58968, "end": 63064}, {"filename": "/src/src/assets/levels/level17.meta", "start": 63064, "end": 63475}, {"filename": "/src/src/assets/levels/level17.solidity", "start": 63475, "end": 63691}, {"filename": "/src/src/assets/levels/level18.bin", "start": 63691, "end": 67787}, {"filename": "/src/src/assets/levels/level18.meta", "start": 67787, "end": 68195}, {"filename": "/src/src/assets/levels/level18.solidity", "start": 68195, "end": 68411}, {"filename": "/src/src/assets/levels/level19.bin", "start": 68411, "end": 72507}, {"filename": "/src/src/assets/levels/level19.meta", "start": 72507, "end": 72925}, {"filename": "/src/src/assets/levels/level19.solidity", "start": 72925, "end": 73109}, {"filename": "/src/src/assets/levels/level2.bin", "start": 73109, "end": 77205}, {"filename": "/src/src/assets/levels/level2.meta", "start": 77205, "end": 77615}, {"filename": "/src/src/assets/levels/level2.solidity", "start": 77615, "end": 77799}, {"filename": "/src/src/assets/levels/level20.bin", "start": 77799, "end": 81895}, {"filename": "/src/src/assets/levels/level20.meta", "start": 81895, "end": 82305}, {"filename": "/src/src/assets/levels/level20.solidity", "start": 82305, "end": 82306}, {"filename": "/src/src/assets/levels/level21.bin", "start": 82306, "end": 84354}, {"filename": "/src/src/assets/levels/level21.meta", "start": 84354, "end": 84766}, {"filename": "/src/src/assets/levels/level21.solidity", "start": 84766, "end": 84958}, {"filename": "/src/src/assets/levels/level22.bin", "start": 84958, "end": 89054}, {"filename": "/src/src/assets/levels/level22.meta", "start": 89054, "end": 89467}, {"filename": "/src/src/assets/levels/level22.solidity", "start": 89467, "end": 89659}, {"filename": "/src/src/assets/levels/level23.bin", "start": 89659, "end": 93755}, {"filename": "/src/src/assets/levels/level23.meta", "start": 93755, "end": 94166}, {"filename": "/src/src/assets/levels/level23.solidity", "start": 94166, "end": 94358}, {"filename": "/src/src/assets/levels/level24.bin", "start": 94358, "end": 98454}, {"filename": "/src/src/assets/levels/level24.meta", "start": 98454, "end": 98867}, {"filename": "/src/src/assets/levels/level24.solidity", "start": 98867, "end": 99059}, {"filename": "/src/src/assets/levels/level25.bin", "start": 99059, "end": 103155}, {"filename": "/src/src/assets/levels/level25.meta", "start": 103155, "end": 103569}, {"filename": "/src/src/assets/levels/level25.solidity", "start": 103569, "end": 103761}, {"filename": "/src/src/assets/levels/level26.bin", "start": 103761, "end": 107857}, {"filename": "/src/src/assets/levels/level26.meta", "start": 107857, "end": 108266}, {"filename": "/src/src/assets/levels/level26.solidity", "start": 108266, "end": 108458}, {"filename": "/src/src/assets/levels/level27.bin", "start": 108458, "end": 112554}, {"filename": "/src/src/assets/levels/level27.meta", "start": 112554, "end": 112963}, {"filename": "/src/src/assets/levels/level27.solidity", "start": 112963, "end": 113067}, {"filename": "/src/src/assets/levels/level28.bin", "start": 113067, "end": 117163}, {"filename": "/src/src/assets/levels/level28.meta", "start": 117163, "end": 117573}, {"filename": "/src/src/assets/levels/level28.solidity", "start": 117573, "end": 117701}, {"filename": "/src/src/assets/levels/level29.bin", "start": 117701, "end": 121797}, {"filename": "/src/src/assets/levels/level29.meta", "start": 121797, "end": 122211}, {"filename": "/src/src/assets/levels/level29.solidity", "start": 122211, "end": 122339}, {"filename": "/src/src/assets/levels/level3.bin", "start": 122339, "end": 126435}, {"filename": "/src/src/assets/levels/level3.meta", "start": 126435, "end": 126844}, {"filename": "/src/src/assets/levels/level3.solidity", "start": 126844, "end": 127028}, {"filename": "/src/src/assets/levels/level30.bin", "start": 127028, "end": 131124}, {"filename": "/src/src/assets/levels/level30.meta", "start": 131124, "end": 131538}, {"filename": "/src/src/assets/levels/level30.solidity", "start": 131538, "end": 131666}, {"filename": "/src/src/assets/levels/level31.bin", "start": 131666, "end": 135762}, {"filename": "/src/src/assets/levels/level31.meta", "start": 135762, "end": 136174}, {"filename": "/src/src/assets/levels/level31.solidity", "start": 136174, "end": 136302}, {"filename": "/src/src/assets/levels/level32.bin", "start": 136302, "end": 140398}, {"filename": "/src/src/assets/levels/level32.meta", "start": 140398, "end": 140808}, {"filename": "/src/src/assets/levels/level32.solidity", "start": 140808, "end": 140936}, {"filename": "/src/src/assets/levels/level33.bin", "start": 140936, "end": 145032}, {"filename": "/src/src/assets/levels/level33.meta", "start": 145032, "end": 145446}, {"filename": "/src/src/assets/levels/level33.solidity", "start": 145446, "end": 145574}, {"filename": "/src/src/assets/levels/level34.bin", "start": 145574, "end": 149670}, {"filename": "/src/src/assets/levels/level34.meta", "start": 149670, "end": 150084}, {"filename": "/src/src/assets/levels/level34.solidity", "start": 150084, "end": 150212}, {"filename": "/src/src/assets/levels/level35.bin", "start": 150212, "end": 154308}, {"filename": "/src/src/assets/levels/level35.meta", "start": 154308, "end": 154720}, {"filename": "/src/src/assets/levels/level35.solidity", "start": 154720, "end": 154848}, {"filename": "/src/src/assets/levels/level4.bin", "start": 154848, "end": 158944}, {"filename": "/src/src/assets/levels/level4.meta", "start": 158944, "end": 159355}, {"filename": "/src/src/assets/levels/level4.solidity", "start": 159355, "end": 159499}, {"filename": "/src/src/assets/levels/level5.bin", "start": 159499, "end": 163595}, {"filename": "/src/src/assets/levels/level5.meta", "start": 163595, "end": 164007}, {"filename": "/src/src/assets/levels/level5.solidity", "start": 164007, "end": 164151}, {"filename": "/src/src/assets/levels/level6.bin", "start": 164151, "end": 168247}, {"filename": "/src/src/assets/levels/level6.meta", "start": 168247, "end": 168658}, {"filename": "/src/src/assets/levels/level6.solidity", "start": 168658, "end": 168802}, {"filename": "/src/src/assets/levels/level7.bin", "start": 168802, "end": 172898}, {"filename": "/src/src/assets/levels/level7.meta", "start": 172898, "end": 173309}, {"filename": "/src/src/assets/levels/level7.solidity", "start": 173309, "end": 173469}, {"filename": "/src/src/assets/levels/level8.bin", "start": 173469, "end": 177565}, {"filename": "/src/src/assets/levels/level8.meta", "start": 177565, "end": 177979}, {"filename": "/src/src/assets/levels/level8.solidity", "start": 177979, "end": 178139}, {"filename": "/src/src/assets/levels/level9.bin", "start": 178139, "end": 182235}, {"filename": "/src/src/assets/levels/level9.meta", "start": 182235, "end": 182644}, {"filename": "/src/src/assets/levels/level9.solidity", "start": 182644, "end": 182804}, {"filename": "/src/src/assets/levels/tileCol.data.php", "start": 182804, "end": 1048699}, {"filename": "/src/src/assets/mixer/music/level1.mp3", "start": 1048699, "end": 4159403, "audio": 1}, {"filename": "/src/src/assets/mixer/sound/convert.sh", "start": 4159403, "end": 4159853}, {"filename": "/src/src/assets/mixer/sound/level1.ogg", "start": 4159853, "end": 5923064, "audio": 1}, {"filename": "/src/src/assets/tileset/levels/tileset1.png", "start": 5923064, "end": 5940002}, {"filename": "/src/src/assets/tileset/levels/tileset10.png", "start": 5940002, "end": 5963022}, {"filename": "/src/src/assets/tileset/levels/tileset11.png", "start": 5963022, "end": 5986031}, {"filename": "/src/src/assets/tileset/levels/tileset12.png", "start": 5986031, "end": 6009095}, {"filename": "/src/src/assets/tileset/levels/tileset13.png", "start": 6009095, "end": 6030670}, {"filename": "/src/src/assets/tileset/levels/tileset14.png", "start": 6030670, "end": 6047552}, {"filename": "/src/src/assets/tileset/levels/tileset15.png", "start": 6047552, "end": 6064501}, {"filename": "/src/src/assets/tileset/levels/tileset16.png", "start": 6064501, "end": 6081419}, {"filename": "/src/src/assets/tileset/levels/tileset17.png", "start": 6081419, "end": 6098295}, {"filename": "/src/src/assets/tileset/levels/tileset18.png", "start": 6098295, "end": 6120942}, {"filename": "/src/src/assets/tileset/levels/tileset19.png", "start": 6120942, "end": 6143552}, {"filename": "/src/src/assets/tileset/levels/tileset2.png", "start": 6143552, "end": 6160490}, {"filename": "/src/src/assets/tileset/levels/tileset20.png", "start": 6160490, "end": 6182974}, {"filename": "/src/src/assets/tileset/levels/tileset21.png", "start": 6182974, "end": 6205466}, {"filename": "/src/src/assets/tileset/levels/tileset22.png", "start": 6205466, "end": 6230504}, {"filename": "/src/src/assets/tileset/levels/tileset23.png", "start": 6230504, "end": 6255574}, {"filename": "/src/src/assets/tileset/levels/tileset24.png", "start": 6255574, "end": 6280610}, {"filename": "/src/src/assets/tileset/levels/tileset25.png", "start": 6280610, "end": 6305660}, {"filename": "/src/src/assets/tileset/levels/tileset26.png", "start": 6305660, "end": 6319593}, {"filename": "/src/src/assets/tileset/levels/tileset27.png", "start": 6319593, "end": 6333567}, {"filename": "/src/src/assets/tileset/levels/tileset28.png", "start": 6333567, "end": 6347470}, {"filename": "/src/src/assets/tileset/levels/tileset29.png", "start": 6347470, "end": 6361147}, {"filename": "/src/src/assets/tileset/levels/tileset3.png", "start": 6361147, "end": 6378121}, {"filename": "/src/src/assets/tileset/levels/tileset30.png", "start": 6378121, "end": 6385797}, {"filename": "/src/src/assets/tileset/levels/tileset4.png", "start": 6385797, "end": 6402657}, {"filename": "/src/src/assets/tileset/levels/tileset5.png", "start": 6402657, "end": 6419517}, {"filename": "/src/src/assets/tileset/levels/tileset6.png", "start": 6419517, "end": 6436377}, {"filename": "/src/src/assets/tileset/levels/tileset7.png", "start": 6436377, "end": 6456336}, {"filename": "/src/src/assets/tileset/levels/tileset8.png", "start": 6456336, "end": 6476274}, {"filename": "/src/src/assets/tileset/levels/tileset9.png", "start": 6476274, "end": 6496276}, {"filename": "/src/src/assets/tileset/sprites/tileset-eggman.png", "start": 6496276, "end": 6512976}, {"filename": "/src/src/assets/tileset/sprites/tileset-enemies.png", "start": 6512976, "end": 6523640}, {"filename": "/src/src/assets/tileset/sprites/tileset-objects.png", "start": 6523640, "end": 6535510}, {"filename": "/src/src/assets/tileset/sprites/tileset-sonic.png", "start": 6535510, "end": 6546890}, {"filename": "/src/src/castor.php", "start": 6546890, "end": 6548548}, {"filename": "/src/src/composer.json", "start": 6548548, "end": 6548925}, {"filename": "/src/src/composer.lock", "start": 6548925, "end": 6594517}, {"filename": "/src/src/config/services.yaml", "start": 6594517, "end": 6595105}, {"filename": "/src/src/src/AssetManager/Asset.php", "start": 6595105, "end": 6595504}, {"filename": "/src/src/src/AssetManager/AssetManager.php", "start": 6595504, "end": 6595669}, {"filename": "/src/src/src/Command/DefaultCommand.php", "start": 6595669, "end": 6596355}, {"filename": "/src/src/src/Entities/Enemy.php", "start": 6596355, "end": 6596425}, {"filename": "/src/src/src/Entities/Entity.php", "start": 6596425, "end": 6596575}, {"filename": "/src/src/src/Entities/Player.php", "start": 6596575, "end": 6597007}, {"filename": "/src/src/src/Entities/Sprite.php", "start": 6597007, "end": 6597063}, {"filename": "/src/src/src/Game.php", "start": 6597063, "end": 6606970}, {"filename": "/src/src/src/InputManager/InputKeyboard.php", "start": 6606970, "end": 6609276}, {"filename": "/src/src/src/InputManager/InputManager.php", "start": 6609276, "end": 6610088}, {"filename": "/src/src/src/Level/Level.php", "start": 6610088, "end": 6612528}, {"filename": "/src/src/src/Level/LevelManager.php", "start": 6612528, "end": 6615775}, {"filename": "/src/src/src/Loop/GameLoop.php", "start": 6615775, "end": 6617524}, {"filename": "/src/src/src/Renderer/Renderer.php", "start": 6617524, "end": 6618983}, {"filename": "/src/src/src/Renderer/Sdl.php", "start": 6618983, "end": 6621539}, {"filename": "/src/src/src/Renderer/SdlImage.php", "start": 6621539, "end": 6622553}, {"filename": "/src/src/src/Renderer/SdlTtf.php", "start": 6622553, "end": 6623716}, {"filename": "/src/src/src/Renderer/Window.php", "start": 6623716, "end": 6625629}, {"filename": "/src/src/src/Scene/Camera.php", "start": 6625629, "end": 6629544}, {"filename": "/src/src/src/Scene/Scene.php", "start": 6629544, "end": 6634928}, {"filename": "/src/src/src/Scene/TileSet.php", "start": 6634928, "end": 6636452}, {"filename": "/src/src/src/Service/SampleClass.php", "start": 6636452, "end": 6636710}, {"filename": "/src/src/src/SoundManager/Sound.php", "start": 6636710, "end": 6638716}, {"filename": "/src/src/src/SoundManager/SoundManager.php", "start": 6638716, "end": 6640039}, {"filename": "/src/src/src/Utils/Vector.php", "start": 6640039, "end": 6640938}, {"filename": "/src/src/start.sh", "start": 6640938, "end": 6641068}, {"filename": "/src/src/vendor/autoload.php", "start": 6641068, "end": 6641839}, {"filename": "/src/src/vendor/bin/var-dump-server", "start": 6641839, "end": 6645241}, {"filename": "/src/src/vendor/bin/yaml-lint", "start": 6645241, "end": 6648607}, {"filename": "/src/src/vendor/composer/ClassLoader.php", "start": 6648607, "end": 6664985}, {"filename": "/src/src/vendor/composer/InstalledVersions.php", "start": 6664985, "end": 6681961}, {"filename": "/src/src/vendor/composer/LICENSE", "start": 6681961, "end": 6683031}, {"filename": "/src/src/vendor/composer/autoload_classmap.php", "start": 6683031, "end": 6683354}, {"filename": "/src/src/vendor/composer/autoload_files.php", "start": 6683354, "end": 6684200}, {"filename": "/src/src/vendor/composer/autoload_namespaces.php", "start": 6684200, "end": 6684339}, {"filename": "/src/src/vendor/composer/autoload_psr4.php", "start": 6684339, "end": 6685861}, {"filename": "/src/src/vendor/composer/autoload_real.php", "start": 6685861, "end": 6687533}, {"filename": "/src/src/vendor/composer/autoload_static.php", "start": 6687533, "end": 6692539}, {"filename": "/src/src/vendor/composer/installed.json", "start": 6692539, "end": 6740074}, {"filename": "/src/src/vendor/composer/installed.php", "start": 6740074, "end": 6747769}, {"filename": "/src/src/vendor/composer/platform_check.php", "start": 6747769, "end": 6748694}, {"filename": "/src/src/vendor/evenement/evenement/LICENSE", "start": 6748694, "end": 6749750}, {"filename": "/src/src/vendor/evenement/evenement/README.md", "start": 6749750, "end": 6751448}, {"filename": "/src/src/vendor/evenement/evenement/composer.json", "start": 6751448, "end": 6752111}, {"filename": "/src/src/vendor/evenement/evenement/src/EventEmitter.php", "start": 6752111, "end": 6752462}, {"filename": "/src/src/vendor/evenement/evenement/src/EventEmitterInterface.php", "start": 6752462, "end": 6753094}, {"filename": "/src/src/vendor/evenement/evenement/src/EventEmitterTrait.php", "start": 6753094, "end": 6757453}, {"filename": "/src/src/vendor/psr/container/LICENSE", "start": 6757453, "end": 6758598}, {"filename": "/src/src/vendor/psr/container/README.md", "start": 6758598, "end": 6759176}, {"filename": "/src/src/vendor/psr/container/composer.json", "start": 6759176, "end": 6759831}, {"filename": "/src/src/vendor/psr/container/src/ContainerExceptionInterface.php", "start": 6759831, "end": 6760015}, {"filename": "/src/src/vendor/psr/container/src/ContainerInterface.php", "start": 6760015, "end": 6761061}, {"filename": "/src/src/vendor/psr/container/src/NotFoundExceptionInterface.php", "start": 6761061, "end": 6761219}, {"filename": "/src/src/vendor/react/event-loop/CHANGELOG.md", "start": 6761219, "end": 6777256}, {"filename": "/src/src/vendor/react/event-loop/LICENSE", "start": 6777256, "end": 6778397}, {"filename": "/src/src/vendor/react/event-loop/README.md", "start": 6778397, "end": 6810880}, {"filename": "/src/src/vendor/react/event-loop/composer.json", "start": 6810880, "end": 6812163}, {"filename": "/src/src/vendor/react/event-loop/src/ExtEvLoop.php", "start": 6812163, "end": 6818223}, {"filename": "/src/src/vendor/react/event-loop/src/ExtEventLoop.php", "start": 6818223, "end": 6826466}, {"filename": "/src/src/vendor/react/event-loop/src/ExtLibevLoop.php", "start": 6826466, "end": 6832233}, {"filename": "/src/src/vendor/react/event-loop/src/ExtLibeventLoop.php", "start": 6832233, "end": 6840978}, {"filename": "/src/src/vendor/react/event-loop/src/ExtUvLoop.php", "start": 6840978, "end": 6850273}, {"filename": "/src/src/vendor/react/event-loop/src/Factory.php", "start": 6850273, "end": 6852090}, {"filename": "/src/src/vendor/react/event-loop/src/Loop.php", "start": 6852090, "end": 6859566}, {"filename": "/src/src/vendor/react/event-loop/src/LoopInterface.php", "start": 6859566, "end": 6878893}, {"filename": "/src/src/vendor/react/event-loop/src/SignalsHandler.php", "start": 6878893, "end": 6880207}, {"filename": "/src/src/vendor/react/event-loop/src/StreamSelectLoop.php", "start": 6880207, "end": 6892253}, {"filename": "/src/src/vendor/react/event-loop/src/Tick/FutureTickQueue.php", "start": 6892253, "end": 6893481}, {"filename": "/src/src/vendor/react/event-loop/src/Timer/Timer.php", "start": 6893481, "end": 6894785}, {"filename": "/src/src/vendor/react/event-loop/src/Timer/Timers.php", "start": 6894785, "end": 6898012}, {"filename": "/src/src/vendor/react/event-loop/src/TimerInterface.php", "start": 6898012, "end": 6898504}, {"filename": "/src/src/vendor/symfony/config/Builder/ClassBuilder.php", "start": 6898504, "end": 6903141}, {"filename": "/src/src/vendor/symfony/config/Builder/ConfigBuilderGenerator.php", "start": 6903141, "end": 6924706}, {"filename": "/src/src/vendor/symfony/config/Builder/ConfigBuilderGeneratorInterface.php", "start": 6924706, "end": 6925374}, {"filename": "/src/src/vendor/symfony/config/Builder/ConfigBuilderInterface.php", "start": 6925374, "end": 6926076}, {"filename": "/src/src/vendor/symfony/config/Builder/Method.php", "start": 6926076, "end": 6926665}, {"filename": "/src/src/vendor/symfony/config/Builder/Property.php", "start": 6926665, "end": 6928382}, {"filename": "/src/src/vendor/symfony/config/CHANGELOG.md", "start": 6928382, "end": 6933686}, {"filename": "/src/src/vendor/symfony/config/ConfigCache.php", "start": 6933686, "end": 6935809}, {"filename": "/src/src/vendor/symfony/config/ConfigCacheFactory.php", "start": 6935809, "end": 6936866}, {"filename": "/src/src/vendor/symfony/config/ConfigCacheFactoryInterface.php", "start": 6936866, "end": 6937803}, {"filename": "/src/src/vendor/symfony/config/ConfigCacheInterface.php", "start": 6937803, "end": 6939050}, {"filename": "/src/src/vendor/symfony/config/Definition/ArrayNode.php", "start": 6939050, "end": 6950808}, {"filename": "/src/src/vendor/symfony/config/Definition/BaseNode.php", "start": 6950808, "end": 6965651}, {"filename": "/src/src/vendor/symfony/config/Definition/BooleanNode.php", "start": 6965651, "end": 6967242}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/ArrayNodeDefinition.php", "start": 6967242, "end": 6983470}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/BooleanNodeDefinition.php", "start": 6983470, "end": 6985044}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/BuilderAwareInterface.php", "start": 6985044, "end": 6985629}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/EnumNodeDefinition.php", "start": 6985629, "end": 6986816}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/ExprBuilder.php", "start": 6986816, "end": 6992526}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/FloatNodeDefinition.php", "start": 6992526, "end": 6993279}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/IntegerNodeDefinition.php", "start": 6993279, "end": 6994043}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/MergeBuilder.php", "start": 6994043, "end": 6995252}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/NodeBuilder.php", "start": 6995252, "end": 7000505}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/NodeDefinition.php", "start": 7000505, "end": 7008744}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/NodeParentInterface.php", "start": 7008744, "end": 7009191}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/NormalizationBuilder.php", "start": 7009191, "end": 7010676}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/NumericNodeDefinition.php", "start": 7010676, "end": 7012595}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/ParentNodeDefinitionInterface.php", "start": 7012595, "end": 7013765}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/ScalarNodeDefinition.php", "start": 7013765, "end": 7014491}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/StringNodeDefinition.php", "start": 7014491, "end": 7015354}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/TreeBuilder.php", "start": 7015354, "end": 7016858}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/ValidationBuilder.php", "start": 7016858, "end": 7017821}, {"filename": "/src/src/vendor/symfony/config/Definition/Builder/VariableNodeDefinition.php", "start": 7017821, "end": 7019676}, {"filename": "/src/src/vendor/symfony/config/Definition/ConfigurableInterface.php", "start": 7019676, "end": 7020270}, {"filename": "/src/src/vendor/symfony/config/Definition/Configuration.php", "start": 7020270, "end": 7021640}, {"filename": "/src/src/vendor/symfony/config/Definition/ConfigurationInterface.php", "start": 7021640, "end": 7022232}, {"filename": "/src/src/vendor/symfony/config/Definition/Configurator/DefinitionConfigurator.php", "start": 7022232, "end": 7023594}, {"filename": "/src/src/vendor/symfony/config/Definition/Dumper/XmlReferenceDumper.php", "start": 7023594, "end": 7033544}, {"filename": "/src/src/vendor/symfony/config/Definition/Dumper/YamlReferenceDumper.php", "start": 7033544, "end": 7041634}, {"filename": "/src/src/vendor/symfony/config/Definition/EnumNode.php", "start": 7041634, "end": 7044345}, {"filename": "/src/src/vendor/symfony/config/Definition/Exception/DuplicateKeyException.php", "start": 7044345, "end": 7044926}, {"filename": "/src/src/vendor/symfony/config/Definition/Exception/Exception.php", "start": 7044926, "end": 7045385}, {"filename": "/src/src/vendor/symfony/config/Definition/Exception/ForbiddenOverwriteException.php", "start": 7045385, "end": 7045978}, {"filename": "/src/src/vendor/symfony/config/Definition/Exception/InvalidConfigurationException.php", "start": 7045978, "end": 7047105}, {"filename": "/src/src/vendor/symfony/config/Definition/Exception/InvalidDefinitionException.php", "start": 7047105, "end": 7047579}, {"filename": "/src/src/vendor/symfony/config/Definition/Exception/InvalidTypeException.php", "start": 7047579, "end": 7048072}, {"filename": "/src/src/vendor/symfony/config/Definition/Exception/UnsetKeyException.php", "start": 7048072, "end": 7048612}, {"filename": "/src/src/vendor/symfony/config/Definition/FloatNode.php", "start": 7048612, "end": 7049801}, {"filename": "/src/src/vendor/symfony/config/Definition/IntegerNode.php", "start": 7049801, "end": 7050853}, {"filename": "/src/src/vendor/symfony/config/Definition/Loader/DefinitionFileLoader.php", "start": 7050853, "end": 7054056}, {"filename": "/src/src/vendor/symfony/config/Definition/NodeInterface.php", "start": 7054056, "end": 7056121}, {"filename": "/src/src/vendor/symfony/config/Definition/NumericNode.php", "start": 7056121, "end": 7057896}, {"filename": "/src/src/vendor/symfony/config/Definition/Processor.php", "start": 7057896, "end": 7060429}, {"filename": "/src/src/vendor/symfony/config/Definition/PrototypeNodeInterface.php", "start": 7060429, "end": 7061018}, {"filename": "/src/src/vendor/symfony/config/Definition/PrototypedArrayNode.php", "start": 7061018, "end": 7072129}, {"filename": "/src/src/vendor/symfony/config/Definition/ScalarNode.php", "start": 7072129, "end": 7073732}, {"filename": "/src/src/vendor/symfony/config/Definition/StringNode.php", "start": 7073732, "end": 7074791}, {"filename": "/src/src/vendor/symfony/config/Definition/VariableNode.php", "start": 7074791, "end": 7078143}, {"filename": "/src/src/vendor/symfony/config/Exception/FileLoaderImportCircularReferenceException.php", "start": 7078143, "end": 7078988}, {"filename": "/src/src/vendor/symfony/config/Exception/FileLocatorFileNotFoundException.php", "start": 7078988, "end": 7079774}, {"filename": "/src/src/vendor/symfony/config/Exception/LoaderLoadException.php", "start": 7079774, "end": 7083805}, {"filename": "/src/src/vendor/symfony/config/Exception/LogicException.php", "start": 7083805, "end": 7084139}, {"filename": "/src/src/vendor/symfony/config/FileLocator.php", "start": 7084139, "end": 7086902}, {"filename": "/src/src/vendor/symfony/config/FileLocatorInterface.php", "start": 7086902, "end": 7088042}, {"filename": "/src/src/vendor/symfony/config/LICENSE", "start": 7088042, "end": 7089110}, {"filename": "/src/src/vendor/symfony/config/Loader/DelegatingLoader.php", "start": 7089110, "end": 7090343}, {"filename": "/src/src/vendor/symfony/config/Loader/DirectoryAwareLoaderInterface.php", "start": 7090343, "end": 7090859}, {"filename": "/src/src/vendor/symfony/config/Loader/FileLoader.php", "start": 7090859, "end": 7097309}, {"filename": "/src/src/vendor/symfony/config/Loader/GlobFileLoader.php", "start": 7097309, "end": 7097990}, {"filename": "/src/src/vendor/symfony/config/Loader/Loader.php", "start": 7097990, "end": 7099829}, {"filename": "/src/src/vendor/symfony/config/Loader/LoaderInterface.php", "start": 7099829, "end": 7100879}, {"filename": "/src/src/vendor/symfony/config/Loader/LoaderResolver.php", "start": 7100879, "end": 7102443}, {"filename": "/src/src/vendor/symfony/config/Loader/LoaderResolverInterface.php", "start": 7102443, "end": 7103123}, {"filename": "/src/src/vendor/symfony/config/Loader/ParamConfigurator.php", "start": 7103123, "end": 7103694}, {"filename": "/src/src/vendor/symfony/config/README.md", "start": 7103694, "end": 7104290}, {"filename": "/src/src/vendor/symfony/config/Resource/ClassExistenceResource.php", "start": 7104290, "end": 7111232}, {"filename": "/src/src/vendor/symfony/config/Resource/ComposerResource.php", "start": 7111232, "end": 7112797}, {"filename": "/src/src/vendor/symfony/config/Resource/DirectoryResource.php", "start": 7112797, "end": 7115507}, {"filename": "/src/src/vendor/symfony/config/Resource/FileExistenceResource.php", "start": 7115507, "end": 7116691}, {"filename": "/src/src/vendor/symfony/config/Resource/FileResource.php", "start": 7116691, "end": 7118157}, {"filename": "/src/src/vendor/symfony/config/Resource/GlobResource.php", "start": 7118157, "end": 7126731}, {"filename": "/src/src/vendor/symfony/config/Resource/ReflectionClassResource.php", "start": 7126731, "end": 7133310}, {"filename": "/src/src/vendor/symfony/config/Resource/ResourceInterface.php", "start": 7133310, "end": 7134294}, {"filename": "/src/src/vendor/symfony/config/Resource/SelfCheckingResourceChecker.php", "start": 7134294, "end": 7135668}, {"filename": "/src/src/vendor/symfony/config/Resource/SelfCheckingResourceInterface.php", "start": 7135668, "end": 7136426}, {"filename": "/src/src/vendor/symfony/config/Resource/SkippingResourceChecker.php", "start": 7136426, "end": 7137406}, {"filename": "/src/src/vendor/symfony/config/ResourceCheckerConfigCache.php", "start": 7137406, "end": 7143797}, {"filename": "/src/src/vendor/symfony/config/ResourceCheckerConfigCacheFactory.php", "start": 7143797, "end": 7144782}, {"filename": "/src/src/vendor/symfony/config/ResourceCheckerInterface.php", "start": 7144782, "end": 7145970}, {"filename": "/src/src/vendor/symfony/config/Util/Exception/InvalidXmlException.php", "start": 7145970, "end": 7146520}, {"filename": "/src/src/vendor/symfony/config/Util/Exception/XmlParsingException.php", "start": 7146520, "end": 7146986}, {"filename": "/src/src/vendor/symfony/config/Util/XmlUtils.php", "start": 7146986, "end": 7156422}, {"filename": "/src/src/vendor/symfony/config/composer.json", "start": 7156422, "end": 7157619}, {"filename": "/src/src/vendor/symfony/console/Application.php", "start": 7157619, "end": 7205449}, {"filename": "/src/src/vendor/symfony/console/Attribute/AsCommand.php", "start": 7205449, "end": 7206841}, {"filename": "/src/src/vendor/symfony/console/CHANGELOG.md", "start": 7206841, "end": 7218481}, {"filename": "/src/src/vendor/symfony/console/CI/GithubActionReporter.php", "start": 7218481, "end": 7221594}, {"filename": "/src/src/vendor/symfony/console/Color.php", "start": 7221594, "end": 7225379}, {"filename": "/src/src/vendor/symfony/console/Command/Command.php", "start": 7225379, "end": 7246279}, {"filename": "/src/src/vendor/symfony/console/Command/CompleteCommand.php", "start": 7246279, "end": 7255236}, {"filename": "/src/src/vendor/symfony/console/Command/DumpCompletionCommand.php", "start": 7255236, "end": 7260440}, {"filename": "/src/src/vendor/symfony/console/Command/HelpCommand.php", "start": 7260440, "end": 7262922}, {"filename": "/src/src/vendor/symfony/console/Command/LazyCommand.php", "start": 7262922, "end": 7268646}, {"filename": "/src/src/vendor/symfony/console/Command/ListCommand.php", "start": 7268646, "end": 7271200}, {"filename": "/src/src/vendor/symfony/console/Command/LockableTrait.php", "start": 7271200, "end": 7273130}, {"filename": "/src/src/vendor/symfony/console/Command/SignalableCommandInterface.php", "start": 7273130, "end": 7273948}, {"filename": "/src/src/vendor/symfony/console/Command/TraceableCommand.php", "start": 7273948, "end": 7284252}, {"filename": "/src/src/vendor/symfony/console/CommandLoader/CommandLoaderInterface.php", "start": 7284252, "end": 7285062}, {"filename": "/src/src/vendor/symfony/console/CommandLoader/ContainerCommandLoader.php", "start": 7285062, "end": 7286432}, {"filename": "/src/src/vendor/symfony/console/CommandLoader/FactoryCommandLoader.php", "start": 7286432, "end": 7287695}, {"filename": "/src/src/vendor/symfony/console/Completion/CompletionInput.php", "start": 7287695, "end": 7295793}, {"filename": "/src/src/vendor/symfony/console/Completion/CompletionSuggestions.php", "start": 7295793, "end": 7297911}, {"filename": "/src/src/vendor/symfony/console/Completion/Output/BashCompletionOutput.php", "start": 7297911, "end": 7298895}, {"filename": "/src/src/vendor/symfony/console/Completion/Output/CompletionOutputInterface.php", "start": 7298895, "end": 7299599}, {"filename": "/src/src/vendor/symfony/console/Completion/Output/FishCompletionOutput.php", "start": 7299599, "end": 7300873}, {"filename": "/src/src/vendor/symfony/console/Completion/Output/ZshCompletionOutput.php", "start": 7300873, "end": 7302139}, {"filename": "/src/src/vendor/symfony/console/Completion/Suggestion.php", "start": 7302139, "end": 7302967}, {"filename": "/src/src/vendor/symfony/console/ConsoleEvents.php", "start": 7302967, "end": 7305141}, {"filename": "/src/src/vendor/symfony/console/Cursor.php", "start": 7305141, "end": 7309116}, {"filename": "/src/src/vendor/symfony/console/DataCollector/CommandDataCollector.php", "start": 7309116, "end": 7315745}, {"filename": "/src/src/vendor/symfony/console/Debug/CliRequest.php", "start": 7315745, "end": 7317622}, {"filename": "/src/src/vendor/symfony/console/DependencyInjection/AddConsoleCommandPass.php", "start": 7317622, "end": 7322825}, {"filename": "/src/src/vendor/symfony/console/Descriptor/ApplicationDescription.php", "start": 7322825, "end": 7326487}, {"filename": "/src/src/vendor/symfony/console/Descriptor/Descriptor.php", "start": 7326487, "end": 7329143}, {"filename": "/src/src/vendor/symfony/console/Descriptor/DescriptorInterface.php", "start": 7329143, "end": 7329706}, {"filename": "/src/src/vendor/symfony/console/Descriptor/JsonDescriptor.php", "start": 7329706, "end": 7335394}, {"filename": "/src/src/vendor/symfony/console/Descriptor/MarkdownDescriptor.php", "start": 7335394, "end": 7341781}, {"filename": "/src/src/vendor/symfony/console/Descriptor/ReStructuredTextDescriptor.php", "start": 7341781, "end": 7352449}, {"filename": "/src/src/vendor/symfony/console/Descriptor/TextDescriptor.php", "start": 7352449, "end": 7364737}, {"filename": "/src/src/vendor/symfony/console/Descriptor/XmlDescriptor.php", "start": 7364737, "end": 7374446}, {"filename": "/src/src/vendor/symfony/console/Event/ConsoleAlarmEvent.php", "start": 7374446, "end": 7375596}, {"filename": "/src/src/vendor/symfony/console/Event/ConsoleCommandEvent.php", "start": 7375596, "end": 7376922}, {"filename": "/src/src/vendor/symfony/console/Event/ConsoleErrorEvent.php", "start": 7376922, "end": 7378382}, {"filename": "/src/src/vendor/symfony/console/Event/ConsoleEvent.php", "start": 7378382, "end": 7379598}, {"filename": "/src/src/vendor/symfony/console/Event/ConsoleSignalEvent.php", "start": 7379598, "end": 7380940}, {"filename": "/src/src/vendor/symfony/console/Event/ConsoleTerminateEvent.php", "start": 7380940, "end": 7382185}, {"filename": "/src/src/vendor/symfony/console/EventListener/ErrorListener.php", "start": 7382185, "end": 7384858}, {"filename": "/src/src/vendor/symfony/console/Exception/CommandNotFoundException.php", "start": 7384858, "end": 7386050}, {"filename": "/src/src/vendor/symfony/console/Exception/ExceptionInterface.php", "start": 7386050, "end": 7386475}, {"filename": "/src/src/vendor/symfony/console/Exception/InvalidArgumentException.php", "start": 7386475, "end": 7386921}, {"filename": "/src/src/vendor/symfony/console/Exception/InvalidOptionException.php", "start": 7386921, "end": 7387438}, {"filename": "/src/src/vendor/symfony/console/Exception/LogicException.php", "start": 7387438, "end": 7387864}, {"filename": "/src/src/vendor/symfony/console/Exception/MissingInputException.php", "start": 7387864, "end": 7388358}, {"filename": "/src/src/vendor/symfony/console/Exception/NamespaceNotFoundException.php", "start": 7388358, "end": 7388832}, {"filename": "/src/src/vendor/symfony/console/Exception/RunCommandFailedException.php", "start": 7388832, "end": 7389681}, {"filename": "/src/src/vendor/symfony/console/Exception/RuntimeException.php", "start": 7389681, "end": 7390111}, {"filename": "/src/src/vendor/symfony/console/Formatter/NullOutputFormatter.php", "start": 7390111, "end": 7391269}, {"filename": "/src/src/vendor/symfony/console/Formatter/NullOutputFormatterStyle.php", "start": 7391269, "end": 7392222}, {"filename": "/src/src/vendor/symfony/console/Formatter/OutputFormatter.php", "start": 7392222, "end": 7400296}, {"filename": "/src/src/vendor/symfony/console/Formatter/OutputFormatterInterface.php", "start": 7400296, "end": 7401555}, {"filename": "/src/src/vendor/symfony/console/Formatter/OutputFormatterStyle.php", "start": 7401555, "end": 7404292}, {"filename": "/src/src/vendor/symfony/console/Formatter/OutputFormatterStyleInterface.php", "start": 7404292, "end": 7405403}, {"filename": "/src/src/vendor/symfony/console/Formatter/OutputFormatterStyleStack.php", "start": 7405403, "end": 7407948}, {"filename": "/src/src/vendor/symfony/console/Formatter/WrappableOutputFormatterInterface.php", "start": 7407948, "end": 7408641}, {"filename": "/src/src/vendor/symfony/console/Helper/DebugFormatterHelper.php", "start": 7408641, "end": 7411969}, {"filename": "/src/src/vendor/symfony/console/Helper/DescriptorHelper.php", "start": 7411969, "end": 7414586}, {"filename": "/src/src/vendor/symfony/console/Helper/Dumper.php", "start": 7414586, "end": 7416260}, {"filename": "/src/src/vendor/symfony/console/Helper/FormatterHelper.php", "start": 7416260, "end": 7418498}, {"filename": "/src/src/vendor/symfony/console/Helper/Helper.php", "start": 7418498, "end": 7422949}, {"filename": "/src/src/vendor/symfony/console/Helper/HelperInterface.php", "start": 7422949, "end": 7423748}, {"filename": "/src/src/vendor/symfony/console/Helper/HelperSet.php", "start": 7423748, "end": 7425585}, {"filename": "/src/src/vendor/symfony/console/Helper/InputAwareHelper.php", "start": 7425585, "end": 7426316}, {"filename": "/src/src/vendor/symfony/console/Helper/OutputWrapper.php", "start": 7426316, "end": 7429327}, {"filename": "/src/src/vendor/symfony/console/Helper/ProcessHelper.php", "start": 7429327, "end": 7434156}, {"filename": "/src/src/vendor/symfony/console/Helper/ProgressBar.php", "start": 7434156, "end": 7455001}, {"filename": "/src/src/vendor/symfony/console/Helper/ProgressIndicator.php", "start": 7455001, "end": 7462665}, {"filename": "/src/src/vendor/symfony/console/Helper/QuestionHelper.php", "start": 7462665, "end": 7481938}, {"filename": "/src/src/vendor/symfony/console/Helper/SymfonyQuestionHelper.php", "start": 7481938, "end": 7485161}, {"filename": "/src/src/vendor/symfony/console/Helper/Table.php", "start": 7485161, "end": 7517302}, {"filename": "/src/src/vendor/symfony/console/Helper/TableCell.php", "start": 7517302, "end": 7519030}, {"filename": "/src/src/vendor/symfony/console/Helper/TableCellStyle.php", "start": 7519030, "end": 7521251}, {"filename": "/src/src/vendor/symfony/console/Helper/TableRows.php", "start": 7521251, "end": 7521787}, {"filename": "/src/src/vendor/symfony/console/Helper/TableSeparator.php", "start": 7521787, "end": 7522318}, {"filename": "/src/src/vendor/symfony/console/Helper/TableStyle.php", "start": 7522318, "end": 7535078}, {"filename": "/src/src/vendor/symfony/console/Input/ArgvInput.php", "start": 7535078, "end": 7548541}, {"filename": "/src/src/vendor/symfony/console/Input/ArrayInput.php", "start": 7548541, "end": 7554126}, {"filename": "/src/src/vendor/symfony/console/Input/Input.php", "start": 7554126, "end": 7559161}, {"filename": "/src/src/vendor/symfony/console/Input/InputArgument.php", "start": 7559161, "end": 7564297}, {"filename": "/src/src/vendor/symfony/console/Input/InputAwareInterface.php", "start": 7564297, "end": 7564873}, {"filename": "/src/src/vendor/symfony/console/Input/InputDefinition.php", "start": 7564873, "end": 7576677}, {"filename": "/src/src/vendor/symfony/console/Input/InputInterface.php", "start": 7576677, "end": 7581217}, {"filename": "/src/src/vendor/symfony/console/Input/InputOption.php", "start": 7581217, "end": 7589723}, {"filename": "/src/src/vendor/symfony/console/Input/StreamableInputInterface.php", "start": 7589723, "end": 7590602}, {"filename": "/src/src/vendor/symfony/console/Input/StringInput.php", "start": 7590602, "end": 7593253}, {"filename": "/src/src/vendor/symfony/console/LICENSE", "start": 7593253, "end": 7594321}, {"filename": "/src/src/vendor/symfony/console/Logger/ConsoleLogger.php", "start": 7594321, "end": 7598520}, {"filename": "/src/src/vendor/symfony/console/Messenger/RunCommandContext.php", "start": 7598520, "end": 7599070}, {"filename": "/src/src/vendor/symfony/console/Messenger/RunCommandMessage.php", "start": 7599070, "end": 7600011}, {"filename": "/src/src/vendor/symfony/console/Messenger/RunCommandMessageHandler.php", "start": 7600011, "end": 7601602}, {"filename": "/src/src/vendor/symfony/console/Output/AnsiColorMode.php", "start": 7601602, "end": 7605094}, {"filename": "/src/src/vendor/symfony/console/Output/BufferedOutput.php", "start": 7605094, "end": 7605902}, {"filename": "/src/src/vendor/symfony/console/Output/ConsoleOutput.php", "start": 7605902, "end": 7610658}, {"filename": "/src/src/vendor/symfony/console/Output/ConsoleOutputInterface.php", "start": 7610658, "end": 7611443}, {"filename": "/src/src/vendor/symfony/console/Output/ConsoleSectionOutput.php", "start": 7611443, "end": 7619844}, {"filename": "/src/src/vendor/symfony/console/Output/NullOutput.php", "start": 7619844, "end": 7621850}, {"filename": "/src/src/vendor/symfony/console/Output/Output.php", "start": 7621850, "end": 7626131}, {"filename": "/src/src/vendor/symfony/console/Output/OutputInterface.php", "start": 7626131, "end": 7628933}, {"filename": "/src/src/vendor/symfony/console/Output/StreamOutput.php", "start": 7628933, "end": 7633137}, {"filename": "/src/src/vendor/symfony/console/Output/TrimmedBufferOutput.php", "start": 7633137, "end": 7634690}, {"filename": "/src/src/vendor/symfony/console/Question/ChoiceQuestion.php", "start": 7634690, "end": 7639811}, {"filename": "/src/src/vendor/symfony/console/Question/ConfirmationQuestion.php", "start": 7639811, "end": 7641326}, {"filename": "/src/src/vendor/symfony/console/Question/Question.php", "start": 7641326, "end": 7648210}, {"filename": "/src/src/vendor/symfony/console/README.md", "start": 7648210, "end": 7648992}, {"filename": "/src/src/vendor/symfony/console/Resources/bin/hiddeninput.exe", "start": 7648992, "end": 7658208}, {"filename": "/src/src/vendor/symfony/console/Resources/completion.bash", "start": 7658208, "end": 7661276}, {"filename": "/src/src/vendor/symfony/console/Resources/completion.fish", "start": 7661276, "end": 7661932}, {"filename": "/src/src/vendor/symfony/console/Resources/completion.zsh", "start": 7661932, "end": 7664759}, {"filename": "/src/src/vendor/symfony/console/SignalRegistry/SignalMap.php", "start": 7664759, "end": 7665685}, {"filename": "/src/src/vendor/symfony/console/SignalRegistry/SignalRegistry.php", "start": 7665685, "end": 7667227}, {"filename": "/src/src/vendor/symfony/console/SingleCommandApplication.php", "start": 7667227, "end": 7669018}, {"filename": "/src/src/vendor/symfony/console/Style/OutputStyle.php", "start": 7669018, "end": 7671966}, {"filename": "/src/src/vendor/symfony/console/Style/StyleInterface.php", "start": 7671966, "end": 7674386}, {"filename": "/src/src/vendor/symfony/console/Style/SymfonyStyle.php", "start": 7674386, "end": 7688982}, {"filename": "/src/src/vendor/symfony/console/Terminal.php", "start": 7688982, "end": 7695752}, {"filename": "/src/src/vendor/symfony/console/Tester/ApplicationTester.php", "start": 7695752, "end": 7698358}, {"filename": "/src/src/vendor/symfony/console/Tester/CommandCompletionTester.php", "start": 7698358, "end": 7699855}, {"filename": "/src/src/vendor/symfony/console/Tester/CommandTester.php", "start": 7699855, "end": 7702183}, {"filename": "/src/src/vendor/symfony/console/Tester/Constraint/CommandIsSuccessful.php", "start": 7702183, "end": 7703240}, {"filename": "/src/src/vendor/symfony/console/Tester/TesterTrait.php", "start": 7703240, "end": 7708923}, {"filename": "/src/src/vendor/symfony/console/composer.json", "start": 7708923, "end": 7710588}, {"filename": "/src/src/vendor/symfony/dependency-injection/Alias.php", "start": 7710588, "end": 7713484}, {"filename": "/src/src/vendor/symfony/dependency-injection/Argument/AbstractArgument.php", "start": 7713484, "end": 7714428}, {"filename": "/src/src/vendor/symfony/dependency-injection/Argument/ArgumentInterface.php", "start": 7714428, "end": 7714974}, {"filename": "/src/src/vendor/symfony/dependency-injection/Argument/BoundArgument.php", "start": 7714974, "end": 7716366}, {"filename": "/src/src/vendor/symfony/dependency-injection/Argument/IteratorArgument.php", "start": 7716366, "end": 7717146}, {"filename": "/src/src/vendor/symfony/dependency-injection/Argument/LazyClosure.php", "start": 7717146, "end": 7720470}, {"filename": "/src/src/vendor/symfony/dependency-injection/Argument/RewindableGenerator.php", "start": 7720470, "end": 7721404}, {"filename": "/src/src/vendor/symfony/dependency-injection/Argument/ServiceClosureArgument.php", "start": 7721404, "end": 7722414}, {"filename": "/src/src/vendor/symfony/dependency-injection/Argument/ServiceLocator.php", "start": 7722414, "end": 7723535}, {"filename": "/src/src/vendor/symfony/dependency-injection/Argument/ServiceLocatorArgument.php", "start": 7723535, "end": 7724676}, {"filename": "/src/src/vendor/symfony/dependency-injection/Argument/TaggedIteratorArgument.php", "start": 7724676, "end": 7727877}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/AsAlias.php", "start": 7727877, "end": 7728721}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/AsDecorator.php", "start": 7728721, "end": 7729724}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/AsTaggedItem.php", "start": 7729724, "end": 7730640}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/Autoconfigure.php", "start": 7730640, "end": 7732982}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/AutoconfigureTag.php", "start": 7732982, "end": 7733893}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/Autowire.php", "start": 7733893, "end": 7737281}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/AutowireCallable.php", "start": 7737281, "end": 7739422}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/AutowireDecorated.php", "start": 7739422, "end": 7739854}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/AutowireInline.php", "start": 7739854, "end": 7742126}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/AutowireIterator.php", "start": 7742126, "end": 7744038}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/AutowireLocator.php", "start": 7744038, "end": 7748176}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/AutowireMethodOf.php", "start": 7748176, "end": 7749369}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/AutowireServiceClosure.php", "start": 7749369, "end": 7750186}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/Exclude.php", "start": 7750186, "end": 7750673}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/Lazy.php", "start": 7750673, "end": 7751150}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/TaggedIterator.php", "start": 7751150, "end": 7753121}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/TaggedLocator.php", "start": 7753121, "end": 7755084}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/Target.php", "start": 7755084, "end": 7757417}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/When.php", "start": 7757417, "end": 7758208}, {"filename": "/src/src/vendor/symfony/dependency-injection/Attribute/WhenNot.php", "start": 7758208, "end": 7758888}, {"filename": "/src/src/vendor/symfony/dependency-injection/CHANGELOG.md", "start": 7758888, "end": 7780170}, {"filename": "/src/src/vendor/symfony/dependency-injection/ChildDefinition.php", "start": 7780170, "end": 7782753}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/AbstractRecursivePass.php", "start": 7782753, "end": 7793302}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/AliasDeprecatedPublicServicesPass.php", "start": 7793302, "end": 7795550}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/AnalyzeServiceReferencesPass.php", "start": 7795550, "end": 7802348}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/AttributeAutoconfigurationPass.php", "start": 7802348, "end": 7810655}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/AutoAliasServicePass.php", "start": 7810655, "end": 7812081}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/AutowireAsDecoratorPass.php", "start": 7812081, "end": 7813714}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/AutowirePass.php", "start": 7813714, "end": 7845811}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/AutowireRequiredMethodsPass.php", "start": 7845811, "end": 7848900}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/AutowireRequiredPropertiesPass.php", "start": 7848900, "end": 7850899}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/CheckAliasValidityPass.php", "start": 7850899, "end": 7852904}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/CheckArgumentsValidityPass.php", "start": 7852904, "end": 7857194}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/CheckCircularReferencesPass.php", "start": 7857194, "end": 7860166}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/CheckDefinitionValidityPass.php", "start": 7860166, "end": 7865223}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/CheckExceptionOnInvalidReferenceBehaviorPass.php", "start": 7865223, "end": 7869937}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/CheckReferenceValidityPass.php", "start": 7869937, "end": 7871469}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/CheckTypeDeclarationsPass.php", "start": 7871469, "end": 7883952}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/Compiler.php", "start": 7883952, "end": 7886588}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/CompilerPassInterface.php", "start": 7886588, "end": 7887283}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/DecoratorServicePass.php", "start": 7887283, "end": 7892733}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/DefinitionErrorExceptionPass.php", "start": 7892733, "end": 7895998}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ExtensionCompilerPass.php", "start": 7895998, "end": 7896859}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/InlineServiceDefinitionsPass.php", "start": 7896859, "end": 7904901}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/MergeExtensionConfigurationPass.php", "start": 7904901, "end": 7913565}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/PassConfig.php", "start": 7913565, "end": 7921458}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/PriorityTaggedServiceTrait.php", "start": 7921458, "end": 7928620}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/RegisterAutoconfigureAttributesPass.php", "start": 7928620, "end": 7932436}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/RegisterEnvVarProcessorsPass.php", "start": 7932436, "end": 7935475}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/RegisterReverseContainerPass.php", "start": 7935475, "end": 7937495}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/RegisterServiceSubscribersPass.php", "start": 7937495, "end": 7944366}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/RemoveAbstractDefinitionsPass.php", "start": 7944366, "end": 7945281}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/RemoveBuildParametersPass.php", "start": 7945281, "end": 7946451}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/RemovePrivateAliasesPass.php", "start": 7946451, "end": 7947572}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/RemoveUnusedDefinitionsPass.php", "start": 7947572, "end": 7950462}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ReplaceAliasByActualDefinitionPass.php", "start": 7950462, "end": 7954308}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveAutowireInlineAttributesPass.php", "start": 7954308, "end": 7958931}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveBindingsPass.php", "start": 7958931, "end": 7969618}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveChildDefinitionsPass.php", "start": 7969618, "end": 7977243}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveClassPass.php", "start": 7977243, "end": 7978774}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveDecoratorStackPass.php", "start": 7978774, "end": 7983112}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveEnvPlaceholdersPass.php", "start": 7983112, "end": 7984524}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveFactoryClassPass.php", "start": 7984524, "end": 7985759}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveHotPathPass.php", "start": 7985759, "end": 7988027}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveInstanceofConditionalsPass.php", "start": 7988027, "end": 7995238}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveInvalidReferencesPass.php", "start": 7995238, "end": 8000716}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveNamedArgumentsPass.php", "start": 8000716, "end": 8006791}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveNoPreloadPass.php", "start": 8006791, "end": 8009854}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveParameterPlaceHoldersPass.php", "start": 8009854, "end": 8013030}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveReferencesToAliasesPass.php", "start": 8013030, "end": 8015774}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveServiceSubscribersPass.php", "start": 8015774, "end": 8017480}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ResolveTaggedIteratorArgumentPass.php", "start": 8017480, "end": 8018591}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ServiceLocatorTagPass.php", "start": 8018591, "end": 8023420}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ServiceReferenceGraph.php", "start": 8023420, "end": 8026102}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ServiceReferenceGraphEdge.php", "start": 8026102, "end": 8027916}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ServiceReferenceGraphNode.php", "start": 8027916, "end": 8030016}, {"filename": "/src/src/vendor/symfony/dependency-injection/Compiler/ValidateEnvPlaceholdersPass.php", "start": 8030016, "end": 8034769}, {"filename": "/src/src/vendor/symfony/dependency-injection/Config/ContainerParametersResource.php", "start": 8034769, "end": 8035701}, {"filename": "/src/src/vendor/symfony/dependency-injection/Config/ContainerParametersResourceChecker.php", "start": 8035701, "end": 8036900}, {"filename": "/src/src/vendor/symfony/dependency-injection/Container.php", "start": 8036900, "end": 8050996}, {"filename": "/src/src/vendor/symfony/dependency-injection/ContainerBuilder.php", "start": 8050996, "end": 8114258}, {"filename": "/src/src/vendor/symfony/dependency-injection/ContainerInterface.php", "start": 8114258, "end": 8116511}, {"filename": "/src/src/vendor/symfony/dependency-injection/Definition.php", "start": 8116511, "end": 8136842}, {"filename": "/src/src/vendor/symfony/dependency-injection/Dumper/Dumper.php", "start": 8136842, "end": 8137463}, {"filename": "/src/src/vendor/symfony/dependency-injection/Dumper/DumperInterface.php", "start": 8137463, "end": 8138046}, {"filename": "/src/src/vendor/symfony/dependency-injection/Dumper/GraphvizDumper.php", "start": 8138046, "end": 8147324}, {"filename": "/src/src/vendor/symfony/dependency-injection/Dumper/PhpDumper.php", "start": 8147324, "end": 8246096}, {"filename": "/src/src/vendor/symfony/dependency-injection/Dumper/Preloader.php", "start": 8246096, "end": 8250146}, {"filename": "/src/src/vendor/symfony/dependency-injection/Dumper/XmlDumper.php", "start": 8250146, "end": 8268611}, {"filename": "/src/src/vendor/symfony/dependency-injection/Dumper/YamlDumper.php", "start": 8268611, "end": 8282704}, {"filename": "/src/src/vendor/symfony/dependency-injection/EnvVarLoaderInterface.php", "start": 8282704, "end": 8283358}, {"filename": "/src/src/vendor/symfony/dependency-injection/EnvVarProcessor.php", "start": 8283358, "end": 8297733}, {"filename": "/src/src/vendor/symfony/dependency-injection/EnvVarProcessorInterface.php", "start": 8297733, "end": 8299006}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/AutoconfigureFailedException.php", "start": 8299006, "end": 8299377}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/AutowiringFailedException.php", "start": 8299377, "end": 8301377}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/BadMethodCallException.php", "start": 8301377, "end": 8301845}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/EmptyParameterValueException.php", "start": 8301845, "end": 8302438}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/EnvNotFoundException.php", "start": 8302438, "end": 8302924}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/EnvParameterException.php", "start": 8302924, "end": 8303702}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/ExceptionInterface.php", "start": 8303702, "end": 8304312}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/InvalidArgumentException.php", "start": 8304312, "end": 8304849}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/InvalidParameterTypeException.php", "start": 8304849, "end": 8306189}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/LogicException.php", "start": 8306189, "end": 8306633}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/OutOfBoundsException.php", "start": 8306633, "end": 8307095}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/ParameterCircularReferenceException.php", "start": 8307095, "end": 8307997}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/ParameterNotFoundException.php", "start": 8307997, "end": 8312225}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/RuntimeException.php", "start": 8312225, "end": 8312732}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/ServiceCircularReferenceException.php", "start": 8312732, "end": 8313697}, {"filename": "/src/src/vendor/symfony/dependency-injection/Exception/ServiceNotFoundException.php", "start": 8313697, "end": 8315416}, {"filename": "/src/src/vendor/symfony/dependency-injection/ExpressionLanguage.php", "start": 8315416, "end": 8316495}, {"filename": "/src/src/vendor/symfony/dependency-injection/ExpressionLanguageProvider.php", "start": 8316495, "end": 8318631}, {"filename": "/src/src/vendor/symfony/dependency-injection/Extension/AbstractExtension.php", "start": 8318631, "end": 8320820}, {"filename": "/src/src/vendor/symfony/dependency-injection/Extension/ConfigurableExtensionInterface.php", "start": 8320820, "end": 8321820}, {"filename": "/src/src/vendor/symfony/dependency-injection/Extension/ConfigurationExtensionInterface.php", "start": 8321820, "end": 8322628}, {"filename": "/src/src/vendor/symfony/dependency-injection/Extension/Extension.php", "start": 8322628, "end": 8326735}, {"filename": "/src/src/vendor/symfony/dependency-injection/Extension/ExtensionInterface.php", "start": 8326735, "end": 8328086}, {"filename": "/src/src/vendor/symfony/dependency-injection/Extension/ExtensionTrait.php", "start": 8328086, "end": 8331101}, {"filename": "/src/src/vendor/symfony/dependency-injection/Extension/PrependExtensionInterface.php", "start": 8331101, "end": 8331668}, {"filename": "/src/src/vendor/symfony/dependency-injection/LICENSE", "start": 8331668, "end": 8332736}, {"filename": "/src/src/vendor/symfony/dependency-injection/LazyProxy/Instantiator/InstantiatorInterface.php", "start": 8332736, "end": 8333822}, {"filename": "/src/src/vendor/symfony/dependency-injection/LazyProxy/Instantiator/LazyServiceInstantiator.php", "start": 8333822, "end": 8335233}, {"filename": "/src/src/vendor/symfony/dependency-injection/LazyProxy/Instantiator/RealServiceInstantiator.php", "start": 8335233, "end": 8336057}, {"filename": "/src/src/vendor/symfony/dependency-injection/LazyProxy/PhpDumper/DumperInterface.php", "start": 8336057, "end": 8337316}, {"filename": "/src/src/vendor/symfony/dependency-injection/LazyProxy/PhpDumper/LazyServiceDumper.php", "start": 8337316, "end": 8343369}, {"filename": "/src/src/vendor/symfony/dependency-injection/LazyProxy/PhpDumper/NullDumper.php", "start": 8343369, "end": 8344356}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/ClosureLoader.php", "start": 8344356, "end": 8345416}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/AbstractConfigurator.php", "start": 8345416, "end": 8349469}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/AbstractServiceConfigurator.php", "start": 8349469, "end": 8352425}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/AliasConfigurator.php", "start": 8352425, "end": 8353151}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/ClosureReferenceConfigurator.php", "start": 8353151, "end": 8353528}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/ContainerConfigurator.php", "start": 8353528, "end": 8359609}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/DefaultsConfigurator.php", "start": 8359609, "end": 8361910}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/EnvConfigurator.php", "start": 8361910, "end": 8366062}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/FromCallableConfigurator.php", "start": 8366062, "end": 8367206}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/InlineServiceConfigurator.php", "start": 8367206, "end": 8368286}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/InstanceofConfigurator.php", "start": 8368286, "end": 8369555}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/ParametersConfigurator.php", "start": 8369555, "end": 8370863}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/PrototypeConfigurator.php", "start": 8370863, "end": 8373409}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/ReferenceConfigurator.php", "start": 8373409, "end": 8374840}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/ServiceConfigurator.php", "start": 8374840, "end": 8376809}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/ServicesConfigurator.php", "start": 8376809, "end": 8383826}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/AbstractTrait.php", "start": 8383826, "end": 8384477}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/ArgumentTrait.php", "start": 8384477, "end": 8385417}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/AutoconfigureTrait.php", "start": 8385417, "end": 8386225}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/AutowireTrait.php", "start": 8386225, "end": 8386799}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/BindTrait.php", "start": 8386799, "end": 8388366}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/CallTrait.php", "start": 8388366, "end": 8389438}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/ClassTrait.php", "start": 8389438, "end": 8389985}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/ConfiguratorTrait.php", "start": 8389985, "end": 8390752}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/ConstructorTrait.php", "start": 8390752, "end": 8391335}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/DecorateTrait.php", "start": 8391335, "end": 8392439}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/DeprecateTrait.php", "start": 8392439, "end": 8393533}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/FactoryTrait.php", "start": 8393533, "end": 8394853}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/FileTrait.php", "start": 8394853, "end": 8395422}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/FromCallableTrait.php", "start": 8395422, "end": 8397916}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/LazyTrait.php", "start": 8397916, "end": 8398737}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/ParentTrait.php", "start": 8398737, "end": 8400196}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/PropertyTrait.php", "start": 8400196, "end": 8400801}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/PublicTrait.php", "start": 8400801, "end": 8401459}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/ShareTrait.php", "start": 8401459, "end": 8402032}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/SyntheticTrait.php", "start": 8402032, "end": 8402697}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/Configurator/Traits/TagTrait.php", "start": 8402697, "end": 8404191}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/DirectoryLoader.php", "start": 8404191, "end": 8405480}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/FileLoader.php", "start": 8405480, "end": 8422699}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/GlobFileLoader.php", "start": 8422699, "end": 8423549}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/IniFileLoader.php", "start": 8423549, "end": 8426778}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/PhpFileLoader.php", "start": 8426778, "end": 8435939}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/UndefinedExtensionHandler.php", "start": 8435939, "end": 8437670}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/XmlFileLoader.php", "start": 8437670, "end": 8477698}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/YamlFileLoader.php", "start": 8477698, "end": 8520608}, {"filename": "/src/src/vendor/symfony/dependency-injection/Loader/schema/dic/services/services-1.0.xsd", "start": 8520608, "end": 8537830}, {"filename": "/src/src/vendor/symfony/dependency-injection/Parameter.php", "start": 8537830, "end": 8538400}, {"filename": "/src/src/vendor/symfony/dependency-injection/ParameterBag/ContainerBag.php", "start": 8538400, "end": 8539338}, {"filename": "/src/src/vendor/symfony/dependency-injection/ParameterBag/ContainerBagInterface.php", "start": 8539338, "end": 8540729}, {"filename": "/src/src/vendor/symfony/dependency-injection/ParameterBag/EnvPlaceholderParameterBag.php", "start": 8540729, "end": 8545903}, {"filename": "/src/src/vendor/symfony/dependency-injection/ParameterBag/FrozenParameterBag.php", "start": 8545903, "end": 8547957}, {"filename": "/src/src/vendor/symfony/dependency-injection/ParameterBag/ParameterBag.php", "start": 8547957, "end": 8557913}, {"filename": "/src/src/vendor/symfony/dependency-injection/ParameterBag/ParameterBagInterface.php", "start": 8557913, "end": 8560290}, {"filename": "/src/src/vendor/symfony/dependency-injection/README.md", "start": 8560290, "end": 8560869}, {"filename": "/src/src/vendor/symfony/dependency-injection/Reference.php", "start": 8560869, "end": 8561714}, {"filename": "/src/src/vendor/symfony/dependency-injection/ReverseContainer.php", "start": 8561714, "end": 8563964}, {"filename": "/src/src/vendor/symfony/dependency-injection/ServiceLocator.php", "start": 8563964, "end": 8569549}, {"filename": "/src/src/vendor/symfony/dependency-injection/StaticEnvVarLoader.php", "start": 8569549, "end": 8570141}, {"filename": "/src/src/vendor/symfony/dependency-injection/TaggedContainerInterface.php", "start": 8570141, "end": 8570829}, {"filename": "/src/src/vendor/symfony/dependency-injection/TypedReference.php", "start": 8570829, "end": 8572306}, {"filename": "/src/src/vendor/symfony/dependency-injection/Variable.php", "start": 8572306, "end": 8572961}, {"filename": "/src/src/vendor/symfony/dependency-injection/composer.json", "start": 8572961, "end": 8574341}, {"filename": "/src/src/vendor/symfony/deprecation-contracts/CHANGELOG.md", "start": 8574341, "end": 8574498}, {"filename": "/src/src/vendor/symfony/deprecation-contracts/LICENSE", "start": 8574498, "end": 8575566}, {"filename": "/src/src/vendor/symfony/deprecation-contracts/README.md", "start": 8575566, "end": 8576758}, {"filename": "/src/src/vendor/symfony/deprecation-contracts/composer.json", "start": 8576758, "end": 8577599}, {"filename": "/src/src/vendor/symfony/deprecation-contracts/function.php", "start": 8577599, "end": 8578613}, {"filename": "/src/src/vendor/symfony/filesystem/CHANGELOG.md", "start": 8578613, "end": 8580286}, {"filename": "/src/src/vendor/symfony/filesystem/Exception/ExceptionInterface.php", "start": 8580286, "end": 8580750}, {"filename": "/src/src/vendor/symfony/filesystem/Exception/FileNotFoundException.php", "start": 8580750, "end": 8581723}, {"filename": "/src/src/vendor/symfony/filesystem/Exception/IOException.php", "start": 8581723, "end": 8582646}, {"filename": "/src/src/vendor/symfony/filesystem/Exception/IOExceptionInterface.php", "start": 8582646, "end": 8583290}, {"filename": "/src/src/vendor/symfony/filesystem/Exception/InvalidArgumentException.php", "start": 8583290, "end": 8583753}, {"filename": "/src/src/vendor/symfony/filesystem/Exception/RuntimeException.php", "start": 8583753, "end": 8584179}, {"filename": "/src/src/vendor/symfony/filesystem/Filesystem.php", "start": 8584179, "end": 8614267}, {"filename": "/src/src/vendor/symfony/filesystem/LICENSE", "start": 8614267, "end": 8615335}, {"filename": "/src/src/vendor/symfony/filesystem/Path.php", "start": 8615335, "end": 8641352}, {"filename": "/src/src/vendor/symfony/filesystem/README.md", "start": 8641352, "end": 8641845}, {"filename": "/src/src/vendor/symfony/filesystem/composer.json", "start": 8641845, "end": 8642685}, {"filename": "/src/src/vendor/symfony/polyfill-ctype/Ctype.php", "start": 8642685, "end": 8649272}, {"filename": "/src/src/vendor/symfony/polyfill-ctype/LICENSE", "start": 8649272, "end": 8650340}, {"filename": "/src/src/vendor/symfony/polyfill-ctype/README.md", "start": 8650340, "end": 8650690}, {"filename": "/src/src/vendor/symfony/polyfill-ctype/bootstrap.php", "start": 8650690, "end": 8652290}, {"filename": "/src/src/vendor/symfony/polyfill-ctype/bootstrap80.php", "start": 8652290, "end": 8653940}, {"filename": "/src/src/vendor/symfony/polyfill-ctype/composer.json", "start": 8653940, "end": 8654901}, {"filename": "/src/src/vendor/symfony/polyfill-intl-grapheme/Grapheme.php", "start": 8654901, "end": 8664685}, {"filename": "/src/src/vendor/symfony/polyfill-intl-grapheme/LICENSE", "start": 8664685, "end": 8665753}, {"filename": "/src/src/vendor/symfony/polyfill-intl-grapheme/README.md", "start": 8665753, "end": 8667364}, {"filename": "/src/src/vendor/symfony/polyfill-intl-grapheme/bootstrap.php", "start": 8667364, "end": 8669641}, {"filename": "/src/src/vendor/symfony/polyfill-intl-grapheme/bootstrap80.php", "start": 8669641, "end": 8672304}, {"filename": "/src/src/vendor/symfony/polyfill-intl-grapheme/composer.json", "start": 8672304, "end": 8673256}, {"filename": "/src/src/vendor/symfony/polyfill-intl-normalizer/LICENSE", "start": 8673256, "end": 8674324}, {"filename": "/src/src/vendor/symfony/polyfill-intl-normalizer/Normalizer.php", "start": 8674324, "end": 8683896}, {"filename": "/src/src/vendor/symfony/polyfill-intl-normalizer/README.md", "start": 8683896, "end": 8684328}, {"filename": "/src/src/vendor/symfony/polyfill-intl-normalizer/Resources/stubs/Normalizer.php", "start": 8684328, "end": 8684732}, {"filename": "/src/src/vendor/symfony/polyfill-intl-normalizer/Resources/unidata/canonicalComposition.php", "start": 8684732, "end": 8702367}, {"filename": "/src/src/vendor/symfony/polyfill-intl-normalizer/Resources/unidata/canonicalDecomposition.php", "start": 8702367, "end": 8741402}, {"filename": "/src/src/vendor/symfony/polyfill-intl-normalizer/Resources/unidata/combiningClass.php", "start": 8741402, "end": 8755038}, {"filename": "/src/src/vendor/symfony/polyfill-intl-normalizer/Resources/unidata/compatibilityDecomposition.php", "start": 8755038, "end": 8821965}, {"filename": "/src/src/vendor/symfony/polyfill-intl-normalizer/bootstrap.php", "start": 8821965, "end": 8822690}, {"filename": "/src/src/vendor/symfony/polyfill-intl-normalizer/bootstrap80.php", "start": 8822690, "end": 8823409}, {"filename": "/src/src/vendor/symfony/polyfill-intl-normalizer/composer.json", "start": 8823409, "end": 8824428}, {"filename": "/src/src/vendor/symfony/polyfill-mbstring/LICENSE", "start": 8824428, "end": 8825496}, {"filename": "/src/src/vendor/symfony/polyfill-mbstring/Mbstring.php", "start": 8825496, "end": 8861667}, {"filename": "/src/src/vendor/symfony/polyfill-mbstring/README.md", "start": 8861667, "end": 8862037}, {"filename": "/src/src/vendor/symfony/polyfill-mbstring/Resources/unidata/caseFolding.php", "start": 8862037, "end": 8864438}, {"filename": "/src/src/vendor/symfony/polyfill-mbstring/Resources/unidata/lowerCase.php", "start": 8864438, "end": 8888977}, {"filename": "/src/src/vendor/symfony/polyfill-mbstring/Resources/unidata/titleCaseRegexp.php", "start": 8888977, "end": 8895178}, {"filename": "/src/src/vendor/symfony/polyfill-mbstring/Resources/unidata/upperCase.php", "start": 8895178, "end": 8921500}, {"filename": "/src/src/vendor/symfony/polyfill-mbstring/bootstrap.php", "start": 8921500, "end": 8929963}, {"filename": "/src/src/vendor/symfony/polyfill-mbstring/bootstrap80.php", "start": 8929963, "end": 8939977}, {"filename": "/src/src/vendor/symfony/polyfill-mbstring/composer.json", "start": 8939977, "end": 8940987}, {"filename": "/src/src/vendor/symfony/service-contracts/Attribute/Required.php", "start": 8940987, "end": 8941644}, {"filename": "/src/src/vendor/symfony/service-contracts/Attribute/SubscribedService.php", "start": 8941644, "end": 8943133}, {"filename": "/src/src/vendor/symfony/service-contracts/CHANGELOG.md", "start": 8943133, "end": 8943290}, {"filename": "/src/src/vendor/symfony/service-contracts/LICENSE", "start": 8943290, "end": 8944358}, {"filename": "/src/src/vendor/symfony/service-contracts/README.md", "start": 8944358, "end": 8944688}, {"filename": "/src/src/vendor/symfony/service-contracts/ResetInterface.php", "start": 8944688, "end": 8945723}, {"filename": "/src/src/vendor/symfony/service-contracts/ServiceCollectionInterface.php", "start": 8945723, "end": 8946349}, {"filename": "/src/src/vendor/symfony/service-contracts/ServiceLocatorTrait.php", "start": 8946349, "end": 8949998}, {"filename": "/src/src/vendor/symfony/service-contracts/ServiceMethodsSubscriberTrait.php", "start": 8949998, "end": 8952991}, {"filename": "/src/src/vendor/symfony/service-contracts/ServiceProviderInterface.php", "start": 8952991, "end": 8954373}, {"filename": "/src/src/vendor/symfony/service-contracts/ServiceSubscriberInterface.php", "start": 8954373, "end": 8957123}, {"filename": "/src/src/vendor/symfony/service-contracts/ServiceSubscriberTrait.php", "start": 8957123, "end": 8960349}, {"filename": "/src/src/vendor/symfony/service-contracts/Test/ServiceLocatorTest.php", "start": 8960349, "end": 8960811}, {"filename": "/src/src/vendor/symfony/service-contracts/Test/ServiceLocatorTestCase.php", "start": 8960811, "end": 8963732}, {"filename": "/src/src/vendor/symfony/service-contracts/composer.json", "start": 8963732, "end": 8964874}, {"filename": "/src/src/vendor/symfony/string/AbstractString.php", "start": 8964874, "end": 8984425}, {"filename": "/src/src/vendor/symfony/string/AbstractUnicodeString.php", "start": 8984425, "end": 9012941}, {"filename": "/src/src/vendor/symfony/string/ByteString.php", "start": 9012941, "end": 9027751}, {"filename": "/src/src/vendor/symfony/string/CHANGELOG.md", "start": 9027751, "end": 9028856}, {"filename": "/src/src/vendor/symfony/string/CodePointString.php", "start": 9028856, "end": 9036576}, {"filename": "/src/src/vendor/symfony/string/Exception/ExceptionInterface.php", "start": 9036576, "end": 9036913}, {"filename": "/src/src/vendor/symfony/string/Exception/InvalidArgumentException.php", "start": 9036913, "end": 9037297}, {"filename": "/src/src/vendor/symfony/string/Exception/RuntimeException.php", "start": 9037297, "end": 9037665}, {"filename": "/src/src/vendor/symfony/string/Inflector/EnglishInflector.php", "start": 9037665, "end": 9054957}, {"filename": "/src/src/vendor/symfony/string/Inflector/FrenchInflector.php", "start": 9054957, "end": 9060920}, {"filename": "/src/src/vendor/symfony/string/Inflector/InflectorInterface.php", "start": 9060920, "end": 9061755}, {"filename": "/src/src/vendor/symfony/string/Inflector/SpanishInflector.php", "start": 9061755, "end": 9065355}, {"filename": "/src/src/vendor/symfony/string/LICENSE", "start": 9065355, "end": 9066423}, {"filename": "/src/src/vendor/symfony/string/LazyString.php", "start": 9066423, "end": 9070813}, {"filename": "/src/src/vendor/symfony/string/README.md", "start": 9070813, "end": 9071368}, {"filename": "/src/src/vendor/symfony/string/Resources/data/wcswidth_table_wide.php", "start": 9071368, "end": 9084173}, {"filename": "/src/src/vendor/symfony/string/Resources/data/wcswidth_table_zero.php", "start": 9084173, "end": 9099626}, {"filename": "/src/src/vendor/symfony/string/Resources/functions.php", "start": 9099626, "end": 9100478}, {"filename": "/src/src/vendor/symfony/string/Slugger/AsciiSlugger.php", "start": 9100478, "end": 9107506}, {"filename": "/src/src/vendor/symfony/string/Slugger/SluggerInterface.php", "start": 9107506, "end": 9108222}, {"filename": "/src/src/vendor/symfony/string/TruncateMode.php", "start": 9108222, "end": 9109125}, {"filename": "/src/src/vendor/symfony/string/UnicodeString.php", "start": 9109125, "end": 9121643}, {"filename": "/src/src/vendor/symfony/string/composer.json", "start": 9121643, "end": 9123044}, {"filename": "/src/src/vendor/symfony/var-dumper/CHANGELOG.md", "start": 9123044, "end": 9125985}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/AmqpCaster.php", "start": 9125985, "end": 9132714}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/ArgsStub.php", "start": 9132714, "end": 9134994}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/Caster.php", "start": 9134994, "end": 9141950}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/ClassStub.php", "start": 9141950, "end": 9145767}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/ConstStub.php", "start": 9145767, "end": 9146507}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/CutArrayStub.php", "start": 9146507, "end": 9147209}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/CutStub.php", "start": 9147209, "end": 9149148}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/DOMCaster.php", "start": 9149148, "end": 9160052}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/DateCaster.php", "start": 9160052, "end": 9164964}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/DoctrineCaster.php", "start": 9164964, "end": 9166657}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/DsCaster.php", "start": 9166657, "end": 9168247}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/DsPairStub.php", "start": 9168247, "end": 9168872}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/EnumStub.php", "start": 9168872, "end": 9169468}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/ExceptionCaster.php", "start": 9169468, "end": 9185909}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/FFICaster.php", "start": 9185909, "end": 9191570}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/FiberCaster.php", "start": 9191570, "end": 9192639}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/FrameStub.php", "start": 9192639, "end": 9193298}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/GmpCaster.php", "start": 9193298, "end": 9194047}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/ImagineCaster.php", "start": 9194047, "end": 9194996}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/ImgStub.php", "start": 9194996, "end": 9195633}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/IntlCaster.php", "start": 9195633, "end": 9204600}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/LinkStub.php", "start": 9204600, "end": 9207971}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/MemcachedCaster.php", "start": 9207971, "end": 9210264}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/MysqliCaster.php", "start": 9210264, "end": 9210955}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/PdoCaster.php", "start": 9210955, "end": 9214524}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/PgSqlCaster.php", "start": 9214524, "end": 9220031}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/ProxyManagerCaster.php", "start": 9220031, "end": 9220759}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/RdKafkaCaster.php", "start": 9220759, "end": 9225488}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/RedisCaster.php", "start": 9225488, "end": 9230963}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/ReflectionCaster.php", "start": 9230963, "end": 9246109}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/ResourceCaster.php", "start": 9246109, "end": 9249104}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/ScalarStub.php", "start": 9249104, "end": 9249658}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/SplCaster.php", "start": 9249658, "end": 9257678}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/StubCaster.php", "start": 9257678, "end": 9260062}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/SymfonyCaster.php", "start": 9260062, "end": 9263657}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/TraceStub.php", "start": 9263657, "end": 9264416}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/UninitializedStub.php", "start": 9264416, "end": 9265031}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/UuidCaster.php", "start": 9265031, "end": 9265699}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/VirtualStub.php", "start": 9265699, "end": 9266247}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/XmlReaderCaster.php", "start": 9266247, "end": 9269632}, {"filename": "/src/src/vendor/symfony/var-dumper/Caster/XmlResourceCaster.php", "start": 9269632, "end": 9272184}, {"filename": "/src/src/vendor/symfony/var-dumper/Cloner/AbstractCloner.php", "start": 9272184, "end": 9295167}, {"filename": "/src/src/vendor/symfony/var-dumper/Cloner/ClonerInterface.php", "start": 9295167, "end": 9295626}, {"filename": "/src/src/vendor/symfony/var-dumper/Cloner/Cursor.php", "start": 9295626, "end": 9296799}, {"filename": "/src/src/vendor/symfony/var-dumper/Cloner/Data.php", "start": 9296799, "end": 9310457}, {"filename": "/src/src/vendor/symfony/var-dumper/Cloner/DumperInterface.php", "start": 9310457, "end": 9312265}, {"filename": "/src/src/vendor/symfony/var-dumper/Cloner/Internal/NoDefault.php", "start": 9312265, "end": 9312815}, {"filename": "/src/src/vendor/symfony/var-dumper/Cloner/Stub.php", "start": 9312815, "end": 9314748}, {"filename": "/src/src/vendor/symfony/var-dumper/Cloner/VarCloner.php", "start": 9314748, "end": 9324835}, {"filename": "/src/src/vendor/symfony/var-dumper/Command/Descriptor/CliDescriptor.php", "start": 9324835, "end": 9327453}, {"filename": "/src/src/vendor/symfony/var-dumper/Command/Descriptor/DumpDescriptorInterface.php", "start": 9327453, "end": 9328063}, {"filename": "/src/src/vendor/symfony/var-dumper/Command/Descriptor/HtmlDescriptor.php", "start": 9328063, "end": 9331737}, {"filename": "/src/src/vendor/symfony/var-dumper/Command/ServerDumpCommand.php", "start": 9331737, "end": 9335563}, {"filename": "/src/src/vendor/symfony/var-dumper/Dumper/AbstractDumper.php", "start": 9335563, "end": 9341645}, {"filename": "/src/src/vendor/symfony/var-dumper/Dumper/CliDumper.php", "start": 9341645, "end": 9365404}, {"filename": "/src/src/vendor/symfony/var-dumper/Dumper/ContextProvider/CliContextProvider.php", "start": 9365404, "end": 9366210}, {"filename": "/src/src/vendor/symfony/var-dumper/Dumper/ContextProvider/ContextProviderInterface.php", "start": 9366210, "end": 9366747}, {"filename": "/src/src/vendor/symfony/var-dumper/Dumper/ContextProvider/RequestContextProvider.php", "start": 9366747, "end": 9368177}, {"filename": "/src/src/vendor/symfony/var-dumper/Dumper/ContextProvider/SourceContextProvider.php", "start": 9368177, "end": 9372968}, {"filename": "/src/src/vendor/symfony/var-dumper/Dumper/ContextualizedDumper.php", "start": 9372968, "end": 9374045}, {"filename": "/src/src/vendor/symfony/var-dumper/Dumper/DataDumperInterface.php", "start": 9374045, "end": 9374593}, {"filename": "/src/src/vendor/symfony/var-dumper/Dumper/HtmlDumper.php", "start": 9374593, "end": 9409169}, {"filename": "/src/src/vendor/symfony/var-dumper/Dumper/ServerDumper.php", "start": 9409169, "end": 9410747}, {"filename": "/src/src/vendor/symfony/var-dumper/Exception/ThrowingCasterException.php", "start": 9410747, "end": 9411397}, {"filename": "/src/src/vendor/symfony/var-dumper/LICENSE", "start": 9411397, "end": 9412465}, {"filename": "/src/src/vendor/symfony/var-dumper/README.md", "start": 9412465, "end": 9413072}, {"filename": "/src/src/vendor/symfony/var-dumper/Resources/bin/var-dump-server", "start": 9413072, "end": 9415214}, {"filename": "/src/src/vendor/symfony/var-dumper/Resources/css/htmlDescriptor.css", "start": 9415214, "end": 9418224}, {"filename": "/src/src/vendor/symfony/var-dumper/Resources/functions/dump.php", "start": 9418224, "end": 9419859}, {"filename": "/src/src/vendor/symfony/var-dumper/Resources/js/htmlDescriptor.js", "start": 9419859, "end": 9420213}, {"filename": "/src/src/vendor/symfony/var-dumper/Server/Connection.php", "start": 9420213, "end": 9422817}, {"filename": "/src/src/vendor/symfony/var-dumper/Server/DumpServer.php", "start": 9422817, "end": 9425904}, {"filename": "/src/src/vendor/symfony/var-dumper/Test/VarDumperTestTrait.php", "start": 9425904, "end": 9428586}, {"filename": "/src/src/vendor/symfony/var-dumper/VarDumper.php", "start": 9428586, "end": 9432639}, {"filename": "/src/src/vendor/symfony/var-dumper/composer.json", "start": 9432639, "end": 9433815}, {"filename": "/src/src/vendor/symfony/var-exporter/CHANGELOG.md", "start": 9433815, "end": 9434368}, {"filename": "/src/src/vendor/symfony/var-exporter/Exception/ClassNotFoundException.php", "start": 9434368, "end": 9434915}, {"filename": "/src/src/vendor/symfony/var-exporter/Exception/ExceptionInterface.php", "start": 9434915, "end": 9435257}, {"filename": "/src/src/vendor/symfony/var-exporter/Exception/LogicException.php", "start": 9435257, "end": 9435626}, {"filename": "/src/src/vendor/symfony/var-exporter/Exception/NotInstantiableTypeException.php", "start": 9435626, "end": 9436186}, {"filename": "/src/src/vendor/symfony/var-exporter/Hydrator.php", "start": 9436186, "end": 9439190}, {"filename": "/src/src/vendor/symfony/var-exporter/Instantiator.php", "start": 9439190, "end": 9441582}, {"filename": "/src/src/vendor/symfony/var-exporter/Internal/Exporter.php", "start": 9441582, "end": 9458413}, {"filename": "/src/src/vendor/symfony/var-exporter/Internal/Hydrator.php", "start": 9458413, "end": 9469922}, {"filename": "/src/src/vendor/symfony/var-exporter/Internal/LazyObjectRegistry.php", "start": 9469922, "end": 9475864}, {"filename": "/src/src/vendor/symfony/var-exporter/Internal/LazyObjectState.php", "start": 9475864, "end": 9478785}, {"filename": "/src/src/vendor/symfony/var-exporter/Internal/LazyObjectTrait.php", "start": 9478785, "end": 9479456}, {"filename": "/src/src/vendor/symfony/var-exporter/Internal/Reference.php", "start": 9479456, "end": 9479984}, {"filename": "/src/src/vendor/symfony/var-exporter/Internal/Registry.php", "start": 9479984, "end": 9485391}, {"filename": "/src/src/vendor/symfony/var-exporter/Internal/Values.php", "start": 9485391, "end": 9485849}, {"filename": "/src/src/vendor/symfony/var-exporter/LICENSE", "start": 9485849, "end": 9486917}, {"filename": "/src/src/vendor/symfony/var-exporter/LazyGhostTrait.php", "start": 9486917, "end": 9500360}, {"filename": "/src/src/vendor/symfony/var-exporter/LazyObjectInterface.php", "start": 9500360, "end": 9501214}, {"filename": "/src/src/vendor/symfony/var-exporter/LazyProxyTrait.php", "start": 9501214, "end": 9514441}, {"filename": "/src/src/vendor/symfony/var-exporter/ProxyHelper.php", "start": 9514441, "end": 9539350}, {"filename": "/src/src/vendor/symfony/var-exporter/README.md", "start": 9539350, "end": 9544771}, {"filename": "/src/src/vendor/symfony/var-exporter/VarExporter.php", "start": 9544771, "end": 9548411}, {"filename": "/src/src/vendor/symfony/var-exporter/composer.json", "start": 9548411, "end": 9549375}, {"filename": "/src/src/vendor/symfony/yaml/CHANGELOG.md", "start": 9549375, "end": 9556992}, {"filename": "/src/src/vendor/symfony/yaml/Command/LintCommand.php", "start": 9556992, "end": 9567118}, {"filename": "/src/src/vendor/symfony/yaml/Dumper.php", "start": 9567118, "end": 9574358}, {"filename": "/src/src/vendor/symfony/yaml/Escaper.php", "start": 9574358, "end": 9578167}, {"filename": "/src/src/vendor/symfony/yaml/Exception/DumpException.php", "start": 9578167, "end": 9578622}, {"filename": "/src/src/vendor/symfony/yaml/Exception/ExceptionInterface.php", "start": 9578622, "end": 9579084}, {"filename": "/src/src/vendor/symfony/yaml/Exception/ParseException.php", "start": 9579084, "end": 9582053}, {"filename": "/src/src/vendor/symfony/yaml/Exception/RuntimeException.php", "start": 9582053, "end": 9582538}, {"filename": "/src/src/vendor/symfony/yaml/Inline.php", "start": 9582538, "end": 9618673}, {"filename": "/src/src/vendor/symfony/yaml/LICENSE", "start": 9618673, "end": 9619741}, {"filename": "/src/src/vendor/symfony/yaml/Parser.php", "start": 9619741, "end": 9671650}, {"filename": "/src/src/vendor/symfony/yaml/README.md", "start": 9671650, "end": 9672102}, {"filename": "/src/src/vendor/symfony/yaml/Resources/bin/yaml-lint", "start": 9672102, "end": 9673352}, {"filename": "/src/src/vendor/symfony/yaml/Tag/TaggedValue.php", "start": 9673352, "end": 9674012}, {"filename": "/src/src/vendor/symfony/yaml/Unescaper.php", "start": 9674012, "end": 9677137}, {"filename": "/src/src/vendor/symfony/yaml/Yaml.php", "start": 9677137, "end": 9680242}, {"filename": "/src/src/vendor/symfony/yaml/composer.json", "start": 9680242, "end": 9681175}, {"filename": "/src/tileset1.png", "start": 9681175, "end": 9698113}, {"filename": "/src/vendor/autoload.php", "start": 9698113, "end": 9698884}, {"filename": "/src/vendor/composer/ClassLoader.php", "start": 9698884, "end": 9715262}, {"filename": "/src/vendor/composer/InstalledVersions.php", "start": 9715262, "end": 9732238}, {"filename": "/src/vendor/composer/LICENSE", "start": 9732238, "end": 9733308}, {"filename": "/src/vendor/composer/autoload_classmap.php", "start": 9733308, "end": 9733530}, {"filename": "/src/vendor/composer/autoload_namespaces.php", "start": 9733530, "end": 9733669}, {"filename": "/src/vendor/composer/autoload_psr4.php", "start": 9733669, "end": 9733850}, {"filename": "/src/vendor/composer/autoload_real.php", "start": 9733850, "end": 9734937}, {"filename": "/src/vendor/composer/autoload_static.php", "start": 9734937, "end": 9735993}, {"filename": "/src/vendor/composer/installed.json", "start": 9735993, "end": 9736062}, {"filename": "/src/vendor/composer/installed.php", "start": 9736062, "end": 9736796}], "remote_package_size": 6811237, "package_uuid": "sha256-4b839b498174d4ad3af6405fedecde6d96057225679d51b4aa6e265a9c15efed"});

  })();
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = true;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {
// include: web_or_worker_shell_read.js
read_ = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  }

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = (url, onload, onerror) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  }

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = (title) => document.title = title;
} else
{
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
Object.assign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];

if (Module['thisProgram']) thisProgram = Module['thisProgram'];

if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message


// end include: shell.js
// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime = Module['noExitRuntime'] || true;

if (typeof WebAssembly != 'object') {
  abort('no native wasm support detected');
}

// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    // This build was created without ASSERTIONS defined.  `assert()` should not
    // ever be called in this configuration but in case there are callers in
    // the wild leave this simple abort() implemenation here for now.
    abort(text);
  }
}

// Memory management

var HEAP,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/** @type {!Float64Array} */
  HEAPF64;

function updateMemoryViews() {
  var b = wasmMemory.buffer;
  Module['HEAP8'] = HEAP8 = new Int8Array(b);
  Module['HEAP16'] = HEAP16 = new Int16Array(b);
  Module['HEAP32'] = HEAP32 = new Int32Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(b);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(b);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(b);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(b);
}

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js
// end include: runtime_stack_check.js
// include: runtime_assertions.js
// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;

var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
  return noExitRuntime || runtimeKeepaliveCounter > 0;
}

function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;

  
if (!Module["noFSInit"] && !FS.init.initialized)
  FS.init();
FS.ignorePermissions = false;

TTY.init();
SOCKFS.root = FS.mount(SOCKFS, {}, null);
  callRuntimeCallbacks(__ATINIT__);
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what += '. Build with -sASSERTIONS for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // defintion for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// include: memoryprofiler.js
// end include: memoryprofiler.js
// include: URIUtils.js
// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  return filename.startsWith(dataURIPrefix);
}

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return filename.startsWith('file://');
}

// end include: URIUtils.js
// include: runtime_exceptions.js
// end include: runtime_exceptions.js
var wasmBinaryFile;
if (Module['locateFile']) {
  wasmBinaryFile = 'php-web.wasm';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }
} else {
  // Use bundler-friendly `new URL(..., import.meta.url)` pattern; works in browsers too.
  wasmBinaryFile = new URL('php-web.wasm', import.meta.url).href;
}

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    if (readBinary) {
      return readBinary(file);
    }
    throw "both async and sync fetching of the wasm failed";
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise(binaryFile) {
  // If we don't have the binary yet, try to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch == 'function'
    ) {
      return fetch(binaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + binaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(binaryFile);
      });
    }
  }

  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(binaryFile); });
}

function instantiateArrayBuffer(binaryFile, imports, receiver) {
  return getBinaryPromise(binaryFile).then(function(binary) {
    return WebAssembly.instantiate(binary, imports);
  }).then(function (instance) {
    return instance;
  }).then(receiver, function(reason) {
    err('failed to asynchronously prepare wasm: ' + reason);

    abort(reason);
  });
}

function instantiateAsync(binary, binaryFile, imports, callback) {
  if (!binary &&
      typeof WebAssembly.instantiateStreaming == 'function' &&
      !isDataURI(binaryFile) &&
      typeof fetch == 'function') {
    return fetch(binaryFile, { credentials: 'same-origin' }).then(function(response) {
      // Suppress closure warning here since the upstream definition for
      // instantiateStreaming only allows Promise<Repsponse> rather than
      // an actual Response.
      // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
      /** @suppress {checkTypes} */
      var result = WebAssembly.instantiateStreaming(response, imports);

      return result.then(
        callback,
        function(reason) {
          // We expect the most common failure cause to be a bad MIME type for the binary,
          // in which case falling back to ArrayBuffer instantiation should work.
          err('wasm streaming compile failed: ' + reason);
          err('falling back to ArrayBuffer instantiation');
          return instantiateArrayBuffer(binaryFile, imports, callback);
        });
    });
  } else {
    return instantiateArrayBuffer(binaryFile, imports, callback);
  }
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    updateMemoryViews();

    wasmTable = Module['asm']['__indirect_function_table'];

    addOnInit(Module['asm']['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');

    return exports;
  }
  // wait for the pthread pool (if any)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module['instantiateWasm']) {

    try {
      return Module['instantiateWasm'](info, receiveInstance);
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
        // If instantiation fails, reject the module ready promise.
        readyPromiseReject(e);
    }
  }

  // If instantiation fails, reject the module ready promise.
  instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// include: runtime_debug.js
// end include: runtime_debug.js
// === Body ===

var ASM_CONSTS = {
  2316724: () => { if (typeof(AudioContext) !== 'undefined') { return true; } else if (typeof(webkitAudioContext) !== 'undefined') { return true; } return false; },  
 2316871: () => { if ((typeof(navigator.mediaDevices) !== 'undefined') && (typeof(navigator.mediaDevices.getUserMedia) !== 'undefined')) { return true; } else if (typeof(navigator.webkitGetUserMedia) !== 'undefined') { return true; } return false; },  
 2317105: ($0) => { if(typeof(Module['SDL2']) === 'undefined') { Module['SDL2'] = {}; } var SDL2 = Module['SDL2']; if (!$0) { SDL2.audio = {}; } else { SDL2.capture = {}; } if (!SDL2.audioContext) { if (typeof(AudioContext) !== 'undefined') { SDL2.audioContext = new AudioContext(); } else if (typeof(webkitAudioContext) !== 'undefined') { SDL2.audioContext = new webkitAudioContext(); } if (SDL2.audioContext) { autoResumeAudioContext(SDL2.audioContext); } } return SDL2.audioContext === undefined ? -1 : 0; },  
 2317598: () => { var SDL2 = Module['SDL2']; return SDL2.audioContext.sampleRate; },  
 2317666: ($0, $1, $2, $3) => { var SDL2 = Module['SDL2']; var have_microphone = function(stream) { if (SDL2.capture.silenceTimer !== undefined) { clearTimeout(SDL2.capture.silenceTimer); SDL2.capture.silenceTimer = undefined; } SDL2.capture.mediaStreamNode = SDL2.audioContext.createMediaStreamSource(stream); SDL2.capture.scriptProcessorNode = SDL2.audioContext.createScriptProcessor($1, $0, 1); SDL2.capture.scriptProcessorNode.onaudioprocess = function(audioProcessingEvent) { if ((SDL2 === undefined) || (SDL2.capture === undefined)) { return; } audioProcessingEvent.outputBuffer.getChannelData(0).fill(0.0); SDL2.capture.currentCaptureBuffer = audioProcessingEvent.inputBuffer; dynCall('vi', $2, [$3]); }; SDL2.capture.mediaStreamNode.connect(SDL2.capture.scriptProcessorNode); SDL2.capture.scriptProcessorNode.connect(SDL2.audioContext.destination); SDL2.capture.stream = stream; }; var no_microphone = function(error) { }; SDL2.capture.silenceBuffer = SDL2.audioContext.createBuffer($0, $1, SDL2.audioContext.sampleRate); SDL2.capture.silenceBuffer.getChannelData(0).fill(0.0); var silence_callback = function() { SDL2.capture.currentCaptureBuffer = SDL2.capture.silenceBuffer; dynCall('vi', $2, [$3]); }; SDL2.capture.silenceTimer = setTimeout(silence_callback, ($1 / SDL2.audioContext.sampleRate) * 1000); if ((navigator.mediaDevices !== undefined) && (navigator.mediaDevices.getUserMedia !== undefined)) { navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(have_microphone).catch(no_microphone); } else if (navigator.webkitGetUserMedia !== undefined) { navigator.webkitGetUserMedia({ audio: true, video: false }, have_microphone, no_microphone); } },  
 2319318: ($0, $1, $2, $3) => { var SDL2 = Module['SDL2']; SDL2.audio.scriptProcessorNode = SDL2.audioContext['createScriptProcessor']($1, 0, $0); SDL2.audio.scriptProcessorNode['onaudioprocess'] = function (e) { if ((SDL2 === undefined) || (SDL2.audio === undefined)) { return; } SDL2.audio.currentOutputBuffer = e['outputBuffer']; dynCall('vi', $2, [$3]); }; SDL2.audio.scriptProcessorNode['connect'](SDL2.audioContext['destination']); },  
 2319728: ($0, $1) => { var SDL2 = Module['SDL2']; var numChannels = SDL2.capture.currentCaptureBuffer.numberOfChannels; for (var c = 0; c < numChannels; ++c) { var channelData = SDL2.capture.currentCaptureBuffer.getChannelData(c); if (channelData.length != $1) { throw 'Web Audio capture buffer length mismatch! Destination size: ' + channelData.length + ' samples vs expected ' + $1 + ' samples!'; } if (numChannels == 1) { for (var j = 0; j < $1; ++j) { setValue($0 + (j * 4), channelData[j], 'float'); } } else { for (var j = 0; j < $1; ++j) { setValue($0 + (((j * numChannels) + c) * 4), channelData[j], 'float'); } } } },  
 2320333: ($0, $1) => { var SDL2 = Module['SDL2']; var numChannels = SDL2.audio.currentOutputBuffer['numberOfChannels']; for (var c = 0; c < numChannels; ++c) { var channelData = SDL2.audio.currentOutputBuffer['getChannelData'](c); if (channelData.length != $1) { throw 'Web Audio output buffer length mismatch! Destination size: ' + channelData.length + ' samples vs expected ' + $1 + ' samples!'; } for (var j = 0; j < $1; ++j) { channelData[j] = HEAPF32[$0 + ((j*numChannels + c) << 2) >> 2]; } } },  
 2320813: ($0) => { var SDL2 = Module['SDL2']; if ($0) { if (SDL2.capture.silenceTimer !== undefined) { clearTimeout(SDL2.capture.silenceTimer); } if (SDL2.capture.stream !== undefined) { var tracks = SDL2.capture.stream.getAudioTracks(); for (var i = 0; i < tracks.length; i++) { SDL2.capture.stream.removeTrack(tracks[i]); } SDL2.capture.stream = undefined; } if (SDL2.capture.scriptProcessorNode !== undefined) { SDL2.capture.scriptProcessorNode.onaudioprocess = function(audioProcessingEvent) {}; SDL2.capture.scriptProcessorNode.disconnect(); SDL2.capture.scriptProcessorNode = undefined; } if (SDL2.capture.mediaStreamNode !== undefined) { SDL2.capture.mediaStreamNode.disconnect(); SDL2.capture.mediaStreamNode = undefined; } if (SDL2.capture.silenceBuffer !== undefined) { SDL2.capture.silenceBuffer = undefined } SDL2.capture = undefined; } else { if (SDL2.audio.scriptProcessorNode != undefined) { SDL2.audio.scriptProcessorNode.disconnect(); SDL2.audio.scriptProcessorNode = undefined; } SDL2.audio = undefined; } if ((SDL2.audioContext !== undefined) && (SDL2.audio === undefined) && (SDL2.capture === undefined)) { SDL2.audioContext.close(); SDL2.audioContext = undefined; } },  
 2321985: ($0, $1, $2) => { var w = $0; var h = $1; var pixels = $2; if (!Module['SDL2']) Module['SDL2'] = {}; var SDL2 = Module['SDL2']; if (SDL2.ctxCanvas !== Module['canvas']) { SDL2.ctx = Module['createContext'](Module['canvas'], false, true); SDL2.ctxCanvas = Module['canvas']; } if (SDL2.w !== w || SDL2.h !== h || SDL2.imageCtx !== SDL2.ctx) { SDL2.image = SDL2.ctx.createImageData(w, h); SDL2.w = w; SDL2.h = h; SDL2.imageCtx = SDL2.ctx; } var data = SDL2.image.data; var src = pixels >> 2; var dst = 0; var num; if (typeof CanvasPixelArray !== 'undefined' && data instanceof CanvasPixelArray) { num = data.length; while (dst < num) { var val = HEAP32[src]; data[dst ] = val & 0xff; data[dst+1] = (val >> 8) & 0xff; data[dst+2] = (val >> 16) & 0xff; data[dst+3] = 0xff; src++; dst += 4; } } else { if (SDL2.data32Data !== data) { SDL2.data32 = new Int32Array(data.buffer); SDL2.data8 = new Uint8Array(data.buffer); SDL2.data32Data = data; } var data32 = SDL2.data32; num = data32.length; data32.set(HEAP32.subarray(src, src + num)); var data8 = SDL2.data8; var i = 3; var j = i + 4*num; if (num % 8 == 0) { while (i < j) { data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; } } else { while (i < j) { data8[i] = 0xff; i = i + 4 | 0; } } } SDL2.ctx.putImageData(SDL2.image, 0, 0); },  
 2323454: ($0, $1, $2, $3, $4) => { var w = $0; var h = $1; var hot_x = $2; var hot_y = $3; var pixels = $4; var canvas = document.createElement("canvas"); canvas.width = w; canvas.height = h; var ctx = canvas.getContext("2d"); var image = ctx.createImageData(w, h); var data = image.data; var src = pixels >> 2; var dst = 0; var num; if (typeof CanvasPixelArray !== 'undefined' && data instanceof CanvasPixelArray) { num = data.length; while (dst < num) { var val = HEAP32[src]; data[dst ] = val & 0xff; data[dst+1] = (val >> 8) & 0xff; data[dst+2] = (val >> 16) & 0xff; data[dst+3] = (val >> 24) & 0xff; src++; dst += 4; } } else { var data32 = new Int32Array(data.buffer); num = data32.length; data32.set(HEAP32.subarray(src, src + num)); } ctx.putImageData(image, 0, 0); var url = hot_x === 0 && hot_y === 0 ? "url(" + canvas.toDataURL() + "), auto" : "url(" + canvas.toDataURL() + ") " + hot_x + " " + hot_y + ", auto"; var urlBuf = _malloc(url.length + 1); stringToUTF8(url, urlBuf, url.length + 1); return urlBuf; },  
 2324443: ($0) => { if (Module['canvas']) { Module['canvas'].style['cursor'] = UTF8ToString($0); } },  
 2324526: () => { if (Module['canvas']) { Module['canvas'].style['cursor'] = 'none'; } },  
 2324595: () => { return window.innerWidth; },  
 2324625: () => { return window.innerHeight; },  
 2324656: ($0, $1) => { alert(UTF8ToString($0) + "\n\n" + UTF8ToString($1)); }
};



// end include: preamble.js

  /** @constructor */
  function ExitStatus(status) {
      this.name = 'ExitStatus';
      this.message = 'Program terminated with exit(' + status + ')';
      this.status = status;
    }

  function listenOnce(object, event, func) {
      object.addEventListener(event, func, { 'once': true });
    }
  /** @param {Object=} elements */
  function autoResumeAudioContext(ctx, elements) {
      if (!elements) {
        elements = [document, document.getElementById('canvas')];
      }
      ['keydown', 'mousedown', 'touchstart'].forEach(function(event) {
        elements.forEach(function(element) {
          if (element) {
            listenOnce(element, event, () => {
              if (ctx.state === 'suspended') ctx.resume();
            });
          }
        });
      });
    }

  function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    }

  function dynCallLegacy(sig, ptr, args) {
      var f = Module['dynCall_' + sig];
      return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
    }
  
  var wasmTableMirror = [];
  
  function getWasmTableEntry(funcPtr) {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      return func;
    }
  
  /** @param {Object=} args */
  function dynCall(sig, ptr, args) {
      // Without WASM_BIGINT support we cannot directly call function with i64 as
      // part of thier signature, so we rely the dynCall functions generated by
      // wasm-emscripten-finalize
      if (sig.includes('j')) {
        return dynCallLegacy(sig, ptr, args);
      }
      var rtn = getWasmTableEntry(ptr).apply(null, args);
      return rtn;
    }

  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      case '*': return HEAPU32[((ptr)>>2)];
      default: abort('invalid type for getValue: ' + type);
    }
  }

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      case '*': HEAPU32[((ptr)>>2)] = value; break;
      default: abort('invalid type for setValue: ' + type);
    }
  }

  var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : undefined;
  
    /**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */
  function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.  Also, use the length info to avoid running tiny
      // strings through TextDecoder, since .subarray() allocates garbage.
      // (As a tiny code save trick, compare endPtr against endIdx using a negation,
      // so that undefined means Infinity)
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = '';
      // If building with TextDecoder, we have already computed the string length
      // above, so test loop end condition against that
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heapOrArray[idx++];
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
        }
  
        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
      }
      return str;
    }
  
  
    /**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first   byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index (i.e. maxBytesToRead will not
     *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
     *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
     *   JS JIT optimizations off, so it is worth to consider consistently using one
     * @return {string}
     */
  function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
    }
  function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    }

  function ___call_sighandler(fp, sig) {
      getWasmTableEntry(fp)(sig);
    }

  var dlopenMissingError =  'To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking';
  function ___dlsym(handle, symbol) {
      abort(dlopenMissingError);
    }

  var PATH = {isAbs:(path) => path.charAt(0) === '/',splitPath:(filename) => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:(parts, allowAboveRoot) => {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:(path) => {
        var isAbsolute = PATH.isAbs(path),
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter((p) => !!p), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:(path) => {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:(path) => {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },join:function() {
        var paths = Array.prototype.slice.call(arguments);
        return PATH.normalize(paths.join('/'));
      },join2:(l, r) => {
        return PATH.normalize(l + '/' + r);
      }};
  
  function initRandomFill() {
      if (typeof crypto == 'object' && typeof crypto['getRandomValues'] == 'function') {
        // for modern web browsers
        return (view) => crypto.getRandomValues(view);
      } else
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      abort("initRandomDevice");
    }
  function randomFill(view) {
      // Lazily init on the first invocation.
      return (randomFill = initRandomFill())(view);
    }
  
  
  
  var PATH_FS = {resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path != 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = PATH.isAbs(path);
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter((p) => !!p), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:(from, to) => {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  
  function lengthBytesUTF8(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var c = str.charCodeAt(i); // possibly a lead surrogate
        if (c <= 0x7F) {
          len++;
        } else if (c <= 0x7FF) {
          len += 2;
        } else if (c >= 0xD800 && c <= 0xDFFF) {
          len += 4; ++i;
        } else {
          len += 3;
        }
      }
      return len;
    }
  
  function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
      // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
      // undefined and false each don't write out any bytes.
      if (!(maxBytesToWrite > 0))
        return 0;
  
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
        // and https://www.ietf.org/rfc/rfc2279.txt
        // and https://tools.ietf.org/html/rfc3629
        var u = str.charCodeAt(i); // possibly a lead surrogate
        if (u >= 0xD800 && u <= 0xDFFF) {
          var u1 = str.charCodeAt(++i);
          u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
        }
        if (u <= 0x7F) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 0x7FF) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 0xC0 | (u >> 6);
          heap[outIdx++] = 0x80 | (u & 63);
        } else if (u <= 0xFFFF) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 0xE0 | (u >> 12);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        } else {
          if (outIdx + 3 >= endIdx) break;
          heap[outIdx++] = 0xF0 | (u >> 18);
          heap[outIdx++] = 0x80 | ((u >> 12) & 63);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        }
      }
      // Null-terminate the pointer to the buffer.
      heap[outIdx] = 0;
      return outIdx - startIdx;
    }
  /** @type {function(string, boolean=, number=)} */
  function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull) u8array.length = numBytesWritten;
    return u8array;
  }
  var TTY = {ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process.stdin.setEncoding('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process.stdin.pause();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.fsync(stream.tty);
        },fsync:function(stream) {
          stream.tty.ops.fsync(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },fsync:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },fsync:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  
  function zeroMemory(address, size) {
      HEAPU8.fill(0, address, address + size);
      return address;
    }
  
  function alignMemory(size, alignment) {
      return Math.ceil(size / alignment) * alignment;
    }
  function mmapAlloc(size) {
      size = alignMemory(size, 65536);
      var ptr = _emscripten_builtin_memalign(65536, size);
      if (!ptr) return 0;
      return zeroMemory(ptr, size);
    }
  var MEMFS = {ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.timestamp = node.timestamp;
        }
        return node;
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
        }
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now()
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the
            // buffer we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  
  /** @param {boolean=} noRunDep */
  function asyncLoad(url, onload, onerror, noRunDep) {
      var dep = !noRunDep ? getUniqueRunDependency('al ' + url) : '';
      readAsync(url, (arrayBuffer) => {
        assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency(dep);
      }, (event) => {
        if (onerror) {
          onerror();
        } else {
          throw 'Loading data file "' + url + '" failed.';
        }
      });
      if (dep) addRunDependency(dep);
    }
  
  
  
  
  
  
  var IDBFS = {dbs:{},indexedDB:() => {
        if (typeof indexedDB != 'undefined') return indexedDB;
        var ret = null;
        if (typeof window == 'object') ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        assert(ret, 'IDBFS used, but indexedDB not supported');
        return ret;
      },DB_VERSION:21,DB_STORE_NAME:"FILE_DATA",mount:function(mount) {
        // reuse all of the core MEMFS functionality
        return MEMFS.mount.apply(null, arguments);
      },syncfs:(mount, populate, callback) => {
        IDBFS.getLocalSet(mount, (err, local) => {
          if (err) return callback(err);
  
          IDBFS.getRemoteSet(mount, (err, remote) => {
            if (err) return callback(err);
  
            var src = populate ? remote : local;
            var dst = populate ? local : remote;
  
            IDBFS.reconcile(src, dst, callback);
          });
        });
      },quit:() => {
        Object.values(IDBFS.dbs).forEach((value) => value.close());
        IDBFS.dbs = {};
      },getDB:(name, callback) => {
        // check the cache first
        var db = IDBFS.dbs[name];
        if (db) {
          return callback(null, db);
        }
  
        var req;
        try {
          req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
          return callback(e);
        }
        if (!req) {
          return callback("Unable to connect to IndexedDB");
        }
        req.onupgradeneeded = (e) => {
          var db = /** @type {IDBDatabase} */ (e.target.result);
          var transaction = e.target.transaction;
  
          var fileStore;
  
          if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
            fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
          } else {
            fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
          }
  
          if (!fileStore.indexNames.contains('timestamp')) {
            fileStore.createIndex('timestamp', 'timestamp', { unique: false });
          }
        };
        req.onsuccess = () => {
          db = /** @type {IDBDatabase} */ (req.result);
  
          // add to the cache
          IDBFS.dbs[name] = db;
          callback(null, db);
        };
        req.onerror = (e) => {
          callback(this.error);
          e.preventDefault();
        };
      },getLocalSet:(mount, callback) => {
        var entries = {};
  
        function isRealDir(p) {
          return p !== '.' && p !== '..';
        };
        function toAbsolute(root) {
          return (p) => {
            return PATH.join2(root, p);
          }
        };
  
        var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
  
        while (check.length) {
          var path = check.pop();
          var stat;
  
          try {
            stat = FS.stat(path);
          } catch (e) {
            return callback(e);
          }
  
          if (FS.isDir(stat.mode)) {
            check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
          }
  
          entries[path] = { 'timestamp': stat.mtime };
        }
  
        return callback(null, { type: 'local', entries: entries });
      },getRemoteSet:(mount, callback) => {
        var entries = {};
  
        IDBFS.getDB(mount.mountpoint, (err, db) => {
          if (err) return callback(err);
  
          try {
            var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
            transaction.onerror = (e) => {
              callback(this.error);
              e.preventDefault();
            };
  
            var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
            var index = store.index('timestamp');
  
            index.openKeyCursor().onsuccess = (event) => {
              var cursor = event.target.result;
  
              if (!cursor) {
                return callback(null, { type: 'remote', db: db, entries: entries });
              }
  
              entries[cursor.primaryKey] = { 'timestamp': cursor.key };
  
              cursor.continue();
            };
          } catch (e) {
            return callback(e);
          }
        });
      },loadLocalEntry:(path, callback) => {
        var stat, node;
  
        try {
          var lookup = FS.lookupPath(path);
          node = lookup.node;
          stat = FS.stat(path);
        } catch (e) {
          return callback(e);
        }
  
        if (FS.isDir(stat.mode)) {
          return callback(null, { 'timestamp': stat.mtime, 'mode': stat.mode });
        } else if (FS.isFile(stat.mode)) {
          // Performance consideration: storing a normal JavaScript array to a IndexedDB is much slower than storing a typed array.
          // Therefore always convert the file contents to a typed array first before writing the data to IndexedDB.
          node.contents = MEMFS.getFileDataAsTypedArray(node);
          return callback(null, { 'timestamp': stat.mtime, 'mode': stat.mode, 'contents': node.contents });
        } else {
          return callback(new Error('node type not supported'));
        }
      },storeLocalEntry:(path, entry, callback) => {
        try {
          if (FS.isDir(entry['mode'])) {
            FS.mkdirTree(path, entry['mode']);
          } else if (FS.isFile(entry['mode'])) {
            FS.writeFile(path, entry['contents'], { canOwn: true });
          } else {
            return callback(new Error('node type not supported'));
          }
  
          FS.chmod(path, entry['mode']);
          FS.utime(path, entry['timestamp'], entry['timestamp']);
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },removeLocalEntry:(path, callback) => {
        try {
          var stat = FS.stat(path);
  
          if (FS.isDir(stat.mode)) {
            FS.rmdir(path);
          } else if (FS.isFile(stat.mode)) {
            FS.unlink(path);
          }
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },loadRemoteEntry:(store, path, callback) => {
        var req = store.get(path);
        req.onsuccess = (event) => { callback(null, event.target.result); };
        req.onerror = (e) => {
          callback(this.error);
          e.preventDefault();
        };
      },storeRemoteEntry:(store, path, entry, callback) => {
        try {
          var req = store.put(entry, path);
        } catch (e) {
          callback(e);
          return;
        }
        req.onsuccess = () => { callback(null); };
        req.onerror = (e) => {
          callback(this.error);
          e.preventDefault();
        };
      },removeRemoteEntry:(store, path, callback) => {
        var req = store.delete(path);
        req.onsuccess = () => { callback(null); };
        req.onerror = (e) => {
          callback(this.error);
          e.preventDefault();
        };
      },reconcile:(src, dst, callback) => {
        var total = 0;
  
        var create = [];
        Object.keys(src.entries).forEach(function (key) {
          var e = src.entries[key];
          var e2 = dst.entries[key];
          if (!e2 || e['timestamp'].getTime() != e2['timestamp'].getTime()) {
            create.push(key);
            total++;
          }
        });
  
        var remove = [];
        Object.keys(dst.entries).forEach(function (key) {
          if (!src.entries[key]) {
            remove.push(key);
            total++;
          }
        });
  
        if (!total) {
          return callback(null);
        }
  
        var errored = false;
        var db = src.type === 'remote' ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
  
        function done(err) {
          if (err && !errored) {
            errored = true;
            return callback(err);
          }
        };
  
        transaction.onerror = (e) => {
          done(this.error);
          e.preventDefault();
        };
  
        transaction.oncomplete = (e) => {
          if (!errored) {
            callback(null);
          }
        };
  
        // sort paths in ascending order so directory entries are created
        // before the files inside them
        create.sort().forEach((path) => {
          if (dst.type === 'local') {
            IDBFS.loadRemoteEntry(store, path, (err, entry) => {
              if (err) return done(err);
              IDBFS.storeLocalEntry(path, entry, done);
            });
          } else {
            IDBFS.loadLocalEntry(path, (err, entry) => {
              if (err) return done(err);
              IDBFS.storeRemoteEntry(store, path, entry, done);
            });
          }
        });
  
        // sort paths in descending order so files are deleted before their
        // parent directories
        remove.sort().reverse().forEach((path) => {
          if (dst.type === 'local') {
            IDBFS.removeLocalEntry(path, done);
          } else {
            IDBFS.removeRemoteEntry(store, path, done);
          }
        });
      }};
  
  var LZ4 = {DIR_MODE:16895,FILE_MODE:33279,CHUNK_SIZE:-1,codec:null,init:function() {
        if (LZ4.codec) return;
        LZ4.codec = (function() {
          /*
  MiniLZ4: Minimal LZ4 block decoding and encoding.
  
  based off of node-lz4, https://github.com/pierrec/node-lz4
  
  ====
  Copyright (c) 2012 Pierre Curto
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  ====
  
  changes have the same license
  */
  
  var MiniLZ4 = (function() {
  
  var exports = {};
  
  /**
   * Decode a block. Assumptions: input contains all sequences of a 
   * chunk, output is large enough to receive the decoded data.
   * If the output buffer is too small, an error will be thrown.
   * If the returned value is negative, an error occured at the returned offset.
   *
   * @param {ArrayBufferView} input input data
   * @param {ArrayBufferView} output output data
   * @param {number=} sIdx
   * @param {number=} eIdx
   * @return {number} number of decoded bytes
   * @private
   */
  exports.uncompress = function (input, output, sIdx, eIdx) {
  	sIdx = sIdx || 0
  	eIdx = eIdx || (input.length - sIdx)
  	// Process each sequence in the incoming data
  	for (var i = sIdx, n = eIdx, j = 0; i < n;) {
  		var token = input[i++]
  
  		// Literals
  		var literals_length = (token >> 4)
  		if (literals_length > 0) {
  			// length of literals
  			var l = literals_length + 240
  			while (l === 255) {
  				l = input[i++]
  				literals_length += l
  			}
  
  			// Copy the literals
  			var end = i + literals_length
  			while (i < end) output[j++] = input[i++]
  
  			// End of buffer?
  			if (i === n) return j
  		}
  
  		// Match copy
  		// 2 bytes offset (little endian)
  		var offset = input[i++] | (input[i++] << 8)
  
  		// XXX 0 is an invalid offset value
  		if (offset === 0) return j
  		if (offset > j) return -(i-2)
  
  		// length of match copy
  		var match_length = (token & 0xf)
  		var l = match_length + 240
  		while (l === 255) {
  			l = input[i++]
  			match_length += l
  		}
  
  		// Copy the match
  		var pos = j - offset // position of the match copy in the current output
  		var end = j + match_length + 4 // minmatch = 4
  		while (j < end) output[j++] = output[pos++]
  	}
  
  	return j
  }
  
  var
  	maxInputSize	= 0x7E000000
  ,	minMatch		= 4
  // uint32() optimization
  ,	hashLog			= 16
  ,	hashShift		= (minMatch * 8) - hashLog
  ,	hashSize		= 1 << hashLog
  
  ,	copyLength		= 8
  ,	lastLiterals	= 5
  ,	mfLimit			= copyLength + minMatch
  ,	skipStrength	= 6
  
  ,	mlBits  		= 4
  ,	mlMask  		= (1 << mlBits) - 1
  ,	runBits 		= 8 - mlBits
  ,	runMask 		= (1 << runBits) - 1
  
  ,	hasher 			= /* XXX uint32( */ 2654435761 /* ) */
  
  assert(hashShift === 16);
  var hashTable = new Int16Array(1<<16);
  var empty = new Int16Array(hashTable.length);
  
  // CompressBound returns the maximum length of a lz4 block, given it's uncompressed length
  exports.compressBound = function (isize) {
  	return isize > maxInputSize
  		? 0
  		: (isize + (isize/255) + 16) | 0
  }
  
  /** @param {number=} sIdx
  	@param {number=} eIdx */
  exports.compress = function (src, dst, sIdx, eIdx) {
  	hashTable.set(empty);
  	return compressBlock(src, dst, 0, sIdx || 0, eIdx || dst.length)
  }
  
  function compressBlock (src, dst, pos, sIdx, eIdx) {
  	// XXX var Hash = uint32() // Reusable unsigned 32 bits integer
  	var dpos = sIdx
  	var dlen = eIdx - sIdx
  	var anchor = 0
  
  	if (src.length >= maxInputSize) throw new Error("input too large")
  
  	// Minimum of input bytes for compression (LZ4 specs)
  	if (src.length > mfLimit) {
  		var n = exports.compressBound(src.length)
  		if ( dlen < n ) throw Error("output too small: " + dlen + " < " + n)
  
  		var 
  			step  = 1
  		,	findMatchAttempts = (1 << skipStrength) + 3
  		// Keep last few bytes incompressible (LZ4 specs):
  		// last 5 bytes must be literals
  		,	srcLength = src.length - mfLimit
  
  		while (pos + minMatch < srcLength) {
  			// Find a match
  			// min match of 4 bytes aka sequence
  			var sequenceLowBits = src[pos+1]<<8 | src[pos]
  			var sequenceHighBits = src[pos+3]<<8 | src[pos+2]
  			// compute hash for the current sequence
  			var hash = Math.imul(sequenceLowBits | (sequenceHighBits << 16), hasher) >>> hashShift;
  			/* XXX Hash.fromBits(sequenceLowBits, sequenceHighBits)
  							.multiply(hasher)
  							.shiftr(hashShift)
  							.toNumber() */
  			// get the position of the sequence matching the hash
  			// NB. since 2 different sequences may have the same hash
  			// it is double-checked below
  			// do -1 to distinguish between initialized and uninitialized values
  			var ref = hashTable[hash] - 1
  			// save position of current sequence in hash table
  			hashTable[hash] = pos + 1
  
  			// first reference or within 64k limit or current sequence !== hashed one: no match
  			if ( ref < 0 ||
  				((pos - ref) >>> 16) > 0 ||
  				(
  					((src[ref+3]<<8 | src[ref+2]) != sequenceHighBits) ||
  					((src[ref+1]<<8 | src[ref]) != sequenceLowBits )
  				)
  			) {
  				// increase step if nothing found within limit
  				step = findMatchAttempts++ >> skipStrength
  				pos += step
  				continue
  			}
  
  			findMatchAttempts = (1 << skipStrength) + 3
  
  			// got a match
  			var literals_length = pos - anchor
  			var offset = pos - ref
  
  			// minMatch already verified
  			pos += minMatch
  			ref += minMatch
  
  			// move to the end of the match (>=minMatch)
  			var match_length = pos
  			while (pos < srcLength && src[pos] == src[ref]) {
  				pos++
  				ref++
  			}
  
  			// match length
  			match_length = pos - match_length
  
  			// token
  			var token = match_length < mlMask ? match_length : mlMask
  
  			// encode literals length
  			if (literals_length >= runMask) {
  				// add match length to the token
  				dst[dpos++] = (runMask << mlBits) + token
  				for (var len = literals_length - runMask; len > 254; len -= 255) {
  					dst[dpos++] = 255
  				}
  				dst[dpos++] = len
  			} else {
  				// add match length to the token
  				dst[dpos++] = (literals_length << mlBits) + token
  			}
  
  			// write literals
  			for (var i = 0; i < literals_length; i++) {
  				dst[dpos++] = src[anchor+i]
  			}
  
  			// encode offset
  			dst[dpos++] = offset
  			dst[dpos++] = (offset >> 8)
  
  			// encode match length
  			if (match_length >= mlMask) {
  				match_length -= mlMask
  				while (match_length >= 255) {
  					match_length -= 255
  					dst[dpos++] = 255
  				}
  
  				dst[dpos++] = match_length
  			}
  
  			anchor = pos
  		}
  	}
  
  	// cannot compress input
  	if (anchor == 0) return 0
  
  	// Write last literals
  	// encode literals length
  	literals_length = src.length - anchor
  	if (literals_length >= runMask) {
  		// add match length to the token
  		dst[dpos++] = (runMask << mlBits)
  		for (var ln = literals_length - runMask; ln > 254; ln -= 255) {
  			dst[dpos++] = 255
  		}
  		dst[dpos++] = ln
  	} else {
  		// add match length to the token
  		dst[dpos++] = (literals_length << mlBits)
  	}
  
  	// write literals
  	pos = anchor
  	while (pos < src.length) {
  		dst[dpos++] = src[pos++]
  	}
  
  	return dpos
  }
  
  exports.CHUNK_SIZE = 2048; // musl libc does readaheads of 1024 bytes, so a multiple of that is a good idea
  
  exports.compressPackage = function(data, verify) {
    if (verify) {
      var temp = new Uint8Array(exports.CHUNK_SIZE);
    }
    // compress the data in chunks
    assert(data instanceof ArrayBuffer);
    data = new Uint8Array(data);
    console.log('compressing package of size ' + data.length);
    var compressedChunks = [];
    var successes = [];
    var offset = 0;
    var total = 0;
    while (offset < data.length) {
      var chunk = data.subarray(offset, offset + exports.CHUNK_SIZE);
      //console.log('compress a chunk ' + [offset, total, data.length]);
      offset += exports.CHUNK_SIZE;
      var bound = exports.compressBound(chunk.length);
      var compressed = new Uint8Array(bound);
      var compressedSize = exports.compress(chunk, compressed);
      if (compressedSize > 0) {
        assert(compressedSize <= bound);
        compressed = compressed.subarray(0, compressedSize);
        compressedChunks.push(compressed);
        total += compressedSize;
        successes.push(1);
        if (verify) {
          var back = exports.uncompress(compressed, temp);
          assert(back === chunk.length, [back, chunk.length]);
          for (var i = 0; i < chunk.length; i++) {
            assert(chunk[i] === temp[i]);
          }
        }
      } else {
        assert(compressedSize === 0);
        // failure to compress :(
        compressedChunks.push(chunk);
        total += chunk.length; // last chunk may not be the full exports.CHUNK_SIZE size
        successes.push(0);
      }
    }
    data = null; // XXX null out pack['data'] too?
    var compressedData = {
      'data': new Uint8Array(total + exports.CHUNK_SIZE*2), // store all the compressed data, plus room for two cached decompressed chunk, in one fast array
      'cachedOffset': total,
      'cachedIndexes': [-1, -1], // cache last two blocks, so that reading 1,2,3 + preloading another block won't trigger decompress thrashing
      'cachedChunks': [null, null],
      'offsets': [], // chunk# => start in compressed data
      'sizes': [],
      'successes': successes, // 1 if chunk is compressed
    };
    offset = 0;
    for (var i = 0; i < compressedChunks.length; i++) {
      compressedData['data'].set(compressedChunks[i], offset);
      compressedData['offsets'][i] = offset;
      compressedData['sizes'][i] = compressedChunks[i].length
      offset += compressedChunks[i].length;
    }
    console.log('compressed package into ' + [compressedData['data'].length]);
    assert(offset === total);
    return compressedData;
  };
  
  assert(exports.CHUNK_SIZE < (1 << 15)); // we use 16-bit ints as the type of the hash table, chunk size must be smaller
  
  return exports;
  
  })();
  
  ;
          return MiniLZ4;
        })();
        LZ4.CHUNK_SIZE = LZ4.codec.CHUNK_SIZE;
      },loadPackage:function (pack, preloadPlugin) {
        LZ4.init();
        var compressedData = pack['compressedData'];
        if (!compressedData) compressedData = LZ4.codec.compressPackage(pack['data']);
        assert(compressedData['cachedIndexes'].length === compressedData['cachedChunks'].length);
        for (var i = 0; i < compressedData['cachedIndexes'].length; i++) {
          compressedData['cachedIndexes'][i] = -1;
          compressedData['cachedChunks'][i] = compressedData['data'].subarray(compressedData['cachedOffset'] + i*LZ4.CHUNK_SIZE,
                                                                        compressedData['cachedOffset'] + (i+1)*LZ4.CHUNK_SIZE);
          assert(compressedData['cachedChunks'][i].length === LZ4.CHUNK_SIZE);
        }
        pack['metadata'].files.forEach(function(file) {
          var dir = PATH.dirname(file.filename);
          var name = PATH.basename(file.filename);
          FS.createPath('', dir, true, true);
          var parent = FS.analyzePath(dir).object;
          LZ4.createNode(parent, name, LZ4.FILE_MODE, 0, {
            compressedData: compressedData,
            start: file.start,
            end: file.end,
          });
        });
        // Preload files if necessary. This code is largely similar to
        // createPreloadedFile in library_fs.js. However, a main difference here
        // is that we only decompress the file if it can be preloaded.
        // Abstracting out the common parts seems to be more effort than it is
        // worth.
        if (preloadPlugin) {
          Browser.init();
          pack['metadata'].files.forEach(function(file) {
            var handled = false;
            var fullname = file.filename;
            Module['preloadPlugins'].forEach(function(plugin) {
              if (handled) return;
              if (plugin['canHandle'](fullname)) {
                var dep = getUniqueRunDependency('fp ' + fullname);
                addRunDependency(dep);
                var finish = function() {
                  removeRunDependency(dep);
                }
                var byteArray = FS.readFile(fullname);
                plugin['handle'](byteArray, fullname, finish, finish);
                handled = true;
              }
            });
          });
        }
      },createNode:function (parent, name, mode, dev, contents, mtime) {
        var node = FS.createNode(parent, name, mode);
        node.mode = mode;
        node.node_ops = LZ4.node_ops;
        node.stream_ops = LZ4.stream_ops;
        node.timestamp = (mtime || new Date).getTime();
        assert(LZ4.FILE_MODE !== LZ4.DIR_MODE);
        if (mode === LZ4.FILE_MODE) {
          node.size = contents.end - contents.start;
          node.contents = contents;
        } else {
          node.size = 4096;
          node.contents = {};
        }
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },node_ops:{getattr:function(node) {
          return {
            dev: 1,
            ino: node.id,
            mode: node.mode,
            nlink: 1,
            uid: 0,
            gid: 0,
            rdev: undefined,
            size: node.size,
            atime: new Date(node.timestamp),
            mtime: new Date(node.timestamp),
            ctime: new Date(node.timestamp),
            blksize: 4096,
            blocks: Math.ceil(node.size / 4096),
          };
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
        },lookup:function(parent, name) {
          throw new FS.ErrnoError(44);
        },mknod:function (parent, name, mode, dev) {
          throw new FS.ErrnoError(63);
        },rename:function (oldNode, newDir, newName) {
          throw new FS.ErrnoError(63);
        },unlink:function(parent, name) {
          throw new FS.ErrnoError(63);
        },rmdir:function(parent, name) {
          throw new FS.ErrnoError(63);
        },readdir:function(node) {
          throw new FS.ErrnoError(63);
        },symlink:function(parent, newName, oldPath) {
          throw new FS.ErrnoError(63);
        }},stream_ops:{read:function (stream, buffer, offset, length, position) {
          //out('LZ4 read ' + [offset, length, position]);
          length = Math.min(length, stream.node.size - position);
          if (length <= 0) return 0;
          var contents = stream.node.contents;
          var compressedData = contents.compressedData;
          var written = 0;
          while (written < length) {
            var start = contents.start + position + written; // start index in uncompressed data
            var desired = length - written;
            //out('current read: ' + ['start', start, 'desired', desired]);
            var chunkIndex = Math.floor(start / LZ4.CHUNK_SIZE);
            var compressedStart = compressedData['offsets'][chunkIndex];
            var compressedSize = compressedData['sizes'][chunkIndex];
            var currChunk;
            if (compressedData['successes'][chunkIndex]) {
              var found = compressedData['cachedIndexes'].indexOf(chunkIndex);
              if (found >= 0) {
                currChunk = compressedData['cachedChunks'][found];
              } else {
                // decompress the chunk
                compressedData['cachedIndexes'].pop();
                compressedData['cachedIndexes'].unshift(chunkIndex);
                currChunk = compressedData['cachedChunks'].pop();
                compressedData['cachedChunks'].unshift(currChunk);
                if (compressedData['debug']) {
                  out('decompressing chunk ' + chunkIndex);
                  Module['decompressedChunks'] = (Module['decompressedChunks'] || 0) + 1;
                }
                var compressed = compressedData['data'].subarray(compressedStart, compressedStart + compressedSize);
                //var t = Date.now();
                var originalSize = LZ4.codec.uncompress(compressed, currChunk);
                //out('decompress time: ' + (Date.now() - t));
                if (chunkIndex < compressedData['successes'].length-1) assert(originalSize === LZ4.CHUNK_SIZE); // all but the last chunk must be full-size
              }
            } else {
              // uncompressed
              currChunk = compressedData['data'].subarray(compressedStart, compressedStart + LZ4.CHUNK_SIZE);
            }
            var startInChunk = start % LZ4.CHUNK_SIZE;
            var endInChunk = Math.min(startInChunk + desired, LZ4.CHUNK_SIZE);
            buffer.set(currChunk.subarray(startInChunk, endInChunk), offset + written);
            var currWritten = endInChunk - startInChunk;
            written += currWritten;
          }
          return written;
        },write:function (stream, buffer, offset, length, position) {
          throw new FS.ErrnoError(29);
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.size;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        }}};
  var FS = {root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(path, opts = {}) => {
        path = PATH_FS.resolve(path);
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        opts = Object.assign(defaults, opts)
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the absolute path
        var parts = path.split('/').filter((p) => !!p);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count + 1 });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:(node) => {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:(parentid, name) => {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:(node) => {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:(node) => {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:(parent, name) => {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:(parent, name, mode, rdev) => {
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:(node) => {
        FS.hashRemoveNode(node);
      },isRoot:(node) => {
        return node === node.parent;
      },isMountpoint:(node) => {
        return !!node.mounted;
      },isFile:(mode) => {
        return (mode & 61440) === 32768;
      },isDir:(mode) => {
        return (mode & 61440) === 16384;
      },isLink:(mode) => {
        return (mode & 61440) === 40960;
      },isChrdev:(mode) => {
        return (mode & 61440) === 8192;
      },isBlkdev:(mode) => {
        return (mode & 61440) === 24576;
      },isFIFO:(mode) => {
        return (mode & 61440) === 4096;
      },isSocket:(mode) => {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"r+":2,"w":577,"w+":578,"a":1089,"a+":1090},modeStringToFlags:(str) => {
        var flags = FS.flagModes[str];
        if (typeof flags == 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:(flag) => {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:(node, perms) => {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:(dir) => {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:(dir, name) => {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:(dir, name, isdir) => {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },mayOpen:(node, flags) => {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:(fd_start = 0, fd_end = FS.MAX_OPEN_FDS) => {
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:(fd) => FS.streams[fd],createStream:(stream, fd_start, fd_end) => {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function() {
            this.shared = { };
          };
          FS.FSStream.prototype = {};
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              /** @this {FS.FSStream} */
              get: function() { return this.node; },
              /** @this {FS.FSStream} */
              set: function(val) { this.node = val; }
            },
            isRead: {
              /** @this {FS.FSStream} */
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              /** @this {FS.FSStream} */
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              /** @this {FS.FSStream} */
              get: function() { return (this.flags & 1024); }
            },
            flags: {
              /** @this {FS.FSStream} */
              get: function() { return this.shared.flags; },
              /** @this {FS.FSStream} */
              set: function(val) { this.shared.flags = val; },
            },
            position : {
              /** @this {FS.FSStream} */
              get: function() { return this.shared.position; },
              /** @this {FS.FSStream} */
              set: function(val) { this.shared.position = val; },
            },
          });
        }
        // clone it, so we can return an instance of FSStream
        stream = Object.assign(new FS.FSStream(), stream);
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:(fd) => {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:(stream) => {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:() => {
          throw new FS.ErrnoError(70);
        }},major:(dev) => ((dev) >> 8),minor:(dev) => ((dev) & 0xff),makedev:(ma, mi) => ((ma) << 8 | (mi)),registerDevice:(dev, ops) => {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:(dev) => FS.devices[dev],getMounts:(mount) => {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:(populate, callback) => {
        if (typeof populate == 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach((mount) => {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:(type, opts, mountpoint) => {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:(mountpoint) => {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach((hash) => {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1);
      },lookup:(parent, name) => {
        return parent.node_ops.lookup(parent, name);
      },mknod:(path, mode, dev) => {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:(path, mode) => {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:(path, mode) => {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:(path, mode) => {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:(path, mode, dev) => {
        if (typeof dev == 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:(oldpath, newpath) => {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:(old_path, new_path) => {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },rmdir:(path) => {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },readdir:(path) => {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:(path) => {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },readlink:(path) => {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:(path, dontFollow) => {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:(path) => {
        return FS.stat(path, true);
      },chmod:(path, mode, dontFollow) => {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:(path, mode) => {
        FS.chmod(path, mode, true);
      },fchmod:(fd, mode) => {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:(path, uid, gid, dontFollow) => {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:(path, uid, gid) => {
        FS.chown(path, uid, gid, true);
      },fchown:(fd, uid, gid) => {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:(path, len) => {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:(fd, len) => {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:(path, atime, mtime) => {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:(path, flags, mode) => {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags == 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode == 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path == 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512) && !created) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        });
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
          }
        }
        return stream;
      },close:(stream) => {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:(stream) => {
        return stream.fd === null;
      },llseek:(stream, offset, whence) => {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:(stream, buffer, offset, length, position) => {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:(stream, buffer, offset, length, position, canOwn) => {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },allocate:(stream, offset, length) => {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:(stream, length, position, prot, flags) => {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags);
      },msync:(stream, buffer, offset, length, mmapFlags) => {
        if (!stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:(stream) => 0,ioctl:(stream, cmd, arg) => {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:(path, opts = {}) => {
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:(path, data, opts = {}) => {
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:() => FS.currentPath,chdir:(path) => {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:() => {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:() => {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          write: (stream, buffer, offset, length, pos) => length,
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        // use a buffer to avoid overhead of individual crypto calls per byte
        var randomBuffer = new Uint8Array(1024), randomLeft = 0;
        var randomByte = () => {
          if (randomLeft === 0) {
            randomLeft = randomFill(randomBuffer).byteLength;
          }
          return randomBuffer[--randomLeft];
        };
        FS.createDevice('/dev', 'random', randomByte);
        FS.createDevice('/dev', 'urandom', randomByte);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:() => {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: () => {
            var node = FS.createNode(proc_self, 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: (parent, name) => {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: () => stream.path },
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:() => {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
      },ensureErrnoError:() => {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          // We set the `name` property to be able to identify `FS.ErrnoError`
          // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
          // - when using PROXYFS, an error can come from an underlying FS
          // as different FS objects have their own FS.ErrnoError each,
          // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
          // we'll use the reliable test `err.name == "ErrnoError"` instead
          this.name = 'ErrnoError';
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
          };
          this.setErrno(errno);
          this.message = 'FS error';
  
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach((code) => {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:() => {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
          'IDBFS': IDBFS,
        };
      },init:(input, output, error) => {
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:() => {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:(canRead, canWrite) => {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },findObject:(path, dontResolveLastLink) => {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
          return null;
        }
        return ret.object;
      },analyzePath:(path, dontResolveLastLink) => {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createPath:(parent, path, canRead, canWrite) => {
        parent = typeof parent == 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:(parent, name, properties, canRead, canWrite) => {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:(parent, name, data, canRead, canWrite, canOwn) => {
        var path = name;
        if (parent) {
          parent = typeof parent == 'string' ? parent : FS.getPath(parent);
          path = name ? PATH.join2(parent, name) : parent;
        }
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data == 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:(parent, name, input, output) => {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: (stream) => {
            stream.seekable = false;
          },
          close: (stream) => {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: (stream, buffer, offset, length, pos /* ignored */) => {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: (stream, buffer, offset, length, pos) => {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },forceLoadFile:(obj) => {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest != 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
      },createLazyFile:(parent, name, url, canRead, canWrite) => {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (from, to) => {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            }
            return intArrayFromString(xhr.responseText || '', true);
          };
          var lazyArray = this;
          lazyArray.setDataGetter((chunkNum) => {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof lazyArray.chunks[chunkNum] == 'undefined') throw new Error('doXHR failed!');
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest != 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach((key) => {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            FS.forceLoadFile(node);
            return fn.apply(null, arguments);
          };
        });
        function writeChunks(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        }
        // use a custom read function
        stream_ops.read = (stream, buffer, offset, length, position) => {
          FS.forceLoadFile(node);
          return writeChunks(stream, buffer, offset, length, position)
        };
        // use a custom mmap function
        stream_ops.mmap = (stream, length, position, prot, flags) => {
          FS.forceLoadFile(node);
          var ptr = mmapAlloc(length);
          if (!ptr) {
            throw new FS.ErrnoError(48);
          }
          writeChunks(stream, HEAP8, ptr, length, position);
          return { ptr: ptr, allocated: true };
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          if (Browser.handledByPreloadPlugin(byteArray, fullname, finish, () => {
            if (onerror) onerror();
            removeRunDependency(dep);
          })) {
            return;
          }
          finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          asyncLoad(url, (byteArray) => processData(byteArray), onerror);
        } else {
          processData(url);
        }
      }};
  
  var SYSCALLS = {DEFAULT_POLLMASK:5,calculateAt:function(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = SYSCALLS.getStreamFromFD(dirfd);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return PATH.join2(dir, path);
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)] = stat.dev;
        HEAP32[(((buf)+(8))>>2)] = stat.ino;
        HEAP32[(((buf)+(12))>>2)] = stat.mode;
        HEAPU32[(((buf)+(16))>>2)] = stat.nlink;
        HEAP32[(((buf)+(20))>>2)] = stat.uid;
        HEAP32[(((buf)+(24))>>2)] = stat.gid;
        HEAP32[(((buf)+(28))>>2)] = stat.rdev;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)] = tempI64[0],HEAP32[(((buf)+(44))>>2)] = tempI64[1]);
        HEAP32[(((buf)+(48))>>2)] = 4096;
        HEAP32[(((buf)+(52))>>2)] = stat.blocks;
        var atime = stat.atime.getTime();
        var mtime = stat.mtime.getTime();
        var ctime = stat.ctime.getTime();
        (tempI64 = [Math.floor(atime / 1000)>>>0,(tempDouble=Math.floor(atime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(56))>>2)] = tempI64[0],HEAP32[(((buf)+(60))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(64))>>2)] = (atime % 1000) * 1000;
        (tempI64 = [Math.floor(mtime / 1000)>>>0,(tempDouble=Math.floor(mtime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(72))>>2)] = tempI64[0],HEAP32[(((buf)+(76))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(80))>>2)] = (mtime % 1000) * 1000;
        (tempI64 = [Math.floor(ctime / 1000)>>>0,(tempDouble=Math.floor(ctime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(88))>>2)] = tempI64[0],HEAP32[(((buf)+(92))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(96))>>2)] = (ctime % 1000) * 1000;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(104))>>2)] = tempI64[0],HEAP32[(((buf)+(108))>>2)] = tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        if (!FS.isFile(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (flags & 2) {
          // MAP_PRIVATE calls need not to be synced back to underlying fs
          return 0;
        }
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      }};
  function ___syscall__newselect(nfds, readfds, writefds, exceptfds, timeout) {
  try {
  
      // readfds are supported,
      // writefds checks socket open status
      // exceptfds not supported
      // timeout is always 0 - fully async
  
      var total = 0;
  
      var srcReadLow = (readfds ? HEAP32[((readfds)>>2)] : 0),
          srcReadHigh = (readfds ? HEAP32[(((readfds)+(4))>>2)] : 0);
      var srcWriteLow = (writefds ? HEAP32[((writefds)>>2)] : 0),
          srcWriteHigh = (writefds ? HEAP32[(((writefds)+(4))>>2)] : 0);
      var srcExceptLow = (exceptfds ? HEAP32[((exceptfds)>>2)] : 0),
          srcExceptHigh = (exceptfds ? HEAP32[(((exceptfds)+(4))>>2)] : 0);
  
      var dstReadLow = 0,
          dstReadHigh = 0;
      var dstWriteLow = 0,
          dstWriteHigh = 0;
      var dstExceptLow = 0,
          dstExceptHigh = 0;
  
      var allLow = (readfds ? HEAP32[((readfds)>>2)] : 0) |
                   (writefds ? HEAP32[((writefds)>>2)] : 0) |
                   (exceptfds ? HEAP32[((exceptfds)>>2)] : 0);
      var allHigh = (readfds ? HEAP32[(((readfds)+(4))>>2)] : 0) |
                    (writefds ? HEAP32[(((writefds)+(4))>>2)] : 0) |
                    (exceptfds ? HEAP32[(((exceptfds)+(4))>>2)] : 0);
  
      var check = function(fd, low, high, val) {
        return (fd < 32 ? (low & val) : (high & val));
      };
  
      for (var fd = 0; fd < nfds; fd++) {
        var mask = 1 << (fd % 32);
        if (!(check(fd, allLow, allHigh, mask))) {
          continue;  // index isn't in the set
        }
  
        var stream = SYSCALLS.getStreamFromFD(fd);
  
        var flags = SYSCALLS.DEFAULT_POLLMASK;
  
        if (stream.stream_ops.poll) {
          flags = stream.stream_ops.poll(stream);
        }
  
        if ((flags & 1) && check(fd, srcReadLow, srcReadHigh, mask)) {
          fd < 32 ? (dstReadLow = dstReadLow | mask) : (dstReadHigh = dstReadHigh | mask);
          total++;
        }
        if ((flags & 4) && check(fd, srcWriteLow, srcWriteHigh, mask)) {
          fd < 32 ? (dstWriteLow = dstWriteLow | mask) : (dstWriteHigh = dstWriteHigh | mask);
          total++;
        }
        if ((flags & 2) && check(fd, srcExceptLow, srcExceptHigh, mask)) {
          fd < 32 ? (dstExceptLow = dstExceptLow | mask) : (dstExceptHigh = dstExceptHigh | mask);
          total++;
        }
      }
  
      if (readfds) {
        HEAP32[((readfds)>>2)] = dstReadLow;
        HEAP32[(((readfds)+(4))>>2)] = dstReadHigh;
      }
      if (writefds) {
        HEAP32[((writefds)>>2)] = dstWriteLow;
        HEAP32[(((writefds)+(4))>>2)] = dstWriteHigh;
      }
      if (exceptfds) {
        HEAP32[((exceptfds)>>2)] = dstExceptLow;
        HEAP32[(((exceptfds)+(4))>>2)] = dstExceptHigh;
      }
  
      return total;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  var SOCKFS = {mount:function(mount) {
        // If Module['websocket'] has already been defined (e.g. for configuring
        // the subprotocol/url) use that, if not initialise it to a new object.
        Module['websocket'] = (Module['websocket'] &&
                               ('object' === typeof Module['websocket'])) ? Module['websocket'] : {};
  
        // Add the Event registration mechanism to the exported websocket configuration
        // object so we can register network callbacks from native JavaScript too.
        // For more documentation see system/include/emscripten/emscripten.h
        Module['websocket']._callbacks = {};
        Module['websocket']['on'] = /** @this{Object} */ function(event, callback) {
          if ('function' === typeof callback) {
            this._callbacks[event] = callback;
          }
          return this;
        };
  
        Module['websocket'].emit = /** @this{Object} */ function(event, param) {
          if ('function' === typeof this._callbacks[event]) {
            this._callbacks[event].call(this, param);
          }
        };
  
        // If debug is enabled register simple default logging callbacks for each Event.
  
        return FS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createSocket:function(family, type, protocol) {
        type &= ~526336; // Some applications may pass it; it makes no sense for a single process.
        var streaming = type == 1;
        if (streaming && protocol && protocol != 6) {
          throw new FS.ErrnoError(66); // if SOCK_STREAM, must be tcp or 0.
        }
  
        // create our internal socket structure
        var sock = {
          family: family,
          type: type,
          protocol: protocol,
          server: null,
          error: null, // Used in getsockopt for SOL_SOCKET/SO_ERROR test
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
  
        // create the filesystem node to store the socket structure
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
  
        // and the wrapping stream that enables library functions such
        // as read and write to indirectly interact with the socket
        var stream = FS.createStream({
          path: name,
          node: node,
          flags: 2,
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
  
        // map the new stream to the socket structure (sockets have a 1:1
        // relationship with a stream)
        sock.stream = stream;
  
        return sock;
      },getSocket:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },stream_ops:{poll:function(stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },ioctl:function(stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },read:function(stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            // socket is closed
            return 0;
          }
          buffer.set(msg.buffer, offset);
          return msg.buffer.length;
        },write:function(stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        },close:function(stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }},nextname:function() {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return 'socket[' + (SOCKFS.nextname.current++) + ']';
      },websocket_sock_ops:{createPeer:function(sock, addr, port) {
          var ws;
  
          if (typeof addr == 'object') {
            ws = addr;
            addr = null;
            port = null;
          }
  
          if (ws) {
            // for sockets that've already connected (e.g. we're the server)
            // we can inspect the _socket property for the address
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            }
            // if we're just now initializing a connection to the remote,
            // inspect the url property
            else {
              var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
              if (!result) {
                throw new Error('WebSocket URL must be in the format ws(s)://address:port');
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            // create the actual websocket object and connect
            try {
              // runtimeConfig gets set to true if WebSocket runtime configuration is available.
              var runtimeConfig = (Module['websocket'] && ('object' === typeof Module['websocket']));
  
              // The default value is 'ws://' the replace is needed because the compiler replaces '//' comments with '#'
              // comments without checking context, so we'd end up with ws:#, the replace swaps the '#' for '//' again.
              var url = 'ws:#'.replace('#', '//');
  
              if (runtimeConfig) {
                if ('string' === typeof Module['websocket']['url']) {
                  url = Module['websocket']['url']; // Fetch runtime WebSocket URL config.
                }
              }
  
              if (url === 'ws://' || url === 'wss://') { // Is the supplied URL config just a prefix, if so complete it.
                var parts = addr.split('/');
                url = url + parts[0] + ":" + port + "/" + parts.slice(1).join('/');
              }
  
              // Make the WebSocket subprotocol (Sec-WebSocket-Protocol) default to binary if no configuration is set.
              var subProtocols = 'binary'; // The default value is 'binary'
  
              if (runtimeConfig) {
                if ('string' === typeof Module['websocket']['subprotocol']) {
                  subProtocols = Module['websocket']['subprotocol']; // Fetch runtime WebSocket subprotocol config.
                }
              }
  
              // The default WebSocket options
              var opts = undefined;
  
              if (subProtocols !== 'null') {
                // The regex trims the string (removes spaces at the beginning and end, then splits the string by
                // <any space>,<any space> into an Array. Whitespace removal is important for Websockify and ws.
                subProtocols = subProtocols.replace(/^ +| +$/g,"").split(/ *, */);
  
                opts = subProtocols;
              }
  
              // some webservers (azure) does not support subprotocol header
              if (runtimeConfig && null === Module['websocket']['subprotocol']) {
                subProtocols = 'null';
                opts = undefined;
              }
  
              // If node we use the ws library.
              var WebSocketConstructor;
              {
                WebSocketConstructor = WebSocket;
              }
              ws = new WebSocketConstructor(url, opts);
              ws.binaryType = 'arraybuffer';
            } catch (e) {
              throw new FS.ErrnoError(23);
            }
          }
  
          var peer = {
            addr: addr,
            port: port,
            socket: ws,
            dgram_send_queue: []
          };
  
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
  
          // if this is a bound dgram socket, send the port number first to allow
          // us to override the ephemeral port reported to us by remotePort on the
          // remote end.
          if (sock.type === 2 && typeof sock.sport != 'undefined') {
            peer.dgram_send_queue.push(new Uint8Array([
                255, 255, 255, 255,
                'p'.charCodeAt(0), 'o'.charCodeAt(0), 'r'.charCodeAt(0), 't'.charCodeAt(0),
                ((sock.sport & 0xff00) >> 8) , (sock.sport & 0xff)
            ]));
          }
  
          return peer;
        },getPeer:function(sock, addr, port) {
          return sock.peers[addr + ':' + port];
        },addPeer:function(sock, peer) {
          sock.peers[peer.addr + ':' + peer.port] = peer;
        },removePeer:function(sock, peer) {
          delete sock.peers[peer.addr + ':' + peer.port];
        },handlePeerEvents:function(sock, peer) {
          var first = true;
  
          var handleOpen = function () {
  
            Module['websocket'].emit('open', sock.stream.fd);
  
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              // not much we can do here in the way of proper error handling as we've already
              // lied and said this data was sent. shut it down.
              peer.socket.close();
            }
          };
  
          function handleMessage(data) {
            if (typeof data == 'string') {
              var encoder = new TextEncoder(); // should be utf-8
              data = encoder.encode(data); // make a typed array from the string
            } else {
              assert(data.byteLength !== undefined); // must receive an ArrayBuffer
              if (data.byteLength == 0) {
                // An empty ArrayBuffer will emit a pseudo disconnect event
                // as recv/recvmsg will return zero which indicates that a socket
                // has performed a shutdown although the connection has not been disconnected yet.
                return;
              }
              data = new Uint8Array(data); // make a typed array view on the array buffer
            }
  
            // if this is the port message, override the peer's port with it
            var wasfirst = first;
            first = false;
            if (wasfirst &&
                data.length === 10 &&
                data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 &&
                data[4] === 'p'.charCodeAt(0) && data[5] === 'o'.charCodeAt(0) && data[6] === 'r'.charCodeAt(0) && data[7] === 't'.charCodeAt(0)) {
              // update the peer's port and it's key in the peer map
              var newport = ((data[8] << 8) | data[9]);
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
  
            sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
            Module['websocket'].emit('message', sock.stream.fd);
          };
  
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on('open', handleOpen);
            peer.socket.on('message', function(data, isBinary) {
              if (!isBinary) {
                return;
              }
              handleMessage((new Uint8Array(data)).buffer); // copy from node Buffer -> ArrayBuffer
            });
            peer.socket.on('close', function() {
              Module['websocket'].emit('close', sock.stream.fd);
            });
            peer.socket.on('error', function(error) {
              // Although the ws library may pass errors that may be more descriptive than
              // ECONNREFUSED they are not necessarily the expected error code e.g.
              // ENOTFOUND on getaddrinfo seems to be node.js specific, so using ECONNREFUSED
              // is still probably the most useful thing to do.
              sock.error = 14; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
              Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'ECONNREFUSED: Connection refused']);
              // don't throw
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onclose = function() {
              Module['websocket'].emit('close', sock.stream.fd);
            };
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
            peer.socket.onerror = function(error) {
              // The WebSocket spec only allows a 'simple event' to be thrown on error,
              // so we only really know as much as ECONNREFUSED.
              sock.error = 14; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
              Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'ECONNREFUSED: Connection refused']);
            };
          }
        },poll:function(sock) {
          if (sock.type === 1 && sock.server) {
            // listen sockets should only say they're available for reading
            // if there are pending clients.
            return sock.pending.length ? (64 | 1) : 0;
          }
  
          var mask = 0;
          var dest = sock.type === 1 ?  // we only care about the socket state for connection-based sockets
            SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) :
            null;
  
          if (sock.recv_queue.length ||
              !dest ||  // connection-less sockets are always ready to read
              (dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {  // let recv return 0 once closed
            mask |= (64 | 1);
          }
  
          if (!dest ||  // connection-less sockets are always ready to write
              (dest && dest.socket.readyState === dest.socket.OPEN)) {
            mask |= 4;
          }
  
          if ((dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {
            mask |= 16;
          }
  
          return mask;
        },ioctl:function(sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[((arg)>>2)] = bytes;
              return 0;
            default:
              return 28;
          }
        },close:function(sock) {
          // if we've spawned a listen server, close it
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          // close any peer connections
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },bind:function(sock, addr, port) {
          if (typeof sock.saddr != 'undefined' || typeof sock.sport != 'undefined') {
            throw new FS.ErrnoError(28);  // already bound
          }
          sock.saddr = addr;
          sock.sport = port;
          // in order to emulate dgram sockets, we need to launch a listen server when
          // binding on a connection-less socket
          // note: this is only required on the server side
          if (sock.type === 2) {
            // close the existing server if it exists
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            // swallow error operation not supported error that occurs when binding in the
            // browser where this isn't supported
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e.name === 'ErrnoError')) throw e;
              if (e.errno !== 138) throw e;
            }
          }
        },connect:function(sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(138);
          }
  
          // TODO autobind
          // if (!sock.addr && sock.type == 2) {
          // }
  
          // early out if we're already connected / in the middle of connecting
          if (typeof sock.daddr != 'undefined' && typeof sock.dport != 'undefined') {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(7);
              } else {
                throw new FS.ErrnoError(30);
              }
            }
          }
  
          // add the socket to our peer list and set our
          // destination address / port to match
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
  
          // always "fail" in non-blocking mode
          throw new FS.ErrnoError(26);
        },listen:function(sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(138);
          }
        },accept:function(listensock) {
          if (!listensock.server || !listensock.pending.length) {
            throw new FS.ErrnoError(28);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },getname:function(sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === undefined || sock.dport === undefined) {
              throw new FS.ErrnoError(53);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            // TODO saddr and sport will be set for bind()'d UDP sockets, but what
            // should we be returning for TCP sockets that've been connect()'d?
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr: addr, port: port };
        },sendmsg:function(sock, buffer, offset, length, addr, port) {
          if (sock.type === 2) {
            // connection-less sockets will honor the message address,
            // and otherwise fall back to the bound destination address
            if (addr === undefined || port === undefined) {
              addr = sock.daddr;
              port = sock.dport;
            }
            // if there was no address to fall back to, error out
            if (addr === undefined || port === undefined) {
              throw new FS.ErrnoError(17);
            }
          } else {
            // connection-based sockets will only use the bound
            addr = sock.daddr;
            port = sock.dport;
          }
  
          // find the peer for the destination address
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
  
          // early out if not connected with a connection-based socket
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(53);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(6);
            }
          }
  
          // create a copy of the incoming data to send, as the WebSocket API
          // doesn't work entirely with an ArrayBufferView, it'll just send
          // the entire underlying buffer
          if (ArrayBuffer.isView(buffer)) {
            offset += buffer.byteOffset;
            buffer = buffer.buffer;
          }
  
          var data;
            data = buffer.slice(offset, offset + length);
  
          // if we're emulating a connection-less dgram socket and don't have
          // a cached connection, queue the buffer to send upon connect and
          // lie, saying the data was sent now.
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              // if we're not connected, open a new connection
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
  
          try {
            // send the actual data
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(28);
          }
        },recvmsg:function(sock, length) {
          // http://pubs.opengroup.org/onlinepubs/7908799/xns/recvmsg.html
          if (sock.type === 1 && sock.server) {
            // tcp servers should not be recv()'ing on the listen socket
            throw new FS.ErrnoError(53);
          }
  
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
  
              if (!dest) {
                // if we have a destination address but are not connected, error out
                throw new FS.ErrnoError(53);
              }
              if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                // return null if the socket has closed
                return null;
              }
              // else, our socket is in a valid state but truly has nothing available
              throw new FS.ErrnoError(6);
            }
            throw new FS.ErrnoError(6);
          }
  
          // queued.data will be an ArrayBuffer if it's unadulterated, but if it's
          // requeued TCP data it'll be an ArrayBufferView
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
  
          // push back any unread data for TCP connections
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
  
          return res;
        }}};
  
  function getSocketFromFD(fd) {
      var socket = SOCKFS.getSocket(fd);
      if (!socket) throw new FS.ErrnoError(8);
      return socket;
    }
  
  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)] = value;
      return value;
    }
  var Sockets = {BUFFER_SIZE:10240,MAX_BUFFER_SIZE:10485760,nextFd:1,fds:{},nextport:1,maxport:65535,peer:null,connections:{},portmap:{},localAddr:4261412874,addrPool:[33554442,50331658,67108874,83886090,100663306,117440522,134217738,150994954,167772170,184549386,201326602,218103818,234881034]};
  
  function inetPton4(str) {
      var b = str.split('.');
      for (var i = 0; i < 4; i++) {
        var tmp = Number(b[i]);
        if (isNaN(tmp)) return null;
        b[i] = tmp;
      }
      return (b[0] | (b[1] << 8) | (b[2] << 16) | (b[3] << 24)) >>> 0;
    }
  
  
  /** @suppress {checkTypes} */
  function jstoi_q(str) {
      return parseInt(str);
    }
  function inetPton6(str) {
      var words;
      var w, offset, z, i;
      /* http://home.deds.nl/~aeron/regex/ */
      var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i
      var parts = [];
      if (!valid6regx.test(str)) {
        return null;
      }
      if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      // Z placeholder to keep track of zeros when splitting the string on ":"
      if (str.startsWith("::")) {
        str = str.replace("::", "Z:"); // leading zeros case
      } else {
        str = str.replace("::", ":Z:");
      }
  
      if (str.indexOf(".") > 0) {
        // parse IPv4 embedded stress
        str = str.replace(new RegExp('[.]', 'g'), ":");
        words = str.split(":");
        words[words.length-4] = jstoi_q(words[words.length-4]) + jstoi_q(words[words.length-3])*256;
        words[words.length-3] = jstoi_q(words[words.length-2]) + jstoi_q(words[words.length-1])*256;
        words = words.slice(0, words.length-2);
      } else {
        words = str.split(":");
      }
  
      offset = 0; z = 0;
      for (w=0; w < words.length; w++) {
        if (typeof words[w] == 'string') {
          if (words[w] === 'Z') {
            // compressed zeros - write appropriate number of zero words
            for (z = 0; z < (8 - words.length+1); z++) {
              parts[w+z] = 0;
            }
            offset = z-1;
          } else {
            // parse hex to field to 16-bit value and write it in network byte-order
            parts[w+offset] = _htons(parseInt(words[w],16));
          }
        } else {
          // parsed IPv4 words
          parts[w+offset] = words[w];
        }
      }
      return [
        (parts[1] << 16) | parts[0],
        (parts[3] << 16) | parts[2],
        (parts[5] << 16) | parts[4],
        (parts[7] << 16) | parts[6]
      ];
    }
  
  /** @param {number=} addrlen */
  function writeSockaddr(sa, family, addr, port, addrlen) {
      switch (family) {
        case 2:
          addr = inetPton4(addr);
          zeroMemory(sa, 16);
          if (addrlen) {
            HEAP32[((addrlen)>>2)] = 16;
          }
          HEAP16[((sa)>>1)] = family;
          HEAP32[(((sa)+(4))>>2)] = addr;
          HEAP16[(((sa)+(2))>>1)] = _htons(port);
          break;
        case 10:
          addr = inetPton6(addr);
          zeroMemory(sa, 28);
          if (addrlen) {
            HEAP32[((addrlen)>>2)] = 28;
          }
          HEAP32[((sa)>>2)] = family;
          HEAP32[(((sa)+(8))>>2)] = addr[0];
          HEAP32[(((sa)+(12))>>2)] = addr[1];
          HEAP32[(((sa)+(16))>>2)] = addr[2];
          HEAP32[(((sa)+(20))>>2)] = addr[3];
          HEAP16[(((sa)+(2))>>1)] = _htons(port);
          break;
        default:
          return 5;
      }
      return 0;
    }
  
  
  var DNS = {address_map:{id:1,addrs:{},names:{}},lookup_name:function (name) {
        // If the name is already a valid ipv4 / ipv6 address, don't generate a fake one.
        var res = inetPton4(name);
        if (res !== null) {
          return name;
        }
        res = inetPton6(name);
        if (res !== null) {
          return name;
        }
  
        // See if this name is already mapped.
        var addr;
  
        if (DNS.address_map.addrs[name]) {
          addr = DNS.address_map.addrs[name];
        } else {
          var id = DNS.address_map.id++;
          assert(id < 65535, 'exceeded max address mappings of 65535');
  
          addr = '172.29.' + (id & 0xff) + '.' + (id & 0xff00);
  
          DNS.address_map.names[addr] = name;
          DNS.address_map.addrs[name] = addr;
        }
  
        return addr;
      },lookup_addr:function (addr) {
        if (DNS.address_map.names[addr]) {
          return DNS.address_map.names[addr];
        }
  
        return null;
      }};
  
  function ___syscall_accept4(fd, addr, addrlen, flags, d1, d2) {
  try {
  
      var sock = getSocketFromFD(fd);
      var newsock = sock.sock_ops.accept(sock);
      if (addr) {
        var errno = writeSockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport, addrlen);
      }
      return newsock.stream.fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  function inetNtop4(addr) {
      return (addr & 0xff) + '.' + ((addr >> 8) & 0xff) + '.' + ((addr >> 16) & 0xff) + '.' + ((addr >> 24) & 0xff)
    }
  
  
  function inetNtop6(ints) {
      //  ref:  http://www.ietf.org/rfc/rfc2373.txt - section 2.5.4
      //  Format for IPv4 compatible and mapped  128-bit IPv6 Addresses
      //  128-bits are split into eight 16-bit words
      //  stored in network byte order (big-endian)
      //  |                80 bits               | 16 |      32 bits        |
      //  +-----------------------------------------------------------------+
      //  |               10 bytes               |  2 |      4 bytes        |
      //  +--------------------------------------+--------------------------+
      //  +               5 words                |  1 |      2 words        |
      //  +--------------------------------------+--------------------------+
      //  |0000..............................0000|0000|    IPv4 ADDRESS     | (compatible)
      //  +--------------------------------------+----+---------------------+
      //  |0000..............................0000|FFFF|    IPv4 ADDRESS     | (mapped)
      //  +--------------------------------------+----+---------------------+
      var str = "";
      var word = 0;
      var longest = 0;
      var lastzero = 0;
      var zstart = 0;
      var len = 0;
      var i = 0;
      var parts = [
        ints[0] & 0xffff,
        (ints[0] >> 16),
        ints[1] & 0xffff,
        (ints[1] >> 16),
        ints[2] & 0xffff,
        (ints[2] >> 16),
        ints[3] & 0xffff,
        (ints[3] >> 16)
      ];
  
      // Handle IPv4-compatible, IPv4-mapped, loopback and any/unspecified addresses
  
      var hasipv4 = true;
      var v4part = "";
      // check if the 10 high-order bytes are all zeros (first 5 words)
      for (i = 0; i < 5; i++) {
        if (parts[i] !== 0) { hasipv4 = false; break; }
      }
  
      if (hasipv4) {
        // low-order 32-bits store an IPv4 address (bytes 13 to 16) (last 2 words)
        v4part = inetNtop4(parts[6] | (parts[7] << 16));
        // IPv4-mapped IPv6 address if 16-bit value (bytes 11 and 12) == 0xFFFF (6th word)
        if (parts[5] === -1) {
          str = "::ffff:";
          str += v4part;
          return str;
        }
        // IPv4-compatible IPv6 address if 16-bit value (bytes 11 and 12) == 0x0000 (6th word)
        if (parts[5] === 0) {
          str = "::";
          //special case IPv6 addresses
          if (v4part === "0.0.0.0") v4part = ""; // any/unspecified address
          if (v4part === "0.0.0.1") v4part = "1";// loopback address
          str += v4part;
          return str;
        }
      }
  
      // Handle all other IPv6 addresses
  
      // first run to find the longest contiguous zero words
      for (word = 0; word < 8; word++) {
        if (parts[word] === 0) {
          if (word - lastzero > 1) {
            len = 0;
          }
          lastzero = word;
          len++;
        }
        if (len > longest) {
          longest = len;
          zstart = word - longest + 1;
        }
      }
  
      for (word = 0; word < 8; word++) {
        if (longest > 1) {
          // compress contiguous zeros - to produce "::"
          if (parts[word] === 0 && word >= zstart && word < (zstart + longest) ) {
            if (word === zstart) {
              str += ":";
              if (zstart === 0) str += ":"; //leading zeros case
            }
            continue;
          }
        }
        // converts 16-bit words from big-endian to little-endian before converting to hex string
        str += Number(_ntohs(parts[word] & 0xffff)).toString(16);
        str += word < 7 ? ":" : "";
      }
      return str;
    }
  
  function readSockaddr(sa, salen) {
      // family / port offsets are common to both sockaddr_in and sockaddr_in6
      var family = HEAP16[((sa)>>1)];
      var port = _ntohs(HEAPU16[(((sa)+(2))>>1)]);
      var addr;
  
      switch (family) {
        case 2:
          if (salen !== 16) {
            return { errno: 28 };
          }
          addr = HEAP32[(((sa)+(4))>>2)];
          addr = inetNtop4(addr);
          break;
        case 10:
          if (salen !== 28) {
            return { errno: 28 };
          }
          addr = [
            HEAP32[(((sa)+(8))>>2)],
            HEAP32[(((sa)+(12))>>2)],
            HEAP32[(((sa)+(16))>>2)],
            HEAP32[(((sa)+(20))>>2)]
          ];
          addr = inetNtop6(addr);
          break;
        default:
          return { errno: 5 };
      }
  
      return { family: family, addr: addr, port: port };
    }
  
  
  /** @param {boolean=} allowNull */
  function getSocketAddress(addrp, addrlen, allowNull) {
      if (allowNull && addrp === 0) return null;
      var info = readSockaddr(addrp, addrlen);
      if (info.errno) throw new FS.ErrnoError(info.errno);
      info.addr = DNS.lookup_addr(info.addr) || info.addr;
      return info;
    }
  
  function ___syscall_bind(fd, addr, addrlen, d1, d2, d3) {
  try {
  
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.bind(sock, info.addr, info.port);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_chdir(path) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.chdir(path);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_chmod(path, mode) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.chmod(path, mode);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  function ___syscall_connect(fd, addr, addrlen, d1, d2, d3) {
  try {
  
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.connect(sock, info.addr, info.port);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_dup(fd) {
  try {
  
      var old = SYSCALLS.getStreamFromFD(fd);
      return FS.createStream(old, 0).fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_faccessat(dirfd, path, amode, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (amode & ~7) {
        // need a valid mode
        return -28;
      }
      var lookup = FS.lookupPath(path, { follow: true });
      var node = lookup.node;
      if (!node) {
        return -44;
      }
      var perms = '';
      if (amode & 4) perms += 'r';
      if (amode & 2) perms += 'w';
      if (amode & 1) perms += 'x';
      if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
        return -2;
      }
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_fchownat(dirfd, path, owner, group, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      var nofollow = flags & 256;
      flags = flags & (~256);
      path = SYSCALLS.calculateAt(dirfd, path);
      (nofollow ? FS.lchown : FS.chown)(path, owner, group);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function ___syscall_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          var newStream;
          newStream = FS.createStream(stream, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 5:
        /* case 5: Currently in musl F_GETLK64 has same value as F_GETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */ {
          
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)] = 2;
          return 0;
        }
        case 6:
        case 7:
        /* case 6: Currently in musl F_SETLK64 has same value as F_SETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
        /* case 7: Currently in musl F_SETLKW64 has same value as F_SETLKW, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
          
          
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fcntl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_fdatasync(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      return 0; // we can't do anything synchronously; the in-memory FS is already synced to
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_fstat64(fd, buf) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      return SYSCALLS.doStat(FS.stat, stream.path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function convertI32PairToI53Checked(lo, hi) {
      return ((hi + 0x200000) >>> 0 < 0x400001 - !!lo) ? (lo >>> 0) + hi * 4294967296 : NaN;
    }
  
  
  
  
  function ___syscall_ftruncate64(fd, length_low, length_high) {
  try {
  
      var length = convertI32PairToI53Checked(length_low, length_high); if (isNaN(length)) return -61;
      FS.ftruncate(fd, length);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function stringToUTF8(str, outPtr, maxBytesToWrite) {
      return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
    }
  
  function ___syscall_getcwd(buf, size) {
  try {
  
      if (size === 0) return -28;
      var cwd = FS.cwd();
      var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
      if (size < cwdLengthInBytes) return -68;
      stringToUTF8(cwd, buf, size);
      return cwdLengthInBytes;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function ___syscall_getdents64(fd, dirp, count) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd)
      if (!stream.getdents) {
        stream.getdents = FS.readdir(stream.path);
      }
  
      var struct_size = 280;
      var pos = 0;
      var off = FS.llseek(stream, 0, 1);
  
      var idx = Math.floor(off / struct_size);
  
      while (idx < stream.getdents.length && pos + struct_size <= count) {
        var id;
        var type;
        var name = stream.getdents[idx];
        if (name === '.') {
          id = stream.node.id;
          type = 4; // DT_DIR
        }
        else if (name === '..') {
          var lookup = FS.lookupPath(stream.path, { parent: true });
          id = lookup.node.id;
          type = 4; // DT_DIR
        }
        else {
          var child = FS.lookupNode(stream.node, name);
          id = child.id;
          type = FS.isChrdev(child.mode) ? 2 :  // DT_CHR, character device.
                 FS.isDir(child.mode) ? 4 :     // DT_DIR, directory.
                 FS.isLink(child.mode) ? 10 :   // DT_LNK, symbolic link.
                 8;                             // DT_REG, regular file.
        }
        (tempI64 = [id>>>0,(tempDouble=id,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((dirp + pos)>>2)] = tempI64[0],HEAP32[(((dirp + pos)+(4))>>2)] = tempI64[1]);
        (tempI64 = [(idx + 1) * struct_size>>>0,(tempDouble=(idx + 1) * struct_size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((dirp + pos)+(8))>>2)] = tempI64[0],HEAP32[(((dirp + pos)+(12))>>2)] = tempI64[1]);
        HEAP16[(((dirp + pos)+(16))>>1)] = 280;
        HEAP8[(((dirp + pos)+(18))>>0)] = type;
        stringToUTF8(name, dirp + pos + 19, 256);
        pos += struct_size;
        idx += 1;
      }
      FS.llseek(stream, idx * struct_size, 0);
      return pos;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  
  function ___syscall_getpeername(fd, addr, addrlen, d1, d2, d3) {
  try {
  
      var sock = getSocketFromFD(fd);
      if (!sock.daddr) {
        return -53; // The socket is not connected.
      }
      var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport, addrlen);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  
  function ___syscall_getsockname(fd, addr, addrlen, d1, d2, d3) {
  try {
  
      err("__syscall_getsockname " + fd);
      var sock = getSocketFromFD(fd);
      // TODO: sock.saddr should never be undefined, see TODO in websocket_sock_ops.getname
      var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || '0.0.0.0'), sock.sport, addrlen);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function ___syscall_getsockopt(fd, level, optname, optval, optlen, d1) {
  try {
  
      var sock = getSocketFromFD(fd);
      // Minimal getsockopt aimed at resolving https://github.com/emscripten-core/emscripten/issues/2211
      // so only supports SOL_SOCKET with SO_ERROR.
      if (level === 1) {
        if (optname === 4) {
          HEAP32[((optval)>>2)] = sock.error;
          HEAP32[((optlen)>>2)] = 4;
          sock.error = null; // Clear the error (The SO_ERROR option obtains and then clears this field).
          return 0;
        }
      }
      return -50; // The option is unknown at the level indicated.
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        default: return -28; // not supported
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function ___syscall_listen(fd, backlog) {
  try {
  
      var sock = getSocketFromFD(fd);
      sock.sock_ops.listen(sock, backlog);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_lstat64(path, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.lstat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_mkdirat(dirfd, path, mode) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      // remove a trailing slash, if one - /a/b/ has basename of '', but
      // we want to create b in the context of this function
      path = PATH.normalize(path);
      if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
      FS.mkdir(path, mode, 0);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_newfstatat(dirfd, path, buf, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      var nofollow = flags & 256;
      var allowEmpty = flags & 4096;
      flags = flags & (~6400);
      path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
      return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_openat(dirfd, path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      var mode = varargs ? SYSCALLS.get() : 0;
      return FS.open(path, flags, mode).fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_poll(fds, nfds, timeout) {
  try {
  
      var nonzero = 0;
      for (var i = 0; i < nfds; i++) {
        var pollfd = fds + 8 * i;
        var fd = HEAP32[((pollfd)>>2)];
        var events = HEAP16[(((pollfd)+(4))>>1)];
        var mask = 32;
        var stream = FS.getStream(fd);
        if (stream) {
          mask = SYSCALLS.DEFAULT_POLLMASK;
          if (stream.stream_ops.poll) {
            mask = stream.stream_ops.poll(stream);
          }
        }
        mask &= events | 8 | 16;
        if (mask) nonzero++;
        HEAP16[(((pollfd)+(6))>>1)] = mask;
      }
      return nonzero;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  function ___syscall_readlinkat(dirfd, path, buf, bufsize) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (bufsize <= 0) return -28;
      var ret = FS.readlink(path);
  
      var len = Math.min(bufsize, lengthBytesUTF8(ret));
      var endChar = HEAP8[buf+len];
      stringToUTF8(ret, buf, bufsize+1);
      // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
      // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
      HEAP8[buf+len] = endChar;
      return len;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  
  function ___syscall_recvfrom(fd, buf, len, flags, addr, addrlen) {
  try {
  
      var sock = getSocketFromFD(fd);
      var msg = sock.sock_ops.recvmsg(sock, len);
      if (!msg) return 0; // socket is closed
      if (addr) {
        var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
      }
      HEAPU8.set(msg.buffer, buf);
      return msg.buffer.byteLength;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
  try {
  
      oldpath = SYSCALLS.getStr(oldpath);
      newpath = SYSCALLS.getStr(newpath);
      oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
      newpath = SYSCALLS.calculateAt(newdirfd, newpath);
      FS.rename(oldpath, newpath);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_rmdir(path) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.rmdir(path);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  function ___syscall_sendto(fd, message, length, flags, addr, addr_len) {
  try {
  
      var sock = getSocketFromFD(fd);
      var dest = getSocketAddress(addr, addr_len, true);
      if (!dest) {
        // send, no address provided
        return FS.write(sock.stream, HEAP8,message, length);
      }
      // sendto an address
      return sock.sock_ops.sendmsg(sock, HEAP8,message, length, dest.addr, dest.port);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function ___syscall_socket(domain, type, protocol) {
  try {
  
      var sock = SOCKFS.createSocket(domain, type, protocol);
      return sock.stream.fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_stat64(path, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.stat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_statfs64(path, size, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      // NOTE: None of the constants here are true. We're just returning safe and
      //       sane values.
      HEAP32[(((buf)+(4))>>2)] = 4096;
      HEAP32[(((buf)+(40))>>2)] = 4096;
      HEAP32[(((buf)+(8))>>2)] = 1000000;
      HEAP32[(((buf)+(12))>>2)] = 500000;
      HEAP32[(((buf)+(16))>>2)] = 500000;
      HEAP32[(((buf)+(20))>>2)] = FS.nextInode;
      HEAP32[(((buf)+(24))>>2)] = 1000000;
      HEAP32[(((buf)+(28))>>2)] = 42;
      HEAP32[(((buf)+(44))>>2)] = 2;  // ST_NOSUID
      HEAP32[(((buf)+(36))>>2)] = 255;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_symlink(target, linkpath) {
  try {
  
      target = SYSCALLS.getStr(target);
      linkpath = SYSCALLS.getStr(linkpath);
      FS.symlink(target, linkpath);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_unlinkat(dirfd, path, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (flags === 0) {
        FS.unlink(path);
      } else if (flags === 512) {
        FS.rmdir(path);
      } else {
        abort('Invalid flags passed to unlinkat');
      }
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function readI53FromI64(ptr) {
      return HEAPU32[ptr>>2] + HEAP32[ptr+4>>2] * 4294967296;
    }
  
  function ___syscall_utimensat(dirfd, path, times, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path, true);
      if (!times) {
        var atime = Date.now();
        var mtime = atime;
      } else {
        var seconds = readI53FromI64(times);
        var nanoseconds = HEAP32[(((times)+(8))>>2)];
        atime = (seconds*1000) + (nanoseconds/(1000*1000));
        times += 16;
        seconds = readI53FromI64(times);
        nanoseconds = HEAP32[(((times)+(8))>>2)];
        mtime = (seconds*1000) + (nanoseconds/(1000*1000));
      }
      FS.utime(path, atime, mtime);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  var nowIsMonotonic = true;;
  function __emscripten_get_now_is_monotonic() {
      return nowIsMonotonic;
    }

  function __emscripten_throw_longjmp() {
      throw Infinity;
    }

  function __gmtime_js(time, tmPtr) {
      var date = new Date(readI53FromI64(time)*1000);
      HEAP32[((tmPtr)>>2)] = date.getUTCSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getUTCMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getUTCHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getUTCDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getUTCMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getUTCFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getUTCDay();
      var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var yday = ((date.getTime() - start) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
    }

  
  function isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  
  var MONTH_DAYS_LEAP_CUMULATIVE = [0,31,60,91,121,152,182,213,244,274,305,335];
  
  var MONTH_DAYS_REGULAR_CUMULATIVE = [0,31,59,90,120,151,181,212,243,273,304,334];
  function ydayFromDate(date) {
      var leap = isLeapYear(date.getFullYear());
      var monthDaysCumulative = (leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE);
      var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1; // -1 since it's days since Jan 1
  
      return yday;
    }
  function __localtime_js(time, tmPtr) {
      var date = new Date(readI53FromI64(time)*1000);
      HEAP32[((tmPtr)>>2)] = date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
  
      var yday = ydayFromDate(date)|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      HEAP32[(((tmPtr)+(36))>>2)] = -(date.getTimezoneOffset() * 60);
  
      // Attention: DST is in December in South, and some regions don't have DST at all.
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset))|0;
      HEAP32[(((tmPtr)+(32))>>2)] = dst;
    }

  function __mktime_js(tmPtr) {
      var date = new Date(HEAP32[(((tmPtr)+(20))>>2)] + 1900,
                          HEAP32[(((tmPtr)+(16))>>2)],
                          HEAP32[(((tmPtr)+(12))>>2)],
                          HEAP32[(((tmPtr)+(8))>>2)],
                          HEAP32[(((tmPtr)+(4))>>2)],
                          HEAP32[((tmPtr)>>2)],
                          0);
  
      // There's an ambiguous hour when the time goes back; the tm_isdst field is
      // used to disambiguate it.  Date() basically guesses, so we fix it up if it
      // guessed wrong, or fill in tm_isdst with the guess if it's -1.
      var dst = HEAP32[(((tmPtr)+(32))>>2)];
      var guessedOffset = date.getTimezoneOffset();
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dstOffset = Math.min(winterOffset, summerOffset); // DST is in December in South
      if (dst < 0) {
        // Attention: some regions don't have DST at all.
        HEAP32[(((tmPtr)+(32))>>2)] = Number(summerOffset != winterOffset && dstOffset == guessedOffset);
      } else if ((dst > 0) != (dstOffset == guessedOffset)) {
        var nonDstOffset = Math.max(winterOffset, summerOffset);
        var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
        // Don't try setMinutes(date.getMinutes() + ...) -- it's messed up.
        date.setTime(date.getTime() + (trueOffset - guessedOffset)*60000);
      }
  
      HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
      var yday = ydayFromDate(date)|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      // To match expected behavior, update fields from date
      HEAP32[((tmPtr)>>2)] = date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getYear();
  
      return (date.getTime() / 1000)|0;
    }

  
  
  function __mmap_js(len, prot, flags, fd, off, allocated, addr) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var res = FS.mmap(stream, len, off, prot, flags);
      var ptr = res.ptr;
      HEAP32[((allocated)>>2)] = res.allocated;
      HEAPU32[((addr)>>2)] = ptr;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  function __munmap_js(addr, len, prot, flags, fd, offset) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      if (prot & 2) {
        SYSCALLS.doMsync(addr, stream, len, flags, offset);
      }
      FS.munmap(stream);
      // implicitly return 0
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  var timers = {};
  
  function handleException(e) {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      quit_(1, e);
    }
  
  
  function _proc_exit(code) {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        if (Module['onExit']) Module['onExit'](code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    }
  /** @suppress {duplicate } */
  /** @param {boolean|number=} implicit */
  function exitJS(status, implicit) {
      EXITSTATUS = status;
  
      _proc_exit(status);
    }
  var _exit = exitJS;
  
  function maybeExit() {
      if (!keepRuntimeAlive()) {
        try {
          _exit(EXITSTATUS);
        } catch (e) {
          handleException(e);
        }
      }
    }
  function callUserCallback(func) {
      if (ABORT) {
        return;
      }
      try {
        func();
        maybeExit();
      } catch (e) {
        handleException(e);
      }
    }
  
  
  var _emscripten_get_now;_emscripten_get_now = () => performance.now();
  ;
  function __setitimer_js(which, timeout_ms) {
      // First, clear any existing timer.
      if (timers[which]) {
        clearTimeout(timers[which].id);
        delete timers[which];
      }
  
      // A timeout of zero simply cancels the current timeout so we have nothing
      // more to do.
      if (!timeout_ms) return 0;
  
      var id = setTimeout(() => {
        delete timers[which];
        callUserCallback(() => __emscripten_timeout(which, _emscripten_get_now()));
      }, timeout_ms);
      timers[which] = { id: id, timeout_ms: timeout_ms };
      return 0;
    }

  
  function stringToNewUTF8(str) {
      var size = lengthBytesUTF8(str) + 1;
      var ret = _malloc(size);
      if (ret) stringToUTF8(str, ret, size);
      return ret;
    }
  function __tzset_js(timezone, daylight, tzname) {
      // TODO: Use (malleable) environment variables instead of system settings.
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      var winterOffset = winter.getTimezoneOffset();
      var summerOffset = summer.getTimezoneOffset();
  
      // Local standard timezone offset. Local standard time is not adjusted for daylight savings.
      // This code uses the fact that getTimezoneOffset returns a greater value during Standard Time versus Daylight Saving Time (DST).
      // Thus it determines the expected output during Standard Time, and it compares whether the output of the given date the same (Standard) or less (DST).
      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  
      // timezone is specified as seconds west of UTC ("The external variable
      // `timezone` shall be set to the difference, in seconds, between
      // Coordinated Universal Time (UTC) and local standard time."), the same
      // as returned by stdTimezoneOffset.
      // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
      HEAPU32[((timezone)>>2)] = stdTimezoneOffset * 60;
  
      HEAP32[((daylight)>>2)] = Number(winterOffset != summerOffset);
  
      function extractZone(date) {
        var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return match ? match[1] : "GMT";
      };
      var winterName = extractZone(winter);
      var summerName = extractZone(summer);
      var winterNamePtr = stringToNewUTF8(winterName);
      var summerNamePtr = stringToNewUTF8(summerName);
      if (summerOffset < winterOffset) {
        // Northern hemisphere
        HEAPU32[((tzname)>>2)] = winterNamePtr;
        HEAPU32[(((tzname)+(4))>>2)] = summerNamePtr;
      } else {
        HEAPU32[((tzname)>>2)] = summerNamePtr;
        HEAPU32[(((tzname)+(4))>>2)] = winterNamePtr;
      }
    }

  function _abort() {
      abort('');
    }

  function _dlopen(handle) {
      abort(dlopenMissingError);
    }

  function _emscripten_set_main_loop_timing(mode, value) {
      Browser.mainLoop.timingMode = mode;
      Browser.mainLoop.timingValue = value;
  
      if (!Browser.mainLoop.func) {
        return 1; // Return non-zero on failure, can't set timing mode when there is no main loop.
      }
  
      if (!Browser.mainLoop.running) {
        
        Browser.mainLoop.running = true;
      }
      if (mode == 0 /*EM_TIMING_SETTIMEOUT*/) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
          var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now())|0;
          setTimeout(Browser.mainLoop.runner, timeUntilNextTick); // doing this each time means that on exception, we stop
        };
        Browser.mainLoop.method = 'timeout';
      } else if (mode == 1 /*EM_TIMING_RAF*/) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
          Browser.requestAnimationFrame(Browser.mainLoop.runner);
        };
        Browser.mainLoop.method = 'rAF';
      } else if (mode == 2 /*EM_TIMING_SETIMMEDIATE*/) {
        if (typeof setImmediate == 'undefined') {
          // Emulate setImmediate. (note: not a complete polyfill, we don't emulate clearImmediate() to keep code size to minimum, since not needed)
          var setImmediates = [];
          var emscriptenMainLoopMessageId = 'setimmediate';
          /** @param {Event} event */
          var Browser_setImmediate_messageHandler = (event) => {
            // When called in current thread or Worker, the main loop ID is structured slightly different to accommodate for --proxy-to-worker runtime listening to Worker events,
            // so check for both cases.
            if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
              event.stopPropagation();
              setImmediates.shift()();
            }
          };
          addEventListener("message", Browser_setImmediate_messageHandler, true);
          setImmediate = /** @type{function(function(): ?, ...?): number} */(function Browser_emulated_setImmediate(func) {
            setImmediates.push(func);
            if (ENVIRONMENT_IS_WORKER) {
              if (Module['setImmediates'] === undefined) Module['setImmediates'] = [];
              Module['setImmediates'].push(func);
              postMessage({target: emscriptenMainLoopMessageId}); // In --proxy-to-worker, route the message via proxyClient.js
            } else postMessage(emscriptenMainLoopMessageId, "*"); // On the main thread, can just send the message to itself.
          })
        }
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
          setImmediate(Browser.mainLoop.runner);
        };
        Browser.mainLoop.method = 'immediate';
      }
      return 0;
    }
  
  
  
    /**
     * @param {number=} arg
     * @param {boolean=} noSetTiming
     */
  function setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) {
      assert(!Browser.mainLoop.func, 'emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.');
  
      Browser.mainLoop.func = browserIterationFunc;
      Browser.mainLoop.arg = arg;
  
      var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;
      function checkIsRunning() {
        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) {
          
          return false;
        }
        return true;
      }
  
      // We create the loop runner here but it is not actually running until
      // _emscripten_set_main_loop_timing is called (which might happen a
      // later time).  This member signifies that the current runner has not
      // yet been started so that we can call runtimeKeepalivePush when it
      // gets it timing set for the first time.
      Browser.mainLoop.running = false;
      Browser.mainLoop.runner = function Browser_mainLoop_runner() {
        if (ABORT) return;
        if (Browser.mainLoop.queue.length > 0) {
          var start = Date.now();
          var blocker = Browser.mainLoop.queue.shift();
          blocker.func(blocker.arg);
          if (Browser.mainLoop.remainingBlockers) {
            var remaining = Browser.mainLoop.remainingBlockers;
            var next = remaining%1 == 0 ? remaining-1 : Math.floor(remaining);
            if (blocker.counted) {
              Browser.mainLoop.remainingBlockers = next;
            } else {
              // not counted, but move the progress along a tiny bit
              next = next + 0.5; // do not steal all the next one's progress
              Browser.mainLoop.remainingBlockers = (8*remaining + next)/9;
            }
          }
          out('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + ' ms'); //, left: ' + Browser.mainLoop.remainingBlockers);
          Browser.mainLoop.updateStatus();
  
          // catches pause/resume main loop from blocker execution
          if (!checkIsRunning()) return;
  
          setTimeout(Browser.mainLoop.runner, 0);
          return;
        }
  
        // catch pauses from non-main loop sources
        if (!checkIsRunning()) return;
  
        // Implement very basic swap interval control
        Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
        if (Browser.mainLoop.timingMode == 1/*EM_TIMING_RAF*/ && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
          // Not the scheduled time to render this frame - skip.
          Browser.mainLoop.scheduler();
          return;
        } else if (Browser.mainLoop.timingMode == 0/*EM_TIMING_SETTIMEOUT*/) {
          Browser.mainLoop.tickStartTime = _emscripten_get_now();
        }
  
        // Signal GL rendering layer that processing of a new frame is about to start. This helps it optimize
        // VBO double-buffering and reduce GPU stalls.
  
        Browser.mainLoop.runIter(browserIterationFunc);
  
        // catch pauses from the main loop itself
        if (!checkIsRunning()) return;
  
        // Queue new audio data. This is important to be right after the main loop invocation, so that we will immediately be able
        // to queue the newest produced audio samples.
        // TODO: Consider adding pre- and post- rAF callbacks so that GL.newRenderingFrameStarted() and SDL.audio.queueNewAudioData()
        //       do not need to be hardcoded into this function, but can be more generic.
        if (typeof SDL == 'object' && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
  
        Browser.mainLoop.scheduler();
      }
  
      if (!noSetTiming) {
        if (fps && fps > 0) _emscripten_set_main_loop_timing(0/*EM_TIMING_SETTIMEOUT*/, 1000.0 / fps);
        else _emscripten_set_main_loop_timing(1/*EM_TIMING_RAF*/, 1); // Do rAF by rendering each frame (no decimating)
  
        Browser.mainLoop.scheduler();
      }
  
      if (simulateInfiniteLoop) {
        throw 'unwind';
      }
    }
  
  
  /** @param {number=} timeout */
  function safeSetTimeout(func, timeout) {
      
      return setTimeout(function() {
        
        callUserCallback(func);
      }, timeout);
    }
  
  function warnOnce(text) {
      if (!warnOnce.shown) warnOnce.shown = {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text);
      }
    }
  
  
  var Browser = {mainLoop:{running:false,scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:function() {
          Browser.mainLoop.scheduler = null;
          // Incrementing this signals the previous main loop that it's now become old, and it must return.
          Browser.mainLoop.currentlyRunningMainloop++;
        },resume:function() {
          Browser.mainLoop.currentlyRunningMainloop++;
          var timingMode = Browser.mainLoop.timingMode;
          var timingValue = Browser.mainLoop.timingValue;
          var func = Browser.mainLoop.func;
          Browser.mainLoop.func = null;
          // do not set timing and call scheduler, we will do it on the next lines
          setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
          _emscripten_set_main_loop_timing(timingMode, timingValue);
          Browser.mainLoop.scheduler();
        },updateStatus:function() {
          if (Module['setStatus']) {
            var message = Module['statusMessage'] || 'Please wait...';
            var remaining = Browser.mainLoop.remainingBlockers;
            var expected = Browser.mainLoop.expectedBlockers;
            if (remaining) {
              if (remaining < expected) {
                Module['setStatus'](message + ' (' + (expected - remaining) + '/' + expected + ')');
              } else {
                Module['setStatus'](message);
              }
            } else {
              Module['setStatus']('');
            }
          }
        },runIter:function(func) {
          if (ABORT) return;
          if (Module['preMainLoop']) {
            var preRet = Module['preMainLoop']();
            if (preRet === false) {
              return; // |return false| skips a frame
            }
          }
          callUserCallback(func);
          if (Module['postMainLoop']) Module['postMainLoop']();
        }},isFullscreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:function() {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers
  
        if (Browser.initted) return;
        Browser.initted = true;
  
        try {
          new Blob();
          Browser.hasBlobConstructor = true;
        } catch(e) {
          Browser.hasBlobConstructor = false;
          err("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : (typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : (!Browser.hasBlobConstructor ? err("warning: no BlobBuilder") : null));
        Browser.URLObject = typeof window != "undefined" ? (window.URL ? window.URL : window.webkitURL) : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject == 'undefined') {
          err("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          Module.noImageDecoding = true;
        }
  
        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).
  
        var imagePlugin = {};
        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
          return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
          var b = null;
          if (Browser.hasBlobConstructor) {
            try {
              b = new Blob([byteArray], { type: Browser.getMimetype(name) });
              if (b.size !== byteArray.length) { // Safari bug #118630
                // Safari's Blob can only take an ArrayBuffer
                b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
              }
            } catch(e) {
              warnOnce('Blob constructor present but fails: ' + e + '; falling back to blob builder');
            }
          }
          if (!b) {
            var bb = new Browser.BlobBuilder();
            bb.append((new Uint8Array(byteArray)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
            b = bb.getBlob();
          }
          var url = Browser.URLObject.createObjectURL(b);
          var img = new Image();
          img.onload = () => {
            assert(img.complete, 'Image ' + name + ' could not be decoded');
            var canvas = /** @type {!HTMLCanvasElement} */ (document.createElement('canvas'));
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            preloadedImages[name] = canvas;
            Browser.URLObject.revokeObjectURL(url);
            if (onload) onload(byteArray);
          };
          img.onerror = (event) => {
            out('Image ' + url + ' could not be decoded');
            if (onerror) onerror();
          };
          img.src = url;
        };
        Module['preloadPlugins'].push(imagePlugin);
  
        var audioPlugin = {};
        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
          return !Module.noAudioDecoding && name.substr(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
        };
        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
          var done = false;
          function finish(audio) {
            if (done) return;
            done = true;
            preloadedAudios[name] = audio;
            if (onload) onload(byteArray);
          }
          function fail() {
            if (done) return;
            done = true;
            preloadedAudios[name] = new Audio(); // empty shim
            if (onerror) onerror();
          }
          if (Browser.hasBlobConstructor) {
            try {
              var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
            } catch(e) {
              return fail();
            }
            var url = Browser.URLObject.createObjectURL(b); // XXX we never revoke this!
            var audio = new Audio();
            audio.addEventListener('canplaythrough', () => finish(audio), false); // use addEventListener due to chromium bug 124926
            audio.onerror = function audio_onerror(event) {
              if (done) return;
              err('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
              function encode64(data) {
                var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var PAD = '=';
                var ret = '';
                var leftchar = 0;
                var leftbits = 0;
                for (var i = 0; i < data.length; i++) {
                  leftchar = (leftchar << 8) | data[i];
                  leftbits += 8;
                  while (leftbits >= 6) {
                    var curr = (leftchar >> (leftbits-6)) & 0x3f;
                    leftbits -= 6;
                    ret += BASE[curr];
                  }
                }
                if (leftbits == 2) {
                  ret += BASE[(leftchar&3) << 4];
                  ret += PAD + PAD;
                } else if (leftbits == 4) {
                  ret += BASE[(leftchar&0xf) << 2];
                  ret += PAD;
                }
                return ret;
              }
              audio.src = 'data:audio/x-' + name.substr(-3) + ';base64,' + encode64(byteArray);
              finish(audio); // we don't wait for confirmation this worked - but it's worth trying
            };
            audio.src = url;
            // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
            safeSetTimeout(function() {
              finish(audio); // try to use it even though it is not necessarily ready to play
            }, 10000);
          } else {
            return fail();
          }
        };
        Module['preloadPlugins'].push(audioPlugin);
  
        // Canvas event setup
  
        function pointerLockChange() {
          Browser.pointerLock = document['pointerLockElement'] === Module['canvas'] ||
                                document['mozPointerLockElement'] === Module['canvas'] ||
                                document['webkitPointerLockElement'] === Module['canvas'] ||
                                document['msPointerLockElement'] === Module['canvas'];
        }
        var canvas = Module['canvas'];
        if (canvas) {
          // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
          // Module['forcedAspectRatio'] = 4 / 3;
  
          canvas.requestPointerLock = canvas['requestPointerLock'] ||
                                      canvas['mozRequestPointerLock'] ||
                                      canvas['webkitRequestPointerLock'] ||
                                      canvas['msRequestPointerLock'] ||
                                      (() => {});
          canvas.exitPointerLock = document['exitPointerLock'] ||
                                   document['mozExitPointerLock'] ||
                                   document['webkitExitPointerLock'] ||
                                   document['msExitPointerLock'] ||
                                   (() => {}); // no-op if function does not exist
          canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
  
          document.addEventListener('pointerlockchange', pointerLockChange, false);
          document.addEventListener('mozpointerlockchange', pointerLockChange, false);
          document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
          document.addEventListener('mspointerlockchange', pointerLockChange, false);
  
          if (Module['elementPointerLock']) {
            canvas.addEventListener("click", (ev) => {
              if (!Browser.pointerLock && Module['canvas'].requestPointerLock) {
                Module['canvas'].requestPointerLock();
                ev.preventDefault();
              }
            }, false);
          }
        }
      },handledByPreloadPlugin:function(byteArray, fullname, finish, onerror) {
        // Ensure plugins are ready.
        Browser.init();
  
        var handled = false;
        Module['preloadPlugins'].forEach(function(plugin) {
          if (handled) return;
          if (plugin['canHandle'](fullname)) {
            plugin['handle'](byteArray, fullname, finish, onerror);
            handled = true;
          }
        });
        return handled;
      },createContext:function(/** @type {HTMLCanvasElement} */ canvas, useWebGL, setInModule, webGLContextAttributes) {
        if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx; // no need to recreate GL context if it's already been created for this canvas.
  
        var ctx;
        var contextHandle;
        if (useWebGL) {
          // For GLES2/desktop GL compatibility, adjust a few defaults to be different to WebGL defaults, so that they align better with the desktop defaults.
          var contextAttributes = {
            antialias: false,
            alpha: false,
            majorVersion: 1,
          };
  
          if (webGLContextAttributes) {
            for (var attribute in webGLContextAttributes) {
              contextAttributes[attribute] = webGLContextAttributes[attribute];
            }
          }
  
          // This check of existence of GL is here to satisfy Closure compiler, which yells if variable GL is referenced below but GL object is not
          // actually compiled in because application is not doing any GL operations. TODO: Ideally if GL is not being used, this function
          // Browser.createContext() should not even be emitted.
          if (typeof GL != 'undefined') {
            contextHandle = GL.createContext(canvas, contextAttributes);
            if (contextHandle) {
              ctx = GL.getContext(contextHandle).GLctx;
            }
          }
        } else {
          ctx = canvas.getContext('2d');
        }
  
        if (!ctx) return null;
  
        if (setInModule) {
          if (!useWebGL) assert(typeof GLctx == 'undefined', 'cannot set in module if GLctx is used, but we are a non-GL context that would replace it');
  
          Module.ctx = ctx;
          if (useWebGL) GL.makeContextCurrent(contextHandle);
          Module.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach(function(callback) { callback() });
          Browser.init();
        }
        return ctx;
      },destroyContext:function(canvas, useWebGL, setInModule) {},fullscreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullscreen:function(lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer == 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas == 'undefined') Browser.resizeCanvas = false;
  
        var canvas = Module['canvas'];
        function fullscreenChange() {
          Browser.isFullscreen = false;
          var canvasContainer = canvas.parentNode;
          if ((document['fullscreenElement'] || document['mozFullScreenElement'] ||
               document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
               document['webkitCurrentFullScreenElement']) === canvasContainer) {
            canvas.exitFullscreen = Browser.exitFullscreen;
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullscreen = true;
            if (Browser.resizeCanvas) {
              Browser.setFullscreenCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          } else {
            // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
            canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
            canvasContainer.parentNode.removeChild(canvasContainer);
  
            if (Browser.resizeCanvas) {
              Browser.setWindowedCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          }
          if (Module['onFullScreen']) Module['onFullScreen'](Browser.isFullscreen);
          if (Module['onFullscreen']) Module['onFullscreen'](Browser.isFullscreen);
        }
  
        if (!Browser.fullscreenHandlersInstalled) {
          Browser.fullscreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullscreenChange, false);
          document.addEventListener('mozfullscreenchange', fullscreenChange, false);
          document.addEventListener('webkitfullscreenchange', fullscreenChange, false);
          document.addEventListener('MSFullscreenChange', fullscreenChange, false);
        }
  
        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
  
        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        canvasContainer.requestFullscreen = canvasContainer['requestFullscreen'] ||
                                            canvasContainer['mozRequestFullScreen'] ||
                                            canvasContainer['msRequestFullscreen'] ||
                                           (canvasContainer['webkitRequestFullscreen'] ? () => canvasContainer['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']) : null) ||
                                           (canvasContainer['webkitRequestFullScreen'] ? () => canvasContainer['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) : null);
  
        canvasContainer.requestFullscreen();
      },exitFullscreen:function() {
        // This is workaround for chrome. Trying to exit from fullscreen
        // not in fullscreen state will cause "TypeError: Document not active"
        // in chrome. See https://github.com/emscripten-core/emscripten/pull/8236
        if (!Browser.isFullscreen) {
          return false;
        }
  
        var CFS = document['exitFullscreen'] ||
                  document['cancelFullScreen'] ||
                  document['mozCancelFullScreen'] ||
                  document['msExitFullscreen'] ||
                  document['webkitCancelFullScreen'] ||
            (function() {});
        CFS.apply(document, []);
        return true;
      },nextRAF:0,fakeRequestAnimationFrame:function(func) {
        // try to keep 60fps between calls to here
        var now = Date.now();
        if (Browser.nextRAF === 0) {
          Browser.nextRAF = now + 1000/60;
        } else {
          while (now + 2 >= Browser.nextRAF) { // fudge a little, to avoid timer jitter causing us to do lots of delay:0
            Browser.nextRAF += 1000/60;
          }
        }
        var delay = Math.max(Browser.nextRAF - now, 0);
        setTimeout(func, delay);
      },requestAnimationFrame:function(func) {
        if (typeof requestAnimationFrame == 'function') {
          requestAnimationFrame(func);
          return;
        }
        var RAF = Browser.fakeRequestAnimationFrame;
        RAF(func);
      },safeSetTimeout:function(func, timeout) {
        // Legacy function, this is used by the SDL2 port so we need to keep it
        // around at least until that is updated.
        // See https://github.com/libsdl-org/SDL/pull/6304
        return safeSetTimeout(func, timeout);
      },safeRequestAnimationFrame:function(func) {
        
        return Browser.requestAnimationFrame(function() {
          
          callUserCallback(func);
        });
      },getMimetype:function(name) {
        return {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'bmp': 'image/bmp',
          'ogg': 'audio/ogg',
          'wav': 'audio/wav',
          'mp3': 'audio/mpeg'
        }[name.substr(name.lastIndexOf('.')+1)];
      },getUserMedia:function(func) {
        if (!window.getUserMedia) {
          window.getUserMedia = navigator['getUserMedia'] ||
                                navigator['mozGetUserMedia'];
        }
        window.getUserMedia(func);
      },getMovementX:function(event) {
        return event['movementX'] ||
               event['mozMovementX'] ||
               event['webkitMovementX'] ||
               0;
      },getMovementY:function(event) {
        return event['movementY'] ||
               event['mozMovementY'] ||
               event['webkitMovementY'] ||
               0;
      },getMouseWheelDelta:function(event) {
        var delta = 0;
        switch (event.type) {
          case 'DOMMouseScroll':
            // 3 lines make up a step
            delta = event.detail / 3;
            break;
          case 'mousewheel':
            // 120 units make up a step
            delta = event.wheelDelta / 120;
            break;
          case 'wheel':
            delta = event.deltaY
            switch (event.deltaMode) {
              case 0:
                // DOM_DELTA_PIXEL: 100 pixels make up a step
                delta /= 100;
                break;
              case 1:
                // DOM_DELTA_LINE: 3 lines make up a step
                delta /= 3;
                break;
              case 2:
                // DOM_DELTA_PAGE: A page makes up 80 steps
                delta *= 80;
                break;
              default:
                throw 'unrecognized mouse wheel delta mode: ' + event.deltaMode;
            }
            break;
          default:
            throw 'unrecognized mouse wheel event: ' + event.type;
        }
        return delta;
      },mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:function(event) { // event should be mousemove, mousedown or mouseup
        if (Browser.pointerLock) {
          // When the pointer is locked, calculate the coordinates
          // based on the movement of the mouse.
          // Workaround for Firefox bug 764498
          if (event.type != 'mousemove' &&
              ('mozMovementX' in event)) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }
  
          // check if SDL is available
          if (typeof SDL != "undefined") {
            Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
            Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
          } else {
            // just add the mouse delta to the current absolut mouse position
            // FIXME: ideally this should be clamped against the canvas size and zero
            Browser.mouseX += Browser.mouseMovementX;
            Browser.mouseY += Browser.mouseMovementY;
          }
        } else {
          // Otherwise, calculate the movement based on the changes
          // in the coordinates.
          var rect = Module["canvas"].getBoundingClientRect();
          var cw = Module["canvas"].width;
          var ch = Module["canvas"].height;
  
          // Neither .scrollX or .pageXOffset are defined in a spec, but
          // we prefer .scrollX because it is currently in a spec draft.
          // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
          var scrollX = ((typeof window.scrollX != 'undefined') ? window.scrollX : window.pageXOffset);
          var scrollY = ((typeof window.scrollY != 'undefined') ? window.scrollY : window.pageYOffset);
  
          if (event.type === 'touchstart' || event.type === 'touchend' || event.type === 'touchmove') {
            var touch = event.touch;
            if (touch === undefined) {
              return; // the "touch" property is only defined in SDL
  
            }
            var adjustedX = touch.pageX - (scrollX + rect.left);
            var adjustedY = touch.pageY - (scrollY + rect.top);
  
            adjustedX = adjustedX * (cw / rect.width);
            adjustedY = adjustedY * (ch / rect.height);
  
            var coords = { x: adjustedX, y: adjustedY };
  
            if (event.type === 'touchstart') {
              Browser.lastTouches[touch.identifier] = coords;
              Browser.touches[touch.identifier] = coords;
            } else if (event.type === 'touchend' || event.type === 'touchmove') {
              var last = Browser.touches[touch.identifier];
              if (!last) last = coords;
              Browser.lastTouches[touch.identifier] = last;
              Browser.touches[touch.identifier] = coords;
            }
            return;
          }
  
          var x = event.pageX - (scrollX + rect.left);
          var y = event.pageY - (scrollY + rect.top);
  
          // the canvas might be CSS-scaled compared to its backbuffer;
          // SDL-using content will want mouse coordinates in terms
          // of backbuffer units.
          x = x * (cw / rect.width);
          y = y * (ch / rect.height);
  
          Browser.mouseMovementX = x - Browser.mouseX;
          Browser.mouseMovementY = y - Browser.mouseY;
          Browser.mouseX = x;
          Browser.mouseY = y;
        }
      },resizeListeners:[],updateResizeListeners:function() {
        var canvas = Module['canvas'];
        Browser.resizeListeners.forEach(function(listener) {
          listener(canvas.width, canvas.height);
        });
      },setCanvasSize:function(width, height, noUpdates) {
        var canvas = Module['canvas'];
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners();
      },windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize:function() {
        // check if SDL is available
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[((SDL.screen)>>2)];
          flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
          HEAP32[((SDL.screen)>>2)] = flags;
        }
        Browser.updateCanvasDimensions(Module['canvas']);
        Browser.updateResizeListeners();
      },setWindowedCanvasSize:function() {
        // check if SDL is available
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[((SDL.screen)>>2)];
          flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
          HEAP32[((SDL.screen)>>2)] = flags;
        }
        Browser.updateCanvasDimensions(Module['canvas']);
        Browser.updateResizeListeners();
      },updateCanvasDimensions:function(canvas, wNative, hNative) {
        if (wNative && hNative) {
          canvas.widthNative = wNative;
          canvas.heightNative = hNative;
        } else {
          wNative = canvas.widthNative;
          hNative = canvas.heightNative;
        }
        var w = wNative;
        var h = hNative;
        if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
          if (w/h < Module['forcedAspectRatio']) {
            w = Math.round(h * Module['forcedAspectRatio']);
          } else {
            h = Math.round(w / Module['forcedAspectRatio']);
          }
        }
        if (((document['fullscreenElement'] || document['mozFullScreenElement'] ||
             document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
             document['webkitCurrentFullScreenElement']) === canvas.parentNode) && (typeof screen != 'undefined')) {
           var factor = Math.min(screen.width / w, screen.height / h);
           w = Math.round(w * factor);
           h = Math.round(h * factor);
        }
        if (Browser.resizeCanvas) {
          if (canvas.width  != w) canvas.width  = w;
          if (canvas.height != h) canvas.height = h;
          if (typeof canvas.style != 'undefined') {
            canvas.style.removeProperty( "width");
            canvas.style.removeProperty("height");
          }
        } else {
          if (canvas.width  != wNative) canvas.width  = wNative;
          if (canvas.height != hNative) canvas.height = hNative;
          if (typeof canvas.style != 'undefined') {
            if (w != wNative || h != hNative) {
              canvas.style.setProperty( "width", w + "px", "important");
              canvas.style.setProperty("height", h + "px", "important");
            } else {
              canvas.style.removeProperty( "width");
              canvas.style.removeProperty("height");
            }
          }
        }
      }};
  
  var EGL = {errorCode:12288,defaultDisplayInitialized:false,currentContext:0,currentReadSurface:0,currentDrawSurface:0,contextAttributes:{alpha:false,depth:false,stencil:false,antialias:false},stringCache:{},setErrorCode:function(code) {
        EGL.errorCode = code;
      },chooseConfig:function(display, attribList, config, config_size, numConfigs) {
        if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
          EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
          return 0;
        }
  
        if (attribList) {
          // read attribList if it is non-null
          for (;;) {
            var param = HEAP32[((attribList)>>2)];
            if (param == 0x3021 /*EGL_ALPHA_SIZE*/) {
              var alphaSize = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.alpha = (alphaSize > 0);
            } else if (param == 0x3025 /*EGL_DEPTH_SIZE*/) {
              var depthSize = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.depth = (depthSize > 0);
            } else if (param == 0x3026 /*EGL_STENCIL_SIZE*/) {
              var stencilSize = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.stencil = (stencilSize > 0);
            } else if (param == 0x3031 /*EGL_SAMPLES*/) {
              var samples = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.antialias = (samples > 0);
            } else if (param == 0x3032 /*EGL_SAMPLE_BUFFERS*/) {
              var samples = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.antialias = (samples == 1);
            } else if (param == 0x3100 /*EGL_CONTEXT_PRIORITY_LEVEL_IMG*/) {
              var requestedPriority = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.lowLatency = (requestedPriority != 0x3103 /*EGL_CONTEXT_PRIORITY_LOW_IMG*/);
            } else if (param == 0x3038 /*EGL_NONE*/) {
                break;
            }
            attribList += 8;
          }
        }
  
        if ((!config || !config_size) && !numConfigs) {
          EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
          return 0;
        }
        if (numConfigs) {
          HEAP32[((numConfigs)>>2)] = 1; // Total number of supported configs: 1.
        }
        if (config && config_size > 0) {
          HEAP32[((config)>>2)] = 62002;
        }
  
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
        return 1;
      }};
  function _eglBindAPI(api) {
      if (api == 0x30A0 /* EGL_OPENGL_ES_API */) {
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
        return 1;
      }
      // if (api == 0x30A1 /* EGL_OPENVG_API */ || api == 0x30A2 /* EGL_OPENGL_API */) {
      EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
      return 0;
    }

  function _eglChooseConfig(display, attrib_list, configs, config_size, numConfigs) {
      return EGL.chooseConfig(display, attrib_list, configs, config_size, numConfigs);
    }

  function webgl_enable_ANGLE_instanced_arrays(ctx) {
      // Extension available in WebGL 1 from Firefox 26 and Google Chrome 30 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('ANGLE_instanced_arrays');
      if (ext) {
        ctx['vertexAttribDivisor'] = function(index, divisor) { ext['vertexAttribDivisorANGLE'](index, divisor); };
        ctx['drawArraysInstanced'] = function(mode, first, count, primcount) { ext['drawArraysInstancedANGLE'](mode, first, count, primcount); };
        ctx['drawElementsInstanced'] = function(mode, count, type, indices, primcount) { ext['drawElementsInstancedANGLE'](mode, count, type, indices, primcount); };
        return 1;
      }
    }
  
  function webgl_enable_OES_vertex_array_object(ctx) {
      // Extension available in WebGL 1 from Firefox 25 and WebKit 536.28/desktop Safari 6.0.3 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('OES_vertex_array_object');
      if (ext) {
        ctx['createVertexArray'] = function() { return ext['createVertexArrayOES'](); };
        ctx['deleteVertexArray'] = function(vao) { ext['deleteVertexArrayOES'](vao); };
        ctx['bindVertexArray'] = function(vao) { ext['bindVertexArrayOES'](vao); };
        ctx['isVertexArray'] = function(vao) { return ext['isVertexArrayOES'](vao); };
        return 1;
      }
    }
  
  function webgl_enable_WEBGL_draw_buffers(ctx) {
      // Extension available in WebGL 1 from Firefox 28 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('WEBGL_draw_buffers');
      if (ext) {
        ctx['drawBuffers'] = function(n, bufs) { ext['drawBuffersWEBGL'](n, bufs); };
        return 1;
      }
    }
  
  function webgl_enable_WEBGL_multi_draw(ctx) {
      // Closure is expected to be allowed to minify the '.multiDrawWebgl' property, so not accessing it quoted.
      return !!(ctx.multiDrawWebgl = ctx.getExtension('WEBGL_multi_draw'));
    }
  
  
  var GL = {counter:1,buffers:[],programs:[],framebuffers:[],renderbuffers:[],textures:[],shaders:[],vaos:[],contexts:[],offscreenCanvases:{},queries:[],stringCache:{},unpackAlignment:4,recordError:function recordError(errorCode) {
        if (!GL.lastError) {
          GL.lastError = errorCode;
        }
      },getNewId:function(table) {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
          table[i] = null;
        }
        return ret;
      },getSource:function(shader, count, string, length) {
        var source = '';
        for (var i = 0; i < count; ++i) {
          var len = length ? HEAP32[(((length)+(i*4))>>2)] : -1;
          source += UTF8ToString(HEAP32[(((string)+(i*4))>>2)], len < 0 ? undefined : len);
        }
        return source;
      },createContext:function(/** @type {HTMLCanvasElement} */ canvas, webGLContextAttributes) {
  
        // BUG: Workaround Safari WebGL issue: After successfully acquiring WebGL context on a canvas,
        // calling .getContext() will always return that context independent of which 'webgl' or 'webgl2'
        // context version was passed. See https://bugs.webkit.org/show_bug.cgi?id=222758 and
        // https://github.com/emscripten-core/emscripten/issues/13295.
        // TODO: Once the bug is fixed and shipped in Safari, adjust the Safari version field in above check.
        if (!canvas.getContextSafariWebGL2Fixed) {
          canvas.getContextSafariWebGL2Fixed = canvas.getContext;
          /** @type {function(this:HTMLCanvasElement, string, (Object|null)=): (Object|null)} */
          function fixedGetContext(ver, attrs) {
            var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
            return ((ver == 'webgl') == (gl instanceof WebGLRenderingContext)) ? gl : null;
          }
          canvas.getContext = fixedGetContext;
        }
  
        var ctx =
          (canvas.getContext("webgl", webGLContextAttributes)
            // https://caniuse.com/#feat=webgl
            );
  
        if (!ctx) return 0;
  
        var handle = GL.registerContext(ctx, webGLContextAttributes);
  
        return handle;
      },registerContext:function(ctx, webGLContextAttributes) {
        // without pthreads a context is just an integer ID
        var handle = GL.getNewId(GL.contexts);
  
        var context = {
          handle: handle,
          attributes: webGLContextAttributes,
          version: webGLContextAttributes.majorVersion,
          GLctx: ctx
        };
  
        // Store the created context object so that we can access the context given a canvas without having to pass the parameters again.
        if (ctx.canvas) ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (typeof webGLContextAttributes.enableExtensionsByDefault == 'undefined' || webGLContextAttributes.enableExtensionsByDefault) {
          GL.initExtensions(context);
        }
  
        return handle;
      },makeContextCurrent:function(contextHandle) {
  
        GL.currentContext = GL.contexts[contextHandle]; // Active Emscripten GL layer context object.
        Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx; // Active WebGL context object.
        return !(contextHandle && !GLctx);
      },getContext:function(contextHandle) {
        return GL.contexts[contextHandle];
      },deleteContext:function(contextHandle) {
        if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
        if (typeof JSEvents == 'object') JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas); // Release all JS event handlers on the DOM element that the GL context is associated with since the context is now deleted.
        if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined; // Make sure the canvas object no longer refers to the context object so there are no GC surprises.
        GL.contexts[contextHandle] = null;
      },initExtensions:function(context) {
        // If this function is called without a specific context object, init the extensions of the currently active context.
        if (!context) context = GL.currentContext;
  
        if (context.initExtensionsDone) return;
        context.initExtensionsDone = true;
  
        var GLctx = context.GLctx;
  
        // Detect the presence of a few extensions manually, this GL interop layer itself will need to know if they exist.
  
        // Extensions that are only available in WebGL 1 (the calls will be no-ops if called on a WebGL 2 context active)
        webgl_enable_ANGLE_instanced_arrays(GLctx);
        webgl_enable_OES_vertex_array_object(GLctx);
        webgl_enable_WEBGL_draw_buffers(GLctx);
  
        {
          GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
        }
  
        webgl_enable_WEBGL_multi_draw(GLctx);
  
        // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
        var exts = GLctx.getSupportedExtensions() || [];
        exts.forEach(function(ext) {
          // WEBGL_lose_context, WEBGL_debug_renderer_info and WEBGL_debug_shaders are not enabled by default.
          if (!ext.includes('lose_context') && !ext.includes('debug')) {
            // Call .getExtension() to enable that extension permanently.
            GLctx.getExtension(ext);
          }
        });
      }};
  
  function _eglCreateContext(display, config, hmm, contextAttribs) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
  
      // EGL 1.4 spec says default EGL_CONTEXT_CLIENT_VERSION is GLES1, but this is not supported by Emscripten.
      // So user must pass EGL_CONTEXT_CLIENT_VERSION == 2 to initialize EGL.
      var glesContextVersion = 1;
      for (;;) {
        var param = HEAP32[((contextAttribs)>>2)];
        if (param == 0x3098 /*EGL_CONTEXT_CLIENT_VERSION*/) {
          glesContextVersion = HEAP32[(((contextAttribs)+(4))>>2)];
        } else if (param == 0x3038 /*EGL_NONE*/) {
          break;
        } else {
          /* EGL1.4 specifies only EGL_CONTEXT_CLIENT_VERSION as supported attribute */
          EGL.setErrorCode(0x3004 /*EGL_BAD_ATTRIBUTE*/);
          return 0;
        }
        contextAttribs += 8;
      }
      if (glesContextVersion != 2) {
        EGL.setErrorCode(0x3005 /* EGL_BAD_CONFIG */);
        return 0; /* EGL_NO_CONTEXT */
      }
  
      EGL.contextAttributes.majorVersion = glesContextVersion - 1; // WebGL 1 is GLES 2, WebGL2 is GLES3
      EGL.contextAttributes.minorVersion = 0;
  
      EGL.context = GL.createContext(Module['canvas'], EGL.contextAttributes);
  
      if (EGL.context != 0) {
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
  
        // Run callbacks so that GL emulation works
        GL.makeContextCurrent(EGL.context);
        Module.useWebGL = true;
        Browser.moduleContextCreatedCallbacks.forEach(function(callback) { callback() });
  
        // Note: This function only creates a context, but it shall not make it active.
        GL.makeContextCurrent(null);
        return 62004; // Magic ID for Emscripten EGLContext
      } else {
        EGL.setErrorCode(0x3009 /* EGL_BAD_MATCH */); // By the EGL 1.4 spec, an implementation that does not support GLES2 (WebGL in this case), this error code is set.
        return 0; /* EGL_NO_CONTEXT */
      }
    }

  function _eglCreateWindowSurface(display, config, win, attrib_list) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (config != 62002 /* Magic ID for the only EGLConfig supported by Emscripten */) {
        EGL.setErrorCode(0x3005 /* EGL_BAD_CONFIG */);
        return 0;
      }
      // TODO: Examine attrib_list! Parameters that can be present there are:
      // - EGL_RENDER_BUFFER (must be EGL_BACK_BUFFER)
      // - EGL_VG_COLORSPACE (can't be set)
      // - EGL_VG_ALPHA_FORMAT (can't be set)
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 62006; /* Magic ID for Emscripten 'default surface' */
    }

  
  function _eglDestroyContext(display, context) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (context != 62004 /* Magic ID for Emscripten EGLContext */) {
        EGL.setErrorCode(0x3006 /* EGL_BAD_CONTEXT */);
        return 0;
      }
  
      GL.deleteContext(EGL.context);
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      if (EGL.currentContext == context) {
        EGL.currentContext = 0;
      }
      return 1 /* EGL_TRUE */;
    }

  function _eglDestroySurface(display, surface) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (surface != 62006 /* Magic ID for the only EGLSurface supported by Emscripten */) {
        EGL.setErrorCode(0x300D /* EGL_BAD_SURFACE */);
        return 1;
      }
      if (EGL.currentReadSurface == surface) {
        EGL.currentReadSurface = 0;
      }
      if (EGL.currentDrawSurface == surface) {
        EGL.currentDrawSurface = 0;
      }
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1; /* Magic ID for Emscripten 'default surface' */
    }

  function _eglGetConfigAttrib(display, config, attribute, value) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (config != 62002 /* Magic ID for the only EGLConfig supported by Emscripten */) {
        EGL.setErrorCode(0x3005 /* EGL_BAD_CONFIG */);
        return 0;
      }
      if (!value) {
        EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
        return 0;
      }
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      switch (attribute) {
      case 0x3020: // EGL_BUFFER_SIZE
        HEAP32[((value)>>2)] = EGL.contextAttributes.alpha ? 32 : 24;
        return 1;
      case 0x3021: // EGL_ALPHA_SIZE
        HEAP32[((value)>>2)] = EGL.contextAttributes.alpha ? 8 : 0;
        return 1;
      case 0x3022: // EGL_BLUE_SIZE
        HEAP32[((value)>>2)] = 8;
        return 1;
      case 0x3023: // EGL_GREEN_SIZE
        HEAP32[((value)>>2)] = 8;
        return 1;
      case 0x3024: // EGL_RED_SIZE
        HEAP32[((value)>>2)] = 8;
        return 1;
      case 0x3025: // EGL_DEPTH_SIZE
        HEAP32[((value)>>2)] = EGL.contextAttributes.depth ? 24 : 0;
        return 1;
      case 0x3026: // EGL_STENCIL_SIZE
        HEAP32[((value)>>2)] = EGL.contextAttributes.stencil ? 8 : 0;
        return 1;
      case 0x3027: // EGL_CONFIG_CAVEAT
        // We can return here one of EGL_NONE (0x3038), EGL_SLOW_CONFIG (0x3050) or EGL_NON_CONFORMANT_CONFIG (0x3051).
        HEAP32[((value)>>2)] = 0x3038;
        return 1;
      case 0x3028: // EGL_CONFIG_ID
        HEAP32[((value)>>2)] = 62002;
        return 1;
      case 0x3029: // EGL_LEVEL
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x302A: // EGL_MAX_PBUFFER_HEIGHT
        HEAP32[((value)>>2)] = 4096;
        return 1;
      case 0x302B: // EGL_MAX_PBUFFER_PIXELS
        HEAP32[((value)>>2)] = 16777216;
        return 1;
      case 0x302C: // EGL_MAX_PBUFFER_WIDTH
        HEAP32[((value)>>2)] = 4096;
        return 1;
      case 0x302D: // EGL_NATIVE_RENDERABLE
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x302E: // EGL_NATIVE_VISUAL_ID
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x302F: // EGL_NATIVE_VISUAL_TYPE
        HEAP32[((value)>>2)] = 0x3038;
        return 1;
      case 0x3031: // EGL_SAMPLES
        HEAP32[((value)>>2)] = EGL.contextAttributes.antialias ? 4 : 0;
        return 1;
      case 0x3032: // EGL_SAMPLE_BUFFERS
        HEAP32[((value)>>2)] = EGL.contextAttributes.antialias ? 1 : 0;
        return 1;
      case 0x3033: // EGL_SURFACE_TYPE
        HEAP32[((value)>>2)] = 0x4;
        return 1;
      case 0x3034: // EGL_TRANSPARENT_TYPE
        // If this returns EGL_TRANSPARENT_RGB (0x3052), transparency is used through color-keying. No such thing applies to Emscripten canvas.
        HEAP32[((value)>>2)] = 0x3038;
        return 1;
      case 0x3035: // EGL_TRANSPARENT_BLUE_VALUE
      case 0x3036: // EGL_TRANSPARENT_GREEN_VALUE
      case 0x3037: // EGL_TRANSPARENT_RED_VALUE
        // "If EGL_TRANSPARENT_TYPE is EGL_NONE, then the values for EGL_TRANSPARENT_RED_VALUE, EGL_TRANSPARENT_GREEN_VALUE, and EGL_TRANSPARENT_BLUE_VALUE are undefined."
        HEAP32[((value)>>2)] = -1;
        return 1;
      case 0x3039: // EGL_BIND_TO_TEXTURE_RGB
      case 0x303A: // EGL_BIND_TO_TEXTURE_RGBA
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x303B: // EGL_MIN_SWAP_INTERVAL
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x303C: // EGL_MAX_SWAP_INTERVAL
        HEAP32[((value)>>2)] = 1;
        return 1;
      case 0x303D: // EGL_LUMINANCE_SIZE
      case 0x303E: // EGL_ALPHA_MASK_SIZE
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x303F: // EGL_COLOR_BUFFER_TYPE
        // EGL has two types of buffers: EGL_RGB_BUFFER and EGL_LUMINANCE_BUFFER.
        HEAP32[((value)>>2)] = 0x308E;
        return 1;
      case 0x3040: // EGL_RENDERABLE_TYPE
        // A bit combination of EGL_OPENGL_ES_BIT,EGL_OPENVG_BIT,EGL_OPENGL_ES2_BIT and EGL_OPENGL_BIT.
        HEAP32[((value)>>2)] = 0x4;
        return 1;
      case 0x3042: // EGL_CONFORMANT
        // "EGL_CONFORMANT is a mask indicating if a client API context created with respect to the corresponding EGLConfig will pass the required conformance tests for that API."
        HEAP32[((value)>>2)] = 0;
        return 1;
      default:
        EGL.setErrorCode(0x3004 /* EGL_BAD_ATTRIBUTE */);
        return 0;
      }
    }

  function _eglGetDisplay(nativeDisplayType) {
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      // Note: As a 'conformant' implementation of EGL, we would prefer to init here only if the user
      //       calls this function with EGL_DEFAULT_DISPLAY. Other display IDs would be preferred to be unsupported
      //       and EGL_NO_DISPLAY returned. Uncomment the following code lines to do this.
      // Instead, an alternative route has been preferred, namely that the Emscripten EGL implementation
      // "emulates" X11, and eglGetDisplay is expected to accept/receive a pointer to an X11 Display object.
      // Therefore, be lax and allow anything to be passed in, and return the magic handle to our default EGLDisplay object.
  
  //    if (nativeDisplayType == 0 /* EGL_DEFAULT_DISPLAY */) {
          return 62000; // Magic ID for Emscripten 'default display'
  //    }
  //    else
  //      return 0; // EGL_NO_DISPLAY
    }

  function _eglGetError() {
      return EGL.errorCode;
    }

  function _eglInitialize(display, majorVersion, minorVersion) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (majorVersion) {
        HEAP32[((majorVersion)>>2)] = 1; // Advertise EGL Major version: '1'
      }
      if (minorVersion) {
        HEAP32[((minorVersion)>>2)] = 4; // Advertise EGL Minor version: '4'
      }
      EGL.defaultDisplayInitialized = true;
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    }

  
  function _eglMakeCurrent(display, draw, read, context) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0 /* EGL_FALSE */;
      }
      //\todo An EGL_NOT_INITIALIZED error is generated if EGL is not initialized for dpy.
      if (context != 0 && context != 62004 /* Magic ID for Emscripten EGLContext */) {
        EGL.setErrorCode(0x3006 /* EGL_BAD_CONTEXT */);
        return 0;
      }
      if ((read != 0 && read != 62006) || (draw != 0 && draw != 62006 /* Magic ID for Emscripten 'default surface' */)) {
        EGL.setErrorCode(0x300D /* EGL_BAD_SURFACE */);
        return 0;
      }
  
      GL.makeContextCurrent(context ? EGL.context : null);
  
      EGL.currentContext = context;
      EGL.currentDrawSurface = draw;
      EGL.currentReadSurface = read;
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1 /* EGL_TRUE */;
    }

  
  function _eglQueryString(display, name) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      //\todo An EGL_NOT_INITIALIZED error is generated if EGL is not initialized for dpy.
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      if (EGL.stringCache[name]) return EGL.stringCache[name];
      var ret;
      switch (name) {
        case 0x3053 /* EGL_VENDOR */: ret = stringToNewUTF8("Emscripten"); break;
        case 0x3054 /* EGL_VERSION */: ret = stringToNewUTF8("1.4 Emscripten EGL"); break;
        case 0x3055 /* EGL_EXTENSIONS */:  ret = stringToNewUTF8(""); break; // Currently not supporting any EGL extensions.
        case 0x308D /* EGL_CLIENT_APIS */: ret = stringToNewUTF8("OpenGL_ES"); break;
        default:
          EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
          return 0;
      }
      EGL.stringCache[name] = ret;
      return ret;
    }

  function _eglSwapBuffers() {
  
      if (!EGL.defaultDisplayInitialized) {
        EGL.setErrorCode(0x3001 /* EGL_NOT_INITIALIZED */);
      } else if (!Module.ctx) {
        EGL.setErrorCode(0x3002 /* EGL_BAD_ACCESS */);
      } else if (Module.ctx.isContextLost()) {
        EGL.setErrorCode(0x300E /* EGL_CONTEXT_LOST */);
      } else {
        // According to documentation this does an implicit flush.
        // Due to discussion at https://github.com/emscripten-core/emscripten/pull/1871
        // the flush was removed since this _may_ result in slowing code down.
        //_glFlush();
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
        return 1 /* EGL_TRUE */;
      }
      return 0 /* EGL_FALSE */;
    }

  
  function _eglSwapInterval(display, interval) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (interval == 0) _emscripten_set_main_loop_timing(0/*EM_TIMING_SETTIMEOUT*/, 0);
      else _emscripten_set_main_loop_timing(1/*EM_TIMING_RAF*/, interval);
  
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    }

  function _eglTerminate(display) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      EGL.currentContext = 0;
      EGL.currentReadSurface = 0;
      EGL.currentDrawSurface = 0;
      EGL.defaultDisplayInitialized = false;
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    }

  
  /** @suppress {duplicate } */
  function _eglWaitClient() {
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    }
  var _eglWaitGL = _eglWaitClient;

  function _eglWaitNative(nativeEngineId) {
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    }

  var readEmAsmArgsArray = [];
  function readEmAsmArgs(sigPtr, buf) {
      readEmAsmArgsArray.length = 0;
      var ch;
      // Most arguments are i32s, so shift the buffer pointer so it is a plain
      // index into HEAP32.
      buf >>= 2;
      while (ch = HEAPU8[sigPtr++]) {
        // Floats are always passed as doubles, and doubles and int64s take up 8
        // bytes (two 32-bit slots) in memory, align reads to these:
        buf += (ch != 105/*i*/) & buf;
        readEmAsmArgsArray.push(
          ch == 105/*i*/ ? HEAP32[buf] :
         HEAPF64[buf++ >> 1]
        );
        ++buf;
      }
      return readEmAsmArgsArray;
    }
  function runEmAsmFunction(code, sigPtr, argbuf) {
      var args = readEmAsmArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    }
  function _emscripten_asm_const_int(code, sigPtr, argbuf) {
      return runEmAsmFunction(code, sigPtr, argbuf);
    }

  function runMainThreadEmAsm(code, sigPtr, argbuf, sync) {
      var args = readEmAsmArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    }
  function _emscripten_asm_const_int_sync_on_main_thread(code, sigPtr, argbuf) {
      return runMainThreadEmAsm(code, sigPtr, argbuf, 1);
    }

  function _emscripten_date_now() {
      return Date.now();
    }

  function withStackSave(f) {
      var stack = stackSave();
      var ret = f();
      stackRestore(stack);
      return ret;
    }
  var JSEvents = {inEventHandler:0,removeAllEventListeners:function() {
        for (var i = JSEvents.eventHandlers.length-1; i >= 0; --i) {
          JSEvents._removeHandler(i);
        }
        JSEvents.eventHandlers = [];
        JSEvents.deferredCalls = [];
      },registerRemoveEventListeners:function() {
        if (!JSEvents.removeEventListenersRegistered) {
          __ATEXIT__.push(JSEvents.removeAllEventListeners);
          JSEvents.removeEventListenersRegistered = true;
        }
      },deferredCalls:[],deferCall:function(targetFunction, precedence, argsList) {
        function arraysHaveEqualContent(arrA, arrB) {
          if (arrA.length != arrB.length) return false;
  
          for (var i in arrA) {
            if (arrA[i] != arrB[i]) return false;
          }
          return true;
        }
        // Test if the given call was already queued, and if so, don't add it again.
        for (var i in JSEvents.deferredCalls) {
          var call = JSEvents.deferredCalls[i];
          if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
            return;
          }
        }
        JSEvents.deferredCalls.push({
          targetFunction: targetFunction,
          precedence: precedence,
          argsList: argsList
        });
  
        JSEvents.deferredCalls.sort(function(x,y) { return x.precedence < y.precedence; });
      },removeDeferredCalls:function(targetFunction) {
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
          if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
            JSEvents.deferredCalls.splice(i, 1);
            --i;
          }
        }
      },canPerformEventHandlerRequests:function() {
        return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
      },runDeferredCalls:function() {
        if (!JSEvents.canPerformEventHandlerRequests()) {
          return;
        }
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
          var call = JSEvents.deferredCalls[i];
          JSEvents.deferredCalls.splice(i, 1);
          --i;
          call.targetFunction.apply(null, call.argsList);
        }
      },eventHandlers:[],removeAllHandlersOnTarget:function(target, eventTypeString) {
        for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
          if (JSEvents.eventHandlers[i].target == target && 
            (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
             JSEvents._removeHandler(i--);
           }
        }
      },_removeHandler:function(i) {
        var h = JSEvents.eventHandlers[i];
        h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
        JSEvents.eventHandlers.splice(i, 1);
      },registerOrRemoveHandler:function(eventHandler) {
        var jsEventHandler = function jsEventHandler(event) {
          // Increment nesting count for the event handler.
          ++JSEvents.inEventHandler;
          JSEvents.currentEventHandler = eventHandler;
          // Process any old deferred calls the user has placed.
          JSEvents.runDeferredCalls();
          // Process the actual event, calls back to user C code handler.
          eventHandler.handlerFunc(event);
          // Process any new deferred calls that were placed right now from this event handler.
          JSEvents.runDeferredCalls();
          // Out of event handler - restore nesting count.
          --JSEvents.inEventHandler;
        };
        
        if (eventHandler.callbackfunc) {
          eventHandler.eventListenerFunc = jsEventHandler;
          eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
          JSEvents.eventHandlers.push(eventHandler);
          JSEvents.registerRemoveEventListeners();
        } else {
          for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
            if (JSEvents.eventHandlers[i].target == eventHandler.target
             && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
               JSEvents._removeHandler(i--);
             }
          }
        }
      },getNodeNameForTarget:function(target) {
        if (!target) return '';
        if (target == window) return '#window';
        if (target == screen) return '#screen';
        return (target && target.nodeName) ? target.nodeName : '';
      },fullscreenEnabled:function() {
        return document.fullscreenEnabled
        // Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitFullscreenEnabled.
        // TODO: If Safari at some point ships with unprefixed version, update the version check above.
        || document.webkitFullscreenEnabled
         ;
      }};
  
  var currentFullscreenStrategy = {};
  
  
  
  
  function maybeCStringToJsString(cString) {
      // "cString > 2" checks if the input is a number, and isn't of the special
      // values we accept here, EMSCRIPTEN_EVENT_TARGET_* (which map to 0, 1, 2).
      // In other words, if cString > 2 then it's a pointer to a valid place in
      // memory, and points to a C string.
      return cString > 2 ? UTF8ToString(cString) : cString;
    }
  
  var specialHTMLTargets = [0, document, window];
  function findEventTarget(target) {
      target = maybeCStringToJsString(target);
      var domElement = specialHTMLTargets[target] || document.querySelector(target);
      return domElement;
    }
  function findCanvasEventTarget(target) { return findEventTarget(target); }
  function _emscripten_get_canvas_element_size(target, width, height) {
      var canvas = findCanvasEventTarget(target);
      if (!canvas) return -4;
      HEAP32[((width)>>2)] = canvas.width;
      HEAP32[((height)>>2)] = canvas.height;
    }
  
  
  
  function stringToUTF8OnStack(str) {
      var size = lengthBytesUTF8(str) + 1;
      var ret = stackAlloc(size);
      stringToUTF8(str, ret, size);
      return ret;
    }
  function getCanvasElementSize(target) {
      return withStackSave(function() {
        var w = stackAlloc(8);
        var h = w + 4;
  
        var targetInt = stringToUTF8OnStack(target.id);
        var ret = _emscripten_get_canvas_element_size(targetInt, w, h);
        var size = [HEAP32[((w)>>2)], HEAP32[((h)>>2)]];
        return size;
      });
    }
  
  
  function _emscripten_set_canvas_element_size(target, width, height) {
      var canvas = findCanvasEventTarget(target);
      if (!canvas) return -4;
      canvas.width = width;
      canvas.height = height;
      return 0;
    }
  
  
  function setCanvasElementSize(target, width, height) {
      if (!target.controlTransferredOffscreen) {
        target.width = width;
        target.height = height;
      } else {
        // This function is being called from high-level JavaScript code instead of asm.js/Wasm,
        // and it needs to synchronously proxy over to another thread, so marshal the string onto the heap to do the call.
        withStackSave(function() {
          var targetInt = stringToUTF8OnStack(target.id);
          _emscripten_set_canvas_element_size(targetInt, width, height);
        });
      }
    }
  
  function registerRestoreOldStyle(canvas) {
      var canvasSize = getCanvasElementSize(canvas);
      var oldWidth = canvasSize[0];
      var oldHeight = canvasSize[1];
      var oldCssWidth = canvas.style.width;
      var oldCssHeight = canvas.style.height;
      var oldBackgroundColor = canvas.style.backgroundColor; // Chrome reads color from here.
      var oldDocumentBackgroundColor = document.body.style.backgroundColor; // IE11 reads color from here.
      // Firefox always has black background color.
      var oldPaddingLeft = canvas.style.paddingLeft; // Chrome, FF, Safari
      var oldPaddingRight = canvas.style.paddingRight;
      var oldPaddingTop = canvas.style.paddingTop;
      var oldPaddingBottom = canvas.style.paddingBottom;
      var oldMarginLeft = canvas.style.marginLeft; // IE11
      var oldMarginRight = canvas.style.marginRight;
      var oldMarginTop = canvas.style.marginTop;
      var oldMarginBottom = canvas.style.marginBottom;
      var oldDocumentBodyMargin = document.body.style.margin;
      var oldDocumentOverflow = document.documentElement.style.overflow; // Chrome, Firefox
      var oldDocumentScroll = document.body.scroll; // IE
      var oldImageRendering = canvas.style.imageRendering;
  
      function restoreOldStyle() {
        var fullscreenElement = document.fullscreenElement
          || document.webkitFullscreenElement
          ;
        if (!fullscreenElement) {
          document.removeEventListener('fullscreenchange', restoreOldStyle);
  
          // Unprefixed Fullscreen API shipped in Chromium 71 (https://bugs.chromium.org/p/chromium/issues/detail?id=383813)
          // As of Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitfullscreenchange. TODO: revisit this check once Safari ships unprefixed version.
          document.removeEventListener('webkitfullscreenchange', restoreOldStyle);
  
          setCanvasElementSize(canvas, oldWidth, oldHeight);
  
          canvas.style.width = oldCssWidth;
          canvas.style.height = oldCssHeight;
          canvas.style.backgroundColor = oldBackgroundColor; // Chrome
          // IE11 hack: assigning 'undefined' or an empty string to document.body.style.backgroundColor has no effect, so first assign back the default color
          // before setting the undefined value. Setting undefined value is also important, or otherwise we would later treat that as something that the user
          // had explicitly set so subsequent fullscreen transitions would not set background color properly.
          if (!oldDocumentBackgroundColor) document.body.style.backgroundColor = 'white';
          document.body.style.backgroundColor = oldDocumentBackgroundColor; // IE11
          canvas.style.paddingLeft = oldPaddingLeft; // Chrome, FF, Safari
          canvas.style.paddingRight = oldPaddingRight;
          canvas.style.paddingTop = oldPaddingTop;
          canvas.style.paddingBottom = oldPaddingBottom;
          canvas.style.marginLeft = oldMarginLeft; // IE11
          canvas.style.marginRight = oldMarginRight;
          canvas.style.marginTop = oldMarginTop;
          canvas.style.marginBottom = oldMarginBottom;
          document.body.style.margin = oldDocumentBodyMargin;
          document.documentElement.style.overflow = oldDocumentOverflow; // Chrome, Firefox
          document.body.scroll = oldDocumentScroll; // IE
          canvas.style.imageRendering = oldImageRendering;
          if (canvas.GLctxObject) canvas.GLctxObject.GLctx.viewport(0, 0, oldWidth, oldHeight);
  
          if (currentFullscreenStrategy.canvasResizedCallback) {
            getWasmTableEntry(currentFullscreenStrategy.canvasResizedCallback)(37, 0, currentFullscreenStrategy.canvasResizedCallbackUserData);
          }
        }
      }
      document.addEventListener('fullscreenchange', restoreOldStyle);
      // Unprefixed Fullscreen API shipped in Chromium 71 (https://bugs.chromium.org/p/chromium/issues/detail?id=383813)
      // As of Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitfullscreenchange. TODO: revisit this check once Safari ships unprefixed version.
      document.addEventListener('webkitfullscreenchange', restoreOldStyle);
      return restoreOldStyle;
    }
  
  
  function setLetterbox(element, topBottom, leftRight) {
        // Cannot use margin to specify letterboxes in FF or Chrome, since those ignore margins in fullscreen mode.
        element.style.paddingLeft = element.style.paddingRight = leftRight + 'px';
        element.style.paddingTop = element.style.paddingBottom = topBottom + 'px';
    }
  
  
  function getBoundingClientRect(e) {
      return specialHTMLTargets.indexOf(e) < 0 ? e.getBoundingClientRect() : {'left':0,'top':0};
    }
  function JSEvents_resizeCanvasForFullscreen(target, strategy) {
      var restoreOldStyle = registerRestoreOldStyle(target);
      var cssWidth = strategy.softFullscreen ? innerWidth : screen.width;
      var cssHeight = strategy.softFullscreen ? innerHeight : screen.height;
      var rect = getBoundingClientRect(target);
      var windowedCssWidth = rect.width;
      var windowedCssHeight = rect.height;
      var canvasSize = getCanvasElementSize(target);
      var windowedRttWidth = canvasSize[0];
      var windowedRttHeight = canvasSize[1];
  
      if (strategy.scaleMode == 3) {
        setLetterbox(target, (cssHeight - windowedCssHeight) / 2, (cssWidth - windowedCssWidth) / 2);
        cssWidth = windowedCssWidth;
        cssHeight = windowedCssHeight;
      } else if (strategy.scaleMode == 2) {
        if (cssWidth*windowedRttHeight < windowedRttWidth*cssHeight) {
          var desiredCssHeight = windowedRttHeight * cssWidth / windowedRttWidth;
          setLetterbox(target, (cssHeight - desiredCssHeight) / 2, 0);
          cssHeight = desiredCssHeight;
        } else {
          var desiredCssWidth = windowedRttWidth * cssHeight / windowedRttHeight;
          setLetterbox(target, 0, (cssWidth - desiredCssWidth) / 2);
          cssWidth = desiredCssWidth;
        }
      }
  
      // If we are adding padding, must choose a background color or otherwise Chrome will give the
      // padding a default white color. Do it only if user has not customized their own background color.
      if (!target.style.backgroundColor) target.style.backgroundColor = 'black';
      // IE11 does the same, but requires the color to be set in the document body.
      if (!document.body.style.backgroundColor) document.body.style.backgroundColor = 'black'; // IE11
      // Firefox always shows black letterboxes independent of style color.
  
      target.style.width = cssWidth + 'px';
      target.style.height = cssHeight + 'px';
  
      if (strategy.filteringMode == 1) {
        target.style.imageRendering = 'optimizeSpeed';
        target.style.imageRendering = '-moz-crisp-edges';
        target.style.imageRendering = '-o-crisp-edges';
        target.style.imageRendering = '-webkit-optimize-contrast';
        target.style.imageRendering = 'optimize-contrast';
        target.style.imageRendering = 'crisp-edges';
        target.style.imageRendering = 'pixelated';
      }
  
      var dpiScale = (strategy.canvasResolutionScaleMode == 2) ? devicePixelRatio : 1;
      if (strategy.canvasResolutionScaleMode != 0) {
        var newWidth = (cssWidth * dpiScale)|0;
        var newHeight = (cssHeight * dpiScale)|0;
        setCanvasElementSize(target, newWidth, newHeight);
        if (target.GLctxObject) target.GLctxObject.GLctx.viewport(0, 0, newWidth, newHeight);
      }
      return restoreOldStyle;
    }
  
  function JSEvents_requestFullscreen(target, strategy) {
      // EMSCRIPTEN_FULLSCREEN_SCALE_DEFAULT + EMSCRIPTEN_FULLSCREEN_CANVAS_SCALE_NONE is a mode where no extra logic is performed to the DOM elements.
      if (strategy.scaleMode != 0 || strategy.canvasResolutionScaleMode != 0) {
        JSEvents_resizeCanvasForFullscreen(target, strategy);
      }
  
      if (target.requestFullscreen) {
        target.requestFullscreen();
      } else if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else {
        return JSEvents.fullscreenEnabled() ? -3 : -1;
      }
  
      currentFullscreenStrategy = strategy;
  
      if (strategy.canvasResizedCallback) {
        getWasmTableEntry(strategy.canvasResizedCallback)(37, 0, strategy.canvasResizedCallbackUserData);
      }
  
      return 0;
    }
  
  function _emscripten_exit_fullscreen() {
      if (!JSEvents.fullscreenEnabled()) return -1;
      // Make sure no queued up calls will fire after this.
      JSEvents.removeDeferredCalls(JSEvents_requestFullscreen);
  
      var d = specialHTMLTargets[1];
      if (d.exitFullscreen) {
        d.fullscreenElement && d.exitFullscreen();
      } else if (d.webkitExitFullscreen) {
        d.webkitFullscreenElement && d.webkitExitFullscreen();
      } else {
        return -1;
      }
  
      return 0;
    }

  
  function requestPointerLock(target) {
      if (target.requestPointerLock) {
        target.requestPointerLock();
      } else {
        // document.body is known to accept pointer lock, so use that to differentiate if the user passed a bad element,
        // or if the whole browser just doesn't support the feature.
        if (document.body.requestPointerLock
          ) {
          return -3;
        }
        return -1;
      }
      return 0;
    }
  function _emscripten_exit_pointerlock() {
      // Make sure no queued up calls will fire after this.
      JSEvents.removeDeferredCalls(requestPointerLock);
  
      if (document.exitPointerLock) {
        document.exitPointerLock();
      } else {
        return -1;
      }
      return 0;
    }

  function fillBatteryEventData(eventStruct, e) {
      HEAPF64[((eventStruct)>>3)] = e.chargingTime;
      HEAPF64[(((eventStruct)+(8))>>3)] = e.dischargingTime;
      HEAPF64[(((eventStruct)+(16))>>3)] = e.level;
      HEAP32[(((eventStruct)+(24))>>2)] = e.charging;
    }
  
  function battery() { return navigator.battery || navigator.mozBattery || navigator.webkitBattery; }
  function _emscripten_get_battery_status(batteryState) {
      if (!battery()) return -1; 
      fillBatteryEventData(batteryState, battery());
      return 0;
    }

  function _emscripten_get_device_pixel_ratio() {
      return devicePixelRatio;
    }

  
  
  function _emscripten_get_element_css_size(target, width, height) {
      target = findEventTarget(target);
      if (!target) return -4;
  
      var rect = getBoundingClientRect(target);
      HEAPF64[((width)>>3)] = rect.width;
      HEAPF64[((height)>>3)] = rect.height;
  
      return 0;
    }

  
  function fillGamepadEventData(eventStruct, e) {
      HEAPF64[((eventStruct)>>3)] = e.timestamp;
      for (var i = 0; i < e.axes.length; ++i) {
        HEAPF64[(((eventStruct+i*8)+(16))>>3)] = e.axes[i];
      }
      for (var i = 0; i < e.buttons.length; ++i) {
        if (typeof e.buttons[i] == 'object') {
          HEAPF64[(((eventStruct+i*8)+(528))>>3)] = e.buttons[i].value;
        } else {
          HEAPF64[(((eventStruct+i*8)+(528))>>3)] = e.buttons[i];
        }
      }
      for (var i = 0; i < e.buttons.length; ++i) {
        if (typeof e.buttons[i] == 'object') {
          HEAP32[(((eventStruct+i*4)+(1040))>>2)] = e.buttons[i].pressed;
        } else {
          // Assigning a boolean to HEAP32, that's ok, but Closure would like to warn about it:
          /** @suppress {checkTypes} */
          HEAP32[(((eventStruct+i*4)+(1040))>>2)] = e.buttons[i] == 1;
        }
      }
      HEAP32[(((eventStruct)+(1296))>>2)] = e.connected;
      HEAP32[(((eventStruct)+(1300))>>2)] = e.index;
      HEAP32[(((eventStruct)+(8))>>2)] = e.axes.length;
      HEAP32[(((eventStruct)+(12))>>2)] = e.buttons.length;
      stringToUTF8(e.id, eventStruct + 1304, 64);
      stringToUTF8(e.mapping, eventStruct + 1368, 64);
    }
  function _emscripten_get_gamepad_status(index, gamepadState) {
  
      // INVALID_PARAM is returned on a Gamepad index that never was there.
      if (index < 0 || index >= JSEvents.lastGamepadState.length) return -5;
  
      // NO_DATA is returned on a Gamepad index that was removed.
      // For previously disconnected gamepads there should be an empty slot (null/undefined/false) at the index.
      // This is because gamepads must keep their original position in the array.
      // For example, removing the first of two gamepads produces [null/undefined/false, gamepad].
      if (!JSEvents.lastGamepadState[index]) return -7;
  
      fillGamepadEventData(gamepadState, JSEvents.lastGamepadState[index]);
      return 0;
    }

  function getHeapMax() {
      // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
      // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
      // for any code that deals with heap sizes, which would require special
      // casing all heap size related code to treat 0 specially.
      return 2147483648;
    }
  function _emscripten_get_heap_max() {
      return getHeapMax();
    }


  function _emscripten_get_num_gamepads() {
      // N.B. Do not call emscripten_get_num_gamepads() unless having first called emscripten_sample_gamepad_data(), and that has returned EMSCRIPTEN_RESULT_SUCCESS.
      // Otherwise the following line will throw an exception.
      return JSEvents.lastGamepadState.length;
    }

  
  
  
  function _emscripten_get_preloaded_image_data(path, w, h) {
      if ((path | 0) === path) path = UTF8ToString(path);
  
      path = PATH_FS.resolve(path);
  
      var canvas = /** @type {HTMLCanvasElement} */(preloadedImages[path]);
      if (canvas) {
        var ctx = canvas.getContext("2d");
        var image = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var buf = _malloc(canvas.width * canvas.height * 4);
  
        HEAPU8.set(image.data, buf);
  
        HEAP32[((w)>>2)] = canvas.width;
        HEAP32[((h)>>2)] = canvas.height;
        return buf;
      }
  
      return 0;
    }

  
  
  function _emscripten_get_preloaded_image_data_from_FILE(file, w, h) {
      var fd = _fileno(file);
      var stream = FS.getStream(fd);
      if (stream) {
        return _emscripten_get_preloaded_image_data(stream.path, w, h);
      }
  
      return 0;
    }

  function _emscripten_get_screen_size(width, height) {
      HEAP32[((width)>>2)] = screen.width;
      HEAP32[((height)>>2)] = screen.height;
    }

  /** @suppress {duplicate } */
  function _glActiveTexture(x0) { GLctx['activeTexture'](x0) }
  var _emscripten_glActiveTexture = _glActiveTexture;

  /** @suppress {duplicate } */
  function _glAttachShader(program, shader) {
      GLctx.attachShader(GL.programs[program], GL.shaders[shader]);
    }
  var _emscripten_glAttachShader = _glAttachShader;

  /** @suppress {duplicate } */
  function _glBeginQueryEXT(target, id) {
      GLctx.disjointTimerQueryExt['beginQueryEXT'](target, GL.queries[id]);
    }
  var _emscripten_glBeginQueryEXT = _glBeginQueryEXT;

  
  /** @suppress {duplicate } */
  function _glBindAttribLocation(program, index, name) {
      GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name));
    }
  var _emscripten_glBindAttribLocation = _glBindAttribLocation;

  /** @suppress {duplicate } */
  function _glBindBuffer(target, buffer) {
  
      GLctx.bindBuffer(target, GL.buffers[buffer]);
    }
  var _emscripten_glBindBuffer = _glBindBuffer;

  /** @suppress {duplicate } */
  function _glBindFramebuffer(target, framebuffer) {
  
      GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer]);
  
    }
  var _emscripten_glBindFramebuffer = _glBindFramebuffer;

  /** @suppress {duplicate } */
  function _glBindRenderbuffer(target, renderbuffer) {
      GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
    }
  var _emscripten_glBindRenderbuffer = _glBindRenderbuffer;

  /** @suppress {duplicate } */
  function _glBindTexture(target, texture) {
      GLctx.bindTexture(target, GL.textures[texture]);
    }
  var _emscripten_glBindTexture = _glBindTexture;

  
  /** @suppress {duplicate } */
  function _glBindVertexArray(vao) {
      GLctx['bindVertexArray'](GL.vaos[vao]);
    }
  /** @suppress {duplicate } */
  var _glBindVertexArrayOES = _glBindVertexArray;
  var _emscripten_glBindVertexArrayOES = _glBindVertexArrayOES;

  /** @suppress {duplicate } */
  function _glBlendColor(x0, x1, x2, x3) { GLctx['blendColor'](x0, x1, x2, x3) }
  var _emscripten_glBlendColor = _glBlendColor;

  /** @suppress {duplicate } */
  function _glBlendEquation(x0) { GLctx['blendEquation'](x0) }
  var _emscripten_glBlendEquation = _glBlendEquation;

  /** @suppress {duplicate } */
  function _glBlendEquationSeparate(x0, x1) { GLctx['blendEquationSeparate'](x0, x1) }
  var _emscripten_glBlendEquationSeparate = _glBlendEquationSeparate;

  /** @suppress {duplicate } */
  function _glBlendFunc(x0, x1) { GLctx['blendFunc'](x0, x1) }
  var _emscripten_glBlendFunc = _glBlendFunc;

  /** @suppress {duplicate } */
  function _glBlendFuncSeparate(x0, x1, x2, x3) { GLctx['blendFuncSeparate'](x0, x1, x2, x3) }
  var _emscripten_glBlendFuncSeparate = _glBlendFuncSeparate;

  /** @suppress {duplicate } */
  function _glBufferData(target, size, data, usage) {
  
        // N.b. here first form specifies a heap subarray, second form an integer size, so the ?: code here is polymorphic. It is advised to avoid
        // randomly mixing both uses in calling code, to avoid any potential JS engine JIT issues.
        GLctx.bufferData(target, data ? HEAPU8.subarray(data, data+size) : size, usage);
    }
  var _emscripten_glBufferData = _glBufferData;

  /** @suppress {duplicate } */
  function _glBufferSubData(target, offset, size, data) {
      GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data+size));
    }
  var _emscripten_glBufferSubData = _glBufferSubData;

  /** @suppress {duplicate } */
  function _glCheckFramebufferStatus(x0) { return GLctx['checkFramebufferStatus'](x0) }
  var _emscripten_glCheckFramebufferStatus = _glCheckFramebufferStatus;

  /** @suppress {duplicate } */
  function _glClear(x0) { GLctx['clear'](x0) }
  var _emscripten_glClear = _glClear;

  /** @suppress {duplicate } */
  function _glClearColor(x0, x1, x2, x3) { GLctx['clearColor'](x0, x1, x2, x3) }
  var _emscripten_glClearColor = _glClearColor;

  /** @suppress {duplicate } */
  function _glClearDepthf(x0) { GLctx['clearDepth'](x0) }
  var _emscripten_glClearDepthf = _glClearDepthf;

  /** @suppress {duplicate } */
  function _glClearStencil(x0) { GLctx['clearStencil'](x0) }
  var _emscripten_glClearStencil = _glClearStencil;

  /** @suppress {duplicate } */
  function _glColorMask(red, green, blue, alpha) {
      GLctx.colorMask(!!red, !!green, !!blue, !!alpha);
    }
  var _emscripten_glColorMask = _glColorMask;

  /** @suppress {duplicate } */
  function _glCompileShader(shader) {
      GLctx.compileShader(GL.shaders[shader]);
    }
  var _emscripten_glCompileShader = _glCompileShader;

  /** @suppress {duplicate } */
  function _glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
      GLctx['compressedTexImage2D'](target, level, internalFormat, width, height, border, data ? HEAPU8.subarray((data), (data+imageSize)) : null);
    }
  var _emscripten_glCompressedTexImage2D = _glCompressedTexImage2D;

  /** @suppress {duplicate } */
  function _glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
      GLctx['compressedTexSubImage2D'](target, level, xoffset, yoffset, width, height, format, data ? HEAPU8.subarray((data), (data+imageSize)) : null);
    }
  var _emscripten_glCompressedTexSubImage2D = _glCompressedTexSubImage2D;

  /** @suppress {duplicate } */
  function _glCopyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7) { GLctx['copyTexImage2D'](x0, x1, x2, x3, x4, x5, x6, x7) }
  var _emscripten_glCopyTexImage2D = _glCopyTexImage2D;

  /** @suppress {duplicate } */
  function _glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) { GLctx['copyTexSubImage2D'](x0, x1, x2, x3, x4, x5, x6, x7) }
  var _emscripten_glCopyTexSubImage2D = _glCopyTexSubImage2D;

  /** @suppress {duplicate } */
  function _glCreateProgram() {
      var id = GL.getNewId(GL.programs);
      var program = GLctx.createProgram();
      // Store additional information needed for each shader program:
      program.name = id;
      // Lazy cache results of glGetProgramiv(GL_ACTIVE_UNIFORM_MAX_LENGTH/GL_ACTIVE_ATTRIBUTE_MAX_LENGTH/GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH)
      program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
      program.uniformIdCounter = 1;
      GL.programs[id] = program;
      return id;
    }
  var _emscripten_glCreateProgram = _glCreateProgram;

  /** @suppress {duplicate } */
  function _glCreateShader(shaderType) {
      var id = GL.getNewId(GL.shaders);
      GL.shaders[id] = GLctx.createShader(shaderType);
  
      return id;
    }
  var _emscripten_glCreateShader = _glCreateShader;

  /** @suppress {duplicate } */
  function _glCullFace(x0) { GLctx['cullFace'](x0) }
  var _emscripten_glCullFace = _glCullFace;

  /** @suppress {duplicate } */
  function _glDeleteBuffers(n, buffers) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((buffers)+(i*4))>>2)];
        var buffer = GL.buffers[id];
  
        // From spec: "glDeleteBuffers silently ignores 0's and names that do not
        // correspond to existing buffer objects."
        if (!buffer) continue;
  
        GLctx.deleteBuffer(buffer);
        buffer.name = 0;
        GL.buffers[id] = null;
  
      }
    }
  var _emscripten_glDeleteBuffers = _glDeleteBuffers;

  /** @suppress {duplicate } */
  function _glDeleteFramebuffers(n, framebuffers) {
      for (var i = 0; i < n; ++i) {
        var id = HEAP32[(((framebuffers)+(i*4))>>2)];
        var framebuffer = GL.framebuffers[id];
        if (!framebuffer) continue; // GL spec: "glDeleteFramebuffers silently ignores 0s and names that do not correspond to existing framebuffer objects".
        GLctx.deleteFramebuffer(framebuffer);
        framebuffer.name = 0;
        GL.framebuffers[id] = null;
      }
    }
  var _emscripten_glDeleteFramebuffers = _glDeleteFramebuffers;

  /** @suppress {duplicate } */
  function _glDeleteProgram(id) {
      if (!id) return;
      var program = GL.programs[id];
      if (!program) { // glDeleteProgram actually signals an error when deleting a nonexisting object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteProgram(program);
      program.name = 0;
      GL.programs[id] = null;
    }
  var _emscripten_glDeleteProgram = _glDeleteProgram;

  /** @suppress {duplicate } */
  function _glDeleteQueriesEXT(n, ids) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((ids)+(i*4))>>2)];
        var query = GL.queries[id];
        if (!query) continue; // GL spec: "unused names in ids are ignored, as is the name zero."
        GLctx.disjointTimerQueryExt['deleteQueryEXT'](query);
        GL.queries[id] = null;
      }
    }
  var _emscripten_glDeleteQueriesEXT = _glDeleteQueriesEXT;

  /** @suppress {duplicate } */
  function _glDeleteRenderbuffers(n, renderbuffers) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((renderbuffers)+(i*4))>>2)];
        var renderbuffer = GL.renderbuffers[id];
        if (!renderbuffer) continue; // GL spec: "glDeleteRenderbuffers silently ignores 0s and names that do not correspond to existing renderbuffer objects".
        GLctx.deleteRenderbuffer(renderbuffer);
        renderbuffer.name = 0;
        GL.renderbuffers[id] = null;
      }
    }
  var _emscripten_glDeleteRenderbuffers = _glDeleteRenderbuffers;

  /** @suppress {duplicate } */
  function _glDeleteShader(id) {
      if (!id) return;
      var shader = GL.shaders[id];
      if (!shader) { // glDeleteShader actually signals an error when deleting a nonexisting object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteShader(shader);
      GL.shaders[id] = null;
    }
  var _emscripten_glDeleteShader = _glDeleteShader;

  /** @suppress {duplicate } */
  function _glDeleteTextures(n, textures) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((textures)+(i*4))>>2)];
        var texture = GL.textures[id];
        if (!texture) continue; // GL spec: "glDeleteTextures silently ignores 0s and names that do not correspond to existing textures".
        GLctx.deleteTexture(texture);
        texture.name = 0;
        GL.textures[id] = null;
      }
    }
  var _emscripten_glDeleteTextures = _glDeleteTextures;

  
  /** @suppress {duplicate } */
  function _glDeleteVertexArrays(n, vaos) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((vaos)+(i*4))>>2)];
        GLctx['deleteVertexArray'](GL.vaos[id]);
        GL.vaos[id] = null;
      }
    }
  /** @suppress {duplicate } */
  var _glDeleteVertexArraysOES = _glDeleteVertexArrays;
  var _emscripten_glDeleteVertexArraysOES = _glDeleteVertexArraysOES;

  /** @suppress {duplicate } */
  function _glDepthFunc(x0) { GLctx['depthFunc'](x0) }
  var _emscripten_glDepthFunc = _glDepthFunc;

  /** @suppress {duplicate } */
  function _glDepthMask(flag) {
      GLctx.depthMask(!!flag);
    }
  var _emscripten_glDepthMask = _glDepthMask;

  /** @suppress {duplicate } */
  function _glDepthRangef(x0, x1) { GLctx['depthRange'](x0, x1) }
  var _emscripten_glDepthRangef = _glDepthRangef;

  /** @suppress {duplicate } */
  function _glDetachShader(program, shader) {
      GLctx.detachShader(GL.programs[program], GL.shaders[shader]);
    }
  var _emscripten_glDetachShader = _glDetachShader;

  /** @suppress {duplicate } */
  function _glDisable(x0) { GLctx['disable'](x0) }
  var _emscripten_glDisable = _glDisable;

  /** @suppress {duplicate } */
  function _glDisableVertexAttribArray(index) {
      GLctx.disableVertexAttribArray(index);
    }
  var _emscripten_glDisableVertexAttribArray = _glDisableVertexAttribArray;

  /** @suppress {duplicate } */
  function _glDrawArrays(mode, first, count) {
  
      GLctx.drawArrays(mode, first, count);
  
    }
  var _emscripten_glDrawArrays = _glDrawArrays;

  
  /** @suppress {duplicate } */
  function _glDrawArraysInstanced(mode, first, count, primcount) {
      GLctx['drawArraysInstanced'](mode, first, count, primcount);
    }
  /** @suppress {duplicate } */
  var _glDrawArraysInstancedANGLE = _glDrawArraysInstanced;
  var _emscripten_glDrawArraysInstancedANGLE = _glDrawArraysInstancedANGLE;

  
  var tempFixedLengthArray = [];
  
  /** @suppress {duplicate } */
  function _glDrawBuffers(n, bufs) {
  
      var bufArray = tempFixedLengthArray[n];
      for (var i = 0; i < n; i++) {
        bufArray[i] = HEAP32[(((bufs)+(i*4))>>2)];
      }
  
      GLctx['drawBuffers'](bufArray);
    }
  /** @suppress {duplicate } */
  var _glDrawBuffersWEBGL = _glDrawBuffers;
  var _emscripten_glDrawBuffersWEBGL = _glDrawBuffersWEBGL;

  /** @suppress {duplicate } */
  function _glDrawElements(mode, count, type, indices) {
  
      GLctx.drawElements(mode, count, type, indices);
  
    }
  var _emscripten_glDrawElements = _glDrawElements;

  
  /** @suppress {duplicate } */
  function _glDrawElementsInstanced(mode, count, type, indices, primcount) {
      GLctx['drawElementsInstanced'](mode, count, type, indices, primcount);
    }
  /** @suppress {duplicate } */
  var _glDrawElementsInstancedANGLE = _glDrawElementsInstanced;
  var _emscripten_glDrawElementsInstancedANGLE = _glDrawElementsInstancedANGLE;

  /** @suppress {duplicate } */
  function _glEnable(x0) { GLctx['enable'](x0) }
  var _emscripten_glEnable = _glEnable;

  /** @suppress {duplicate } */
  function _glEnableVertexAttribArray(index) {
      GLctx.enableVertexAttribArray(index);
    }
  var _emscripten_glEnableVertexAttribArray = _glEnableVertexAttribArray;

  /** @suppress {duplicate } */
  function _glEndQueryEXT(target) {
      GLctx.disjointTimerQueryExt['endQueryEXT'](target);
    }
  var _emscripten_glEndQueryEXT = _glEndQueryEXT;

  /** @suppress {duplicate } */
  function _glFinish() { GLctx['finish']() }
  var _emscripten_glFinish = _glFinish;

  /** @suppress {duplicate } */
  function _glFlush() { GLctx['flush']() }
  var _emscripten_glFlush = _glFlush;

  /** @suppress {duplicate } */
  function _glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
      GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget,
                                         GL.renderbuffers[renderbuffer]);
    }
  var _emscripten_glFramebufferRenderbuffer = _glFramebufferRenderbuffer;

  /** @suppress {duplicate } */
  function _glFramebufferTexture2D(target, attachment, textarget, texture, level) {
      GLctx.framebufferTexture2D(target, attachment, textarget,
                                      GL.textures[texture], level);
    }
  var _emscripten_glFramebufferTexture2D = _glFramebufferTexture2D;

  /** @suppress {duplicate } */
  function _glFrontFace(x0) { GLctx['frontFace'](x0) }
  var _emscripten_glFrontFace = _glFrontFace;

  function __glGenObject(n, buffers, createFunction, objectTable
      ) {
      for (var i = 0; i < n; i++) {
        var buffer = GLctx[createFunction]();
        var id = buffer && GL.getNewId(objectTable);
        if (buffer) {
          buffer.name = id;
          objectTable[id] = buffer;
        } else {
          GL.recordError(0x502 /* GL_INVALID_OPERATION */);
        }
        HEAP32[(((buffers)+(i*4))>>2)] = id;
      }
    }
  
  /** @suppress {duplicate } */
  function _glGenBuffers(n, buffers) {
      __glGenObject(n, buffers, 'createBuffer', GL.buffers
        );
    }
  var _emscripten_glGenBuffers = _glGenBuffers;

  
  /** @suppress {duplicate } */
  function _glGenFramebuffers(n, ids) {
      __glGenObject(n, ids, 'createFramebuffer', GL.framebuffers
        );
    }
  var _emscripten_glGenFramebuffers = _glGenFramebuffers;

  /** @suppress {duplicate } */
  function _glGenQueriesEXT(n, ids) {
      for (var i = 0; i < n; i++) {
        var query = GLctx.disjointTimerQueryExt['createQueryEXT']();
        if (!query) {
          GL.recordError(0x502 /* GL_INVALID_OPERATION */);
          while (i < n) HEAP32[(((ids)+(i++*4))>>2)] = 0;
          return;
        }
        var id = GL.getNewId(GL.queries);
        query.name = id;
        GL.queries[id] = query;
        HEAP32[(((ids)+(i*4))>>2)] = id;
      }
    }
  var _emscripten_glGenQueriesEXT = _glGenQueriesEXT;

  
  /** @suppress {duplicate } */
  function _glGenRenderbuffers(n, renderbuffers) {
      __glGenObject(n, renderbuffers, 'createRenderbuffer', GL.renderbuffers
        );
    }
  var _emscripten_glGenRenderbuffers = _glGenRenderbuffers;

  
  /** @suppress {duplicate } */
  function _glGenTextures(n, textures) {
      __glGenObject(n, textures, 'createTexture', GL.textures
        );
    }
  var _emscripten_glGenTextures = _glGenTextures;

  
  
  /** @suppress {duplicate } */
  function _glGenVertexArrays(n, arrays) {
      __glGenObject(n, arrays, 'createVertexArray', GL.vaos
        );
    }
  /** @suppress {duplicate } */
  var _glGenVertexArraysOES = _glGenVertexArrays;
  var _emscripten_glGenVertexArraysOES = _glGenVertexArraysOES;

  /** @suppress {duplicate } */
  function _glGenerateMipmap(x0) { GLctx['generateMipmap'](x0) }
  var _emscripten_glGenerateMipmap = _glGenerateMipmap;

  
  function __glGetActiveAttribOrUniform(funcName, program, index, bufSize, length, size, type, name) {
      program = GL.programs[program];
      var info = GLctx[funcName](program, index);
      if (info) { // If an error occurs, nothing will be written to length, size and type and name.
        var numBytesWrittenExclNull = name && stringToUTF8(info.name, name, bufSize);
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
        if (size) HEAP32[((size)>>2)] = info.size;
        if (type) HEAP32[((type)>>2)] = info.type;
      }
    }
  
  /** @suppress {duplicate } */
  function _glGetActiveAttrib(program, index, bufSize, length, size, type, name) {
      __glGetActiveAttribOrUniform('getActiveAttrib', program, index, bufSize, length, size, type, name);
    }
  var _emscripten_glGetActiveAttrib = _glGetActiveAttrib;

  
  /** @suppress {duplicate } */
  function _glGetActiveUniform(program, index, bufSize, length, size, type, name) {
      __glGetActiveAttribOrUniform('getActiveUniform', program, index, bufSize, length, size, type, name);
    }
  var _emscripten_glGetActiveUniform = _glGetActiveUniform;

  /** @suppress {duplicate } */
  function _glGetAttachedShaders(program, maxCount, count, shaders) {
      var result = GLctx.getAttachedShaders(GL.programs[program]);
      var len = result.length;
      if (len > maxCount) {
        len = maxCount;
      }
      HEAP32[((count)>>2)] = len;
      for (var i = 0; i < len; ++i) {
        var id = GL.shaders.indexOf(result[i]);
        HEAP32[(((shaders)+(i*4))>>2)] = id;
      }
    }
  var _emscripten_glGetAttachedShaders = _glGetAttachedShaders;

  
  /** @suppress {duplicate } */
  function _glGetAttribLocation(program, name) {
      return GLctx.getAttribLocation(GL.programs[program], UTF8ToString(name));
    }
  var _emscripten_glGetAttribLocation = _glGetAttribLocation;

  function writeI53ToI64(ptr, num) {
      HEAPU32[ptr>>2] = num;
      HEAPU32[ptr+4>>2] = (num - HEAPU32[ptr>>2])/4294967296;
    }
  
  function emscriptenWebGLGet(name_, p, type) {
      // Guard against user passing a null pointer.
      // Note that GLES2 spec does not say anything about how passing a null pointer should be treated.
      // Testing on desktop core GL 3, the application crashes on glGetIntegerv to a null pointer, but
      // better to report an error instead of doing anything random.
      if (!p) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var ret = undefined;
      switch (name_) { // Handle a few trivial GLES values
        case 0x8DFA: // GL_SHADER_COMPILER
          ret = 1;
          break;
        case 0x8DF8: // GL_SHADER_BINARY_FORMATS
          if (type != 0 && type != 1) {
            GL.recordError(0x500); // GL_INVALID_ENUM
          }
          return; // Do not write anything to the out pointer, since no binary formats are supported.
        case 0x8DF9: // GL_NUM_SHADER_BINARY_FORMATS
          ret = 0;
          break;
        case 0x86A2: // GL_NUM_COMPRESSED_TEXTURE_FORMATS
          // WebGL doesn't have GL_NUM_COMPRESSED_TEXTURE_FORMATS (it's obsolete since GL_COMPRESSED_TEXTURE_FORMATS returns a JS array that can be queried for length),
          // so implement it ourselves to allow C++ GLES2 code get the length.
          var formats = GLctx.getParameter(0x86A3 /*GL_COMPRESSED_TEXTURE_FORMATS*/);
          ret = formats ? formats.length : 0;
          break;
  
      }
  
      if (ret === undefined) {
        var result = GLctx.getParameter(name_);
        switch (typeof result) {
          case "number":
            ret = result;
            break;
          case "boolean":
            ret = result ? 1 : 0;
            break;
          case "string":
            GL.recordError(0x500); // GL_INVALID_ENUM
            return;
          case "object":
            if (result === null) {
              // null is a valid result for some (e.g., which buffer is bound - perhaps nothing is bound), but otherwise
              // can mean an invalid name_, which we need to report as an error
              switch (name_) {
                case 0x8894: // ARRAY_BUFFER_BINDING
                case 0x8B8D: // CURRENT_PROGRAM
                case 0x8895: // ELEMENT_ARRAY_BUFFER_BINDING
                case 0x8CA6: // FRAMEBUFFER_BINDING or DRAW_FRAMEBUFFER_BINDING
                case 0x8CA7: // RENDERBUFFER_BINDING
                case 0x8069: // TEXTURE_BINDING_2D
                case 0x85B5: // WebGL 2 GL_VERTEX_ARRAY_BINDING, or WebGL 1 extension OES_vertex_array_object GL_VERTEX_ARRAY_BINDING_OES
                case 0x8514: { // TEXTURE_BINDING_CUBE_MAP
                  ret = 0;
                  break;
                }
                default: {
                  GL.recordError(0x500); // GL_INVALID_ENUM
                  return;
                }
              }
            } else if (result instanceof Float32Array ||
                       result instanceof Uint32Array ||
                       result instanceof Int32Array ||
                       result instanceof Array) {
              for (var i = 0; i < result.length; ++i) {
                switch (type) {
                  case 0: HEAP32[(((p)+(i*4))>>2)] = result[i]; break;
                  case 2: HEAPF32[(((p)+(i*4))>>2)] = result[i]; break;
                  case 4: HEAP8[(((p)+(i))>>0)] = result[i] ? 1 : 0; break;
                }
              }
              return;
            } else {
              try {
                ret = result.name | 0;
              } catch(e) {
                GL.recordError(0x500); // GL_INVALID_ENUM
                err('GL_INVALID_ENUM in glGet' + type + 'v: Unknown object returned from WebGL getParameter(' + name_ + ')! (error: ' + e + ')');
                return;
              }
            }
            break;
          default:
            GL.recordError(0x500); // GL_INVALID_ENUM
            err('GL_INVALID_ENUM in glGet' + type + 'v: Native code calling glGet' + type + 'v(' + name_ + ') and it returns ' + result + ' of type ' + typeof(result) + '!');
            return;
        }
      }
  
      switch (type) {
        case 1: writeI53ToI64(p, ret); break;
        case 0: HEAP32[((p)>>2)] = ret; break;
        case 2:   HEAPF32[((p)>>2)] = ret; break;
        case 4: HEAP8[((p)>>0)] = ret ? 1 : 0; break;
      }
    }
  
  /** @suppress {duplicate } */
  function _glGetBooleanv(name_, p) {
      emscriptenWebGLGet(name_, p, 4);
    }
  var _emscripten_glGetBooleanv = _glGetBooleanv;

  /** @suppress {duplicate } */
  function _glGetBufferParameteriv(target, value, data) {
      if (!data) {
        // GLES2 specification does not specify how to behave if data is a null pointer. Since calling this function does not make sense
        // if data == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((data)>>2)] = GLctx.getBufferParameter(target, value);
    }
  var _emscripten_glGetBufferParameteriv = _glGetBufferParameteriv;

  /** @suppress {duplicate } */
  function _glGetError() {
      var error = GLctx.getError() || GL.lastError;
      GL.lastError = 0/*GL_NO_ERROR*/;
      return error;
    }
  var _emscripten_glGetError = _glGetError;

  
  /** @suppress {duplicate } */
  function _glGetFloatv(name_, p) {
      emscriptenWebGLGet(name_, p, 2);
    }
  var _emscripten_glGetFloatv = _glGetFloatv;

  /** @suppress {duplicate } */
  function _glGetFramebufferAttachmentParameteriv(target, attachment, pname, params) {
      var result = GLctx.getFramebufferAttachmentParameter(target, attachment, pname);
      if (result instanceof WebGLRenderbuffer ||
          result instanceof WebGLTexture) {
        result = result.name | 0;
      }
      HEAP32[((params)>>2)] = result;
    }
  var _emscripten_glGetFramebufferAttachmentParameteriv = _glGetFramebufferAttachmentParameteriv;

  
  /** @suppress {duplicate } */
  function _glGetIntegerv(name_, p) {
      emscriptenWebGLGet(name_, p, 0);
    }
  var _emscripten_glGetIntegerv = _glGetIntegerv;

  /** @suppress {duplicate } */
  function _glGetProgramInfoLog(program, maxLength, length, infoLog) {
      var log = GLctx.getProgramInfoLog(GL.programs[program]);
      if (log === null) log = '(unknown error)';
      var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    }
  var _emscripten_glGetProgramInfoLog = _glGetProgramInfoLog;

  /** @suppress {duplicate } */
  function _glGetProgramiv(program, pname, p) {
      if (!p) {
        // GLES2 specification does not specify how to behave if p is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
  
      if (program >= GL.counter) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
  
      program = GL.programs[program];
  
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        var log = GLctx.getProgramInfoLog(program);
        if (log === null) log = '(unknown error)';
        HEAP32[((p)>>2)] = log.length + 1;
      } else if (pname == 0x8B87 /* GL_ACTIVE_UNIFORM_MAX_LENGTH */) {
        if (!program.maxUniformLength) {
          for (var i = 0; i < GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/); ++i) {
            program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxUniformLength;
      } else if (pname == 0x8B8A /* GL_ACTIVE_ATTRIBUTE_MAX_LENGTH */) {
        if (!program.maxAttributeLength) {
          for (var i = 0; i < GLctx.getProgramParameter(program, 0x8B89/*GL_ACTIVE_ATTRIBUTES*/); ++i) {
            program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxAttributeLength;
      } else if (pname == 0x8A35 /* GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH */) {
        if (!program.maxUniformBlockNameLength) {
          for (var i = 0; i < GLctx.getProgramParameter(program, 0x8A36/*GL_ACTIVE_UNIFORM_BLOCKS*/); ++i) {
            program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxUniformBlockNameLength;
      } else {
        HEAP32[((p)>>2)] = GLctx.getProgramParameter(program, pname);
      }
    }
  var _emscripten_glGetProgramiv = _glGetProgramiv;

  
  /** @suppress {duplicate } */
  function _glGetQueryObjecti64vEXT(id, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var query = GL.queries[id];
      var param;
      {
        param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
      }
      var ret;
      if (typeof param == 'boolean') {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      writeI53ToI64(params, ret);
    }
  var _emscripten_glGetQueryObjecti64vEXT = _glGetQueryObjecti64vEXT;

  /** @suppress {duplicate } */
  function _glGetQueryObjectivEXT(id, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var query = GL.queries[id];
      var param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
      var ret;
      if (typeof param == 'boolean') {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      HEAP32[((params)>>2)] = ret;
    }
  var _emscripten_glGetQueryObjectivEXT = _glGetQueryObjectivEXT;

  
  /** @suppress {duplicate } */
  var _glGetQueryObjectui64vEXT = _glGetQueryObjecti64vEXT;
  var _emscripten_glGetQueryObjectui64vEXT = _glGetQueryObjectui64vEXT;

  
  /** @suppress {duplicate } */
  var _glGetQueryObjectuivEXT = _glGetQueryObjectivEXT;
  var _emscripten_glGetQueryObjectuivEXT = _glGetQueryObjectuivEXT;

  /** @suppress {duplicate } */
  function _glGetQueryivEXT(target, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.disjointTimerQueryExt['getQueryEXT'](target, pname);
    }
  var _emscripten_glGetQueryivEXT = _glGetQueryivEXT;

  /** @suppress {duplicate } */
  function _glGetRenderbufferParameteriv(target, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if params == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.getRenderbufferParameter(target, pname);
    }
  var _emscripten_glGetRenderbufferParameteriv = _glGetRenderbufferParameteriv;

  
  /** @suppress {duplicate } */
  function _glGetShaderInfoLog(shader, maxLength, length, infoLog) {
      var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
      if (log === null) log = '(unknown error)';
      var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    }
  var _emscripten_glGetShaderInfoLog = _glGetShaderInfoLog;

  /** @suppress {duplicate } */
  function _glGetShaderPrecisionFormat(shaderType, precisionType, range, precision) {
      var result = GLctx.getShaderPrecisionFormat(shaderType, precisionType);
      HEAP32[((range)>>2)] = result.rangeMin;
      HEAP32[(((range)+(4))>>2)] = result.rangeMax;
      HEAP32[((precision)>>2)] = result.precision;
    }
  var _emscripten_glGetShaderPrecisionFormat = _glGetShaderPrecisionFormat;

  /** @suppress {duplicate } */
  function _glGetShaderSource(shader, bufSize, length, source) {
      var result = GLctx.getShaderSource(GL.shaders[shader]);
      if (!result) return; // If an error occurs, nothing will be written to length or source.
      var numBytesWrittenExclNull = (bufSize > 0 && source) ? stringToUTF8(result, source, bufSize) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    }
  var _emscripten_glGetShaderSource = _glGetShaderSource;

  /** @suppress {duplicate } */
  function _glGetShaderiv(shader, pname, p) {
      if (!p) {
        // GLES2 specification does not specify how to behave if p is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = '(unknown error)';
        // The GLES2 specification says that if the shader has an empty info log,
        // a value of 0 is returned. Otherwise the log has a null char appended.
        // (An empty string is falsey, so we can just check that instead of
        // looking at log.length.)
        var logLength = log ? log.length + 1 : 0;
        HEAP32[((p)>>2)] = logLength;
      } else if (pname == 0x8B88) { // GL_SHADER_SOURCE_LENGTH
        var source = GLctx.getShaderSource(GL.shaders[shader]);
        // source may be a null, or the empty string, both of which are falsey
        // values that we report a 0 length for.
        var sourceLength = source ? source.length + 1 : 0;
        HEAP32[((p)>>2)] = sourceLength;
      } else {
        HEAP32[((p)>>2)] = GLctx.getShaderParameter(GL.shaders[shader], pname);
      }
    }
  var _emscripten_glGetShaderiv = _glGetShaderiv;

  
  /** @suppress {duplicate } */
  function _glGetString(name_) {
      var ret = GL.stringCache[name_];
      if (!ret) {
        switch (name_) {
          case 0x1F03 /* GL_EXTENSIONS */:
            var exts = GLctx.getSupportedExtensions() || []; // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
            exts = exts.concat(exts.map(function(e) { return "GL_" + e; }));
            ret = stringToNewUTF8(exts.join(' '));
            break;
          case 0x1F00 /* GL_VENDOR */:
          case 0x1F01 /* GL_RENDERER */:
          case 0x9245 /* UNMASKED_VENDOR_WEBGL */:
          case 0x9246 /* UNMASKED_RENDERER_WEBGL */:
            var s = GLctx.getParameter(name_);
            if (!s) {
              GL.recordError(0x500/*GL_INVALID_ENUM*/);
            }
            ret = s && stringToNewUTF8(s);
            break;
  
          case 0x1F02 /* GL_VERSION */:
            var glVersion = GLctx.getParameter(0x1F02 /*GL_VERSION*/);
            // return GLES version string corresponding to the version of the WebGL context
            {
              glVersion = 'OpenGL ES 2.0 (' + glVersion + ')';
            }
            ret = stringToNewUTF8(glVersion);
            break;
          case 0x8B8C /* GL_SHADING_LANGUAGE_VERSION */:
            var glslVersion = GLctx.getParameter(0x8B8C /*GL_SHADING_LANGUAGE_VERSION*/);
            // extract the version number 'N.M' from the string 'WebGL GLSL ES N.M ...'
            var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
            var ver_num = glslVersion.match(ver_re);
            if (ver_num !== null) {
              if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + '0'; // ensure minor version has 2 digits
              glslVersion = 'OpenGL ES GLSL ES ' + ver_num[1] + ' (' + glslVersion + ')';
            }
            ret = stringToNewUTF8(glslVersion);
            break;
          default:
            GL.recordError(0x500/*GL_INVALID_ENUM*/);
            // fall through
        }
        GL.stringCache[name_] = ret;
      }
      return ret;
    }
  var _emscripten_glGetString = _glGetString;

  /** @suppress {duplicate } */
  function _glGetTexParameterfv(target, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAPF32[((params)>>2)] = GLctx.getTexParameter(target, pname);
    }
  var _emscripten_glGetTexParameterfv = _glGetTexParameterfv;

  /** @suppress {duplicate } */
  function _glGetTexParameteriv(target, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.getTexParameter(target, pname);
    }
  var _emscripten_glGetTexParameteriv = _glGetTexParameteriv;

  
  /** @noinline */
  function webglGetLeftBracePos(name) {
      return name.slice(-1) == ']' && name.lastIndexOf('[');
    }
  
  function webglPrepareUniformLocationsBeforeFirstUse(program) {
      var uniformLocsById = program.uniformLocsById, // Maps GLuint -> WebGLUniformLocation
        uniformSizeAndIdsByName = program.uniformSizeAndIdsByName, // Maps name -> [uniform array length, GLuint]
        i, j;
  
      // On the first time invocation of glGetUniformLocation on this shader program:
      // initialize cache data structures and discover which uniforms are arrays.
      if (!uniformLocsById) {
        // maps GLint integer locations to WebGLUniformLocations
        program.uniformLocsById = uniformLocsById = {};
        // maps integer locations back to uniform name strings, so that we can lazily fetch uniform array locations
        program.uniformArrayNamesById = {};
  
        for (i = 0; i < GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/); ++i) {
          var u = GLctx.getActiveUniform(program, i);
          var nm = u.name;
          var sz = u.size;
          var lb = webglGetLeftBracePos(nm);
          var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
  
          // Assign a new location.
          var id = program.uniformIdCounter;
          program.uniformIdCounter += sz;
          // Eagerly get the location of the uniformArray[0] base element.
          // The remaining indices >0 will be left for lazy evaluation to
          // improve performance. Those may never be needed to fetch, if the
          // application fills arrays always in full starting from the first
          // element of the array.
          uniformSizeAndIdsByName[arrayName] = [sz, id];
  
          // Store placeholder integers in place that highlight that these
          // >0 index locations are array indices pending population.
          for(j = 0; j < sz; ++j) {
            uniformLocsById[id] = j;
            program.uniformArrayNamesById[id++] = arrayName;
          }
        }
      }
    }
  
  
  
  /** @suppress {duplicate } */
  function _glGetUniformLocation(program, name) {
  
      name = UTF8ToString(name);
  
      if (program = GL.programs[program]) {
        webglPrepareUniformLocationsBeforeFirstUse(program);
        var uniformLocsById = program.uniformLocsById; // Maps GLuint -> WebGLUniformLocation
        var arrayIndex = 0;
        var uniformBaseName = name;
  
        // Invariant: when populating integer IDs for uniform locations, we must maintain the precondition that
        // arrays reside in contiguous addresses, i.e. for a 'vec4 colors[10];', colors[4] must be at location colors[0]+4.
        // However, user might call glGetUniformLocation(program, "colors") for an array, so we cannot discover based on the user
        // input arguments whether the uniform we are dealing with is an array. The only way to discover which uniforms are arrays
        // is to enumerate over all the active uniforms in the program.
        var leftBrace = webglGetLeftBracePos(name);
  
        // If user passed an array accessor "[index]", parse the array index off the accessor.
        if (leftBrace > 0) {
          arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0; // "index]", coerce parseInt(']') with >>>0 to treat "foo[]" as "foo[0]" and foo[-1] as unsigned out-of-bounds.
          uniformBaseName = name.slice(0, leftBrace);
        }
  
        // Have we cached the location of this uniform before?
        var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName]; // A pair [array length, GLint of the uniform location]
  
        // If an uniform with this name exists, and if its index is within the array limits (if it's even an array),
        // query the WebGLlocation, or return an existing cached location.
        if (sizeAndId && arrayIndex < sizeAndId[0]) {
          arrayIndex += sizeAndId[1]; // Add the base location of the uniform to the array index offset.
          if ((uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name))) {
            return arrayIndex;
          }
        }
      }
      else {
        // N.b. we are currently unable to distinguish between GL program IDs that never existed vs GL program IDs that have been deleted,
        // so report GL_INVALID_VALUE in both cases.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
      }
      return -1;
    }
  var _emscripten_glGetUniformLocation = _glGetUniformLocation;

  function webglGetUniformLocation(location) {
      var p = GLctx.currentProgram;
  
      if (p) {
        var webglLoc = p.uniformLocsById[location];
        // p.uniformLocsById[location] stores either an integer, or a WebGLUniformLocation.
  
        // If an integer, we have not yet bound the location, so do it now. The integer value specifies the array index
        // we should bind to.
        if (typeof webglLoc == 'number') {
          p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? '[' + webglLoc + ']' : ''));
        }
        // Else an already cached WebGLUniformLocation, return it.
        return webglLoc;
      } else {
        GL.recordError(0x502/*GL_INVALID_OPERATION*/);
      }
    }
  
  
  /** @suppress{checkTypes} */
  function emscriptenWebGLGetUniform(program, location, params, type) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if params == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      program = GL.programs[program];
      webglPrepareUniformLocationsBeforeFirstUse(program);
      var data = GLctx.getUniform(program, webglGetUniformLocation(location));
      if (typeof data == 'number' || typeof data == 'boolean') {
        switch (type) {
          case 0: HEAP32[((params)>>2)] = data; break;
          case 2: HEAPF32[((params)>>2)] = data; break;
        }
      } else {
        for (var i = 0; i < data.length; i++) {
          switch (type) {
            case 0: HEAP32[(((params)+(i*4))>>2)] = data[i]; break;
            case 2: HEAPF32[(((params)+(i*4))>>2)] = data[i]; break;
          }
        }
      }
    }
  
  /** @suppress {duplicate } */
  function _glGetUniformfv(program, location, params) {
      emscriptenWebGLGetUniform(program, location, params, 2);
    }
  var _emscripten_glGetUniformfv = _glGetUniformfv;

  
  /** @suppress {duplicate } */
  function _glGetUniformiv(program, location, params) {
      emscriptenWebGLGetUniform(program, location, params, 0);
    }
  var _emscripten_glGetUniformiv = _glGetUniformiv;

  /** @suppress {duplicate } */
  function _glGetVertexAttribPointerv(index, pname, pointer) {
      if (!pointer) {
        // GLES2 specification does not specify how to behave if pointer is a null pointer. Since calling this function does not make sense
        // if pointer == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((pointer)>>2)] = GLctx.getVertexAttribOffset(index, pname);
    }
  var _emscripten_glGetVertexAttribPointerv = _glGetVertexAttribPointerv;

  /** @suppress{checkTypes} */
  function emscriptenWebGLGetVertexAttrib(index, pname, params, type) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if params == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var data = GLctx.getVertexAttrib(index, pname);
      if (pname == 0x889F/*VERTEX_ATTRIB_ARRAY_BUFFER_BINDING*/) {
        HEAP32[((params)>>2)] = data && data["name"];
      } else if (typeof data == 'number' || typeof data == 'boolean') {
        switch (type) {
          case 0: HEAP32[((params)>>2)] = data; break;
          case 2: HEAPF32[((params)>>2)] = data; break;
          case 5: HEAP32[((params)>>2)] = Math.fround(data); break;
        }
      } else {
        for (var i = 0; i < data.length; i++) {
          switch (type) {
            case 0: HEAP32[(((params)+(i*4))>>2)] = data[i]; break;
            case 2: HEAPF32[(((params)+(i*4))>>2)] = data[i]; break;
            case 5: HEAP32[(((params)+(i*4))>>2)] = Math.fround(data[i]); break;
          }
        }
      }
    }
  
  /** @suppress {duplicate } */
  function _glGetVertexAttribfv(index, pname, params) {
      // N.B. This function may only be called if the vertex attribute was specified using the function glVertexAttrib*f(),
      // otherwise the results are undefined. (GLES3 spec 6.1.12)
      emscriptenWebGLGetVertexAttrib(index, pname, params, 2);
    }
  var _emscripten_glGetVertexAttribfv = _glGetVertexAttribfv;

  
  /** @suppress {duplicate } */
  function _glGetVertexAttribiv(index, pname, params) {
      // N.B. This function may only be called if the vertex attribute was specified using the function glVertexAttrib*f(),
      // otherwise the results are undefined. (GLES3 spec 6.1.12)
      emscriptenWebGLGetVertexAttrib(index, pname, params, 5);
    }
  var _emscripten_glGetVertexAttribiv = _glGetVertexAttribiv;

  /** @suppress {duplicate } */
  function _glHint(x0, x1) { GLctx['hint'](x0, x1) }
  var _emscripten_glHint = _glHint;

  /** @suppress {duplicate } */
  function _glIsBuffer(buffer) {
      var b = GL.buffers[buffer];
      if (!b) return 0;
      return GLctx.isBuffer(b);
    }
  var _emscripten_glIsBuffer = _glIsBuffer;

  /** @suppress {duplicate } */
  function _glIsEnabled(x0) { return GLctx['isEnabled'](x0) }
  var _emscripten_glIsEnabled = _glIsEnabled;

  /** @suppress {duplicate } */
  function _glIsFramebuffer(framebuffer) {
      var fb = GL.framebuffers[framebuffer];
      if (!fb) return 0;
      return GLctx.isFramebuffer(fb);
    }
  var _emscripten_glIsFramebuffer = _glIsFramebuffer;

  /** @suppress {duplicate } */
  function _glIsProgram(program) {
      program = GL.programs[program];
      if (!program) return 0;
      return GLctx.isProgram(program);
    }
  var _emscripten_glIsProgram = _glIsProgram;

  /** @suppress {duplicate } */
  function _glIsQueryEXT(id) {
      var query = GL.queries[id];
      if (!query) return 0;
      return GLctx.disjointTimerQueryExt['isQueryEXT'](query);
    }
  var _emscripten_glIsQueryEXT = _glIsQueryEXT;

  /** @suppress {duplicate } */
  function _glIsRenderbuffer(renderbuffer) {
      var rb = GL.renderbuffers[renderbuffer];
      if (!rb) return 0;
      return GLctx.isRenderbuffer(rb);
    }
  var _emscripten_glIsRenderbuffer = _glIsRenderbuffer;

  /** @suppress {duplicate } */
  function _glIsShader(shader) {
      var s = GL.shaders[shader];
      if (!s) return 0;
      return GLctx.isShader(s);
    }
  var _emscripten_glIsShader = _glIsShader;

  /** @suppress {duplicate } */
  function _glIsTexture(id) {
      var texture = GL.textures[id];
      if (!texture) return 0;
      return GLctx.isTexture(texture);
    }
  var _emscripten_glIsTexture = _glIsTexture;

  
  /** @suppress {duplicate } */
  function _glIsVertexArray(array) {
  
      var vao = GL.vaos[array];
      if (!vao) return 0;
      return GLctx['isVertexArray'](vao);
    }
  /** @suppress {duplicate } */
  var _glIsVertexArrayOES = _glIsVertexArray;
  var _emscripten_glIsVertexArrayOES = _glIsVertexArrayOES;

  /** @suppress {duplicate } */
  function _glLineWidth(x0) { GLctx['lineWidth'](x0) }
  var _emscripten_glLineWidth = _glLineWidth;

  /** @suppress {duplicate } */
  function _glLinkProgram(program) {
      program = GL.programs[program];
      GLctx.linkProgram(program);
      // Invalidate earlier computed uniform->ID mappings, those have now become stale
      program.uniformLocsById = 0; // Mark as null-like so that glGetUniformLocation() knows to populate this again.
      program.uniformSizeAndIdsByName = {};
  
    }
  var _emscripten_glLinkProgram = _glLinkProgram;

  /** @suppress {duplicate } */
  function _glPixelStorei(pname, param) {
      if (pname == 0xCF5 /* GL_UNPACK_ALIGNMENT */) {
        GL.unpackAlignment = param;
      }
      GLctx.pixelStorei(pname, param);
    }
  var _emscripten_glPixelStorei = _glPixelStorei;

  /** @suppress {duplicate } */
  function _glPolygonOffset(x0, x1) { GLctx['polygonOffset'](x0, x1) }
  var _emscripten_glPolygonOffset = _glPolygonOffset;

  /** @suppress {duplicate } */
  function _glQueryCounterEXT(id, target) {
      GLctx.disjointTimerQueryExt['queryCounterEXT'](GL.queries[id], target);
    }
  var _emscripten_glQueryCounterEXT = _glQueryCounterEXT;

  function computeUnpackAlignedImageSize(width, height, sizePerPixel, alignment) {
      function roundedToNextMultipleOf(x, y) {
        return (x + y - 1) & -y;
      }
      var plainRowSize = width * sizePerPixel;
      var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
      return height * alignedRowSize;
    }
  
  function colorChannelsInGlTextureFormat(format) {
      // Micro-optimizations for size: map format to size by subtracting smallest enum value (0x1902) from all values first.
      // Also omit the most common size value (1) from the list, which is assumed by formats not on the list.
      var colorChannels = {
        // 0x1902 /* GL_DEPTH_COMPONENT */ - 0x1902: 1,
        // 0x1906 /* GL_ALPHA */ - 0x1902: 1,
        5: 3,
        6: 4,
        // 0x1909 /* GL_LUMINANCE */ - 0x1902: 1,
        8: 2,
        29502: 3,
        29504: 4,
      };
      return colorChannels[format - 0x1902]||1;
    }
  
  function heapObjectForWebGLType(type) {
      // Micro-optimization for size: Subtract lowest GL enum number (0x1400/* GL_BYTE */) from type to compare
      // smaller values for the heap, for shorter generated code size.
      // Also the type HEAPU16 is not tested for explicitly, but any unrecognized type will return out HEAPU16.
      // (since most types are HEAPU16)
      type -= 0x1400;
  
      if (type == 1) return HEAPU8;
  
      if (type == 4) return HEAP32;
  
      if (type == 6) return HEAPF32;
  
      if (type == 5
        || type == 28922
        )
        return HEAPU32;
  
      return HEAPU16;
    }
  
  function heapAccessShiftForWebGLHeap(heap) {
      return 31 - Math.clz32(heap.BYTES_PER_ELEMENT);
    }
  
  function emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) {
      var heap = heapObjectForWebGLType(type);
      var shift = heapAccessShiftForWebGLHeap(heap);
      var byteSize = 1<<shift;
      var sizePerPixel = colorChannelsInGlTextureFormat(format) * byteSize;
      var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
      return heap.subarray(pixels >> shift, pixels + bytes >> shift);
    }
  
  /** @suppress {duplicate } */
  function _glReadPixels(x, y, width, height, format, type, pixels) {
      var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
      if (!pixelData) {
        GL.recordError(0x500/*GL_INVALID_ENUM*/);
        return;
      }
      GLctx.readPixels(x, y, width, height, format, type, pixelData);
    }
  var _emscripten_glReadPixels = _glReadPixels;

  /** @suppress {duplicate } */
  function _glReleaseShaderCompiler() {
      // NOP (as allowed by GLES 2.0 spec)
    }
  var _emscripten_glReleaseShaderCompiler = _glReleaseShaderCompiler;

  /** @suppress {duplicate } */
  function _glRenderbufferStorage(x0, x1, x2, x3) { GLctx['renderbufferStorage'](x0, x1, x2, x3) }
  var _emscripten_glRenderbufferStorage = _glRenderbufferStorage;

  /** @suppress {duplicate } */
  function _glSampleCoverage(value, invert) {
      GLctx.sampleCoverage(value, !!invert);
    }
  var _emscripten_glSampleCoverage = _glSampleCoverage;

  /** @suppress {duplicate } */
  function _glScissor(x0, x1, x2, x3) { GLctx['scissor'](x0, x1, x2, x3) }
  var _emscripten_glScissor = _glScissor;

  /** @suppress {duplicate } */
  function _glShaderBinary(count, shaders, binaryformat, binary, length) {
      GL.recordError(0x500/*GL_INVALID_ENUM*/);
    }
  var _emscripten_glShaderBinary = _glShaderBinary;

  /** @suppress {duplicate } */
  function _glShaderSource(shader, count, string, length) {
      var source = GL.getSource(shader, count, string, length);
  
      GLctx.shaderSource(GL.shaders[shader], source);
    }
  var _emscripten_glShaderSource = _glShaderSource;

  /** @suppress {duplicate } */
  function _glStencilFunc(x0, x1, x2) { GLctx['stencilFunc'](x0, x1, x2) }
  var _emscripten_glStencilFunc = _glStencilFunc;

  /** @suppress {duplicate } */
  function _glStencilFuncSeparate(x0, x1, x2, x3) { GLctx['stencilFuncSeparate'](x0, x1, x2, x3) }
  var _emscripten_glStencilFuncSeparate = _glStencilFuncSeparate;

  /** @suppress {duplicate } */
  function _glStencilMask(x0) { GLctx['stencilMask'](x0) }
  var _emscripten_glStencilMask = _glStencilMask;

  /** @suppress {duplicate } */
  function _glStencilMaskSeparate(x0, x1) { GLctx['stencilMaskSeparate'](x0, x1) }
  var _emscripten_glStencilMaskSeparate = _glStencilMaskSeparate;

  /** @suppress {duplicate } */
  function _glStencilOp(x0, x1, x2) { GLctx['stencilOp'](x0, x1, x2) }
  var _emscripten_glStencilOp = _glStencilOp;

  /** @suppress {duplicate } */
  function _glStencilOpSeparate(x0, x1, x2, x3) { GLctx['stencilOpSeparate'](x0, x1, x2, x3) }
  var _emscripten_glStencilOpSeparate = _glStencilOpSeparate;

  
  /** @suppress {duplicate } */
  function _glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
      GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null);
    }
  var _emscripten_glTexImage2D = _glTexImage2D;

  /** @suppress {duplicate } */
  function _glTexParameterf(x0, x1, x2) { GLctx['texParameterf'](x0, x1, x2) }
  var _emscripten_glTexParameterf = _glTexParameterf;

  /** @suppress {duplicate } */
  function _glTexParameterfv(target, pname, params) {
      var param = HEAPF32[((params)>>2)];
      GLctx.texParameterf(target, pname, param);
    }
  var _emscripten_glTexParameterfv = _glTexParameterfv;

  /** @suppress {duplicate } */
  function _glTexParameteri(x0, x1, x2) { GLctx['texParameteri'](x0, x1, x2) }
  var _emscripten_glTexParameteri = _glTexParameteri;

  /** @suppress {duplicate } */
  function _glTexParameteriv(target, pname, params) {
      var param = HEAP32[((params)>>2)];
      GLctx.texParameteri(target, pname, param);
    }
  var _emscripten_glTexParameteriv = _glTexParameteriv;

  
  /** @suppress {duplicate } */
  function _glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
      var pixelData = null;
      if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
      GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData);
    }
  var _emscripten_glTexSubImage2D = _glTexSubImage2D;

  
  /** @suppress {duplicate } */
  function _glUniform1f(location, v0) {
      GLctx.uniform1f(webglGetUniformLocation(location), v0);
    }
  var _emscripten_glUniform1f = _glUniform1f;

  
  var miniTempWebGLFloatBuffers = [];
  
  /** @suppress {duplicate } */
  function _glUniform1fv(location, count, value) {
  
      if (count <= 288) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[count-1];
        for (var i = 0; i < count; ++i) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2, (value+count*4)>>2);
      }
      GLctx.uniform1fv(webglGetUniformLocation(location), view);
    }
  var _emscripten_glUniform1fv = _glUniform1fv;

  
  /** @suppress {duplicate } */
  function _glUniform1i(location, v0) {
      GLctx.uniform1i(webglGetUniformLocation(location), v0);
    }
  var _emscripten_glUniform1i = _glUniform1i;

  
  var miniTempWebGLIntBuffers = [];
  
  /** @suppress {duplicate } */
  function _glUniform1iv(location, count, value) {
  
      if (count <= 288) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLIntBuffers[count-1];
        for (var i = 0; i < count; ++i) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((value)>>2, (value+count*4)>>2);
      }
      GLctx.uniform1iv(webglGetUniformLocation(location), view);
    }
  var _emscripten_glUniform1iv = _glUniform1iv;

  
  /** @suppress {duplicate } */
  function _glUniform2f(location, v0, v1) {
      GLctx.uniform2f(webglGetUniformLocation(location), v0, v1);
    }
  var _emscripten_glUniform2f = _glUniform2f;

  
  
  /** @suppress {duplicate } */
  function _glUniform2fv(location, count, value) {
  
      if (count <= 144) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[2*count-1];
        for (var i = 0; i < 2*count; i += 2) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2, (value+count*8)>>2);
      }
      GLctx.uniform2fv(webglGetUniformLocation(location), view);
    }
  var _emscripten_glUniform2fv = _glUniform2fv;

  
  /** @suppress {duplicate } */
  function _glUniform2i(location, v0, v1) {
      GLctx.uniform2i(webglGetUniformLocation(location), v0, v1);
    }
  var _emscripten_glUniform2i = _glUniform2i;

  
  
  /** @suppress {duplicate } */
  function _glUniform2iv(location, count, value) {
  
      if (count <= 144) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLIntBuffers[2*count-1];
        for (var i = 0; i < 2*count; i += 2) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((value)>>2, (value+count*8)>>2);
      }
      GLctx.uniform2iv(webglGetUniformLocation(location), view);
    }
  var _emscripten_glUniform2iv = _glUniform2iv;

  
  /** @suppress {duplicate } */
  function _glUniform3f(location, v0, v1, v2) {
      GLctx.uniform3f(webglGetUniformLocation(location), v0, v1, v2);
    }
  var _emscripten_glUniform3f = _glUniform3f;

  
  
  /** @suppress {duplicate } */
  function _glUniform3fv(location, count, value) {
  
      if (count <= 96) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[3*count-1];
        for (var i = 0; i < 3*count; i += 3) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2, (value+count*12)>>2);
      }
      GLctx.uniform3fv(webglGetUniformLocation(location), view);
    }
  var _emscripten_glUniform3fv = _glUniform3fv;

  
  /** @suppress {duplicate } */
  function _glUniform3i(location, v0, v1, v2) {
      GLctx.uniform3i(webglGetUniformLocation(location), v0, v1, v2);
    }
  var _emscripten_glUniform3i = _glUniform3i;

  
  
  /** @suppress {duplicate } */
  function _glUniform3iv(location, count, value) {
  
      if (count <= 96) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLIntBuffers[3*count-1];
        for (var i = 0; i < 3*count; i += 3) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAP32[(((value)+(4*i+8))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((value)>>2, (value+count*12)>>2);
      }
      GLctx.uniform3iv(webglGetUniformLocation(location), view);
    }
  var _emscripten_glUniform3iv = _glUniform3iv;

  
  /** @suppress {duplicate } */
  function _glUniform4f(location, v0, v1, v2, v3) {
      GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3);
    }
  var _emscripten_glUniform4f = _glUniform4f;

  
  
  /** @suppress {duplicate } */
  function _glUniform4fv(location, count, value) {
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[4*count-1];
        // hoist the heap out of the loop for size and for pthreads+growth.
        var heap = HEAPF32;
        value >>= 2;
        for (var i = 0; i < 4 * count; i += 4) {
          var dst = value + i;
          view[i] = heap[dst];
          view[i + 1] = heap[dst + 1];
          view[i + 2] = heap[dst + 2];
          view[i + 3] = heap[dst + 3];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2, (value+count*16)>>2);
      }
      GLctx.uniform4fv(webglGetUniformLocation(location), view);
    }
  var _emscripten_glUniform4fv = _glUniform4fv;

  
  /** @suppress {duplicate } */
  function _glUniform4i(location, v0, v1, v2, v3) {
      GLctx.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3);
    }
  var _emscripten_glUniform4i = _glUniform4i;

  
  
  /** @suppress {duplicate } */
  function _glUniform4iv(location, count, value) {
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLIntBuffers[4*count-1];
        for (var i = 0; i < 4*count; i += 4) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAP32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAP32[(((value)+(4*i+12))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((value)>>2, (value+count*16)>>2);
      }
      GLctx.uniform4iv(webglGetUniformLocation(location), view);
    }
  var _emscripten_glUniform4iv = _glUniform4iv;

  
  
  /** @suppress {duplicate } */
  function _glUniformMatrix2fv(location, count, transpose, value) {
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[4*count-1];
        for (var i = 0; i < 4*count; i += 4) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAPF32[(((value)+(4*i+12))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2, (value+count*16)>>2);
      }
      GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, view);
    }
  var _emscripten_glUniformMatrix2fv = _glUniformMatrix2fv;

  
  
  /** @suppress {duplicate } */
  function _glUniformMatrix3fv(location, count, transpose, value) {
  
      if (count <= 32) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[9*count-1];
        for (var i = 0; i < 9*count; i += 9) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAPF32[(((value)+(4*i+12))>>2)];
          view[i+4] = HEAPF32[(((value)+(4*i+16))>>2)];
          view[i+5] = HEAPF32[(((value)+(4*i+20))>>2)];
          view[i+6] = HEAPF32[(((value)+(4*i+24))>>2)];
          view[i+7] = HEAPF32[(((value)+(4*i+28))>>2)];
          view[i+8] = HEAPF32[(((value)+(4*i+32))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2, (value+count*36)>>2);
      }
      GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, view);
    }
  var _emscripten_glUniformMatrix3fv = _glUniformMatrix3fv;

  
  
  /** @suppress {duplicate } */
  function _glUniformMatrix4fv(location, count, transpose, value) {
  
      if (count <= 18) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[16*count-1];
        // hoist the heap out of the loop for size and for pthreads+growth.
        var heap = HEAPF32;
        value >>= 2;
        for (var i = 0; i < 16 * count; i += 16) {
          var dst = value + i;
          view[i] = heap[dst];
          view[i + 1] = heap[dst + 1];
          view[i + 2] = heap[dst + 2];
          view[i + 3] = heap[dst + 3];
          view[i + 4] = heap[dst + 4];
          view[i + 5] = heap[dst + 5];
          view[i + 6] = heap[dst + 6];
          view[i + 7] = heap[dst + 7];
          view[i + 8] = heap[dst + 8];
          view[i + 9] = heap[dst + 9];
          view[i + 10] = heap[dst + 10];
          view[i + 11] = heap[dst + 11];
          view[i + 12] = heap[dst + 12];
          view[i + 13] = heap[dst + 13];
          view[i + 14] = heap[dst + 14];
          view[i + 15] = heap[dst + 15];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2, (value+count*64)>>2);
      }
      GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view);
    }
  var _emscripten_glUniformMatrix4fv = _glUniformMatrix4fv;

  /** @suppress {duplicate } */
  function _glUseProgram(program) {
      program = GL.programs[program];
      GLctx.useProgram(program);
      // Record the currently active program so that we can access the uniform
      // mapping table of that program.
      GLctx.currentProgram = program;
    }
  var _emscripten_glUseProgram = _glUseProgram;

  /** @suppress {duplicate } */
  function _glValidateProgram(program) {
      GLctx.validateProgram(GL.programs[program]);
    }
  var _emscripten_glValidateProgram = _glValidateProgram;

  /** @suppress {duplicate } */
  function _glVertexAttrib1f(x0, x1) { GLctx['vertexAttrib1f'](x0, x1) }
  var _emscripten_glVertexAttrib1f = _glVertexAttrib1f;

  /** @suppress {duplicate } */
  function _glVertexAttrib1fv(index, v) {
  
      GLctx.vertexAttrib1f(index, HEAPF32[v>>2]);
    }
  var _emscripten_glVertexAttrib1fv = _glVertexAttrib1fv;

  /** @suppress {duplicate } */
  function _glVertexAttrib2f(x0, x1, x2) { GLctx['vertexAttrib2f'](x0, x1, x2) }
  var _emscripten_glVertexAttrib2f = _glVertexAttrib2f;

  /** @suppress {duplicate } */
  function _glVertexAttrib2fv(index, v) {
  
      GLctx.vertexAttrib2f(index, HEAPF32[v>>2], HEAPF32[v+4>>2]);
    }
  var _emscripten_glVertexAttrib2fv = _glVertexAttrib2fv;

  /** @suppress {duplicate } */
  function _glVertexAttrib3f(x0, x1, x2, x3) { GLctx['vertexAttrib3f'](x0, x1, x2, x3) }
  var _emscripten_glVertexAttrib3f = _glVertexAttrib3f;

  /** @suppress {duplicate } */
  function _glVertexAttrib3fv(index, v) {
  
      GLctx.vertexAttrib3f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2]);
    }
  var _emscripten_glVertexAttrib3fv = _glVertexAttrib3fv;

  /** @suppress {duplicate } */
  function _glVertexAttrib4f(x0, x1, x2, x3, x4) { GLctx['vertexAttrib4f'](x0, x1, x2, x3, x4) }
  var _emscripten_glVertexAttrib4f = _glVertexAttrib4f;

  /** @suppress {duplicate } */
  function _glVertexAttrib4fv(index, v) {
  
      GLctx.vertexAttrib4f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2], HEAPF32[v+12>>2]);
    }
  var _emscripten_glVertexAttrib4fv = _glVertexAttrib4fv;

  
  /** @suppress {duplicate } */
  function _glVertexAttribDivisor(index, divisor) {
      GLctx['vertexAttribDivisor'](index, divisor);
    }
  /** @suppress {duplicate } */
  var _glVertexAttribDivisorANGLE = _glVertexAttribDivisor;
  var _emscripten_glVertexAttribDivisorANGLE = _glVertexAttribDivisorANGLE;

  /** @suppress {duplicate } */
  function _glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
      GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
    }
  var _emscripten_glVertexAttribPointer = _glVertexAttribPointer;

  /** @suppress {duplicate } */
  function _glViewport(x0, x1, x2, x3) { GLctx['viewport'](x0, x1, x2, x3) }
  var _emscripten_glViewport = _glViewport;

  function _emscripten_has_asyncify() {
      return 0;
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  
  
  
  
  
  
  
  function doRequestFullscreen(target, strategy) {
      if (!JSEvents.fullscreenEnabled()) return -1;
      target = findEventTarget(target);
      if (!target) return -4;
  
      if (!target.requestFullscreen
        && !target.webkitRequestFullscreen
        ) {
        return -3;
      }
  
      var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
  
      // Queue this function call if we're not currently in an event handler and the user saw it appropriate to do so.
      if (!canPerformRequests) {
        if (strategy.deferUntilInEventHandler) {
          JSEvents.deferCall(JSEvents_requestFullscreen, 1 /* priority over pointer lock */, [target, strategy]);
          return 1;
        }
        return -2;
      }
  
      return JSEvents_requestFullscreen(target, strategy);
    }
  
  
  function _emscripten_request_fullscreen_strategy(target, deferUntilInEventHandler, fullscreenStrategy) {
      var strategy = {
        scaleMode: HEAP32[((fullscreenStrategy)>>2)],
        canvasResolutionScaleMode: HEAP32[(((fullscreenStrategy)+(4))>>2)],
        filteringMode: HEAP32[(((fullscreenStrategy)+(8))>>2)],
        deferUntilInEventHandler: deferUntilInEventHandler,
        canvasResizedCallback: HEAP32[(((fullscreenStrategy)+(12))>>2)],
        canvasResizedCallbackUserData: HEAP32[(((fullscreenStrategy)+(16))>>2)]
      };
  
      return doRequestFullscreen(target, strategy);
    }

  
  
  function _emscripten_request_pointerlock(target, deferUntilInEventHandler) {
      target = findEventTarget(target);
      if (!target) return -4;
      if (!target.requestPointerLock
        ) {
        return -1;
      }
  
      var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
  
      // Queue this function call if we're not currently in an event handler and the user saw it appropriate to do so.
      if (!canPerformRequests) {
        if (deferUntilInEventHandler) {
          JSEvents.deferCall(requestPointerLock, 2 /* priority below fullscreen */, [target]);
          return 1;
        }
        return -2;
      }
  
      return requestPointerLock(target);
    }

  
  function emscripten_realloc_buffer(size) {
      var b = wasmMemory.buffer;
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - b.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateMemoryViews();
        return 1 /*success*/;
      } catch(e) {
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      // With multithreaded builds, races can happen (another thread might increase the size
      // in between), so return a failure, and let the caller retry.
  
      // Memory resize rules:
      // 1.  Always increase heap size to at least the requested size, rounded up
      //     to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
      //     geometrically: increase the heap size according to
      //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
      //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
      //     linearly: increase the heap size by at least
      //     MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
      //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4.  If we were unable to allocate as much memory, it may be due to
      //     over-eager decision to excessively reserve due to (3) above.
      //     Hence if an allocation fails, cut down on the amount of excess
      //     growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        return false;
      }
  
      let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
  
      // Loop through potential heap size increases. If we attempt a too eager
      // reservation that fails, cut down on the attempted size and reserve a
      // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      return false;
    }

  function _emscripten_sample_gamepad_data() {
      return (JSEvents.lastGamepadState = (navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null)))
        ? 0 : -1;
    }

  
  
  
  function registerBeforeUnloadEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString) {
      var beforeUnloadEventHandlerFunc = function(e = event) {
        // Note: This is always called on the main browser thread, since it needs synchronously return a value!
        var confirmationMessage = getWasmTableEntry(callbackfunc)(eventTypeId, 0, userData);
        
        if (confirmationMessage) {
          confirmationMessage = UTF8ToString(confirmationMessage);
        }
        if (confirmationMessage) {
          e.preventDefault();
          e.returnValue = confirmationMessage;
          return confirmationMessage;
        }
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: beforeUnloadEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_beforeunload_callback_on_thread(userData, callbackfunc, targetThread) {
      if (typeof onbeforeunload == 'undefined') return -1;
      // beforeunload callback can only be registered on the main browser thread, because the page will go away immediately after returning from the handler,
      // and there is no time to start proxying it anywhere.
      if (targetThread !== 1) return -5;
      registerBeforeUnloadEventCallback(2, userData, true, callbackfunc, 28, "beforeunload");
      return 0;
    }

  
  
  
  function registerFocusEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.focusEvent) JSEvents.focusEvent = _malloc( 256 );
  
      var focusEventHandlerFunc = function(e = event) {
        var nodeName = JSEvents.getNodeNameForTarget(e.target);
        var id = e.target.id ? e.target.id : '';
  
        var focusEvent = JSEvents.focusEvent;
        stringToUTF8(nodeName, focusEvent + 0, 128);
        stringToUTF8(id, focusEvent + 128, 128);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, focusEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: focusEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_blur_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerFocusEventCallback(target, userData, useCapture, callbackfunc, 12, "blur", targetThread);
      return 0;
    }


  
  function _emscripten_set_element_css_size(target, width, height) {
      target = findEventTarget(target);
      if (!target) return -4;
  
      target.style.width = width + "px";
      target.style.height = height + "px";
  
      return 0;
    }

  function _emscripten_set_focus_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerFocusEventCallback(target, userData, useCapture, callbackfunc, 13, "focus", targetThread);
      return 0;
    }

  
  
  
  function fillFullscreenChangeEventData(eventStruct) {
      var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      var isFullscreen = !!fullscreenElement;
      // Assigning a boolean to HEAP32 with expected type coercion.
      /** @suppress{checkTypes} */
      HEAP32[((eventStruct)>>2)] = isFullscreen;
      HEAP32[(((eventStruct)+(4))>>2)] = JSEvents.fullscreenEnabled();
      // If transitioning to fullscreen, report info about the element that is now fullscreen.
      // If transitioning to windowed mode, report info about the element that just was fullscreen.
      var reportedElement = isFullscreen ? fullscreenElement : JSEvents.previousFullscreenElement;
      var nodeName = JSEvents.getNodeNameForTarget(reportedElement);
      var id = (reportedElement && reportedElement.id) ? reportedElement.id : '';
      stringToUTF8(nodeName, eventStruct + 8, 128);
      stringToUTF8(id, eventStruct + 136, 128);
      HEAP32[(((eventStruct)+(264))>>2)] = reportedElement ? reportedElement.clientWidth : 0;
      HEAP32[(((eventStruct)+(268))>>2)] = reportedElement ? reportedElement.clientHeight : 0;
      HEAP32[(((eventStruct)+(272))>>2)] = screen.width;
      HEAP32[(((eventStruct)+(276))>>2)] = screen.height;
      if (isFullscreen) {
        JSEvents.previousFullscreenElement = fullscreenElement;
      }
    }
  
  
  function registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.fullscreenChangeEvent) JSEvents.fullscreenChangeEvent = _malloc( 280 );
  
      var fullscreenChangeEventhandlerFunc = function(e = event) {
        var fullscreenChangeEvent = JSEvents.fullscreenChangeEvent;
  
        fillFullscreenChangeEventData(fullscreenChangeEvent);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, fullscreenChangeEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: fullscreenChangeEventhandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  
  
  function _emscripten_set_fullscreenchange_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      if (!JSEvents.fullscreenEnabled()) return -1;
      target = findEventTarget(target);
      if (!target) return -4;
      registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "fullscreenchange", targetThread);
  
      // Unprefixed Fullscreen API shipped in Chromium 71 (https://bugs.chromium.org/p/chromium/issues/detail?id=383813)
      // As of Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitfullscreenchange. TODO: revisit this check once Safari ships unprefixed version.
      registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "webkitfullscreenchange", targetThread);
  
      return 0;
    }

  
  
  
  function registerGamepadEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.gamepadEvent) JSEvents.gamepadEvent = _malloc( 1432 );
  
      var gamepadEventHandlerFunc = function(e = event) {
        var gamepadEvent = JSEvents.gamepadEvent;
        fillGamepadEventData(gamepadEvent, e["gamepad"]);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, gamepadEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        allowsDeferredCalls: true,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: gamepadEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_gamepadconnected_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
      if (!navigator.getGamepads && !navigator.webkitGetGamepads) return -1;
      registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 26, "gamepadconnected", targetThread);
      return 0;
    }

  function _emscripten_set_gamepaddisconnected_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
      if (!navigator.getGamepads && !navigator.webkitGetGamepads) return -1;
      registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 27, "gamepaddisconnected", targetThread);
      return 0;
    }

  
  
  
  function registerKeyEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.keyEvent) JSEvents.keyEvent = _malloc( 176 );
  
      var keyEventHandlerFunc = function(e) {
  
        var keyEventData = JSEvents.keyEvent;
        HEAPF64[((keyEventData)>>3)] = e.timeStamp;
  
        var idx = keyEventData >> 2;
  
        HEAP32[idx + 2] = e.location;
        HEAP32[idx + 3] = e.ctrlKey;
        HEAP32[idx + 4] = e.shiftKey;
        HEAP32[idx + 5] = e.altKey;
        HEAP32[idx + 6] = e.metaKey;
        HEAP32[idx + 7] = e.repeat;
        HEAP32[idx + 8] = e.charCode;
        HEAP32[idx + 9] = e.keyCode;
        HEAP32[idx + 10] = e.which;
        stringToUTF8(e.key || '', keyEventData + 44, 32);
        stringToUTF8(e.code || '', keyEventData + 76, 32);
        stringToUTF8(e.char || '', keyEventData + 108, 32);
        stringToUTF8(e.locale || '', keyEventData + 140, 32);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, keyEventData, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        allowsDeferredCalls: true,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: keyEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_keydown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerKeyEventCallback(target, userData, useCapture, callbackfunc, 2, "keydown", targetThread);
      return 0;
    }

  function _emscripten_set_keypress_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerKeyEventCallback(target, userData, useCapture, callbackfunc, 1, "keypress", targetThread);
      return 0;
    }

  function _emscripten_set_keyup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerKeyEventCallback(target, userData, useCapture, callbackfunc, 3, "keyup", targetThread);
      return 0;
    }

  
  
  function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop) {
      var browserIterationFunc = getWasmTableEntry(func);
      setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop);
    }

  
  
  
  function fillMouseEventData(eventStruct, e, target) {
      HEAPF64[((eventStruct)>>3)] = e.timeStamp;
      var idx = eventStruct >> 2;
      HEAP32[idx + 2] = e.screenX;
      HEAP32[idx + 3] = e.screenY;
      HEAP32[idx + 4] = e.clientX;
      HEAP32[idx + 5] = e.clientY;
      HEAP32[idx + 6] = e.ctrlKey;
      HEAP32[idx + 7] = e.shiftKey;
      HEAP32[idx + 8] = e.altKey;
      HEAP32[idx + 9] = e.metaKey;
      HEAP16[idx*2 + 20] = e.button;
      HEAP16[idx*2 + 21] = e.buttons;
  
      HEAP32[idx + 11] = e["movementX"]
        ;
  
      HEAP32[idx + 12] = e["movementY"]
        ;
  
      var rect = getBoundingClientRect(target);
      HEAP32[idx + 13] = e.clientX - rect.left;
      HEAP32[idx + 14] = e.clientY - rect.top;
  
    }
  
  
  function registerMouseEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.mouseEvent) JSEvents.mouseEvent = _malloc( 72 );
      target = findEventTarget(target);
  
      var mouseEventHandlerFunc = function(e = event) {
        // TODO: Make this access thread safe, or this could update live while app is reading it.
        fillMouseEventData(JSEvents.mouseEvent, e, target);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, JSEvents.mouseEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: target,
        allowsDeferredCalls: eventTypeString != 'mousemove' && eventTypeString != 'mouseenter' && eventTypeString != 'mouseleave', // Mouse move events do not allow fullscreen/pointer lock requests to be handled in them!
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: mouseEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_mousedown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 5, "mousedown", targetThread);
      return 0;
    }

  function _emscripten_set_mouseenter_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 33, "mouseenter", targetThread);
      return 0;
    }

  function _emscripten_set_mouseleave_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 34, "mouseleave", targetThread);
      return 0;
    }

  function _emscripten_set_mousemove_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 8, "mousemove", targetThread);
      return 0;
    }

  function _emscripten_set_mouseup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 6, "mouseup", targetThread);
      return 0;
    }

  
  
  
  function fillPointerlockChangeEventData(eventStruct) {
      var pointerLockElement = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
      var isPointerlocked = !!pointerLockElement;
      // Assigning a boolean to HEAP32 with expected type coercion.
      /** @suppress{checkTypes} */
      HEAP32[((eventStruct)>>2)] = isPointerlocked;
      var nodeName = JSEvents.getNodeNameForTarget(pointerLockElement);
      var id = (pointerLockElement && pointerLockElement.id) ? pointerLockElement.id : '';
      stringToUTF8(nodeName, eventStruct + 4, 128);
      stringToUTF8(id, eventStruct + 132, 128);
    }
  
  
  function registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.pointerlockChangeEvent) JSEvents.pointerlockChangeEvent = _malloc( 260 );
  
      var pointerlockChangeEventHandlerFunc = function(e = event) {
        var pointerlockChangeEvent = JSEvents.pointerlockChangeEvent;
        fillPointerlockChangeEventData(pointerlockChangeEvent);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, pointerlockChangeEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: pointerlockChangeEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  
  
  /** @suppress {missingProperties} */
  function _emscripten_set_pointerlockchange_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      // TODO: Currently not supported in pthreads or in --proxy-to-worker mode. (In pthreads mode, document object is not defined)
      if (!document || !document.body || (!document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock)) {
        return -1;
      }
  
      target = findEventTarget(target);
      if (!target) return -4;
      registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "pointerlockchange", targetThread);
      registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mozpointerlockchange", targetThread);
      registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "webkitpointerlockchange", targetThread);
      registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mspointerlockchange", targetThread);
      return 0;
    }

  
  
  function registerUiEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.uiEvent) JSEvents.uiEvent = _malloc( 36 );
  
      target = findEventTarget(target);
  
      var uiEventHandlerFunc = function(e = event) {
        if (e.target != target) {
          // Never take ui events such as scroll via a 'bubbled' route, but always from the direct element that
          // was targeted. Otherwise e.g. if app logs a message in response to a page scroll, the Emscripten log
          // message box could cause to scroll, generating a new (bubbled) scroll message, causing a new log print,
          // causing a new scroll, etc..
          return;
        }
        var b = document.body; // Take document.body to a variable, Closure compiler does not outline access to it on its own.
        if (!b) {
          // During a page unload 'body' can be null, with "Cannot read property 'clientWidth' of null" being thrown
          return;
        }
        var uiEvent = JSEvents.uiEvent;
        HEAP32[((uiEvent)>>2)] = e.detail;
        HEAP32[(((uiEvent)+(4))>>2)] = b.clientWidth;
        HEAP32[(((uiEvent)+(8))>>2)] = b.clientHeight;
        HEAP32[(((uiEvent)+(12))>>2)] = innerWidth;
        HEAP32[(((uiEvent)+(16))>>2)] = innerHeight;
        HEAP32[(((uiEvent)+(20))>>2)] = outerWidth;
        HEAP32[(((uiEvent)+(24))>>2)] = outerHeight;
        HEAP32[(((uiEvent)+(28))>>2)] = pageXOffset;
        HEAP32[(((uiEvent)+(32))>>2)] = pageYOffset;
        if (getWasmTableEntry(callbackfunc)(eventTypeId, uiEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: uiEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_resize_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerUiEventCallback(target, userData, useCapture, callbackfunc, 10, "resize", targetThread);
      return 0;
    }

  
  
  
  function registerTouchEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.touchEvent) JSEvents.touchEvent = _malloc( 1696 );
  
      target = findEventTarget(target);
  
      var touchEventHandlerFunc = function(e) {
        var t, touches = {}, et = e.touches;
        // To ease marshalling different kinds of touches that browser reports (all touches are listed in e.touches, 
        // only changed touches in e.changedTouches, and touches on target at a.targetTouches), mark a boolean in
        // each Touch object so that we can later loop only once over all touches we see to marshall over to Wasm.
  
        for (var i = 0; i < et.length; ++i) {
          t = et[i];
          // Browser might recycle the generated Touch objects between each frame (Firefox on Android), so reset any
          // changed/target states we may have set from previous frame.
          t.isChanged = t.onTarget = 0;
          touches[t.identifier] = t;
        }
        // Mark which touches are part of the changedTouches list.
        for (var i = 0; i < e.changedTouches.length; ++i) {
          t = e.changedTouches[i];
          t.isChanged = 1;
          touches[t.identifier] = t;
        }
        // Mark which touches are part of the targetTouches list.
        for (var i = 0; i < e.targetTouches.length; ++i) {
          touches[e.targetTouches[i].identifier].onTarget = 1;
        }
  
        var touchEvent = JSEvents.touchEvent;
        HEAPF64[((touchEvent)>>3)] = e.timeStamp;
        var idx = touchEvent>>2; // Pre-shift the ptr to index to HEAP32 to save code size
        HEAP32[idx + 3] = e.ctrlKey;
        HEAP32[idx + 4] = e.shiftKey;
        HEAP32[idx + 5] = e.altKey;
        HEAP32[idx + 6] = e.metaKey;
        idx += 7; // Advance to the start of the touch array.
        var targetRect = getBoundingClientRect(target);
        var numTouches = 0;
        for (var i in touches) {
          t = touches[i];
          HEAP32[idx + 0] = t.identifier;
          HEAP32[idx + 1] = t.screenX;
          HEAP32[idx + 2] = t.screenY;
          HEAP32[idx + 3] = t.clientX;
          HEAP32[idx + 4] = t.clientY;
          HEAP32[idx + 5] = t.pageX;
          HEAP32[idx + 6] = t.pageY;
          HEAP32[idx + 7] = t.isChanged;
          HEAP32[idx + 8] = t.onTarget;
          HEAP32[idx + 9] = t.clientX - targetRect.left;
          HEAP32[idx + 10] = t.clientY - targetRect.top;
  
          idx += 13;
  
          if (++numTouches > 31) {
            break;
          }
        }
        HEAP32[(((touchEvent)+(8))>>2)] = numTouches;
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, touchEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: target,
        allowsDeferredCalls: eventTypeString == 'touchstart' || eventTypeString == 'touchend',
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: touchEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_touchcancel_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 25, "touchcancel", targetThread);
      return 0;
    }

  function _emscripten_set_touchend_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 23, "touchend", targetThread);
      return 0;
    }

  function _emscripten_set_touchmove_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 24, "touchmove", targetThread);
      return 0;
    }

  function _emscripten_set_touchstart_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 22, "touchstart", targetThread);
      return 0;
    }

  
  function fillVisibilityChangeEventData(eventStruct) {
      var visibilityStates = [ "hidden", "visible", "prerender", "unloaded" ];
      var visibilityState = visibilityStates.indexOf(document.visibilityState);
  
      // Assigning a boolean to HEAP32 with expected type coercion.
      /** @suppress{checkTypes} */
      HEAP32[((eventStruct)>>2)] = document.hidden;
      HEAP32[(((eventStruct)+(4))>>2)] = visibilityState;
    }
  
  
  function registerVisibilityChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.visibilityChangeEvent) JSEvents.visibilityChangeEvent = _malloc( 8 );
  
      var visibilityChangeEventHandlerFunc = function(e = event) {
        var visibilityChangeEvent = JSEvents.visibilityChangeEvent;
  
        fillVisibilityChangeEventData(visibilityChangeEvent);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, visibilityChangeEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: visibilityChangeEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  
  function _emscripten_set_visibilitychange_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
      registerVisibilityChangeEventCallback(specialHTMLTargets[1], userData, useCapture, callbackfunc, 21, "visibilitychange", targetThread);
      return 0;
    }

  
  
  
  
  function registerWheelEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.wheelEvent) JSEvents.wheelEvent = _malloc( 104 );
  
      // The DOM Level 3 events spec event 'wheel'
      var wheelHandlerFunc = function(e = event) {
        var wheelEvent = JSEvents.wheelEvent;
        fillMouseEventData(wheelEvent, e, target);
        HEAPF64[(((wheelEvent)+(72))>>3)] = e["deltaX"];
        HEAPF64[(((wheelEvent)+(80))>>3)] = e["deltaY"];
        HEAPF64[(((wheelEvent)+(88))>>3)] = e["deltaZ"];
        HEAP32[(((wheelEvent)+(96))>>2)] = e["deltaMode"];
        if (getWasmTableEntry(callbackfunc)(eventTypeId, wheelEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: target,
        allowsDeferredCalls: true,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: wheelHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  
  function _emscripten_set_wheel_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      target = findEventTarget(target);
      if (typeof target.onwheel != 'undefined') {
        registerWheelEventCallback(target, userData, useCapture, callbackfunc, 9, "wheel", targetThread);
        return 0;
      } else {
        return -1;
      }
    }

  
  function _emscripten_set_window_title(title) {
      setWindowTitle(UTF8ToString(title));
    }

  function _emscripten_sleep() {
      throw 'Please compile your program with async support in order to use asynchronous operations like emscripten_sleep';
    }

  var ENV = {};
  
  function getExecutableName() {
      return thisProgram || './this.program';
    }
  function getEnvStrings() {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator == 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          // x is a key in ENV; if ENV[x] is undefined, that means it was
          // explicitly set to be so. We allow user code to do that to
          // force variables with default values to remain unset.
          if (ENV[x] === undefined) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + '=' + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
  
  function stringToAscii(str, buffer) {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
      }
      // Null-terminate the string
      HEAP8[((buffer)>>0)] = 0;
    }
  
  function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAPU32[(((__environ)+(i*4))>>2)] = ptr;
        stringToAscii(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }

  
  function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAPU32[((penviron_count)>>2)] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAPU32[((penviron_buf_size)>>2)] = bufSize;
      return 0;
    }


  function _fd_close(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  function _fd_fdstat_get(fd, pbuf) {
  try {
  
      var rightsBase = 0;
      var rightsInheriting = 0;
      var flags = 0;
      {
        var stream = SYSCALLS.getStreamFromFD(fd);
        // All character devices are terminals (other things a Linux system would
        // assume is a character device, like the mouse, we have special APIs for).
        var type = stream.tty ? 2 :
                   FS.isDir(stream.mode) ? 3 :
                   FS.isLink(stream.mode) ? 7 :
                   4;
      }
      HEAP8[((pbuf)>>0)] = type;
      HEAP16[(((pbuf)+(2))>>1)] = flags;
      (tempI64 = [rightsBase>>>0,(tempDouble=rightsBase,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(8))>>2)] = tempI64[0],HEAP32[(((pbuf)+(12))>>2)] = tempI64[1]);
      (tempI64 = [rightsInheriting>>>0,(tempDouble=rightsInheriting,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(16))>>2)] = tempI64[0],HEAP32[(((pbuf)+(20))>>2)] = tempI64[1]);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  /** @param {number=} offset */
  function doReadv(stream, iov, iovcnt, offset) {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.read(stream, HEAP8,ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break; // nothing more to read
        if (typeof offset !== 'undefined') {
          offset += curr;
        }
      }
      return ret;
    }
  
  function _fd_read(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doReadv(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  
  
  
  
  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  try {
  
      var offset = convertI32PairToI53Checked(offset_low, offset_high); if (isNaN(offset)) return 61;
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)] = tempI64[0],HEAP32[(((newOffset)+(4))>>2)] = tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  function _fd_sync(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      if (stream.stream_ops && stream.stream_ops.fsync) {
        return stream.stream_ops.fsync(stream);
      }
      return 0; // we can't do anything synchronously; the in-memory FS is already synced to
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  /** @param {number=} offset */
  function doWritev(stream, iov, iovcnt, offset) {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.write(stream, HEAP8,ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (typeof offset !== 'undefined') {
          offset += curr;
        }
      }
      return ret;
    }
  
  function _fd_write(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doWritev(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  
  
  
  
  
  
  
  function _getaddrinfo(node, service, hint, out) {
      // Note getaddrinfo currently only returns a single addrinfo with ai_next defaulting to NULL. When NULL
      // hints are specified or ai_family set to AF_UNSPEC or ai_socktype or ai_protocol set to 0 then we
      // really should provide a linked list of suitable addrinfo values.
      var addrs = [];
      var canon = null;
      var addr = 0;
      var port = 0;
      var flags = 0;
      var family = 0;
      var type = 0;
      var proto = 0;
      var ai, last;
  
      function allocaddrinfo(family, type, proto, canon, addr, port) {
        var sa, salen, ai;
        var errno;
  
        salen = family === 10 ?
          28 :
          16;
        addr = family === 10 ?
          inetNtop6(addr) :
          inetNtop4(addr);
        sa = _malloc(salen);
        errno = writeSockaddr(sa, family, addr, port);
        assert(!errno);
  
        ai = _malloc(32);
        HEAP32[(((ai)+(4))>>2)] = family;
        HEAP32[(((ai)+(8))>>2)] = type;
        HEAP32[(((ai)+(12))>>2)] = proto;
        HEAP32[(((ai)+(24))>>2)] = canon;
        HEAPU32[(((ai)+(20))>>2)] = sa;
        if (family === 10) {
          HEAP32[(((ai)+(16))>>2)] = 28;
        } else {
          HEAP32[(((ai)+(16))>>2)] = 16;
        }
        HEAP32[(((ai)+(28))>>2)] = 0;
  
        return ai;
      }
  
      if (hint) {
        flags = HEAP32[((hint)>>2)];
        family = HEAP32[(((hint)+(4))>>2)];
        type = HEAP32[(((hint)+(8))>>2)];
        proto = HEAP32[(((hint)+(12))>>2)];
      }
      if (type && !proto) {
        proto = type === 2 ? 17 : 6;
      }
      if (!type && proto) {
        type = proto === 17 ? 2 : 1;
      }
  
      // If type or proto are set to zero in hints we should really be returning multiple addrinfo values, but for
      // now default to a TCP STREAM socket so we can at least return a sensible addrinfo given NULL hints.
      if (proto === 0) {
        proto = 6;
      }
      if (type === 0) {
        type = 1;
      }
  
      if (!node && !service) {
        return -2;
      }
      if (flags & ~(1|2|4|
          1024|8|16|32)) {
        return -1;
      }
      if (hint !== 0 && (HEAP32[((hint)>>2)] & 2) && !node) {
        return -1;
      }
      if (flags & 32) {
        // TODO
        return -2;
      }
      if (type !== 0 && type !== 1 && type !== 2) {
        return -7;
      }
      if (family !== 0 && family !== 2 && family !== 10) {
        return -6;
      }
  
      if (service) {
        service = UTF8ToString(service);
        port = parseInt(service, 10);
  
        if (isNaN(port)) {
          if (flags & 1024) {
            return -2;
          }
          // TODO support resolving well-known service names from:
          // http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.txt
          return -8;
        }
      }
  
      if (!node) {
        if (family === 0) {
          family = 2;
        }
        if ((flags & 1) === 0) {
          if (family === 2) {
            addr = _htonl(2130706433);
          } else {
            addr = [0, 0, 0, 1];
          }
        }
        ai = allocaddrinfo(family, type, proto, null, addr, port);
        HEAPU32[((out)>>2)] = ai;
        return 0;
      }
  
      //
      // try as a numeric address
      //
      node = UTF8ToString(node);
      addr = inetPton4(node);
      if (addr !== null) {
        // incoming node is a valid ipv4 address
        if (family === 0 || family === 2) {
          family = 2;
        }
        else if (family === 10 && (flags & 8)) {
          addr = [0, 0, _htonl(0xffff), addr];
          family = 10;
        } else {
          return -2;
        }
      } else {
        addr = inetPton6(node);
        if (addr !== null) {
          // incoming node is a valid ipv6 address
          if (family === 0 || family === 10) {
            family = 10;
          } else {
            return -2;
          }
        }
      }
      if (addr != null) {
        ai = allocaddrinfo(family, type, proto, node, addr, port);
        HEAPU32[((out)>>2)] = ai;
        return 0;
      }
      if (flags & 4) {
        return -2;
      }
  
      //
      // try as a hostname
      //
      // resolve the hostname to a temporary fake address
      node = DNS.lookup_name(node);
      addr = inetPton4(node);
      if (family === 0) {
        family = 2;
      } else if (family === 10) {
        addr = [0, 0, _htonl(0xffff), addr];
      }
      ai = allocaddrinfo(family, type, proto, null, addr, port);
      HEAPU32[((out)>>2)] = ai;
      return 0;
    }

  /** @type {function(...*):?} */
  function _getcontext(
  ) {
  err('missing function: getcontext'); abort(-1);
  }

  /** @type {function(...*):?} */
  function _getdtablesize(
  ) {
  err('missing function: getdtablesize'); abort(-1);
  }

  
  
  
  function getHostByName(name) {
      // generate hostent
      var ret = _malloc(20); // XXX possibly leaked, as are others here
      var nameBuf = stringToNewUTF8(name);
      HEAPU32[((ret)>>2)] = nameBuf;
      var aliasesBuf = _malloc(4);
      HEAPU32[((aliasesBuf)>>2)] = 0;
      HEAPU32[(((ret)+(4))>>2)] = aliasesBuf;
      var afinet = 2;
      HEAP32[(((ret)+(8))>>2)] = afinet;
      HEAP32[(((ret)+(12))>>2)] = 4;
      var addrListBuf = _malloc(12);
      HEAPU32[((addrListBuf)>>2)] = addrListBuf+8;
      HEAPU32[(((addrListBuf)+(4))>>2)] = 0;
      HEAP32[(((addrListBuf)+(8))>>2)] = inetPton4(DNS.lookup_name(name));
      HEAPU32[(((ret)+(16))>>2)] = addrListBuf;
      return ret;
    }
  
  function _gethostbyname(name) {
      return getHostByName(UTF8ToString(name));
    }

  
  
  function _gethostbyname_r(name, ret, buf, buflen, out, err) {
      var data = _gethostbyname(name);
      _memcpy(ret, data, 20);
      _free(data);
      HEAP32[((err)>>2)] = 0;
      HEAPU32[((out)>>2)] = ret;
      return 0;
    }

  function _getloadavg(loadavg, nelem) {
      // int getloadavg(double loadavg[], int nelem);
      // http://linux.die.net/man/3/getloadavg
      var limit = Math.min(nelem, 3);
      var doubleSize = 8;
      for (var i = 0; i < limit; i++) {
        HEAPF64[(((loadavg)+(i * doubleSize))>>3)] = 0.1;
      }
      return limit;
    }

  
  
  
  function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
      var info = readSockaddr(sa, salen);
      if (info.errno) {
        return -6;
      }
      var port = info.port;
      var addr = info.addr;
  
      var overflowed = false;
  
      if (node && nodelen) {
        var lookup;
        if ((flags & 1) || !(lookup = DNS.lookup_addr(addr))) {
          if (flags & 8) {
            return -2;
          }
        } else {
          addr = lookup;
        }
        var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
  
        if (numBytesWrittenExclNull+1 >= nodelen) {
          overflowed = true;
        }
      }
  
      if (serv && servlen) {
        port = '' + port;
        var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
  
        if (numBytesWrittenExclNull+1 >= servlen) {
          overflowed = true;
        }
      }
  
      if (overflowed) {
        // Note: even when we overflow, getnameinfo() is specced to write out the truncated results.
        return -12;
      }
  
      return 0;
    }

  /** @type {function(...*):?} */
  function _makecontext(
  ) {
  err('missing function: makecontext'); abort(-1);
  }


  
  function arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    }
  
  
  var MONTH_DAYS_LEAP = [31,29,31,30,31,30,31,31,30,31,30,31];
  
  var MONTH_DAYS_REGULAR = [31,28,31,30,31,30,31,31,30,31,30,31];
  function addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    }
  
  
  
  
  function writeArrayToMemory(array, buffer) {
      HEAP8.set(array, buffer);
    }
  
  function _strftime(s, maxsize, format, tm) {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAP32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value == 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            }
            return thisDate.getFullYear();
          }
          return thisDate.getFullYear()-1;
      }
  
      var EXPANSION_RULES_2 = {
        '%a': function(date) {
          return WEEKDAYS[date.tm_wday].substring(0,3);
        },
        '%A': function(date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function(date) {
          return MONTHS[date.tm_mon].substring(0,3);
        },
        '%B': function(date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function(date) {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': function(date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function(date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function(date) {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function(date) {
          return getWeekBasedYear(date);
        },
        '%H': function(date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function(date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': function(date) {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday + arraySum(isLeapYear(date.tm_year+1900) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': function(date) {
          return leadingNulls(date.tm_mon+1, 2);
        },
        '%M': function(date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function() {
          return '\n';
        },
        '%p': function(date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          }
          return 'PM';
        },
        '%S': function(date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function() {
          return '\t';
        },
        '%u': function(date) {
          return date.tm_wday || 7;
        },
        '%U': function(date) {
          var days = date.tm_yday + 7 - date.tm_wday;
          return leadingNulls(Math.floor(days / 7), 2);
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7 ) / 7);
          // If 1 Jan is just 1-3 days past Monday, the previous week
          // is also in this year.
          if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
            val++;
          }
          if (!val) {
            val = 52;
            // If 31 December of prev year a Thursday, or Friday of a
            // leap year, then the prev year has 53 weeks.
            var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
            if (dec31 == 4 || (dec31 == 5 && isLeapYear(date.tm_year%400-1))) {
              val++;
            }
          } else if (val == 53) {
            // If 1 January is not a Thursday, and not a Wednesday of a
            // leap year, then this year has only 52 weeks.
            var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
            if (jan1 != 4 && (jan1 != 3 || !isLeapYear(date.tm_year)))
              val = 1;
          }
          return leadingNulls(val, 2);
        },
        '%w': function(date) {
          return date.tm_wday;
        },
        '%W': function(date) {
          var days = date.tm_yday + 7 - ((date.tm_wday + 6) % 7);
          return leadingNulls(Math.floor(days / 7), 2);
        },
        '%y': function(date) {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        '%Y': function(date) {
          // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
          return date.tm_year+1900;
        },
        '%z': function(date) {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': function(date) {
          return date.tm_zone;
        },
        '%%': function() {
          return '%';
        }
      };
  
      // Replace %% with a pair of NULLs (which cannot occur in a C string), then
      // re-inject them after processing.
      pattern = pattern.replace(/%%/g, '\0\0')
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
      pattern = pattern.replace(/\0\0/g, '%')
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }

  
  
  
  
  
  
  
  function _strptime(buf, format, tm) {
      // char *strptime(const char *restrict buf, const char *restrict format, struct tm *restrict tm);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strptime.html
      var pattern = UTF8ToString(format);
  
      // escape special characters
      // TODO: not sure we really need to escape all of these in JS regexps
      var SPECIAL_CHARS = '\\!@#$^&*()+=-[]/{}|:<>?,.';
      for (var i=0, ii=SPECIAL_CHARS.length; i<ii; ++i) {
        pattern = pattern.replace(new RegExp('\\'+SPECIAL_CHARS[i], 'g'), '\\'+SPECIAL_CHARS[i]);
      }
  
      // reduce number of matchers
      var EQUIVALENT_MATCHERS = {
        '%A':  '%a',
        '%B':  '%b',
        '%c':  '%a %b %d %H:%M:%S %Y',
        '%D':  '%m\\/%d\\/%y',
        '%e':  '%d',
        '%F':  '%Y-%m-%d',
        '%h':  '%b',
        '%R':  '%H\\:%M',
        '%r':  '%I\\:%M\\:%S\\s%p',
        '%T':  '%H\\:%M\\:%S',
        '%x':  '%m\\/%d\\/(?:%y|%Y)',
        '%X':  '%H\\:%M\\:%S'
      };
      for (var matcher in EQUIVALENT_MATCHERS) {
        pattern = pattern.replace(matcher, EQUIVALENT_MATCHERS[matcher]);
      }
  
      // TODO: take care of locale
  
      var DATE_PATTERNS = {
        /* weeday name */     '%a': '(?:Sun(?:day)?)|(?:Mon(?:day)?)|(?:Tue(?:sday)?)|(?:Wed(?:nesday)?)|(?:Thu(?:rsday)?)|(?:Fri(?:day)?)|(?:Sat(?:urday)?)',
        /* month name */      '%b': '(?:Jan(?:uary)?)|(?:Feb(?:ruary)?)|(?:Mar(?:ch)?)|(?:Apr(?:il)?)|May|(?:Jun(?:e)?)|(?:Jul(?:y)?)|(?:Aug(?:ust)?)|(?:Sep(?:tember)?)|(?:Oct(?:ober)?)|(?:Nov(?:ember)?)|(?:Dec(?:ember)?)',
        /* century */         '%C': '\\d\\d',
        /* day of month */    '%d': '0[1-9]|[1-9](?!\\d)|1\\d|2\\d|30|31',
        /* hour (24hr) */     '%H': '\\d(?!\\d)|[0,1]\\d|20|21|22|23',
        /* hour (12hr) */     '%I': '\\d(?!\\d)|0\\d|10|11|12',
        /* day of year */     '%j': '00[1-9]|0?[1-9](?!\\d)|0?[1-9]\\d(?!\\d)|[1,2]\\d\\d|3[0-6]\\d',
        /* month */           '%m': '0[1-9]|[1-9](?!\\d)|10|11|12',
        /* minutes */         '%M': '0\\d|\\d(?!\\d)|[1-5]\\d',
        /* whitespace */      '%n': '\\s',
        /* AM/PM */           '%p': 'AM|am|PM|pm|A\\.M\\.|a\\.m\\.|P\\.M\\.|p\\.m\\.',
        /* seconds */         '%S': '0\\d|\\d(?!\\d)|[1-5]\\d|60',
        /* week number */     '%U': '0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53',
        /* week number */     '%W': '0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53',
        /* weekday number */  '%w': '[0-6]',
        /* 2-digit year */    '%y': '\\d\\d',
        /* 4-digit year */    '%Y': '\\d\\d\\d\\d',
        /* % */               '%%': '%',
        /* whitespace */      '%t': '\\s',
      };
  
      var MONTH_NUMBERS = {JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11};
      var DAY_NUMBERS_SUN_FIRST = {SUN: 0, MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6};
      var DAY_NUMBERS_MON_FIRST = {MON: 0, TUE: 1, WED: 2, THU: 3, FRI: 4, SAT: 5, SUN: 6};
  
      for (var datePattern in DATE_PATTERNS) {
        pattern = pattern.replace(datePattern, '('+datePattern+DATE_PATTERNS[datePattern]+')');
      }
  
      // take care of capturing groups
      var capture = [];
      for (var i=pattern.indexOf('%'); i>=0; i=pattern.indexOf('%')) {
        capture.push(pattern[i+1]);
        pattern = pattern.replace(new RegExp('\\%'+pattern[i+1], 'g'), '');
      }
  
      var matches = new RegExp('^'+pattern, "i").exec(UTF8ToString(buf))
      // out(UTF8ToString(buf)+ ' is matched by '+((new RegExp('^'+pattern)).source)+' into: '+JSON.stringify(matches));
  
      function initDate() {
        function fixup(value, min, max) {
          return (typeof value != 'number' || isNaN(value)) ? min : (value>=min ? (value<=max ? value: max): min);
        };
        return {
          year: fixup(HEAP32[(((tm)+(20))>>2)] + 1900 , 1970, 9999),
          month: fixup(HEAP32[(((tm)+(16))>>2)], 0, 11),
          day: fixup(HEAP32[(((tm)+(12))>>2)], 1, 31),
          hour: fixup(HEAP32[(((tm)+(8))>>2)], 0, 23),
          min: fixup(HEAP32[(((tm)+(4))>>2)], 0, 59),
          sec: fixup(HEAP32[((tm)>>2)], 0, 59)
        };
      };
  
      if (matches) {
        var date = initDate();
        var value;
  
        var getMatch = (symbol) => {
          var pos = capture.indexOf(symbol);
          // check if symbol appears in regexp
          if (pos >= 0) {
            // return matched value or null (falsy!) for non-matches
            return matches[pos+1];
          }
          return;
        };
  
        // seconds
        if ((value=getMatch('S'))) {
          date.sec = jstoi_q(value);
        }
  
        // minutes
        if ((value=getMatch('M'))) {
          date.min = jstoi_q(value);
        }
  
        // hours
        if ((value=getMatch('H'))) {
          // 24h clock
          date.hour = jstoi_q(value);
        } else if ((value = getMatch('I'))) {
          // AM/PM clock
          var hour = jstoi_q(value);
          if ((value=getMatch('p'))) {
            hour += value.toUpperCase()[0] === 'P' ? 12 : 0;
          }
          date.hour = hour;
        }
  
        // year
        if ((value=getMatch('Y'))) {
          // parse from four-digit year
          date.year = jstoi_q(value);
        } else if ((value=getMatch('y'))) {
          // parse from two-digit year...
          var year = jstoi_q(value);
          if ((value=getMatch('C'))) {
            // ...and century
            year += jstoi_q(value)*100;
          } else {
            // ...and rule-of-thumb
            year += year<69 ? 2000 : 1900;
          }
          date.year = year;
        }
  
        // month
        if ((value=getMatch('m'))) {
          // parse from month number
          date.month = jstoi_q(value)-1;
        } else if ((value=getMatch('b'))) {
          // parse from month name
          date.month = MONTH_NUMBERS[value.substring(0,3).toUpperCase()] || 0;
          // TODO: derive month from day in year+year, week number+day of week+year
        }
  
        // day
        if ((value=getMatch('d'))) {
          // get day of month directly
          date.day = jstoi_q(value);
        } else if ((value=getMatch('j'))) {
          // get day of month from day of year ...
          var day = jstoi_q(value);
          var leapYear = isLeapYear(date.year);
          for (var month=0; month<12; ++month) {
            var daysUntilMonth = arraySum(leapYear ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, month-1);
            if (day<=daysUntilMonth+(leapYear ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[month]) {
              date.day = day-daysUntilMonth;
            }
          }
        } else if ((value=getMatch('a'))) {
          // get day of month from weekday ...
          var weekDay = value.substring(0,3).toUpperCase();
          if ((value=getMatch('U'))) {
            // ... and week number (Sunday being first day of week)
            // Week number of the year (Sunday as the first day of the week) as a decimal number [00,53].
            // All days in a new year preceding the first Sunday are considered to be in week 0.
            var weekDayNumber = DAY_NUMBERS_SUN_FIRST[weekDay];
            var weekNumber = jstoi_q(value);
  
            // January 1st
            var janFirst = new Date(date.year, 0, 1);
            var endDate;
            if (janFirst.getDay() === 0) {
              // Jan 1st is a Sunday, and, hence in the 1st CW
              endDate = addDays(janFirst, weekDayNumber+7*(weekNumber-1));
            } else {
              // Jan 1st is not a Sunday, and, hence still in the 0th CW
              endDate = addDays(janFirst, 7-janFirst.getDay()+weekDayNumber+7*(weekNumber-1));
            }
            date.day = endDate.getDate();
            date.month = endDate.getMonth();
          } else if ((value=getMatch('W'))) {
            // ... and week number (Monday being first day of week)
            // Week number of the year (Monday as the first day of the week) as a decimal number [00,53].
            // All days in a new year preceding the first Monday are considered to be in week 0.
            var weekDayNumber = DAY_NUMBERS_MON_FIRST[weekDay];
            var weekNumber = jstoi_q(value);
  
            // January 1st
            var janFirst = new Date(date.year, 0, 1);
            var endDate;
            if (janFirst.getDay()===1) {
              // Jan 1st is a Monday, and, hence in the 1st CW
               endDate = addDays(janFirst, weekDayNumber+7*(weekNumber-1));
            } else {
              // Jan 1st is not a Monday, and, hence still in the 0th CW
              endDate = addDays(janFirst, 7-janFirst.getDay()+1+weekDayNumber+7*(weekNumber-1));
            }
  
            date.day = endDate.getDate();
            date.month = endDate.getMonth();
          }
        }
  
        /*
        tm_sec  int seconds after the minute  0-61*
        tm_min  int minutes after the hour  0-59
        tm_hour int hours since midnight  0-23
        tm_mday int day of the month  1-31
        tm_mon  int months since January  0-11
        tm_year int years since 1900
        tm_wday int days since Sunday 0-6
        tm_yday int days since January 1  0-365
        tm_isdst  int Daylight Saving Time flag
        */
  
        var fullDate = new Date(date.year, date.month, date.day, date.hour, date.min, date.sec, 0);
        HEAP32[((tm)>>2)] = fullDate.getSeconds();
        HEAP32[(((tm)+(4))>>2)] = fullDate.getMinutes();
        HEAP32[(((tm)+(8))>>2)] = fullDate.getHours();
        HEAP32[(((tm)+(12))>>2)] = fullDate.getDate();
        HEAP32[(((tm)+(16))>>2)] = fullDate.getMonth();
        HEAP32[(((tm)+(20))>>2)] = fullDate.getFullYear()-1900;
        HEAP32[(((tm)+(24))>>2)] = fullDate.getDay();
        HEAP32[(((tm)+(28))>>2)] = arraySum(isLeapYear(fullDate.getFullYear()) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, fullDate.getMonth()-1)+fullDate.getDate()-1;
        HEAP32[(((tm)+(32))>>2)] = 0;
  
        // we need to convert the matched sequence into an integer array to take care of UTF-8 characters > 0x7F
        // TODO: not sure that intArrayFromString handles all unicode characters correctly
        return buf+intArrayFromString(matches[0]).length-1;
      }
  
      return 0;
    }

  /** @type {function(...*):?} */
  function _swapcontext(
  ) {
  err('missing function: swapcontext'); abort(-1);
  }



  function getCFunc(ident) {
      var func = Module['_' + ident]; // closure exported function
      return func;
    }
  
  
  
  
    /**
     * @param {string|null=} returnType
     * @param {Array=} argTypes
     * @param {Arguments|Array=} args
     * @param {Object=} opts
     */
  function ccall(ident, returnType, argTypes, args, opts) {
      // For fast lookup of conversion functions
      var toC = {
        'string': (str) => {
          var ret = 0;
          if (str !== null && str !== undefined && str !== 0) { // null string
            // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
            ret = stringToUTF8OnStack(str);
          }
          return ret;
        },
        'array': (arr) => {
          var ret = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret);
          return ret;
        }
      };
  
      function convertReturnValue(ret) {
        if (returnType === 'string') {
          
          return UTF8ToString(ret);
        }
        if (returnType === 'boolean') return Boolean(ret);
        return ret;
      }
  
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0) stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func.apply(null, cArgs);
      function onDone(ret) {
        if (stack !== 0) stackRestore(stack);
        return convertReturnValue(ret);
      }
  
      ret = onDone(ret);
      return ret;
    }





  var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_unlink"] = FS.unlink;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createDevice"] = FS.createDevice;;

      // exports
      Module["requestFullscreen"] = function Module_requestFullscreen(lockPointer, resizeCanvas) { Browser.requestFullscreen(lockPointer, resizeCanvas) };
      Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) { Browser.requestAnimationFrame(func) };
      Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) { Browser.setCanvasSize(width, height, noUpdates) };
      Module["pauseMainLoop"] = function Module_pauseMainLoop() { Browser.mainLoop.pause() };
      Module["resumeMainLoop"] = function Module_resumeMainLoop() { Browser.mainLoop.resume() };
      Module["getUserMedia"] = function Module_getUserMedia() { Browser.getUserMedia() };
      Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) { return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes) };
      var preloadedImages = {};
      var preloadedAudios = {};;
var GLctx;;
for (var i = 0; i < 32; ++i) tempFixedLengthArray.push(new Array(i));;
var miniTempWebGLFloatBuffersStorage = new Float32Array(288);
  for (/**@suppress{duplicate}*/var i = 0; i < 288; ++i) {
  miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i+1);
  }
  ;
var miniTempWebGLIntBuffersStorage = new Int32Array(288);
  for (/**@suppress{duplicate}*/var i = 0; i < 288; ++i) {
  miniTempWebGLIntBuffers[i] = miniTempWebGLIntBuffersStorage.subarray(0, i+1);
  }
  ;
// include: base64Utils.js
// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob == 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}


// end include: base64Utils.js
var wasmImports = {
  "__assert_fail": ___assert_fail,
  "__call_sighandler": ___call_sighandler,
  "__dlsym": ___dlsym,
  "__syscall__newselect": ___syscall__newselect,
  "__syscall_accept4": ___syscall_accept4,
  "__syscall_bind": ___syscall_bind,
  "__syscall_chdir": ___syscall_chdir,
  "__syscall_chmod": ___syscall_chmod,
  "__syscall_connect": ___syscall_connect,
  "__syscall_dup": ___syscall_dup,
  "__syscall_faccessat": ___syscall_faccessat,
  "__syscall_fchownat": ___syscall_fchownat,
  "__syscall_fcntl64": ___syscall_fcntl64,
  "__syscall_fdatasync": ___syscall_fdatasync,
  "__syscall_fstat64": ___syscall_fstat64,
  "__syscall_ftruncate64": ___syscall_ftruncate64,
  "__syscall_getcwd": ___syscall_getcwd,
  "__syscall_getdents64": ___syscall_getdents64,
  "__syscall_getpeername": ___syscall_getpeername,
  "__syscall_getsockname": ___syscall_getsockname,
  "__syscall_getsockopt": ___syscall_getsockopt,
  "__syscall_ioctl": ___syscall_ioctl,
  "__syscall_listen": ___syscall_listen,
  "__syscall_lstat64": ___syscall_lstat64,
  "__syscall_mkdirat": ___syscall_mkdirat,
  "__syscall_newfstatat": ___syscall_newfstatat,
  "__syscall_openat": ___syscall_openat,
  "__syscall_poll": ___syscall_poll,
  "__syscall_readlinkat": ___syscall_readlinkat,
  "__syscall_recvfrom": ___syscall_recvfrom,
  "__syscall_renameat": ___syscall_renameat,
  "__syscall_rmdir": ___syscall_rmdir,
  "__syscall_sendto": ___syscall_sendto,
  "__syscall_socket": ___syscall_socket,
  "__syscall_stat64": ___syscall_stat64,
  "__syscall_statfs64": ___syscall_statfs64,
  "__syscall_symlink": ___syscall_symlink,
  "__syscall_unlinkat": ___syscall_unlinkat,
  "__syscall_utimensat": ___syscall_utimensat,
  "_emscripten_get_now_is_monotonic": __emscripten_get_now_is_monotonic,
  "_emscripten_throw_longjmp": __emscripten_throw_longjmp,
  "_gmtime_js": __gmtime_js,
  "_localtime_js": __localtime_js,
  "_mktime_js": __mktime_js,
  "_mmap_js": __mmap_js,
  "_munmap_js": __munmap_js,
  "_setitimer_js": __setitimer_js,
  "_tzset_js": __tzset_js,
  "abort": _abort,
  "dlopen": _dlopen,
  "eglBindAPI": _eglBindAPI,
  "eglChooseConfig": _eglChooseConfig,
  "eglCreateContext": _eglCreateContext,
  "eglCreateWindowSurface": _eglCreateWindowSurface,
  "eglDestroyContext": _eglDestroyContext,
  "eglDestroySurface": _eglDestroySurface,
  "eglGetConfigAttrib": _eglGetConfigAttrib,
  "eglGetDisplay": _eglGetDisplay,
  "eglGetError": _eglGetError,
  "eglInitialize": _eglInitialize,
  "eglMakeCurrent": _eglMakeCurrent,
  "eglQueryString": _eglQueryString,
  "eglSwapBuffers": _eglSwapBuffers,
  "eglSwapInterval": _eglSwapInterval,
  "eglTerminate": _eglTerminate,
  "eglWaitGL": _eglWaitGL,
  "eglWaitNative": _eglWaitNative,
  "emscripten_asm_const_int": _emscripten_asm_const_int,
  "emscripten_asm_const_int_sync_on_main_thread": _emscripten_asm_const_int_sync_on_main_thread,
  "emscripten_date_now": _emscripten_date_now,
  "emscripten_exit_fullscreen": _emscripten_exit_fullscreen,
  "emscripten_exit_pointerlock": _emscripten_exit_pointerlock,
  "emscripten_get_battery_status": _emscripten_get_battery_status,
  "emscripten_get_device_pixel_ratio": _emscripten_get_device_pixel_ratio,
  "emscripten_get_element_css_size": _emscripten_get_element_css_size,
  "emscripten_get_gamepad_status": _emscripten_get_gamepad_status,
  "emscripten_get_heap_max": _emscripten_get_heap_max,
  "emscripten_get_now": _emscripten_get_now,
  "emscripten_get_num_gamepads": _emscripten_get_num_gamepads,
  "emscripten_get_preloaded_image_data": _emscripten_get_preloaded_image_data,
  "emscripten_get_preloaded_image_data_from_FILE": _emscripten_get_preloaded_image_data_from_FILE,
  "emscripten_get_screen_size": _emscripten_get_screen_size,
  "emscripten_glActiveTexture": _emscripten_glActiveTexture,
  "emscripten_glAttachShader": _emscripten_glAttachShader,
  "emscripten_glBeginQueryEXT": _emscripten_glBeginQueryEXT,
  "emscripten_glBindAttribLocation": _emscripten_glBindAttribLocation,
  "emscripten_glBindBuffer": _emscripten_glBindBuffer,
  "emscripten_glBindFramebuffer": _emscripten_glBindFramebuffer,
  "emscripten_glBindRenderbuffer": _emscripten_glBindRenderbuffer,
  "emscripten_glBindTexture": _emscripten_glBindTexture,
  "emscripten_glBindVertexArrayOES": _emscripten_glBindVertexArrayOES,
  "emscripten_glBlendColor": _emscripten_glBlendColor,
  "emscripten_glBlendEquation": _emscripten_glBlendEquation,
  "emscripten_glBlendEquationSeparate": _emscripten_glBlendEquationSeparate,
  "emscripten_glBlendFunc": _emscripten_glBlendFunc,
  "emscripten_glBlendFuncSeparate": _emscripten_glBlendFuncSeparate,
  "emscripten_glBufferData": _emscripten_glBufferData,
  "emscripten_glBufferSubData": _emscripten_glBufferSubData,
  "emscripten_glCheckFramebufferStatus": _emscripten_glCheckFramebufferStatus,
  "emscripten_glClear": _emscripten_glClear,
  "emscripten_glClearColor": _emscripten_glClearColor,
  "emscripten_glClearDepthf": _emscripten_glClearDepthf,
  "emscripten_glClearStencil": _emscripten_glClearStencil,
  "emscripten_glColorMask": _emscripten_glColorMask,
  "emscripten_glCompileShader": _emscripten_glCompileShader,
  "emscripten_glCompressedTexImage2D": _emscripten_glCompressedTexImage2D,
  "emscripten_glCompressedTexSubImage2D": _emscripten_glCompressedTexSubImage2D,
  "emscripten_glCopyTexImage2D": _emscripten_glCopyTexImage2D,
  "emscripten_glCopyTexSubImage2D": _emscripten_glCopyTexSubImage2D,
  "emscripten_glCreateProgram": _emscripten_glCreateProgram,
  "emscripten_glCreateShader": _emscripten_glCreateShader,
  "emscripten_glCullFace": _emscripten_glCullFace,
  "emscripten_glDeleteBuffers": _emscripten_glDeleteBuffers,
  "emscripten_glDeleteFramebuffers": _emscripten_glDeleteFramebuffers,
  "emscripten_glDeleteProgram": _emscripten_glDeleteProgram,
  "emscripten_glDeleteQueriesEXT": _emscripten_glDeleteQueriesEXT,
  "emscripten_glDeleteRenderbuffers": _emscripten_glDeleteRenderbuffers,
  "emscripten_glDeleteShader": _emscripten_glDeleteShader,
  "emscripten_glDeleteTextures": _emscripten_glDeleteTextures,
  "emscripten_glDeleteVertexArraysOES": _emscripten_glDeleteVertexArraysOES,
  "emscripten_glDepthFunc": _emscripten_glDepthFunc,
  "emscripten_glDepthMask": _emscripten_glDepthMask,
  "emscripten_glDepthRangef": _emscripten_glDepthRangef,
  "emscripten_glDetachShader": _emscripten_glDetachShader,
  "emscripten_glDisable": _emscripten_glDisable,
  "emscripten_glDisableVertexAttribArray": _emscripten_glDisableVertexAttribArray,
  "emscripten_glDrawArrays": _emscripten_glDrawArrays,
  "emscripten_glDrawArraysInstancedANGLE": _emscripten_glDrawArraysInstancedANGLE,
  "emscripten_glDrawBuffersWEBGL": _emscripten_glDrawBuffersWEBGL,
  "emscripten_glDrawElements": _emscripten_glDrawElements,
  "emscripten_glDrawElementsInstancedANGLE": _emscripten_glDrawElementsInstancedANGLE,
  "emscripten_glEnable": _emscripten_glEnable,
  "emscripten_glEnableVertexAttribArray": _emscripten_glEnableVertexAttribArray,
  "emscripten_glEndQueryEXT": _emscripten_glEndQueryEXT,
  "emscripten_glFinish": _emscripten_glFinish,
  "emscripten_glFlush": _emscripten_glFlush,
  "emscripten_glFramebufferRenderbuffer": _emscripten_glFramebufferRenderbuffer,
  "emscripten_glFramebufferTexture2D": _emscripten_glFramebufferTexture2D,
  "emscripten_glFrontFace": _emscripten_glFrontFace,
  "emscripten_glGenBuffers": _emscripten_glGenBuffers,
  "emscripten_glGenFramebuffers": _emscripten_glGenFramebuffers,
  "emscripten_glGenQueriesEXT": _emscripten_glGenQueriesEXT,
  "emscripten_glGenRenderbuffers": _emscripten_glGenRenderbuffers,
  "emscripten_glGenTextures": _emscripten_glGenTextures,
  "emscripten_glGenVertexArraysOES": _emscripten_glGenVertexArraysOES,
  "emscripten_glGenerateMipmap": _emscripten_glGenerateMipmap,
  "emscripten_glGetActiveAttrib": _emscripten_glGetActiveAttrib,
  "emscripten_glGetActiveUniform": _emscripten_glGetActiveUniform,
  "emscripten_glGetAttachedShaders": _emscripten_glGetAttachedShaders,
  "emscripten_glGetAttribLocation": _emscripten_glGetAttribLocation,
  "emscripten_glGetBooleanv": _emscripten_glGetBooleanv,
  "emscripten_glGetBufferParameteriv": _emscripten_glGetBufferParameteriv,
  "emscripten_glGetError": _emscripten_glGetError,
  "emscripten_glGetFloatv": _emscripten_glGetFloatv,
  "emscripten_glGetFramebufferAttachmentParameteriv": _emscripten_glGetFramebufferAttachmentParameteriv,
  "emscripten_glGetIntegerv": _emscripten_glGetIntegerv,
  "emscripten_glGetProgramInfoLog": _emscripten_glGetProgramInfoLog,
  "emscripten_glGetProgramiv": _emscripten_glGetProgramiv,
  "emscripten_glGetQueryObjecti64vEXT": _emscripten_glGetQueryObjecti64vEXT,
  "emscripten_glGetQueryObjectivEXT": _emscripten_glGetQueryObjectivEXT,
  "emscripten_glGetQueryObjectui64vEXT": _emscripten_glGetQueryObjectui64vEXT,
  "emscripten_glGetQueryObjectuivEXT": _emscripten_glGetQueryObjectuivEXT,
  "emscripten_glGetQueryivEXT": _emscripten_glGetQueryivEXT,
  "emscripten_glGetRenderbufferParameteriv": _emscripten_glGetRenderbufferParameteriv,
  "emscripten_glGetShaderInfoLog": _emscripten_glGetShaderInfoLog,
  "emscripten_glGetShaderPrecisionFormat": _emscripten_glGetShaderPrecisionFormat,
  "emscripten_glGetShaderSource": _emscripten_glGetShaderSource,
  "emscripten_glGetShaderiv": _emscripten_glGetShaderiv,
  "emscripten_glGetString": _emscripten_glGetString,
  "emscripten_glGetTexParameterfv": _emscripten_glGetTexParameterfv,
  "emscripten_glGetTexParameteriv": _emscripten_glGetTexParameteriv,
  "emscripten_glGetUniformLocation": _emscripten_glGetUniformLocation,
  "emscripten_glGetUniformfv": _emscripten_glGetUniformfv,
  "emscripten_glGetUniformiv": _emscripten_glGetUniformiv,
  "emscripten_glGetVertexAttribPointerv": _emscripten_glGetVertexAttribPointerv,
  "emscripten_glGetVertexAttribfv": _emscripten_glGetVertexAttribfv,
  "emscripten_glGetVertexAttribiv": _emscripten_glGetVertexAttribiv,
  "emscripten_glHint": _emscripten_glHint,
  "emscripten_glIsBuffer": _emscripten_glIsBuffer,
  "emscripten_glIsEnabled": _emscripten_glIsEnabled,
  "emscripten_glIsFramebuffer": _emscripten_glIsFramebuffer,
  "emscripten_glIsProgram": _emscripten_glIsProgram,
  "emscripten_glIsQueryEXT": _emscripten_glIsQueryEXT,
  "emscripten_glIsRenderbuffer": _emscripten_glIsRenderbuffer,
  "emscripten_glIsShader": _emscripten_glIsShader,
  "emscripten_glIsTexture": _emscripten_glIsTexture,
  "emscripten_glIsVertexArrayOES": _emscripten_glIsVertexArrayOES,
  "emscripten_glLineWidth": _emscripten_glLineWidth,
  "emscripten_glLinkProgram": _emscripten_glLinkProgram,
  "emscripten_glPixelStorei": _emscripten_glPixelStorei,
  "emscripten_glPolygonOffset": _emscripten_glPolygonOffset,
  "emscripten_glQueryCounterEXT": _emscripten_glQueryCounterEXT,
  "emscripten_glReadPixels": _emscripten_glReadPixels,
  "emscripten_glReleaseShaderCompiler": _emscripten_glReleaseShaderCompiler,
  "emscripten_glRenderbufferStorage": _emscripten_glRenderbufferStorage,
  "emscripten_glSampleCoverage": _emscripten_glSampleCoverage,
  "emscripten_glScissor": _emscripten_glScissor,
  "emscripten_glShaderBinary": _emscripten_glShaderBinary,
  "emscripten_glShaderSource": _emscripten_glShaderSource,
  "emscripten_glStencilFunc": _emscripten_glStencilFunc,
  "emscripten_glStencilFuncSeparate": _emscripten_glStencilFuncSeparate,
  "emscripten_glStencilMask": _emscripten_glStencilMask,
  "emscripten_glStencilMaskSeparate": _emscripten_glStencilMaskSeparate,
  "emscripten_glStencilOp": _emscripten_glStencilOp,
  "emscripten_glStencilOpSeparate": _emscripten_glStencilOpSeparate,
  "emscripten_glTexImage2D": _emscripten_glTexImage2D,
  "emscripten_glTexParameterf": _emscripten_glTexParameterf,
  "emscripten_glTexParameterfv": _emscripten_glTexParameterfv,
  "emscripten_glTexParameteri": _emscripten_glTexParameteri,
  "emscripten_glTexParameteriv": _emscripten_glTexParameteriv,
  "emscripten_glTexSubImage2D": _emscripten_glTexSubImage2D,
  "emscripten_glUniform1f": _emscripten_glUniform1f,
  "emscripten_glUniform1fv": _emscripten_glUniform1fv,
  "emscripten_glUniform1i": _emscripten_glUniform1i,
  "emscripten_glUniform1iv": _emscripten_glUniform1iv,
  "emscripten_glUniform2f": _emscripten_glUniform2f,
  "emscripten_glUniform2fv": _emscripten_glUniform2fv,
  "emscripten_glUniform2i": _emscripten_glUniform2i,
  "emscripten_glUniform2iv": _emscripten_glUniform2iv,
  "emscripten_glUniform3f": _emscripten_glUniform3f,
  "emscripten_glUniform3fv": _emscripten_glUniform3fv,
  "emscripten_glUniform3i": _emscripten_glUniform3i,
  "emscripten_glUniform3iv": _emscripten_glUniform3iv,
  "emscripten_glUniform4f": _emscripten_glUniform4f,
  "emscripten_glUniform4fv": _emscripten_glUniform4fv,
  "emscripten_glUniform4i": _emscripten_glUniform4i,
  "emscripten_glUniform4iv": _emscripten_glUniform4iv,
  "emscripten_glUniformMatrix2fv": _emscripten_glUniformMatrix2fv,
  "emscripten_glUniformMatrix3fv": _emscripten_glUniformMatrix3fv,
  "emscripten_glUniformMatrix4fv": _emscripten_glUniformMatrix4fv,
  "emscripten_glUseProgram": _emscripten_glUseProgram,
  "emscripten_glValidateProgram": _emscripten_glValidateProgram,
  "emscripten_glVertexAttrib1f": _emscripten_glVertexAttrib1f,
  "emscripten_glVertexAttrib1fv": _emscripten_glVertexAttrib1fv,
  "emscripten_glVertexAttrib2f": _emscripten_glVertexAttrib2f,
  "emscripten_glVertexAttrib2fv": _emscripten_glVertexAttrib2fv,
  "emscripten_glVertexAttrib3f": _emscripten_glVertexAttrib3f,
  "emscripten_glVertexAttrib3fv": _emscripten_glVertexAttrib3fv,
  "emscripten_glVertexAttrib4f": _emscripten_glVertexAttrib4f,
  "emscripten_glVertexAttrib4fv": _emscripten_glVertexAttrib4fv,
  "emscripten_glVertexAttribDivisorANGLE": _emscripten_glVertexAttribDivisorANGLE,
  "emscripten_glVertexAttribPointer": _emscripten_glVertexAttribPointer,
  "emscripten_glViewport": _emscripten_glViewport,
  "emscripten_has_asyncify": _emscripten_has_asyncify,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_request_fullscreen_strategy": _emscripten_request_fullscreen_strategy,
  "emscripten_request_pointerlock": _emscripten_request_pointerlock,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "emscripten_sample_gamepad_data": _emscripten_sample_gamepad_data,
  "emscripten_set_beforeunload_callback_on_thread": _emscripten_set_beforeunload_callback_on_thread,
  "emscripten_set_blur_callback_on_thread": _emscripten_set_blur_callback_on_thread,
  "emscripten_set_canvas_element_size": _emscripten_set_canvas_element_size,
  "emscripten_set_element_css_size": _emscripten_set_element_css_size,
  "emscripten_set_focus_callback_on_thread": _emscripten_set_focus_callback_on_thread,
  "emscripten_set_fullscreenchange_callback_on_thread": _emscripten_set_fullscreenchange_callback_on_thread,
  "emscripten_set_gamepadconnected_callback_on_thread": _emscripten_set_gamepadconnected_callback_on_thread,
  "emscripten_set_gamepaddisconnected_callback_on_thread": _emscripten_set_gamepaddisconnected_callback_on_thread,
  "emscripten_set_keydown_callback_on_thread": _emscripten_set_keydown_callback_on_thread,
  "emscripten_set_keypress_callback_on_thread": _emscripten_set_keypress_callback_on_thread,
  "emscripten_set_keyup_callback_on_thread": _emscripten_set_keyup_callback_on_thread,
  "emscripten_set_main_loop": _emscripten_set_main_loop,
  "emscripten_set_mousedown_callback_on_thread": _emscripten_set_mousedown_callback_on_thread,
  "emscripten_set_mouseenter_callback_on_thread": _emscripten_set_mouseenter_callback_on_thread,
  "emscripten_set_mouseleave_callback_on_thread": _emscripten_set_mouseleave_callback_on_thread,
  "emscripten_set_mousemove_callback_on_thread": _emscripten_set_mousemove_callback_on_thread,
  "emscripten_set_mouseup_callback_on_thread": _emscripten_set_mouseup_callback_on_thread,
  "emscripten_set_pointerlockchange_callback_on_thread": _emscripten_set_pointerlockchange_callback_on_thread,
  "emscripten_set_resize_callback_on_thread": _emscripten_set_resize_callback_on_thread,
  "emscripten_set_touchcancel_callback_on_thread": _emscripten_set_touchcancel_callback_on_thread,
  "emscripten_set_touchend_callback_on_thread": _emscripten_set_touchend_callback_on_thread,
  "emscripten_set_touchmove_callback_on_thread": _emscripten_set_touchmove_callback_on_thread,
  "emscripten_set_touchstart_callback_on_thread": _emscripten_set_touchstart_callback_on_thread,
  "emscripten_set_visibilitychange_callback_on_thread": _emscripten_set_visibilitychange_callback_on_thread,
  "emscripten_set_wheel_callback_on_thread": _emscripten_set_wheel_callback_on_thread,
  "emscripten_set_window_title": _emscripten_set_window_title,
  "emscripten_sleep": _emscripten_sleep,
  "environ_get": _environ_get,
  "environ_sizes_get": _environ_sizes_get,
  "exit": _exit,
  "fd_close": _fd_close,
  "fd_fdstat_get": _fd_fdstat_get,
  "fd_read": _fd_read,
  "fd_seek": _fd_seek,
  "fd_sync": _fd_sync,
  "fd_write": _fd_write,
  "getaddrinfo": _getaddrinfo,
  "getcontext": _getcontext,
  "getdtablesize": _getdtablesize,
  "gethostbyname": _gethostbyname,
  "gethostbyname_r": _gethostbyname_r,
  "getloadavg": _getloadavg,
  "getnameinfo": _getnameinfo,
  "invoke_i": invoke_i,
  "invoke_ii": invoke_ii,
  "invoke_iii": invoke_iii,
  "invoke_iiii": invoke_iiii,
  "invoke_iiiii": invoke_iiiii,
  "invoke_iiiiii": invoke_iiiiii,
  "invoke_iiiiiii": invoke_iiiiiii,
  "invoke_iiiiiiiiii": invoke_iiiiiiiiii,
  "invoke_jiji": invoke_jiji,
  "invoke_v": invoke_v,
  "invoke_vi": invoke_vi,
  "invoke_vii": invoke_vii,
  "invoke_viidii": invoke_viidii,
  "invoke_viii": invoke_viii,
  "invoke_viiii": invoke_viiii,
  "invoke_viiiii": invoke_viiiii,
  "invoke_viiiiii": invoke_viiiiii,
  "makecontext": _makecontext,
  "proc_exit": _proc_exit,
  "strftime": _strftime,
  "strptime": _strptime,
  "swapcontext": _swapcontext
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = function() {
  return (___wasm_call_ctors = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _malloc = function() {
  return (_malloc = Module["asm"]["malloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _saveSetjmp = function() {
  return (_saveSetjmp = Module["asm"]["saveSetjmp"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _free = function() {
  return (_free = Module["asm"]["free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _phpw_flush = Module["_phpw_flush"] = function() {
  return (_phpw_flush = Module["_phpw_flush"] = Module["asm"]["phpw_flush"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _phpw_exec = Module["_phpw_exec"] = function() {
  return (_phpw_exec = Module["_phpw_exec"] = Module["asm"]["phpw_exec"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _setenv = Module["_setenv"] = function() {
  return (_setenv = Module["_setenv"] = Module["asm"]["setenv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _php_embed_init = Module["_php_embed_init"] = function() {
  return (_php_embed_init = Module["_php_embed_init"] = Module["asm"]["php_embed_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _zend_eval_string = Module["_zend_eval_string"] = function() {
  return (_zend_eval_string = Module["_zend_eval_string"] = Module["asm"]["zend_eval_string"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _php_embed_shutdown = Module["_php_embed_shutdown"] = function() {
  return (_php_embed_shutdown = Module["_php_embed_shutdown"] = Module["asm"]["php_embed_shutdown"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _phpw_run = Module["_phpw_run"] = function() {
  return (_phpw_run = Module["_phpw_run"] = Module["asm"]["phpw_run"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _phpw = Module["_phpw"] = function() {
  return (_phpw = Module["_phpw"] = Module["asm"]["phpw"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _memcpy = function() {
  return (_memcpy = Module["asm"]["memcpy"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___errno_location = function() {
  return (___errno_location = Module["asm"]["__errno_location"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _chdir = Module["_chdir"] = function() {
  return (_chdir = Module["_chdir"] = Module["asm"]["chdir"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _htonl = function() {
  return (_htonl = Module["asm"]["htonl"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _ntohs = function() {
  return (_ntohs = Module["asm"]["ntohs"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _htons = function() {
  return (_htons = Module["asm"]["htons"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _fileno = function() {
  return (_fileno = Module["asm"]["fileno"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___dl_seterr = function() {
  return (___dl_seterr = Module["asm"]["__dl_seterr"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_builtin_memalign = function() {
  return (_emscripten_builtin_memalign = Module["asm"]["emscripten_builtin_memalign"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __emscripten_timeout = function() {
  return (__emscripten_timeout = Module["asm"]["_emscripten_timeout"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _setThrew = function() {
  return (_setThrew = Module["asm"]["setThrew"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackSave = function() {
  return (stackSave = Module["asm"]["stackSave"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackRestore = function() {
  return (stackRestore = Module["asm"]["stackRestore"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackAlloc = function() {
  return (stackAlloc = Module["asm"]["stackAlloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vij = Module["dynCall_vij"] = function() {
  return (dynCall_vij = Module["dynCall_vij"] = Module["asm"]["dynCall_vij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ji = Module["dynCall_ji"] = function() {
  return (dynCall_ji = Module["dynCall_ji"] = Module["asm"]["dynCall_ji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = function() {
  return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
};


function invoke_iii(index,a1,a2) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_v(index) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)();
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_i(index) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)();
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_ii(index,a1) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viidii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_jiji(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_jiji(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}


// include: postamble.js
// === Auto-generated postamble setup entry stuff ===

Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createDevice"] = FS.createDevice;
Module["FS_unlink"] = FS.unlink;
Module["ccall"] = ccall;
Module["UTF8ToString"] = UTF8ToString;
Module["lengthBytesUTF8"] = lengthBytesUTF8;
Module["FS"] = FS;
Module["LZ4"] = LZ4;


var calledRun;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function run() {

  if (runDependencies > 0) {
    return;
  }

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();


// end include: postamble.js


  return createPhpModule.ready
}

);
})();
export default createPhpModule;