// @import Dependencies
import React from "react";
import { Text, View } from "react-native";
// @import Context
import { usePizza } from "@/context/Pizza";
// @import Css
import { cartStyles as styles } from "@/styles/CartStyles";
import { Colors } from "@/constants/Colors";
// @import Icons
import AntDesign from "@expo/vector-icons/AntDesign";

const Cart: React.FC = () => {
  const { cartCounter } = usePizza();
  return (
    <View style={styles.Container}>
      <AntDesign name="shopping-cart" size={30} color={Colors.main} />
      {cartCounter && <Text style={styles.Counter}>{cartCounter}</Text>}
    </View>
  );
};

export default Cart;
