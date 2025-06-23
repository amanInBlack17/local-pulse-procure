
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, ExternalLink, Users, Hash, BarChart3 } from "lucide-react";

interface TrendingTopic {
  id: string;
  topic: string;
  mentions: number;
  sentiment: 'positive' | 'neutral' | 'negative';
  category: string;
  impact: string;
  relatedProducts: string[];
}

const TrendingTopics = () => {
  const trendingData: TrendingTopic[] = [
    {
      id: 'trend-1',
      topic: 'Sustainable Packaging',
      mentions: 15420,
      sentiment: 'positive',
      category: 'Environmental',
      impact: 'High demand for eco-friendly packaging solutions',
      relatedProducts: ['Biodegradable containers', 'Recyclable bags', 'Compostable cups']
    },
    {
      id: 'trend-2',
      topic: 'Remote Work Essentials',
      mentions: 12850,
      sentiment: 'positive',
      category: 'Technology',
      impact: 'Increased demand for home office supplies',
      relatedProducts: ['Ergonomic chairs', 'Standing desks', 'Webcams', 'Headsets']
    },
    {
      id: 'trend-3',
      topic: 'Health & Wellness',
      mentions: 11340,
      sentiment: 'positive',
      category: 'Lifestyle',
      impact: 'Growing market for health-focused products',
      relatedProducts: ['Fitness equipment', 'Supplements', 'Air purifiers']
    },
    {
      id: 'trend-4',
      topic: 'Supply Chain Disruption',
      mentions: 8920,
      sentiment: 'negative',
      category: 'Business',
      impact: 'Potential shortages in electronics and automotive',
      relatedProducts: ['Semiconductors', 'Electronics', 'Auto parts']
    },
    {
      id: 'trend-5',
      topic: 'Electric Vehicles',
      mentions: 7630,
      sentiment: 'positive',
      category: 'Automotive',
      impact: 'Surge in EV-related product demand',
      relatedProducts: ['Charging stations', 'EV accessories', 'Batteries']
    }
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800';
      case 'negative': return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800';
      case 'neutral': return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800';
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600';
    }
  };

  const formatMentions = (mentions: number) => {
    if (mentions >= 1000) {
      return `${(mentions / 1000).toFixed(1)}K`;
    }
    return mentions.toString();
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Trending Topics</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Social media and market trend analysis</p>
        </div>
        <Button variant="outline" size="sm">
          <BarChart3 className="w-4 h-4 mr-2" />
          View Analytics
        </Button>
      </div>

      {/* Trending Grid */}
      <div className="grid gap-4 sm:gap-6">
        {trendingData.map((trend, index) => (
          <Card key={trend.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">#{index + 1}</span>
                      <h3 className="font-semibold text-lg sm:text-xl">{trend.topic}</h3>
                    </div>
                    <Badge className={`${getSentimentColor(trend.sentiment)} text-xs w-fit`}>
                      {trend.sentiment.toUpperCase()}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {formatMentions(trend.mentions)} mentions
                    </div>
                    <div className="flex items-center">
                      <Hash className="w-4 h-4 mr-1" />
                      {trend.category}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{trend.impact}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Related Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trend.relatedProducts.map((product, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 w-full lg:w-auto">
                  <Button variant="outline" size="sm" className="w-full lg:w-auto">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Trend
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full lg:w-auto">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
