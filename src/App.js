import React, { useState } from "react";
import Jogo from './components/Jogo'
import Letras from './components/Letras'
import Chute from './components/Chute'
import palavras from "./components/palavras";

export default function App() {
  const [erro, setErro] = useState(0);
  const [palavraLetras, setPalavraLetras] = useState([]);
  const [palavraJogo, setPalavraJogo] = useState([]);
  const [estadoTeclado, setEstadoTeclado] = useState("desativado");
  const [letraClicada, setLetraClicada] = useState([]);
  const [estadoTecla, setEstadoTecla] = useState(true);
  const [estadoBotao, setEstadoBotao] = useState(false);
  const [palavraFinal, setPalavraFinal] = useState("");

  function setPalavraEscolhida() {
    setEstadoBotao(true)
    setEstadoTecla(false)

    const escolherPalavra = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraJogo([...escolherPalavra])
    const novaPalavra = [...escolherPalavra];

    console.log(novaPalavra)
    let espacos = [];

    novaPalavra.forEach(() => { espacos.push(" _") })

    setPalavraLetras(espacos)
    console.log(espacos)
    setEstadoTeclado("letra")
  }



  return (

    <>
      <Jogo
        erro={erro}
        setErro={setErro}
        palavraLetras={palavraLetras}
        setPalavraLetras={setPalavraLetras}
        setPalavraEscolhida={setPalavraEscolhida}
        estadoBotao={estadoBotao}
        setEstadoBotao={setEstadoBotao}
        palavraFinal={palavraFinal}
        setPalavraFinal={setPalavraFinal}
      />
      <Letras
        estadoTeclado={estadoTeclado}
        setEstadoTeclado={setEstadoTeclado}
        letraClicada={letraClicada}
        setLetraClicada={setLetraClicada}
        palavraJogo={palavraJogo}
        setPalavraJogo={setPalavraJogo}
        palavraLetras={palavraLetras}
        setPalavraLetras={setPalavraLetras}
        erro={erro}
        setErro={setErro}
        estadoBotao={estadoBotao}
        setEstadoBotao={setEstadoBotao}
        estadoTecla={estadoTecla}
        setEstadoTecla={setEstadoTecla}
        palavraFinal={palavraFinal}
        setPalavraFinal={setPalavraFinal}
      />
      <Chute />
    </>
  )
}