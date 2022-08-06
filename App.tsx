import { NavigationContainer } from "@react-navigation/native";

import StackAuthNavigation from "./src/navigation/StackAuthNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackAuthNavigation />
    </NavigationContainer>
  );
}
