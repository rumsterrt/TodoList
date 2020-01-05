import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './components/routes'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import initStore from 'store'
import { Provider } from 'react-redux'
import GlobalStyle, { theme } from 'styles/theme'
import { ThemeProvider } from 'styled-components'

const store = initStore()

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Fragment>
                    <GlobalStyle />
                    <App />
                </Fragment>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()
