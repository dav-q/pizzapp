// @import Css
import { Colors } from "@/constants/Colors";
// @import Dependencies
import { StyleSheet } from "react-native";

export const cartStyles = StyleSheet.create({
  Counter: {
    position: "absolute",
    backgroundColor: "red",
    borderRadius: 50,
    color: Colors.white,
    fontSize: 10,
    top: -3,
    right: -3,
    width: 15,
    height: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  Container: { position: "relative" },
});
