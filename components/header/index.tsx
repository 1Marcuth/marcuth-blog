import { FC } from "react"
import Link from "next/link"

import Menu from "../menu"

import styles from "./style.module.scss"

const Header: FC = () => {
    return (
        <header className={styles["pg-header"]}>
            <Link href="/" className={styles["logo"]}>Marcuth Blog</Link>
            <Menu/>
        </header>
    )
}

export default Header