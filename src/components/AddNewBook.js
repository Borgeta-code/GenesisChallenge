import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddNewBook(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [descricao, setDescricao] = useState("");
  const toast = useToast();

  // Cria um novo livro

  const handleCreate = () => {
    if (!titulo || !autor || !descricao) {
      toast({
        title: "Adicione todas as informações.",
        status: "error",
        duration: 1500,
        isClosable: true,
      });

      return;
    }

    const novoLivro = {
      id: uuidv4(),
      titulo: titulo,
      autor: autor,
      descricao: descricao,
    };

    props.onAdicionarLivro(novoLivro);

    setTitulo("");
    setAutor("");
    setDescricao("");

    onClose();

    toast({
      title: "Livro adicionado.",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };

  return (
    <>
      <div className="flex justify-center items-center p-4">
        <Button size="md" height="48px" colorScheme="green" onClick={onOpen}>
          + Adicionar livro
        </Button>
      </div>

      {/* Modal para adicionar livros */}

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Livro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="4">
              <Input
                placeholder="Título"
                required
                onChange={({ target }) => setTitulo(target.value)}
              />
              <Input
                placeholder="Autor"
                required
                onChange={({ target }) => setAutor(target.value)}
              />
              <Textarea
                placeholder="Descrição"
                required
                onChange={({ target }) => setDescricao(target.value)}
              />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="ghost" colorScheme="green" onClick={handleCreate}>
              Adicionar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
