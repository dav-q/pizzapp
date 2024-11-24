// @import Dependencies
import { Text, View } from "react-native";
import { Tabs } from "expo-router";
// @import Css
import { pizzaListStyles as styles } from "@/styles/PageStyles";
// @import Components
import Cart from "@/components/Cart";
import PizzaListPage from "@/screens/pizza/List";

export default function PizzaList() {
  return (
    <View>
      <Tabs.Screen
        options={{
          title: "",
          headerShown: true,
          animation: "fade",
          headerRight: () => {
            return (
              <Text>
                <Cart />
              </Text>
            );
          },
          headerLeft: () => {
            return <Text style={styles.TabHeaderLeftText}>Order Manually</Text>;
          },
          headerShadowVisible: false,
          headerStyle: styles.TabHeaderStyle,
        }}
      />
      <PizzaListPage />
    </View>
  );
}
