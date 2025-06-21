
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

const locationData = [
  {
    city: "Dallas, TX",
    stores: 23,
    alertLevel: "high",
    activeAlerts: 5,
    weeklyAccuracy: 94,
    topTrend: "Rangers Baseball + Rain",
    impact: "+$125K revenue",
    status: "monitoring"
  },
  {
    city: "Austin, TX",
    stores: 18,
    alertLevel: "medium",
    activeAlerts: 3,
    weeklyAccuracy: 87,
    topTrend: "SXSW Festival",
    impact: "+$89K revenue",
    status: "optimized"
  },
  {
    city: "Miami, FL",
    stores: 31,
    alertLevel: "high",
    activeAlerts: 7,
    weeklyAccuracy: 91,
    topTrend: "Spring Break + TikTok Viral",
    impact: "+$203K revenue",
    status: "monitoring"
  },
  {
    city: "Seattle, WA",
    stores: 16,
    alertLevel: "low",
    activeAlerts: 1,
    weeklyAccuracy: 89,
    topTrend: "Extended Rain Forecast",
    impact: "+$45K revenue",
    status: "stable"
  },
  {
    city: "Phoenix, AZ",
    stores: 22,
    alertLevel: "medium",
    activeAlerts: 4,
    weeklyAccuracy: 88,
    topTrend: "Heat Wave Warning",
    impact: "+$112K revenue",
    status: "monitoring"
  },
  {
    city: "Denver, CO",
    stores: 19,
    alertLevel: "low",
    activeAlerts: 2,
    weeklyAccuracy: 92,
    topTrend: "Ski Season Start",
    impact: "+$67K revenue",
    status: "optimized"
  }
];

const LocationInsights = () => {
  const getAlertColor = (level: string) => {
    switch (level) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-orange-100 text-orange-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "monitoring": return <AlertTriangle className="w-4 h-4 text-orange-500" />;
      case "optimized": return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "stable": return <CheckCircle className="w-4 h-4 text-blue-500" />;
      default: return <AlertTriangle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Location-Based Insights</h2>
        <p className="text-gray-600 text-sm sm:text-base">Real-time monitoring and optimization across all store locations</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <Card>
          <CardContent className="p-3 sm:p-4">
            <div className="text-center">
              <p className="text-lg sm:text-2xl font-bold text-blue-600">129</p>
              <p className="text-xs sm:text-sm text-gray-600">Total Stores</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-3 sm:p-4">
            <div className="text-center">
              <p className="text-lg sm:text-2xl font-bold text-red-600">22</p>
              <p className="text-xs sm:text-sm text-gray-600">Active Alerts</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-3 sm:p-4">
            <div className="text-center">
              <p className="text-lg sm:text-2xl font-bold text-green-600">90%</p>
              <p className="text-xs sm:text-sm text-gray-600">Avg Accuracy</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-3 sm:p-4">
            <div className="text-center">
              <p className="text-lg sm:text-2xl font-bold text-purple-600">$641K</p>
              <p className="text-xs sm:text-sm text-gray-600">Weekly Impact</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Location Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {locationData.map((location, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <CardTitle className="text-base sm:text-lg">{location.city}</CardTitle>
                </div>
                {getStatusIcon(location.status)}
              </div>
              <CardDescription className="text-xs sm:text-sm">{location.stores} stores monitored</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Alert Level:</span>
                <Badge className={`${getAlertColor(location.alertLevel)} text-xs`}>
                  {location.alertLevel.toUpperCase()}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Active Alerts:</span>
                <span className="text-sm font-bold">{location.activeAlerts}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Weekly Accuracy:</span>
                <span className="text-sm font-bold text-green-600">{location.weeklyAccuracy}%</span>
              </div>
              
              <div className="border-t pt-3">
                <p className="text-sm font-medium text-gray-700 mb-1">Top Trend:</p>
                <p className="text-xs sm:text-sm text-gray-600">{location.topTrend}</p>
              </div>
              
              <div className="flex items-center justify-between bg-green-50 p-2 rounded">
                <span className="text-sm font-medium">Revenue Impact:</span>
                <span className="text-sm font-bold text-green-600">{location.impact}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LocationInsights;
