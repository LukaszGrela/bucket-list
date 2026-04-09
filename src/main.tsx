import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "./styles/index.scss";

const store = configureStore();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>,
);
