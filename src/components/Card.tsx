import { Link } from "react-router-dom";
import "./Card.css";
interface Props {
  cardtitle: string;
  cardtext: string;
  route: string;
  bgpath: string;
}

const Card = ({ cardtitle, cardtext, route, bgpath }: Props) => {
  const bg = "card bg-[url(" + bgpath + ")] bg-center";
  return (
    <div className={bg}>
      <Link to={route}>
        <h1>{cardtitle}</h1>
        <p>{cardtext}</p>
      </Link>
    </div>
  );
};

export default Card;
