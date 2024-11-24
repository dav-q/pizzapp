// @import Dependencies
import { useEffect } from "react";
import { Image } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
// @import Data
import { toppingUnitImages } from "@/constants/ToppingImages";
// @import Types
import { ToppingDataType } from "@/types/ToppingType";

export default function ToppingAnimated({
  toppingData,
}: {
  toppingData: ToppingDataType;
}) {
  const translateX = useSharedValue(Math.random() * 2);
  const translateY = useSharedValue(Math.random() * -4);
  const translateX2 = useSharedValue(Math.random() * -5);
  const translateY2 = useSharedValue(Math.random() * 8);

  useEffect(() => {
    translateY.value = 0;
    translateX.value += 40;
    translateX2.value = 10;
    translateY2.value += 20;
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withSpring(translateY.value * 2),
      },
      {
        translateX: withSpring(translateX.value * 2),
      },
    ],
  }));
  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withSpring(translateY2.value * 1),
      },
      {
        translateX: withSpring(translateX2.value * 1),
      },
    ],
  }));

  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => {
        const animation = index === 0 ? animatedStyle : animatedStyle2;
        return (
          <Animated.View
            key={index + toppingData.id + toppingData.styles}
            style={[
              { position: "absolute", backgroundColor: "transparent" },
              toppingData.styles ?? {},
              animation,
            ]}
          >
            <Image
              source={
                toppingUnitImages[
                  toppingData?.id as keyof typeof toppingUnitImages
                ]
              }
              style={{ width: 40, height: 40 }}
            />
          </Animated.View>
        );
      })}
    </>
  );
}
