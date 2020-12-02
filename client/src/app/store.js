import { configureStore } from '@reduxjs/toolkit';

// Import reducers
import appSlice from '../slices/appSlice';

export default configureStore({
  reducer: {
    app: appSlice
  },
});