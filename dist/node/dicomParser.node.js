/*! dicom-parser - 1.8.0 - 2018-04-26 | (c) 2017 Chris Hafey | https://github.com/cornerstonejs/dicomParser */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dicom-parser", [], factory);
	else if(typeof exports === 'object')
		exports["dicom-parser"] = factory();
	else
		root["dicomParser"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webpack/buildin/module.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./alloc.js":
/*!******************!*\
  !*** ./alloc.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = alloc;
/**
 * Creates a new byteArray of the same type (Uint8Array or Buffer) of the specified length.
 * @param byteArray the underlying byteArray (either Uint8Array or Buffer)
 * @param length number of bytes of the Byte Array
 * @returns {object} Uint8Array or Buffer depending on the type of byteArray
 */
function alloc(byteArray, length) {
  if (typeof Buffer !== 'undefined' && byteArray instanceof Buffer) {
    return Buffer.alloc(length);
  } else if (byteArray instanceof Uint8Array) {
    return new Uint8Array(length);
  }
  throw 'dicomParser.alloc: unknown type for byteArray';
}

/***/ }),

/***/ "./bigEndianByteArrayParser.js":
/*!*************************************!*\
  !*** ./bigEndianByteArrayParser.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Internal helper functions for parsing different types from a big-endian byte array
 */
exports.default = {

  /**
     *
     * Parses an unsigned int 16 from a big-endian byte array
     *
     * @param byteArray the byte array to read from
     * @param position the position in the byte array to read from
     * @returns {*} the parsed unsigned int 16
     * @throws error if buffer overread would occur
     * @access private
     */
  readUint16: function readUint16(byteArray, position) {
    if (position < 0) {
      throw 'bigEndianByteArrayParser.readUint16: position cannot be less than 0';
    }
    if (position + 2 > byteArray.length) {
      throw 'bigEndianByteArrayParser.readUint16: attempt to read past end of buffer';
    }

    return (byteArray[position] << 8) + byteArray[position + 1];
  },


  /**
     *
     * Parses a signed int 16 from a big-endian byte array
     *
     * @param byteArray the byte array to read from
     * @param position the position in the byte array to read from
     * @returns {*} the parsed signed int 16
     * @throws error if buffer overread would occur
     * @access private
     */
  readInt16: function readInt16(byteArray, position) {
    if (position < 0) {
      throw 'bigEndianByteArrayParser.readInt16: position cannot be less than 0';
    }
    if (position + 2 > byteArray.length) {
      throw 'bigEndianByteArrayParser.readInt16: attempt to read past end of buffer';
    }
    var int16 = (byteArray[position] << 8) + byteArray[position + 1];
    // fix sign

    if (int16 & 0x8000) {
      int16 = int16 - 0xFFFF - 1;
    }

    return int16;
  },


  /**
     * Parses an unsigned int 32 from a big-endian byte array
     *
     * @param byteArray the byte array to read from
     * @param position the position in the byte array to read from
     * @returns {*} the parsed unsigned int 32
     * @throws error if buffer overread would occur
     * @access private
     */
  readUint32: function readUint32(byteArray, position) {
    if (position < 0) {
      throw 'bigEndianByteArrayParser.readUint32: position cannot be less than 0';
    }

    if (position + 4 > byteArray.length) {
      throw 'bigEndianByteArrayParser.readUint32: attempt to read past end of buffer';
    }

    var uint32 = 256 * (256 * (256 * byteArray[position] + byteArray[position + 1]) + byteArray[position + 2]) + byteArray[position + 3];

    return uint32;
  },


  /**
     * Parses a signed int 32 from a big-endian byte array
     *
     * @param byteArray the byte array to read from
     * @param position the position in the byte array to read from
     * @returns {*} the parsed signed int 32
     * @throws error if buffer overread would occur
     * @access private
     */
  readInt32: function readInt32(byteArray, position) {
    if (position < 0) {
      throw 'bigEndianByteArrayParser.readInt32: position cannot be less than 0';
    }

    if (position + 4 > byteArray.length) {
      throw 'bigEndianByteArrayParser.readInt32: attempt to read past end of buffer';
    }

    var int32 = (byteArray[position] << 24) + (byteArray[position + 1] << 16) + (byteArray[position + 2] << 8) + byteArray[position + 3];

    return int32;
  },


  /**
     * Parses 32-bit float from a big-endian byte array
     *
     * @param byteArray the byte array to read from
     * @param position the position in the byte array to read from
     * @returns {*} the parsed 32-bit float
     * @throws error if buffer overread would occur
     * @access private
     */
  readFloat: function readFloat(byteArray, position) {
    if (position < 0) {
      throw 'bigEndianByteArrayParser.readFloat: position cannot be less than 0';
    }

    if (position + 4 > byteArray.length) {
      throw 'bigEndianByteArrayParser.readFloat: attempt to read past end of buffer';
    }

    // I am sure there is a better way than this but this should be safe
    var byteArrayForParsingFloat = new Uint8Array(4);

    byteArrayForParsingFloat[3] = byteArray[position];
    byteArrayForParsingFloat[2] = byteArray[position + 1];
    byteArrayForParsingFloat[1] = byteArray[position + 2];
    byteArrayForParsingFloat[0] = byteArray[position + 3];
    var floatArray = new Float32Array(byteArrayForParsingFloat.buffer);

    return floatArray[0];
  },


  /**
     * Parses 64-bit float from a big-endian byte array
     *
     * @param byteArray the byte array to read from
     * @param position the position in the byte array to read from
     * @returns {*} the parsed 64-bit float
     * @throws error if buffer overread would occur
     * @access private
     */
  readDouble: function readDouble(byteArray, position) {
    if (position < 0) {
      throw 'bigEndianByteArrayParser.readDouble: position cannot be less than 0';
    }

    if (position + 8 > byteArray.length) {
      throw 'bigEndianByteArrayParser.readDouble: attempt to read past end of buffer';
    }

    // I am sure there is a better way than this but this should be safe
    var byteArrayForParsingFloat = new Uint8Array(8);

    byteArrayForParsingFloat[7] = byteArray[position];
    byteArrayForParsingFloat[6] = byteArray[position + 1];
    byteArrayForParsingFloat[5] = byteArray[position + 2];
    byteArrayForParsingFloat[4] = byteArray[position + 3];
    byteArrayForParsingFloat[3] = byteArray[position + 4];
    byteArrayForParsingFloat[2] = byteArray[position + 5];
    byteArrayForParsingFloat[1] = byteArray[position + 6];
    byteArrayForParsingFloat[0] = byteArray[position + 7];
    var floatArray = new Float64Array(byteArrayForParsingFloat.buffer);

    return floatArray[0];
  }
};

/***/ }),

/***/ "./byteArrayParser.js":
/*!****************************!*\
  !*** ./byteArrayParser.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFixedString = readFixedString;
/**
 * Internal helper functions common to parsing byte arrays of any type
 */

/**
 * Reads a string of 8-bit characters from an array of bytes and advances
 * the position by length bytes.  A null terminator will end the string
 * but will not effect advancement of the position.  Trailing and leading
 * spaces are preserved (not trimmed)
 * @param byteArray the byteArray to read from
 * @param position the position in the byte array to read from
 * @param length the maximum number of bytes to parse
 * @returns {string} the parsed string
 * @throws error if buffer overread would occur
 * @access private
 */
function readFixedString(byteArray, position, length) {
  if (length < 0) {
    throw 'dicomParser.readFixedString - length cannot be less than 0';
  }

  if (position + length > byteArray.length) {
    throw 'dicomParser.readFixedString: attempt to read past end of buffer';
  }

  var result = '';
  var byte;

  for (var i = 0; i < length; i++) {
    byte = byteArray[position + i];
    if (byte === 0) {
      position += length;

      return result;
    }
    result += String.fromCharCode(byte);
  }

  return result;
}

/***/ }),

/***/ "./byteStream.js":
/*!***********************!*\
  !*** ./byteStream.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sharedCopy = __webpack_require__(/*! ./sharedCopy.js */ "./sharedCopy.js");

var _sharedCopy2 = _interopRequireDefault(_sharedCopy);

var _byteArrayParser = __webpack_require__(/*! ./byteArrayParser.js */ "./byteArrayParser.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * Internal helper class to assist with parsing. Supports reading from a byte
 * stream contained in a Uint8Array.  Example usage:
 *
 *  var byteArray = new Uint8Array(32);
 *  var byteStream = new dicomParser.ByteStream(dicomParser.littleEndianByteArrayParser, byteArray);
 *
 * */

/**
 * Constructor for ByteStream objects.
 * @param byteArrayParser a parser for parsing the byte array
 * @param byteArray a Uint8Array containing the byte stream
 * @param position (optional) the position to start reading from.  0 if not specified
 * @constructor
 * @throws will throw an error if the byteArrayParser parameter is not present
 * @throws will throw an error if the byteArray parameter is not present or invalid
 * @throws will throw an error if the position parameter is not inside the byte array
 */
var ByteStream = function () {
  function ByteStream(byteArrayParser, byteArray, position) {
    _classCallCheck(this, ByteStream);

    if (byteArrayParser === undefined) {
      throw 'dicomParser.ByteStream: missing required parameter \'byteArrayParser\'';
    }
    if (byteArray === undefined) {
      throw 'dicomParser.ByteStream: missing required parameter \'byteArray\'';
    }
    if (byteArray instanceof Uint8Array === false && byteArray instanceof Buffer === false) {
      throw 'dicomParser.ByteStream: parameter byteArray is not of type Uint8Array or Buffer';
    }
    if (position < 0) {
      throw 'dicomParser.ByteStream: parameter \'position\' cannot be less than 0';
    }
    if (position >= byteArray.length) {
      throw 'dicomParser.ByteStream: parameter \'position\' cannot be greater than or equal to \'byteArray\' length';
    }
    this.byteArrayParser = byteArrayParser;
    this.byteArray = byteArray;
    this.position = position ? position : 0;
    this.warnings = []; // array of string warnings encountered while parsing
  }

  /**
     * Safely seeks through the byte stream.  Will throw an exception if an attempt
     * is made to seek outside of the byte array.
     * @param offset the number of bytes to add to the position
     * @throws error if seek would cause position to be outside of the byteArray
     */


  _createClass(ByteStream, [{
    key: 'seek',
    value: function seek(offset) {
      if (this.position + offset < 0) {
        throw 'dicomParser.ByteStream.prototype.seek: cannot seek to position < 0';
      }
      this.position += offset;
    }

    /**
       * Returns a new ByteStream object from the current position and of the requested number of bytes
       * @param numBytes the length of the byte array for the ByteStream to contain
       * @returns {dicomParser.ByteStream}
       * @throws error if buffer overread would occur
       */

  }, {
    key: 'readByteStream',
    value: function readByteStream(numBytes) {
      if (this.position + numBytes > this.byteArray.length) {
        throw 'dicomParser.ByteStream.prototype.readByteStream: readByteStream - buffer overread';
      }
      var byteArrayView = (0, _sharedCopy2.default)(this.byteArray, this.position, numBytes);

      this.position += numBytes;

      return new ByteStream(this.byteArrayParser, byteArrayView);
    }

    /**
       *
       * Parses an unsigned int 16 from a byte array and advances
       * the position by 2 bytes
       *
       * @returns {*} the parsed unsigned int 16
       * @throws error if buffer overread would occur
       */

  }, {
    key: 'readUint16',
    value: function readUint16() {
      var result = this.byteArrayParser.readUint16(this.byteArray, this.position);

      this.position += 2;

      return result;
    }

    /**
       * Parses an unsigned int 32 from a byte array and advances
       * the position by 2 bytes
       *
       * @returns {*} the parse unsigned int 32
       * @throws error if buffer overread would occur
       */

  }, {
    key: 'readUint32',
    value: function readUint32() {
      var result = this.byteArrayParser.readUint32(this.byteArray, this.position);

      this.position += 4;

      return result;
    }

    /**
       * Reads a string of 8-bit characters from an array of bytes and advances
       * the position by length bytes.  A null terminator will end the string
       * but will not effect advancement of the position.
       * @param length the maximum number of bytes to parse
       * @returns {string} the parsed string
       * @throws error if buffer overread would occur
       */

  }, {
    key: 'readFixedString',
    value: function readFixedString(length) {
      var result = (0, _byteArrayParser.readFixedString)(this.byteArray, this.position, length);

      this.position += length;

      return result;
    }
  }]);

  return ByteStream;
}();

exports.default = ByteStream;

/***/ }),

