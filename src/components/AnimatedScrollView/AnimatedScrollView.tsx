import React from "react";
import { View, ScrollView, Platform } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { lists } from "../../utils/tempData";
import List from "../molecules/List";

interface Props {
  boxes: lists[];
}

const AnimatedScrollView = ({ boxes }: Props) => {
  const direction = useSharedValue(0);
  const valuesOfBoxes = boxes.map(() => useSharedValue(0));

  const scrollHandler = useAnimatedScrollHandler({
    onEndDrag: () => {
      direction.value = 0;
    },
    onScroll: (event, ctx: any) => {
      const contentOffsetX = event.contentOffset.x;
      const xDirection = contentOffsetX - (ctx?.x ?? 0);
      direction.value = Math.sign(xDirection);
      ctx.x = contentOffsetX;
    },
  });

  return (
    <View style={{ height: 310 }}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        horizontal={true}
        decelerationRate={0.5}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={() =>
          Platform.select({ android: (direction.value = 0) })
        }
        nestedScrollEnabled={true}
      >
        {boxes.map((item, index) => {
          // console.log(valuesOfBoxes[0].value);
          const perspectiveStyle = useAnimatedStyle(() => {
            valuesOfBoxes[index].value = withSpring(
              interpolate(
                direction.value,
                [-1, 0, 1],
                [-5, 0, 5],
                Extrapolate.CLAMP
              )
            );
            return {
              transform: [
                { perspective: 200 },
                { rotateY: `${valuesOfBoxes[index].value}deg` },
              ],
            };
          });

          return (
            <List
              key={item.id}
              list={item}
              index={index}
              perspectiveStyle={perspectiveStyle}
            />
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default AnimatedScrollView;
