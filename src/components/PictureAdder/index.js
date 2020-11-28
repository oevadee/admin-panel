import React, { useState } from "react";
import {
  AdderContainer,
  Header,
  ImageSelector,
  AddSection,
  SubmitButton,
} from "./style/PictureAdder";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import { useDispatch } from "react-redux";
import { setGalleryOpen } from "../../slices/appSlice";


const PictureAdder = ({ setImage }) => {
  const [buttonVisible, setButtonVisible] = useState(false);
  const dispatch = useDispatch();

  const imageChoose = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (ev) => {
        setImage(ev.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
      setButtonVisible(true);
      dispatch(
        setGalleryOpen({
          galleryOpen: false,
        })
      );
    }
  };

  return (
    <AdderContainer>
      <AddSection>
        <Header>Add a picture</Header>
        <label htmlFor="fileInput">
          <ImageSelector>
            <ImageSearchIcon style={{ fontSize: "3rem" }} />
            <input
              type="file"
              id="fileInput"
              onChange={imageChoose}
              style={{ display: "none" }}
            />
          </ImageSelector>
        </label>
        {buttonVisible ? <SubmitButton>Add a picture</SubmitButton> : <></>}
      </AddSection>
    </AdderContainer>
  );
};

export default PictureAdder;
