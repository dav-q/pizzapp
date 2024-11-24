// @import Dependencies
import { Stack } from "expo-router";
// @import Context
import { PizzaProvider } from "@/context/Pizza";

export default function RootLayout() {
  return (
    <PizzaProvider>
      <Stack>
        <Stack.Screen name="pizza-list" />
        <Stack.Screen name="pizza-detail" />
      </Stack>
    </PizzaProvider>
  );
}
