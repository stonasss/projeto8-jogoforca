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
        console.log(palavraJogo)

        if (palavraJogo.includes(letra)) {
            for (let i = 0; i < palavraJogo.length; i++) {
                if (palavraJogo[i] === letra) {
                    palavraLetras[i] = letra
                }
            }
        } else if (erro < 6 && !palavraJogo.includes(letra)) {
            setErro(erro + 1)
        }

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
                        {letra}
                    </span>
                </button>
            ))}
        </div>
    )

}