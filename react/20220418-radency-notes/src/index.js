import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom/client';
import App from './App';
import combinedReducer from "./reducers/combinedReducer";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const store = createStore(combinedReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);