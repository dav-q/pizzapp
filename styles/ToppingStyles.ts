// @import Css
import { Colors } from "@/constants/Colors";
// @import Dependencies
import { StyleSheet } from "react-native";

export const pizzaToppingsDetailStyles = StyleSheet.create({
  DraggableContainer: {
    bottom: 0,
  },
  DetailButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.yellowSecondary,
    borderRadius: 10,
    padding: 15,
    marginTop: 100,
    zIndex: 20,
    position: "absolute",
    bottom: -30,
  },
});
export const draggableToppingStyles = StyleSheet.create({
  Container: {
    position: "absolute",
    marginTop: 40,
    width: 200,
    height: 300,
    backgroundColor: "transparent",
    marginLeft: 30,
  },
  ToppingContainer: {
    position: "relative",
  },
  ToppingButton: {
    width: 50,
    height: 50,
    backgroundColor: "#dbce9b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
