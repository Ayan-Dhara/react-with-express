import {Link} from "react-router-dom";

const Index = () => {
  return (
    <>
      Home Page <br/>
      <Link to="/demo">
        Demo Page
      </Link>
    </>
  );
};

export default Index;
