export const isDarkBG = (route: string) => {
  const darkBG: Set<string> = new Set(["/contact"]);

  return route in darkBG;
};
