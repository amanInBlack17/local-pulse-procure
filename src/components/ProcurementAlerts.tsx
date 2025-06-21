
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingUp, Calendar, Cloud, Users, MapPin, Clock, CheckCircle } from "lucide-react";

const alerts = [
  {
    id: 1,
    priority: "high",
    location: "Dallas, TX",
    product: "Umbrellas & Rain Gear",
    prediction: "+35% demand increase",
    reason: "Weekend rain forecast + Rangers home game",
    confidence: 94,
    timeframe: "Next 48 hours",
    action: "Increase order by 200 units",
    icon: Cloud,
    color: "red"
  },
  {
    id: 2,
    priority: "medium",
    location: "Austin, TX",
    product: "Camping Equipment",
    prediction: "+28% demand increase",
    reason: "South by Southwest festival starting",
    confidence: 87,
    timeframe: "Next 5 days",
    action: "Stock additional tents & sleeping bags",
    icon: Calendar,
    color: "orange"
  },
  {
    id: 3,
    priority: "high",
    location: "Miami, FL",
    product: "Sunscreen & Beach Items",
    prediction: "+42% demand surge",
    reason: "Spring break + viral TikTok beach trend",
    confidence: 91,
    timeframe: "Next 3 days",
    action: "Emergency restock recommended",
    icon: TrendingUp,
    color: "red"
  },
  {
    id: 4,
    priority: "low",
    location: "Seattle, WA",
    product: "Indoor Activities",
    prediction: "+15% demand increase",
    reason: "Extended rain forecast",
    confidence: 78,
    timeframe: "Next week",
    action: "Moderate increase in board games",
    icon: Cloud,
    color: "blue"
  },
  {
    id: 5,
    priority: "medium",
    location: "Phoenix, AZ",
    product: "Cooling Products",
    prediction: "+31% demand increase",
    reason: "Heat wave warning issued",
    confidence: 89,
    timeframe: "Next 4 days",
    action: "Increase fan & cooler inventory",
    icon: AlertTriangle,
    color: "orange"
  }
];

const ProcurementAlerts = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border-red-200 dark:border-red-600";
      case "medium": return "bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-600";
      case "low": return "bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-600";
      default: return "bg-gray-50 dark:bg-gray-900/20 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-600";
    }
  };

  const getIconBgColor = (color: string) => {
    switch (color) {
      case 'red': return 'bg-red-100 dark:bg-red-900/30';
      case 'orange': return 'bg-orange-100 dark:bg-orange-900/30';
      case 'blue': return 'bg-blue-100 dark:bg-blue-900/30';
      default: return 'bg-gray-100 dark:bg-gray-900/30';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'red': return 'text-red-600 dark:text-red-400';
      case 'orange': return 'text-orange-600 dark:text-orange-400';
      case 'blue': return 'text-blue-600 dark:text-blue-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Smart Procurement Alerts
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">AI-powered demand predictions based on local intelligence</p>
        </div>
        <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200">
          <CheckCircle className="w-4 h-4 mr-2" />
          Mark All Reviewed
        </Button>
      </div>

      <div className="grid gap-6">
        {alerts.map((alert) => {
          const IconComponent = alert.icon;
          return (
            <Card key={alert.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`p-3 rounded-xl ${getIconBgColor(alert.color)} shadow-lg`}>
                      <IconComponent className={`w-6 h-6 ${getIconColor(alert.color)}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge className={getPriorityColor(alert.priority)} >
                          {alert.priority.toUpperCase()} PRIORITY
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <MapPin className="w-3 h-3 mr-1" />
                          {alert.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="w-3 h-3 mr-1" />
                          {alert.timeframe}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">{alert.product}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">{alert.reason}</p>
                      
                      <div className="flex items-center space-x-6 text-sm">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                          {alert.prediction}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">
                          Confidence: {alert.confidence}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right space-y-3">
                    <Button variant="outline" size="sm" className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-600 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                      View Details
                    </Button>
                    <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded-lg">
                      {alert.action}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProcurementAlerts;
