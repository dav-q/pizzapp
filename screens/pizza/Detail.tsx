// @import Dependencies
import { useState } from "react";
import { Dimensions, LayoutChangeEvent, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
// @import Css
import { pizzaPageDetailStyles as pageStyles } from "@/styles/PageStyles";
import {
  draggableToppingStyles,
  pizzaToppingsDetailStyles as toppingStyles,
} from "@/styles/ToppingStyles";
// @import Components
import Pizza from "@/components/pizza/Pizza";
import ToppingDraggable from "@/components/topping/ToppingDraggable";
import PizzaSize from "@/components/pizza/PizzaSize";
import OrderPizzaButton from "@/components/OrderButton";
import PizzaBox from "@/components/pizza/PizzaBox";
import ToppingAnimated from "@/components/topping/ToppingAnimated";
// @import hooks
import { usePizza } from "@/context/Pizza";
// @import Data
import toppingData from "@/data/topping-mock.json";
// @import Types
import { InsideToppingDataType, ToppingDataType } from "@/types/ToppingType";

export default function PizzaDetail() {
  const { selectedPizza } = usePizza();
  const [totalToppings, setTotalToppings] = useState<number>(0);
  const [startBoxTransition, setStartBoxTransition] = useState<boolean>(false);
  const [toppingsSelected, setToppingsSelected] = useState<ToppingDataType[]>(
    []
  );
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dropZoneLayout = useSharedValue({ x: 0, y: 0, width: 0, height: 0 });
  const itemSize = 80;
  const pageWidth = Dimensions.get("window").width;
  const pageHeight = Dimensions.get("window").height;

  const handleDropZoneLayout = (event: LayoutChangeEvent) => {
    event.target.measure((x, y, width, height, pageX, pageY) => {
      dropZoneLayout.value = { x: pageX, y: pageY, width, height };
    });
  };

  const randomToppingPosition = () => {
    const x = Math.random() * 180;
    const y = Math.random() * 200;
    return { left: x, top: y };
  };

  const handleDropZone = ({
    insideDropZone,
    toppingData,
  }: InsideToppingDataType) => {
    setIsDragging(false);
    if (insideDropZone) {
      setTotalToppings(totalToppings + 1);
      setToppingsSelected([
        ...toppingsSelected,
        { ...toppingData, styles: randomToppingPosition() },
      ]);
    }
  };

  const handleOrderPizza = () => {
    setStartBoxTransition(true);
  };

  const renderTopping = (topping: ToppingDataType) => (
    <View
      style={[
        toppingStyles.DraggableContainer,
        {
          marginTop: pageHeight - 200,
        },
      ]}
    >
      <ToppingDraggable
        setIsOverDropZone={handleDropZone}
        dropZoneLayout={dropZoneLayout}
        startDragging={() => setIsDragging(true)}
        toppingData={topping}
      />
    </View>
  );

  return (
    <View style={pageStyles.ScreenContainer}>
      <View
        style={[
          pageStyles.DraggableContainer,
          {
            zIndex: isDragging ? 1 : 2,
          },
        ]}
      >
        <PizzaBox wrap={startBoxTransition} setWrap={setStartBoxTransition}>
          <View onLayout={handleDropZoneLayout}>
            <Pizza data={selectedPizza} />
            <View style={draggableToppingStyles.Container}>
              <View style={draggableToppingStyles.ToppingContainer}>
                {toppingsSelected.length > 0 &&
                  toppingsSelected.map((topping, index) => (
                    <ToppingAnimated toppingData={topping} key={index} />
                  ))}
              </View>
            </View>
          </View>
        </PizzaBox>

        <View style={pageStyles.DraggablePizzaContainer}>
          <PizzaSize
            sizes={selectedPizza.sizes}
            totalToppings={totalToppings}
          />
        </View>
      </View>
      <View style={pageStyles.DraggableToppingsContainer}>
        <GestureHandlerRootView>
          <Carousel
            width={itemSize}
            height={itemSize}
            style={[
              pageStyles.DraggableToppingsCarousel,
              {
                width: pageWidth,
                zIndex: isDragging ? 1 : -1,
              },
            ]}
            data={toppingData as ToppingDataType[]}
            renderItem={({ item }: { item: ToppingDataType }) =>
              renderTopping(item)
            }
          />
        </GestureHandlerRootView>
      </View>
      <View style={pageStyles.OrderButtonContainer}>
        <OrderPizzaButton callback={handleOrderPizza} />
      </View>
    </View>
  );
}
