import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalNavbar from "./components/GlobalNavbar";
import GlobalFooter from "./components/GlobalFooter";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import About from "./components/About";
import SignUp from "./components/SignUp";
import NoPage from "./components/NoPage";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* all pages inherit globalnavbar */}
        <Route path="/" element={<GlobalNavbar/>}>
          <Route index element={<><LandingPage /><GlobalFooter/></>} />
          <Route path="Profile" element={<><Profile /><GlobalFooter/></>} />
          <Route path="About" element={<><About /><GlobalFooter/></>} />
          <Route path="SignUp" element={<><SignUp /><GlobalFooter/></>} />
          <Route path="ContactUs" element={<><ContactUs /><GlobalFooter/></>} />
          <Route path="*" element={<><NoPage /><GlobalFooter/></>} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}