import { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzasContext } from "../context/PizzasContext";

const Navbar = () => {
  const {total} = useContext(PizzasContext);
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-info" >
        <div className="container">
          <Link className="navbar-brand text-white fw-bold" to="/"> 🍕 Pizzería Mamma Mía </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end text-white fw-bold" id="navbarNavAltMarkup">
            <div className="navbar-na ">
              <Link className="nav-link active" to="/cart">🛒 $ {total}</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;