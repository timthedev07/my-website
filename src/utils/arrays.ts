export const anyElementContains = (
  items: string[],
  searchSubstring: string
) => {
  let found = false;

  for (const item of items) {
    if (item.includes(searchSubstring)) {
      found = true;
      break;
    }
  }

  return found;
};
