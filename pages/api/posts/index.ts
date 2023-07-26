import type {
    NextApiRequest as Request,
    NextApiResponse as Response 
} from "next"

import { getPosts } from "../../../server"

import { IPostsDataItem } from "../../../server/index.interfaces"

type IData = IPostsDataItem[]

export default async function handler(req: Request, res: Response<IData>) {
    const posts = await getPosts()
    return res.status(200).json(posts)
}