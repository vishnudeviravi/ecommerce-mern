import styles from "@/styles/Home.module.css";
import UserNavbar from "@/components/usernavbar";
import Chips from "@/components/chips";
import Product from "@/components/product";

const chips = [
  "Mobile Phones",
  "Laptop",
  "Furniture",
  "Women Clothes",
  "Men Clothes",
];

export default function Home() {
  return (
    <div className={styles.home}>
      <UserNavbar currentPage="home" />
      <img className={styles.homeBanner} src="banner.jpg" />
      <div className={styles.homeCategory}>
        <h3>Shop By Category</h3>
        <div className={styles.categoryChip}>
          {chips.map(item => (
            <Chips name={item} />
          ))}
        </div>
      </div>
      <div className={styles.homeProduct}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

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
