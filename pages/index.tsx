/***** IMPORT ***********************************************************************************/
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { BlogList } from "@components/blogs";
import { PortfolioList } from "@components/portfolios";
import { BaseLayout } from "@components/layouts";
import { getBlogs } from "@lib/blogs";
import { Blog } from "@interfaces/Blog";
import { getDir, saveSearchData } from "@lib/md";
import { getPortfolios } from "@lib/portfolios";
import { Portfolio } from "@interfaces/Portfolio";

/***** PROPS **************************************************************************************/
type Props = {
  blogs: Blog[];
  portfolios: Portfolio[];
};

/***** HOME ****************************************************************************************/
const Home: NextPage<Props> = ({ blogs, portfolios }) => {
  return (
    <BaseLayout>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Adobe Experience Platform Exploration
        <Link href="/blogs" legacyBehavior>
          <a className="text-sm ml-1 text-indigo-600">(See All)</a>
        </Link>
      </h2>
      <BlogList blogs={blogs} />

      <br></br>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Adobe Experience Platform Certifications
        <Link href="/portfolios" legacyBehavior>
          <a className="text-sm ml-1 text-indigo-600">(See All)</a>
        </Link>
      </h2>
      <PortfolioList portfolios={portfolios} />
    </BaseLayout>
  );
};

/***** GET STAIC PROPS *************************************************************************/
export const getStaticProps: GetStaticProps = () => {
  const blogs = getBlogs();
  const portfolios = getPortfolios();

  const content = {
    blogs,
    portfolios,
  };

  saveSearchData(content);

  return {
    props: {
      blogs: blogs.slice(0, 4),
      portfolios: portfolios.slice(0, 8),
    },
  };
};

/***** EXPORT ***********************************************************************************/
export default Home;
