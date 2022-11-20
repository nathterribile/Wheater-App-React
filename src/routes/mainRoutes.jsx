import { Router, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export default function MainRoutes() {
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </>;
}
