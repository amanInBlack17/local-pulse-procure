
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Newspaper, MapPin, Clock, ExternalLink, RefreshCw } from "lucide-react";
import { useQuery } from '@tanstack/react-query';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: string;
  location: string;
  category: string;
  impact: 'high' | 'medium' | 'low';
}

const LocalNews = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('newsApiKey') || '');
  const [location, setLocation] = useState('Dallas, TX');

  const { data: newsData = [], isLoading, error, refetch } = useQuery({
    queryKey: ['localNews', location, apiKey],
    queryFn: async () => {
      if (!apiKey) return [];
      
      // Simulated API call - replace with actual News API call
      const response = await fetch(`https://newsapi.org/v2/everything?q=${location}&sortBy=publishedAt&apiKey=${apiKey}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      
      const data = await response.json();
      
      return data.articles?.slice(0, 10).map((article: any, index: number) => ({
        id: `news-${index}`,
        title: article.title,
        description: article.description,
        url: article.url,
        publishedAt: article.publishedAt,
        source: article.source.name,
        location: location,
        category: 'General',
        impact: index % 3 === 0 ? 'high' : index % 2 === 0 ? 'medium' : 'low'
      })) || [];
    },
    enabled: !!apiKey,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  const handleApiKeyChange = (key: string) => {
    setApiKey(key);
    localStorage.setItem('newsApiKey', key);
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  if (!apiKey) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Newspaper className="w-5 h-5 mr-2" />
            Local News Intelligence
          </CardTitle>
          <CardDescription>
            Enter your News API key to access local news data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="password"
            placeholder="Enter News API Key"
            value={apiKey}
            onChange={(e) => handleApiKeyChange(e.target.value)}
          />
          <p className="text-sm text-gray-600">
            Get your free API key from <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">newsapi.org</a>
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Local News Intelligence</h2>
          <p className="text-gray-600 text-sm sm:text-base">Real-time local news affecting business operations</p>
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Input
            placeholder="Location (e.g., Dallas, TX)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full sm:w-48"
          />
          <Button variant="outline" size="sm" onClick={() => refetch()}>
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid gap-4">
        {isLoading && (
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Loading local news...</span>
              </div>
            </CardContent>
          </Card>
        )}

        {error && (
          <Card>
            <CardContent className="p-6">
              <p className="text-red-600">Error loading news: {error.message}</p>
            </CardContent>
          </Card>
        )}

        {newsData.map((item: NewsItem) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                    <Badge className={`${getImpactColor(item.impact)} text-xs w-fit`}>
                      {item.impact.toUpperCase()} IMPACT
                    </Badge>
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {item.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {formatTime(item.publishedAt)}
                      </div>
                      <span>{item.source}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-base sm:text-lg leading-tight">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base line-clamp-2">{item.description}</p>
                </div>
                
                <Button variant="outline" size="sm" asChild className="w-full lg:w-auto">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read More
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {newsData.length === 0 && !isLoading && !error && (
          <Card>
            <CardContent className="p-6 text-center">
              <Newspaper className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">No local news found for {location}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LocalNews;
