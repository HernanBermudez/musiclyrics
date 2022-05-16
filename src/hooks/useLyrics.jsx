import { useContext } from "react";
import LetrasContext from "../context/LyricsProviders";

const useLyrics = () => {
    return useContext(LetrasContext)
}

export default useLyrics