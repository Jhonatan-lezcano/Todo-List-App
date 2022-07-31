import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen")

const screenWidth = width < height ? width : height;

const screenHeight = width < height ? height : width;

export { screenWidth, screenHeight }
