/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./pkg/index_bg.wasm": function() {
/******/ 			return {
/******/ 				"./index_bg.js": {
/******/ 					"__wbindgen_json_parse": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_json_parse"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_json_serialize": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_json_serialize"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_e8f84259147dce74": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Window_e8f84259147dce74"](p0i32);
/******/ 					},
/******/ 					"__wbg_fetch_4875ac39fd69c38e": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_fetch_4875ac39fd69c38e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newwithu8arraysequenceandoptions_7554a09fdb8489c7": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_newwithu8arraysequenceandoptions_7554a09fdb8489c7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Response_df90672bc1607490": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Response_df90672bc1607490"](p0i32);
/******/ 					},
/******/ 					"__wbg_url_9756f3d19ec8a7d0": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_url_9756f3d19ec8a7d0"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_status_647fdfe1d68fa680": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_status_647fdfe1d68fa680"](p0i32);
/******/ 					},
/******/ 					"__wbg_headers_92ef5ede430593c6": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_headers_92ef5ede430593c6"](p0i32);
/******/ 					},
/******/ 					"__wbg_text_e038bae70fd539db": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_text_e038bae70fd539db"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithstrandinit_b18f1bd8ba76e760": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_newwithstrandinit_b18f1bd8ba76e760"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_89c3992553a6e50c": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_89c3992553a6e50c"]();
/******/ 					},
/******/ 					"__wbg_append_2a240bf40014fc2a": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_append_2a240bf40014fc2a"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_append_33e50ddc5b32a00b": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_append_33e50ddc5b32a00b"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32);
/******/ 					},
/******/ 					"__wbg_new_0bb65801d20e67fd": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_0bb65801d20e67fd"]();
/******/ 					},
/******/ 					"__wbg_append_9a6c7acb5f3c9ac3": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_append_9a6c7acb5f3c9ac3"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_e2fdfe2af14a2323": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_newnoargs_e2fdfe2af14a2323"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_e9f0ce4da840ab94": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_call_e9f0ce4da840ab94"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_0dad7db75ec90ae7": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_call_0dad7db75ec90ae7"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_next_610093e8f95067a4": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_next_610093e8f95067a4"](p0i32);
/******/ 					},
/******/ 					"__wbg_next_ff567d625ac44e49": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_next_ff567d625ac44e49"](p0i32);
/******/ 					},
/******/ 					"__wbg_done_deb5f896b3ea14eb": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_done_deb5f896b3ea14eb"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_5b6409ce10298b82": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_value_5b6409ce10298b82"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_8172f4fed77fdb7c": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_8172f4fed77fdb7c"]();
/******/ 					},
/******/ 					"__wbg_iterator_fe2907a0b53cd987": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_iterator_fe2907a0b53cd987"]();
/******/ 					},
/******/ 					"__wbg_new_7039bf8b99f049e1": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_7039bf8b99f049e1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_4df26938859b92e3": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_resolve_4df26938859b92e3"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_ffb6e71f7a6735ad": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_then_ffb6e71f7a6735ad"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_021fcdc7f0350b58": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_then_021fcdc7f0350b58"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_globalThis_8ebfea75c2dd63ee": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_globalThis_8ebfea75c2dd63ee"]();
/******/ 					},
/******/ 					"__wbg_self_179e8c2a5a4c73a3": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_self_179e8c2a5a4c73a3"]();
/******/ 					},
/******/ 					"__wbg_window_492cfe63a6e41dfa": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_window_492cfe63a6e41dfa"]();
/******/ 					},
/******/ 					"__wbg_global_62ea2619f58bf94d": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_global_62ea2619f58bf94d"]();
/******/ 					},
/******/ 					"__wbg_new_85d8a1fc4384acef": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_85d8a1fc4384acef"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_a048d126789a272b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_newwithbyteoffsetandlength_a048d126789a272b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_buffer_88f603259d7a7b82": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_buffer_88f603259d7a7b82"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_2e96a823c1c5a5bd": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_2e96a823c1c5a5bd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_set_afe54b1eeb1aa77c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_set_afe54b1eeb1aa77c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper5552": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_closure_wrapper5552"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["./pkg/index_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./pkg/index_bg.wasm":"a5a1ef1c7b9e4d0a85b8"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: crawl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"crawl\", function() { return crawl; });\nconst url = 'https://rolisz.ro/';\r\n\r\ncrawl(url);\r\n\r\n// const rust = import('./pkg')\r\n//     .then(async (m) =>\r\n//         fetch(`https://cors-anywhere.herokuapp.com/${url}`).then(async (res) => {\r\n//             let response = await res.text();\r\n//             console.log(response);\r\n\r\n//             console.log(await m.get_links(response, url));\r\n//         })\r\n//     )\r\n//     .catch((e) => console.log(e));\r\n\r\nfunction crawl(url) {\r\n    const rust = Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pkg */ \"./pkg/index.js\"))\r\n        .then(async (m) => console.log(await m.crawl(url)))\r\n        .catch((e) => console.log(e));\r\n}\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });