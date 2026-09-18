import { differenceInDays, format, parseISO } from "date-fns";

const bookDate = (created_at) => format(parseISO(created_at), "yyyy-MM-dd");

const daysAgo = (bookDate) => differenceInDays(new Date(), new Date(bookDate));

const nightsToStay = (endDate, startDate) =>
  differenceInDays(new Date(endDate), new Date(startDate));

const formatCurrency = (value, currency = "USD", locale = "en-US") => {
  if (value === null || value === undefined) return "";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(value);
};

function formatHourMinute(data) {
  const date = new Date(data);
  const cambodiaTime = date.toLocaleTimeString("en-US", {
    timeZone: "Asia/Phnom_Penh",
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
  });

  return cambodiaTime;
}
function formatDate(date) {
  const b = date ? new Date(date).toISOString().split("T")[0] : null;
  return b;
}

function FormattedDateAndTime(date) {
  const isoString = date;

  const formattedDate = new Date(isoString)
    .toLocaleString("en-GB", {
      timeZone: "Asia/Phnom_Penh",
      day: "numeric",
      month: "short",
      hour: "numeric",
      hour12: true,
    })
    .replace(":00", "");

  return formattedDate;
}

export {
  bookDate,
  daysAgo,
  nightsToStay,
  formatCurrency,
  formatHourMinute,
  formatDate,
  FormattedDateAndTime,
};
