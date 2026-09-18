import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Card } from "antd";

const ContainerSpinner = () => {
  const spinner = <LoadingOutlined spin style={{ fontSize: "68px" }} />;
  return (
    <Card
      style={{
        width: "100%",
        height: 400,
        position: "relative", // Essential: anchors the absolute spinner
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Centered spinner filling parent bounds */}
      <Spin indicator={spinner} description="Loading" />;
    </Card>
  );
};

export default ContainerSpinner;
