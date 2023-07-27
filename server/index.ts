import axios from "axios"

import {
    IPostsResponseData,
    IPostsDataItem,
    IPostResponseData,
    IPostData
} from "./index.interfaces"

const apiDomain = process.env.SERVER_DOMAIN

export async function getPosts(): Promise<IPostsDataItem[]> {
    const startIndex = 0
    const limit = 20
    const url = `http://${apiDomain}/posts/all/${startIndex}/${limit}`
    const response = await axios.get(url)
    const data = response.data as IPostsResponseData
    const posts = data.data
    return posts
}

export async function getPost(id: string): Promise<IPostData> {
    const url = `http://${apiDomain}/posts/get/${id}`
    const response = await axios.get(url)
    const data = response.data as IPostResponseData
    const post = data.data
    return post
}