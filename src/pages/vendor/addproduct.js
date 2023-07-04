import styles from "@/styles/vendoraddproduct.module.css";
import VendorNavbar from "@/components/vendornavbar";
import Input from "@/components/input";
import ImageInput from "@/components/imageinput";
import Select from "@/components/SelectBox";
import Button from "@/components/button";
import { useState, useEffect } from "react";
import instance from "@/utils/axios";

export default function AddProduct() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: 0,
    priceAfterDiscount: 0,
    category: "",
    quantity: 0,
    brand: "",
    isOutOfStock: false,
    mainImage: "",
  });

  const [category, setCategory] = useState([]);

  console.log(form);

  const fetchCategoryApi = async () => {
    const categoryData = await instance.get("/category");
    setCategory(categoryData.data);
  };

  useEffect(() => {
    fetchCategoryApi();
  }, []);

  const onInputChange = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };
  return (
    <>
      <VendorNavbar />
      <div className={styles.addproduct}>
        <h1>Add Product</h1>
        <div className={styles.form}>
          <div className={styles.leftDiv}>
            <Input label="Title" onChange={e => onInputChange(e, "title")} />
            <Input
              label="Description"
              onChange={e => onInputChange(e, "description")}
            />
            <Input
              label="Price"
              type="number"
              onChange={e => onInputChange(e, "price")}
            />
            <Input
              label="Price After Discount"
              type="number"
              onChange={e => onInputChange(e, "priceAfterDiscount")}
            />
            <ImageInput label="Add Image" />
          </div>
          <div className={styles.rightDiv}>
            <Input
              label="Quantity"
              onChange={e => onInputChange(e, "quantity")}
            />
            <Input label="Brand" onChange={e => onInputChange(e, "brand")} />
            <Select
              label="Is Out of Stock"
              onChange={e => onInputChange(e, "isOutOfStock")}
              valueKey="value"
              options={[
                { name: "Yes", value: true },
                { name: "No", value: false },
              ]}
            />
            <Select
              label="Choose Category"
              options={category}
              valueKey="_id"
              onChange={e => onInputChange(e, "category")}
            />
            <Button name="Add Product" />
          </div>
        </div>
      </div>
    </>
  );
}
