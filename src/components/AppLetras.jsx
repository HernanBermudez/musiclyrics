import Formulario from "./Formulario"
import useLyrics from "../hooks/useLyrics"
import Alert from "./Alert"
import Lyrics from "./Lyrics"

const AppLetras = () => {

    const {alert, lyric, cargando} = useLyrics()
    return (
        
        <>
            <header>Lyrics Finder</header>

            <Formulario/>
            <main>
                {alert ? <Alert>{alert}</Alert> : lyric ? <Lyrics/> :
                cargando ? 'Loading...' : 
                <p className="text-center">
                    Search the lyrics of your favourite artists
                </p> }
            </main>
        </>
    )
}

export default AppLetras