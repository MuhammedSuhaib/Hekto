import { client } from "@/sanity/lib/client";

export async function GET(req) {
  const url = new URL(req.url);
  const query = url.searchParams.get("query");

  if (!query) {
    return new Response(
      JSON.stringify({ error: "Query is required" }),
      { status: 400 }
    );
  }

  try {
    const results = await client.fetch(
      `*[_type == "product" && name match $query + "*"]{
        _id,
        name,
        description,
        price,
        category
      }`,
      { query }
    );
    

    return new Response(
      JSON.stringify({ products: results || []}),
      { status: 200 }
    );
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch data" }),
      { status: 500 }
    );
  }
}
