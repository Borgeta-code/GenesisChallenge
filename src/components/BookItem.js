import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BookDetails } from "./BookDetails";

export default function BookItem(props) {
  const handleExcluir = () => {
    props.onExcluir(props.id);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card maxW="sm" key={props.id} mt={2}>
        <CardBody>
          <Stack spacing="2">
            <Heading size="md">{props.title}</Heading>
            <Text size="sm">
              <span className="font-bold">Autor:</span> {props.author}
            </Text>
          </Stack>
        </CardBody>

        <CardFooter padding="4">
          <ButtonGroup spacing="4">
            <Button variant="solid" colorScheme="blue" onClick={onOpen}>
              Ver mais
            </Button>
            <Button variant="ghost" colorScheme="red" onClick={handleExcluir}>
              Excluir
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      {/* Modal para visualizar detalhes */}

      <BookDetails
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        title={props.title}
        author={props.author}
        description={props.description}
      />
    </>
  );
}
