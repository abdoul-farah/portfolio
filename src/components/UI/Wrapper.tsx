import classes from './Wrapper.module.css';
type WrapperProps = {
  children: React.ReactNode;
};

function Wrapper({ children }: WrapperProps) {
  return <div className={classes.wrapper}>{children}</div>;
}

export default Wrapper;
