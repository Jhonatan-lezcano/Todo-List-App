import TodoList from "./src/screens/TodoList";
import { screenWidth, screenHeight } from "./src/theme/metrics";

export default function App() {
  console.log(screenWidth, screenHeight);
  return <TodoList />;
}
