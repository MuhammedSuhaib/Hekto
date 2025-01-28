// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: string;
// }

// export default function logicPage() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query") || "";
//   const [results, setResults] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (query) {
//       const fetchResults = async () => {
//         setLoading(true);
//         try {
//           const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
//           if (!res.ok) throw new Error("Failed to fetch");
//           const data = (await res.json()) as { products: Product[] };
//           setResults(data.products || []); // Ensure results is always an array
//         } catch (error) {
//           console.error("Error fetching search results:", error);
//           setResults([]); // Fallback to empty array on error
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchResults();
//     }
//   }, [query]);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Search Results for &quot;{query}&quot;</h1>
//       {loading && <p>Loading...</p>}
//       {!loading && results.length > 0 ? (
//         <ul className="mt-4 space-y-4">
//           {results.map((product) => (
//             product && (
//               <li key={product._id} className="border p-4 rounded-md">
//                 <h2 className="text-xl">{product.name}</h2>
//                 <p className="text-gray-600">{product.description}</p>
//                 <p className="text-green-500">${product.price}</p>
//               </li>
//             )
//           ))}
//         </ul>
//       ) : (
//         !loading && <p className="mt-4 text-gray-500">No results found.</p>
//       )}
//     </div>
//   );
// }

function page() {
  return (
    <div>
      fixing some bugs here
    </div>
  )
}

export default page