/***/ "./dataSet.js":
/*!********************!*\
  !*** ./dataSet.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _byteArrayParser = __webpack_require__(/*! ./byteArrayParser.js */ "./byteArrayParser.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * The DataSet class encapsulates a collection of DICOM Elements and provides various functions
 * to access the data in those elements
 *
 * Rules for handling padded spaces:
 * DS = Strip leading and trailing spaces
 * DT = Strip trailing spaces
 * IS = Strip leading and trailing spaces
 * PN = Strip trailing spaces
 * TM = Strip trailing spaces
 * AE = Strip leading and trailing spaces
 * CS = Strip leading and trailing spaces
 * SH = Strip leading and trailing spaces
 * LO = Strip leading and trailing spaces
 * LT = Strip trailing spaces
 * ST = Strip trailing spaces
 * UT = Strip trailing spaces
 *
 */

function getByteArrayParser(element, defaultParser) {
  return element.parser !== undefined ? element.parser : defaultParser;
}

/**
 * Constructs a new DataSet given byteArray and collection of elements
 * @param byteArrayParser
 * @param byteArray
 * @param elements
 * @constructor
 */

var DataSet = function () {
  function DataSet(byteArrayParser, byteArray, elements) {
    _classCallCheck(this, DataSet);

    this.byteArrayParser = byteArrayParser;
    this.byteArray = byteArray;
    this.elements = elements;
  }

  /**
     * Finds the element for tag and returns an unsigned int 16 if it exists and has data
     * @param tag The DICOM tag in the format xGGGGEEEE
     * @param index the index of the value in a multivalued element.  Default is index 0 if not supplied
     * @returns {*} unsigned int 16 or undefined if the attribute is not present or has data of length 0
     */


  _createClass(DataSet, [{
    key: 'uint16',
    value: function uint16(tag, index) {
      var element = this.elements[tag];

      index = index !== undefined ? index : 0;
      if (element && element.length !== 0) {
        return getByteArrayParser(element, this.byteArrayParser).readUint16(this.byteArray, element.dataOffset + index * 2);
      }

      return undefined;
    }

    /**
       * Finds the element for tag and returns an signed int 16 if it exists and has data
       * @param tag The DICOM tag in the format xGGGGEEEE
       * @param index the index of the value in a multivalued element.  Default is index 0 if not supplied
       * @returns {*} signed int 16 or undefined if the attribute is not present or has data of length 0
       */

  }, {
    key: 'int16',
    value: function int16(tag, index) {
      var element = this.elements[tag];

      index = index !== undefined ? index : 0;
      if (element && element.length !== 0) {
        return getByteArrayParser(element, this.byteArrayParser).readInt16(this.byteArray, element.dataOffset + index * 2);
      }

      return undefined;
    }

    /**
       * Finds the element for tag and returns an unsigned int 32 if it exists and has data
       * @param tag The DICOM tag in the format xGGGGEEEE
       * @param index the index of the value in a multivalued element.  Default is index 0 if not supplied
       * @returns {*} unsigned int 32 or undefined if the attribute is not present or has data of length 0
       */

  }, {
    key: 'uint32',
    value: function uint32(tag, index) {
      var element = this.elements[tag];

      index = index !== undefined ? index : 0;
      if (element && element.length !== 0) {
        return getByteArrayParser(element, this.byteArrayParser).readUint32(this.byteArray, element.dataOffset + index * 4);
      }

      return undefined;
    }

    /**
       * Finds the element for tag and returns an signed int 32 if it exists and has data
       * @param tag The DICOM tag in the format xGGGGEEEE
       * @param index the index of the value in a multivalued element.  Default is index 0 if not supplied
       * @returns {*} signed int 32 or undefined if the attribute is not present or has data of length 0
       */

  }, {
    key: 'int32',
    value: function int32(tag, index) {
      var element = this.elements[tag];

      index = index !== undefined ? index : 0;
      if (element && element.length !== 0) {
        return getByteArrayParser(element, this.byteArrayParser).readInt32(this.byteArray, element.dataOffset + index * 4);
      }

      return undefined;
    }

    /**
       * Finds the element for tag and returns a 32 bit floating point number (VR=FL) if it exists and has data
       * @param tag The DICOM tag in the format xGGGGEEEE
       * @param index the index of the value in a multivalued element.  Default is index 0 if not supplied
       * @returns {*} float or undefined if the attribute is not present or has data of length 0
       */

  }, {
    key: 'float',
    value: function float(tag, index) {
      var element = this.elements[tag];

      index = index !== undefined ? index : 0;
      if (element && element.length !== 0) {
        return getByteArrayParser(element, this.byteArrayParser).readFloat(this.byteArray, element.dataOffset + index * 4);
      }

      return undefined;
    }

    /**
       * Finds the element for tag and returns a 64 bit floating point number (VR=FD) if it exists and has data
       * @param tag The DICOM tag in the format xGGGGEEEE
       * @param index the index of the value in a multivalued element.  Default is index 0 if not supplied
       * @returns {*} float or undefined if the attribute is not present or doesn't has data of length 0
       */

  }, {
    key: 'double',
    value: function double(tag, index) {
      var element = this.elements[tag];

      index = index !== undefined ? index : 0;
      if (element && element.length !== 0) {
        return getByteArrayParser(element, this.byteArrayParser).readDouble(this.byteArray, element.dataOffset + index * 8);
      }

      return undefined;
    }

    /**
       * Returns the number of string values for the element
       * @param tag The DICOM tag in the format xGGGGEEEE
       * @returns {*} the number of string values or undefined if the attribute is not present or has zero length data
       */

  }, {
    key: 'numStringValues',
    value: function numStringValues(tag) {
      var element = this.elements[tag];

      if (element && element.length > 0) {
        var fixedString = (0, _byteArrayParser.readFixedString)(this.byteArray, element.dataOffset, element.length);
        var numMatching = fixedString.match(/\\/g);

        if (numMatching === null) {
          return 1;
        }

        return numMatching.length + 1;
      }

      return undefined;
    }

    /**
       * Returns a string for the element.  If index is provided, the element is assumed to be
       * multi-valued and will return the component specified by index.  Undefined is returned
       * if there is no component with the specified index, the element does not exist or is zero length.
       *
       * Use this function for VR types of AE, CS, SH and LO
       *
       * @param tag The DICOM tag in the format xGGGGEEEE
       * @param index the index of the desired value in a multi valued string or undefined for the entire string
       * @returns {*}
       */

  }, {
    key: 'string',
    value: function string(tag, index) {
      var element = this.elements[tag];

      if (element && element.length > 0) {
        var fixedString = (0, _byteArrayParser.readFixedString)(this.byteArray, element.dataOffset, element.length);

        if (index >= 0) {
          var values = fixedString.split('\\');
          // trim trailing spaces

          return values[index].trim();
        }
        // trim trailing spaces
        return fixedString.trim();
      }

      return undefined;
    }

    /**
       * Returns a string with the leading spaces preserved and trailing spaces removed.
       *
       * Use this function to access data for VRs of type UT, ST and LT
       *
       * @param tag
       * @param index
       * @returns {*}
       */

  }, {
    key: 'text',
    value: function text(tag, index) {
      var element = this.elements[tag];

      if (element && element.length > 0) {
        var fixedString = (0, _byteArrayParser.readFixedString)(this.byteArray, element.dataOffset, element.length);

        if (index >= 0) {
          var values = fixedString.split('\\');

          return values[index].replace(/ +$/, '');
        }

        return fixedString.replace(/ +$/, '');
      }

      return undefined;
    }

    /**
       * Parses a string to a float for the specified index in a multi-valued element.  If index is not specified,
       * the first value in a multi-valued VR will be parsed if present.
       * @param tag The DICOM tag in the format xGGGGEEEE
       * @param index the index of the desired value in a multi valued string or undefined for the first value
       * @returns {*} a floating point number or undefined if not present or data not long enough
       */

  }, {
    key: 'floatString',
    value: function floatString(tag, index) {
      var element = this.elements[tag];

      if (element && element.length > 0) {
        index = index !== undefined ? index : 0;
        var value = this.string(tag, index);

        if (value !== undefined) {
          return parseFloat(value);
        }
      }

      return undefined;
    }

    /**
       * Parses a string to an integer for the specified index in a multi-valued element.  If index is not specified,
       * the first value in a multi-valued VR will be parsed if present.
       * @param tag The DICOM tag in the format xGGGGEEEE
       * @param index the index of the desired value in a multi valued string or undefined for the first value
       * @returns {*} an integer or undefined if not present or data not long enough
       */

  }, {
    key: 'intString',
    value: function intString(tag, index) {
      var element = this.elements[tag];

      if (element && element.length > 0) {
        index = index !== undefined ? index : 0;
        var value = this.string(tag, index);

        if (value !== undefined) {
          return parseInt(value);
        }
      }

      return undefined;
    }

    /**
       * Parses an element tag according to the 'AT' VR definition (VR=AT).
       * @param {String} A DICOM tag with in the format xGGGGEEEE.
       * @returns {String} A string representation of a data element tag or undefined if the field is not present or data is not long enough.
       */

  }, {
    key: 'attributeTag',
    value: function attributeTag(tag) {
      var element = this.elements[tag];

      if (element && element.length === 4) {
        var parser = getByteArrayParser(element, this.byteArrayParser).readUint16;
        var bytes = this.byteArray;
        var offset = element.dataOffset;

        return 'x' + ('00000000' + (parser(bytes, offset) * 256 * 256 + parser(bytes, offset + 2)).toString(16)).substr(-8);
      }

      return undefined;
    }
  }]);

  return DataSet;
}();

exports.default = DataSet;

/***/ }),

/***/ "./findAndSetUNElementLength.js":
/*!**************************************!*\
  !*** ./findAndSetUNElementLength.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findAndSetUNElementLength;
/**
 * Internal helper functions for parsing DICOM elements
 */

/**
 * reads from the byte stream until it finds the magic number for the Sequence Delimitation
 * Item item and then sets the length of the element
 * @param byteStream
 * @param element
 */
function findAndSetUNElementLength(byteStream, element) {
  if (byteStream === undefined) {
    throw 'dicomParser.findAndSetUNElementLength: missing required parameter \'byteStream\'';
  }

  // group, element, length
  var itemDelimitationItemLength = 8;
  var maxPosition = byteStream.byteArray.length - itemDelimitationItemLength;

  while (byteStream.position <= maxPosition) {
    var groupNumber = byteStream.readUint16();

    if (groupNumber === 0xfffe) {
      var elementNumber = byteStream.readUint16();

      if (elementNumber === 0xe0dd) {
        // NOTE: It would be better to also check for the length to be 0 as part of the check above
        // but we will just log a warning for now
        var itemDelimiterLength = byteStream.readUint32();

        if (itemDelimiterLength !== 0) {
          byteStream.warnings('encountered non zero length following item delimiter at position ' + (byteStream.position - 4) + ' while reading element of undefined length with tag ' + element.tag);
        }
        element.length = byteStream.position - element.dataOffset;

        return;
      }
    }
  }

  // No item delimitation item - silently set the length to the end
  // of the buffer and set the position past the end of the buffer
  element.length = byteStream.byteArray.length - element.dataOffset;
  byteStream.seek(byteStream.byteArray.length - byteStream.position);
}

/***/ }),

/***/ "./findEndOfEncapsulatedPixelData.js":
/*!*******************************************!*\
  !*** ./findEndOfEncapsulatedPixelData.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findEndOfEncapsulatedElement;

var _readTag = __webpack_require__(/*! ./readTag.js */ "./readTag.js");

