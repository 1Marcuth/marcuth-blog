import { useEffect, FC } from "react"

interface IProps {
    postId: number
}

const FacebookComments: FC<IProps> = ({ postId }) => {
    useEffect(() => {
        //@ts-ignore
        if (window.FB) {
            //@ts-ignore
            window.FB.XFBML.parse()
        }

        function facebookSDK(doc: Document, id: string) {
            const $firstSript = doc.querySelector("script") as HTMLScriptElement
            if (doc.getElementById(id)) return
            const $newSrcipt = doc.createElement("script")
            $newSrcipt.id = id
            $newSrcipt.src = `https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v17.0`
            $firstSript.parentNode?.insertBefore($newSrcipt, $firstSript)
        }

        facebookSDK(document, "facebook-jssdk")
    }, [])

    return (
        <>
            <div id="fb-root"></div>
            <div
                className="fb-comments"
                data-href="https://comments.co/blog-marcuth-dev-comments/98557899787"
                data-width="100%"
                data-numposts="10"
                data-lazy="true"
            ></div>
            {/* <div
                className="fb-comments"
                data-href={`https://comments.co/blog-marcuth-dev-comments/${postId}`}
                data-colorscheme="dark"
                data-width="auto"
                data-numposts="10"
                data-order-by="reverse_time"
            ></div> */}
        </>
    )
}

export default FacebookComments