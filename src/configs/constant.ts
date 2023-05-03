import { pathFile } from '@/helper'

export const MENU_LIST = [
  { title: 'skill', name: 'home', hash: '#skill' },
  { title: 'projects', name: 'projects' },
  { title: 'contact', name: 'contact' }
]

type Community = { name: string, href?: string, icon?: GlobalApp.FabIcons }
type ContactList = {
  community: Community[]
  phone: string[],
  email: string[],
  photography: string[]
}
export const CONTACT_LIST: ContactList = {
  community: [
    { name: 'github', icon: 'github', href: 'https://github.com/Tai1013' },
    { name: 'facebook', icon: 'facebook', href: 'https://www.facebook.com/profile.php?id=100000490608841' },
    { name: 'instagram', icon: 'instagram', href: 'https://www.instagram.com/tf_lin_photo/' },
    { name: 'flickr', icon: 'flickr', href: 'https://www.flickr.com/photos/189523281@N08/' }
  ],
  phone: ['0930899555'],
  email: ['frank22199215@gmail.com'],
  photography: ['Instagram: tf_lin_photo']
}

export const SKILL_LIST = [
  {
    name: 'frontend / languages',
    icons: ['html', 'css', 'sass', 'javascript', 'typescript', 'jquery'],
    brands: [
      { icon: 'html', name: 'HTML' },
      { icon: 'css', name: 'CSS' },
      { icon: 'sass', name: 'SCSS' },
      { icon: 'javascript', name: 'JavaScript ES5 / ES6+' },
      { icon: 'typescript', name: 'TypeScript' },
      { icon: 'jquery', name: 'JQuery' }
    ],
    list: [
      'Responsive / Adaptive Web Design',
      'CSS-in-JS | PostCSS | Autoprefixer',
      'Await / Async | Ajax | Axios | Fetch',
      'Vue Router | Vuex | Pinia | I18n | Pug'
    ]
  },
  {
    name: 'develop / framework',
    icons: ['webpack', 'node-js', 'npm', 'yarn', 'vue', 'vite', 'nuxt-js', 'bootstrap-4', 'bootstrap-5', 'element-plus', 'tailwind-css'],
    brands: [
      { icon: 'webpack', name: 'Webpack CLI' },
      { icon: 'node-js', name: 'Node' },
      { icon: 'npm', name: 'Npm' },
      { icon: 'yarn', name: 'Yarn' },
      { icon: 'vue', name: 'Vue 2 / 3' },
      { icon: 'vite', name: 'Vite' },
      { icon: 'nuxt-js', name: 'Nuxt' },
      { icon: 'bootstrap-5', name: 'Bootstrap' },
      { icon: 'element-plus', name: 'Element-UI / Plus' },
      { icon: 'tailwind-css', name: 'Tailwind CSS' }
    ],
    list: [
      'PHP Template Engine: Smarty',
      'Makefile | Env'
    ]
  },
  {
    name: 'version control / server cloud',
    icons: ['git', 'github', 'gitlab', 'bitbucket', 'google-cloud', 'youtube', 'firebase'],
    brands: [
      { icon: 'git', name: 'Git' },
      { icon: 'github', name: 'Github' },
      { icon: 'gitlab', name: 'Gitlab' },
      { icon: 'bitbucket', name: 'Bitbucket' },
      { icon: 'google-cloud', name: 'YouTube Data API' },
      { icon: 'firebase', name: 'Google Firebase' },
      { icon: 'gitlab', name: 'GitLab CI/CD' }
    ],
    list: [
      'Git Command Line',
      'Git Version Control',
      'Git Cherry Pick',
      'Rancher Labs',
      'Fork'
    ]
  },
  {
    name: 'design / tools',
    icons: ['adobe-illustrator', 'adobe-photoshop', 'adobe-xd', 'figma', 'zeplin', 'skype', 'slack', 'trello', 'telegram', 'visual-studio-code'],
    brands: [
      { icon: 'adobe-illustrator', name: 'Illustrator' },
      { icon: 'adobe-photoshop', name: 'Photoshop' },
      { icon: 'adobe-xd', name: 'Adobe XD' },
      { icon: 'figma', name: 'Figma' },
      { icon: 'zeplin', name: 'Zeplin' },
      { icon: 'skype', name: 'Skype' },
      { icon: 'slack', name: 'Slack' },
      { icon: 'trello', name: 'Trello' },
      { icon: 'telegram', name: 'Telegram' },
      { icon: 'visual-studio-code', name: 'Visual Studio Code' }
    ],
    list: [
      'Google PageSpeed Insights',
      'MantisBT',
      'HackMD'
    ]
  }
]

