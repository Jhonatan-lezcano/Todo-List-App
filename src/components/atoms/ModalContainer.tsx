import React from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import { size } from "../../theme/fonts";

interface Props {
  showModal: boolean;
  setShowModal: Function;
  closeModal: Function;
}

const ModalContainer: React.FC<Props> = ({
  showModal,
  setShowModal,
  children,
  closeModal,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={showModal}
      onRequestClose={() => closeModal()}
    >
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

export default ModalContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
