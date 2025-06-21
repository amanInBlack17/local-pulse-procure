
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingUp, Calendar, Cloud, Users, MapPin, Bell, Target, BarChart3, Zap } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SmartStock AI</h1>
                <p className="text-sm text-gray-500">Context-Aware Procurement Intelligence</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-600 border-green-200">
                <Zap className="w-3 h-3 mr-1" />
                Live Monitoring
              </Badge>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Alerts ({activeAlerts})
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Active Alerts</p>
                  <p className="text-3xl font-bold">{activeAlerts}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Prediction Accuracy</p>
                  <p className="text-3xl font-bold">{accuracyScore}%</p>
                </div>
                <Target className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Weekly Savings</p>
                  <p className="text-3xl font-bold">$2.3M</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Locations Monitored</p>
                  <p className="text-3xl font-bold">4,743</p>
                </div>
                <MapPin className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="alerts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="alerts">Smart Alerts</TabsTrigger>
            <TabsTrigger value="sources">Data Sources</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts">
            <ProcurementAlerts />
          </TabsContent>

          <TabsContent value="sources">
            <DataSources />
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DemandChart />
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Overstock Reduction</span>
                      <span className="text-sm text-gray-500">73%</span>
                    </div>
                    <Progress value={73} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Stockout Prevention</span>
                      <span className="text-sm text-gray-500">89%</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Revenue Impact</span>
                      <span className="text-sm text-gray-500">+12.5%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="locations">
            <LocationInsights />
          </TabsContent>

          <TabsContent value="trending">
            <TrendingProducts />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="bg-white rounded-lg border p-6 mt-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Revolutionary Retail Intelligence
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
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
