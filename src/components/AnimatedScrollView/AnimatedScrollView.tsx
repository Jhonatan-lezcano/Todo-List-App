import React, { useState } from "react";
import { View, FlatList } from "react-native";
// import Animated, {
//   useSharedValue,
// useAnimatedScrollHandler,
// useAnimatedStyle,
// withSpring,
// interpolate,
// Extrapolate,
// } from "react-native-reanimated";
import { lists } from "../../utils/tempData";
import List from "../molecules/List";

interface Props {
  boxes: lists[];
}

const AnimatedScrollView = ({ boxes }: Props) => {
  // const direction = useSharedValue(0);
  // const valuesOfBoxes = boxes.map(() => useSharedValue(0));

  // const scrollHandler = useAnimatedScrollHandler({
  //   onEndDrag: () => {
  //     direction.value = 0;
  //   },
  //   onScroll: (event, ctx: any) => {
  //     const contentOffsetX = event.contentOffset.x;
  //     const xDirection = contentOffsetX - (ctx?.x ?? 0);
  //     direction.value = Math.sign(xDirection);
  //     ctx.x = contentOffsetX;
  //   },
  // });

  const oppenModal = () => {};

  return (
    <View style={{ height: 310 }}>
      <FlatList
        data={boxes}
        keyExtractor={item => item.id.toString()}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        // onMomentumScrollEnd={() =>
        //   Platform.select({ android: (direction.value = 0) })
        // }
        nestedScrollEnabled={true}
        renderItem={({ item, index }) => {
          return <List key={item.name} list={item} index={index} />;
        }}
      />
    </View>
  );
};

export default AnimatedScrollView;
