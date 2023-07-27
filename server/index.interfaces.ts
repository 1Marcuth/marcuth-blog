export interface IPostsResponseData {
    message: string
    data: IPostsDataItem[]
}

export interface IPostsDataItem {
    id: number
    props: IPostsProps
}

export interface IPostsProps {
    title: string
    content: string
    createdAt: number
}

export interface IPostResponseData {
    message: string
    data: IPostData
}

export interface IPostData {
    id: number
    props: IPostProps
}

export interface IPostProps {
    title: string
    content: string
    createdAt: number
}