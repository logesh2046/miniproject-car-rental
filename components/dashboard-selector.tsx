"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Home,
  Car,
  Calendar,
  Shield,
  Navigation,
  Users,
  Settings,
  Bell,
  TrendingUp,
  MapPin,
  Phone
} from "lucide-react"
import Link from "next/link"

interface DashboardSelectorProps {
  userRole: "customer" | "admin"
  currentPath?: string
}

export function DashboardSelector({ userRole, currentPath }: DashboardSelectorProps) {
  const [selectedDashboard, setSelectedDashboard] = useState(userRole)

  const customerQuickActions = [
    {
      title: "My Bookings",
      description: "View and manage your reservations",
      icon: Calendar,
      href: "/customer-dashboard?tab=bookings",
      color: "text-blue-600"
    },
    {
      title: "Favorites",
      description: "Your saved favorite cars",
      icon: Car,
      href: "/customer-dashboard?tab=favorites",
      color: "text-red-600"
    },
    {
      title: "Booking History",
      description: "View your past rentals",
      icon: Calendar,
      href: "/customer-dashboard?tab=history",
      color: "text-green-600"
    },
    {
      title: "Profile Settings",
      description: "Manage your account",
      icon: Settings,
      href: "/customer-dashboard?tab=profile",
      color: "text-purple-600"
    }
  ]

  const adminQuickActions = [
    {
      title: "Fleet Management",
      description: "Manage your vehicle fleet",
      icon: Car,
      href: "/admin-dashboard?tab=fleet",
      color: "text-blue-600"
    },
    {
      title: "Bookings",
      description: "Manage all reservations",
      icon: Calendar,
      href: "/admin-dashboard?tab=bookings",
      color: "text-green-600"
    },
    {
      title: "Emergency Contacts",
      description: "Manage emergency contacts",
      icon: Shield,
      href: "/admin-dashboard?tab=emergency",
      color: "text-red-600"
    },
    {
      title: "GPS Tracking",
      description: "Track vehicles in real-time",
      icon: Navigation,
      href: "/admin-tracking",
      color: "text-orange-600"
    },
    {
      title: "Analytics",
      description: "View reports and insights",
      icon: TrendingUp,
      href: "/admin-dashboard?tab=analytics",
      color: "text-purple-600"
    }
  ]

  const quickActions = userRole === "admin" ? adminQuickActions : customerQuickActions

  return (
    <div className="space-y-6">
      {/* Dashboard Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {userRole === "admin" ? "Admin Dashboard" : "My Dashboard"}
        </h1>
        <p className="text-muted-foreground">
          {userRole === "admin" 
            ? "Manage your car rental business" 
            : "Manage your bookings and preferences"
          }
        </p>
        <Badge variant="secondary" className="mt-2">
          {userRole === "admin" ? "Administrator" : "Customer"}
        </Badge>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickActions.map((action, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
            <Link href={action.href}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-muted ${action.color}`}>
                    <action.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {/* Role-specific Information */}
      {userRole === "admin" && (
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center text-orange-800">
              <Shield className="h-5 w-5 mr-2" />
              Admin Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-800">Emergency Management</h4>
                <p className="text-sm text-orange-700">
                  Access emergency contacts and GPS tracking for customer safety.
                </p>
                <Button size="sm" variant="outline" className="border-orange-300 text-orange-700" asChild>
                  <Link href="/admin-dashboard?tab=emergency">Emergency Contacts</Link>
                </Button>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-800">Real-time Tracking</h4>
                <p className="text-sm text-orange-700">
                  Monitor all active vehicles with GPS tracking and alerts.
                </p>
                <Button size="sm" variant="outline" className="border-orange-300 text-orange-700" asChild>
                  <Link href="/admin-tracking">GPS Tracking</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {userRole === "customer" && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-800">
              <Home className="h-5 w-5 mr-2" />
              Customer Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-800">24/7 Support</h4>
                <p className="text-sm text-blue-700">
                  Get help anytime with our round-the-clock customer support.
                </p>
                <Button size="sm" variant="outline" className="border-blue-300 text-blue-700" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-800">Emergency Assistance</h4>
                <p className="text-sm text-blue-700">
                  Emergency roadside assistance available 24/7 for your safety.
                </p>
                <Button size="sm" variant="outline" className="border-blue-300 text-blue-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency: +91 98765 43210
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
