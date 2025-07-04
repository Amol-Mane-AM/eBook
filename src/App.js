/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-distracting-elements */
import { useState } from "react";
import Productlist from "./Productlist";
import { useApi } from "./useApi";

function App() {
  //const [Products, setProducts] = useState('');

  const [url, setUrl] = useState("http://localhost:3000/products");

  const { Product: p, loading: load } = useApi(url);
  //console.log(p);
  console.log(load);

  // useEffect(() => {
  //     fetch(url)
  //         .then(d => d.json())
  //         .then(res => setProducts(res));
  // }, [url]);

  return (
    <>
      <marquee>
        <p>
          <h1>My E-Books</h1>
        </p>
      </marquee>

      <div id="btn1">
        <button
          className="btn btn-success"
          onClick={() => setUrl(`http://localhost:3000/products`)}
        >
          All
        </button>
        <button
          className="btn btn-danger"
          onClick={() =>
            setUrl(`http://localhost:3000/products?category=laptop`)
          }
        >
          Laptop
        </button>
        <button
          className="btn btn-warning"
          onClick={() =>
            setUrl(`http://localhost:3000/products?category=mobile`)
          }
        >
          Mobile
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            setUrl(`http://localhost:3000/products?category=watch`)
          }
        >
          Watch
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setUrl(`http://localhost:3000/products?category=tv`)}
        >
          TV
        </button>
      </div>

      {load && (
        <div class="spinner-border text-primary loadinga" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )
      }

      <Productlist product1={p} />
    </>
  );
}

export default App;
