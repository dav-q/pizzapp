// @import Css
import { Colors } from "@/constants/Colors";
// @import Dependencies
import { StyleSheet } from "react-native";

export const pizzaDetailStyles = StyleSheet.create({
  TabHeaderLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  TabHeaderLeftText: {
    fontFamily: "lumberjackInlineRough",
    fontSize: 38,
    color: Colors.main,
  },
  TabHeaderStyle: {
    backgroundColor: Colors.whiteSecondary,
  },
});

export const pizzaListStyles = StyleSheet.create({
  TabHeaderLeftText: {
    fontFamily: "lumberjackInlineRough",
    fontSize: 38,
    color: Colors.main,
  },
  TabHeaderStyle: {
    backgroundColor: Colors.whiteSecondary,
  },
  ScreenContainer: {
    backgroundColor: Colors.whiteSecondary,
    height: "100%",
    width: "100%",
    display: "flex",
  },
  ScreenCarousel: { zIndex: 1 },
});

export const pizzaPageDetailStyles = StyleSheet.create({
  ScreenContainer: {
    backgroundColor: Colors.whiteSecondary,
    height: "100%",
    width: "100%",
    display: "flex",
    position: "relative",
  },
  DraggableContainer: {
    backgroundColor: Colors.whiteDraggable,
    marginRight: 20,
    marginLeft: 20,
    position: "relative",
  },
  DraggablePizzaContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: 20,
  },
  DraggableToppingsContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    overflow: "visible",
    height: 100,
    zIndex: 1,
    bottom: 0,
    left: 60,
    right: 60,
  },
  DraggableToppingsCarousel: {
    backgroundColor: "transparent",
    marginLeft: 50,
    overflow: "visible",
  },
  OrderButtonContainer: {
    backgroundColor: Colors.whiteDraggable,
    alignItems: "center",
    marginRight: 20,
    marginLeft: 20,
    height: 140,
  },
});
