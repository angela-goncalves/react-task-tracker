import PropTypes from "prop-types";
import { Button } from "./Button";
import { AiOutlineUp } from "react-icons/ai";

const Header = ({ title, showTask, onAdd }) => {
  const onClick = () => {
    onAdd(!showTask);
  };
  return (
    <header className="p-8 border-2 border-black rounded-md flex flex-row justify-between items-center">
      <h1 className="font-medium text-2xl">{title}</h1>
      <Button
        className="text-white bg-list border-2 border-black p-4 rounded-md"
        onClick={onClick}
      >
        <AiOutlineUp
          className={`text-gray-200 ${!showTask ? "transform rotate-180" : ""}`}
        />
      </Button>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
