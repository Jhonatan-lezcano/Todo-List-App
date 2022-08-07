import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { lists } from "../../utils/tempData";
import { colors } from "../../theme/colors";
import { size } from "../../theme/fonts";
import AddTodoModal from "../Modals/AddTodoModal";

interface Props {
  list: lists;
  index: number;
}

const List = ({ list, index }: Props) => {
  const { name, color, todos } = list;
  const completed = todos.filter(item => item.complete).length;
  const pending = todos.length - completed;
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = () => setShowModal(!showModal);

  // console.log(rotateX);

  return (
    <View
      style={[
        styles.listContainer,
        {
          marginLeft: index > 0 ? 0 : 32,
        },
      ]}
    >
      <AddTodoModal showModal={showModal} closeModal={closeModal} list={list} />
      <TouchableOpacity
        style={[styles.list, { backgroundColor: color }]}
        onPress={() => setShowModal(!showModal)}
      >
        <Text style={[styles.listTitle, styles.textColor]} numberOfLines={1}>
          {name}
        </Text>

        <View style={styles.containerInfo}>
          <Text style={[styles.textColor, styles.count]}>{completed}</Text>
          <Text style={[styles.textColor]}>Completed</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={[styles.textColor, styles.count]}>{pending}</Text>
          <Text style={[styles.textColor]}>Pending to do</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  count: {
    fontSize: size.font48,
    fontWeight: "100",
  },
  containerInfo: {
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    height: 275,
    marginHorizontal: 12,
    marginVertical: 18,
    width: 200,
  },
  list: {
    alignItems: "center",
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 32,
    width: "100%",
    height: "100%",
  },
  listTitle: {
    fontSize: size.font22,
    fontWeight: "700",
  },
  textColor: {
    color: colors.white,
  },
});
