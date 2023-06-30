import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const PizzasContext = createContext();

export const PizzasProvider = ({children}) => {
  const [pizzas, setpizzas] = useState([]);
  const [cart, setCart] = useState([]);
  const {data, loading} = useFetch('/pizzas.json');
  console.log(data);

  useEffect(() => {
    if(data) {
      setpizzas(data);
    }
  }, [data])

  const addToCart = (pizza) => {
    const product = {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      img: pizza.img,
      count: 1,
    };
    const findProductIndex = cart.findIndex((item) => item.id === pizza.id);
    if(findProductIndex >= 0) {
      cart[findProductIndex].count++;
      setCart([...cart]);
    } else {
      setCart([...cart, product]);
    }
  }

  const increment = (index) => {
    cart[index].count++;
    setCart([...cart]);
  }

  const decrement = (index) => {
    if(cart[index].count === 1) {
      cart.splice(index, 1);
    } else {
      cart[index].count--;
    }
    setCart([...cart]);
  }

  const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0);

  const PizzasProviderValues = {
    pizzas,
    cart,
    loading,
    setCart,
    addToCart,
    increment,
    decrement,
    total
  };

  return (
    <PizzasContext.Provider value={PizzasProviderValues}>
      {children}
    </PizzasContext.Provider>
  )
}
