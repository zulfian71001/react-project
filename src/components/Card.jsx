import { Link } from "react-router-dom";
import "../App.css";

const Card = (props) => {
  const { title, image, id } = props;

  return (
      <Link className="w-72 h-80 rounded-md bg-cyan-50 text-black" to={`/product/${id}`}>
        <img src={image} alt="gamber" className="w-full h-1/2 object-contain"/>
        <h2>{title}</h2>
    </Link>
  );
};

export default Card;
