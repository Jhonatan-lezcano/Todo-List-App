import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import TodoList from "../screens/TodoList";
import SignUp from "../screens/SignUp";

export type RootStackAuthParams = {
  Login: undefined;
  TodoApp: undefined;
  SignUp: undefined;
};

const StackAuthNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackAuthParams>();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TodoApp" component={TodoList} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default StackAuthNavigation;
