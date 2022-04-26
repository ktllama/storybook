import React from 'react';
import PropTypes from "prop-types";
import './button.css';

export const MultiButton = ({label, ...props}) => {

    return (
            <button
                type="button"
                className={['storybook-button']}
                {...props}
            >{label}</button>
    );
};

MultiButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

MultiButton.defaultProps = {
    onClick: undefined,
    label: "my button",
}