import React from "react";
import { Container } from "./style/Header";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useDispatch, useSelector } from "react-redux";
import { selectGalleryOpen, setGalleryOpen } from "../../slices/appSlice";
import ImageIcon from "@material-ui/icons/Image";
import IconButton from "@material-ui/core/IconButton";

const Header = () => {
  const dispatch = useDispatch();
  const galleryOpen = useSelector(selectGalleryOpen);

  return (
    <Container>
      {galleryOpen ? (
        <IconButton>
          <ImageIcon
            fontSize="large"
            onClick={() => {
              dispatch(
                setGalleryOpen({
                  galleryOpen: false,
                })
              );
            }}
          />
        </IconButton>
      ) : (
        <IconButton>
          <ViewModuleIcon
            fontSize="large"
            onClick={() => {
              dispatch(
                setGalleryOpen({
                  galleryOpen: true,
                })
              );
            }}
          />
        </IconButton>
      )}
      <h2>logo</h2>
      <IconButton>
        <SupervisorAccountIcon fontSize="large" />
      </IconButton>
    </Container>
  );
};

export default Header;
