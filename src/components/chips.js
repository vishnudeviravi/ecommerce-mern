import styles from "./chips.module.css";

const Chips = props => {
  return <p className={styles.chip}>{props.name}</p>;
};

export default Chips;
