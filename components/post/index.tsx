import ReactMarkdown from "react-markdown"
import Link from "next/link"
import { FC } from "react"

import { IPostsDataItem } from "../../server/index.interfaces"

import styles from "./style.module.scss"

function removeMarkdown(text: string): string {
    text = text
        .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, "")
        .replace(/```(?:\w+)?([\s\S]+?)```/g, "")
        .replace(/(_|\*{1,2})(.*?)\1/g, "")
        .replace(/(\s{4}|\t)(.*)/g, "")
        .replace(/`([^`]+)`/g, "")
        .replace(/^#+\s+/gm, "")
  
    return text
}
  
interface IProps {
    data: IPostsDataItem
}

const Post: FC<IProps> = ({ data: { attributes, id } }) => {
    return (
        <article className={styles["post"]}>
            <header>
                <h2 className={`${styles["title"]} text-2xl text-white`}>
                    <Link className="hover:text-slate-300 hover:underline" href={`/posts/${id}`}>
                        {attributes.title}
                    </Link>
                </h2>
            </header>
            <section className={`${styles["content"]} text-slate-500 italic`}>
                <ReactMarkdown>{removeMarkdown(attributes.content.split("\n").join(" "))}</ReactMarkdown>
            </section>
            <div className={`${styles["link"]} hover:text-slate-400`}>
                <Link href={`/posts/${id}`}>
                    <i className="bi bi-chevron-right text-white"/>
                </Link>
            </div>
        </article>
    )
}

export default Post