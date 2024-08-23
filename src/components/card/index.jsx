import style from "./card.module.css"

export default function Card(props){
    return(
        <div className={props.mudarTema ? style.modo_light_card : style.modo_dark_card}>
            <div className={style.container_info_card}>
                <span>{props.data}</span>
                <h3>{props.titulo}</h3>
                <small>{props.empresa}</small>
            </div>
            <p>{props.paragrafo}</p>
        </div>
    )
}