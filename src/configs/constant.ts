export const MENU_LIST = [
  // { title: 'about', name: 'home', hash: '#about' },
  { title: 'skill', name: 'home', hash: '#skill' },
  { title: 'projects', name: 'projects' },
  { title: 'contact', name: 'contact' }
]

type Community = { name: string, href?: string, icon?: GlobalApp.FabIcons }
type ContactList = {
  community: Community[]
}
export const CONTACT_LIST: ContactList = {
  community: [
    { name: 'github', icon: 'github', href: 'https://github.com/Tai1013' },
    { name: 'facebook', icon: 'facebook', href: 'https://www.facebook.com/profile.php?id=100000490608841' },
    { name: 'instagram', icon: 'instagram', href: 'https://www.instagram.com/tf_lin_photo/' },
    { name: 'flickr', icon: 'flickr', href: 'https://www.flickr.com/photos/189523281@N08/' }
  ]
}

type SkillList = {
  name: string
  icons: GlobalApp.FabIcons[]
  list: string[]
}
export const SKILL_LIST: SkillList[] = [
  {
    name: 'frontend',
    icons: ['html5', 'css3-alt', 'sass', 'square-js'],
    list: [
      'HTML | Pug',
      'CSS | SCSS | CSS-in-JS | PostCSS | Autoprefixer',
      'Responsive / Adaptive Web Design',
      'JavaScript ES5 / ES6+ | TypeScript | JQuery',
      'Await / Async | Ajax | Axios | Fetch',
      'Vue Router | Vuex | Pinia | I18n'
    ]
  },
  {
    name: 'develop / framework',
    icons: ['node', 'node-js', 'npm', 'yarn', 'vuejs', 'bootstrap'],
    list: [
      'Npm | Yarn | Pnpm',
      'Webpack CLI | Vue 2 / Vue 3',
      'Vite | Nuxt',
      'PHP Template Engine: Smarty',
      'Bootstrap',
      'Tailwind CSS',
      'Element-UI / Plus',
      'Makefile | Env'
    ]
  },
  {
    name: 'version control',
    icons: ['git', 'git-alt', 'github', 'gitlab', 'bitbucket'],
    list: [
      'Git Command Line',
      'Git Version Control',
      'Git Cherry Pick',
      'Rancher Labs',
      'Github | Gitlab | Bitbucket',
      'Fork'
    ]
  },
  {
    name: 'server / cloud',
    icons: ['google', 'youtube'],
    list: [
      'Google Firebase',
      'YouTube Data API',
      'GitLab CI/CD'
    ]
  },
  {
    name: 'design',
    icons: ['figma', 'font-awesome'],
    list: [
      'Figma | Zeplin',
      'Adobe XD',
      'Adobe Photoshop',
      'Adobe Illustrator'
    ]
  },
  {
    name: 'tools',
    icons: ['skype', 'slack', 'trello', 'google'],
    list: [
      'Google PageSpeed Insights',
      'Skype',
      'Slack',
      'Trello',
      'MantisBT',
      'HackMD'
    ]
  }
]
