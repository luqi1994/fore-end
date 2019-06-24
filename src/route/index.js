import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {menus} from './config';

class Routes extends Component {
    render() {
        return (
            <Switch>
                {menus.map(item => {
                    return (
                        item.child.map(items => {
                            return (
                                <Route exact key={items.key} path={items.key} component={items.component}/>
                            )
                        })
                    )
                })}
            </Switch>
        )
    }
}

export default Routes;
