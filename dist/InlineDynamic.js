'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders a block asset wrapper as a pure component
 * @param {object} props - properties provided by parent
 * @param {object} props.resource - initial glossary resource
 * @param {object} props.contextualizer - contextualizing information such as alias to use for the mention
 * @param {object} props.contextualization - the contextualization to consume for identifying this specific mention
 * @return {ReactElement} component - the component
 */
var GlossaryMention = function GlossaryMention(_ref) {
  var resource = _ref.resource,
      contextualizer = _ref.contextualizer,
      contextualization = _ref.contextualization,
      onClick = _ref.onClick;

  var name = contextualizer.alias || resource.data && resource.data.name;
  return _react2.default.createElement(
    'span',
    {
      id: contextualization.id,
      className: 'peritext-inline-glossary-mention peritext-contextualization peritext-contextualization-inline peritext-contextualization-web peritext-contextualizer-glossary',
      onClick: onClick
    },
    _react2.default.createElement(
      'b',
      null,
      name
    )
  );
};

exports.default = GlossaryMention;