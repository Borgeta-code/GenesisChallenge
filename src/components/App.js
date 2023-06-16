"use client";

import { ChakraProvider, useToast } from "@chakra-ui/react";
import { useState } from "react";
import AddNewBook from "./AddNewBook";
import BookList from "./BookList";

export default function App() {
  const [livros, setLivros] = useState([
    {
      id: 1,
      titulo: "A Origem das Espécies",
      autor: "Charles Darwin",
      descricao:
        "Neste livro revolucionário, Charles Darwin apresenta sua teoria da evolução através da seleção natural, mudando para sempre nossa compreensão do mundo natural.",
    },
    {
      id: 2,
      titulo: "Cem Anos de Solidão",
      autor: "Gabriel García Márquez",
      descricao:
        "Uma obra-prima da literatura latino-americana, o livro narra a saga da família Buendía ao longo de várias gerações, misturando elementos de realismo e fantasia.",
    },
    {
      id: 3,
      titulo: "1984",
      autor: "George Orwell",
      descricao:
        "Uma distopia sombria que retrata um regime totalitário no qual o governo controla todos os aspectos da vida dos cidadãos, incluindo seus pensamentos e memórias.",
    },
    {
      id: 4,
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      descricao:
        "Uma épica trilogia de fantasia que segue a jornada do hobbit Frodo Baggins enquanto ele busca destruir o Anel do Poder e derrotar o Senhor das Trevas, Sauron.",
    },
    {
      id: 5,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      descricao:
        "Uma encantadora história infantil que aborda temas como amizade, amor e o significado da vida, através das aventuras de um príncipe que viaja por diferentes planetas.",
    },
    {
      id: 6,
      titulo: "Crime e Castigo",
      autor: "Fiódor Dostoiévski",
      descricao:
        "Um romance psicológico que explora a mente atormentada de um estudante que comete um assassinato e sua batalha interna com a culpa e a redenção.",
    },
  ]);

  const toast = useToast();

  const handleExcluirLivro = (livrosAtualizados) => {
    setLivros(livrosAtualizados);

    toast({
      title: "Livro excluido.",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };

  const handleAdicionarLivro = (novoLivro) => {
    setLivros([...livros, novoLivro]);
  };

  return (
    <ChakraProvider>
      <main className="min-h-screen bg-zinc-100 gap-4">
        <AddNewBook onAdicionarLivro={handleAdicionarLivro} />

        {livros.length != 0 ? (
          <BookList livros={livros} onExcluirLivro={handleExcluirLivro} />
        ) : (
          <div className="flex justify-center items-center p-2">
            <h1 className="text-base sm:text-xl font-bold text-center opacity-50">
              Sua lista está vazia, Adicione um livro!
            </h1>
          </div>
        )}
      </main>
    </ChakraProvider>
  );
}
