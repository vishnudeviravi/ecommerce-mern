import styles from "@/styles/Home.module.css";
import UserNavbar from "@/components/usernavbar";
import Chips from "@/components/chips";
import Product from "@/components/product";
import { useState, useEffect } from "react";
import instance from "../utils/axios";
import withAuth from "@/utils/withAuth";

const chips = [
  "All",
  "Mobile Phones",
  "Laptop",
  "Furniture",
  "Women Clothes",
  "Men Clothes",
];
function Home() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchApi = async () => {
    const productData = await instance.get("/product");
    const products = productData.data.data;
    setProduct(products);
  };

  const fetchCategoryApi = async () => {
    const categoryData = await instance.get("/category");
    setCategory(categoryData.data);
  };

  useEffect(() => {
    fetchApi();
    fetchCategoryApi();
  }, []);

  const onChipClick = async id => {
    const products = await instance.get(`/product?category=${id}`);
    setProduct(products.data.data);
  };

  return (
    <div className={styles.home}>
      <UserNavbar currentPage="home" />
      <img className={styles.homeBanner} src="banner.jpg" />
      <div className={styles.homeCategory}>
        <h3>Shop By Category</h3>
        <div className={styles.categoryChip}>
          {category.map((item, i) => (
            <Chips
              key={i}
              id={item._id}
              onClick={onChipClick}
              name={item.name}
            />
          ))}
        </div>
        k
      </div>
      <div className={styles.homeProduct}>
        {product.map((item, i) => (
          <Product key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
export default Home;
// user login , vendor login

// user
// 1. registeration , login
// view products
// search products , filter products , sort products
// add to cart and view the cart
// order a product, view all the orders
// user account - email address , phonenumber photo and current address. edit user accout

// vendor
//  1. registeration and login
//  2. add products, [ view products, edit products , delete products ] - vendor can only do these with his products
//  3. add category, view category, edit category, delete category - same as products
//  4. view orders , change status
//  5. product filter , sort
//  6. vendor account - phonenumber , email , photo and address
