import Link from "next/link";
import { competicoes } from "../../../data/competicao";

type CompeticaoPageProps = {
params: Promise<{
id: string;
}>;
};

export default async function CompeticaoPage({
params,
}: CompeticaoPageProps) {
const { id } = await params;
const competicao = competicoes.find((item) => item.id === id);

if (!competicao) {
return (
<main>
<nav>
<Link href="/">Início</Link> |{" "}
<Link href="/competicoes">Competições</Link> |{" "}
<Link href="/noticias">Notícias</Link>
</nav>

    <h1>Competição não encontrada</h1>
    <p>Esta competição não existe ou foi removida.</p>
  </main>
);

}

return (
<main>
<nav>
<Link href="/">Início</Link> |{" "}
<Link href="/competicoes">Competições</Link> |{" "}
<Link href="/noticias">Notícias</Link>
</nav>

  <h1>{competicao.nome}</h1>
  <p>Época {competicao.epoca}</p>
  <p>Última atualização: {competicao.atualizadoEm}</p>

  <h2>Próximos jogos</h2>
  <ul>
    {competicao.proximosJogos.map((jogo) => (
      <li key={`${jogo.casa}-${jogo.fora}`}>
        {jogo.data} às {jogo.hora} — {jogo.casa} vs {jogo.fora}
      </li>
    ))}
  </ul>

  <h2>Últimos resultados</h2>
  <ul>
    {competicao.ultimosResultados.map((jogo) => (
      <li key={`${jogo.casa}-${jogo.fora}`}>
        {jogo.data} — {jogo.casa} {jogo.resultado} {jogo.fora}
      </li>
    ))}
  </ul>

  <h2>Classificação</h2>
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

  <p>
    <Link href="/competicoes">← Voltar às competições</Link>
  </p>
</main>

);
}