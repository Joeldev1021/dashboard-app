
import "./search.scss";

interface props {
  handleSearch: (e: string) => void;
}

const Search = ({ handleSearch }: props) => {
  return (
        <div className="search">
          <i className="fas fa-search"></i>
            <input name="search" type="text" onChange={(e) => handleSearch(e.target.value)} placeholder="Search Task"/>
        </div>
  );
};

export default Search;
