export default {
  type: 'peritext-contextualizer',
  id: 'glossary',
  name: 'Glossary mention',
  coverage: {
    inlineStatic: true,
    blockStatic: false,
    inlineDynamic: true,
    blockDynamic: false,
  },
  model: {
    acceptedResourceTypes: [{type: 'glossary'}],
    inline: {}
  }
}