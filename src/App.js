import React, { useState } from "react";
import Jogo from './components/Jogo'
import Letras from './components/Letras'
import Chute from './components/Chute'
import palavras from "./components/palavras";

export default function App() {
  const [erro, setErro] = useState(0);
  const [palavraLetras, setPalavraLetras] = useState([]);
  const [palavraJogo, setPalavraJogo] = useState([]);
  const [letraClicada, setLetraClicada] = useState([]);
  const [estadoTeclado, setEstadoTeclado] = useState("desativado");
  const [estadoTecla, setEstadoTecla] = useState(true);
  const [estadoBotao, setEstadoBotao] = useState(false);
  const [estadoInput, setEstadoInput] = useState(true)
  const [palavraFinal, setPalavraFinal] = useState("");
  const [arrayLetras, setArrayLetras] = useState([]);
  const [estadoCor, setEstadoCor] = useState("")
  const [chuteInput, setChuteInput] = useState("")
  const [estadoVisual, setEstadoVisual] = useState("desativado")
  const escolherPalavra = ''
  const novaPalavra = []

  function setPalavraEscolhida() {
    setEstadoBotao(true)
    setEstadoTecla(false)
    setEstadoInput(false)
    setErro(0)
    setLetraClicada([])
    setEstadoCor("")
    setChuteInput("")
    setEstadoVisual("ativado")

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
        estadoBotao={estadoBotao}
        setEstadoBotao={setEstadoBotao}
        estadoCor={estadoCor}
        palavraFinal={palavraFinal}
        setPalavraFinal={setPalavraFinal}
        setPalavraEscolhida={setPalavraEscolhida}
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
        arrayLetras={arrayLetras}
        setArrayLetras={setArrayLetras}
        escolherPalavra={escolherPalavra}
        estadoCor={estadoCor}
        setEstadoCor={setEstadoCor}
        novaPalavra={novaPalavra}
        estadoVisual={estadoVisual}
        setEstadoVisual={setEstadoVisual}
      />
      <Chute
        chuteInput={chuteInput}
        setChuteInput={setChuteInput}
        palavraJogo={palavraJogo}
        setEstadoBotao={setEstadoBotao}
        setEstadoTecla={setEstadoTecla}
        setEstadoCor={setEstadoCor}
        setPalavraLetras={setPalavraLetras}
        setErro={setErro}
        estadoInput={estadoInput}
        setEstadoInput={setEstadoInput}
        setEstadoVisual={setEstadoVisual}
      />
    </>
  )
}