import Link from "next/link";
import { noticias } from "../../data/noticias";

export default function NoticiasPage() {
return (
<main>
<nav>
<Link href="/">Início</Link> |{" "}
<Link href="/competicoes">Competições</Link> |{" "}
<Link href="/noticias">Notícias</Link>
</nav>

  <h1>Notícias</h1>

  {noticias.map((noticia) => (
    <article key={noticia.id}>
      <h2>
        <Link href={`/noticias/${noticia.id}`}>{noticia.titulo}</Link>
      </h2>
      <p>{noticia.data}</p>
      <p>{noticia.resumo}</p>
      <hr />
    </article>
  ))}
</main>

);
}