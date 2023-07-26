import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { GetStaticPaths, GetStaticProps } from "next"
import { FC, useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import Head from "next/head"
import axios from "axios"

import { formatDate } from "../../../utils/time"

import { IPostsDataItem, IPostData } from "../../../server/index.interfaces"

import styles from "./style.module.scss"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import FacebookComments from "../../../components/facebook-comments"
import UtterancComments from "../../../components/utteranc-comments"

interface IProps {
    post: IPostData
}

interface IParms {
    id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    const apiDomain = process.env.API_DOMAIN
    const response = await axios.get(`http://${apiDomain}/api/posts/`)
    const posts = response.data as IPostsDataItem[]
    const paths = posts.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<IProps> = async (context) => {
    const params = context.params as unknown as IParms
    const apiDomain = process.env.API_DOMAIN
    const response = await axios.get(`http://${apiDomain}/api/posts/${params.id}`)
    const post = response.data as IPostData
    return {
        props: { post }
    }
}

const PostPage: FC<IProps> = ({ post: { attributes },}) => {
    const [ postCreatedAtDateFormated, setPostCreatedAtFormated ] = useState("??/??/????, ??:??:??")

    useEffect(() => {
        setPostCreatedAtFormated(formatDate(attributes.createdAt))
    }, [])

    return (
        <>
            <Head>
                <title>{attributes.title} - Marcuth Blog</title>
            </Head>
            <Header/>
            <div className="flex justify-center items-center flex-col">
                <article className={`${styles["post"]} container`}>
                    <header>
                        <h1 className="text-3xl mt-5 mb-3">{attributes.title}</h1>
                        <section className="flex gap-1">
                            <span className="text-xs">{attributes.author}</span>
                            <span className="text-xs">-</span>
                            <span className="text-xs">{postCreatedAtDateFormated}</span>
                        </section>
                    </header>
                    <hr className="mt-3 mb-3" />
                    <section className={`${styles["content"]} px-2`}>
                        <ReactMarkdown
                            children={attributes.content}
                            components={{
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || "")

                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            children={String(children).replace(/\n$/, "")}
                                            language={match[1]}
                                            style={materialDark as any}
                                            {...props}
                                        />
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    )
                                }
                            }}
                        />
                    </section>
                </article>
                <hr />
                <section className={`${styles["comments"]} container flex items-center justify-center`}>
                    <UtterancComments/>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default PostPage