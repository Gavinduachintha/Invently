import { useState, useEffect, useMemo } from "react";
import { Client, Databases } from "appwrite";

const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);

const databases = new Databases(client);

const useStock = () => {
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
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  // Calculate stock statistics
  const stockStats = useMemo(() => {
    const stats = {
      totalProducts: products.length,
      lowStock: 0,
      outOfStock: 0,
      inStock: 0,
      totalValue: 0,
      lowStockValue: 0,
      totalQuantity: 0,
    };

    products.forEach((product) => {
      const quantity = parseInt(product.quantity) || 0;
      const price = parseFloat(product.price) || 0;
      const lowStockThreshold = parseInt(product.lowStockThreshold) || 10;

      // Calculate total inventory value
      stats.totalValue += quantity * price;

      // Calculate total quantity
      stats.totalQuantity += quantity;

      // Categorize stock levels
      if (quantity === 0) {
        stats.outOfStock++;
      } else if (quantity <= lowStockThreshold) {
        stats.lowStock++;
        stats.lowStockValue += quantity * price;
      } else {
        stats.inStock++;
      }
    });

    return stats;
  }, [products]);

  // Get products by stock status
  const getProductsByStatus = useMemo(() => {
    return {
      outOfStock: products.filter((p) => parseInt(p.quantity) === 0),
      lowStock: products.filter((p) => {
        const qty = parseInt(p.quantity) || 0;
        const threshold = parseInt(p.lowStockThreshold) || 10;
        return qty > 0 && qty <= threshold;
      }),
      inStock: products.filter((p) => {
        const qty = parseInt(p.quantity) || 0;
        const threshold = parseInt(p.lowStockThreshold) || 10;
        return qty > threshold;
      }),
    };
  }, [products]);

  return {
    products,
    error,
    loading,
    stockStats,
    getProductsByStatus,
  };
};

export default useStock;
