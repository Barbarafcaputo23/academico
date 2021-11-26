import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Cervejas from "./paginas/Cervejas";
import Vinhos from "./paginas/Vinhos";
import Espumantes from "./paginas/Espumantes";
import Whisky from "./paginas/Whisky";
import Destilados from "./paginas/Destilados";
import Carrinho from "./paginas/Carrinho";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cervejas" element={<Cervejas />} />
          <Route path="/vinhos" element={<Vinhos />} />
          <Route path="/espumantes" element={<Espumantes />} />
          <Route path="/whisky" element={<Whisky />} />
          <Route path="/destilados" element={<Destilados />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </BrowserRouter>
      <Rodape />
    </>
  );
}

export default App;
