// @import Dependencies
import { Text, View } from "react-native";
// @import Css
import { pizzaCarouselHeaderStyles as styles } from "@/styles/PizzaStyles";
import { Colors } from "@/constants/Colors";
// @import Icons
import Entypo from "@expo/vector-icons/Entypo";

export default function PizzaCarouselHeader() {
  return (
    <View style={styles.Container}>
      <View style={styles.LocationContainer}>
        <Entypo name="location" size={15} color={Colors.main} />
        <Text style={styles.LocationText}>Washington Park</Text>
      </View>
      <View style={styles.CategoryContainer}>
        <Text style={styles.CategoryText}>Pizza</Text>
      </View>
    </View>
  );
}
