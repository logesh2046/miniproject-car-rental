"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Navigation,
  RefreshCw,
  Eye,
  Phone,
  Clock,
  Car,
  AlertCircle,
  CheckCircle,
  Search,
  Filter,
  Settings
} from "lucide-react"

interface Vehicle {
  id: string
  name: string
  customerName: string
  customerPhone: string
  currentLocation: string
  coordinates: { lat: number; lng: number }
  status: "active" | "idle" | "maintenance" | "emergency"
  lastUpdate: string
  speed: number
  direction: string
  batteryLevel?: number
  fuelLevel?: number
}

interface GPSTrackingProps {
  vehicles: Vehicle[]
  onVehicleSelect?: (vehicle: Vehicle) => void
  onEmergencyCall?: (vehicle: Vehicle) => void
}

export function GPSTracking({ vehicles, onVehicleSelect, onEmergencyCall }: GPSTrackingProps) {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isTracking, setIsTracking] = useState(true)

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || vehicle.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Active</Badge>
      case "idle":
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="h-3 w-3 mr-1" />Idle</Badge>
      case "maintenance":
        return <Badge className="bg-blue-100 text-blue-800"><Settings className="h-3 w-3 mr-1" />Maintenance</Badge>
      case "emergency":
        return <Badge className="bg-red-100 text-red-800"><AlertCircle className="h-3 w-3 mr-1" />Emergency</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500"
      case "idle": return "bg-yellow-500"
      case "maintenance": return "bg-blue-500"
      case "emergency": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-foreground">GPS Tracking</h2>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isTracking ? "bg-green-500" : "bg-gray-400"}`}></div>
            <span className="text-sm text-muted-foreground">
              {isTracking ? "Live Tracking" : "Tracking Paused"}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map View */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Live Tracking Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Google Maps Integration Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">Google Maps Integration</p>
                    <p className="text-sm text-muted-foreground">
                      Real-time GPS tracking of all active vehicles
                    </p>
                    <div className="mt-4 space-y-2">
                      {vehicles.slice(0, 3).map((vehicle, index) => (
                        <div key={vehicle.id} className="flex items-center gap-2 text-sm">
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(vehicle.status)}`}></div>
                          <span>{vehicle.name} - {vehicle.currentLocation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Map Controls Overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button size="sm" variant="secondary">
                    <Navigation className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vehicle List */}
        <div className="space-y-4">
          {/* Search and Filter */}
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search vehicles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={statusFilter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setStatusFilter("all")}
                  >
                    All
                  </Button>
                  <Button
                    variant={statusFilter === "active" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setStatusFilter("active")}
                  >
                    Active
                  </Button>
                  <Button
                    variant={statusFilter === "emergency" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setStatusFilter("emergency")}
                  >
                    Emergency
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle List */}
          <Card>
            <CardHeader>
              <CardTitle>Active Vehicles ({filteredVehicles.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedVehicle?.id === vehicle.id ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                    }`}
                    onClick={() => {
                      setSelectedVehicle(vehicle)
                      onVehicleSelect?.(vehicle)
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(vehicle.status)}`}></div>
                        <span className="font-medium text-sm">{vehicle.name}</span>
                      </div>
                      {getStatusBadge(vehicle.status)}
                    </div>
                    
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p>Customer: {vehicle.customerName}</p>
                      <p>Location: {vehicle.currentLocation}</p>
                      <p>Last Update: {vehicle.lastUpdate}</p>
                      {vehicle.speed > 0 && <p>Speed: {vehicle.speed} km/h</p>}
                    </div>

                    <div className="flex gap-1 mt-3">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Navigation className="h-3 w-3 mr-1" />
                        Navigate
                      </Button>
                      {vehicle.status === "emergency" && (
                        <Button 
                          size="sm" 
                          className="flex-1 bg-red-500 hover:bg-red-600"
                          onClick={() => onEmergencyCall?.(vehicle)}
                        >
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Selected Vehicle Details */}
      {selectedVehicle && (
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Vehicle Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vehicle:</span>
                      <span>{selectedVehicle.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      {getStatusBadge(selectedVehicle.status)}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span>{selectedVehicle.currentLocation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Speed:</span>
                      <span>{selectedVehicle.speed} km/h</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Customer Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Name:</span>
                      <span>{selectedVehicle.customerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone:</span>
                      <span>{selectedVehicle.customerPhone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Last Update:</span>
                      <span>{selectedVehicle.lastUpdate}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button className="w-full" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Customer
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh Location
                    </Button>
                    {selectedVehicle.status === "emergency" && (
                      <Button className="w-full bg-red-500 hover:bg-red-600" size="sm">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Emergency Response
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
