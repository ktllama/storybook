import React from 'react';
import PropTypes from "prop-types";
import './button.css';

export const ButtonParam = ({label, ...props}) => {

    return (
            <button
                type="button"
                className={['storybook-button']}
                {...props}
            >{label}</button>
    );
};

ButtonParam.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

ButtonParam.defaultProps = {
    onClick: undefined,
    label: "my button",
}