import React from 'react';
import PropTypes from 'prop-types';

import './styles/AddButton.scss'

export class AddButton extends React.Component {

    clickHandler = () => {
        this.props && this.props.handleClick();
    }

    render = () => {
        const { className } = this.props;
        return (
            <div className={'add-button' + (className ? ' ' + className : '')}>
                <button
                    onClick={this.clickHandler}>+</button>
            </div>
        )
    }
}

AddButton.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default (AddButton);
