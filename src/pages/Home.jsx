import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";
import PizzaCard from "../components/PizzaCard"

const Home = () => {
  const {pizzas} = useContext(PizzasContext);
 
  return (
    <div className="container">
      {pizzas && (
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-md-4 my-2" key={pizza.id}>
              <PizzaCard pizza={pizza} />
            </div>
          ))}

        </div>
      )}
    </div>
  )
}

export default Home;