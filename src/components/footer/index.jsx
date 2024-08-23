import Image from "next/image";
import style from "./footer.module.css"
// importando imagens 
import Logo from "/public/logo.png"
import Facebook from "/public/facebook.png"
import X from "/public/twitter.png"
import Linkedin from "/public/linkedin.png"
import Dribble from "/public/dribble.png"
import Behance from "/public/behance.png"
import Google from "/public/google.png"

export default function Footer(props){
    return(
        <footer className={props.mudarTema ? style.modo_light_footer : style.modo_dark_footer}>
            <div className={style.container_footer}> 
                <div className={style.container_text}>
                    <Image className={style.img_logo} src={Logo} />
                    <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                    ferramentas e tecnologias personalizadas.</p>
                </div>
                <div className={style.container_imgs}>
                    <Image src={Facebook} className={style.img_footer} />
                    <Image src={X} className={style.img_footer} />
                    <Image src={Linkedin} className={style.img_footer} />
                    <Image src={Dribble} className={style.img_footer} />
                    <Image src={Behance} className={style.img_footer} />
                    <Image src={Google} className={style.img_footer} />
                </div>
            </div>
            <div className={style.copy}>
                <p>Copyright 2022 &copy;<span>Jessica Santos</span></p>
            </div>
        </footer>
    )
}