import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
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
    // logo: '🚀' ,
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
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Estadística Descriptiva',
        collapsed: true,
        items: [
          {text:'Conceptos iniciales',
            collapsed: true,
            items: [
              { text: 'Población vs Muestra', link: '/src/descriptive-statistic/initial-concepts/sample' },
              { text: 'Parámetro Vs Estadístico', link: '/src/descriptive-statistic/initial-concepts/parametrosVsEstadistico' },
              { text: 'Estadística Descriptiva Vs Inferencial', link: '/src/descriptive-statistic/initial-concepts/EstadisticaDescriptivaVsInferencia' },
              { text: 'Origen De Un Proyecto', link: '/src/descriptive-statistic/initial-concepts/OrigenDeProyecto' },
              { text: 'Planteamiento Cuantitivo', link: '/src/descriptive-statistic/initial-concepts/PlanteamientoCuantitivo' }
          ]},
          {text:'Medidas de Resumen',
            collapsed: true,
            items: [
              { text: 'Gráficos', link: '/src/descriptive-statistic/MedidasdeResumen/Graficos' },
              { text: 'Resumenes Númericos', link: '/src/descriptive-statistic/MedidasdeResumen/ResumenesNumericos' },
              { text: 'Datos Bivariados', link: '/src/descriptive-statistic/MedidasdeResumen/DatosBivariados' }
              ]},
        ]
      },
      {
        text: 'Probabilidad',
        collapsed: true,
        items: [
          {text:'Rudimentos',
            collapsed: true,
            items: [
              { text: 'Necesidad', link: '/src/probability/Rudimentos/Necesidad' },
              { text: 'Conceptos Básicos', link: '/src/probability/Rudimentos/ConceptosBasicos' },
              { text: 'Conteo', link: '/src/probability/Rudimentos/Conteo' },
              { text: 'Probabilidad Uniones-Intersecciones', link: '/src/probability/Rudimentos/Probabilidad_Uniones-Intersecciones' },
              { text: 'Regla de Bayes', link: '/src/probability/Rudimentos/ReglaDeBayes' }
              ]},
          {text:'Distribuciones Discretas',
            collapsed: true,
            items: [
              { text: 'Introducción', link: '/src/probability/discrete-distributions/introduction' },
              { text: 'Binomial', link: '/src/probability/discrete-distributions/binomial' },
              { text: 'Poisson', link: '/src/probability/discrete-distributions/poisson' },
              { text: 'Hipergeométrica', link: '/src/probability/discrete-distributions/hypergeometric' }
          ]},
          {text:'Distribuciones Continuas',
            collapsed: true,
            items: [
              { text: 'Introducción', link: '/src/probability/continous-distributions/introduction' },
              { text: 'Normal', link: '/src/probability/continous-distributions/normal' },
              { text: 'Aproximación Normal', link: '/src/probability/continous-distributions/normal-approximation' },
          ]},
        ]
      },
      {
        text: 'Inferencia',
        collapsed: true,
        items: [
          {text:'Muestreo',
            collapsed: true,
            items: [
              { text: 'Muestreo vs Diseño Experimental', link: '/src/inference/Muestreo/MuestreovsDExp' },
              { text: 'Distribuciones muestrales', link: '/src/inference/Muestreo/DistribucionesMuestrales' },
              { text: 'Teorema Central del Limite (TCL)', link: '/src/inference/Muestreo/TCL' },
              { text: 'Aplicación del TCL', link: '/src/inference/Muestreo/AplicacionTCL' }
          ]},
          {text:'Estimación',
            collapsed: true,
            items: [
              { text: 'Introducción', link: '/src/inference/Estimacion/Introducion' },
              { text: 'Estimación puntual', link: '/src/inference/Estimacion/EstimacionPuntual' },
              { text: 'Estimación por Intervalo-media', link: '/src/inference/Estimacion/EstimacionIntMedia' },
              { text: 'Estimación por diferencia de medias', link: '/src/inference/Estimacion/EstimacionDifMedias' }
          ]},
          {text:'Contraste de hipótesis',
            collapsed: true,
            items: [
              { text: 'Introducción', link: '/src/inference/ContrasteHipotesis/Introduccion' },
              { text: 'Contraste para la media', link: '/src/inference/ContrasteHipotesis/ContrasteMedia' },
              { text: 'Contraste para la diferencia de medias', link: '/src/inference/ContrasteHipotesis/ContrasteDifMedias' },
              { text: 'Contraste para la diferencia de proporciones', link: '/src/inference/ContrasteHipotesis/ContrasteDifProporciones' }
          ]}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TEBB27' },
      { icon: 'linkedin', link: 'www.linkedin.com/in/tomás-esteban-briceño-bernal-6038251ba' },
      { icon: 'x', link: 'https://x.com/tebb_27' },
      { icon: 'instagram', link: 'https://instagram.com/tebb2722' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025'
    }



    
  }
})
