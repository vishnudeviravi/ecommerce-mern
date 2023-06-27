import styles from "./button.module.css";

const Button = props => {
  return (
    <button
      onClick={props.onClick}
      ref={props.reference}
      className={styles.button}
    >
      {props.name}
    </button>
  );
};

export default Button;
