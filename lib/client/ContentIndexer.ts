/***** IMPORT ***********************************************************************************/
import { SearchContent } from '@interfaces/Markdown'
import * as JsSearch from 'js-search'
import { getLocalSearchIndex } from './utils'

/***** CONTENT INDEXER ****************************************************************************/
class ContentIndexer {
    private static instance: ContentIndexer
    private searchEngine!: JsSearch.Search

    public static get Insatnce () {
        return this.instance || (this.instance = new this())
    }

    constructor () {
        this.buildIndex()
    }

    public search (query: string): SearchContent[] {
        const results = this.searchEngine.search(query)
        return results as SearchContent[]
    }

    private buildIndex () {
        this.searchEngine = new JsSearch.Search('slug')
        this.searchEngine.addIndex('title')
        this.searchEngine.addIndex('description')
        this.searchEngine.addDocuments(getLocalSearchIndex())
    }
}

/***** EXPORT ***********************************************************************************/
export default ContentIndexer.Insatnce