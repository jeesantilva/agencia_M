'use client'
import { useState } from "react";
import Image from "next/image";
import style from "./header.module.css"
// importando imagens
import Logo from "/public/logo.png"
import Moon from "/public/moon.png"
import Sun from "/public/sun.png"

export default function Header(props){

    return(
        <header className={props.mudarTema ? style.modo_light_header : style.modo_dark_header}>
            <div>
                <Image src={Logo} className={style.img_logo}  />
                <button onClick={props.acao_onclick} className={style.btn_mode}>
                    <Image className={style.icon_btn} src={props.mudarTema ? Moon : Sun} alt="icon-mode" />
                </button>
            </div>
        </header>
    )
}