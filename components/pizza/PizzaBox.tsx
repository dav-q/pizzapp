// @import Dependencies
import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Keyframe,
  Easing,
} from "react-native-reanimated";
// @import Css
import { pizzaBoxtyles } from "@/styles/PizzaStyles";

const PizzaBox = ({
  children,
  wrap,
  setWrap,
}: {
  children: any;
  wrap: boolean;
  setWrap: (start: boolean) => void;
}) => {
  const BoxFront = useSharedValue(0);
  const scaleBoxInside = useSharedValue<number>(0);
  const scaleBoxPizza = useSharedValue<number>(1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (wrap) orderAnimation();
  }, [wrap]);

  useEffect(() => {
    if (!visible) {
      // reset box positions
      setTimeout(() => {
        setWrap(false);
        setVisible(true);
        scaleBoxInside.value = 0;
        scaleBoxPizza.value = 1;
        BoxFront.value = BoxFront.value === 0 ? 1 : 0;
      }, 500);
    }
  }, [visible]);

  const exitingAnimation = new Keyframe({
    0: {
      opacity: 1,
      transform: [
        { translateX: 10 },
        { translateY: 0 },
        { rotateZ: "0deg" },
        { scale: 0.9 },
      ],
    },
    10: {
      opacity: 1,
      transform: [
        { translateX: 40 },
        { translateY: 25 },
        { rotateZ: "0deg" },
        { scale: 0.6 },
      ],
      easing: Easing.exp,
    },
    50: {
      opacity: 0.5,
      transform: [
        { translateX: 100 },
        { translateY: -100 },
        { rotateZ: "60deg" },
        { scale: 0.3 },
      ],
    },
    100: {
      opacity: 0,
      transform: [
        { translateX: 200 },
        { translateY: -300 },
        { rotateZ: "60deg" },
        { scale: 0 },
      ],
    },
  }).duration(1000);

  const animatedBoxFront = useAnimatedStyle(() => {
    const duration = BoxFront.value === 1 ? 800 : 0;
    const rotateX = interpolate(BoxFront.value, [0, 1], [90, 20]);
    const translateY = interpolate(BoxFront.value, [0, 1], [-20, 100]);
    return {
      transform: [
        { translateY: withTiming(translateY, { duration }) },
        { rotateX: withTiming(`${rotateX}deg`, { duration }) },
      ],
    };
  });
  const animatedBoxInside = useAnimatedStyle(() => ({
    transform: [{ scale: scaleBoxInside.value }],
  }));
  const animatedBoxPizza = useAnimatedStyle(() => ({
    transform: [{ scale: scaleBoxPizza.value }],
  }));

  const orderAnimation = () => {
    scaleBoxPizza.value = withTiming(
      scaleBoxPizza.value === 1 ? 0.8 : 1,
      { duration: 400 },
      () => {}
    );
    scaleBoxInside.value = withTiming(
      scaleBoxInside.value === 1 ? 0 : 1,
      { duration: 400 },
      () => {}
    );

    setTimeout(() => {
      BoxFront.value = BoxFront.value === 0 ? 1 : 0;
    }, 600);

    setTimeout(() => {
      setVisible(!visible);
    }, 1500);
  };

  return visible ? (
    <Animated.View exiting={exitingAnimation}>
      <View>
        <Animated.View style={[{ zIndex: 2 }, animatedBoxPizza]}>
          <View>{children}</View>
        </Animated.View>

        <View style={pizzaBoxtyles.Container}>
          <Animated.View style={[animatedBoxInside]}>
            <Image
              source={require("@/assets/pizza-assets/box_inside.png")}
              style={{ width: 290, height: 290 }}
            />
          </Animated.View>
          <Animated.View style={[pizzaBoxtyles.Lid, animatedBoxFront]}>
            <Image
              source={require("@/assets/pizza-assets/box_front.png")}
              style={pizzaBoxtyles.PizzaContainer}
            />
          </Animated.View>
        </View>
      </View>
    </Animated.View>
  ) : (
    <View style={{ height: 350 }}></View>
  );
};

export default PizzaBox;
