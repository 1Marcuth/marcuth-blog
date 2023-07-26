export interface IPostsResponseData {
    data: IPostsDataItem[]
    meta: IPostsMeta
}

export interface IPostsDataItem {
    id: number
    attributes: IPostsAttributes
}

export interface IPostsAttributes {
    title: string
    content: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    author: string
}

export interface IPostsMeta {
    pagination: IPostsPagination
}

export interface IPostsPagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

export interface IPostResponseData {
    data: IPostData
    meta: IPostMeta
}

export interface IPostData {
    id: number
    attributes: IPostAttributes
}

export interface IPostAttributes {
    title: string
    content: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    author: string
}

export interface IPostMeta {}
  