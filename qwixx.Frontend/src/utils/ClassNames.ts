import { Cell } from "../types/Cell";
import { Color } from "../types/Color";
import { colorFromValue } from "./Color";

export const getClassName = (colorValue: Color, row: Cell): string => {
  let className = `${colorFromValue(colorValue).toLowerCase()}-btn`;

  if (row.clicked && row.disabled) {
    className += "-clicked-disable";
  } else if (row.clicked) {
    className += "-clicked";
  } else if (row.disabled) {
    className += "-disable";
  }

  return className;
};
