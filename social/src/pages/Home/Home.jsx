import React, { useContext } from "react";
import InitialHome from "../../Components/InitialHome/InitialHome";
import TopBar from "../../Components/TopBar/TopBar";

import TimeLine from "../../Components/TimeLine/TimeLine";
import AuthContext from "../../context/AuthContext";

const Home = () => {

  const {token} = useContext(AuthContext);
  console.log("Token from Home:", token);
  return (
    <>
      <TopBar />
      {/* <InitialHome /> */}

      {/* Uncomment the InitialHome component if you want to display it */}


      {/* timeline */}
      <div className="home_container">
        <div className="home_wrapper">
          <TimeLine />
        </div>
      </div>
    </>
  );
};

export default Home;
