import styles from "./selectbox.module.css";

const Select = props => {
  return (
    <div className={styles.input}>
      <label className={styles.label}>{props.label}</label>
      <select
        ref={props.reference}
        className={styles.textInput}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
      >
        {props.options.map((item, i) => (
          <option key={i} value={item[props.valueKey]}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
