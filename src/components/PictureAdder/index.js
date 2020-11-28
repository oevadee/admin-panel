import React from "react";
import { AdderContainer, Header } from "./style/PictureAdder";
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

const PictureAdder = () => {
  return (
    <AdderContainer>
      <Header>Add a picture</Header>
      <a>
        <ImageSearchIcon />
        <input type="file" style={{display: 'none'}} />
      </a>
      <button>Add a picture</button>
    </AdderContainer>
  );
};

export default PictureAdder;
