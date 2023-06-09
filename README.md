This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
git clone https://github.com/vishnudeviravi/ecommerce-mern.git

npm i        --  to install the dependency

npm run dev  --  to run the application



```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/product](http://localhost:3000/api/product). This endpoint can be edited in `pages/api/product`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Overview

This is an ecommerce application where users can view products, search products with name ,filter with brand ,category and price.

- [index](http://localhost:3000) - This is the home page of users. When index page loads it calls the [products-api](http://localhost:3000/api/product)
- [products](http://localhost:3000/products) - This is the products listing page of users. When products page loads it calls the [products-api](http://localhost:3000/api/product)
- [products-detail-page](http://localhost:3000/products/1) - This is the product detail page for users. This page shows the details of a single product with id. This page will call [single-product-api](http://localhost:3000/api/product/1)

## api

- [http://localhost:3000/api/product](http://localhost:3000/api/product)
- [http://localhost:3000/api/product/1](http://localhost:3000/api/product/1)
- [http://localhost:3000/api/product?category=Mobile Phones](http://localhost:3000/api/product?category=Mobile%20Phones)
- [http://localhost:3000/api/product?category=Mobile Phones&category=Laptop](http://localhost:3000/api/product?category=Mobile%20Phones&category=Laptop)
- [http://localhost:3000/api/product?brand=Apple](http://localhost:3000/api/product?brand=Apple)
- [http://localhost:3000/api/product?brand=Apple&brand=IKEAI](http://localhost:3000/api/product?brand=Apple&brand=IKEAI)
- [http://localhost:3000/api/product?brand=Apple&category=Laptop](http://localhost:3000/api/product?brand=Apple&category=Laptop)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
