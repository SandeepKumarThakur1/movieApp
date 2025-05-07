import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import SingleMovie from "./pages/SingleMovie";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="movie/:id" element={<SingleMovie />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
