import React from 'react'
import PropTypes from 'prop-types';

export const Button = ({children, className, onClick}) => {
    return (
        <button 
            className={`${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

Button.propTypes={
    children: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

