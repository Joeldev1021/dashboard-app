import { Link } from "react-router-dom";
import "./styles.scss";

const Banner = () => {
  return (
    <div className="banner">
      <Link className="logo" to="/">
        <h1>
          DS<span style={{ color: "red" }}>A</span>{" "}
        </h1>
      </Link>
      <aside>
        <ul>
          <li><i className="far fa-calendar"></i></li>
          <li><i className="fas fa-user-cog"></i></li>
          <li><i className="fas fa-paste"></i></li>
          <li><i className="far fa-calendar-check"></i></li>
          <li><i className="fas fa-cogs"></i></li>
        </ul>
      </aside>
    </div>
  );
};

export default Banner;
