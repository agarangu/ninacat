/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages: {
    es: {
      header: {
        portfolio: 'Trabajo',
        team: 'Equipo'
      },
      portfolio: {
        title: 'Nuestro trabajo',
        subtitle: 'Realizado por Nina Cat, supervisado por el CEO.',
        button: 'Portafolio completo',
        tooltip: 'En construcción'
      },
      team: {
        title: 'Conoce a nuestro Equipo',
        subtitle: '',
        nina: {
          position: 'Ilustradora',
          description: 'Esclava.'
        },
        angus: {
          position: 'CEO',
          description: 'Su presencia inspiradora y su voz adorable son el motor indispensable del equipo. Su principal área de interés es la alimentación personal.'
        },
        mora: {
          position: 'Desarrolladora Jr.',
          description: 'Encargada de realizar tareas que exceden ampliamente su capacidad, sin éxito alguno. Pero valoramos su esfuerzo.'
        },
      },
      footer: {
        developed: 'Desarrollada por '
      }
    },
    en: {
      header: {
        portfolio: 'Portfolio',
        team: 'Team'
      },
      portfolio: {
        title: 'Our Work',
        subtitle: 'Carried out by Nina Cat, overseen by the CEO.',
        button: 'Full portfolio',
        tooltip: 'In development'
      },
      team: {
        title: 'Meet our Team',
        subtitle: '',
        nina: {
          position: 'Illutrator',
          description: 'Slave.'
        },
        angus: {
          position: 'CEO',
          description: 'His inspiring presence and adorable voice are the motor the keeps the team moving. His main area of interest is nutrition (mostly his own).'
        },
        mora: {
          position: 'Jr. Developer',
          description: 'In charge of tasks that wildly excede her abilities, to no avail. But we value her efforts.'
        },
      },
      footer: {
        developed: 'Developed by '
      }
    }
  }
})

export function registerPlugins(app) {
  app.use(vuetify)
  app.use(i18n)
}
