import { Route, Routes } from "react-router-dom";
import Home from "./Component/HomePage/Home/Home";
import Appointment from "./Component/Pages/Appointment/Appointment";
import HealthForum from "./Component/Pages/HealthForum/HealthForum";
import Reviews from "./Component/Pages/Reviews/Reviews";
import Header from "./Component/Shear/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import Footer from "./Component/Shear/Footer/Footer";
import Login from "./Component/Pages/Login/Login";
import SignUp from "./Component/Pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import HomeArticles from "./Component/HomePage/HomeArticles/HomeArticles";
const queryClient = new QueryClient();
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/health-forum" element={<HealthForum />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/articles" element={<HomeArticles />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