var _readTag2 = _interopRequireDefault(_readTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal helper functions for parsing DICOM elements
 */

/**
 * Reads an encapsulated pixel data element and adds an array of fragments to the element
 * containing the offset and length of each fragment and any offsets from the basic offset
 * table
 * @param byteStream
 * @param element
 */
function findEndOfEncapsulatedElement(byteStream, element, warnings) {
  if (byteStream === undefined) {
    throw 'dicomParser.findEndOfEncapsulatedElement: missing required parameter \'byteStream\'';
  }

  if (element === undefined) {
    throw 'dicomParser.findEndOfEncapsulatedElement: missing required parameter \'element\'';
  }

  element.encapsulatedPixelData = true;
  element.basicOffsetTable = [];
  element.fragments = [];

  var basicOffsetTableItemTag = (0, _readTag2.default)(byteStream);

  if (basicOffsetTableItemTag !== 'xfffee000') {
    throw 'dicomParser.findEndOfEncapsulatedElement: basic offset table not found';
  }

  var basicOffsetTableItemlength = byteStream.readUint32();
  var numFragments = basicOffsetTableItemlength / 4;

  for (var i = 0; i < numFragments; i++) {
    var offset = byteStream.readUint32();

    element.basicOffsetTable.push(offset);
  }

  var baseOffset = byteStream.position;

  while (byteStream.position < byteStream.byteArray.length) {
    var tag = (0, _readTag2.default)(byteStream);
    var length = byteStream.readUint32();

    if (tag === 'xfffee0dd') {
      byteStream.seek(length);
      element.length = byteStream.position - element.dataOffset;

      return;
    } else if (tag === 'xfffee000') {
      element.fragments.push({
        offset: byteStream.position - baseOffset - 8,
        position: byteStream.position,
        length: length
      });
    } else {
      if (warnings) {
        warnings.push('unexpected tag ' + tag + ' while searching for end of pixel data element with undefined length');
      }

      if (length > byteStream.byteArray.length - byteStream.position) {
        // fix length
        length = byteStream.byteArray.length - byteStream.position;
      }

      element.fragments.push({
        offset: byteStream.position - baseOffset - 8,
        position: byteStream.position,
        length: length
      });

      byteStream.seek(length);
      element.length = byteStream.position - element.dataOffset;

      return;
    }

    byteStream.seek(length);
  }

  if (warnings) {
    warnings.push('pixel data element ' + element.tag + ' missing sequence delimiter tag xfffee0dd');
  }
}

/***/ }),

/***/ "./findItemDelimitationItem.js":
/*!*************************************!*\
  !*** ./findItemDelimitationItem.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findItemDelimitationItemAndSetElementLength;
/**
 * Internal helper functions for parsing DICOM elements
 */

/**
 * reads from the byte stream until it finds the magic numbers for the item delimitation item
 * and then sets the length of the element
 * @param byteStream
 * @param element
 */
function findItemDelimitationItemAndSetElementLength(byteStream, element) {
  if (byteStream === undefined) {
    throw 'dicomParser.readDicomElementImplicit: missing required parameter \'byteStream\'';
  }

  var itemDelimitationItemLength = 8; // group, element, length
  var maxPosition = byteStream.byteArray.length - itemDelimitationItemLength;

  while (byteStream.position <= maxPosition) {
    var groupNumber = byteStream.readUint16();

    if (groupNumber === 0xfffe) {
      var elementNumber = byteStream.readUint16();

      if (elementNumber === 0xe00d) {
        // NOTE: It would be better to also check for the length to be 0 as part of the check above
        // but we will just log a warning for now
        var itemDelimiterLength = byteStream.readUint32(); // the length

        if (itemDelimiterLength !== 0) {
          byteStream.warnings('encountered non zero length following item delimiter at position ' + (byteStream.position - 4) + ' while reading element of undefined length with tag ' + element.tag);
        }

        element.length = byteStream.position - element.dataOffset;

        return;
      }
    }
  }

  // No item delimitation item - silently set the length to the end of the buffer and set the position past the end of the buffer
  element.length = byteStream.byteArray.length - element.dataOffset;
  byteStream.seek(byteStream.byteArray.length - byteStream.position);
}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./util/index.js */ "./util/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});

var _parseDicomDataSet = __webpack_require__(/*! ./parseDicomDataSet.js */ "./parseDicomDataSet.js");

Object.keys(_parseDicomDataSet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _parseDicomDataSet[key];
    }
  });
});

var _byteArrayParser = __webpack_require__(/*! ./byteArrayParser.js */ "./byteArrayParser.js");

Object.keys(_byteArrayParser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _byteArrayParser[key];
    }
  });
});

var _alloc = __webpack_require__(/*! ./alloc.js */ "./alloc.js");

Object.defineProperty(exports, 'alloc', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_alloc).default;
  }
});

var _version = __webpack_require__(/*! ./version.js */ "./version.js");

Object.defineProperty(exports, 'version', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_version).default;
  }
});

var _bigEndianByteArrayParser = __webpack_require__(/*! ./bigEndianByteArrayParser.js */ "./bigEndianByteArrayParser.js");

Object.defineProperty(exports, 'bigEndianByteArrayParser', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bigEndianByteArrayParser).default;
  }
});

var _byteStream = __webpack_require__(/*! ./byteStream.js */ "./byteStream.js");

Object.defineProperty(exports, 'ByteStream', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_byteStream).default;
  }
});

var _sharedCopy = __webpack_require__(/*! ./sharedCopy.js */ "./sharedCopy.js");

Object.defineProperty(exports, 'sharedCopy', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sharedCopy).default;
  }
});

var _dataSet = __webpack_require__(/*! ./dataSet.js */ "./dataSet.js");

Object.defineProperty(exports, 'DataSet', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dataSet).default;
  }
});

var _findAndSetUNElementLength = __webpack_require__(/*! ./findAndSetUNElementLength.js */ "./findAndSetUNElementLength.js");

Object.defineProperty(exports, 'findAndSetUNElementLength', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_findAndSetUNElementLength).default;
  }
});

var _findEndOfEncapsulatedPixelData = __webpack_require__(/*! ./findEndOfEncapsulatedPixelData.js */ "./findEndOfEncapsulatedPixelData.js");

Object.defineProperty(exports, 'findEndOfEncapsulatedElement', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_findEndOfEncapsulatedPixelData).default;
  }
});

var _findItemDelimitationItem = __webpack_require__(/*! ./findItemDelimitationItem.js */ "./findItemDelimitationItem.js");

Object.defineProperty(exports, 'findItemDelimitationItemAndSetElementLength', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_findItemDelimitationItem).default;
  }
});

var _littleEndianByteArrayParser = __webpack_require__(/*! ./littleEndianByteArrayParser.js */ "./littleEndianByteArrayParser.js");

Object.defineProperty(exports, 'littleEndianByteArrayParser', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_littleEndianByteArrayParser).default;
  }
});

var _parseDicom = __webpack_require__(/*! ./parseDicom.js */ "./parseDicom.js");

Object.defineProperty(exports, 'parseDicom', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parseDicom).default;
  }
});

var _readDicomElementExplicit = __webpack_require__(/*! ./readDicomElementExplicit.js */ "./readDicomElementExplicit.js");

Object.defineProperty(exports, 'readDicomElementExplicit', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_readDicomElementExplicit).default;
  }
});

var _readDicomElementImplicit = __webpack_require__(/*! ./readDicomElementImplicit.js */ "./readDicomElementImplicit.js");

Object.defineProperty(exports, 'readDicomElementImplicit', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_readDicomElementImplicit).default;
  }
});

var _readEncapsulatedImageFrame = __webpack_require__(/*! ./readEncapsulatedImageFrame.js */ "./readEncapsulatedImageFrame.js");

Object.defineProperty(exports, 'readEncapsulatedImageFrame', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_readEncapsulatedImageFrame).default;
  }
});

var _readEncapsulatedPixelData = __webpack_require__(/*! ./readEncapsulatedPixelData.js */ "./readEncapsulatedPixelData.js");

Object.defineProperty(exports, 'readEncapsulatedPixelData', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_readEncapsulatedPixelData).default;
  }
});

var _readEncapsulatedPixelDataFromFragments = __webpack_require__(/*! ./readEncapsulatedPixelDataFromFragments.js */ "./readEncapsulatedPixelDataFromFragments.js");

Object.defineProperty(exports, 'readEncapsulatedPixelDataFromFragments', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_readEncapsulatedPixelDataFromFragments).default;
  }
});

var _readPart10Header = __webpack_require__(/*! ./readPart10Header.js */ "./readPart10Header.js");

Object.defineProperty(exports, 'readPart10Header', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_readPart10Header).default;
  }
});

var _readSequenceElementExplicit = __webpack_require__(/*! ./readSequenceElementExplicit.js */ "./readSequenceElementExplicit.js");

Object.defineProperty(exports, 'readSequenceItemsExplicit', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_readSequenceElementExplicit).default;
  }
});

var _readSequenceElementImplicit = __webpack_require__(/*! ./readSequenceElementImplicit.js */ "./readSequenceElementImplicit.js");

Object.defineProperty(exports, 'readSequenceItemsImplicit', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_readSequenceElementImplicit).default;
  }
});

var _readSequenceItem = __webpack_require__(/*! ./readSequenceItem.js */ "./readSequenceItem.js");

Object.defineProperty(exports, 'readSequenceItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_readSequenceItem).default;
  }
});

var _readTag = __webpack_require__(/*! ./readTag.js */ "./readTag.js");

Object.defineProperty(exports, 'readTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_readTag).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./littleEndianByteArrayParser.js":
/*!****************************************!*\
  !*** ./littleEndianByteArrayParser.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Internal helper functions for parsing different types from a little-endian byte array
 */

exports.default = {

  /**
   *
   * Parses an unsigned int 16 from a little-endian byte array
   *
   * @param byteArray the byte array to read from
   * @param position the position in the byte array to read from
   * @returns {*} the parsed unsigned int 16
   * @throws error if buffer overread would occur
   * @access private
   */
  readUint16: function readUint16(byteArray, position) {
    if (position < 0) {
      throw 'littleEndianByteArrayParser.readUint16: position cannot be less than 0';
    }

    if (position + 2 > byteArray.length) {
      throw 'littleEndianByteArrayParser.readUint16: attempt to read past end of buffer';
    }

    return byteArray[position] + byteArray[position + 1] * 256;
  },


  /**
   *
   * Parses a signed int 16 from a little-endian byte array
   *
   * @param byteArray the byte array to read from
   * @param position the position in the byte array to read from
   * @returns {*} the parsed signed int 16
   * @throws error if buffer overread would occur
   * @access private
   */
  readInt16: function readInt16(byteArray, position) {
    if (position < 0) {
      throw 'littleEndianByteArrayParser.readInt16: position cannot be less than 0';
    }
    if (position + 2 > byteArray.length) {
      throw 'littleEndianByteArrayParser.readInt16: attempt to read past end of buffer';
    }

    var int16 = byteArray[position] + (byteArray[position + 1] << 8);

    // fix sign
    if (int16 & 0x8000) {
      int16 = int16 - 0xFFFF - 1;
    }

    return int16;
  },


  /**
   * Parses an unsigned int 32 from a little-endian byte array
   *
   * @param byteArray the byte array to read from
   * @param position the position in the byte array to read from
   * @returns {*} the parsed unsigned int 32
   * @throws error if buffer overread would occur
   * @access private
   */
  readUint32: function readUint32(byteArray, position) {
    if (position < 0) {
      throw 'littleEndianByteArrayParser.readUint32: position cannot be less than 0';
    }

    if (position + 4 > byteArray.length) {
      throw 'littleEndianByteArrayParser.readUint32: attempt to read past end of buffer';
    }

    return byteArray[position] + byteArray[position + 1] * 256 + byteArray[position + 2] * 256 * 256 + byteArray[position + 3] * 256 * 256 * 256;
  },


  /**
  * Parses a signed int 32 from a little-endian byte array
  *
  * @param byteArray the byte array to read from
  * @param position the position in the byte array to read from
   * @returns {*} the parsed unsigned int 32
   * @throws error if buffer overread would occur
   * @access private
   */
  readInt32: function readInt32(byteArray, position) {
    if (position < 0) {
      throw 'littleEndianByteArrayParser.readInt32: position cannot be less than 0';
    }

    if (position + 4 > byteArray.length) {
      throw 'littleEndianByteArrayParser.readInt32: attempt to read past end of buffer';
    }

    return byteArray[position] + (byteArray[position + 1] << 8) + (byteArray[position + 2] << 16) + (byteArray[position + 3] << 24);
  },


  /**
   * Parses 32-bit float from a little-endian byte array
   *
   * @param byteArray the byte array to read from
   * @param position the position in the byte array to read from
   * @returns {*} the parsed 32-bit float
   * @throws error if buffer overread would occur
   * @access private
   */
  readFloat: function readFloat(byteArray, position) {
    if (position < 0) {
      throw 'littleEndianByteArrayParser.readFloat: position cannot be less than 0';
    }

    if (position + 4 > byteArray.length) {
      throw 'littleEndianByteArrayParser.readFloat: attempt to read past end of buffer';
    }

    // I am sure there is a better way than this but this should be safe
    var byteArrayForParsingFloat = new Uint8Array(4);

    byteArrayForParsingFloat[0] = byteArray[position];
    byteArrayForParsingFloat[1] = byteArray[position + 1];
    byteArrayForParsingFloat[2] = byteArray[position + 2];
    byteArrayForParsingFloat[3] = byteArray[position + 3];

    var floatArray = new Float32Array(byteArrayForParsingFloat.buffer);

    return floatArray[0];
  },


  /**
   * Parses 64-bit float from a little-endian byte array
   *
   * @param byteArray the byte array to read from
   * @param position the position in the byte array to read from
   * @returns {*} the parsed 64-bit float
   * @throws error if buffer overread would occur
   * @access private
   */
  readDouble: function readDouble(byteArray, position) {
    if (position < 0) {
      throw 'littleEndianByteArrayParser.readDouble: position cannot be less than 0';
    }

    if (position + 8 > byteArray.length) {
      throw 'littleEndianByteArrayParser.readDouble: attempt to read past end of buffer';
    }

    // I am sure there is a better way than this but this should be safe
    var byteArrayForParsingFloat = new Uint8Array(8);

    byteArrayForParsingFloat[0] = byteArray[position];
    byteArrayForParsingFloat[1] = byteArray[position + 1];
    byteArrayForParsingFloat[2] = byteArray[position + 2];
    byteArrayForParsingFloat[3] = byteArray[position + 3];
    byteArrayForParsingFloat[4] = byteArray[position + 4];
    byteArrayForParsingFloat[5] = byteArray[position + 5];
    byteArrayForParsingFloat[6] = byteArray[position + 6];
    byteArrayForParsingFloat[7] = byteArray[position + 7];

    var floatArray = new Float64Array(byteArrayForParsingFloat.buffer);

    return floatArray[0];
  }
};

/***/ }),

