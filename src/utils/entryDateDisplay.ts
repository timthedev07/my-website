export const entryDateDisplay = (dateStr: string, startDate?: string) => {
  return startDate
    ? new Date(startDate).toDateString() +
        " - " +
        new Date(dateStr).toDateString()
    : new Date(dateStr).toDateString();
};
