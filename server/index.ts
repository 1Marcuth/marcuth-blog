import axios from "axios"

import {
    IPostsResponseData,
    IPostsDataItem,
    IPostResponseData,
    IPostData
} from "./index.interfaces"

const apiKey = process.env.SERVER_API_KEY
const apiDomain = process.env.SERVER_DOMAIN

export async function getPosts(): Promise<IPostsDataItem[]> {
    const url = `http://${apiDomain}/api/posts`
    const headers = { Authorization: `Bearer ${apiKey}` }
    const response = await axios.get(url, { headers })
    const data = response.data as IPostsResponseData
    const posts = data.data
    return posts
}

export async function getPost(id: string): Promise<IPostData> {
    const url = `http://${apiDomain}/api/posts/${id}`
    const headers = { Authorization: `Bearer ${apiKey}` }
    const response = await axios.get(url, { headers })
    const data = response.data as IPostResponseData
    const post = data.data
    return post
}