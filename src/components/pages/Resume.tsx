import Footer from "./Footer";
const Resume = () => {
  return (
    <>
      <div className="coverimg">
        <img src="./src/assets/me2.jpg" alt="" />
      </div>
      <div className="shadow-xl mx-[20vw] my-[2rem]">
        <img src="./src/assets/cv.jpg" alt="" />
      </div>
      <div className="clubhead">
        <a href="./src/assets/cv.pdf" download>
          <button
            type="button"
            className="text-white bg-gray-50 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Download
          </button>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
