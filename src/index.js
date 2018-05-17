import React from 'react'
import { render } from 'react-dom'
import RouterMap from './container/router.jsx'

class App extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <RouterMap />
                <Footer />
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector('#app')
)

if (module.hot) {
    module.hot.accept();
}