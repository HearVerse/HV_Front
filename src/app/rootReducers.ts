import mediaRunningReducer from "./mediaRunning/mediaRunning";
import authReducer from '../redux/authSlice'
const rootReducers = {
  mediaRunning: mediaRunningReducer,
  auth: authReducer,
};

export default rootReducers;
