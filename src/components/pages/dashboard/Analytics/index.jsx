// import React, { PureComponent } from "react";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Group A", value: 500 },
//   { name: "Group B", value: 400 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 100 },
// ];

// const COLORS = ["#5B93FF", "#FF8F6B", "#FFD66B", "#F7F9FF"];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// export default class Analytics extends PureComponent {
//   static demoUrl =
//     "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={400} height={400}>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             label={renderCustomizedLabel}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//           >
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//               />
//             ))}
//           </Pie>
//         </PieChart>
//       </ResponsiveContainer>
//     );
//   }
// }

import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Analytics extends Component {
  render() {
    const options = {
      animationEnabled: true,
      // title: {
      //   text: "Customer Satisfaction",
      // },
      subtitles: [
        {
          text: "80% Transactions",
          verticalAlign: "center",
          fontSize: 24,
          dockInsidePlotArea: true,
        },
      ],
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          yValueFormatString: "#,###'%'",
          dataPoints: [
            { name: "Satisfied", y: 15, color: "#F7F9FF" },
            { name: "Very Unsatisfied", y: 20, color: "#FFD66B" },
            { name: "Very Satisfied", y: 25, color: "#FF8F6B" },
            { name: "Unsatisfied", y: 40, color: "#5B93FF" },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}
export default Analytics;
