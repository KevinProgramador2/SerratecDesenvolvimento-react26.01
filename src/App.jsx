import { useState } from "react";
import "./App.css";
import Alunos from "./components/Aluno";
import ListaPendencia from "./components/ListaPendencia";
import { alunos } from "./data/alunos";
import ContarPendencias from "./components/ContarPendencias";

function App() {
  return (
    <>
      <h1>Saracuruna Upskills</h1>
      <Alunos alunos={alunos} />
      <ListaPendencia alunos={alunos} />
      <ContarPendencias alunos={alunos} />
    </>
  );
}

export default App;
