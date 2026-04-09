import React from 'react';
import PropTypes from 'prop-types';

import './styles/AddWithText.scss';

class AddWithText extends React.Component {
    state = {
        value: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { value } = this.state;
        this.props.handleClick && this.props.handleClick(value);

        this.setState(_ => ({ value: '' }));
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState(_ => ({ value }));
    }
    render = () => {
        const { className, placeholder = 'Type some text' } = this.props;
        const { value } = this.state;
        return (
            <div className={'add-with-text' + (className ? ' ' + className : '')}>
                <form onSubmit={this.handleSubmit}>
                    <input type='text'
                        value={value}
                        onChange={this.handleChange}
                        placeholder={placeholder} />
                    <div className={'add-button'}>
                        <button disabled={value.length === 0}>+</button>
                    </div>
                </form>
            </div>
        );
    }
}
AddWithText.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default AddWithText;