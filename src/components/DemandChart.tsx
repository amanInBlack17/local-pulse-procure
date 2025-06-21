
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
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-t-lg">
        <CardTitle className="flex items-center text-gray-800 dark:text-gray-200">
          <TrendingUp className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
          Demand Prediction Accuracy
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Comparison between traditional forecasting and SmartStock AI predictions vs actual sales
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={demandData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="dark:stroke-gray-600" />
            <XAxis 
              dataKey="day" 
              stroke="#64748b" 
              className="dark:stroke-gray-400"
              fontSize={12}
            />
            <YAxis 
              stroke="#64748b" 
              className="dark:stroke-gray-400"
              fontSize={12}
            />
            <Tooltip 
              formatter={(value, name) => [
                `${value}%`,
                name === 'traditional' ? 'Traditional Method' :
                name === 'smartstock' ? 'SmartStock AI' : 'Actual Sales'
              ]}
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="traditional" 
              stroke="#94a3b8" 
              strokeWidth={3}
              strokeDasharray="8 4"
              name="traditional"
              dot={{ fill: '#94a3b8', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#94a3b8' }}
            />
            <Line 
              type="monotone" 
              dataKey="smartstock" 
              stroke="#3b82f6" 
              strokeWidth={4}
              name="smartstock"
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 5 }}
              activeDot={{ r: 8, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="actual" 
              stroke="#10b981" 
              strokeWidth={3}
              name="actual"
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#10b981' }}
            />
          </LineChart>
        </ResponsiveContainer>
        
        <div className="mt-6 grid grid-cols-3 gap-6">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Traditional Method</p>
            <p className="text-2xl font-bold text-gray-600 dark:text-gray-300">73%</p>
            <p className="text-xs text-gray-400 dark:text-gray-500">Accuracy</p>
          </div>
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">SmartStock AI</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">91%</p>
            <p className="text-xs text-gray-400 dark:text-gray-500">Accuracy</p>
          </div>
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Improvement</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">+18%</p>
            <p className="text-xs text-gray-400 dark:text-gray-500">Better</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemandChart;