/***/ "./parseDicom.js":
/*!***********************!*\
  !*** ./parseDicom.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseDicom;

var _alloc = __webpack_require__(/*! ./alloc.js */ "./alloc.js");

var _alloc2 = _interopRequireDefault(_alloc);

var _bigEndianByteArrayParser = __webpack_require__(/*! ./bigEndianByteArrayParser.js */ "./bigEndianByteArrayParser.js");

var _bigEndianByteArrayParser2 = _interopRequireDefault(_bigEndianByteArrayParser);

var _byteStream = __webpack_require__(/*! ./byteStream.js */ "./byteStream.js");

var _byteStream2 = _interopRequireDefault(_byteStream);

var _dataSet = __webpack_require__(/*! ./dataSet.js */ "./dataSet.js");

var _dataSet2 = _interopRequireDefault(_dataSet);

var _littleEndianByteArrayParser = __webpack_require__(/*! ./littleEndianByteArrayParser.js */ "./littleEndianByteArrayParser.js");

var _littleEndianByteArrayParser2 = _interopRequireDefault(_littleEndianByteArrayParser);

var _readPart10Header = __webpack_require__(/*! ./readPart10Header.js */ "./readPart10Header.js");

var _readPart10Header2 = _interopRequireDefault(_readPart10Header);

var _sharedCopy = __webpack_require__(/*! ./sharedCopy.js */ "./sharedCopy.js");

var _sharedCopy2 = _interopRequireDefault(_sharedCopy);

var _byteArrayParser = __webpack_require__(/*! ./byteArrayParser.js */ "./byteArrayParser.js");

var byteArrayParser = _interopRequireWildcard(_byteArrayParser);

var _parseDicomDataSet = __webpack_require__(/*! ./parseDicomDataSet.js */ "./parseDicomDataSet.js");

var parseDicomDataSet = _interopRequireWildcard(_parseDicomDataSet);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parses a DICOM P10 byte array and returns a DataSet object with the parsed elements.
 * If the options argument is supplied and it contains the untilTag property, parsing
 * will stop once that tag is encoutered.  This can be used to parse partial byte streams.
 *
 * @param byteArray the byte array
 * @param options object to control parsing behavior (optional)
 * @returns {DataSet}
 * @throws error if an error occurs while parsing.  The exception object will contain a
 *         property dataSet with the elements successfully parsed before the error.
 */

function parseDicom(byteArray, options) {
  if (byteArray === undefined) {
    throw 'dicomParser.parseDicom: missing required parameter \'byteArray\'';
  }

  function readTransferSyntax(metaHeaderDataSet) {
    if (metaHeaderDataSet.elements.x00020010 === undefined) {
      throw 'dicomParser.parseDicom: missing required meta header attribute 0002,0010';
    }

    var transferSyntaxElement = metaHeaderDataSet.elements.x00020010;

    return byteArrayParser.readFixedString(byteArray, transferSyntaxElement.dataOffset, transferSyntaxElement.length);
  }

  function isExplicit(transferSyntax) {
    // implicit little endian
    if (transferSyntax === '1.2.840.10008.1.2') {
      return false;
    }

    // all other transfer syntaxes should be explicit
    return true;
  }

  function getDataSetByteStream(transferSyntax, position) {
    if (transferSyntax === '1.2.840.10008.1.2.1.99') {
      // if an infalter callback is registered, use it
      if (options && options.inflater) {
        var fullByteArrayCallback = options.inflater(byteArray, position);

        return new _byteStream2.default(_littleEndianByteArrayParser2.default, fullByteArrayCallback, 0);
      }
      // if running on node, use the zlib library to inflate
      // http://stackoverflow.com/questions/4224606/how-to-check-whether-a-script-is-running-under-node-js
      else if (typeof module !== 'undefined' && this.module !== module) {
          // inflate it
          var zlib = __webpack_require__(/*! zlib */ "zlib");
          var deflatedBuffer = (0, _sharedCopy2.default)(byteArray, position, byteArray.length - position);
          var inflatedBuffer = zlib.inflateRawSync(deflatedBuffer);

          // create a single byte array with the full header bytes and the inflated bytes
          var fullByteArrayBuffer = (0, _alloc2.default)(byteArray, inflatedBuffer.length + position);

          byteArray.copy(fullByteArrayBuffer, 0, 0, position);
          inflatedBuffer.copy(fullByteArrayBuffer, position);

          return new _byteStream2.default(_littleEndianByteArrayParser2.default, fullByteArrayBuffer, 0);
        }
        // if pako is defined - use it.  This is the web browser path
        // https://github.com/nodeca/pako
        else if (typeof pako !== 'undefined') {
            // inflate it
            var deflated = byteArray.slice(position);
            var inflated = pako.inflateRaw(deflated);

            // create a single byte array with the full header bytes and the inflated bytes
            var fullByteArray = (0, _alloc2.default)(byteArray, inflated.length + position);

            fullByteArray.set(byteArray.slice(0, position), 0);
            fullByteArray.set(inflated, position);

            return new _byteStream2.default(_littleEndianByteArrayParser2.default, fullByteArray, 0);
          }

      // throw exception since no inflater is available
      throw 'dicomParser.parseDicom: no inflater available to handle deflate transfer syntax';
    }

    // explicit big endian
    if (transferSyntax === '1.2.840.10008.1.2.2') {
      return new _byteStream2.default(_bigEndianByteArrayParser2.default, byteArray, position);
    }

    // all other transfer syntaxes are little endian; only the pixel encoding differs
    // make a new stream so the metaheader warnings don't come along for the ride
    return new _byteStream2.default(_littleEndianByteArrayParser2.default, byteArray, position);
  }

  function mergeDataSets(metaHeaderDataSet, instanceDataSet) {
    for (var propertyName in metaHeaderDataSet.elements) {
      if (metaHeaderDataSet.elements.hasOwnProperty(propertyName)) {
        instanceDataSet.elements[propertyName] = metaHeaderDataSet.elements[propertyName];
      }
    }

    if (metaHeaderDataSet.warnings !== undefined) {
      instanceDataSet.warnings = metaHeaderDataSet.warnings.concat(instanceDataSet.warnings);
    }

    return instanceDataSet;
  }

  function readDataSet(metaHeaderDataSet) {
    var transferSyntax = readTransferSyntax(metaHeaderDataSet);
    var explicit = isExplicit(transferSyntax);
    var dataSetByteStream = getDataSetByteStream(transferSyntax, metaHeaderDataSet.position);

    var elements = {};
    var dataSet = new _dataSet2.default(dataSetByteStream.byteArrayParser, dataSetByteStream.byteArray, elements);

    dataSet.warnings = dataSetByteStream.warnings;

    try {
      if (explicit) {
        parseDicomDataSet.parseDicomDataSetExplicit(dataSet, dataSetByteStream, dataSetByteStream.byteArray.length, options);
      } else {
        parseDicomDataSet.parseDicomDataSetImplicit(dataSet, dataSetByteStream, dataSetByteStream.byteArray.length, options);
      }
    } catch (e) {
      var ex = {
        exception: e,
        dataSet: dataSet
      };

      throw ex;
    }

    return dataSet;
  }

  // main function here
  function parseTheByteStream() {
    var metaHeaderDataSet = (0, _readPart10Header2.default)(byteArray, options);
    var dataSet = readDataSet(metaHeaderDataSet);

    return mergeDataSets(metaHeaderDataSet, dataSet);
  }

  // This is where we actually start parsing
  return parseTheByteStream();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./parseDicomDataSet.js":
/*!******************************!*\
  !*** ./parseDicomDataSet.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDicomDataSetExplicit = parseDicomDataSetExplicit;
exports.parseDicomDataSetImplicit = parseDicomDataSetImplicit;

var _readDicomElementExplicit = __webpack_require__(/*! ./readDicomElementExplicit.js */ "./readDicomElementExplicit.js");

var _readDicomElementExplicit2 = _interopRequireDefault(_readDicomElementExplicit);

var _readDicomElementImplicit = __webpack_require__(/*! ./readDicomElementImplicit.js */ "./readDicomElementImplicit.js");

var _readDicomElementImplicit2 = _interopRequireDefault(_readDicomElementImplicit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal helper functions for parsing implicit and explicit DICOM data sets
 */

/**
 * reads an explicit data set
 * @param byteStream the byte stream to read from
 * @param maxPosition the maximum position to read up to (optional - only needed when reading sequence items)
 */
function parseDicomDataSetExplicit(dataSet, byteStream, maxPosition) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  maxPosition = maxPosition === undefined ? byteStream.byteArray.length : maxPosition;

  if (byteStream === undefined) {
    throw 'dicomParser.parseDicomDataSetExplicit: missing required parameter \'byteStream\'';
  }

  if (maxPosition < byteStream.position || maxPosition > byteStream.byteArray.length) {
    throw 'dicomParser.parseDicomDataSetExplicit: invalid value for parameter \'maxP osition\'';
  }

  var elements = dataSet.elements;

  while (byteStream.position < maxPosition) {
    var element = (0, _readDicomElementExplicit2.default)(byteStream, dataSet.warnings, options.untilTag);

    elements[element.tag] = element;
    if (element.tag === options.untilTag) {
      return;
    }
  }

  if (byteStream.position > maxPosition) {
    throw 'dicomParser:parseDicomDataSetExplicit: buffer overrun';
  }
}

/**
 * reads an implicit data set
 * @param byteStream the byte stream to read from
 * @param maxPosition the maximum position to read up to (optional - only needed when reading sequence items)
 */
function parseDicomDataSetImplicit(dataSet, byteStream, maxPosition) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  maxPosition = maxPosition === undefined ? dataSet.byteArray.length : maxPosition;

  if (byteStream === undefined) {
    throw 'dicomParser.parseDicomDataSetImplicit: missing required parameter \'byteStream\'';
  }

  if (maxPosition < byteStream.position || maxPosition > byteStream.byteArray.length) {
    throw 'dicomParser.parseDicomDataSetImplicit: invalid value for parameter \'maxPosition\'';
  }

  var elements = dataSet.elements;

  while (byteStream.position < maxPosition) {
    var element = (0, _readDicomElementImplicit2.default)(byteStream, options.untilTag, options.vrCallback);

    elements[element.tag] = element;
    if (element.tag === options.untilTag) {
      return;
    }
  }
}

/***/ }),

/***/ "./readDicomElementExplicit.js":
/*!*************************************!*\
  !*** ./readDicomElementExplicit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readDicomElementExplicit;

var _findEndOfEncapsulatedPixelData = __webpack_require__(/*! ./findEndOfEncapsulatedPixelData.js */ "./findEndOfEncapsulatedPixelData.js");

