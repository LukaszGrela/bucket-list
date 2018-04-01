import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';
import DragNote from '../pages/DragNote';

const AppRouter = () => (
    <BrowserRouter>
        <div className='app'>
            <Switch>
                <Route exact path="/(index.html)?" component={() => {
                    return <Redirect to='/app' />
                }} />
                <Route path="/app" exact component={DragNote} />
                <Route component={Page404} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;