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
  const [arrayLetras, setArrayLetras] = useState([]);
  const [estadoTeclado, setEstadoTeclado] = useState("desativado");
  const [estadoVisual, setEstadoVisual] = useState("desativado")
  const [estadoTecla, setEstadoTecla] = useState(true);
  const [estadoBotao, setEstadoBotao] = useState(false);
  const [estadoInput, setEstadoInput] = useState(true)
  const [palavraFinal, setPalavraFinal] = useState("");
  const [estadoCor, setEstadoCor] = useState("")
  const [chuteInput, setChuteInput] = useState("")
  const [palavra, setPalavra] = useState("")
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

    /*embaralha a array de palavras e insere numa variável*/
    const escolherPalavra = palavras[Math.floor(Math.random() * palavras.length)];

    /*código para inserção de data-answer*/
    setPalavra(escolherPalavra)

    setPalavraJogo([...escolherPalavra])

    /*coloca cada uma das letras da palavra escolhida como uma index numa array*/
    const novaPalavra = [...escolherPalavra];

    /*cria a variável que vai receber essas letras e trocar por _*/
    let espacos = [];

    /*código que transforma as letras em _*/
    novaPalavra.forEach(() => { espacos.push(" _") })

    setPalavraLetras(espacos)

    /*acende o teclado de letras*/
    setEstadoTeclado("letra")
  }

  return (

    <>
      <Jogo
        erro={erro}
        palavraLetras={palavraLetras}
        estadoCor={estadoCor}
        setPalavraEscolhida={setPalavraEscolhida}
        palavra={palavra}
      />
      <Letras
        letraClicada={letraClicada}
        palavraJogo={palavraJogo}
        palavraLetras={palavraLetras}
        setPalavraLetras={setPalavraLetras}
        erro={erro}
        setErro={setErro}
        estadoTecla={estadoTecla}
        setEstadoTecla={setEstadoTecla}
        arrayLetras={arrayLetras}
        setArrayLetras={setArrayLetras}
        setEstadoCor={setEstadoCor}
        estadoVisual={estadoVisual}
        setEstadoVisual={setEstadoVisual}
        setEstadoInput={setEstadoInput}
        setEstadoBotao={setEstadoBotao}
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