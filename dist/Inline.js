"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/no-danger : 0 */
const Inline = ({
  /*
   * contextualizer,
   */
  resource,
  contextualization,
  renderingMode,
  children
}, {
  useGlossary = false
}) => {
  if (renderingMode === 'paged') {
    return useGlossary ? _react.default.createElement("span", {
      id: contextualization.id,
      className: `peritext-contextualization inline glossary rendering-mode-${renderingMode}`,
      href: `#glossary-item-${resource.id}`
    }, children) : children;
  }

  return _react.default.createElement("span", {
    id: contextualization.id,
    className: `peritext-contextualization inline glossary rendering-mode-${renderingMode}`
  }, children);
};

Inline.contextTypes = {
  useGlossary: _propTypes.default.boolean
};
var _default = Inline;
exports.default = _default;