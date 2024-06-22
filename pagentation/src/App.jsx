import { useEffect, useState } from "react";
import Pagentation1 from "./components/Pagentation1";

function App() {
  const [products, setProducts] = useState();
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const pages = 10;
  //method-1 ****
  // async function fetchData() {
  //   const res = await fetch("https://dummyjson.com/products?limit=100");
  //   if (!res.ok) {
  //     console.log("error came");
  //   }
  //   const data = await res.json();

  //   if (data && data.products) {
  //     setProducts(data.products);
  //   }
  // }

  // method-2 more optimestic dynamically loading pages ****

  async function fetchDynamcData() {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * pages - pages}`
    );
    if (!res.ok) {
      console.log("error came");
    }
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      setTotalProducts(data.total);
    }
  }
  useEffect(() => {
    fetchDynamcData();
  }, [page]);
  return (
    <>
      {products && products.length > 0 && (
        <Pagentation1
          data={products}
          pages={10}
          page={page}
          setPage={setPage}
          total={totalProducts}
        />
      )}
    </>
  );
}

export default App;
