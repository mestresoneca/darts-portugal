import Link from "next/link";
import { competicao } from "../../data/competicao";

export default function CompeticoesPage() {
  return (
    <main>
        <nav>
        <Link href="/">Início</Link> |{" "}
        <Link href="/competicoes">Competições</Link> |{" "}
        <Link href="/noticias">Notícias</Link>
        </nav>
      <h1>Competições em Portugal</h1>

      <h2>{competicao.nome}</h2>
      <p>Época {competicao.epoca}</p>

      <h3>Próximos jogos</h3>

      <ul>
        {competicao.proximosJogos.map((jogo) => (
          <li key={`${jogo.casa}-${jogo.fora}`}>
            {jogo.data} às {jogo.hora} — {jogo.casa} vs {jogo.fora}
          </li>
        ))}
      </ul>

      <h3>Classificação</h3>

      <table>
        <thead>
          <tr>
            <th>Pos.</th>
            <th>Equipa</th>
            <th>J</th>
            <th>V</th>
            <th>D</th>
            <th>Pontos</th>
          </tr>
        </thead>

        <tbody>
          {competicao.classificacao.map((equipa) => (
            <tr key={equipa.equipa}>
              <td>{equipa.posicao}</td>
              <td>{equipa.equipa}</td>
              <td>{equipa.jogos}</td>
              <td>{equipa.vitorias}</td>
              <td>{equipa.derrotas}</td>
              <td>{equipa.pontos}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Última atualização: {competicao.atualizadoEm}</p>
    </main>
  );
}