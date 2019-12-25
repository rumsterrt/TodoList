import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

const Root = () => <div />

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()
