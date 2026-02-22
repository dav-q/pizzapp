// @import Dependencies
import React from "react";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { router } from "expo-router";
import { CopilotProvider } from "react-native-copilot";
// @import Context
import { usePizza } from "@/context/Pizza";
// @import Css
import { pizzaDetailStyles as styles } from "@/styles/PageStyles";
import { Colors } from "@/constants/Colors";
// @import Components
import Cart from "@/components/Cart";
import PizzaDetailPage from "@/screens/pizza/Detail";
// @import Icons
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default function PizzaDetail() {
  const { selectedPizza } = usePizza();

  const handleBack = () => {
    return router.navigate({
      pathname: "/pizza-list",
      params: { pizzaId: selectedPizza.id },
    });
  };

  return (
    <CopilotProvider
      labels={{
        finish: "Ok",
      }}
      stopOnOutsideClick
      stepNumberComponent={() => null}
    >
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
              return (
                <View style={styles.TabHeaderLeft}>
                  <SimpleLineIcons
                    name="arrow-left"
                    size={24}
                    color={Colors.main}
                    onPress={handleBack}
                  />
                  <Text style={styles.TabHeaderLeftText} numberOfLines={1}>
                    {selectedPizza?.name}
                  </Text>
                </View>
              );
            },
            headerShadowVisible: false,
            headerStyle: styles.TabHeaderStyle,
          }}
        />
        <PizzaDetailPage />
      </View>
    </CopilotProvider>
  );
}
