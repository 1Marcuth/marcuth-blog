import ReactMarkdown from "react-markdown"
import Link from "next/link"
import { FC } from "react"

import { removeMarkdown } from "../../utils/markup"

import { IPostsDataItem } from "../../server/index.interfaces"

import styles from "./style.module.scss"
  
interface IProps {
    data: IPostsDataItem
}

const Post: FC<IProps> = ({ data: { props, id } }) => {
    return (
        <article className={styles["post"]}>
            <header>
                <h2 className={`${styles["title"]} text-2xl text-white`}>
                    <Link className="hover:text-slate-300 hover:underline" href={`/posts/${id}`}>
                        {props.title}
                    </Link>
                </h2>
            </header>
            <section className={`${styles["content"]} text-slate-500 italic`}>
                <ReactMarkdown>{removeMarkdown(props.content.split("\\n").join(" "))}</ReactMarkdown>
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