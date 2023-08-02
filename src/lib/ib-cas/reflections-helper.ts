// client side helpers

export const getYearAndMonth = (yearMonth: string) => {
  return yearMonth.split("-");
};

export const groupByYear = (yearMonths: string[]) => {
  // this maps yyyy to yyyy-mm
  const groups: Record<string, string[]> = {};
  for (const yearMonth of yearMonths) {
    const [year] = getYearAndMonth(yearMonth);
    if (!groups[year]) groups[year] = [];
    groups[year].push(yearMonth);
  }

  return groups;
};

export const getUniqueYears = (yearMonths: string[]) => {
  return [...new Set(yearMonths.map((each) => getYearAndMonth(each)[0]))]
    .sort()
    .reverse();
};
