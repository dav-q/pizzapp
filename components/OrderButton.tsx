// @import Dependencies
import { Pressable, View } from "react-native";
// @import Context
import { usePizza } from "@/context/Pizza";
// @import Css
import { pizzaToppingsDetailStyles as toppingStyles } from "@/styles/ToppingStyles";
import { pizzaCarouselDetailStyles as carouselStyles } from "@/styles/PizzaStyles";
import { Colors } from "@/constants/Colors";
// @import Icons
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function OrderPizzaButton({
  callback,
  isCarousel = false,
}: {
  callback?: () => void;
  isCarousel?: boolean;
}) {
  const { increaseCartCounter } = usePizza();

  return (
    <Pressable
      style={
        isCarousel ? carouselStyles.DetailButton : toppingStyles.DetailButton
      }
      onPress={() => {
        callback && callback();
        increaseCartCounter();
      }}
    >
      <View>
        <FontAwesome6 name="pizza-slice" size={24} color={Colors.white} />
      </View>
    </Pressable>
  );
}