var _findEndOfEncapsulatedPixelData2 = _interopRequireDefault(_findEndOfEncapsulatedPixelData);

var _findAndSetUNElementLength = __webpack_require__(/*! ./findAndSetUNElementLength.js */ "./findAndSetUNElementLength.js");

var _findAndSetUNElementLength2 = _interopRequireDefault(_findAndSetUNElementLength);

var _findItemDelimitationItem = __webpack_require__(/*! ./findItemDelimitationItem.js */ "./findItemDelimitationItem.js");

var _findItemDelimitationItem2 = _interopRequireDefault(_findItemDelimitationItem);

var _readTag = __webpack_require__(/*! ./readTag.js */ "./readTag.js");

var _readTag2 = _interopRequireDefault(_readTag);

var _readSequenceElementExplicit = __webpack_require__(/*! ./readSequenceElementExplicit.js */ "./readSequenceElementExplicit.js");

var _readSequenceElementExplicit2 = _interopRequireDefault(_readSequenceElementExplicit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal helper functions for for parsing DICOM elements
 */

var getDataLengthSizeInBytesForVR = function getDataLengthSizeInBytesForVR(vr) {
  if (vr === 'OB' || vr === 'OW' || vr === 'SQ' || vr === 'OF' || vr === 'UT' || vr === 'UN') {
    return 4;
  }

  return 2;
};

function readDicomElementExplicit(byteStream, warnings, untilTag) {
  if (byteStream === undefined) {
    throw 'dicomParser.readDicomElementExplicit: missing required parameter \'byteStream\'';
  }

  var element = {
    tag: (0, _readTag2.default)(byteStream),
    vr: byteStream.readFixedString(2)
    // length set below based on VR
    // dataOffset set below based on VR and size of length
  };

  var dataLengthSizeBytes = getDataLengthSizeInBytesForVR(element.vr);

  if (dataLengthSizeBytes === 2) {
    element.length = byteStream.readUint16();
    element.dataOffset = byteStream.position;
  } else {
    byteStream.seek(2);
    element.length = byteStream.readUint32();
    element.dataOffset = byteStream.position;
  }

  if (element.length === 4294967295) {
    element.hadUndefinedLength = true;
  }

  if (element.tag === untilTag) {
    return element;
  }

  // if VR is SQ, parse the sequence items
  if (element.vr === 'SQ') {
    (0, _readSequenceElementExplicit2.default)(byteStream, element, warnings);

    return element;
  }

  if (element.length === 4294967295) {
    if (element.tag === 'x7fe00010') {
      (0, _findEndOfEncapsulatedPixelData2.default)(byteStream, element, warnings);

      return element;
    } else if (element.vr === 'UN') {
      (0, _findAndSetUNElementLength2.default)(byteStream, element);

      return element;
    }

    (0, _findItemDelimitationItem2.default)(byteStream, element);

    return element;
  }

  byteStream.seek(element.length);

  return element;
}

/***/ }),

/***/ "./readDicomElementImplicit.js":
/*!*************************************!*\
  !*** ./readDicomElementImplicit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readDicomElementImplicit;

var _findItemDelimitationItem = __webpack_require__(/*! ./findItemDelimitationItem.js */ "./findItemDelimitationItem.js");

var _findItemDelimitationItem2 = _interopRequireDefault(_findItemDelimitationItem);

var _readSequenceElementImplicit = __webpack_require__(/*! ./readSequenceElementImplicit.js */ "./readSequenceElementImplicit.js");

var _readSequenceElementImplicit2 = _interopRequireDefault(_readSequenceElementImplicit);

var _readTag = __webpack_require__(/*! ./readTag.js */ "./readTag.js");

var _readTag2 = _interopRequireDefault(_readTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal helper functions for for parsing DICOM elements
 */

var isSequence = function isSequence(element, byteStream, vrCallback) {
  // if a data dictionary callback was provided, use that to verify that the element is a sequence.
  if (typeof vrCallback !== 'undefined') {
    return vrCallback(element.tag) === 'SQ';
  }

  if (byteStream.position + 4 <= byteStream.byteArray.length) {
    var nextTag = (0, _readTag2.default)(byteStream);

    byteStream.seek(-4);

    // Item start tag (fffe,e000) or sequence delimiter (i.e. end of sequence) tag (0fffe,e0dd)
    // These are the tags that could potentially be found directly after a sequence start tag (the delimiter
    // is found in the case of an empty sequence). This is not 100% safe because a non-sequence item
    // could have data that has these bytes, but this is how to do it without a data dictionary.
    return nextTag === 'xfffee000' || nextTag === 'xfffee0dd';
  }

  byteStream.warnings.push('eof encountered before finding sequence item tag or sequence delimiter tag in peeking to determine VR');

  return false;
};

function readDicomElementImplicit(byteStream, untilTag, vrCallback) {
  if (byteStream === undefined) {
    throw 'dicomParser.readDicomElementImplicit: missing required parameter \'byteStream\'';
  }

  var element = {
    tag: (0, _readTag2.default)(byteStream),
    length: byteStream.readUint32(),
    dataOffset: byteStream.position
  };

  if (element.length === 4294967295) {
    element.hadUndefinedLength = true;
  }

  if (element.tag === untilTag) {
    return element;
  }

  if (isSequence(element, byteStream, vrCallback)) {
    // parse the sequence
    (0, _readSequenceElementImplicit2.default)(byteStream, element);

    return element;
  }

  // if element is not a sequence and has undefined length, we have to
  // scan the data for a magic number to figure out when it ends.
  if (element.hadUndefinedLength) {
    (0, _findItemDelimitationItem2.default)(byteStream, element);

    return element;
  }

  // non sequence element with known length, skip over the data part
  byteStream.seek(element.length);

  return element;
}

/***/ }),

/***/ "./readEncapsulatedImageFrame.js":
/*!***************************************!*\
  !*** ./readEncapsulatedImageFrame.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readEncapsulatedImageFrame;

var _readEncapsulatedPixelDataFromFragments = __webpack_require__(/*! ./readEncapsulatedPixelDataFromFragments.js */ "./readEncapsulatedPixelDataFromFragments.js");

var _readEncapsulatedPixelDataFromFragments2 = _interopRequireDefault(_readEncapsulatedPixelDataFromFragments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Functionality for extracting encapsulated pixel data
 */

var findFragmentIndexWithOffset = function findFragmentIndexWithOffset(fragments, offset) {
  for (var i = 0; i < fragments.length; i++) {
    if (fragments[i].offset === offset) {
      return i;
    }
  }
};

var calculateNumberOfFragmentsForFrame = function calculateNumberOfFragmentsForFrame(frameIndex, basicOffsetTable, fragments, startFragmentIndex) {
  // special case for last frame
  if (frameIndex === basicOffsetTable.length - 1) {
    return fragments.length - startFragmentIndex;
  }

  // iterate through each fragment looking for the one matching the offset for the next frame
  var nextFrameOffset = basicOffsetTable[frameIndex + 1];

  for (var i = startFragmentIndex + 1; i < fragments.length; i++) {
    if (fragments[i].offset === nextFrameOffset) {
      return i - startFragmentIndex;
    }
  }

  throw 'dicomParser.calculateNumberOfFragmentsForFrame: could not find fragment with offset matching basic offset table';
};

/**
 * Returns the pixel data for the specified frame in an encapsulated pixel data element that has a non
 * empty basic offset table.  Note that this function will fail if the basic offset table is empty - in that
 * case you need to determine which fragments map to which frames and read them using
 * readEncapsulatedPixelDataFromFragments().  Also see the function createJEPGBasicOffsetTable() to see
 * how a basic offset table can be created for JPEG images
 *
 * @param dataSet - the dataSet containing the encapsulated pixel data
 * @param pixelDataElement - the pixel data element (x7fe00010) to extract the frame from
 * @param frameIndex - the zero based frame index
 * @param [basicOffsetTable] - optional array of starting offsets for frames
 * @param [fragments] - optional array of objects describing each fragment (offset, position, length)
 * @returns {object} with the encapsulated pixel data
 */
function readEncapsulatedImageFrame(dataSet, pixelDataElement, frameIndex, basicOffsetTable, fragments) {
  // default parameters
  basicOffsetTable = basicOffsetTable || pixelDataElement.basicOffsetTable;
  fragments = fragments || pixelDataElement.fragments;

  // Validate parameters
  if (dataSet === undefined) {
    throw 'dicomParser.readEncapsulatedImageFrame: missing required parameter \'dataSet\'';
  }
  if (pixelDataElement === undefined) {
    throw 'dicomParser.readEncapsulatedImageFrame: missing required parameter \'pixelDataElement\'';
  }
  if (frameIndex === undefined) {
    throw 'dicomParser.readEncapsulatedImageFrame: missing required parameter \'frameIndex\'';
  }
  if (basicOffsetTable === undefined) {
    throw 'dicomParser.readEncapsulatedImageFrame: parameter \'pixelDataElement\' does not have basicOffsetTable';
  }
  if (pixelDataElement.tag !== 'x7fe00010') {
    throw 'dicomParser.readEncapsulatedImageFrame: parameter \'pixelDataElement\' refers to non pixel data tag (expected tag = x7fe00010)';
  }
  if (pixelDataElement.encapsulatedPixelData !== true) {
    throw 'dicomParser.readEncapsulatedImageFrame: parameter \'pixelDataElement\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (pixelDataElement.hadUndefinedLength !== true) {
    throw 'dicomParser.readEncapsulatedImageFrame: parameter \'pixelDataElement\' refers to pixel data element that does not have undefined length';
  }
  if (pixelDataElement.fragments === undefined) {
    throw 'dicomParser.readEncapsulatedImageFrame: parameter \'pixelDataElement\' refers to pixel data element that does not have fragments';
  }
  if (basicOffsetTable.length === 0) {
    throw 'dicomParser.readEncapsulatedImageFrame: basicOffsetTable has zero entries';
  }
  if (frameIndex < 0) {
    throw 'dicomParser.readEncapsulatedImageFrame: parameter \'frameIndex\' must be >= 0';
  }
  if (frameIndex >= basicOffsetTable.length) {
    throw 'dicomParser.readEncapsulatedImageFrame: parameter \'frameIndex\' must be < basicOffsetTable.length';
  }

  // find starting fragment based on the offset for the frame in the basic offset table
  var offset = basicOffsetTable[frameIndex];
  var startFragmentIndex = findFragmentIndexWithOffset(fragments, offset);

  if (startFragmentIndex === undefined) {
    throw 'dicomParser.readEncapsulatedImageFrame: unable to find fragment that matches basic offset table entry';
  }

  // calculate the number of fragments for this frame
  var numFragments = calculateNumberOfFragmentsForFrame(frameIndex, basicOffsetTable, fragments, startFragmentIndex);

  // now extract the frame from the fragments
  return (0, _readEncapsulatedPixelDataFromFragments2.default)(dataSet, pixelDataElement, startFragmentIndex, numFragments, fragments);
}

/***/ }),

/***/ "./readEncapsulatedPixelData.js":
/*!**************************************!*\
  !*** ./readEncapsulatedPixelData.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readEncapsulatedPixelData;

var _readEncapsulatedImageFrame = __webpack_require__(/*! ./readEncapsulatedImageFrame.js */ "./readEncapsulatedImageFrame.js");

var _readEncapsulatedImageFrame2 = _interopRequireDefault(_readEncapsulatedImageFrame);

var _readEncapsulatedPixelDataFromFragments = __webpack_require__(/*! ./readEncapsulatedPixelDataFromFragments.js */ "./readEncapsulatedPixelDataFromFragments.js");

