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
}, {
  GlossaryLinkComponent,
}) => {
  const name = contextualizer.alias || resource.data && resource.data.name;
  
  if (GlossaryLinkComponent) {
    return (<span
      id={contextualization.id}
      className="glossary-mention peritext-contextualization peritext-contextualization-inline peritext-contextualization-codex peritext-contextualizer-glossary"
      onClick={onClick}
    >
      <GlossaryLinkComponent href={`#${resource.metadata.id}`}>
        <b>{name}</b>
      </GlossaryLinkComponent>
    </span>);
  } else {
    return (<span
      id={contextualization.id}
      className="glossary-mention"
      onClick={onClick}
    >
      <a href={`#${resource.metadata.id}`}>
        <b>{name}</b>
      </a>
    </span>);
  }
};

GlossaryMention.contextTypes = {
  GlossaryLinkComponent: PropTypes.func,
}

export default GlossaryMention;
