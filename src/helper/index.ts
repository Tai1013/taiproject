export const pathFile = (url: string) => {
  if (url.indexOf('@/') === 0) return new URL(`../${url.replace('@/', '')}`, import.meta.url).href
  return url
}
