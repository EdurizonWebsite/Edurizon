import React from 'react'
import {decodeWpEntities} from '@/utils/blog/encodingConverter.tsx'

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