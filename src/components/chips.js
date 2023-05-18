import styles from "./chips.module.css";

const Chips = props => {
  return (
    <p className={styles.chip} onClick={() => props.onClick(props.name)}>
      {props.name}
    </p>
  );
};

export default Chips;