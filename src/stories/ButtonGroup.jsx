import React from 'react';
import PropTypes from "prop-types";
import './button.css';

export const ButtonGroup = ({label, ...props}) => {

    return (
           <>
                <button
                    type="button"
                    className={['storybook-button']}
                    {...props}
                >{label}</button>
                <button
                    type="button"
                    className={['storybook-button']}
                    {...props}
                >{label}</button>
           </>

    );
};

ButtonGroup.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

ButtonGroup.defaultProps = {
    onClick: undefined,
}