import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { GetStaticPaths, GetStaticProps } from "next"
import { FC, useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import linkifyIt from "linkify-it"
import Head from "next/head"
import axios from "axios"

import UtterancComments from "../../../components/utteranc-comments"
import { removeMarkdown } from "../../../utils/markup"
import { formatDate } from "../../../utils/time"
import Header from "../../../components/header"
import Footer from "../../../components/footer"

import { IPostData, IPostResponseData, IPostsResponseData } from "../../../server/index.interfaces"

import styles from "./style.module.scss"
import MarkdownWithAutoLinks from "../../../components/markdown-with-auto-links"

interface IProps {
    post: IPostData
}

interface IParms {
    id: string
}

interface ILinkfyProps {
    childern: any
}

export const Linkfy: FC<ILinkfyProps> = ({ childern }) => {
    const linkify = linkifyIt()
    const matches = linkify.match(childern)

    if (matches) {
        for (const match of matches) {
            childern = childern.replace(
                match.text,
                `<a href="${match.url}" target="_blank" rel="noopener noreferrer">${match.text}</a>`
            )
        }
    }

    return childern
}

export const getStaticPaths: GetStaticPaths = async () => {
    const serverDomain = process.env.SERVER_DOMAIN
    const response = await axios.get(`https://${serverDomain}/posts/all/`)
    const posts = (response.data as IPostsResponseData).data

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
    const serverDomain = process.env.SERVER_DOMAIN
    const response = await axios.get(`https://${serverDomain}/posts/get/${params.id}`)
    const post = (response.data as IPostResponseData).data

    return {
        props: { post },
        revalidate: 60 * 60 * 24
    }
}

const PostPage: FC<IProps> = ({ post: { props }, post }) => {
    console.log(post)
    const [ postCreatedAtDateFormated, setPostCreatedAtFormated ] = useState("??/??/????, ??:??:??")
    const pageDescription = removeMarkdown(props.content).slice(0, 150) + "..."
    const pageTitle = `${props.title} - Marcuth Blog`
    
    useEffect(() => { 
        setPostCreatedAtFormated(formatDate(props.createdAt))
    }, [])

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <div className="flex justify-center items-center flex-col">
                <article className={`${styles["post"]} container`}>
                    <header>
                        <h1 className="text-3xl mt-5 mb-3">{props.title}</h1>
                        <section className="flex gap-1">
                            <span className="text-xs">Marcuth</span>
                            <span className="text-xs">-</span>
                            <span className="text-xs">{postCreatedAtDateFormated}</span>
                        </section>
                    </header>
                    <hr className="mt-3 mb-3" />
                    <section className={`${styles["content"]} px-2`}>
                        <MarkdownWithAutoLinks>{props.content}</MarkdownWithAutoLinks>
                    </section>
                </article>
                <hr className={styles["separator"]}/>
                <section className={`${styles["comments"]} container flex items-center justify-center flex-col`}>
                    <h2 className="block w-full text-left text-white text-2xl mt-2 mb-5">
                        <i className={`${styles["comments-icon"]} bi bi-chat-left-text`}/>
                        Comentários
                    </h2>
                    <UtterancComments/>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default PostPage