export const PROJECTS_LIST = [
  {
    name: 'manage',
    image: [
      '@/assets/img/projects/manage/1.png',
      '@/assets/img/projects/manage/2.png'
    ],
    dateTime: '2023/03/22',
    href: 'https://tai1013.github.io/manage/#/login',
    subject: 'website design',
    brands: [
      { icon: 'vite', name: 'Vite' },
      { icon: 'vue', name: 'Vue3' },
      { icon: 'sass', name: 'SCSS' },
      { icon: 'typescript', name: 'TypeScript' },
      { icon: 'element-plus', name: 'Element-Plus' },
      { icon: 'firebase', name: 'Firebase' }
    ]
  },
  {
    name: 'video',
    image: [
      '@/assets/img/projects/video/1.png',
      '@/assets/img/projects/video/2.png',
      '@/assets/img/projects/video/3.png',
      '@/assets/img/projects/video/4.png'
    ],
    dateTime: '2022/06/08',
    href: 'https://tai1013.github.io/videoPage/#/',
    subject: 'website design',
    brands: [
      { icon: 'vite', name: 'Vite' },
      { icon: 'vue', name: 'Vue3' },
      { icon: 'sass', name: 'SCSS' },
      { icon: 'javascript', name: 'JavaScript' },
      { icon: 'tailwind-css', name: 'Tailwind CSS' },
      { icon: 'youtube', name: 'Youtube Data API' }
    ]
  },
  {
    name: 'slot',
    image: [
      '@/assets/img/projects/slot/1.png'
    ],
    dateTime: '2022/04/07',
    href: 'https://tai1013.github.io/slotMachine/#/',
    subject: 'website design',
    brands: [
      { icon: 'vue', name: 'Vue2' },
      { icon: 'sass', name: 'SCSS' },
      { icon: 'javascript', name: 'JavaScript' },
      { icon: 'tailwind-css', name: 'Tailwind CSS' }
    ]
  },
  {
    name: 'demoui',
    image: [
      '@/assets/img/projects/demo-ui/1.png',
      '@/assets/img/projects/demo-ui/2.png',
      '@/assets/img/projects/demo-ui/3.png',
      '@/assets/img/projects/demo-ui/4.png'
    ],
    dateTime: '2021/05/12',
    href: 'https://xd.adobe.com/view/70bd8ed8-f6ac-4051-9130-aa22aee59457-25ee/',
    subject: 'ui/ux design',
    brands: [
      { icon: 'adobe-xd', name: 'Adobe XD' },
      { icon: 'adobe-illustrator', name: 'Illustrator' },
      { icon: 'adobe-photoshop', name: 'Photoshop' }
    ]
  },
  {
    name: 'restaurant',
    image: [
      '@/assets/img/projects/restaurant/1.png',
      '@/assets/img/projects/restaurant/2.png',
      '@/assets/img/projects/restaurant/3.png',
      '@/assets/img/projects/restaurant/4.png'
    ],
    dateTime: '2020/03/04',
    href: 'https://xd.adobe.com/view/24b52d8b-640e-4755-5f32-e3b3b430dc97-5284/',
    subject: 'ui/ux design',
    brands: [
      { icon: 'adobe-xd', name: 'Adobe XD' },
      { icon: 'adobe-illustrator', name: 'Illustrator' },
      { icon: 'adobe-photoshop', name: 'Photoshop' }
    ]
  }
]
