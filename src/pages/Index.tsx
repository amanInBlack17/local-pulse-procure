
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingUp, Calendar, Cloud, Users, MapPin, Bell, Target, BarChart3, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import ProcurementAlerts from "@/components/ProcurementAlerts";
import DataSources from "@/components/DataSources";
import DemandChart from "@/components/DemandChart";
import LocationInsights from "@/components/LocationInsights";
import TrendingProducts from "@/components/TrendingProducts";
import LocalNews from "@/components/LocalNews";
import TrendingTopics from "@/components/TrendingTopics";

const Index = () => {
  const [activeAlerts, setActiveAlerts] = useState(12);
  const [accuracyScore, setAccuracyScore] = useState(87);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setActiveAlerts(prev => prev + Math.floor(Math.random() * 3) - 1);
      setAccuracyScore(prev => Math.max(80, Math.min(95, prev + Math.floor(Math.random() * 3) - 1)));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">SmartStock AI</h1>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Context-Aware Procurement Intelligence</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
              <Badge variant="outline" className="text-green-600 border-green-200 text-xs sm:text-sm bg-green-50 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                <Zap className="w-3 h-3 mr-1" />
                Live Monitoring
              </Badge>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <Bell className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Alerts</span> ({activeAlerts})
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Active Alerts</p>
                  <p className="text-2xl sm:text-3xl font-bold">{activeAlerts}</p>
                </div>
                <AlertTriangle className="w-6 sm:w-8 h-6 sm:h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Prediction Accuracy</p>
                  <p className="text-2xl sm:text-3xl font-bold">{accuracyScore}%</p>
                </div>
                <Target className="w-6 sm:w-8 h-6 sm:h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Weekly Savings</p>
                  <p className="text-2xl sm:text-3xl font-bold">$2.3M</p>
                </div>
                <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Locations Monitored</p>
                  <p className="text-2xl sm:text-3xl font-bold">4,743</p>
                </div>
                <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content with Improved Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <Tabs defaultValue="alerts" className="w-full">
            {/* Enhanced Tab Navigation */}
            <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-t-lg">
              <div className="px-4 sm:px-6 py-4">
                <div className="overflow-x-auto">
                  <TabsList className="grid w-full min-w-max grid-cols-7 bg-white dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600 rounded-lg p-1 gap-1">
                    <TabsTrigger 
                      value="alerts" 
                      className="text-xs sm:text-sm py-2.5 px-3 sm:px-4 whitespace-nowrap data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Smart Alerts
                    </TabsTrigger>
                    <TabsTrigger 
                      value="sources" 
                      className="text-xs sm:text-sm py-2.5 px-3 sm:px-4 whitespace-nowrap data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Data Sources
                    </TabsTrigger>
                    <TabsTrigger 
                      value="analytics" 
                      className="text-xs sm:text-sm py-2.5 px-3 sm:px-4 whitespace-nowrap data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Analytics
                    </TabsTrigger>
                    <TabsTrigger 
                      value="locations" 
                      className="text-xs sm:text-sm py-2.5 px-3 sm:px-4 whitespace-nowrap data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Locations
                    </TabsTrigger>
                    <TabsTrigger 
                      value="trending" 
                      className="text-xs sm:text-sm py-2.5 px-3 sm:px-4 whitespace-nowrap data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Products
                    </TabsTrigger>
                    <TabsTrigger 
                      value="news" 
                      className="text-xs sm:text-sm py-2.5 px-3 sm:px-4 whitespace-nowrap data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Local News
                    </TabsTrigger>
                    <TabsTrigger 
                      value="topics" 
                      className="text-xs sm:text-sm py-2.5 px-3 sm:px-4 whitespace-nowrap data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Trending
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>
            </div>

            {/* Tab Content with Better Spacing */}
            <div className="p-4 sm:p-6">
              <TabsContent value="alerts" className="mt-0">
                <ProcurementAlerts />
              </TabsContent>

              <TabsContent value="sources" className="mt-0">
                <DataSources />
              </TabsContent>

              <TabsContent value="analytics" className="mt-0">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
                  <DemandChart />
                  <Card className="shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <BarChart3 className="w-5 h-5 mr-2" />
                        Performance Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Overstock Reduction</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">73%</span>
                        </div>
                        <Progress value={73} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Stockout Prevention</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">89%</span>
                        </div>
                        <Progress value={89} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Revenue Impact</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">+12.5%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="locations" className="mt-0">
                <LocationInsights />
              </TabsContent>

              <TabsContent value="trending" className="mt-0">
                <TrendingProducts />
              </TabsContent>

              <TabsContent value="news" className="mt-0">
                <LocalNews />
              </TabsContent>

              <TabsContent value="topics" className="mt-0">
                <TrendingTopics />
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-lg p-4 sm:p-6 mt-6 sm:mt-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Revolutionary Retail Intelligence
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
              SmartStock AI combines traditional sales data with real-time local intelligence to predict demand with unprecedented accuracy. 
              By analyzing local events, social trends, weather patterns, and hyperlocal news, we help retailers optimize inventory 
              and maximize profitability while minimizing waste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
