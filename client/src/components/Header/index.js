import React from "react";
import { Container } from "./style/Header";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useDispatch, useSelector } from "react-redux";
import { selectGalleryOpen, setGalleryOpen } from "../../slices/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const galleryOpen = useSelector(selectGalleryOpen)

  return (
    <Container>
      <ViewModuleIcon
        fontSize="large"
        onClick={() => {
          dispatch(setGalleryOpen({
            galleryOpen: !galleryOpen
          }));
        }}
      />
      <h2>logo</h2>
      <SupervisorAccountIcon fontSize="large" />
    </Container>
  );
};

export default Header;
