import React from 'react';
import PropTypes from 'prop-types';

import './styles/AddBucketButton.scss'

export class AddBucketButton extends React.Component {

    clickHandler = () => {
        this.props && this.props.handleClick();
    }

    render = () => {
        return (
            <div className='add-bucket-button'>
                <button
                    onClick={this.clickHandler}>+</button>
            </div>
        )
    }
}

AddBucketButton.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default (AddBucketButton);
