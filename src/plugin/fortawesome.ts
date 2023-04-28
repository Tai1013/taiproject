import { library } from '@fortawesome/fontawesome-svg-core'
import { faVuejs, faFacebook, faInstagram, faGithub, faFlickr, faSlack, faHtml5, faSquareJs, faNode, faSkype, faGitlab, faTrello, faSass, faNpm, faNodeJs, faGit, faGitAlt, faFontAwesome, faCss3Alt, faBitbucket, faFigma, faYarn, faBootstrap, faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons'

library.add(faVuejs, faFacebook, faInstagram, faGithub, faFlickr, faSlack, faHtml5, faSquareJs, faNode, faSkype, faGitlab, faTrello, faSass, faNpm, faNodeJs, faGit, faGitAlt, faFontAwesome, faCss3Alt, faBitbucket, faFigma, faYarn, faBootstrap, faYoutube, faGoogle)

export type FabIcons =
  'facebook' | 'instagram' | 'flickr' | 'youtube' | 'google' |
  'github' | 'gitlab' | 'bitbucket' |
  'html5' | 'square-js' | 'css3-alt' | 'sass' | 'bootstrap' |
  'vuejs' | 'node' | 'node-js' | 'npm' | 'yarn' |
  'git' | 'git-alt' |
  'slack' | 'skype' | 'trello' |
  'font-awesome' | 'figma'
