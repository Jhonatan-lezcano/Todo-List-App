import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { todos } from "../../utils/tempData";
import { size } from "../../theme/fonts";
import { colors } from "../../theme/colors";
import Spacer from "../atoms/Spacer";

interface Props {
  todo: todos;
}

const Todo = ({ todo: { title, complete } }: Props) => {
  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity>
        <Ionicons
          name={complete ? "ios-square" : "ios-square-outline"}
          size={18}
          color={colors.gray}
        />
      </TouchableOpacity>
      <Spacer horizontalSpacing={15} />
      <Text
        style={[
          styles.title,
          {
            color: complete ? colors.gray : colors.black,
            textDecorationLine: complete ? "line-through" : "none",
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todoContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: size.font16,
    fontWeight: "700",
  },
});
