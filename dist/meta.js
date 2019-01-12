"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  id: 'glossary',
  type: 'peritext-contextualizer',
  name: 'Glossary entry contextualizer',
  acceptedResourceTypes: [{
    type: 'glossary'
  }],
  profile: {
    inline: {
      mutable: true,
      options: {}
    }
  }
};
exports.default = _default;