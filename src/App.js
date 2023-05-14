// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Edukasi from "./Components/Edukasi/Edukasi";
import TentangKami from "./Components/TentangKami/TentangKami";
import Kontak from "./Components/Kontak/Kontak";
import Semua from "./Components/Marketplace/Conten/Semua/Semua";
import Terbaru from "./Components/Marketplace/Conten/Terbaru/Terbaru";
import Penjualan from "./Components/Marketplace/Conten/Penjualan/Penjualan";
import AddProducts from "./Components/Marketplace/Conten/Penjualan/AddProducts";
import EditProduct from "./Components/Marketplace/Conten/Penjualan/EditProduct";
import Beli from "./Components/Marketplace/Conten/Semua/Beli";
import Seratus from "./Components/Marketplace/Conten/Semua/Filter/Seratus";
import SeratusLima from "./Components/Marketplace/Conten/Semua/Filter/Seratus150";
import DuaRatus from "./Components/Marketplace/Conten/Semua/Filter/DuaRatus";
import DuaRatusLimaPuluh from "./Components/Marketplace/Conten/Semua/Filter/DuaLima";
import Test from "./Components/Marketplace/Conten/Penjualan/Test";
import DuaribuSepuluh from "./Components/Marketplace/Conten/Semua/Filter/DuaribuSepuluh";

function App() {
  return (
    <div className=" w-full">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/edukasi" element={<Edukasi />} />
          <Route path="/tentangkami" element={<TentangKami />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/semua" element={<Semua />} />
          <Route path="/terbaru" element={<Terbaru />} />
          <Route path="/penjualan" element={<Penjualan />} />
          <Route path="/add" element={<AddProducts />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/beli/:id" element={<Beli />} />
          <Route path="/seratus" element={<Seratus />} />
          <Route path="/seratuslimapuluh" element={<SeratusLima />} />
          <Route path="/duaratus" element={<DuaRatus />} />
          <Route path="/duaratuslimpuluh" element={<DuaRatusLimaPuluh />} />
          <Route path="/2010" element={<DuaribuSepuluh />} />
          <Route path="/test" element={<Test />} />
          <Route
            path="/lebihdariduaratuslima"
            element={<DuaRatusLimaPuluh />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