var _readEncapsulatedPixelDataFromFragments2 = _interopRequireDefault(_readEncapsulatedPixelDataFromFragments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Functionality for extracting encapsulated pixel data
 */

var deprecatedNoticeLogged = false;

/**
 * Returns the pixel data for the specified frame in an encapsulated pixel data element.  If no basic offset
 * table is present, it assumes that all fragments are for one frame.  Note that this assumption/logic is not
 * valid for multi-frame instances so this function has been deprecated and will eventually be removed.  Code
 * should be updated to use readEncapsulatedPixelDataFromFragments() or readEncapsulatedImageFrame()
 *
 * @deprecated since version 1.6 - use readEncapsulatedPixelDataFromFragments() or readEncapsulatedImageFrame()
 * @param dataSet - the dataSet containing the encapsulated pixel data
 * @param pixelDataElement - the pixel data element (x7fe00010) to extract the frame from
 * @param frame - the zero based frame index
 * @returns {object} with the encapsulated pixel data
 */
function readEncapsulatedPixelData(dataSet, pixelDataElement, frame) {
  if (!deprecatedNoticeLogged) {
    deprecatedNoticeLogged = true;

    if (console && console.log) {
      console.log('WARNING: dicomParser.readEncapsulatedPixelData() has been deprecated');
    }
  }

  if (dataSet === undefined) {
    throw 'dicomParser.readEncapsulatedPixelData: missing required parameter \'dataSet\'';
  }
  if (pixelDataElement === undefined) {
    throw 'dicomParser.readEncapsulatedPixelData: missing required parameter \'element\'';
  }
  if (frame === undefined) {
    throw 'dicomParser.readEncapsulatedPixelData: missing required parameter \'frame\'';
  }
  if (pixelDataElement.tag !== 'x7fe00010') {
    throw 'dicomParser.readEncapsulatedPixelData: parameter \'element\' refers to non pixel data tag (expected tag = x7fe00010)';
  }
  if (pixelDataElement.encapsulatedPixelData !== true) {
    throw 'dicomParser.readEncapsulatedPixelData: parameter \'element\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (pixelDataElement.hadUndefinedLength !== true) {
    throw 'dicomParser.readEncapsulatedPixelData: parameter \'element\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (pixelDataElement.basicOffsetTable === undefined) {
    throw 'dicomParser.readEncapsulatedPixelData: parameter \'element\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (pixelDataElement.fragments === undefined) {
    throw 'dicomParser.readEncapsulatedPixelData: parameter \'element\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (frame < 0) {
    throw 'dicomParser.readEncapsulatedPixelData: parameter \'frame\' must be >= 0';
  }

  // If the basic offset table is not empty, we can extract the frame
  if (pixelDataElement.basicOffsetTable.length !== 0) {
    return (0, _readEncapsulatedImageFrame2.default)(dataSet, pixelDataElement, frame);
  }

  // No basic offset table, assume all fragments are for one frame - NOTE that this is NOT a valid
  // assumption but is the original behavior so we are keeping it for now
  return (0, _readEncapsulatedPixelDataFromFragments2.default)(dataSet, pixelDataElement, 0, pixelDataElement.fragments.length);
}

/***/ }),

/***/ "./readEncapsulatedPixelDataFromFragments.js":
/*!***************************************************!*\
  !*** ./readEncapsulatedPixelDataFromFragments.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readEncapsulatedPixelDataFromFragments;

var _alloc = __webpack_require__(/*! ./alloc.js */ "./alloc.js");

var _alloc2 = _interopRequireDefault(_alloc);

var _byteStream = __webpack_require__(/*! ./byteStream.js */ "./byteStream.js");

var _byteStream2 = _interopRequireDefault(_byteStream);

var _readSequenceItem = __webpack_require__(/*! ./readSequenceItem.js */ "./readSequenceItem.js");

var _readSequenceItem2 = _interopRequireDefault(_readSequenceItem);

var _sharedCopy = __webpack_require__(/*! ./sharedCopy.js */ "./sharedCopy.js");

var _sharedCopy2 = _interopRequireDefault(_sharedCopy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Functionality for extracting encapsulated pixel data
 */

var calculateBufferSize = function calculateBufferSize(fragments, startFragment, numFragments) {
  var bufferSize = 0;

  for (var i = startFragment; i < startFragment + numFragments; i++) {
    bufferSize += fragments[i].length;
  }

  return bufferSize;
};

/**
 * Returns the encapsulated pixel data from the specified fragments.  Use this function when you know
 * the fragments you want to extract data from.  See
 *
 * @param dataSet - the dataSet containing the encapsulated pixel data
 * @param pixelDataElement - the pixel data element (x7fe00010) to extract the fragment data from
 * @param startFragmentIndex - zero based index of the first fragment to extract from
 * @param [numFragments] - the number of fragments to extract from, default is 1
 * @param [fragments] - optional array of objects describing each fragment (offset, position, length)
 * @returns {object} byte array with the encapsulated pixel data
 */
function readEncapsulatedPixelDataFromFragments(dataSet, pixelDataElement, startFragmentIndex, numFragments, fragments) {
  // default values
  numFragments = numFragments || 1;
  fragments = fragments || pixelDataElement.fragments;

  // check parameters
  if (dataSet === undefined) {
    throw 'dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter \'dataSet\'';
  }
  if (pixelDataElement === undefined) {
    throw 'dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter \'pixelDataElement\'';
  }
  if (startFragmentIndex === undefined) {
    throw 'dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter \'startFragmentIndex\'';
  }
  if (numFragments === undefined) {
    throw 'dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter \'numFragments\'';
  }
  if (pixelDataElement.tag !== 'x7fe00010') {
    throw 'dicomParser.readEncapsulatedPixelDataFromFragments: parameter \'pixelDataElement\' refers to non pixel data tag (expected tag = x7fe00010';
  }
  if (pixelDataElement.encapsulatedPixelData !== true) {
    throw 'dicomParser.readEncapsulatedPixelDataFromFragments: parameter \'pixelDataElement\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (pixelDataElement.hadUndefinedLength !== true) {
    throw 'dicomParser.readEncapsulatedPixelDataFromFragments: parameter \'pixelDataElement\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (pixelDataElement.basicOffsetTable === undefined) {
    throw 'dicomParser.readEncapsulatedPixelDataFromFragments: parameter \'pixelDataElement\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (pixelDataElement.fragments === undefined) {
    throw 'dicomParser.readEncapsulatedPixelDataFromFragments: parameter \'pixelDataElement\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (pixelDataElement.fragments.length <= 0) {
    throw 'dicomParser.readEncapsulatedPixelDataFromFragments: parameter \'pixelDataElement\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (startFragmentIndex < 0) {
    throw 'dicomParser.readEncapsulatedPixelDataFromFragments: parameter \'startFragmentIndex\' must be >= 0';
  }
  if (startFragmentIndex >= pixelDataElement.fragments.length) {
    throw 'dicomParser.readEncapsulatedPixelDataFromFragments: parameter \'startFragmentIndex\' must be < number of fragments';
  }
  if (numFragments < 1) {
    throw 'dicomParser.readEncapsulatedPixelDataFromFragments: parameter \'numFragments\' must be > 0';
  }
  if (startFragmentIndex + numFragments > pixelDataElement.fragments.length) {
    throw 'dicomParser.readEncapsulatedPixelDataFromFragments: parameter \'startFragment\' + \'numFragments\' < number of fragments';
  }

  // create byte stream on the data for this pixel data element
  var byteStream = new _byteStream2.default(dataSet.byteArrayParser, dataSet.byteArray, pixelDataElement.dataOffset);

  // seek past the basic offset table (no need to parse it again since we already have)
  var basicOffsetTable = (0, _readSequenceItem2.default)(byteStream);

  if (basicOffsetTable.tag !== 'xfffee000') {
    throw 'dicomParser.readEncapsulatedPixelData: missing basic offset table xfffee000';
  }

  byteStream.seek(basicOffsetTable.length);

  var fragmentZeroPosition = byteStream.position;

  // tag + length
  var fragmentHeaderSize = 8;

  // if there is only one fragment, return a view on this array to avoid copying
  if (numFragments === 1) {
    return (0, _sharedCopy2.default)(byteStream.byteArray, fragmentZeroPosition + fragments[startFragmentIndex].offset + fragmentHeaderSize, fragments[startFragmentIndex].length);
  }

  // more than one fragment, combine all of the fragments into one buffer
  var bufferSize = calculateBufferSize(fragments, startFragmentIndex, numFragments);
  var pixelData = (0, _alloc2.default)(byteStream.byteArray, bufferSize);
  var pixelDataIndex = 0;

  for (var i = startFragmentIndex; i < startFragmentIndex + numFragments; i++) {
    var fragmentOffset = fragmentZeroPosition + fragments[i].offset + fragmentHeaderSize;

    for (var j = 0; j < fragments[i].length; j++) {
      pixelData[pixelDataIndex++] = byteStream.byteArray[fragmentOffset++];
    }
  }

  return pixelData;
}

/***/ }),

/***/ "./readPart10Header.js":
/*!*****************************!*\
  !*** ./readPart10Header.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readPart10Header;

var _byteStream = __webpack_require__(/*! ./byteStream.js */ "./byteStream.js");

var _byteStream2 = _interopRequireDefault(_byteStream);

var _dataSet = __webpack_require__(/*! ./dataSet.js */ "./dataSet.js");

var _dataSet2 = _interopRequireDefault(_dataSet);

var _littleEndianByteArrayParser = __webpack_require__(/*! ./littleEndianByteArrayParser.js */ "./littleEndianByteArrayParser.js");

var _littleEndianByteArrayParser2 = _interopRequireDefault(_littleEndianByteArrayParser);

var _readDicomElementExplicit = __webpack_require__(/*! ./readDicomElementExplicit.js */ "./readDicomElementExplicit.js");

var _readDicomElementExplicit2 = _interopRequireDefault(_readDicomElementExplicit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parses a DICOM P10 byte array and returns a DataSet object with the parsed elements.  If the options
 * argument is supplied and it contains the untilTag property, parsing will stop once that
 * tag is encoutered.  This can be used to parse partial byte streams.
 *
 * @param byteArray the byte array
 * @param options object to control parsing behavior (optional)
 * @returns {DataSet}
 * @throws error if an error occurs while parsing.  The exception object will contain a property dataSet with the
 *         elements successfully parsed before the error.
 */

function readPart10Header(byteArray, options) {
  if (byteArray === undefined) {
    throw 'dicomParser.readPart10Header: missing required parameter \'byteArray\'';
  }

  var littleEndianByteStream = new _byteStream2.default(_littleEndianByteArrayParser2.default, byteArray);

  function readPrefix() {
    littleEndianByteStream.seek(128);
    var prefix = littleEndianByteStream.readFixedString(4);

    if (prefix !== 'DICM') {
      throw 'dicomParser.readPart10Header: DICM prefix not found at location 132 - this is not a valid DICOM P10 file.';
    }
  }

  // main function here
  function readTheHeader() {
    // Per the DICOM standard, the header is always encoded in Explicit VR Little Endian (see PS3.10, section 7.1)
    // so use littleEndianByteStream throughout this method regardless of the transfer syntax
    readPrefix();

    var warnings = [];
    var elements = {};

    while (littleEndianByteStream.position < littleEndianByteStream.byteArray.length) {
      var position = littleEndianByteStream.position;
      var element = (0, _readDicomElementExplicit2.default)(littleEndianByteStream, warnings);

      if (element.tag > 'x0002ffff') {
        littleEndianByteStream.position = position;
        break;
      }
      // Cache the littleEndianByteArrayParser for meta header elements, since the rest of the data set may be big endian
      // and this parser will be needed later if the meta header values are to be read.
      element.parser = _littleEndianByteArrayParser2.default;
      elements[element.tag] = element;
    }

    var metaHeaderDataSet = new _dataSet2.default(littleEndianByteStream.byteArrayParser, littleEndianByteStream.byteArray, elements);

    metaHeaderDataSet.warnings = littleEndianByteStream.warnings;
    metaHeaderDataSet.position = littleEndianByteStream.position;

    return metaHeaderDataSet;
  }

  // This is where we actually start parsing
  return readTheHeader();
}

/***/ }),

/***/ "./readSequenceElementExplicit.js":
/*!****************************************!*\
  !*** ./readSequenceElementExplicit.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readSequenceItemsExplicit;

var _dataSet = __webpack_require__(/*! ./dataSet.js */ "./dataSet.js");

var _dataSet2 = _interopRequireDefault(_dataSet);

var _readDicomElementExplicit = __webpack_require__(/*! ./readDicomElementExplicit.js */ "./readDicomElementExplicit.js");

var _readDicomElementExplicit2 = _interopRequireDefault(_readDicomElementExplicit);

var _readSequenceItem = __webpack_require__(/*! ./readSequenceItem.js */ "./readSequenceItem.js");

var _readSequenceItem2 = _interopRequireDefault(_readSequenceItem);

var _readTag = __webpack_require__(/*! ./readTag.js */ "./readTag.js");

var _readTag2 = _interopRequireDefault(_readTag);

