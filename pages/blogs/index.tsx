/***** IMPORT ***********************************************************************************/
import { BlogList } from "@components/blogs";
import { PageLayout } from "@components/layouts";
import { Blog } from "@interfaces/Blog";
import Link from "next/link";
import { getBlogs } from "@lib/blogs";
import { GetStaticProps, NextPage } from "next";

/***** PROPS **************************************************************************************/
type Props = {
  blogs: Blog[];
};

/***** BLOGSS PAGE *********************************************************************************/
const BlogsPage: NextPage<Props> = ({ blogs }) => {
  return (
    <PageLayout pageTitle="All Blogs">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        All Adobe Blogs | &nbsp;
        <Link href={`bloglist`} legacyBehavior>
          List View
        </Link>
      </h2>
      <BlogList blogs={blogs} />
    </PageLayout>
  );
};

/***** GET STAIC PROPS *************************************************************************/
export const getStaticProps: GetStaticProps = () => {
  const blogs = getBlogs();

  return {
    props: { blogs },
  };
};

/***** Export ***********************************************************************************/
export default BlogsPage;
