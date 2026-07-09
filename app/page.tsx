import Link from "next/link";
import { competicoes } from "../data/competicao";

export default function Home() {
  const competicao = competicoes[0];

  return (
    <main>
      <nav>
        <Link href="/">Início</Link> |{" "}
        <Link href="/competicoes">Competições</Link> |{" "}
        <Link href="/noticias">Notícias</Link>
      </nav>

      <h1>Dardos Portugal</h1>
      <p>Notícias, competições e classificações de dardos em Portugal.</p>

      <hr />

      <h2>Competição em destaque</h2>
      <h3>{competicao.nome}</h3>
      <p>Época {competicao.epoca}</p>

      <p>
        <Link href="/competicoes">Ver calendário e classificação</Link>
      </p>
    </main>
  );
}