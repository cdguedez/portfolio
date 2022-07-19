// // eslint-disable-next-line import/no-absolute-path
// import efiempresaDesktop from '/src/assets/images/efiempresa-desktop.jpg'
// // eslint-disable-next-line import/no-absolute-path
// import efiempresaMobile from '/src/assets/images/efiempresa-mobile.jpg'
// // eslint-disable-next-line import/no-absolute-path
// import draDesktop from '/src/assets/images/drangelachamorro-desktop.jpg'
// // eslint-disable-next-line import/no-absolute-path
// import draMobile from '/src/assets/images/drangelachamorro-mobile.jpg'
// // eslint-disable-next-line import/no-absolute-path
// import efiempleoDesktop from '/src/assets/images/efiempleo-desktop.jpg'
// // eslint-disable-next-line import/no-absolute-path
// import efiempleoMobile from '/src/assets/images/efiempleo-mobile.jpg'
// // eslint-disable-next-line import/no-absolute-path
// import cVehiDesktop from '/src/assets/images/credivehiculos-desktop.jpg'
// // eslint-disable-next-line import/no-absolute-path
// import cVehiMobile from '/src/assets/images/credivehiculos-mobile.jpg'
// // eslint-disable-next-line import/no-absolute-path
// import efitratosDesktop from '/src/assets/images/app-efitratos-desktop.jpg'
// // eslint-disable-next-line import/no-absolute-path
// import efitratosMobile from '/src/assets/images/app-efitratos-mobile.jpg'
// // eslint-disable-next-line import/no-absolute-path
// import contratosDesktop from '/src/assets/images/contratos-desktop.jpg'

export const projects = [
  {
    id: 'CG01',
    name: 'API REST para tienda virtual',
    url: 'https://api-store-cdguedez.herokuapp.com/api/v1/users',
    repo: 'https://github.com/cdguedez/api-store-cguedez',
    images: [],
    description: 'API REST creada para un curso de platzi',
    isFinish: true,
    skills: ['Nodejs', 'express', 'passportjs', 'sequelize', 'MySql', 'cors', 'bcrypt', 'nodemailer', 'jwt']
  },
  {
    id: 'CG02',
    name: 'Frontend para tienda Virtual',
    url: 'https://cdguedez.github.io/react-shop/',
    repo: 'https://github.com/cdguedez/react-shop',
    images: [],
    description: 'Frontend de tienda virtual creada en un curso de react',
    isFinish: true,
    skills: ['Reactjs', 'hooks', 'webpack', 'sass', 'styled-components', 'formik', 'react-router-dom']
  },
  {
    id: 'CG03',
    name: 'SPA Efitratos',
    url: 'https://app.efitratos.com/',
    images: [
      // efitratosDesktop,
      // efitratosMobile
    ],
    description: 'Sistema de gestion de propuestas realizado con el STACK MySQL ExpressVuejs Nodejs',
    isFinish: true,
    skills: ['Nodejs', 'Vuejs', 'express', 'MySql', 'Sequelize', 'vue-bootstrap']
  },
  {
    id: 'CG04',
    name: 'Backoffice de contratos',
    url: 'https://contratos.efiempresa.com/',
    images: [
      // contratosDesktop
    ],
    description: 'Sistema de contratos realizado con PHP, bootstrapp, javascrip vanila',
    isFinish: true,
    skills: ['css3', 'JS vanila', 'PHP 7', 'html5', 'bootstrap', 'MySql']
  },
  {
    id: 'CG05',
    name: 'Portal de empleos Efiempleo',
    url: 'https://efiempleo.com/',
    images: [
      // efiempleoDesktop,
      // efiempleoMobile
    ],
    description: 'Portal de empleos realizado con wordpress, perteneciante a Efiempresa LLC.',
    isFinish: true,
    skills: ['wordpress', 'woocomerce', 'css3']
  },
  {
    id: 'CG06',
    name: 'Efiempresa LLC',
    url: 'https://efiempresa.com/',
    images: [
      // efiempresaDesktop,
      // efiempresaMobile
    ],
    description: 'Web de Efiempresa realizada con wordpress para mi empleador.',
    isFinish: true,
    skills: ['wordpress', 'elementor', 'css3']
  },
  {
    id: 'CG07',
    name: 'Dra Angela Chamorro',
    url: 'https://www.drangelachamorro.com/',
    images: [
      // draDesktop,
      // draMobile
    ],
    description: 'Web de Efiempresa realizada con wordpress, con mi anterior empleador Efiempresa LLC.',
    isFinish: true,
    skills: ['wordpress', 'css3', 'JS vanila']
  },
  {
    id: 'CG08',
    name: 'Credivehiculos',
    url: 'https://credivehiculos.com/',
    images: [
      // cVehiDesktop,
      // cVehiMobile
    ],
    description: 'Web realizada en wordpress.',
    isFinish: true,
    skills: ['wordpress', 'elementor', 'css3']
  },
  {
    id: 'CG09',
    name: 'Recambios kawasaki',
    url: 'http://recambioskawasakimoto.com/',
    images: [],
    description: 'web de recambios realizada en wordpress',
    isFinish: false,
    skills: ['wordpress', 'css3', 'woocomerce']
  }
]

export const me = {
  name: 'Carlos Guedez',
  jobTitle: 'Desarrollador Web',
  country: 'VENEZUELA',
  language: [
    { id: 'l1', name: 'spanish', level: 'nativo' },
    { id: 'l2', name: 'english', level: 'basic' }
  ],
  skills: [
    'Linux',
    'html5',
    'css33',
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
    { name: 'linkedin', url: 'https://linkedin.com/in/cdguedez' },
    { name: 'github', url: 'https://github.com/cdguedez' }
  ],
  hobbies: ['leer', 'series', 'cine', 'montana'],
  age: 29
}
