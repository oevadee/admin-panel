import React, { useState } from "react";

// Styled-components
import { DashboardContainer } from "./style/Dashboard";

// Components
import PictureAdder from "../../components/PictureAdder";
import PictureDisplay from "../../components/PictureDisplay";
import { selectGalleryOpen } from "../../slices/appSlice";
import { useSelector } from 'react-redux';
import GalleryView from "../../components/GalleryView";


const Dashboard = () => {
  const [image, setImage] = useState();
  const galeryOpen = useSelector(selectGalleryOpen)

  return (
    <DashboardContainer>
      {galeryOpen ? (
        <GalleryView />
      ) : (
        <PictureDisplay image={image} />
      )}
      <PictureAdder setImage={setImage} />
    </DashboardContainer>
  );
};

export default Dashboard;
