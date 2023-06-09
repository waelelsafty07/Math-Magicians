// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="d-flex d-space-around align-items-center">
      <div className="navbar-head">Math Magicians</div>
      <div className="navbar-menu">
        <ul className="d-flex d-space-between">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="calculator">Calculator</Link>
          </li>
          <li>
            <Link to="quote">Quote</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet />
  </>
);

export default Navbar;
