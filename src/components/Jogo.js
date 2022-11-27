export default function Jogo(
    {
        erro,
        palavraLetras,
        setPalavraEscolhida,
        estadoBotao,
        palavraFinal
    }
) {
    /*renderização da forca, botão de escolher palavra & a palavra em si*/

    return (
        <div className="jogo">

            <div className="topo">

                <div className="forca">
                    <img src={`/assets/forca${erro}.png`} />
                </div>
                <button
                    onClick={setPalavraEscolhida}
                    disabled={estadoBotao}
                    className="botao"
                >
                    Escolher Palavra
                </button>

                <div className="palavra">
                    <span>{palavraLetras}</span>
                </div>

            </div>

        </div>
    )
}