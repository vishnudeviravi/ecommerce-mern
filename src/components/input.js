import styles from "./input.module.css";

const Input = props => {
  return (
    <div className={styles.input}>
      <label className={styles.label}>{props.label}</label>
      <input
        ref={props.reference}
        type={props.type}
        placeholder={props.placeholder}
        className={styles.textInput}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Input;
