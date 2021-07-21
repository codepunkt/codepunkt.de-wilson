export const formatPostDate = (date: number, lang = 'en'): string | number =>
  typeof Date.prototype.toLocaleDateString === 'function'
    ? new Date(date).toLocaleDateString(lang, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : date
