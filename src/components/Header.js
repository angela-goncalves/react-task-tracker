import PropTypes from 'prop-types';
import { Button } from './Button';

const Header = ({title}) => {
    const onClick= () => {
        console.log("Click")
    }
    return (
        <header className="p-8 border-2 border-black rounded-md flex flex-row justify-between items-center">
            <h1 className="font-medium text-2xl">{title}</h1>
            <Button 
                className="text-white bg-black border-2 border-black p-4 rounded-md"
                onClick={onClick}
                >
                Add
            </Button>
        </header>
    )
}
Header.defaultProps= {
    title:'Task tracker',
}

Header.propTypes={
    title: PropTypes.string,
}

export default Header
