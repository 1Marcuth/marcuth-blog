import Head from "next/head"
import Link from "next/link"
import { FC } from "react"

import Footer from "../../components/footer"
import Header from "../../components/header"

import styles from "./style.module.scss"

const AboutPage: FC = () => {
    return (
        <>
            <Head>
                <title>Sobre - Marcuth Blog</title>
                <meta name="description" content={`Marcuth é um estudante de desenvolvimento web desde 2021 quando começou a estudar HTML/CSS no canal "Curso em Vídeo" do Gustavo Guanabara no YouTube. Ele também estudou JavaScript no mesmo canal e às vezes ainda precisa revisar coisas que aprendeu no passado lá...`}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <div className={`flex items-center justify-center flex-col`}>
                <section className={`${styles["container"]} container`}>
                    <h1 className="text-center mt-2 mb-4 text-3xl">Sobre</h1>
                    <p className="mt-2 mb-2 indent-2">Marcuth é um estudante de programação de 17 anos, em 2021 começou a estudar HTML/CSS no canal "Curso em Vídeo" do Gustavo Guanabara no YouTube. Ele também estudou JavaScript no mesmo canal e às vezes ainda precisa revisar coisas que aprendeu no passado lá.</p>
                    <p className="mt-2 mb-2 indent-2">Passou-se um tempo e ele queria extrair dados de um site para exibir esses dados em seu próprio site, e então, como ele não sabia como fazer isso ele resolveu pedir ajuda a um amigo que tinha mais experiência, porém esse amigo quis usar outra linguagem para fazer o Web Scraping, o famoso Python.</p>
                    <p className="mt-2 mb-2 indent-2">Porém Marcuth nem se quer sabia que linguagem era essa, mas mesmo assim eles fizeram o Scraper. À partir disso ele foi criando mais coisas com essa nova linguagem, fez mais Scrapers, fez automação de criação de imagens, fez APIs, fez bibliotecas e etc.</p>
                    <p className="mt-2 mb-2 indent-2">Atualmente ele gosta de estudar mais sobre como aprimorar-se no Web Scraping e novas linguagens como GO e Rust. Ele também está cursando um curso de Técnico em Informática para buscar novos conhecimentos principalmente na área do Hardware.</p>
                </section>
                <hr className={styles["separator"]}/>
                <div className={`${styles["github-stats"]} flex items-center justify-center flex-col`}>
                    <img height="50%" width="auto" src ="https://github-readme-stats.vercel.app/api?username=1marcuth&show_icons=true&count_private=true&theme=darcula&hide_border=true&hide=issues,contribs&bg_color=00000000"/>
                    <img height="50%" width="auto" src ="https://github-readme-stats.vercel.app/api/top-langs/?username=1marcuth&layout=compact&hide_border=true&theme=darcula&bg_color=00000000&langs_count=6&hide=jupyter%20notebook,tex,css,php"/>
                    <img src ="https://github-readme-streak-stats.herokuapp.com?user=1marcuth&theme=darcula&hide_border=true&background=FFFFFF00"/>
                </div>
                <hr className={styles["separator"]}/>
                <div className={styles["projects"]}>
                    <h2 className="text-center mt-2 mb-4 text-2xl">Meus Projetos</h2>
                    <ul className="list-disc">
                        <li>
                            <h3 className="mt-2 mb-3"><Link className="text-xl underline text-sky-400 hover:text-sky-300" target="_blank" href="https://ytdl.fun/">Ytdl.fun</Link></h3>
                            <p className="indent-2">Esse site serve para baixar vídeos, músicas e áudios do YouTube de forma simplificada e diereta, de graça, sem anúncios invasivos como vemos em outros sites.</p>
                            <p className="indent-2">Eu desenvolvi esse projeto usando Node.js (TypeScript) com o Framework Next.js e uma outra API feita com o Micro-framework Express.js, usando a biblioteca de validação de tipos Zod e a biblioteca para pegar dados do YouTube, a YTDL-Core.</p>
                        </li>
                        <li>
                            <h3 className="mt-2 mb-3"><Link className="text-xl underline text-sky-400 hover:text-sky-300" target="_blank" href="https://dcmapas.vercel.app/">DC Mapas</Link></h3>
                            <p className="indent-2">Esse site é na verdade uma plataforma completa para um jogador de Dragon City, ela contará com informações de eventos, novidades, notícias, calculadoras, estimadores, simuladores além de áreas sociaveis como o fórum e etc.</p>
                            <p className="indent-2">Eu desenvolvi esse projeto usando Node.js (TypeScript) com o Framework Next.js além de uma API de dados escrita em Python com FastAPI que conta com um processamento de dados feita por uma biblioteca privada que eu fiz, também conta com uma outra API que lida com o fórum feita em Node.js (TypeScript) com o CMS Strapi. Alem dessas APIs eu tenho mais uma que o único papel dela é realizar estimações (Inteligência Artificial), eu fiz ela também com Python FastAPI, e uma biblioteca que eu fiz a Dragon City Utils, que inclui abstrações para fazer estimações relacionadas à Dragon City e ela usa modelos que foram treinados em uma plataforma no-code, a Teachable Machine da Google.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AboutPage