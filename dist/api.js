"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _got=_interopRequireDefault(require("got"));var _config=_interopRequireDefault(require("./config"));// Make a request with the provided API key
var get=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(string,queryType){var response;return _regenerator.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return(0,_got.default)("http://omdbapi.com?apikey=".concat(_config.default.key).concat(queryType).concat(string),{json:true});case 2:response=_context.sent;return _context.abrupt("return",response.body);case 4:case"end":return _context.stop();}}},_callee,this)}));return function get(_x,_x2){return _ref.apply(this,arguments)}}();var _default=get;exports.default=_default;