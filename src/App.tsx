import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Configuracao from "./paginas/Configuracao";
import Sorteio from "./paginas/Sorteio";
import PaginaBase from "./paginas/PaginaBase";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<PaginaBase />}>
            <Route path="/" element={<Configuracao />} />
            <Route path="/sorteio" element={<Sorteio />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
