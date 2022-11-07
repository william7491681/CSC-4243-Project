import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalNavbar from "./components/GlobalNavbar";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import NoPage from "./components/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* inherits from globalnavbar */}
        <Route path="/" element={<GlobalNavbar />}>
          <Route index element={<LandingPage />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}