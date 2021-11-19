import "./header.scss";
import Search from "../search/Search";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Desboard-App</h1>
        <Search />
      </div>
    </header>
  );
};

export default Header;
