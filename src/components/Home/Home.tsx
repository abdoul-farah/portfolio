import Wrapper from '../UI/Wrapper';
import classes from './Home.module.css';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import imgsrc from '../../assets/20220113_152806.jpg';
import { Link } from 'react-scroll';
function Home() {
  return (
    <Wrapper>
      <section className={classes.home}>
        <div className={classes.intro}>
          <h1>
            Frontend Developer
            <span className={classes.hi5}>👋</span>
          </h1>

          <p className={classes.description}>
            Hi, I'm a Abdoul. Farah, mathematician turned{' '}
            <span style={{ color: 'var(--primary)' }}>React developer</span> and
            I currently living in the glowing city, Liège, in Belgium.
          </p>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-68}
            duration={500}
          >
            <button className={classes.button}>
              Contact me
              <SendOutlinedIcon />
            </button>
          </Link>

          <Link to="About" spy={true} smooth={true} offset={-68} duration={500}>
            <div className={classes.scroll}>
              <MouseOutlinedIcon className={classes.icon} />
              Scroll down
              <ArrowDownwardIcon className={classes.icon} />
            </div>
          </Link>
        </div>
        <div className={classes.img}>
          <img className={classes.avatar} src={imgsrc} alt="" />
        </div>
      </section>
    </Wrapper>
  );
}

export default Home;
