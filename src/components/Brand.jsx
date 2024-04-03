import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Brand = ({ onClick }) => {
  return (
    <Link
      to="/"
      className="d-flex navbar-brand align-items-center align-self-start text-center"
      onClick={onClick}
    >
      <img src={logo} width={32} alt="App logo" />
    </Link>
  );
};

export default Brand;
