/***** IMPORT ***********************************************************************************/
import { join } from 'path'
import { Portfolio } from '@interfaces/Portfolio';
import { getDir, getFileNames, getAllItems, getItemInPath, markdownToHtml } from './md';

/***** GET DIR **********************************************************************************/
const PORTFOLIO_DIR = getDir('/content/portfolios')

/***** GET BLOG NAME *****************************************************************************/
const getPortfolioFileNames = () => {
    return getFileNames(PORTFOLIO_DIR)
}

/***** GET PORTFOLI SLUGS  ************************************************************************/
const getPortfolioSlugs = () => {
    return getPortfolioFileNames().map(fileName => fileName.replace(/\.md$/, ''))
}

/***** GET PORTFOLIO  *****************************************************************************/
const getPortfolio = (fileName: string): Portfolio => {
    const portfolio = getItemInPath(join(PORTFOLIO_DIR, fileName)) as Portfolio;
    portfolio.slug = fileName.replace(/\.md$/, '')
    return portfolio;
}

/***** GET PORTFOLIOS  ***************************************************************************/
const getPortfolios = (): Portfolio[] => {
    const names = getPortfolioFileNames()
    return getAllItems(names, getPortfolio) as Portfolio []
}

/***** GET PORTFOLIO BY SLUG  ***********************************************************************/
const getPortfolioBySlug = (slug: string) => {
    const fileName = slug + '.md'
    return getPortfolio(fileName)
}

/***** GET PORTFOLIO BY SLUG WITH MARKDOWN  ********************************************************/
const getPortfolioBySlugWithMarkdown = async (slug: string): Promise<Portfolio>  => {
    const portfolio = getPortfolioBySlug(slug)
    portfolio.content = await markdownToHtml(portfolio.content)
    return portfolio
}

/***** EXPORT ********* ****************************************************************************/
export { getPortfolios, getPortfolioBySlugWithMarkdown, getPortfolioSlugs }