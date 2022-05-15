import { Route, Routes } from "react-router-dom";
import Home from "./Component/HomePage/Home/Home";
import Appointment from "./Component/Pages/Appointment/Appointment";
import HealthForum from "./Component/Pages/HealthForum/HealthForum";
import Reviews from "./Component/Pages/Reviews/Reviews";
import Header from "./Component/Shear/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/health-forum" element={<HealthForum />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
