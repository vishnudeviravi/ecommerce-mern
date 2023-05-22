import Checkbox from "@mui/material/Checkbox";
import styles from "./checkbox.module.css";

const CustomCheckbox = props => {
  return (
    <div className={styles.customCheckbox}>
      <Checkbox onChange={e => props.onCheckboxClicked(e, props.label)} />
      <p>{props.label}</p>
    </div>
  );
};

export default CustomCheckbox;
