import React from 'react'
import ActionAreaCard from '@/components/studyDestinationComponents/studyDestinationCard'

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

const Blog = ({ blogs }) => {
  return (
    <div className="container mx-auto p-8 pb-16 pt-[20vw] md:pt-[7.25vw]">
      <h1 className="text-h4TextPhone md:text-h4Text font-bold text-center mb-[2vw]">
        Blogs
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 md:max-w-[1312px] max-w-[616px] grid-flow-row justify-center mx-auto gap-[16px] md:gap-[16px] lg:gap-[24px] xl:gap-[32px]">
        {blogs.map((blog) => (
          <ActionAreaCard
            key={blog.id}
            href={`/${blog.slug}`}
            image={blog.imageUrl || "/assets/Images/blogs/placeholder.webp"}
            title={decodeWpEntities(blog.title?.rendered || '', { decodeNumeric: true })}
            category="Blog"
            description={decodeWpEntities(blog.acf?.summary || 'No description available')}
          />
        ))}
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
  const res = await fetch(
    `https://srv757671.hstgr.cloud/wp-json/wp/v2/blogs?_fields=id,slug,title,acf&per_page=100`
  )
  const blogs = await res.json()

  // Fetch image URLs for each blog using the ACF thumbnail ID
  const blogsWithImages = await Promise.all(
    blogs.map(async (blog) => {
      let imageUrl = null
      if (blog.acf?.thumbnail) {
        try {
          const imgRes = await fetch(
            `https://srv757671.hstgr.cloud/wp-json/wp/v2/media/${blog.acf.thumbnail}`
          )
          const imgData = await imgRes.json()
          imageUrl = imgData.source_url
        } catch (err) {
          console.error("Error fetching media:", err)
        }
      }
      return { ...blog, imageUrl }
    })
  )

  return {
    props: { blogs: blogsWithImages },
  }
}



export default Blog
