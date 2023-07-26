import { FC, useEffect, useRef } from "react"

const UtterancComments: FC = () => {
    const commentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const $script = document.createElement("script")
        $script.setAttribute("src", "https://utteranc.es/client.js")
        $script.setAttribute("crossorigin", "anonymous")
        $script.setAttribute("repo", "1Marcuth/marcuth-blog")
        $script.setAttribute("theme", "dark-blue")
        $script.setAttribute("async", "true")
        $script.setAttribute("issue-term", "url")
        commentRef.current?.appendChild($script)

        $script.onload = () => {
            if (commentRef.current && commentRef.current.children[1]) {
                commentRef.current.removeChild(commentRef.current.children[1])
            }
        }
    }, [])

    return (
        <div style={{ width: "100%" }} id="comments">
            <div ref={commentRef}></div>
        </div>
    )
}

export default UtterancComments