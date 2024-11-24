// @import Css
import { Colors } from "@/constants/Colors";
// @import Dependencies
import { StyleSheet } from "react-native";

export const pizzaSizeStyles = StyleSheet.create({
  Price: {
    fontSize: 50,
    fontFamily: "lumberjackRegular",
    color: Colors.main,
  },
  Container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 25,
    width: "100%",
  },
  ButtonSize: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  ButtonSizeText: {
    fontSize: 20,
    fontFamily: "lumberjackRegular",
    color: Colors.main,
  },
});

export const pizzaStyles = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 25,
  },
  Dish: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    zIndex: 1,
  },
  DishButton: { position: "absolute" },
  DishImage: { width: 300, height: 300 },
  PizzaImage: { width: 270, height: 270 },
});

export const pizzaCarouselHeaderStyles = StyleSheet.create({
  Container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  LocationContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  LocationText: {
    fontFamily: "lumberjackRegular",
    fontSize: 15,
    width: "100%",
    color: Colors.main,
  },
  CategoryContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginTop: 15,
  },
  CategoryText: {
    fontWeight: "bold",
    backgroundColor: Colors.yellow,
    padding: 5,
    borderRadius: 15,
    fontSize: 15,
    color: Colors.main,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export const pizzaCarouselStyles = StyleSheet.create({
  Container: { height: 400, marginTop: -40 },
  Carousel: { height: 600 },
  Touchable: { flex: 1 },
});

export const pizzaCarouselDetailStyles = StyleSheet.create({
  Container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: "100%",
  },
  DetailContainer: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.whiteDetail,
    height: 500,
    borderBottomEndRadius: 500,
    borderBottomStartRadius: 500,
    position: "relative",
  },
  SizesContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  PizzaText: {
    fontFamily: "lumberjackRough",
    fontSize: 25,
    color: Colors.main,
    marginTop: 150,
  },
  StarsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  DetailButtonContainer: { position: "absolute", bottom: -20 },
  DetailButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.yellowSecondary,
    borderRadius: 10,
    padding: 15,
  },
});

export const pizzaBoxtyles = StyleSheet.create({
  Container: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
  PizzaContainer: {
    width: 300,
    height: 300,
    zIndex: 1,
    resizeMode: "contain",
    position: "absolute",
  },
  Lid: {
    position: "absolute",
    top: -120,
    width: 300,
    height: 160,
    zIndex: 3,
  },
});
