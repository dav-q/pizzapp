export type ToppingType =
  | "chili"
  | "onion"
  | "pickle"
  | "potato"
  | "pea"
  | "olive"
  | "mushroom";
export type ToppingUnitType =
  | "chili_unit"
  | "onion_unit"
  | "pickle_unit"
  | "potato_unit"
  | "pea_unit"
  | "olive_unit"
  | "mushroom_unit";

export interface ToppingDataType {
  id: ToppingType;
  name: string;
  styles?: any;
}

export interface InsideToppingDataType {
  toppingData: ToppingDataType;
  insideDropZone: boolean;
}

export interface ToppingDraggableComponentType {
  setIsOverDropZone: ({
    insideDropZone,
    toppingData,
  }: InsideToppingDataType) => void;
  startDragging: () => void;
  dropZoneLayout: any;
  toppingData: ToppingDataType;
}
