import React from 'react'

const BlogPageDetails = ({ page }) => {
  console.log("page",page)
  return (
    <div className='container  p-8 pb-16'>
      <section className='mx-auto px-4 md:max-w-[800px] xl:max-w-[1600px]'>
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
  console.log("data",data)
  const page = data[0] || null

  if (!page) {
    return { notFound: true }
  }

  return {
    props: { page },
  }
}

export default BlogPageDetails
