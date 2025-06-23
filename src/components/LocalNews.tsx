
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Newspaper, MapPin, Clock, ExternalLink, RefreshCw } from "lucide-react";

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
  const [location, setLocation] = useState('Dallas, TX');

  const mockNewsData: NewsItem[] = [
    {
      id: 'news-1',
      title: 'Major Construction Project Begins on Main Street',
      description: 'A new infrastructure project will affect traffic patterns and potentially impact local business foot traffic for the next 6 months.',
      url: '#',
      publishedAt: '2024-06-23T08:00:00Z',
      source: 'Dallas Morning News',
      location: 'Dallas, TX',
      category: 'Infrastructure',
      impact: 'high'
    },
    {
      id: 'news-2',
      title: 'Local Tech Company Announces Major Expansion',
      description: 'TechCorp plans to hire 500 new employees in the downtown area, potentially increasing demand for nearby services.',
      url: '#',
      publishedAt: '2024-06-23T06:30:00Z',
      source: 'Business Journal',
      location: 'Dallas, TX',
      category: 'Business',
      impact: 'medium'
    },
    {
      id: 'news-3',
      title: 'Weekend Festival Expected to Draw Large Crowds',
      description: 'The annual summer festival is expected to bring over 50,000 visitors to the downtown area this weekend.',
      url: '#',
      publishedAt: '2024-06-22T14:15:00Z',
      source: 'City Events',
      location: 'Dallas, TX',
      category: 'Events',
      impact: 'high'
    },
    {
      id: 'news-4',
      title: 'New Shopping Center Opens in Suburban Area',
      description: 'A major retail development opens with 30 stores, potentially affecting shopping patterns in the region.',
      url: '#',
      publishedAt: '2024-06-22T10:00:00Z',
      source: 'Retail News',
      location: 'Dallas, TX',
      category: 'Retail',
      impact: 'medium'
    },
    {
      id: 'news-5',
      title: 'Public Transit Route Changes Announced',
      description: 'Bus route modifications will affect accessibility to several commercial districts starting next month.',
      url: '#',
      publishedAt: '2024-06-21T16:45:00Z',
      source: 'Transit Authority',
      location: 'Dallas, TX',
      category: 'Transportation',
      impact: 'low'
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800';
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800';
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600';
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

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Local News Intelligence</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Real-time local news affecting business operations</p>
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Input
            placeholder="Location (e.g., Dallas, TX)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full sm:w-48"
          />
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid gap-4">
        {mockNewsData.map((item: NewsItem) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                    <Badge className={`${getImpactColor(item.impact)} text-xs w-fit`}>
                      {item.impact.toUpperCase()} IMPACT
                    </Badge>
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
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
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base line-clamp-2">{item.description}</p>
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
      </div>
    </div>
  );
};

export default LocalNews;
