export const anyElementContains = (
  items: string[],
  searchSubstring: string,
  caseInsensitive = true
) => {
  let found = false;

  for (const item of items) {
    if (
      caseInsensitive
        ? item.toLowerCase().includes(searchSubstring.toLowerCase())
        : item.includes(searchSubstring)
    ) {
      found = true;
      break;
    }
  }

  return found;
};
