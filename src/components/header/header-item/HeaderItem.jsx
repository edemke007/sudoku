import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const HeaderItem = ({ path, label }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `p-4 hover:bg-slate-500 text-white ${
          isActive ? "underline decoration-amber-400" : ""
        }`
      }
    >
      {label}
    </NavLink>
  );
};

HeaderItem.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
};

export default HeaderItem;
