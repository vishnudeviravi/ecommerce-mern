import styles from "@/styles/vendoraddproduct.module.css";
import VendorNavbar from "@/components/vendornavbar";
import Input from "@/components/input";
import ImageInput from "@/components/imageinput";
import Select from "@/components/SelectBox";
import Button from "@/components/button";
import { useState, useEffect } from "react";
import instance, { imgInstance } from "@/utils/axios";
import { getUser } from "@/utils";
import { useRouter } from "next/router";

export default function AddProduct() {
  const router = useRouter();
  const { id } = router.query;
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
  const fetchProductApi = async () => {
    if (id) {
      const productData = await instance.get(`/product/${id}`);
      console.log(productData.data.data);
      setForm({
        ...form,
        title: productData.data.data.title,
      });
    }
    // setCategory(categoryData.data);
  };

  useEffect(() => {
    fetchCategoryApi();
    fetchProductApi();
  }, [id]);

  const onInputChange = (e, field) => {
    if (["price", "priceAfterDiscount", "quantity"].includes(field)) {
      setForm({ ...form, [field]: parseInt(e.target.value) });
    } else setForm({ ...form, [field]: e.target.value });
  };

  const onImageUpload = async e => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    const url = await imgInstance.post("/upload", data);
    setForm({ ...form, mainImage: url.data.url });
  };

  const onAddProduct = async () => {
    const data = { ...form };
    data.seller = getUser();
    await instance.post("/product", data);
    router.push("/vendor");
  };

  return (
    <>
      <VendorNavbar />
      <div className={styles.addproduct}>
        <h1>Edit Product</h1>
        <div className={styles.form}>
          <div className={styles.leftDiv}>
            <Input
              value={form.title}
              label="Title"
              onChange={e => onInputChange(e, "title")}
            />
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
            <ImageInput label="Add Image" onChange={onImageUpload} />
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
            <Button onClick={onAddProduct} name="Add Product" />
          </div>
        </div>
      </div>
    </>
  );
}
