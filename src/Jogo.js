import React, { useState } from "react";
import palavras from "./palavras";

export default function Jogo() {
    /*renderização da forca, botão de escolher palavra & a palavra em si*/

    const [count, setCount] = useState(0)
    const [palavraLetras, setPalavraLetras] = useState([]);

    function setPalavraEscolhida() {
        const escolherPalavra = palavras[Math.floor(Math.random() * palavras.length)];

        const novaPalavra = [...escolherPalavra];
        setPalavraLetras(novaPalavra)
        console.log(palavraLetras)
    }

    return (
        <div className="jogo">

            <div className="topo">

                <div className="forca">
                    <img src={`/assets/forca${count}.png`} />
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