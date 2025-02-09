import { Link } from "react-router-dom";
import "./Design.css";

interface Props {
  designTitle: string;
  bgpath: string;
  route: string;
}

const Design = ({ designTitle, bgpath, route }: Props) => {
  const bg = "design bg-[url(" + bgpath + ")] bg-center";

  return (
    <>
      <div className={bg}>
        <Link to={route}>{designTitle}</Link>
      </div>
    </>
  );
};

export default Design;
