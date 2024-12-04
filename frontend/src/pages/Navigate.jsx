import React from "react";
import "../styles/Navigate.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav">
      <h3 className="navc"><Link to="/">Home</Link></h3>
      <h3 className="navc"><Link to="/post">Post</Link></h3>
      <h3 className="navc"><Link to="/fetch">Fetch By ID</Link></h3>
      <h3 className="navc"><Link to="/logout">Logout</Link></h3>
    </div>
  );
}

export default Navigation;
