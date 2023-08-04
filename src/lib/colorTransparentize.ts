/**
 * @param opacity a decimal value from 0 to 1
 */
export const hexColorTransparentize = (hex: string, opacity = 1) => {
  return hex + Math.round(opacity * 255).toString(16);
};

/**
 * @param rgb a string in the form of `rgb(r, g, b)`
 * @param opacity a decimal value from 0 to 1
 */
export const rgbaColorTransparentize = (rgb: string, opacity = 1) => {
  const splitInd = rgb.indexOf(")");
  return (rgb.slice(0, splitInd) + `, ${opacity})`).replace("rgb", "rgba");
};
