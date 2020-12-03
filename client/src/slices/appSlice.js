import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    galleryOpen: false,
  },
  reducers: {
    setGalleryOpen: (state, action) => {
      state.galleryOpen = action.payload.galleryOpen;
    }
  },
});


export const { setGalleryOpen } = appSlice.actions;

export const selectGalleryOpen = (state) => state.app.galleryOpen;

export default appSlice.reducer;