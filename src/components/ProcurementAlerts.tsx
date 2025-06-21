
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
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-orange-100 text-orange-800 border-orange-200";
      case "low": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Smart Procurement Alerts</h2>
          <p className="text-gray-600">AI-powered demand predictions based on local intelligence</p>
        </div>
        <Button>
          <CheckCircle className="w-4 h-4 mr-2" />
          Mark All Reviewed
        </Button>
      </div>

      <div className="grid gap-4">
        {alerts.map((alert) => {
          const IconComponent = alert.icon;
          return (
            <Card key={alert.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`p-2 rounded-lg ${
                      alert.color === 'red' ? 'bg-red-100' :
                      alert.color === 'orange' ? 'bg-orange-100' :
                      alert.color === 'blue' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <IconComponent className={`w-5 h-5 ${
                        alert.color === 'red' ? 'text-red-600' :
                        alert.color === 'orange' ? 'text-orange-600' :
                        alert.color === 'blue' ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className={getPriorityColor(alert.priority)}>
                          {alert.priority.toUpperCase()} PRIORITY
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-3 h-3 mr-1" />
                          {alert.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {alert.timeframe}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-1">{alert.product}</h3>
                      <p className="text-gray-600 mb-2">{alert.reason}</p>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="font-medium text-green-600">{alert.prediction}</span>
                        <span className="text-gray-500">Confidence: {alert.confidence}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Button variant="outline" size="sm" className="mb-2">
                      View Details
                    </Button>
                    <p className="text-sm text-gray-600">{alert.action}</p>
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
