import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

import { size } from "../../theme/fonts";
import { colors } from "../../theme/colors";
import InputBorders from "../atoms/InputBorders";
import Spacer from "../atoms/Spacer";
import { dataPalettes, colorpalettesType } from "../../utils/colorPalettes";
import { ListsData } from "../../utils/tempData";
import { stylesModal } from "./stylesModals";

interface Props {
  showModal: boolean;
  setShowModal: Function;
  closeModal: Function;
}

const AddListModal = ({ showModal, setShowModal, closeModal }: Props) => {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState(dataPalettes[0].id);
  const [color, setColor] = useState(dataPalettes[0].colors[0]);
  const [currentPalette, setCurrentPalette] = useState<colorpalettesType>(
    dataPalettes[0]
  );

  const handleColors = (color: string): void => {
    setColor(color);
  };

  const createList = () => {
    ListsData.push({
      id: Math.floor(Math.random() * (100 - 5 + 1) + 5),
      name,
      color,
      todos: [],
    });
    setName("");
    setShowModal(!showModal);
    setSelected(dataPalettes[0].id);
    setCurrentPalette(dataPalettes[0]);
    setColor(dataPalettes[0].colors[0]);
  };

  useEffect(() => {
    const findPalette = dataPalettes.filter(palette => palette.id === selected);
    setCurrentPalette(findPalette[0]);
    setColor(findPalette[0].colors[0]);
  }, [selected]);

  return (
    <Modal
      animationType="slide"
      visible={showModal}
      onRequestClose={() => closeModal()}
    >
      <KeyboardAvoidingView style={stylesModal.container} behavior="padding">
        <TouchableOpacity
          style={stylesModal.closeBtn}
          onPress={() => closeModal()}
        >
          <AntDesign name="close" color={colors.black} size={size.font24} />
        </TouchableOpacity>
        <View style={{ alignSelf: "stretch", paddingHorizontal: 32 }}>
          <Text style={styles.title}>Create Todo List</Text>
          <Spacer verticalSpacing={20} />
          <InputBorders
            placeHolder="List name?"
            value={name}
            onchangeText={setName}
          />
          <Spacer verticalSpacing={20} />

          <Picker
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
          >
            {dataPalettes.map(color => (
              <Picker.Item
                key={color.id}
                label={color.namePalette}
                value={color.id}
              />
            ))}
          </Picker>
          <Spacer verticalSpacing={20} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {currentPalette.colors.map(color => (
              <TouchableOpacity
                key={color}
                style={[styles.colorSelected, { backgroundColor: color }]}
                onPress={() => handleColors(color)}
              ></TouchableOpacity>
            ))}
          </View>
          <Spacer verticalSpacing={20} />
          <TouchableOpacity
            style={[styles.buttonCreate, { backgroundColor: color }]}
            onPress={() => createList()}
          >
            <Text style={{ color: colors.white }}>Create!</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddListModal;

const styles = StyleSheet.create({
  title: {
    fontSize: size.font26,
    fontWeight: "800",
    color: colors.black,
    textAlign: "center",
  },
  buttonCreate: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 6,
  },
  colorSelected: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});
