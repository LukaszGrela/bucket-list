import React from 'react';
import PropTypes from 'prop-types';


export class AddBucketButton extends React.Component {

    clickHandler = () => {
        this.props && this.props.handleClick();
    }

    render = () => {
        return (
            <button className='add-bucket-button'
                onClick={this.clickHandler}>+</button>
        )
    }
}

AddBucketButton.propTypes = {
    handleClick:PropTypes.func.isRequired
}

export default (AddBucketButton);
