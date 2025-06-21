
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingUp, Calendar, Cloud, Users, MapPin, Bell, Target, BarChart3, Zap, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import ProcurementAlerts from "@/components/ProcurementAlerts";
import DataSources from "@/components/DataSources";
import DemandChart from "@/components/DemandChart";
import LocationInsights from "@/components/LocationInsights";
import TrendingProducts from "@/components/TrendingProducts";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300">
      {/* Enhanced Header with glassmorphism effect */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SmartStock AI
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Context-Aware Procurement Intelligence</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-600 dark:text-green-400 border-green-200 dark:border-green-600 bg-green-50 dark:bg-green-900/20 animate-pulse">
                <Zap className="w-3 h-3 mr-1" />
                Live Monitoring
              </Badge>
              <Button variant="outline" size="sm" className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                <Bell className="w-4 h-4 mr-2" />
                Alerts ({activeAlerts})
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Enhanced Key Metrics with animated gradients */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Active Alerts</p>
                  <p className="text-4xl font-bold tracking-tight">{activeAlerts}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-blue-200 mr-1" />
                    <span className="text-blue-200 text-xs">+2.5% from yesterday</span>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-blue-100" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm font-medium">Prediction Accuracy</p>
                  <p className="text-4xl font-bold tracking-tight">{accuracyScore}%</p>
                  <div className="flex items-center mt-2">
                    <Sparkles className="w-4 h-4 text-emerald-200 mr-1" />
                    <span className="text-emerald-200 text-xs">Industry leading</span>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-full">
                  <Target className="w-8 h-8 text-emerald-100" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Weekly Savings</p>
                  <p className="text-4xl font-bold tracking-tight">$2.3M</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-purple-200 mr-1" />
                    <span className="text-purple-200 text-xs">+18% increase</span>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-full">
                  <TrendingUp className="w-8 h-8 text-purple-100" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 via-amber-600 to-yellow-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Locations Monitored</p>
                  <p className="text-4xl font-bold tracking-tight">4,743</p>
                  <div className="flex items-center mt-2">
                    <MapPin className="w-4 h-4 text-orange-200 mr-1" />
                    <span className="text-orange-200 text-xs">Global coverage</span>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-full">
                  <MapPin className="w-8 h-8 text-orange-100" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Main Content with better spacing */}
        <Tabs defaultValue="alerts" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-1 rounded-xl shadow-lg">
            <TabsTrigger value="alerts" className="data-[state=active]:bg-white data-[state=active]:shadow-md dark:data-[state=active]:bg-gray-700 rounded-lg transition-all duration-200">Smart Alerts</TabsTrigger>
            <TabsTrigger value="sources" className="data-[state=active]:bg-white data-[state=active]:shadow-md dark:data-[state=active]:bg-gray-700 rounded-lg transition-all duration-200">Data Sources</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-white data-[state=active]:shadow-md dark:data-[state=active]:bg-gray-700 rounded-lg transition-all duration-200">Analytics</TabsTrigger>
            <TabsTrigger value="locations" className="data-[state=active]:bg-white data-[state=active]:shadow-md dark:data-[state=active]:bg-gray-700 rounded-lg transition-all duration-200">Locations</TabsTrigger>
            <TabsTrigger value="trending" className="data-[state=active]:bg-white data-[state=active]:shadow-md dark:data-[state=active]:bg-gray-700 rounded-lg transition-all duration-200">Trending</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts" className="space-y-6">
            <ProcurementAlerts />
          </TabsContent>

          <TabsContent value="sources" className="space-y-6">
            <DataSources />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <DemandChart />
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-t-lg">
                  <CardTitle className="flex items-center text-gray-800 dark:text-gray-200">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                    Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overstock Reduction</span>
                      <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">73%</span>
                    </div>
                    <Progress value={73} className="h-3 bg-gray-100 dark:bg-gray-700" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Stockout Prevention</span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">89%</span>
                    </div>
                    <Progress value={89} className="h-3 bg-gray-100 dark:bg-gray-700" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Revenue Impact</span>
                      <span className="text-sm font-bold text-purple-600 dark:text-purple-400">+12.5%</span>
                    </div>
                    <Progress value={85} className="h-3 bg-gray-100 dark:bg-gray-700" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="locations" className="space-y-6">
            <LocationInsights />
          </TabsContent>

          <TabsContent value="trending" className="space-y-6">
            <TrendingProducts />
          </TabsContent>
        </Tabs>

        {/* Enhanced Footer with glassmorphism */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 p-8 mt-12 shadow-xl">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Revolutionary Retail Intelligence
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              SmartStock AI combines traditional sales data with real-time local intelligence to predict demand with unprecedented accuracy. 
              By analyzing local events, social trends, weather patterns, and hyperlocal news, we help retailers optimize inventory 
              and maximize profitability while minimizing waste.
            </p>
            <div className="flex items-center justify-center mt-6 space-x-2">
              <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-600">
                AI-Powered
              </Badge>
              <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-600">
                Real-time
              </Badge>
              <Badge variant="outline" className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-600">
                Context-Aware
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
