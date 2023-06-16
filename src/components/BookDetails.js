import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

export function BookDetails(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing="4">
            <Text>{props.description}</Text>
            <Text>
              <span className="font-bold">Autor: </span>
              {props.author}
            </Text>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="ghost"
            colorScheme="red"
            mr={3}
            onClick={props.onClose}
          >
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
