import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Roulette } from "./components/Roulette";
import { QuestionsTrabajoInfantil } from "./components/Questions/QuestionsTrabajoIntantil";
import { QuestionsHistoriaDelTrabajo } from "./components/Questions/QuestionsHistoriaDelTrabajo";
import { QuestionsSeguridadSocial } from "./components/Questions/QuestionsSeguridadSocial";

import "./Style/style.scss"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/roulette" element={<Roulette />} />
          <Route path="/questions/historia-del-trabajo" element={<QuestionsHistoriaDelTrabajo />}/>
          <Route path="/questions/trabajo-infantil" element={<QuestionsTrabajoInfantil />} />
          <Route path="/questions/seguridad-social" element={<QuestionsSeguridadSocial />} />
          <Route path="*" element={<h3>PAGINA NO ENCONTRADA</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;