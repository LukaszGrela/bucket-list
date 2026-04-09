import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Page404 from '../pages/Page404';
import DragNote from '../pages/DragNote';

const AppRouter = () => (
    <BrowserRouter>
        <div className='app'>
            <Routes>
                <Route exact path="/(index.html)?" component={() => {
                    return <Navigate to='/app' />
                }} />
                <Route path="/app" exact component={DragNote} />
                <Route component={Page404} />
            </Routes>
        </div>
    </BrowserRouter>
);

export default AppRouter;
