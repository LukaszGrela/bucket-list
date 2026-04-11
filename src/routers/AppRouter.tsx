import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page404 from "../pages/Page404";
import DragNote from "../pages/DragNote";

const AppRouter = () => (
  <BrowserRouter>
    <div className="app">
      <Routes>
        <Route
          path="/(index.html)?"
          Component={() => {
            return <Navigate to="/app" />;
          }}
        />
        <Route path="/app" Component={DragNote} />
        <Route Component={Page404} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
