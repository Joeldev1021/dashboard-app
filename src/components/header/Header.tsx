import './header.scss';
import Search from '../Search/Search';

interface props {
	handleSearch: (e: string) => void;
}

const Header = ({ handleSearch }: props) => {
	return (
		<header className='header'>
			<div className='container'>
				<Search handleSearch={handleSearch} />
			</div>
		</header>
	);
};

export default Header;
