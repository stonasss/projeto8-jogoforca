import React, { useState } from "react";

export default function Jogo() {
    /*renderização da forca, botão de escolher palavra & a palavra em si*/
    const jogo = [
        { forca: "assets/forca0.png" }
    ]

    const [forcaState, setforcaState] = useState('./assets/forca0.png')

    return (
        <div className="jogo">

            <div className="topo">

                <div className="forca">
                    <img src={forcaState} />
                </div>
                <button className="botao-inicio">
                    Escolher Palavra
                </button>

            </div>

            <div className="palavra">
                _ _ _ _ _ _ _ _ _ _
            </div>

        </div>
    )
}