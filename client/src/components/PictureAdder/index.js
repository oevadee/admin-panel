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
import axios from "axios";
import { Formik } from "formik";

const PictureAdder = ({ setImage, image }) => {
  const [buttonVisible, setButtonVisible] = useState(false);
  const dispatch = useDispatch();

  const hanldeImageChange = (e) => {
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
    } else {
      setButtonVisible(false);
    }
  };

  const handleImageSubmit = (values) => {
    console.log(values);

    let formData = new FormData();
    formData.append("image", values.image);

    axios
      .post("/profile", formData, {
        headers: new Headers({ Accept: "application/json" }),
      })
      .then((res) => console.log("success", res.data))
      .catch((err) => console.log(err));
  };

  return (
    <AdderContainer>
      <AddSection>
        <Header>Add a picture</Header>
        <Formik
          initialValues={{
            image: "",
          }}
          onSubmit={handleImageSubmit}
        >
          {(formProps) => (
            <form
              encType="multipart/form-data"
              onSubmit={formProps.handleSubmit}
            >
              <label htmlFor="fileInput">
                <ImageSelector>
                  <ImageSearchIcon style={{ fontSize: "3rem" }} />
                  <input
                    name="image"
                    type="file"
                    id="fileInput"
                    onChange={(e) => {
                      formProps.setFieldValue("image", e.target.files[0]);
                      hanldeImageChange(e);
                    }}
                    style={{ display: "none" }}
                  />
                </ImageSelector>
              </label>
              {buttonVisible ? (
                <SubmitButton onClick={handleImageSubmit}>
                  Add a picture
                </SubmitButton>
              ) : (
                <></>
              )}
            </form>
          )}
        </Formik>
      </AddSection>
    </AdderContainer>
  );
};

export default PictureAdder;
