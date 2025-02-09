import "./pages/D.css";

interface Props {
  clubname: string;
  arrayname: string[];
}

const Club = ({ clubname, arrayname }: Props) => {
  return (
    <>
      <div className="clubhead">{clubname}</div>
      <div className="imgcontainer">
        {arrayname.map((src, index) => (
          <div key={index} className="break-inside-avoid">
            <img src={src} className="w-full object-cover " />
          </div>
        ))}
      </div>
    </>
  );
};

export default Club;
