export default function Jogo(
    {
        erro,
        palavraLetras,
        setPalavraEscolhida,
        estadoCor
    }
) {

    return (
        <div className="jogo">

            <div className="topo">

                <div className="forca">
                    <img src={`/assets/forca${erro}.png`} />
                </div>
                <button
                    onClick={setPalavraEscolhida}
                    className="botao"
                >
                    Escolher Palavra
                </button>

                <div className={`palavra ${estadoCor}`}>
                    <span>{palavraLetras}</span>
                </div>

            </div>

        </div>
    )
}