import React, {Component} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import './static/css/base.scss'
import history from './route/history';
import Layouts from './component/layout';
import NotFound from './component/notfound/404'

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/index" push/>}/>
                    <Route path="/index" component={Layouts}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
