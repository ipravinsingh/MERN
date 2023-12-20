import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice"; // messageReducer = messageSlice (export default)
import notesSlice from "./slices/notesSlice";

export default configureStore({
  reducer: {
    messageReducer,
    notesReducer: notesSlice,
  },
});
