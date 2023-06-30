import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";
import { useNavigate } from "react-router-dom";

const PizzaCard = ({pizza}) => {
  const {addToCart} = useContext(PizzasContext);
  const {ingredients} = pizza;
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/product/${pizza.id}`);
  }

  return (
    <div className="card">
      <img src={pizza.img} alt={pizza.name} />
      <div className="card-body">
        <h5 class="card-title">{pizza.name}</h5>
        <hr />
        <p>Ingredientes:</p>
        <ul className="list-group">
          {ingredients.map((ingredient, index) => (
            <li className="list-group-item" key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <hr />
        <div className="d-flex justify-content-center">
          <h5 className="card-title">$ {pizza.price}</h5>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-info text-white" onClick={handleNavigate}>Ver más 👀</button>
          <button className="btn btn-danger" onClick={() => addToCart(pizza)}>Añadir 🛒</button>
        </div>

      </div>
    </div>
  )
}

export default PizzaCard;