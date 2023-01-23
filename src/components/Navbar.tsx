import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/kaitoss-project">Home</Link>
      <Link to="/kaitoss-project/about">About</Link>
      <Link to="/kaitoss-project/service">Service</Link>
      <Link to="/kaitoss-project/work">Work</Link>
    </>
  );
};

export default Navbar;
