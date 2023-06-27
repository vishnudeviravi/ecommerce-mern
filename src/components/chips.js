import styles from "./chips.module.css";

const Chips = props => {
  return (
    <p className={styles.chip} onClick={() => props.onClick(props.id)}>
      {props.name}
    </p>
  );
};

export default Chips;
