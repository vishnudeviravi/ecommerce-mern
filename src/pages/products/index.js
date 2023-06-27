import { useState, useEffect } from "react";
import styles from "@/styles/products.module.css";
import UserNavbar from "@/components/usernavbar";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Product from "@/components/product";
import Checkbox from "@/components/checkbox";
import { buildQuery } from "@/utils";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [age, setAge] = useState("");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProductsFromApi = async () => {
    const products = await fetch("http://localhost:3000/api/product");
    const jsonProducts = await products.json();
    setProduct(jsonProducts);
  };

  useEffect(() => {
    getProductsFromApi();
  }, []);

  const handleChange = event => {
    setAge(event.target.value);
  };
  const handleBrandCheckbox = (e, label) => {
    if (e.target.checked) {
      setBrands([...brands, label]); // check samsung                ['apple',"samsung"]
      callFilterApi([...brands, label], categories);
    } else {
      const filteredBrands = brands.filter(item => item != label); // uncheck   ["apple",'"samsung"]
      // ["apple"]
      setBrands(filteredBrands);
      callFilterApi(filteredBrands, categories);
    }
    console.log(e.target.checked, label);
  };

  const handleCategoryCheckbox = (e, label) => {
    if (e.target.checked) {
      setCategories([...categories, label]); // check samsung                ['apple',"samsung"]
      callFilterApi(brands, [...categories, label]);
    } else {
      const filteredCategories = categories.filter(item => item != label); // uncheck   ["apple",'"samsung"]
      setCategories(filteredCategories);
      callFilterApi(brands, filteredCategories);
    }
    console.log(e.target.checked, label);
  };

  const callFilterApi = async (brands, categories) => {
    let queryBrands = buildQuery("brand", brands);
    let queryCategories = buildQuery("category", categories);
    let query = queryBrands + queryCategories;
    const products = await fetch(`http://localhost:3000/api/product?${query}`);
    const jsonProducts = await products.json();
    setProduct(jsonProducts);
  };

  console.log(brands);
  return (
    <div className={styles.products}>
      <UserNavbar />
      <div className={styles.productsMainContainer}>
        <div className={styles.productsFilterContainer}>
          <h1>Filters</h1>
          <h4 className={styles.filterHeading}>Brands</h4>
          <Checkbox label="Samsung" onCheckboxClicked={handleBrandCheckbox} />
          <Checkbox label="Apple" onCheckboxClicked={handleBrandCheckbox} />
          <Checkbox
            label="Allen Solly"
            onCheckboxClicked={handleBrandCheckbox}
          />
          <Checkbox label="IKEAI" onCheckboxClicked={handleBrandCheckbox} />
          <h4 className={styles.filterHeading}>Category</h4>
          <Checkbox
            label="Mobile Phones"
            onCheckboxClicked={handleCategoryCheckbox}
          />
          <Checkbox
            label="Furniture"
            onCheckboxClicked={handleCategoryCheckbox}
          />
          <Checkbox label="Laptop" onCheckboxClicked={handleCategoryCheckbox} />
          <Checkbox
            label="Men Clothes"
            onCheckboxClicked={handleCategoryCheckbox}
          />
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
            {products.map((item, i) => (
              <Product key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
