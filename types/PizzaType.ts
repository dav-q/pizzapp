export interface PizzaType {
  id: number;
  name: string;
  description: string;
  image: string;
  stars: number;
  sizes: PizzaSizeType[];
}
export interface PizzaSizeType {
  size: string;
  price: number;
}
export interface PizzaContextType {
  selectedPizza: PizzaType;
  setSelectedPizza: (pizza: PizzaType) => void;
  cartCounter: number | null;
  setCartCounter: (counter: number) => void;
  increaseCartCounter: () => void;
}
export interface PizzaComponentType {
  data?: PizzaType;
  onPress?: () => void;
  renderDish?: boolean;
  animation?: "slideInUp" | "slideInDown";
}
export interface PizzaSizeComponentType {
  sizes: PizzaSizeType[];
  defaultSize?: string;
  totalToppings?: number;
}
