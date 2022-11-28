export default function Letras(
    {
        letraClicada,
        palavraJogo,
        palavraLetras,
        setPalavraLetras,
        setErro,
        erro,
        setEstadoBotao,
        estadoTecla,
        setEstadoTecla,
        arrayLetras,
        setArrayLetras,
        setEstadoCor,
        estadoVisual,
        setEstadoVisual,
        setEstadoInput
    }
) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const novaPuzzle = [...palavraJogo]
    const novaPuzzleString = novaPuzzle.join("")

    function estadoLetra(letra) {
        setArrayLetras([...arrayLetras, letra])
        letraClicada.push(letra)

        /*condição aplicada quando a letra clicada estiver na palavra escolhida*/
        if (palavraJogo.includes(letra)) {
            /*percorre a array das letras da palavra escolhida*/
            for (let i = 0; i < palavraJogo.length; i++) {
                /*condição onde determina se a letra clicada está na array da palavra de letras*/
                if (palavraJogo[i] === letra) {
                    /*substitui os underlines da palavra pela letra clicada*/
                    palavraLetras[i] = letra
                }
            }
        } else if (erro < 6 && !palavraJogo.includes(letra)) {
            /*quando a letra clicada não estiver na array de letras, adiciona 1 erro e altera a imagem da forca*/
            setErro(erro + 1)
        }

        /*condição que determina resultado do jogo*/
        if (erro === 5) {
            setPalavraLetras(novaPuzzleString)
            setEstadoCor("errada")
            setEstadoTecla(true)
            setEstadoBotao(false)
            setEstadoVisual("desativado")
            setEstadoInput(true)
        } else if (palavraJogo.toString() === palavraLetras.toString()) {
            setEstadoCor("certa")
            setEstadoTecla(true)
            setEstadoBotao(false)
            setEstadoVisual("desativado")
            setEstadoInput(true)
        }
    }

    /*renderiza todos os botões das letras*/
    return (
        <div className="letras">
            {alfabeto.map((letra) => (
                <button
                    key={letra}
                    disabled={!letraClicada.includes(letra) ? estadoTecla : true}
                    id={letra}
                    className={`letra ${letraClicada.includes(letra) ? "desativado" : estadoVisual}`}
                    onClick={() => estadoLetra(letra)}
                    data-test="letter"
                >
                    <span>
                        {letra.toUpperCase()}
                    </span>
                </button>
            ))}
        </div>
    )

}