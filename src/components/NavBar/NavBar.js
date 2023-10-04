import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <span className={styles.logo}>
        <Link to='/'>
          <i className='fa fa-tasks'></i>
        </Link>
      </span>
      <ul className={styles.list}>
        <li className={styles.link}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.linkActive : undefined
            }
            to='/'>
            Home
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.linkActive : undefined
            }
            to='/about'>
            About
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.linkActive : undefined
            }
            to='/favourite'>
            Favourite
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
