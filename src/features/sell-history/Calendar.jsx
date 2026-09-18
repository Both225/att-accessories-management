import { Calendar as CalendarApi, theme } from "antd";
import { useSearchParams } from "react-router-dom";

function Calendar() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSelectDate(date) {
    const formattedDate = date.format("YYYY-MM-DD");
    searchParams.set("date", formattedDate);
    setSearchParams(searchParams);
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
