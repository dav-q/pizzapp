// @import Dependencies
import React, { useEffect } from "react";
import { Image, Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
// @import Css
import { pizzaStyles as styles } from "@/styles/PizzaStyles";
// @import Types
import { PizzaComponentType } from "@/types/PizzaType";
// @import Data
import { pizzaImages } from "@/constants/PizzaImages";

const Pizza = ({
  data,
  onPress,
  renderDish = true,
  animation = "slideInUp",
}: PizzaComponentType) => {
  const translateY = useSharedValue<number>(10);

  useEffect(() => {
    translateY.value = 0;
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withSpring(
          translateY.value * (animation !== "slideInUp" ? -5 : 10)
        ),
      },
    ],
  }));
  if (!data) return <></>;

  return (
    <View style={styles.Container}>
      <Animated.View style={[animatedStyles]}>
        <View style={styles.Dish}>
          {renderDish && (
            <Image
              source={require("@/assets/pizza-assets/dish.png")}
              style={styles.DishImage}
            />
          )}
          <Pressable
            style={styles.DishButton}
            onPress={onPress ? () => onPress() : () => {}}
          >
            <Image
              source={
                pizzaImages[
                  data ? (data?.image as keyof typeof pizzaImages) : "pizza-0"
                ]
              }
              style={styles.PizzaImage}
            />
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
};

export default Pizza;
