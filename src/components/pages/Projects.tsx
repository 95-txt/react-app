import { Link } from "react-router-dom";
import "./P.css";
const Projects = () => {
  return (
    <>
      <div className="coverimg lg:mb-[4rem]">
        <img src="./src/assets/project.png" alt="" />
      </div>
      <Link to={"#"} className="project bg-[url(src/assets/leaf.png)]">
        Dr.Green
      </Link>
      <div className="discription">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nam in
        expedita, ex doloremque ullam minus eius ducimus. Hic dolore tenetur
        neque, quos recusandae laudantium nulla repudiandae dicta debitis
        facilis.
      </div>
      <Link to={"#"} className="project bg-[url(src/assets/leaf.png)]">
        Dr.Green
      </Link>
      <div className="discription">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nam in
        expedita, ex doloremque ullam minus eius ducimus. Hic dolore tenetur
        neque, quos recusandae laudantium nulla repudiandae dicta debitis
        facilis.
      </div>
    </>
  );
};

export default Projects;
