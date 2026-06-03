import { FaUsers } from "react-icons/fa";

export default function Alunos({ alunos }) {
  return (
    <>
      <hr id="linha" />
      <div className="title-table">
        <FaUsers />
        <h2>Lista de alunos</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Matricula</th>
            <th>Nome</th>
            <th>Média</th>
            <th>Pendência</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.matricula}>
              <td>{aluno.matricula}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.media}</td>
              <td>{aluno.pendencia ? "Sim" : "Não"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
