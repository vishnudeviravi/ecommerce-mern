// this is the vendor home page
// it shows all the vendor added by the vendor in table
// vendor can filter the vendor using brand and category
import styles from "@/styles/vendorhome.module.css";
import VendorNavbar from "@/components/vendornavbar";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@/components/checkbox";
import DataTable from "@/components/table";
import { useState, useEffect } from "react";
import { buildQuery } from "@/utils";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 270 },
  { field: "description", headerName: "Description", width: 270 },
  { field: "brand", headerName: "Brand", width: 150 },
  {
    field: "price",
    headerName: "Price",
    width: 120,
  },
  {
    field: "actualPrice",
    headerName: "Actual Price",
    sortable: false,
    width: 120,
  },
  {
    field: "category",
    headerName: "Category",
    sortable: false,
    width: 180,
  },
];

const VendorHome = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = async () => {
    const products = await fetch("http://localhost:3000/api/product");
    const jsonProducts = await products.json();
    setProducts(jsonProducts);
  };
  useEffect(() => {
    getProducts();
  }, []);

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
    setProducts(jsonProducts);
  };

  console.log(products);

  return (
    <div>
      <VendorNavbar currentPage="home" />
      <div className={styles.vendorMainContainer}>
        <div className={styles.vendorFilterContainer}>
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
        <div className={styles.vendorContainer}>
          <h1>Products</h1>
          <div className={styles.sortContainer}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={0}
                onChange={() => {}}
              >
                <MenuItem value={10}>Newest First</MenuItem>
                <MenuItem value={20}>Price Min to Max</MenuItem>
                <MenuItem value={30}>Price Max to Min</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={styles.itemContainer}>
            <DataTable columns={columns} rows={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorHome;
