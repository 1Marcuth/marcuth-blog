import { FC, useEffect } from "react"
import Link from "next/link"

import styles from "./style.module.scss"

const Menu: FC = () => {
    function toggleMenuMobile(event: any) {
        if (event.type === "touchstart") event.preventDefault()
        const $nav = document.querySelector(`.${styles["pg-nav"]}`) 
        $nav?.classList.toggle(styles["active"])
    }

    useEffect(() => {
        const $toggleMenuMobile = document.getElementById(styles["toggle-menu-mobile"])

        $toggleMenuMobile?.addEventListener("click", toggleMenuMobile, { passive: false })
        $toggleMenuMobile?.addEventListener("touchstart", toggleMenuMobile, { passive: false })

        return () => {
            $toggleMenuMobile?.removeEventListener("click", toggleMenuMobile)
            $toggleMenuMobile?.removeEventListener("touchstart", toggleMenuMobile)
        }
    }, [])

    return (
        <nav className={styles["pg-nav"]}>
            <button id={styles["toggle-menu-mobile"]}>
                <span id={styles["burger"]}></span>
            </button>
            <ul className={styles["pg-menu"]}>
                <li>
                    <Link href="/">
                        <i className="bi bi-house"></i>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/posts">
                    <i className="bi bi-postcard"></i>
                        Publicações
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <i className="bi bi-info-circle"></i>
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu