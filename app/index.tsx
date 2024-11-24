// @import Dependencies
import { useFonts } from "expo-font";
import { Redirect, Tabs } from "expo-router";

export default function Index() {
  const [fontsLoaded] = useFonts({
    lumberjackInlineRough: require("@/assets/fonts/lumberjack.inline-rough.otf"),
    lumberjackRegular: require("@/assets/fonts/lumberjack.regular.otf"),
    lumberjackRough: require("@/assets/fonts/lumberjack.rough.otf"),
  });

  if (!fontsLoaded) return <Tabs.Screen options={{ headerShown: false }} />;

  return <Redirect href="/pizza-list" />;
}
