"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/no-danger : 0 */
const Inline = ({
  /*
   * resource,
   * contextualizer,
   */
  contextualization,
  renderingMode,
  children
}, {}) => {
  return _react.default.createElement("span", {
    id: contextualization.id,
    className: `peritext-contextualization inline glossary rendering-mode-${renderingMode}`
  }, children);
};

var _default = Inline;
exports.default = _default;