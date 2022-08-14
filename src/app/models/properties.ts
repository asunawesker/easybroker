export interface IProperties {
  pagination: IPagination
  content: IContent[]
}

export interface IPagination {
  limit: number
  page: number
  total: number
  next_page: string
}

export interface IContent {
  public_id: string
  title: string
  title_image_thumb: string
  location: string
  operations: IOperation[]
}

export interface IOperation {
  type: string
}
