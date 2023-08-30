import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button/button'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
   return (
    <ThemeProvider theme={defaultTheme}>
      <Button  />


      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
