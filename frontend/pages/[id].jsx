import React from 'react'
import Head from 'next/head'
import {decodeWpEntities} from '@/utils/blog/encodingConverter.tsx'

const BlogPageDetails = ({ page, metaDescription, metaTitle }) => {
  return (
    <div className='container  p-8 pb-16 pt-[20vw] md:pt-[7.25vw]'>
      <Head>
        <title>{decodeWpEntities(metaTitle, { decodeNumeric: true })}</title>
        <meta name="description" content={decodeWpEntities(metaDescription, { decodeNumeric: true })} />
        {/* <meta name="canonical" content={decodeWpEntities(metaCanonical, { decodeNumeric: true })} /> */}
      </Head>
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
      `https://srv757671.hstgr.cloud/wp-json/wp/v2/posts?slug=${id}&_fields=id,slug,title,content,yoast_head_json`
    )

    if (!res.ok) {
      return { notFound: true }
    }
    

    const data = await res.json()
    const metaDescription =
    data[0]?.yoast_head_json?.description || null
    const metaTitle =
    data[0]?.yoast_head_json?.title || null

  
    const page = (Array.isArray(data) && data[0]) || null

    if (!page) {
      return { notFound: true }
    }
    return {
      props: { page, metaDescription, metaTitle },
    }
  } catch (error) {
    return { notFound: true }
  }
}


export default BlogPageDetails