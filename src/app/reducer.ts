import { combineReducers } from 'redux';
import walletInfoSlice from './\bslices/walletInfoSlice';

const rootReducer = combineReducers({
  walletInfo: walletInfoSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
