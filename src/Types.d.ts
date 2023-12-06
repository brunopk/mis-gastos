import { tasks_v1 } from 'googleapis'

declare global {
  type ExtendedTask = tasks_v1.Schema$Task & { taskList: tasks_v1.Schema$TaskList }

  type Spend = {
    date: Date
    category: string
    value: number
    account: string
    description: string
    subCategory: string
    formName: string
  }

  type SubCategoryConfig = {
    readonly name: string
    readonly column: number
  }

  type CategoryConfig = {
    readonly name: string
    readonly column: number
    readonly subCategories?: { [name: string]: SubCategoryConfig }
  }

  type SheetConfig = {
    readonly name: string
    readonly [property: string]: string | number | boolean
  }

  type SpreadSheetConfig = {
    readonly id: string
    readonly name: string
    readonly sheets: { [name: string]: SheetConfig }
    readonly extra?: any
  }
}
