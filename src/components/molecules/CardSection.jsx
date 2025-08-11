import React from "react";
import { useGetProductsQuery } from "../../features/products/productsApiSlice";
import Card from "../atoms/Card";

export default function CardSection() {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  if (isError) {
    console.error(error);
    return (
      <div className="text-center p-10 text-red-500">
        Gagal memuat produk. Silakan coba lagi nanti.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Produk Populer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <Card
            key={product.id}
            cardImage={product.cardImage}
            title={product.title}
            description={product.description}
            profileImage={product.profileImage}
            instructorName={product.instructorName}
            instructorTitle={product.instructorTitle}
            instructorCompany={product.instructorCompany}
            rating={product.rating}
            reviewCount={product.reviewCount}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
