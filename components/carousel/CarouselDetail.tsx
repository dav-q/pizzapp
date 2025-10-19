// @import Dependencies
import { Text, View } from "react-native";
// @import Context
import { usePizza } from "@/context/Pizza";
// @import Css
import { pizzaCarouselDetailStyles as styles } from "@/styles/PizzaStyles";
import { Colors } from "@/constants/Colors";
// @import Components
import PizzaSize from "@/components/pizza/PizzaSize";
import OrderPizzaButton from "@/components/OrderButton";
// @import Icons
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function PizzaCarouselDetail() {
  const { selectedPizza } = usePizza();
  return (
    <View style={styles.Container}>
      <View style={styles.DetailContainer}>
        <View style={styles.SizesContainer}>
          <Text style={styles.PizzaText}>{selectedPizza.name}</Text>
          <View style={styles.StarsContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesome
                name="star"
                size={15}
                color={Colors.secondary}
                key={index}
              />
            ))}
          </View>
          <PizzaSize sizes={selectedPizza.sizes} />
        </View>
        <View style={styles.DetailButtonContainer}>
          <OrderPizzaButton isCarousel />
        </View>
      </View>
    </View>
  );
}
