import {Container} from './components/styled/Container.styled'
import Header from './components/Header'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './components/styled/Global'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
}


function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
    <Header/>
    <Container>
      Hello World
    </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
