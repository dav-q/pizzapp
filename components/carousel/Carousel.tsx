// @import Dependencies
import { useCallback, useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { interpolate } from "react-native-reanimated";
import { router, useLocalSearchParams } from "expo-router";
import Carousel from "react-native-reanimated-carousel";
// @import Context
import { usePizza } from "@/context/Pizza";
// @import Css
import { pizzaCarouselStyles as styles } from "@/styles/PizzaStyles";
// @import Components
import Pizza from "@/components/pizza/Pizza";
// @import Types
import { PizzaType } from "@/types/PizzaType";
// @import Data
import pizzasData from "@/data/pizza-mock.json";

function PizzaCarousel() {
  const pageWidth = Dimensions.get("window").width;
  const itemSize = 290;
  const centerOffset = pageWidth / 2 - itemSize / 2;
  const { setSelectedPizza } = usePizza();
  const [pizzas, setPizzas] = useState<PizzaType[]>(pizzasData);
  const { pizzaId } = useLocalSearchParams();

  useEffect(() => {
    if (pizzaId) {
      const pizza = pizzas.find(
        (pizza) => pizza.id === parseInt(pizzaId as string)
      );
      if (!pizza) return;
      const newPizzas = [...pizzas.filter((_p) => _p.id !== pizza?.id)];
      newPizzas.unshift(pizza);
      setPizzas(newPizzas);
    }
  }, [pizzaId]);

  const animationStyle = useCallback(
    (value: number) => {
      "worklet";
      const itemGap = interpolate(
        value,
        [-3, -2, -1, 0, 1, 2, 3],
        [-30, -15, 0, 0, 0, 15, 30]
      );

      const translateX =
        interpolate(value, [-1, 0, 1], [-itemSize, 0, itemSize]) +
        centerOffset -
        itemGap;

      const translateY = interpolate(
        value,
        [-1, -0.5, 0.5, 0.5, 1],
        [250, 25, 40, 45, 250]
      );

      const scale = interpolate(
        value,
        [-1, -0.8, 0.5, 0.8, 1],
        [0.9, 0.85, 1.1, 0.85, 0.9]
      );

      return {
        transform: [
          {
            translateX,
          },
          {
            translateY,
          },
          { scale },
        ],
      };
    },
    [centerOffset]
  );

  const handlePizzaSelect = (pizza: PizzaType) => {
    setSelectedPizza(pizza);
    router.push({
      pathname: "/pizza-detail",
      params: { pizzaId: pizza.id },
    });
  };

  return (
    <View style={styles.Container}>
      <Carousel
        width={itemSize}
        height={itemSize}
        style={{
          ...styles.Carousel,
          width: pageWidth,
        }}
        onSnapToItem={(index) => setSelectedPizza(pizzas[index])}
        data={pizzas}
        renderItem={({ index, item }) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => handlePizzaSelect(pizzas[index])}
            containerStyle={styles.Touchable}
            style={styles.Touchable}
          >
            <Pizza data={item} renderDish={true} animation="slideInDown" />
          </TouchableWithoutFeedback>
        )}
        customAnimation={animationStyle}
      />
    </View>
  );
}

export default PizzaCarousel;
