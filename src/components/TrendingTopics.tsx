
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Hash, Users, Clock, BarChart3 } from "lucide-react";
import { useQuery } from '@tanstack/react-query';

interface TrendingTopic {
  id: string;
  keyword: string;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
  volume: number;
  category: string;
  relevanceScore: number;
  timeframe: string;
  relatedProducts: string[];
  source: string;
}

const TrendingTopics = () => {
  // Simulated trending data - in real app, this would come from APIs like Google Trends, Twitter API, etc.
  const mockTrendingData: TrendingTopic[] = [
    {
      id: '1',
      keyword: 'Spring Break Travel',
      trend: 'up',
      changePercent: 45,
      volume: 125000,
      category: 'Travel & Tourism',
      relevanceScore: 92,
      timeframe: 'Last 24h',
      relatedProducts: ['Sunscreen', 'Beach Gear', 'Travel Accessories'],
      source: 'Google Trends'
    },
    {
      id: '2',
      keyword: 'Weather Emergency Kit',
      trend: 'up',
      changePercent: 67,
      volume: 89000,
      category: 'Emergency Preparedness',
      relevanceScore: 88,
      timeframe: 'Last 12h',
      relatedProducts: ['Flashlights', 'Batteries', 'First Aid'],
      source: 'Social Media'
    },
    {
      id: '3',
      keyword: 'Home Office Setup',
      trend: 'stable',
      changePercent: 5,
      volume: 156000,
      category: 'Work From Home',
      relevanceScore: 75,
      timeframe: 'Last 7d',
      relatedProducts: ['Desk Chairs', 'Monitors', 'Keyboards'],
      source: 'Search Trends'
    },
    {
      id: '4',
      keyword: 'Outdoor Festival Gear',
      trend: 'up',
      changePercent: 38,
      volume: 78000,
      category: 'Entertainment',
      relevanceScore: 84,
      timeframe: 'Last 3d',
      relatedProducts: ['Portable Chairs', 'Coolers', 'Tents'],
      source: 'Social Media'
    },
    {
      id: '5',
      keyword: 'Winter Clearance',
      trend: 'down',
      changePercent: -25,
      volume: 34000,
      category: 'Seasonal',
      relevanceScore: 65,
      timeframe: 'Last 7d',
      relatedProducts: ['Winter Coats', 'Boots', 'Heaters'],
      source: 'Retail Analytics'
    }
  ];

  const { data: trendingData = mockTrendingData, isLoading } = useQuery({
    queryKey: ['trendingTopics'],
    queryFn: async () => {
      // In a real app, this would call actual trending APIs
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      return mockTrendingData;
    },
    refetchInterval: 10 * 60 * 1000, // Refetch every 10 minutes
  });

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-600" />;
    return <BarChart3 className="w-4 h-4 text-gray-600" />;
  };

  const getTrendColor = (trend: string) => {
    if (trend === 'up') return 'text-green-600';
    if (trend === 'down') return 'text-red-600';
    return 'text-gray-600';
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1000000) return `${(volume / 1000000).toFixed(1)}M`;
    if (volume >= 1000) return `${(volume / 1000).toFixed(1)}K`;
    return volume.toString();
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Trending Topics</h2>
        <p className="text-gray-600 text-sm sm:text-base">Real-time trending topics affecting consumer behavior</p>
      </div>

      {/* Trending Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Trending Up</p>
                <p className="text-2xl font-bold text-green-600">
                  {trendingData.filter(t => t.trend === 'up').length}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Volume</p>
                <p className="text-2xl font-bold text-blue-600">
                  {formatVolume(trendingData.reduce((sum, t) => sum + t.volume, 0))}
                </p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Relevance</p>
                <p className="text-2xl font-bold text-purple-600">
                  {Math.round(trendingData.reduce((sum, t) => sum + t.relevanceScore, 0) / trendingData.length)}%
                </p>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Categories</p>
                <p className="text-2xl font-bold text-orange-600">
                  {new Set(trendingData.map(t => t.category)).size}
                </p>
              </div>
              <Hash className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Trending Topics Grid */}
      <div className="grid gap-4">
        {isLoading && (
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
                <span>Loading trending topics...</span>
              </div>
            </CardContent>
          </Card>
        )}

        {trendingData.map((topic) => (
          <Card key={topic.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                    <div className="flex items-center space-x-2">
                      {getTrendIcon(topic.trend)}
                      <h3 className="font-semibold text-base sm:text-lg">{topic.keyword}</h3>
                    </div>
                    <Badge variant="secondary" className="text-xs w-fit">
                      {topic.category}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Change</p>
                      <p className={`font-bold ${getTrendColor(topic.trend)}`}>
                        {topic.trend === 'up' ? '+' : topic.trend === 'down' ? '' : ''}{topic.changePercent}%
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Volume</p>
                      <p className="font-bold">{formatVolume(topic.volume)}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Timeframe</p>
                      <p className="text-gray-600">{topic.timeframe}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Source</p>
                      <p className="text-gray-600">{topic.source}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Related Products:</p>
                    <div className="flex flex-wrap gap-1">
                      {topic.relatedProducts.map((product, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Relevance Score</span>
                      <span className="text-sm font-bold text-blue-600">{topic.relevanceScore}%</span>
                    </div>
                    <Progress value={topic.relevanceScore} className="h-2" />
                  </div>
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