var _parseDicomDataSet = __webpack_require__(/*! ./parseDicomDataSet.js */ "./parseDicomDataSet.js");

var parseDicomDataSet = _interopRequireWildcard(_parseDicomDataSet);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal helper functions for parsing DICOM elements
 */

function readDicomDataSetExplicitUndefinedLength(byteStream, warnings) {
  var elements = {};

  while (byteStream.position < byteStream.byteArray.length) {
    var element = (0, _readDicomElementExplicit2.default)(byteStream, warnings);

    elements[element.tag] = element;

    // we hit an item delimiter tag, return the current offset to mark
    // the end of this sequence item
    if (element.tag === 'xfffee00d') {
      return new _dataSet2.default(byteStream.byteArrayParser, byteStream.byteArray, elements);
    }
  }

  // eof encountered - log a warning and return what we have for the element
  warnings.push('eof encountered before finding item delimiter tag while reading sequence item of undefined length');

  return new _dataSet2.default(byteStream.byteArrayParser, byteStream.byteArray, elements);
}

function readSequenceItemExplicit(byteStream, warnings) {
  var item = (0, _readSequenceItem2.default)(byteStream);

  if (item.length === 4294967295) {
    item.hadUndefinedLength = true;
    item.dataSet = readDicomDataSetExplicitUndefinedLength(byteStream, warnings);
    item.length = byteStream.position - item.dataOffset;
  } else {
    item.dataSet = new _dataSet2.default(byteStream.byteArrayParser, byteStream.byteArray, {});
    parseDicomDataSet.parseDicomDataSetExplicit(item.dataSet, byteStream, byteStream.position + item.length);
  }

  return item;
}

function readSQElementUndefinedLengthExplicit(byteStream, element, warnings) {
  while (byteStream.position + 4 <= byteStream.byteArray.length) {
    // end reading this sequence if the next tag is the sequence delimitation item
    var nextTag = (0, _readTag2.default)(byteStream);

    byteStream.seek(-4);
    if (nextTag === 'xfffee0dd') {
      // set the correct length
      element.length = byteStream.position - element.dataOffset;
      byteStream.seek(8);

      return element;
    }

    var item = readSequenceItemExplicit(byteStream, warnings);

    element.items.push(item);
  }

  warnings.push('eof encountered before finding sequence delimitation tag while reading sequence of undefined length');
  element.length = byteStream.position - element.dataOffset;
}

function readSQElementKnownLengthExplicit(byteStream, element, warnings) {
  var maxPosition = element.dataOffset + element.length;

  while (byteStream.position < maxPosition) {
    var item = readSequenceItemExplicit(byteStream, warnings);

    element.items.push(item);
  }
}

function readSequenceItemsExplicit(byteStream, element, warnings) {
  if (byteStream === undefined) {
    throw 'dicomParser.readSequenceItemsExplicit: missing required parameter \'byteStream\'';
  }

  if (element === undefined) {
    throw 'dicomParser.readSequenceItemsExplicit: missing required parameter \'element\'';
  }

  element.items = [];

  if (element.length === 4294967295) {
    readSQElementUndefinedLengthExplicit(byteStream, element, warnings);
  } else {
    readSQElementKnownLengthExplicit(byteStream, element, warnings);
  }
}

/***/ }),

/***/ "./readSequenceElementImplicit.js":
/*!****************************************!*\
  !*** ./readSequenceElementImplicit.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readSequenceItemsImplicit;

var _dataSet = __webpack_require__(/*! ./dataSet.js */ "./dataSet.js");

var _dataSet2 = _interopRequireDefault(_dataSet);

var _readDicomElementImplicit = __webpack_require__(/*! ./readDicomElementImplicit.js */ "./readDicomElementImplicit.js");

var _readDicomElementImplicit2 = _interopRequireDefault(_readDicomElementImplicit);

var _readSequenceItem = __webpack_require__(/*! ./readSequenceItem.js */ "./readSequenceItem.js");

var _readSequenceItem2 = _interopRequireDefault(_readSequenceItem);

var _readTag = __webpack_require__(/*! ./readTag.js */ "./readTag.js");

var _readTag2 = _interopRequireDefault(_readTag);

var _parseDicomDataSet = __webpack_require__(/*! ./parseDicomDataSet.js */ "./parseDicomDataSet.js");

var parseDicomDataSet = _interopRequireWildcard(_parseDicomDataSet);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal helper functions for parsing DICOM elements
 */

function readDicomDataSetImplicitUndefinedLength(byteStream, vrCallback) {
  var elements = {};

  while (byteStream.position < byteStream.byteArray.length) {
    var element = (0, _readDicomElementImplicit2.default)(byteStream, undefined, vrCallback);

    elements[element.tag] = element;

    // we hit an item delimiter tag, return the current offset to mark
    // the end of this sequence item
    if (element.tag === 'xfffee00d') {
      return new _dataSet2.default(byteStream.byteArrayParser, byteStream.byteArray, elements);
    }
  }

  // eof encountered - log a warning and return what we have for the element
  byteStream.warnings.push('eof encountered before finding sequence item delimiter in sequence item of undefined length');

  return new _dataSet2.default(byteStream.byteArrayParser, byteStream.byteArray, elements);
}

function readSequenceItemImplicit(byteStream, vrCallback) {
  var item = (0, _readSequenceItem2.default)(byteStream);

  if (item.length === 4294967295) {
    item.hadUndefinedLength = true;
    item.dataSet = readDicomDataSetImplicitUndefinedLength(byteStream, vrCallback);
    item.length = byteStream.position - item.dataOffset;
  } else {
    item.dataSet = new _dataSet2.default(byteStream.byteArrayParser, byteStream.byteArray, {});
    parseDicomDataSet.parseDicomDataSetImplicit(item.dataSet, byteStream, byteStream.position + item.length, { vrCallback: vrCallback });
  }

  return item;
}

function readSQElementUndefinedLengthImplicit(byteStream, element, vrCallback) {
  while (byteStream.position + 4 <= byteStream.byteArray.length) {
    // end reading this sequence if the next tag is the sequence delimitation item
    var nextTag = (0, _readTag2.default)(byteStream);

    byteStream.seek(-4);

    if (nextTag === 'xfffee0dd') {
      // set the correct length
      element.length = byteStream.position - element.dataOffset;
      byteStream.seek(8);

      return element;
    }

    var item = readSequenceItemImplicit(byteStream, vrCallback);

    element.items.push(item);
  }

  byteStream.warnings.push('eof encountered before finding sequence delimiter in sequence of undefined length');
  element.length = byteStream.byteArray.length - element.dataOffset;
}

function readSQElementKnownLengthImplicit(byteStream, element, vrCallback) {
  var maxPosition = element.dataOffset + element.length;

  while (byteStream.position < maxPosition) {
    var item = readSequenceItemImplicit(byteStream, vrCallback);

    element.items.push(item);
  }
}

/**
 * Reads sequence items for an element in an implicit little endian byte stream
 * @param byteStream the implicit little endian byte stream
 * @param element the element to read the sequence items for
 * @param vrCallback an optional method that returns a VR string given a tag
 */
function readSequenceItemsImplicit(byteStream, element, vrCallback) {
  if (byteStream === undefined) {
    throw 'dicomParser.readSequenceItemsImplicit: missing required parameter \'byteStream\'';
  }

  if (element === undefined) {
    throw 'dicomParser.readSequenceItemsImplicit: missing required parameter \'element\'';
  }

  element.items = [];

  if (element.length === 4294967295) {
    readSQElementUndefinedLengthImplicit(byteStream, element, vrCallback);
  } else {
    readSQElementKnownLengthImplicit(byteStream, element, vrCallback);
  }
}

/***/ }),

/***/ "./readSequenceItem.js":
/*!*****************************!*\
  !*** ./readSequenceItem.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readSequenceItem;

var _readTag = __webpack_require__(/*! ./readTag.js */ "./readTag.js");

var _readTag2 = _interopRequireDefault(_readTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal helper functions for parsing DICOM elements
 */

/**
 * Reads the tag and length of a sequence item and returns them as an object with the following properties
 *  tag : string for the tag of this element in the format xggggeeee
 *  length: the number of bytes in this item or 4294967295 if undefined
 *  dataOffset: the offset into the byteStream of the data for this item
 * @param byteStream the byte
 * @returns {{tag: string, length: integer, dataOffset: integer}}
 */
function readSequenceItem(byteStream) {
  if (byteStream === undefined) {
    throw 'dicomParser.readSequenceItem: missing required parameter \'byteStream\'';
  }

  var element = {
    tag: (0, _readTag2.default)(byteStream),
    length: byteStream.readUint32(),
    dataOffset: byteStream.position
  };

  if (element.tag !== 'xfffee000') {
    throw 'dicomParser.readSequenceItem: item tag (FFFE,E000) not found at offset ' + byteStream.position;
  }

  return element;
}

/***/ }),

/***/ "./readTag.js":
/*!********************!*\
  !*** ./readTag.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readTag;
/**
 * Internal helper functions for parsing DICOM elements
 */

/**
 * Reads a tag (group number and element number) from a byteStream
 * @param byteStream the byte stream to read from
 * @returns {string} the tag in format xggggeeee where gggg is the lowercase hex value of the group number
 * and eeee is the lower case hex value of the element number
 */
function readTag(byteStream) {
  if (byteStream === undefined) {
    throw 'dicomParser.readTag: missing required parameter \'byteStream\'';
  }

  var groupNumber = byteStream.readUint16() * 256 * 256;
  var elementNumber = byteStream.readUint16();
  var tag = 'x' + ('00000000' + (groupNumber + elementNumber).toString(16)).substr(-8);

  return tag;
}

/***/ }),

/***/ "./sharedCopy.js":
/*!***********************!*\
  !*** ./sharedCopy.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sharedCopy;
/**
 *
 * Internal helper function to create a shared copy of a byteArray
 *
 */

/**
 * Creates a view of the underlying byteArray.  The view is of the same type as the byteArray (e.g.
 * Uint8Array or Buffer) and shares the same underlying memory (changing one changes the other)
 * @param byteArray the underlying byteArray (either Uint8Array or Buffer)
 * @param byteOffset offset into the underlying byteArray to create the view of
 * @param length number of bytes in the view
 * @returns {object} Uint8Array or Buffer depending on the type of byteArray
 */
function sharedCopy(byteArray, byteOffset, length) {
  if (typeof Buffer !== 'undefined' && byteArray instanceof Buffer) {
    return byteArray.slice(byteOffset, byteOffset + length);
  } else if (byteArray instanceof Uint8Array) {
    return new Uint8Array(byteArray.buffer, byteArray.byteOffset + byteOffset, length);
  }
  throw 'dicomParser.from: unknown type for byteArray';
}

/***/ }),

/***/ "./util/createJPEGBasicOffsetTable.js":
/*!********************************************!*\
  !*** ./util/createJPEGBasicOffsetTable.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createJPEGBasicOffsetTable;
// Each JPEG image has an end of image marker 0xFFD9
function isEndOfImageMarker(dataSet, position) {
  return dataSet.byteArray[position] === 0xFF && dataSet.byteArray[position + 1] === 0xD9;
}

function isFragmentEndOfImage(dataSet, pixelDataElement, fragmentIndex) {
  var fragment = pixelDataElement.fragments[fragmentIndex];
  // Need to check the last two bytes and the last three bytes for marker since odd length
  // fragments are zero padded

  if (isEndOfImageMarker(dataSet, fragment.position + fragment.length - 2) || isEndOfImageMarker(dataSet, fragment.position + fragment.length - 3)) {
    return true;
  }

  return false;
}

function findLastImageFrameFragmentIndex(dataSet, pixelDataElement, startFragment) {
  for (var fragmentIndex = startFragment; fragmentIndex < pixelDataElement.fragments.length; fragmentIndex++) {
    if (isFragmentEndOfImage(dataSet, pixelDataElement, fragmentIndex)) {
      return fragmentIndex;
    }
  }
}

/**
 * Creates a basic offset table by scanning fragments for JPEG start of image and end Of Image markers
 * @param {object} dataSet - the parsed dicom dataset
 * @param {object} pixelDataElement - the pixel data element
 * @param [fragments] - optional array of objects describing each fragment (offset, position, length)
 * @returns {Array} basic offset table (array of offsets to beginning of each frame)
 */
