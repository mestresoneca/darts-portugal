import Link from "next/link";
import { noticias } from "../../../data/noticias";

type NoticiaPageProps = {
  params: {
    id: string;
  };
};

export default function NoticiaPage({ params }: NoticiaPageProps) {
  const noticia = noticias.find((item) => item.id === params.id);

  if (!noticia) {
    return (
      <main>
        <nav>
          <Link href="/">Início</Link> |{" "}
          <Link href="/competicoes">Competições</Link> |{" "}
          <Link href="/noticias">Notícias</Link>
        </nav>

        <h1>Notícia não encontrada</h1>
        <p>Esta notícia não existe ou foi removida.</p>
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

      <article>
        <h1>{noticia.titulo}</h1>
        <p>{noticia.data}</p>
        <p>{noticia.conteudo}</p>
      </article>

      <p>
        <Link href="/noticias">← Voltar às notícias</Link>
      </p>
    </main>
  );
}