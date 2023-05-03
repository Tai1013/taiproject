import { firestoreXhr } from './'

interface EmailOptions {
  name: string
  email: string
  content: string
}

export const sendEmail = (options: EmailOptions) => {
  return new Promise(async (resolve, reject) => {
    const data = options
    await firestoreXhr({
      method: 'add',
      url: 'Database/Taiproject/Email',
      data
    }).then(res => resolve(res), reject)
  })
}
