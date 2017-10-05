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
var GlossaryMention = function GlossaryMention(_ref, _ref2) {
  var resource = _ref.resource,
      contextualizer = _ref.contextualizer,
      contextualization = _ref.contextualization,
      onClick = _ref.onClick;
  var GlossaryLinkComponent = _ref2.GlossaryLinkComponent;

  var name = contextualizer.alias || resource.data && resource.data.name;

  if (GlossaryLinkComponent) {
    return _react2.default.createElement(
      'span',
      {
        id: contextualization.id,
        className: 'glossary-mention peritext-contextualization peritext-contextualization-inline peritext-contextualization-codex peritext-contextualizer-glossary',
        onClick: onClick
      },
      _react2.default.createElement(
        GlossaryLinkComponent,
        { href: '#' + resource.metadata.id },
        _react2.default.createElement(
          'b',
          null,
          name
        )
      )
    );
  } else {
    return _react2.default.createElement(
      'span',
      {
        id: contextualization.id,
        className: 'glossary-mention',
        onClick: onClick
      },
      _react2.default.createElement(
        'a',
        { href: '#' + resource.metadata.id },
        _react2.default.createElement(
          'b',
          null,
          name
        )
      )
    );
  }
};

GlossaryMention.contextTypes = {
  GlossaryLinkComponent: _propTypes2.default.func
};

exports.default = GlossaryMention;