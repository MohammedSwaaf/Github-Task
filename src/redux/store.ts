import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import gitHub from './gitHubReducer/reducer';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    gitHubReducer:gitHub
  // Add your reducers here
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware((thunk))));
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
//store structure types