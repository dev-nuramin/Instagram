import React from "react";
import InitialHome from "../../Components/InitialHome/InitialHome";
import TopBar from "../../Components/TopBar/TopBar";

import TimeLine from "../../Components/TimeLine/TimeLine";


const Home = () => {



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
