import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    galleryOpen: true,
  },
  reducers: {
    setGalleryOpen: state => {
      state.galleryOpen = !state.galleryOpen;
    }
  },
});


export const { setGalleryOpen } = appSlice.actions;

export const selectGalleryOpen = (state) => state.app.galleryOpen;

export default appSlice.reducer;