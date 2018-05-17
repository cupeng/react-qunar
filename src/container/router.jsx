import React from 'react'
import Home from './Home/'
import City from './City/'
import Detail from './Detail/'
import { HashRouter as Router,Route,Switch } from 'react-router-dom'


class App extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/city" component={City} />
                    <Route path="/detail" component={Detail} />
                </Switch>
            </Router>    
        )
    }
}

export default App

