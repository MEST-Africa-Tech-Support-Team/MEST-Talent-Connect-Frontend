import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

const data = [{ name: "Performance", value: 78, fill: "#ff6b21" }];

export default function GaugeChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 h-full">
      <h4 className="text-sm font-semibold mb-2">Hiring Performance</h4>
      <div>
        <ResponsiveContainer width="100%" height={150}>
          <RadialBarChart
            cx="50%"
            cy="80%"
            innerRadius="50%"
            outerRadius="180%"
            barSize={45}
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              background
              clockWise
              dataKey="value"
              cornerRadius={6}
            />
            {/* <Legend
              iconSize={0}
              layout="vertical"
              verticalAlign="middle"
              align="center"
              formatter={() => (
                <div className="text-2xl font-bold text-center mt-28">{data[0].value}</div>
              )}
            /> */}
          </RadialBarChart>
        </ResponsiveContainer>

      </div>
      
      {/* <div className="text-center mt-4 text-lg font-semibold">78</div>
      <div className="text-xs text-gray-400 text-center">Performance score</div> */}
    </div>
  );
}


{/* <div style={{ width: "100%", height: 140 }}>
        <ResponsiveContainer>
          <RadialBarChart innerRadius="70%" outerRadius="150%" data={data} startAngle={180} endAngle={0}>
            <RadialBar minAngle={15} background clockWise dataKey="value" cornerRadius={10} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div> */}