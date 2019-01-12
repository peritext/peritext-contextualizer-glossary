/* eslint react/no-danger : 0 */

import React from 'react';

const Inline = ( {

  /*
   * resource,
   * contextualizer,
   */
  contextualization,
  renderingMode,
  children,
}, {
} ) => {
  return (
    <span
      id={ contextualization.id }
      className={ `peritext-contextualization inline glossary rendering-mode-${renderingMode}` }
    >
      {children}
    </span>
  );
};


export default Inline;
