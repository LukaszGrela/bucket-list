import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render = () => {
        return (
            <article>
                <h1>Drag and Drop example - Drag-a-Note</h1>
                <Link to='/app'>Open</Link>
            </article>
        );
    }
};
export default Home;