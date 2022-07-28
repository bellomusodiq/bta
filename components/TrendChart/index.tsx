import React from "react";
import { View } from "react-native";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";
import { width } from "../../consts/dimenentions";
import CustomText from "../CustomText";

const Tooltip: React.FC = ({ value, position }) => {
  console.log(position);
  return (
    <View
      style={{
        width: 100,
        height: 50,
        position: "absolute",
        top: position.y - 50,
        left: position.x - 50,
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: "#3861FB",
          paddingHorizontal: 12,
          paddingVertical: 8,
          backgroundColor: "#F6F8FF",
          borderRadius: 130,
        }}
      >
        <CustomText
          style={{
            textAlign: "center",
            color: "#3861FB",
          }}
        >
          $0.06932
        </CustomText>
      </View>
      <CustomText style={{ textAlign: "center" }}>at 3:56pm</CustomText>
    </View>
  );
};

const TrendChart: React.FC = () => {
  return (
    <Chart
      style={{
        height: 200,
        width: width(1),
        position: "relative",
        left: -width(0.05),
      }}
      data={[
        { x: -2, y: 15 },
        { x: -1, y: 10 },
        { x: 0, y: 12 },
        { x: 1, y: 7 },
        { x: 2, y: 6 },
        { x: 3, y: 3 },
        { x: 4, y: 5 },
        { x: 5, y: 8 },
        { x: 6, y: 12 },
        { x: 7, y: 14 },
        { x: 8, y: 12 },
        { x: 9, y: 13.5 },
        { x: 10, y: 18 },
        // { x: 22, y: 3 },
      ]}
      padding={{ top: 20 }}
      xDomain={{ min: -2, max: 10 }}
      yDomain={{ min: -4, max: 20 }}
    >
      <VerticalAxis
        tickCount={0}
        theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
      />
      <HorizontalAxis />
      <Area
        theme={{
          gradient: {
            from: { color: "#3861FB00", opacity: 0.4 },
            to: { color: "#3861FB00", opacity: 0 },
          },
        }}
      />
      <Line
        tooltipComponent={<Tooltip />}
        // onTooltipSelect={(e) => console.log(e)}
        theme={{
          stroke: { color: "#3861FB", width: 2 },
          scatter: {
            // default: { width: 8, height: 8, rx: 4, color: "#44ad32" },
            selected: { color: "red" },
          },
        }}
      />
    </Chart>
  );
};

export default TrendChart;
