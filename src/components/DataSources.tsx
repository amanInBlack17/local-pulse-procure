
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Cloud, TrendingUp, MapPin, Users, Newspaper, Music, Zap } from "lucide-react";

const dataSources = [
  {
    name: "Local Event Calendars",
    description: "Eventbrite, Ticketmaster, Facebook Events",
    status: "active",
    accuracy: 92,
    lastUpdate: "2 minutes ago",
    icon: Calendar,
    color: "blue",
    dataPoints: "15,432 events tracked"
  },
  {
    name: "Weather Intelligence",
    description: "Advanced weather forecasting & alerts",
    status: "active",
    accuracy: 96,
    lastUpdate: "1 minute ago",
    icon: Cloud,
    color: "green",
    dataPoints: "4,743 locations monitored"
  },
  {
    name: "Social Media Trends",
    description: "TikTok, Twitter, Instagram viral content",
    status: "active",
    accuracy: 84,
    lastUpdate: "30 seconds ago",
    icon: TrendingUp,
    color: "purple",
    dataPoints: "2.3M mentions analyzed"
  },
  {
    name: "Local News Sources",
    description: "Regional news outlets & community sites",
    status: "active",
    accuracy: 88,
    lastUpdate: "5 minutes ago",
    icon: Newspaper,
    color: "orange",
    dataPoints: "892 news sources"
  },
  {
    name: "Geographic Intelligence",
    description: "Census data, demographics, local insights",
    status: "active",
    accuracy: 95,
    lastUpdate: "1 hour ago",
    icon: MapPin,
    color: "red",
    dataPoints: "50 states covered"
  },
  {
    name: "Entertainment Venues",
    description: "Concert halls, sports stadiums, theaters",
    status: "active",
    accuracy: 90,
    lastUpdate: "10 minutes ago",
    icon: Music,
    color: "indigo",
    dataPoints: "3,247 venues tracked"
  }
];

const DataSources = () => {
  const getStatusColor = (status: string) => {
    return status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100",
      purple: "text-purple-600 bg-purple-100",
      orange: "text-orange-600 bg-orange-100",
      red: "text-red-600 bg-red-100",
      indigo: "text-indigo-600 bg-indigo-100"
    };
    return colors[color as keyof typeof colors] || "text-gray-600 bg-gray-100";
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Data Source Intelligence</h2>
        <p className="text-gray-600">Real-time monitoring of diverse data streams for comprehensive market insights</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Sources</p>
                <p className="text-2xl font-bold">6/6</p>
              </div>
              <Zap className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Accuracy</p>
                <p className="text-2xl font-bold">91%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Data Points/Day</p>
                <p className="text-2xl font-bold">2.8M</p>
              </div>
              <Users className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dataSources.map((source, index) => {
          const IconComponent = source.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${getIconColor(source.color)}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{source.name}</CardTitle>
                      <CardDescription className="text-sm">{source.description}</CardDescription>
                    </div>
                  </div>
                  <Badge className={getStatusColor(source.status)}>
                    {source.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Accuracy Score</span>
                      <span className="text-sm text-gray-600">{source.accuracy}%</span>
                    </div>
                    <Progress value={source.accuracy} className="h-2" />
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Last Update:</span>
                    <span className="font-medium">{source.lastUpdate}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Data Coverage:</span>
                    <span className="font-medium">{source.dataPoints}</span>
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

export default DataSources;
