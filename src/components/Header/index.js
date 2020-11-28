import React from "react";
import { Container } from "./style/Header";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useDispatch } from "react-redux";
import { setGalleryOpen } from "../../slices/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <ViewModuleIcon
        fontSize="large"
        onClick={() => {
          dispatch(setGalleryOpen());
        }}
      />
      <h2>logo</h2>
      <SupervisorAccountIcon fontSize="large" />
    </Container>
  );
};

export default Header;
