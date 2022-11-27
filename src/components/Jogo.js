import React, { useState } from "react";
import palavras from "./palavras";

export default function Jogo({erro, setErro, palavraLetras, setPalavraLetras, setPalavraEscolhida}) {
    /*renderização da forca, botão de escolher palavra & a palavra em si*/

    return (
        <div className="jogo">

            <div className="topo">

                <div className="forca">
                    <img src={`/assets/forca${erro}.png`} />
                </div>
                <button onClick={setPalavraEscolhida} className="botao">
                    Escolher Palavra
                </button>
                
                <div className="palavra">
                    {palavraLetras}
                </div>

            </div>

        </div>
    )
}