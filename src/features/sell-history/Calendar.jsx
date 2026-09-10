import { Calendar as CalendarApi, theme } from "antd";

function Calendar() {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div style={wrapperStyle}>
      <CalendarApi fullscreen={false} />
    </div>
  );
}

export default Calendar;
