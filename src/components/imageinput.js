import styles from "./imageinput.module.css";

const ImageInput = props => {
  return (
    <div className={styles.input}>
      <label className={styles.label}>{props.label}</label>
      <input
        ref={props.reference}
        type="file"
        name="file"
        placeholder={props.placeholder}
        className={styles.imageInput}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
      />
    </div>
  );
};

export default ImageInput;
