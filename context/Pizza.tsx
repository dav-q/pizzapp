// @import Dependencies
import React, { createContext, useContext, useState, ReactNode } from "react";
// @import Data
import pizzas from "@/data/pizza-mock.json";
// @import Types
import { PizzaContextType, PizzaType } from "@/types/PizzaType";

const PizzaContext = createContext<PizzaContextType | undefined>(undefined);

export const PizzaProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPizza, setSelectedPizza] = useState<PizzaType>(pizzas[0]);
  const [cartCounter, setCartCounter] = useState<number | null>(null);

  const increaseCartCounter = () => {
    if (cartCounter === null) {
      setCartCounter(1);
    } else {
      setCartCounter(cartCounter + 1);
    }
  };
  return (
    <PizzaContext.Provider
      value={{
        selectedPizza,
        setSelectedPizza,
        cartCounter,
        setCartCounter,
        increaseCartCounter,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => {
  const context = useContext(PizzaContext);
  if (!context) throw new Error("usePizza error");
  return context;
};
