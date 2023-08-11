import { combineReducers } from 'redux';
import gitHub from './gitHubReducer/reducer';

const rootReducer = combineReducers({
    gitHubReducer:gitHub
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;