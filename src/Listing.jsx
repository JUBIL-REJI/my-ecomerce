import { useState } from "react";
import data from "./data.json";
import Cards from "./Cards";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";


export default function Listing() {
  const [products, setProducts] = useState(data);
  const [filter, setFilter] = useState("all");

  
  const smartphones = products.filter((product) => product.category === "mobilephone");
  const tablets = products.filter((product) => product.category === "Tablets");

  const handleFilter = (category) => {
    setFilter(category);
  };

 
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const filteredProducts = 
    filter === "smartphones" ? smartphones : 
    filter === "tablets" ? tablets : 
    products;

  return (
    <section> 
      <div className="flex justify-center gap-4 my-4 ">
        <Button onClick={() => handleFilter("smartphones")}>Smartphones</Button>
        <Button onClick={() => handleFilter("tablets")}>Tablets</Button>
        <Button onClick={() => handleFilter("all")}>Show All</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {filteredProducts.map((product) => (
          <Cards
            key={product.id}
            name={product.name}
            category={product.category}  
            price={product.price}
            image={product.url}
            id={product.id}
           
          />
        ))}
      </div>
    </section>
  );
}

