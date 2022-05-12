import { Route, Routes } from "react-router-dom";
import Home from "./Component/HomePage/Home/Home";
import Header from "./Component/Shear/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
