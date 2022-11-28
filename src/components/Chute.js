export default function Chute(
    {
        chuteInput,
        setChuteInput,
        palavraJogo,
        setEstadoCor,
        setEstadoBotao,
        setEstadoTecla,
        setPalavraLetras,
        setErro,
        setEstadoInput,
        estadoInput,
        setEstadoVisual
    }
) {

    function chutarResposta() {

        if (chuteInput === palavraJogo.join("")) {
            setPalavraLetras(palavraJogo)
            setEstadoCor("certa")
            setEstadoTecla(true)
            setEstadoBotao(false)
            setEstadoInput(true)
            setEstadoVisual("desativado")
        } else {
            setPalavraLetras(palavraJogo)
            setEstadoCor("errada")
            setEstadoTecla(true)
            setEstadoBotao(false)
            setErro(6)
            setEstadoInput(true)
            setEstadoVisual("desativado")
        }
    }

    /*renderiza o input e o botão de advinhar no fundo da página*/
    return (
        <div className="chute">
            Já sei a palavra!
            <input
                type="Text"
                value={chuteInput}
                disabled={estadoInput}
                onChange={e => setChuteInput(e.target.value)}
                data-test="guess-input"
            >

            </input>
            <button
                onClick={chutarResposta}
                disabled={estadoInput}
                data-test="guess-button"
            >
                Chutar
            </button>

        </div>
    )
}