import { format, isToday, isSameDay, parseISO } from "date-fns";

export const formatDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, "MMMM d, yyyy");
};

export const isDateToday = (dateString: string): boolean => {
  const date = parseISO(dateString);
  return isToday(date);
};

export const areDatesSame = (
  dateString1: string,
  dateString2: string
): boolean => {
  const date1 = parseISO(dateString1);
  const date2 = parseISO(dateString2);
  return isSameDay(date1, date2);
};
