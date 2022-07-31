import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "../theme/colors";
import { size } from "../theme/fonts";
import { ListsData } from "../utils/tempData";
import List from "../components/molecules/List";
import Spacer from "../components/atoms/Spacer";

const TodoList = () => {
  console.log(size.font18);
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          Todo<Text style={styles.titleBlue}>List</Text>
        </Text>
        <View style={styles.divider} />
      </View>

      <Spacer verticalSpacing={48} />

      <View>
        <TouchableOpacity style={styles.addList}>
          <AntDesign color={colors.blue} size={size.font18} name="plus" />
        </TouchableOpacity>
        <Text style={styles.addText}>Add List</Text>
      </View>

      <Spacer verticalSpacing={48} />

      <View style={styles.containerSlide}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={ListsData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => <List list={item} index={index} />}
        />
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTitle: {
    flexDirection: "row",
    width: "100%",
  },
  title: {
    fontSize: size.font38,
    fontWeight: "bold",
    color: colors.black,
    paddingHorizontal: 64,
  },
  titleBlue: {
    fontWeight: "normal",
    color: colors.blue,
  },
  divider: {
    height: 1,
    backgroundColor: colors.lightBlue,
    flex: 1,
    alignSelf: "center",
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: size.font14,
    marginTop: 6,
  },
  containerSlide: {
    height: 275,
  },
});
