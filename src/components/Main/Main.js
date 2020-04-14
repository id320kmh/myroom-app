import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Menu from '../Menu/Menu';
import Room from '../../containers/Room/Room';
import Task from '../Task/Task';

import './Main.css';

function Main() {

    return (
        <main>
            <Menu></Menu>
            <Switch>
            <Redirect exact from="/" to="/home" />
                <Route exact path='/home' component={Room}></Route>
                <Route exact path='/task' component={Task}></Route>
            </Switch>
        </main>
    )
}

export default Main;

