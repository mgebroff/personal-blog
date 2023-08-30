/***** IMPORT ***********************************************************************************/
import { MarkdownItem } from "./Markdown"

/***** PORTFOLIO **********************************************************************************/
export interface Portfolio extends MarkdownItem {
    coverImage: string
    employee: string
    employmentTime: number
    employmentImage: string
    highlights: string[]
}
