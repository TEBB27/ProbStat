import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  markdown: {
    math: true
  },
  locales: {
    root: {
      label: 'Español',
      lang: 'es'
    },
  },

  title: "Probabilidad y Estadística 🚀",
  description: "Conjunto de apuntes y notas del curso de probabilidad funamental para ingenieros industriales",
  themeConfig: {
    // logo: '/logo-probability.svg',
    // siteTitle: false,
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Temas', link: '/markdown-examples' },
      { text: 'Equipo', link: '/team' }
    ],

    sidebar: [
      {
        text: 'Introducción',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Estadística Descriptiva',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Probabilidad',
        items: [
          {text:'Distribuciones Discretas',
            items: [
              { text: 'Introducción', link: '/src/probability/discrete-distributions/introduction' },
              { text: 'Binomial', link: '/src/probability/discrete-distributions/binomial' },
              { text: 'Poisson', link: '/src/probability/discrete-distributions/poisson' },
              { text: 'Hipergeométrica', link: '/src/probability/discrete-distributions/hypergeometric' }
          ]},
          {text:'Distribuciones Continuas',
            items: [
              { text: 'Introducción', link: '/src/probability/continous-distributions/introduction' },
              { text: 'Normal', link: '/src/probability/continous-distributions/normal' },
              {text:'Aproximación Normal',
                items: [
                  { text: 'Aproximación binomial a la normal', link: '/src/probability/continous-distributions/normal-approximation/de-moivre-laplace.md' },
                  { text: 'Binomial', link: '/src/probability/discrete-distributions/binomial' },
                  { text: 'Poisson', link: '/src/probability/discrete-distributions/poisson' },
                  { text: 'Hipergeométrica', link: '/src/probability/discrete-distributions/hypergeometric' }
              ]},
          ]},
        ]
      },
      {
        text: 'Inferencia',
        items: [
          {text:'Muestreo',
            items: [
              { text: 'Muestreo vs Diseño Experimental', link: '/src/inference/sampling/sampling-vs-experimentaldesign' },
              { text: 'Binomial', link: '/src/probability/discrete-distributions/binomial' },
              { text: 'Poisson', link: '/src/probability/discrete-distributions/poisson' },
              { text: 'Hipergeométrica', link: '/src/probability/discrete-distributions/hypergeometric' }
          ]},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TEBB27' },
      { icon: 'instagram', link: 'https://instagram.com/tebb2722' },
      { icon: 'x', link: 'https://x.com/tebb_27' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025'
    }



    
  }
})
