/***** IMPORT ***********************************************************************************/
import { join } from 'path'
import { Blog } from '@interfaces/Blog'
import { getDir, getFileNames, getItemInPath, getAllItems, markdownToHtml } from './md';

/***** GET DIR ***********************************************************************************/
const BLOG_DIR = getDir('/content/blogs')

/***** GET BLOG NAME *****************************************************************************/
const getBlogFileName = () => {
    return getFileNames(BLOG_DIR)
}

/***** GET BLOG  *********************************************************************************/
  const getBlog = (fileName: string): Blog => {
    const blog = getItemInPath(join(BLOG_DIR, fileName)) as Blog;
    blog.slug = fileName.replace(/\.md$/, '')
    return blog;
}

/***** GET BLOGS  ********************************************************************************/
const getBlogs = (): Blog[] => {
    const names = getBlogFileName()
    return getAllItems(names, getBlog) as Blog []
}

/***** GET BLOGS SLUGS  ***************************************************************************/
const getBlogsSlugs = () => {
    return getBlogFileName().map(fileName => fileName.replace(/\.md$/, ''))
}

/***** GET BLOG BY SLUG  ***************************************************************************/
const getBlogBySlug = (slug: string) => {
    const fileName = slug + '.md'
    return getBlog(fileName)
}

/***** GET BLOG BY SLUG WITH MARKDOWN  **************************************************************/
const getBlogBySlugWithMarkdown = async (slug: string): Promise<Blog>  => {
    const blog = getBlogBySlug(slug)
    blog.content = await markdownToHtml(blog.content)
    return blog
}

/***** EXPORT ********* ****************************************************************************/
export { 
    getBlogFileName,
    getBlog,
    getBlogs,
    getBlogsSlugs,
    getBlogBySlug,
    getBlogBySlugWithMarkdown
}