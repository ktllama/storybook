import React from 'react';
import PropTypes from "prop-types";
import './button.css';

export const Input = (...props) => {

    return (
        <>
            <input
                type="input"
                className={['storybook-input']}
                placeholder="search"
                {...props}
            ></input>
        </>
    );
};

Input.propTypes = {
    onChange: PropTypes.func,
};

Input.defaultProps = {
    onChange: undefined,
}