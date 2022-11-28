export default function Jogo(
    {
        erro,
        palavraLetras,
        setPalavraEscolhida,
        estadoCor,
        palavra
    }
) {

    return (
        <div className="jogo">
            <div className="topo">
                <div className="forca">
                    <img
                        data-test="game-image"
                        src={`/assets/forca${erro}.png`}
                    />
                </div>
                <button
                    onClick={setPalavraEscolhida}
                    className="botao"
                    data-test="choose-word"
                >
                    Escolher Palavra
                </button>

                <div className={`palavra ${estadoCor}`}>
                    <span data-test="word" data-answer={palavra}>
                        {palavraLetras}
                    </span>
                </div>

            </div>

        </div>
    )
}