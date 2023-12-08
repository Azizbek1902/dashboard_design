// import React, { PureComponent } from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "10am",
//     uv: 2000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "11am",
//     uv: 1500,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "12am",
//     uv: 2200,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "01am",
//     uv: 1780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "02am",
//     uv: 1190,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "03am",
//     uv: 2590,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "04am",
//     uv: 1000,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: "05am",
//     uv: 1600,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: "06am",
//     uv: 3890,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: "07am",
//     uv: 2090,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// export default class Reports extends PureComponent {
//   static demoUrl = "https://codesandbox.io/s/simple-area-chart-4ujxw";

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <AreaChart
//           width={500}
//           height={400}
//           data={data}
//           margin={{
//             top: 10,
//             right: 30,
//             left: 0,
//             bottom: 0,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
//         </AreaChart>
//       </ResponsiveContainer>
//     );
//   }
// }

import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Reports extends Component {
  render() {
    const options = {
      animationEnabled: true,
      axisX: {
        valueFormatString: "MMM",
      },
      axisY: {
        prefix: "$",
      },
      data: [
        {
          yValueFormatString: "$#,###",
          xValueFormatString: "MMMM",
          type: "spline",
          dataPoints: [
            { x: new Date(2017, 0), y: 25060 },
            { x: new Date(2017, 1), y: 27980 },
            { x: new Date(2017, 2), y: 42800 },
            { x: new Date(2017, 3), y: 32400 },
            { x: new Date(2017, 4), y: 35260 },
            { x: new Date(2017, 5), y: 33900 },
            { x: new Date(2017, 6), y: 40000 },
            { x: new Date(2017, 7), y: 52500 },
            { x: new Date(2017, 8), y: 32300 },
            { x: new Date(2017, 9), y: 42000 },
            { x: new Date(2017, 10), y: 37160 },
            { x: new Date(2017, 11), y: 38400 },
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
export default Reports;
