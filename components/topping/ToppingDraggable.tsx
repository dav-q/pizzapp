import { Image } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { toppingImages } from "@/constants/ToppingImages";
import { ToppingDraggableComponentType } from "@/types/ToppingType";
import { draggableToppingStyles } from "@/styles/ToppingStyles";
import { scheduleOnRN } from "react-native-worklets";
export default function ToppingDraggable({
  setIsOverDropZone,
  dropZoneLayout,
  startDragging,
  toppingData,
}: ToppingDraggableComponentType) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const checkToppingZone = (gestureX: number, gestureY: number) => {
    "worklet";
    const layout = dropZoneLayout.value;
    if (!layout) return false;
    const { x, y, width, height } = layout;
    return (
      gestureX >= x &&
      gestureX <= x + width &&
      gestureY >= y &&
      gestureY <= y + height
    );
  };

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      scheduleOnRN(startDragging);
    })
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      const insideDropZone = checkToppingZone(event.absoluteX, event.absoluteY);
      runOnJS(setIsOverDropZone)({ insideDropZone, toppingData });
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        style={[draggableToppingStyles.ToppingButton, animatedStyle]}
      >
        <Image
          source={toppingImages[toppingData?.id as keyof typeof toppingImages]}
          style={{ width: 30, height: 30 }}
        />
      </Animated.View>
    </GestureDetector>
  );
}
