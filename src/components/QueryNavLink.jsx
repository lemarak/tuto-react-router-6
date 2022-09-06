import { NavLink, useLocation } from "react-router-dom";

const QueryNavLink = ({ to, ...props }) => {
  const location = useLocation();
  return <NavLink to={to + location.search} {...props}></NavLink>;
};

export default QueryNavLink;
