import { Link } from "react-router-dom";
import "./styles.scss";

const Banner = () => {
  return (
    <div>
      <Link className="logo" to="/">
        <h1>
          DS<span style={{ color: "red" }}>A</span>{" "}
        </h1>
      </Link>
    </div>
  );
};

export default Banner;
