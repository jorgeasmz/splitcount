// DeleteEventModal.jsx
import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Text,
} from "@chakra-ui/react";
import { inactivateActivity, getActivity } from "../../api/activity.api";
import { useDisclosure } from "@chakra-ui/hooks";

const DeleteActivityModal = ({ deleteActivities, activity, index, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log("aaskdjaslkdhsakljdhasjkd", activity.id)

  const handleDelete = async () => {
    try {
      await inactivateActivity(activity.id);
      deleteActivities(index);
      onClose();
    } catch (error) {
      console.error("Error al actualizar las actividades:", error);
    }
  };

  return (
    <>
    <Button colorScheme="red" onClick={onOpen}>Delete</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent margin="auto">
        <ModalHeader pb={4}>Confirm Delete</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Are you sure you want to delete this activity?</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="red" onClick={handleDelete}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  );
};

export default DeleteActivityModal;
