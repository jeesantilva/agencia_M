'use client'
import { useState } from "react"
// importando componentes
import Header from "@/components/header";
import Banner from "@/components/banner";
import Experience from "@/components/experience";
import Footer from "@/components/footer";



// importando CSS
import styles from "./page.module.css";

export default function Home() {
  const [mudarTema, setMudarTema] = useState(true);


  const alternandoTema = ()=>{
      setMudarTema(!mudarTema);
  }
  return (
    <div className={styles.main}>
      {/* acao_onclick vai passar a função para o bottom do componente header */}
      <Header acao_onclick={alternandoTema} mudarTema={mudarTema} />
      <Banner mudarTema={mudarTema}/>
      <Experience mudarTema={mudarTema}/>
      <Footer mudarTema={mudarTema}/>
    </div>
  );
}
