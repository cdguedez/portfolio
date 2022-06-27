// eslint-disable-next-line import/no-absolute-path
import efiempresaDesktop from '/src/assets/images/efiempresa-desktop.jpg'
// eslint-disable-next-line import/no-absolute-path
import efiempresaMobile from '/src/assets/images/efiempresa-mobile.jpg'
// eslint-disable-next-line import/no-absolute-path
import draDesktop from '/src/assets/images/drangelachamorro-desktop.jpg'
// eslint-disable-next-line import/no-absolute-path
import draMobile from '/src/assets/images/drangelachamorro-mobile.jpg'
// eslint-disable-next-line import/no-absolute-path
import efiempleoDesktop from '/src/assets/images/efiempleo-desktop.jpg'
// eslint-disable-next-line import/no-absolute-path
import efiempleoMobile from '/src/assets/images/efiempleo-mobile.jpg'
// eslint-disable-next-line import/no-absolute-path
import cVehiDesktop from '/src/assets/images/credivehiculos-desktop.jpg'
// eslint-disable-next-line import/no-absolute-path
import cVehiMobile from '/src/assets/images/credivehiculos-mobile.jpg'
// eslint-disable-next-line import/no-absolute-path
import efitratosDesktop from '/src/assets/images/app-efitratos-desktop.jpg'
// eslint-disable-next-line import/no-absolute-path
import efitratosMobile from '/src/assets/images/app-efitratos-mobile.jpg'

export const projects = [
  {
    id: 'CG01',
    name: 'Efiempresa LLC',
    url: 'https://efiempresa.com/',
    images: [
      efiempresaDesktop,
      efiempresaMobile
    ],
    description: 'Web de Efiempresa realizada con wordpress para mi empleador.',
    isFinish: true,
    skills: ['wordpress', 'elementor', 'CSS']
  },
  {
    id: 'CG02',
    name: 'Dra Angela Chamorro',
    url: 'https://www.drangelachamorro.com/',
    images: [
      draDesktop,
      draMobile
    ],
    description: 'Web de Efiempresa realizada con wordpress, con mi anterior empleador Efiempresa LLC.',
    isFinish: true,
    skills: ['wordpress', 'Avada Theme', 'gutenberg page builder', 'CSS', 'JS vanila']
  },
  {
    id: 'CG03',
    name: 'Portal de empleos Efiempleo',
    url: 'https://efiempleo.com/',
    images: [
      efiempleoDesktop,
      efiempleoMobile
    ],
    description: 'Portal de empleos realizado con wordpress, perteneciante a Efiempresa LLC.',
    isFinish: true,
    skills: ['wordpress', 'woocomerce', 'gutenberg page builder', 'CSS']
  },
  {
    id: 'CG04',
    name: 'Credivehiculos',
    url: 'https://credivehiculos.com/',
    images: [
      cVehiDesktop,
      cVehiMobile
    ],
    description: 'Web realizada en wordpress.',
    isFinish: true,
    skills: ['wordpress', 'elementor', 'CSS']
  },
  {
    id: 'CG05',
    name: 'SPA Efitratos',
    url: 'https://app.efitratos.com/',
    images: [
      efitratosDesktop,
      efitratosMobile
    ],
    description: 'Sistema de gestion de propuestas realizado con el STACK MySQL ExpressVuejs Nodejs',
    isFinish: true,
    skills: ['Nodejs', 'Vuejs', 'expressjs', 'MySql', 'middlewares', '@hapi/boom', 'Sequelize', 'ORM', 'Joi', 'vue bootstrap']
  },
  {
    id: 'CG06',
    name: 'Backoffice de contratos',
    url: '#',
    images: [],
    description: 'Sistema de contratos realizado con PHP, bootstrapp, javascrip vanila',
    isFinish: true,
    skills: ['CSS', 'JS vanila', 'PHP 7', 'HTML5', 'bootstrap', 'MySql']
  },
  {
    id: 'CG07',
    name: 'Pagina de recambios kawasaki',
    url: 'http://recambioskawasakimoto.com/',
    images: [],
    description: 'web de recambios realizada en wordpress',
    isFinish: false,
    skills: ['wordpress', 'CSS', 'woocomerce']
  }
]

export const me = {
  name: 'Carlos Guedez',
  country: 'VENEZUELA',
  language: [
    { id: 'l1', name: 'spanish', level: 'nativo' },
    { id: 'l2', name: 'english', level: 'basic' }
  ],
  skills: [
    'Linux',
    'HTML5',
    'CSS3',
    'MySql',
    'wordpress',
    'javaScript',
    'Reactjs',
    'Nodejs',
    'expressjs',
    'Docker'
  ],
  socialLinks: [
    { name: 'twitter', url: 'https://twitter.com/cdguedez' },
    { name: 'linkedin', url: 'https://linkedin.com/in/cdguedez' }
  ],
  hobbies: ['leer', 'series', 'cine', 'montana'],
  age: 29
}
