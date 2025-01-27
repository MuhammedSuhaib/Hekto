import { client } from "@/sanity/lib/client";
import { Product } from "../page";
import ProductDetails from "@/components/ProductDetails";

export interface Params {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Params) {
  const resp: Product = await client.fetch(
    `*[_type == "product" && _id == $id][0]{
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

  const similarProducts: Product[] = await client.fetch(
    `*[_type == "product" && category == $category && _id != $id]{
        _id,
        name,
        image,
        price,
        discountPercentage
    }`,
    { category: resp.category, id: params.id }
  );

  return <ProductDetails product={resp} similarProducts={similarProducts} />;
}
