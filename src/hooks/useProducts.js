import { useState, useEffect } from "react";
import { Client, Databases } from "appwrite";

const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);

const databases = new Databases(client);

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          "products"
        );
        setProducts(result.documents);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return { products, error, loading };
};

export default useProducts;
