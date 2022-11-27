import React, { useState } from "react";
import palavras from "./palavras";

export default function Jogo() {
    /*renderização da forca, botão de escolher palavra & a palavra em si*/

    const [erro, setErro] = useState(0)
    const [palavraLetras, setPalavraLetras] = useState([]);

    function setPalavraEscolhida() {
        const escolherPalavra = palavras[Math.floor(Math.random() * palavras.length)];
        console.log(escolherPalavra)
        const novaPalavra = [...escolherPalavra];
        let espacos = [];

        novaPalavra.forEach(() => {espacos.push(" _")})

        setPalavraLetras(espacos)

        console.log(palavraLetras)
    }

    return (
        <div className="jogo">

            <div className="topo">

                <div className="forca">
                    <img src={`/assets/forca${erro}.png`} />
                </div>
                <button onClick={setPalavraEscolhida} className="botao-inicio">
                    Escolher Palavra
                </button>
                
                <div className="palavra">
                    {palavraLetras}
                </div>

            </div>

        </div>
    )
}