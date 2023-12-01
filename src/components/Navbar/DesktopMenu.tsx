import classes from './Desktop.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const menuItems = ['About', 'Projects', 'Contact'];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={classes.nav}>
      <span className={classes.logo} onClick={scrollToTop}>
        A<span style={{ color: 'var(--primary)' }}>W</span>B
      </span>
      <ul>
        {menuItems.map((item) => (
          <li key={item}>
            <Link
              activeClass={classes.active}
              to={item}
              spy={true}
              smooth={true}
              offset={-68}
              duration={500}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
