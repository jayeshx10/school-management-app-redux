import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import reducer from "./reducer";

const store = configureStore({reducer: reducer});
export default store;