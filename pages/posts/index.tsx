import { GetStaticProps } from "next"
import Head from "next/head"
import { FC } from "react"
import axios from "axios"

import Footer from "../../components/footer"
import Header from "../../components/header"
import Post from "../../components/post"

import { IPostsDataItem, IPostsResponseData } from "../../server/index.interfaces"

interface IProps {
    posts: IPostsDataItem[]
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
    const serverDomain = process.env.SERVER_DOMAIN
    const response = await axios.get(`http://${serverDomain}/posts/all/0/20`)
    const posts = (response.data as IPostsResponseData).data

    return {
        props: { posts },
        revalidate: 60 * 60 * 2
    }
}

const PostsPage: FC<IProps> = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Publicações - Marcuth Blog</title>
                <meta name="description" content="Todas as publicações do Blog aqui! Compartilhando conhecimentos e experiências :)"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <div className="flex justify-center items-center flex-col">
                <div className="container">
                {posts.sort((postA, postB) => {
                    return postB.props.createdAt - postA.props.createdAt
                }).map((post, index) => {
                    return (
                        <Post key={`post-${index}`} data={post}/>
                    )
                })}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default PostsPage