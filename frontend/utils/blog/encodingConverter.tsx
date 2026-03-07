
const normalizeEncodedEntities = (input:string) => {
    if (!input) return input
  
    // WordPress sometimes returns entities that are escaped one or more times, e.g. "&amp;#8211;" or "&amp;amp;ndash;"
    let out = input
    for (let i = 0; i < 4; i += 1) {
      const next = out.replace(/&amp;((?:#\d+|#x[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]+);)/g, '&$1')
      if (next === out) break
      out = next
    }
    return out
  }
  
  const decodeNumericEntities = (input:string) => {
    if (!input) return input
    return input
      .replace(/&#(\d+);/g, (_, num) => {
        const codePoint = Number(num)
        return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : _
      })
      .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => {
        const codePoint = Number.parseInt(hex, 16)
        return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : _
      })
  }
  
  const decodeWpEntities = (input:string, { decodeNumeric = false } = {}) => {
    const normalized = normalizeEncodedEntities(input)
    const maybeNumeric = decodeNumeric ? decodeNumericEntities(normalized) : normalized
  
    // Common named dash entities (kept for plain-text rendering when decodeNumeric is false)
    return maybeNumeric.replace(/&ndash;|&mdash;/g, (m) => (m === '&ndash;' ? '–' : '—'))
  }
  
  export {decodeWpEntities}