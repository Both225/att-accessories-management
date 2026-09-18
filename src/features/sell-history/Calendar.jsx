import { useQuery } from "@tanstack/react-query";
import { Calendar as CalendarApi, theme } from "antd";
import { fetchSalesByDate } from "../../services/apiSales";
import { useState } from "react";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const { isLoading, data: soldProducts = [] } = useQuery({
    queryKey: ["sales", selectedDate],
    queryFn: () => fetchSalesByDate(selectedDate),
    enabled: !!selectedDate,
  });

  function handleSelectDate(date) {
    const formattedDate = date.format("YYYY-MM-DD");
    setSelectedDate(formattedDate);
  }

  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div style={wrapperStyle}>
      <CalendarApi onSelect={handleSelectDate} fullscreen={false} />
    </div>
  );
}

export default Calendar;
