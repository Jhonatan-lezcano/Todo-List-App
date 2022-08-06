import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";

interface Props {
  placeHolder: string;
  onchangeText: Function;
  value: string;
}

const InputBorders = ({ placeHolder, onchangeText, value }: Props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeHolder}
      onChangeText={text => onchangeText(text)}
      value={value}
    />
  );
};

export default InputBorders;

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    height: 40,
    paddingHorizontal: 15,
  },
});
