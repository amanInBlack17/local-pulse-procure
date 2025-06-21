
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { TrendingUp } from "lucide-react";

const demandData = [
  { day: "Mon", traditional: 100, smartstock: 120, actual: 118 },
  { day: "Tue", traditional: 95, smartstock: 110, actual: 112 },
  { day: "Wed", traditional: 110, smartstock: 95, actual: 98 },
  { day: "Thu", traditional: 105, smartstock: 140, actual: 135 },
  { day: "Fri", traditional: 120, smartstock: 165, actual: 162 },
  { day: "Sat", traditional: 130, smartstock: 180, actual: 175 },
  { day: "Sun", traditional: 115, smartstock: 145, actual: 148 }
];

const DemandChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <TrendingUp className="w-5 h-5 mr-2" />
          Demand Prediction Accuracy
        </CardTitle>
        <CardDescription className="text-sm">
          Comparison between traditional forecasting and SmartStock AI predictions vs actual sales
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
          <LineChart data={demandData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="day" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              formatter={(value, name) => [
                `${value}%`,
                name === 'traditional' ? 'Traditional Method' :
                name === 'smartstock' ? 'SmartStock AI' : 'Actual Sales'
              ]}
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            />
            <Line 
              type="monotone" 
              dataKey="traditional" 
              stroke="#94a3b8" 
              strokeWidth={2}
              strokeDasharray="5 5"
              name="traditional"
            />
            <Line 
              type="monotone" 
              dataKey="smartstock" 
              stroke="#3b82f6" 
              strokeWidth={3}
              name="smartstock"
            />
            <Line 
              type="monotone" 
              dataKey="actual" 
              stroke="#10b981" 
              strokeWidth={2}
              name="actual"
            />
          </LineChart>
        </ResponsiveContainer>
        
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs sm:text-sm text-gray-500">Traditional Method</p>
            <p className="text-base sm:text-lg font-semibold text-gray-600">73% Accuracy</p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500">SmartStock AI</p>
            <p className="text-base sm:text-lg font-semibold text-blue-600">91% Accuracy</p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500">Improvement</p>
            <p className="text-base sm:text-lg font-semibold text-green-600">+18%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemandChart;
