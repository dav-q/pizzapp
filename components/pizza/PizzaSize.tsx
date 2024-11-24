// @import Dependencies
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
// @import Data
import { sizeLabel, toppingValue } from "@/constants/Pizza";
// @import Css
import { pizzaSizeStyles as styles } from "@/styles/PizzaStyles";
import { Colors } from "@/constants/Colors";
// @import Types
import { PizzaSizeComponentType } from "@/types/PizzaType";

const PizzaSize = ({
  sizes,
  defaultSize = "medium",
  totalToppings = 0,
}: PizzaSizeComponentType) => {
  const [sizeSelected, setSizeSelected] = useState(defaultSize);

  const getSizePrice = (size: string) => {
    const pizzaPrice = sizes.find((s) => s.size === size)?.price ?? 0;
    const total = (pizzaPrice + toppingValue * totalToppings).toFixed(2);
    return total;
  };
  toppingValue;
  return (
    <>
      <Text style={styles.Price}>$ {getSizePrice(sizeSelected)}</Text>
      <View style={styles.Container}>
        {sizes.map((size, index) => (
          <Pressable
            style={{
              ...styles.ButtonSize,
              backgroundColor:
                size.size === sizeSelected ? Colors.white : "transparent",
            }}
            key={index}
            onPress={() => setSizeSelected(size.size)}
          >
            <Text style={styles.ButtonSizeText}>
              {sizeLabel[size?.size as keyof typeof sizeLabel]}
            </Text>
          </Pressable>
        ))}
      </View>
    </>
  );
};

export default PizzaSize;
