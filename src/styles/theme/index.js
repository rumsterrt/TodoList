import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export { theme }

const GlobalStyle = createGlobalStyle`
body {
    background: ${theme.fg.default};
}
`

export default GlobalStyle
