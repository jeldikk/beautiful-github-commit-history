import React from 'react'
import ReactDOM from 'react-dom'

import App from "./App.jsx"

renderApp();

function renderApp(){
    ReactDOM.render(<App/>, document.getElementById("root"))
}
