import Link from "next/link"
import { FC } from "react"

import styles from "./style.module.scss"

const Footer: FC = () => {
    return (
        <footer className={styles["pg-footer"]}>
            <Link className={styles["logo"]} href="/">Marcuth Blog</Link>
            <hr/>
            <div className={styles["comlumns"]}>
                <div className={styles["author-info"]}>
                    <img src="https://avatars.githubusercontent.com/u/91915075?v=4" alt="Site author"/>
                    <span className={styles["name"]}>Marcuth</span>
                </div>
                <ul className={styles["links"]}>
                    <span className={styles["title"]}>Links</span>
                    <li>
                        <Link href="/privacity-policy">Política de privacidade</Link>
                    </li>
                    <li>
                        <Link href="/terms-of-use">Termos de uso</Link>
                    </li>
                    <li>
                        <Link target="_blank" href="https://github.com/1Marcuth">Perfil do Marcuth no GitHub</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer