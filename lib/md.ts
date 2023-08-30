/***** IMPORT ***********************************************************************************/
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { ContentItemName, MarkdownContent, MarkdownItem, SearchContent } from "@interfaces/Markdown";
import { remark } from 'remark';
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import { getBlogBySlug } from './blogs';
import { Blog } from '@interfaces/Blog'

/***** GET DIR **********************************************************************************/
const getDir = (path: string) => join(process.cwd(), path)

/***** GET FILE NAMES ***************************************************************************/
const getFileNames = (dir: string): string[] => {
    return fs.readdirSync(dir)
}

/***** GET ITEM PATH  ***************************************************************************/
const getItemInPath = (filePath: string): MarkdownItem => {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    return { ...data, content } as MarkdownItem;
}

/***** GET ALL ITEMS   ***************************************************************************/
const getAllItems = (
        fileNames: string[], 
        get: (name: string) => MarkdownItem) => {
    
        const items = fileNames
            .map((name) => get(name))
            .sort((item1, item2) => (item1.date > item2.date ? - 1 : 1))
    return items
}

/***** MARKDOWN TO HTML  ***************************************************************************/
const markdownToHtml = async (markdown: string) => {
    const result = await 
    remark()
        .use(html)
        .use(remarkGfm)
        .process(markdown)

    return result.toString()
}

/***** SAVE SEARCH DATA ** ***************************************************************************/
const saveSearchData = (content: MarkdownContent) => {
    const searchFile = getDir('/content/search/index.json')
    const searchItemList: SearchContent[] = []
  
    Object.keys(content).forEach((dataSource) => {
        const contentName = dataSource as ContentItemName

        content[contentName].forEach((data) => {
            const searchItem: SearchContent = {
              slug: data.slug,
              title: data.title,
              description: data.description,
              category: contentName
            } 
        
            searchItemList.push(searchItem)
          })
    })

    fs.writeFileSync(searchFile, JSON.stringify(searchItemList, null, 2))
}

/***** EXPORT ***********************************************************************************/
export { 
   getDir,
   getFileNames,
   getItemInPath,
   getAllItems,
   markdownToHtml,
   saveSearchData
}