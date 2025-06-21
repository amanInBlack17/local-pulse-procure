
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Minus, Star, Users, Clock } from "lucide-react";

const trendingProducts = [
  {
    product: "Portable Umbrellas",
    category: "Weather Protection",
    trend: "up",
    changePercent: 45,
    reason: "Weather forecasts + outdoor events",
    locations: ["Dallas", "Houston", "San Antonio"],
    socialMentions: 12500,
    timeframe: "Next 48h",
    confidence: 94
  },
  {
    product: "Camping Gear",
    category: "Outdoor Recreation",
    trend: "up",
    changePercent: 38,
    reason: "Festival season + spring weather",
    locations: ["Austin", "Denver", "Portland"],
    socialMentions: 8900,
    timeframe: "Next 5 days",
    confidence: 87
  },
  {
    product: "Sunscreen & Beach Items",
    category: "Summer Essentials",
    trend: "up",
    changePercent: 52,
    reason: "Spring break + viral beach trends",
    locations: ["Miami", "Tampa", "Orlando"],
    socialMentions: 23400,
    timeframe: "Next 3 days",
    confidence: 91
  },
  {
    product: "Winter Coats",
    category: "Seasonal Clothing",
    trend: "down",
    changePercent: -28,
    reason: "Seasonal transition + warm weather",
    locations: ["Minneapolis", "Chicago", "Detroit"],
    socialMentions: 1200,
    timeframe: "Next week",
    confidence: 89
  },
  {
    product: "Indoor Entertainment",
    category: "Home & Recreation",
    trend: "up",
    changePercent: 22,
    reason: "Extended rain forecasts",
    locations: ["Seattle", "Portland", "Vancouver"],
    socialMentions: 5600,
    timeframe: "Next week",
    confidence: 78
  },
  {
    product: "Cooling Products",
    category: "Climate Control",
    trend: "up",
    changePercent: 41,
    reason: "Heat wave warnings + summer prep",
    locations: ["Phoenix", "Las Vegas", "Tucson"],
    socialMentions: 7800,
    timeframe: "Next 4 days",
    confidence: 85
  }
];

const TrendingProducts = () => {
  const getTrendIcon = (trend: string, changePercent: number) => {
    if (trend === "up") {
      return <TrendingUp className="w-4 h-4 text-green-600" />;
    } else if (trend === "down") {
      return <TrendingDown className="w-4 h-4 text-red-600" />;
    } else {
      return <Minus className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    if (trend === "up") return "text-green-600";
    if (trend === "down") return "text-red-600";
    return "text-gray-600";
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return "text-green-600";
    if (confidence >= 80) return "text-blue-600";
    return "text-orange-600";
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Trending Products & Categories</h2>
        <p className="text-gray-600">AI-identified product trends based on comprehensive data analysis</p>
      </div>

      {/* Trending Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Products Trending Up</p>
                <p className="text-2xl font-bold text-green-600">5</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Social Mentions</p>
                <p className="text-2xl font-bold text-blue-600">59.4K</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Confidence</p>
                <p className="text-2xl font-bold text-purple-600">87%</p>
              </div>
              <Star className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trendingProducts.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    {getTrendIcon(item.trend, item.changePercent)}
                    <span>{item.product}</span>
                  </CardTitle>
                  <CardDescription>{item.category}</CardDescription>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${getTrendColor(item.trend)}`}>
                    {item.trend === "up" ? "+" : ""}{item.changePercent}%
                  </p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Driving Factors:</p>
                <p className="text-sm text-gray-600">{item.reason}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Key Locations:</p>
                <div className="flex flex-wrap gap-1">
                  {item.locations.map((location, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {location}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span>{item.socialMentions.toLocaleString()} mentions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>{item.timeframe}</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Confidence Level</span>
                  <span className={`text-sm font-bold ${getConfidenceColor(item.confidence)}`}>
                    {item.confidence}%
                  </span>
                </div>
                <Progress value={item.confidence} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
