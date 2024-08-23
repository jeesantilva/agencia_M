import Image from "next/image";
import style from "./banner.module.css"

export default function Banner(props){
    return(
        <section className={props.mudarTema ? style.modo_light_banner : style.modo_dark_banner}>
            <div className={style.container_img}>
            </div>
            <div className={style.container_titulo}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h1>Agência de Branding <br />
                <span>e design digital</span></h1>
            </div>
        </section>
    )
}