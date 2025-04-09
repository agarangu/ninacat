/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'spa',
  messages: {
    spa: {
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
    }
  }
})

export function registerPlugins(app) {
  app.use(vuetify)
  app.use(i18n)
}
