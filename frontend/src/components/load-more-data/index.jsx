import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => {
          const allProducts = [...prevData, ...result.products];
          const uniqueProducts = Array.from(
            new Map(allProducts.map((item) => [item.id, item])).values()
          );
          return uniqueProducts;
        });
      }

      console.log(result);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]); // dependency: fetch products every time count changes

  useEffect(() => {
    if (products.length >= 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products.length > 0 ? (
          products.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>

      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load more products
        </button>
        {disableButton ? <p>You have reached 100 products.</p> : null}
      </div>
    </div>
  );
}
