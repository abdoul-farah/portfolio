import { Link, animateScroll as scroll } from 'react-scroll';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import classes from './MobileMenu.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['About', 'Projects', 'Contact'];
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <nav className={classes.nav}>
        <span className={classes.logo} onClick={scrollToTop}>
          A<span style={{ color: 'var(--primary)' }}>W</span>B
        </span>
        {!isOpen && (
          <MenuOutlinedIcon
            fontSize="large"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        )}
        {isOpen && (
          <CloseOutlinedIcon
            fontSize="large"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        )}
      </nav>

      <motion.div
        className={classes.menu}
        initial={{ x: -600 }}
        animate={{ x: isOpen ? 0 : -600 }}
        transition={{
          duration: 0.3,
          ease: 'linear',
        }}
      >
        <ul>
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                activeClass={classes.active}
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}

export default MobileMenu;
