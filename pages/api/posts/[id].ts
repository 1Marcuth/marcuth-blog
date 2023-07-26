import type {
    NextApiRequest as Request,
    NextApiResponse as Response 
} from "next"

import { getPost } from "../../../server"

import { IPostData } from "../../../server/index.interfaces"

export default async function handler(req: Request, res: Response<IPostData>) {
    const id = req.query.id as string
    const post = await getPost(id)
    return res.status(200).json(post)
}