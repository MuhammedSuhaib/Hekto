import { client } from "@/sanity/lib/client";
import ProductDetails from "@/components/ProductDetails";
import { Product } from "../Grid/page";

export interface Params {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Params) {
  // Fetch the product details
  const resp: Product | null = await client.fetch(
    `*[_type == "product" && _id == $id][0]{
        _id,
        name,
        image,
        price,
        description,
        discountPercentage,
        isFeaturedProduct,
        stockLevel,
        category
    }`,
    { id: params.id }
  );

  // Handle case where product is not found
  if (!resp) {
    return <div>Product not found</div>;
  }

  // Handle case where `category` is null
  let similarProducts: Product[] = [];
  if (resp.category) {
    // Fetch similar products only if `category` exists
    similarProducts = await client.fetch(
      `*[_type == "product" && category == $category && _id != $id]{
          _id,
          name,
          image,
          price,
          discountPercentage
      }`,
      { category: resp.category, id: params.id }
    );
  }

  return <ProductDetails product={resp} similarProducts={similarProducts} />;
}
