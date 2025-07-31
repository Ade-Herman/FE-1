import React, { useState, useEffect } from "react";
import apiClient from "../../services/api/api";
import Card from "../atoms/Card";

export default function Beranda() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get("/products");
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError("Gagal memuat produk. Silakan coba lagi nanti.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">{error}</div>;
  }

  return (
<<<<<<< HEAD
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Produk Populer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
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
=======
    <>
      <div className="max-w-6xl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </div>
>>>>>>> afb61765d41ef062b7bb98fa6cecf4402efa3d0a
      </div>
    </div>
  );
}
