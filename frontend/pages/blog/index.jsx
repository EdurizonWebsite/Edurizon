import React from 'react'
import Link from 'next/link'
import ActionAreaCard from '@/components/studyDestinationComponents/studyDestinationCard'
import { decodeWpEntities } from '@/utils/blog/encodingConverter'

const Blog = ({ blogs, page, totalPages }) => {
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
            image={blog.imageUrl || '/assets/Images/blogs/placeholder.webp'}
            title={decodeWpEntities(blog.title?.rendered || '', { decodeNumeric: true })}
            category="Blog"
            description={decodeWpEntities(blog.acf?.summary || 'No description available')}
          />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        {page > 1 && (
          <Link
            href={{ pathname: '/blog', query: { page: page - 1 } }}
            className="rounded-full border border-orangeChosen px-4 py-2 text-sm font-medium text-orangeChosen hover:bg-orangeChosen hover:text-white transition-colors"
          >
            Previous Page
          </Link>
        )}
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        {page < totalPages && (
          <Link
            href={{ pathname: '/blog', query: { page: page + 1 } }}
            className="rounded-full border border-orangeChosen px-4 py-2 text-sm font-medium text-orangeChosen hover:bg-orangeChosen hover:text-white transition-colors"
          >
            Next Page
          </Link>
        )}
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
  const perPage = 15
  const pageParam = Array.isArray(context.query.page) ? context.query.page[0] : context.query.page
  const page = Number.parseInt(pageParam || '1', 10) || 1

  const res = await fetch(
    `https://srv757671.hstgr.cloud/wp-json/wp/v2/blogs?_fields=id,slug,title,acf&per_page=${perPage}&page=${page}`
  )

  if (!res.ok) {
    return { notFound: true }
  }

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

  const totalPages = Number.parseInt(res.headers.get('X-WP-TotalPages') || '1', 10) || 1

  return {
    props: { blogs: blogsWithImages, page, totalPages },
  }
}



export default Blog
