import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import ReactMarkdown from "react-markdown"
import LinkifyIt from "linkify-it"
import { FC } from "react"

interface IProps {
    children: string
}

const MarkdownWithAutoLinks: FC<IProps> = ({ children }) => {
    function linkify(content: string) {
        const linkifyIt = LinkifyIt()
        const matches = linkifyIt.match(content)

        if (matches) {
            for (const match of matches) {
                content = content.replace(
                    match.text,
                    `[${match.text}](${match.url})`
                )
            }
        }

        return content
    }

    const contentWithAutoLinks = linkify(children)

    return (
        <ReactMarkdown
            children={contentWithAutoLinks}
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
    )
}

export default MarkdownWithAutoLinks