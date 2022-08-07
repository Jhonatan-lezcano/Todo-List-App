import React from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "../../theme/colors";
import { size } from "../../theme/fonts";

interface Props {
  showModal: boolean;
  closeModal: Function;
}

const ModalContainer: React.FC<Props> = ({
  showModal,
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
      <TouchableOpacity style={styles.closeBtn} onPress={() => closeModal()}>
        <AntDesign name="close" color={colors.black} size={size.font24} />
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  closeBtn: {
    position: "absolute",
    top: 35,
    right: 35,
  },
});

// export const stylesModal = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   closeBtn: {
//     position: "absolute",
//     top: 35,
//     right: 35,
//   },
// });
