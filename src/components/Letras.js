export default function Letras(
    {
        letraClicada,
        setLetraClicada,
        palavraJogo,
        palavraLetras,
        setPalavraLetras,
        setErro,
        erro,
        setEstadoBotao,
        estadoTecla,
        setEstadoTecla,
        palavraFinal,
        setPalavraFinal,
        letrasClicadas
    }
) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function estadoLetra(letra) {
        
        if (palavraJogo.includes(letra)) {
            for (let i = 0; i < palavraJogo.length; i++) {
                if (palavraJogo[i] === letra) {
                    palavraLetras[i] = letra
                    
                    console.log(letrasClicadas)
                    console.log(letraClicada)
                    console.log(palavraLetras)
                }
            }
        } else if (erro < 6 && !palavraJogo.includes(letra)) {
            setErro(erro + 1)
        }

        console.log(letra)
    }

    return (
        <div className="letras">
            {alfabeto.map((letra) => (
                <button
                    key={letra}
                    disabled={estadoTecla}
                    id={letra}
                    className={`letra ${estadoTecla ? "desativado" : ""}`}
                    onClick={() => estadoLetra(letra)}
                >
                    <span>
                        {letra}
                    </span>
                </button>
            ))}
        </div>
    )

}