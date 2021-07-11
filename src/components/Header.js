import PropTypes from "prop-types";
import { Button } from "./Button";
import { AiOutlineUp } from "react-icons/ai";
import image from "../headerBg.jpg";
const Header = ({ title, showTask, onAdd }) => {
  const onClick = () => {
    onAdd(!showTask);
  };
  return (
    <header className="w-full relative items-center">
      <div className="bg-blue-400 filter contrast-100 brightness-50 w-full h-52 ">
        <img
          src={image}
          className="mix-blend-hard-light h-full w-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="w-full flex justify-between p-8 absolute bottom-0 max-w-4xl">
        <h1 className="text-gray-200 font-medium text-4xl">{title}</h1>
        <Button
          className="border-2 bg-gray-400 border-gray-400 p-5 rounded-lg"
          onClick={onClick}
        >
          <AiOutlineUp
            className={`text-list ${!showTask ? "transform rotate-180" : ""}`}
          />
        </Button>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
