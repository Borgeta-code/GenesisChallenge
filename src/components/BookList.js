import BookItem from "./BookItem";

export default function BookList(props) {
  const data = props.livros;

  const handleExcluirLivro = (livroId) => {
    const livrosAtualizados = props.livros.filter(
      (livro) => livro.id !== livroId
    );
    props.onExcluirLivro(livrosAtualizados);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((livro) => (
          <BookItem
            id={livro.id}
            title={livro.titulo}
            author={livro.autor}
            description={livro.descricao}
            onExcluir={handleExcluirLivro}
          />
        ))}
      </div>
    </div>
  );
}
