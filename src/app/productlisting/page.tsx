import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  _id: string;
  image: string;
  name: string;
  price: string;
  
};

export default async function Ourshop() {
  const products: Product[] = await client.fetch(`

*[_type == "product"]{
      name,
      image,
      price,
      _id
    }

  `);
  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      {/* Hero Section with Image */}
      <div className="relative">
        <div className="relative w-full h-[300px]">
          <Image
            src="/productlisting.png" // Replace with dynamic product image URL if needed
            alt="Product image"
            fill
            className="object-cover"
          />
          <h1 className="absolute inset-0 flex items-center lg:items-end justify-center lg:justify-start text-white text-3xl pl-20 pb-8 font-semibold p-4 bg-opacity-50 bg-black/40">
            All Products
          </h1>
        </div>
      </div>
    
      {/* Product List Section */}
      <div className="mt-9 p-4">
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
          {products.map((product) => (
            <div key={product._id} className="mb-16 bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
              <Link href={`/products/${product._id}`}> 
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                  <Image
                    src={urlFor(product.image).url()} // Assuming dynamic image URL here
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-500 mt-2">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


///////////////////////

