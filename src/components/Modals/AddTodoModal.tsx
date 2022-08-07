import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import ModalContainer from "../atoms/ModalContainer";
import { lists } from "../../utils/tempData";
import { size } from "../../theme/fonts";
import { colors } from "../../theme/colors";
import Todo from "../Todo/Todo";
import Spacer from "../atoms/Spacer";
import InputBorders from "../atoms/InputBorders";

interface Props {
  showModal: boolean;
  closeModal: Function;
  list: lists;
}

const AddTodoModal = ({
  showModal,
  closeModal,
  list: { name, color, todos },
}: Props) => {
  const [newTodo, setNewTodo] = useState("");
  const tasks = todos.length;
  const tasksCompleted = todos.filter(todo => todo.complete).length;

  return (
    <ModalContainer showModal={showModal} closeModal={closeModal}>
      <View style={[styles.section, styles.header, { borderColor: color }]}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.taskCount}>
          {tasksCompleted}/{tasks}
        </Text>
      </View>

      <View style={[styles.section, { flex: 3 }]}>
        <FlatList
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Todo todo={item} />}
          contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 60 }}
        />
      </View>
      <KeyboardAvoidingView style={[styles.section, styles.footer]}>
        <InputBorders
          placeHolder="New todo"
          onchangeText={setNewTodo}
          value={newTodo}
          style={{ flex: 1 }}
        />
        <TouchableOpacity style={[styles.addTodo, { backgroundColor: color }]}>
          <AntDesign color={colors.white} size={size.font16} name="plus" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ModalContainer>
  );
};

export default AddTodoModal;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    alignSelf: "stretch",
  },
  header: {
    justifyContent: "flex-end",
    marginLeft: 60,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: size.font30,
    fontWeight: "800",
  },
  taskCount: {
    color: colors.gray,
    fontWeight: "600",
    marginTop: 4,
    marginBottom: 16,
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addTodo: {
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
});
