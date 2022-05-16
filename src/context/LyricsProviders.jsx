import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

const LetrasContext = createContext()

const LyricsProviders = ({children}) => {

    const [alert, setAlert] = useState('')
    const [lyric, setLyric] = useState('')
    const [cargando, setCargando] = useState(false)

    const searchLyrics = async (search) => {
        setCargando(true)
        try {
            const {artist, song} = search
            const url = `https://api.lyrics.ovh/v1/${artist}/${song}`
            const {data} = await axios(url)
            setLyric(data.lyrics)
            setAlert('')
        } catch (error) {
            setAlert('Song not found')
        }
        setCargando(false)
    }

    return(
        <LetrasContext.Provider value={{alert, setAlert, searchLyrics, cargando, lyric}}>
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LyricsProviders
}

export default LetrasContext