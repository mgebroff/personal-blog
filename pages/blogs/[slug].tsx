/***** IMPORT ***********************************************************************************/
import {  GetStaticPaths, GetStaticProps, NextPage } from 'next/types'
import { PageLayout } from '@components/layouts';
import { getBlogBySlugWithMarkdown, getBlogsSlugs } from '@lib/blogs';
import { Blog } from '@interfaces/Blog'
import { ParsedUrlQuery } from 'querystring';
import { BlogHeader } from '@components/blogs';

/***** PROPS TYPE *******************************************************************************/
type Props = {
  blog: Blog
}

/***** BLOG DETAIL *******************************************************************************/
const BlogDetail: NextPage<Props> = ({blog}) => {
  return (
    <>
      <PageLayout pageTitle={blog.title} >
        <div className="w-2/3 m-auto">
            <BlogHeader blog={blog} />
          <article className="prose lg:prose-lg markdown-image-50">
            {/* Blog Content Here */}
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </article>
        </div>
      </PageLayout>
    </>
  )
}

/***** PARSED URL QUERY ***********************************************************************/
interface Params extends ParsedUrlQuery {
  slug: string
}

/***** GET STAIC PROPS *************************************************************************/
export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const { slug } = context.params!
  const blog = await getBlogBySlugWithMarkdown(slug)

  return {
    props: {  blog }
  }
}

/***** GET STAIC PATHS *************************************************************************/
export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getBlogsSlugs()
  const paths = slugs.map(slug => ({params: {slug}}))

  return {
    paths,
    fallback: false
  }
}

/***** EXPORT ***********************************************************************************/
export default BlogDetail;