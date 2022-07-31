import { View } from "react-native";
import React from "react";

interface Props {
  verticalSpacing?: number;
  horizontalSpacing?: number;
}

const Spacer = ({ verticalSpacing, horizontalSpacing }: Props) => {
  return (
    <View
      style={{
        height: verticalSpacing,
        width: horizontalSpacing,
      }}
    />
  );
};

export default Spacer;

Spacer.defaultProps = {
  verticalSpacing: 1,
  horizontalSpacing: 1,
};
