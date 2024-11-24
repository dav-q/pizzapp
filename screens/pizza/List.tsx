// @import Dependencies
import { View } from "react-native";
// @import Css
import { pizzaListStyles as styles } from "@/styles/PageStyles";
// @import Components
import PizzaCarouselDetail from "@/components/carousel/CarouselDetail";
import PizzaCarouselHeader from "@/components/carousel/CarouselHeader";
import PizzaCarousel from "@/components/carousel/Carousel";

export default function PizzaList() {
  return (
    <View>
      <View style={styles.ScreenContainer}>
        <PizzaCarouselHeader />
        <View style={styles.ScreenCarousel}>
          <PizzaCarousel />
        </View>
        <PizzaCarouselDetail />
      </View>
    </View>
  );
}