function createJPEGBasicOffsetTable(dataSet, pixelDataElement, fragments) {
  // Validate parameters
  if (dataSet === undefined) {
    throw 'dicomParser.createJPEGBasicOffsetTable: missing required parameter dataSet';
  }
  if (pixelDataElement === undefined) {
    throw 'dicomParser.createJPEGBasicOffsetTable: missing required parameter pixelDataElement';
  }
  if (pixelDataElement.tag !== 'x7fe00010') {
    throw 'dicomParser.createJPEGBasicOffsetTable: parameter \'pixelDataElement\' refers to non pixel data tag (expected tag = x7fe00010\'';
  }
  if (pixelDataElement.encapsulatedPixelData !== true) {
    throw 'dicomParser.createJPEGBasicOffsetTable: parameter \'pixelDataElement\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (pixelDataElement.hadUndefinedLength !== true) {
    throw 'dicomParser.createJPEGBasicOffsetTable: parameter \'pixelDataElement\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (pixelDataElement.basicOffsetTable === undefined) {
    throw 'dicomParser.createJPEGBasicOffsetTable: parameter \'pixelDataElement\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (pixelDataElement.fragments === undefined) {
    throw 'dicomParser.createJPEGBasicOffsetTable: parameter \'pixelDataElement\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (pixelDataElement.fragments.length <= 0) {
    throw 'dicomParser.createJPEGBasicOffsetTable: parameter \'pixelDataElement\' refers to pixel data element that does not have encapsulated pixel data';
  }
  if (fragments && fragments.length <= 0) {
    throw 'dicomParser.createJPEGBasicOffsetTable: parameter \'fragments\' must not be zero length';
  }

  // Default values
  fragments = fragments || pixelDataElement.fragments;

  var basicOffsetTable = [];

  var startFragmentIndex = 0;

  while (true) {
    // Add the offset for the start fragment
    basicOffsetTable.push(pixelDataElement.fragments[startFragmentIndex].offset);
    var endFragmentIndex = findLastImageFrameFragmentIndex(dataSet, pixelDataElement, startFragmentIndex);

    if (endFragmentIndex === undefined || endFragmentIndex === pixelDataElement.fragments.length - 1) {
      return basicOffsetTable;
    }
    startFragmentIndex = endFragmentIndex + 1;
  }
}

/***/ }),

/***/ "./util/dataSetToJS.js":
/*!*****************************!*\
  !*** ./util/dataSetToJS.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = explicitDataSetToJS;

var _elementToString = __webpack_require__(/*! ./elementToString.js */ "./util/elementToString.js");

var _elementToString2 = _interopRequireDefault(_elementToString);

var _util = __webpack_require__(/*! ./util.js */ "./util/util.js");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * converts an explicit dataSet to a javascript object
 * @param dataSet
 * @param options
 */
function explicitDataSetToJS(dataSet, options) {
  if (dataSet === undefined) {
    throw 'dicomParser.explicitDataSetToJS: missing required parameter dataSet';
  }

  options = options || {
    omitPrivateAttibutes: true, // true if private elements should be omitted
    maxElementLength: 128 // maximum element length to try and convert to string format
  };

  var result = {};

  for (var tag in dataSet.elements) {
    var element = dataSet.elements[tag];

    // skip this element if it a private element and our options specify that we should
    if (options.omitPrivateAttibutes === true && util.isPrivateTag(tag)) {
      continue;
    }

    if (element.items) {
      // handle sequences
      var sequenceItems = [];

      for (var i = 0; i < element.items.length; i++) {
        sequenceItems.push(explicitDataSetToJS(element.items[i].dataSet, options));
      }
      result[tag] = sequenceItems;
    } else {
      var asString;

      asString = undefined;
      if (element.length < options.maxElementLength) {
        asString = (0, _elementToString2.default)(dataSet, element);
      }

      if (asString !== undefined) {
        result[tag] = asString;
      } else {
        result[tag] = {
          dataOffset: element.dataOffset,
          length: element.length
        };
      }
    }
  }

  return result;
}

/***/ }),

/***/ "./util/elementToString.js":
/*!*********************************!*\
  !*** ./util/elementToString.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = explicitElementToString;

var _util = __webpack_require__(/*! ./util.js */ "./util/util.js");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Converts an explicit VR element to a string or undefined if it is not possible to convert.
 * Throws an error if an implicit element is supplied
 * @param dataSet
 * @param element
 * @returns {*}
 */
function explicitElementToString(dataSet, element) {
  if (dataSet === undefined || element === undefined) {
    throw 'dicomParser.explicitElementToString: missing required parameters';
  }
  if (element.vr === undefined) {
    throw 'dicomParser.explicitElementToString: cannot convert implicit element to string';
  }
  var vr = element.vr;
  var tag = element.tag;

  var textResult;

  function multiElementToString(numItems, func) {
    var result = '';

    for (var i = 0; i < numItems; i++) {
      if (i !== 0) {
        result += '/';
      }
      result += func.call(dataSet, tag, i).toString();
    }

    return result;
  }

  if (util.isStringVr(vr) === true) {
    textResult = dataSet.string(tag);
  } else if (vr === 'AT') {
    var num = dataSet.uint32(tag);

    if (num === undefined) {
      return undefined;
    }
    if (num < 0) {
      num = 0xFFFFFFFF + num + 1;
    }

    return 'x' + num.toString(16).toUpperCase();
  } else if (vr === 'US') {
    textResult = multiElementToString(element.length / 2, dataSet.uint16);
  } else if (vr === 'SS') {
    textResult = multiElementToString(element.length / 2, dataSet.int16);
  } else if (vr === 'UL') {
    textResult = multiElementToString(element.length / 4, dataSet.uint32);
  } else if (vr === 'SL') {
    textResult = multiElementToString(element.length / 4, dataSet.int32);
  } else if (vr === 'FD') {
    textResult = multiElementToString(element.length / 8, dataSet.double);
  } else if (vr === 'FL') {
    textResult = multiElementToString(element.length / 4, dataSet.float);
  }

  return textResult;
}

/***/ }),

/***/ "./util/index.js":
/*!***********************!*\
  !*** ./util/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(/*! ./util.js */ "./util/util.js");

Object.keys(_util).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _util[key];
    }
  });
});

var _parseTM = __webpack_require__(/*! ./parseTM.js */ "./util/parseTM.js");

Object.defineProperty(exports, 'parseTM', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parseTM).default;
  }
});

var _parseDA = __webpack_require__(/*! ./parseDA.js */ "./util/parseDA.js");

Object.defineProperty(exports, 'parseDA', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parseDA).default;
  }
});

var _elementToString = __webpack_require__(/*! ./elementToString.js */ "./util/elementToString.js");

Object.defineProperty(exports, 'explicitElementToString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_elementToString).default;
  }
});

var _dataSetToJS = __webpack_require__(/*! ./dataSetToJS.js */ "./util/dataSetToJS.js");

Object.defineProperty(exports, 'explicitDataSetToJS', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dataSetToJS).default;
  }
});

var _createJPEGBasicOffsetTable = __webpack_require__(/*! ./createJPEGBasicOffsetTable.js */ "./util/createJPEGBasicOffsetTable.js");

Object.defineProperty(exports, 'createJPEGBasicOffsetTable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createJPEGBasicOffsetTable).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./util/parseDA.js":
/*!*************************!*\
  !*** ./util/parseDA.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseDA;
// algorithm based on http://stackoverflow.com/questions/1433030/validate-number-of-days-in-a-given-month
function daysInMonth(m, y) {
  // m is 0 indexed: 0-11
  switch (m) {
    case 2:
      return y % 4 == 0 && y % 100 || y % 400 == 0 ? 29 : 28;
    case 9:case 4:case 6:case 11:
      return 30;
    default:
      return 31;
  }
}

function isValidDate(d, m, y) {
  // make year is a number
  if (isNaN(y)) {
    return false;
  }

  return m > 0 && m <= 12 && d > 0 && d <= daysInMonth(m, y);
}

/**
 * Parses a DA formatted string into a Javascript object
 * @param {string} date a string in the DA VR format
 * @param {boolean} [validate] - true if an exception should be thrown if the date is invalid
 * @returns {*} Javascript object with properties year, month and day or undefined if not present or not 8 bytes long
 */
function parseDA(date, validate) {
  if (date && date.length === 8) {
    var yyyy = parseInt(date.substring(0, 4), 10);
    var mm = parseInt(date.substring(4, 6), 10);
    var dd = parseInt(date.substring(6, 8), 10);

    if (validate) {
      if (isValidDate(dd, mm, yyyy) !== true) {
        throw "invalid DA '" + date + "'";
      }
    }

    return {
      year: yyyy,
      month: mm,
      day: dd
    };
  }
  if (validate) {
    throw "invalid DA '" + date + "'";
  }

  return undefined;
}

/***/ }),

/***/ "./util/parseTM.js":
/*!*************************!*\
  !*** ./util/parseTM.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseTM;
/**
 * Parses a TM formatted string into a javascript object with properties for hours, minutes, seconds and fractionalSeconds
 * @param {string} time - a string in the TM VR format
 * @param {boolean} [validate] - true if an exception should be thrown if the date is invalid
 * @returns {*} javascript object with properties for hours, minutes, seconds and fractionalSeconds or undefined if no element or data.  Missing fields are set to undefined
 */
function parseTM(time, validate) {
  if (time.length >= 2) // must at least have HH
    {
      // 0123456789
      // HHMMSS.FFFFFF
      var hh = parseInt(time.substring(0, 2), 10);
      var mm = time.length >= 4 ? parseInt(time.substring(2, 4), 10) : undefined;
      var ss = time.length >= 6 ? parseInt(time.substring(4, 6), 10) : undefined;
      var ffffff = time.length >= 8 ? parseInt(time.substring(7, 13), 10) : undefined;

      if (validate) {
        if (isNaN(hh) || mm !== undefined && isNaN(mm) || ss !== undefined && isNaN(ss) || ffffff !== undefined && isNaN(ffffff) || hh < 0 || hh > 23 || mm && (mm < 0 || mm > 59) || ss && (ss < 0 || ss > 59) || ffffff && (ffffff < 0 || ffffff > 999999)) {
          throw "invalid TM '" + time + "'";
        }
      }

      return {
        hours: hh,
        minutes: mm,
        seconds: ss,
        fractionalSeconds: ffffff
      };
    }

  if (validate) {
    throw "invalid TM '" + time + "'";
  }

  return undefined;
}

/***/ }),

/***/ "./util/util.js":
/*!**********************!*\
  !*** ./util/util.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var stringVrs = {
  AE: true,
  AS: true,
  AT: false,
  CS: true,
  DA: true,
  DS: true,
  DT: true,
  FL: false,
  FD: false,
  IS: true,
  LO: true,
  LT: true,
  OB: false,
  OD: false,
  OF: false,
  OW: false,
  PN: true,
  SH: true,
  SL: false,
  SQ: false,
  SS: false,
  ST: true,
  TM: true,
  UI: true,
  UL: false,
  UN: undefined, // dunno
  UR: true,
  US: false,
  UT: true
};

/**
 * Tests to see if vr is a string or not.
 * @param vr
 * @returns true if string, false it not string, undefined if unknown vr or UN type
 */
var isStringVr = function isStringVr(vr) {
  return stringVrs[vr];
};

/**
 * Tests to see if a given tag in the format xggggeeee is a private tag or not
 * @param tag
 * @returns {boolean}
 */
var isPrivateTag = function isPrivateTag(tag) {
  var lastGroupDigit = parseInt(tag[4], 10);
  var groupIsOdd = lastGroupDigit % 2 === 1;

  return groupIsOdd;
};

/**
 * Parses a PN formatted string into a javascript object with properties for givenName, familyName, middleName, prefix and suffix
 * @param personName a string in the PN VR format
 * @param index
 * @returns {*} javascript object with properties for givenName, familyName, middleName, prefix and suffix or undefined if no element or data
 */
var parsePN = function parsePN(personName) {
  if (personName === undefined) {
    return undefined;
  }
  var stringValues = personName.split('^');

  return {
    familyName: stringValues[0],
    givenName: stringValues[1],
    middleName: stringValues[2],
    prefix: stringValues[3],
    suffix: stringValues[4]
  };
};

exports.isStringVr = isStringVr;
exports.isPrivateTag = isPrivateTag;
exports.parsePN = parsePN;

/***/ }),

/***/ "./version.js":
/*!********************!*\
  !*** ./version.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = '1.8.0';

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })

/******/ });
});
//# sourceMappingURL=dicomParser.node.js.map