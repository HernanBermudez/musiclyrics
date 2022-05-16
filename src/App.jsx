import AppLetras from "./components/AppLetras";
import { LyricsProviders } from "./context/LyricsProviders";

const App = () => {
  return(
    <LyricsProviders>
      <AppLetras />
    </LyricsProviders>
    
  )
}

export default App