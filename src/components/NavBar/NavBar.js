import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <span className={styles.logo}>
        <a href='/'>
          <i className='fa fa-tasks'></i>
        </a>
      </span>
      <ul className={styles.list}>
        <li className={styles.link}>
          <a href='/'>Home</a>
        </li>
        <li className={styles.link}>
          <a href='/about'>About</a>
        </li>
        <li className={styles.link}>
          <a href='/favourite'>Favourite</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
