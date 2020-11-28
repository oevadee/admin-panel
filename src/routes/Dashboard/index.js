import React, { useState } from "react";

// Styled-components
import { DashboardContainer } from "./style/Dashboard";

// Components
import PictureAdder from "../../components/PictureAdder";
import PictureDisplay from "../../components/PictureDisplay";

const Dashboard = () => {
  const [image, setImage] = useState();

  return (
    <DashboardContainer>
      <PictureDisplay image={image} />
      <PictureAdder setImage={setImage} />
    </DashboardContainer>
  );
};

export default Dashboard;
