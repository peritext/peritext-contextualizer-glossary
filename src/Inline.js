/* eslint react/no-danger : 0 */

import React from 'react';
import PropTypes from 'prop-types';

const Inline = ( {

  /*
   * contextualizer,
   */
  resource,
  contextualization,
  renderingMode,
  children,
}, {useGlossary = false} ) => {
  if (renderingMode === 'paged') {
    return useGlossary ? (
      <span
        id={ contextualization.id }
        className={ `peritext-contextualization inline glossary rendering-mode-${renderingMode}` }
        href={`#glossary-item-${resource.id}`}
      >
        {children}
      </span>
    ) : children;
  }
  return (
    <span
      id={ contextualization.id }
      className={ `peritext-contextualization inline glossary rendering-mode-${renderingMode}` }
    >
      {children}
    </span>
  );
};

Inline.contextTypes = {
  useGlossary: PropTypes.boolean,
}

export default Inline;
