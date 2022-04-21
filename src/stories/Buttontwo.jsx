import React from 'react';
import PropTypes from "prop-types";
import './button.css';

export const Buttontwo = ({label, ...props}) => {

    return (
            <button
                type="button"
                className={['storybook-button']}
                {...props}
            >{label}</button>
    );
};

Buttontwo.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Buttontwo.defaultProps = {
    onClick: undefined,
    label: "my button",
}