// @import Dependencies
import { Image, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
// @import Data
import { toppingImages } from "@/constants/ToppingImages";
// @import Types
import { PanGestureHandlerEventPayload } from "react-native-screens";
import { ToppingDraggableComponentType } from "@/types/ToppingType";
// @import Css
import { draggableToppingStyles } from "@/styles/ToppingStyles";

export default function ToppingDraggable({
  setIsOverDropZone,
  dropZoneLayout,
  startDragging,
  toppingData,
}: ToppingDraggableComponentType) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  const handleGestureEvent = (event: PanGestureHandlerEventPayload) => {
    translateX.value = event.translationX;
    translateY.value = event.translationY;
  };
  const checkToppingZone = (gestureX: number, gestureY: number) => {
    const { x, y, width, height } = dropZoneLayout.value;
    return (
      gestureX >= x &&
      gestureX <= x + width &&
      gestureY >= y &&
      gestureY <= y + height
    );
  };
  const handleEnded = (event: PanGestureHandlerEventPayload) => {
    const insideDropZone = checkToppingZone(event.absoluteX, event.absoluteY);
    setIsOverDropZone({ insideDropZone, toppingData });
    translateX.value = withSpring(0);
    translateY.value = withSpring(0);
  };

  return (
    <PanGestureHandler
      onGestureEvent={(event) => handleGestureEvent(event.nativeEvent)}
      onEnded={(event: any) => handleEnded(event.nativeEvent)}
      onBegan={startDragging}
    >
      <Animated.View
        style={[draggableToppingStyles.ToppingButton, animatedStyle]}
      >
        <Image
          source={toppingImages[toppingData?.id as keyof typeof toppingImages]}
          style={{ width: 30, height: 30 }}
        />
      </Animated.View>
    </PanGestureHandler>
  );
}
