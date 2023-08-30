/***** IMPORT ***********************************************************************************/
import { BlogList } from "@components/blogs"
import { PageLayout } from "@components/layouts"
import { PortfolioList } from "@components/portfolios"
import { Portfolio } from "@interfaces/Portfolio"
import { getPortfolios } from "@lib/portfolios"
import { GetStaticProps, NextPage } from "next"


/***** PROPS **************************************************************************************/
type Props = {
    portfolios: Portfolio[]
  }

/***** BLOGSS PAGE *********************************************************************************/
const CertificationsPage: NextPage<Props> = ({portfolios}) => {
    return (
        <PageLayout pageTitle="All Certifications">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                All Adobe Certifications
            </h2>
            <PortfolioList portfolios={portfolios} />
        </PageLayout>
    )
}


/***** GET STAIC PROPS *************************************************************************/
export const getStaticProps: GetStaticProps = () => {
    const portfolios = getPortfolios()
  
    return {
      props: { portfolios }
    }
}
 
/***** Export ***********************************************************************************/
export default CertificationsPage