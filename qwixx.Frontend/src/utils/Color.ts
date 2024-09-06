import { Color } from "../types/Color";

export const colorFromValue = (colorValue: Color): string => {
  let color;
  switch (colorValue) {
    case Color.RED:
      color = "Red";
      break;
    case Color.YELLOW:
      color = "Yellow";
      break;
    case Color.GREEN:
      color = "Green";
      break;
    case Color.BLUE:
      color = "Blue";
      break;
  }

  return color;
};
