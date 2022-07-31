import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { lists } from "../../utils/tempData";
import { colors } from "../../theme/colors";
import { size } from "../../theme/fonts";

interface Props {
  list: lists;
  index: number;
}

const List = ({ list, index }: Props) => {
  const { name, color, todos } = list;
  const completed = todos.filter(item => item.complete).length;
  const pending = todos.length - completed;

  console.log(completed);

  return (
    <View
      style={[
        styles.listContainer,
        { backgroundColor: color, marginLeft: index > 0 ? 0 : 32 },
      ]}
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
    alignItems: "center",
    borderRadius: 6,
    marginHorizontal: 12,
    paddingHorizontal: 16,
    paddingVertical: 32,
    width: 200,
  },
  listTitle: {
    fontSize: size.font22,
    fontWeight: "700",
  },
  textColor: {
    color: colors.white,
  },
});
