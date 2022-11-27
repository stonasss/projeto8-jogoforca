import React, { useState } from "react";
import Jogo from './components/Jogo'
import Letras from './components/Letras'
import Chute from './components/Chute'
import palavras from "./components/palavras";

export default function App() {
  const [erro, setErro] = useState(0);
  const [palavraLetras, setPalavraLetras] = useState([]);
  const [estadoLetras, setestadoLetras] = useState("")
  let novaPalavra = [];

    function setPalavraEscolhida() {
      const escolherPalavra = palavras[Math.floor(Math.random() * palavras.length)];
      const novaPalavra = [...escolherPalavra];
      let espacos = [];
      novaPalavra.forEach(() => {espacos.push(" _")})
      setPalavraLetras(espacos)
      setestadoLetras("ativado")
      console.log(estadoLetras)
    }

  return (

    <>
      <Jogo 
        erro={erro}
        setErro={setErro}
        palavraLetras={palavraLetras}
        setPalavraLetras={setPalavraLetras}
        setPalavraEscolhida={setPalavraEscolhida}
      />
      <Letras 
        estadoLetras={estadoLetras}
        setestadoLetras={setestadoLetras}
      />
      <Chute />
    </>
  )
}