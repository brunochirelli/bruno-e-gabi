import PropTypes from "prop-types";
import { Provider } from "react-redux";

import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import cartReducer from "./cart/cartSlice";
import giftsReducer from "./gifts/giftsSlice";
import guestsReducer from "./guests/guestsSlice";

/**
 * Redux Provider with Persist
 *
 * @component
 * @version       0.1.0
 * @description   Configure a reducer and a persistent state with redux-persist.
 *                This provider means to handle all Redux provider and
 *                middlewares logic.
 *
 */

const rootReducer = combineReducers({
  cart: cartReducer,
  gifts: giftsReducer,
  guests: guestsReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["guests"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

let persistor = persistStore(store);

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

ReduxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReduxProvider;
