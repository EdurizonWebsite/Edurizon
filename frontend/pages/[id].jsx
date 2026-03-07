import React from 'react'

const normalizeEncodedEntities = (input) => {
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

const decodeNumericEntities = (input) => {
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

const decodeWpEntities = (input, { decodeNumeric = false } = {}) => {
  const normalized = normalizeEncodedEntities(input)
  const maybeNumeric = decodeNumeric ? decodeNumericEntities(normalized) : normalized

  // Common named dash entities (kept for plain-text rendering when decodeNumeric is false)
  return maybeNumeric.replace(/&ndash;|&mdash;/g, (m) => (m === '&ndash;' ? '–' : '—'))
}

const BlogPageDetails = ({ page }) => {
  return (
    <div className='container  p-8 pb-16 pt-[20vw] md:pt-[7.25vw]'>
      <section className='mx-auto  max-w-[1200px]'>
        <h1 className='text-h2TextPhone md:text-h2Text leading-[120%] pb-[2vw] font-bold'>
          {decodeWpEntities(page.title.rendered, { decodeNumeric: true })}
        </h1>
        <div
          className='wp-content'
          dangerouslySetInnerHTML={{ __html: decodeWpEntities(page.content.rendered) }}
        />
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  try {
    const res = await fetch(
      `https://srv757671.hstgr.cloud/wp-json/wp/v2/posts?slug=${id}&_fields=id,slug,title,content`
    )

    if (!res.ok) {
      return { notFound: true }
    }

    const data = await res.json()
    const page = (Array.isArray(data) && data[0]) || null

    if (!page) {
      return { notFound: true }
    }

    return {
      props: { page },
    }
  } catch (error) {
    return { notFound: true }
  }
}


export default BlogPageDetails