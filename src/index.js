import React from 'react'
import { render } from 'react-dom'
import App from 'container/router.jsx'
render(
    <App />,
    document.querySelector('#app')
)

if (module.hot) {
    module.hot.accept();
}