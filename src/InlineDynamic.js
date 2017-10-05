import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a block asset wrapper as a pure component
 * @param {object} props - properties provided by parent
 * @param {object} props.resource - initial glossary resource
 * @param {object} props.contextualizer - contextualizing information such as alias to use for the mention
 * @param {object} props.contextualization - the contextualization to consume for identifying this specific mention
 * @return {ReactElement} component - the component
 */
const GlossaryMention = ({
  resource,
  contextualizer,
  contextualization,
  onClick,
}) => {
  const name = contextualizer.alias || resource.data && resource.data.name;
  return (<span
    id={contextualization.id}
    className="peritext-inline-glossary-mention peritext-contextualization peritext-contextualization-inline peritext-contextualization-web peritext-contextualizer-glossary"
    onClick={onClick}
  >
    <b>{name}</b>
  </span>);
};

export default GlossaryMention;
