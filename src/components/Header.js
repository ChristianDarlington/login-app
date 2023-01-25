import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import UserContext from '../Context/UserContext';


import Nav from './Nav';

const Header = () => {

  const {accentColor} = useContext(ThemeContext)
  const {user} = useContext(UserContext)

  return (
    <div className="header" style={{ background: accentColor }}>
      <div className="bounds">
        <Link to="/">
          <h1 className="header--logo">MyApp</h1>
        </Link>
        <Nav user={user} />
      </div>
    </div>
  );
};

export default Header;