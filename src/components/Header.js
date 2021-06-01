import PropTypes from 'prop-types';
import { Button } from './Button';

const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button></Button>
        </header>
    )
}
Header.defaultProps= {
    title:'Task traker',
}

Header.propTypes={
    title: PropTypes.string,
}

export default Header
