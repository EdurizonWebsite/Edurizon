import React from 'react'

const BlogPageDetails = ({ page }) => {
  return (
    <div className='container  p-8 pb-16 pt-[20vw] md:pt-[7.25vw]'>
      <section className='mx-auto  max-w-[800px]'>
        <h1 className='text-h4TextPhone md:text-h4Text pb-[2vw] font-bold'>{page.title.rendered}</h1>
        <div className='wp-content' dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const res = await fetch(
    `https://srv757671.hstgr.cloud/wp-json/wp/v2/posts?slug=${id}&_fields=id,slug,title,content`
  )
  const data = await res.json()
  const page = data[0] || null

  if (!page) {
    return { notFound: true }
  }

  return {
    props: { page },
  }
}


export default BlogPageDetails