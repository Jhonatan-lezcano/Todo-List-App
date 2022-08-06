import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackAuthParams } from "../navigation/StackAuthNavigation";

interface Props extends NativeStackScreenProps<RootStackAuthParams, "Login"> {}

const Login = ({ navigation: { navigate } }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Sign in" onPress={() => navigate("TodoApp")} />
      <Button title="Sign Up" onPress={() => navigate("SignUp")} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
