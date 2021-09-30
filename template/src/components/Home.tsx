import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      Home Page <br/>
      <Link to="/demo">
        Demo Page
      </Link>
    </>
  );
};

export default Home;
