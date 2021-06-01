import React from 'react'
import PropTypes from 'prop-types';

export const Button = ({children}) => {
    return (
        <button className="">{children}</button>
    )
};

Button.propTypes={
    children: PropTypes.string,
}

