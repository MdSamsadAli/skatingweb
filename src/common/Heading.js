import { Link } from "react-router-dom";

const Heading = ({ title, description, btn }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="link_btn">
        <Link className="read_more">{btn}</Link>
      </div>
    </>
  );
};

export default Heading;
