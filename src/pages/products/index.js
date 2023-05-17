import { useState } from "react";
import styles from "@/styles/products.module.css";
import UserNavbar from "@/components/usernavbar";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Product from "@/components/product";
import Checkbox from "@/components/checkbox";

const Products = () => {
  const [age, setAge] = useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div className={styles.products}>
      <UserNavbar />
      <div className={styles.productsMainContainer}>
        <div className={styles.productsFilterContainer}>
          <h1>Filters</h1>
          <h4 className={styles.filterHeading}>Brands</h4>
          <Checkbox label="Samsung" />
          <Checkbox label="Apple" />
          <Checkbox label="Mi" />
          <Checkbox label="RealMe" />
          <h4 className={styles.filterHeading}>Category</h4>
          <Checkbox label="Smart Phone" />
          <Checkbox label="Feature Phone" />
          <Checkbox label="Watches" />
          <Checkbox label="Earphones" />
        </div>
        <div className={styles.productsContainer}>
          <h1>Products</h1>
          <div className={styles.sortContainer}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Newest First</MenuItem>
                <MenuItem value={20}>Price Min to Max</MenuItem>
                <MenuItem value={30}>Price Max to Min</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={styles.itemContainer}>
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
