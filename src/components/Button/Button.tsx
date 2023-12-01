import classes from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
};
function Button({ children }: ButtonProps) {
  return <button className={classes.button}>{children}</button>;
}

export default Button;
