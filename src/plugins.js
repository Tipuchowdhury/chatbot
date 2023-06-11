export const plugins = [
  {
    id: 'intent-classification',
    resolve: require('@botonic/plugin-intent-classification'),
    options: {
      locales: ['en', 'es'],
    },
  },
  // {
  //   id: 'ner',
  //   resolve: require('@botonic/plugin-ner'),
  //   options: {
  //     locales: ['en', 'es'],
  //   },
  // },
]
