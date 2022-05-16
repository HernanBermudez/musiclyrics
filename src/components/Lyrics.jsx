import useLyrics from "../hooks/useLyrics"

const Lyrics = () => {
    const {lyric, cargando} = useLyrics()
    return(
        cargando ? 'Loading...' : <div className="letra">{lyric}</div>
    )
}
export default Lyrics