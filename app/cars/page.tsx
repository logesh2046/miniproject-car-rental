"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Car, Star, Users, Fuel, Settings, MapPin, Filter, Search } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const cars = [
  {
    id: 1,
    name: "BMW 3 Series",
    type: "Luxury Sedan",
<<<<<<< HEAD
    price: 89,
    originalPrice: 99,
=======
    price: 1889,
    originalPrice: 2999,
>>>>>>> aa15dce (updatedfronted)
    image: "/bmw-3-series-luxury-sedan.jpg",
    rating: 4.8,
    reviews: 124,
    features: ["Automatic", "5 Seats", "Premium Audio", "GPS"],
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
<<<<<<< HEAD
    location: "Downtown",
=======
    location: "coimbatore",
>>>>>>> aa15dce (updatedfronted)
    available: true,
  },
  {
    id: 2,
    name: "Toyota Camry",
    type: "Midsize Sedan",
<<<<<<< HEAD
    price: 59,
    originalPrice: 69,
=======
    price: 2000,
    originalPrice: 2699,
>>>>>>> aa15dce (updatedfronted)
    image: "/toyota-camry-midsize-sedan.jpg",
    rating: 4.6,
    reviews: 89,
    features: ["Automatic", "5 Seats", "Fuel Efficient", "Bluetooth"],
    fuel: "Hybrid",
    transmission: "Automatic",
    seats: 5,
<<<<<<< HEAD
    location: "Airport",
=======
    location: "Coimbatore",
>>>>>>> aa15dce (updatedfronted)
    available: true,
  },
  {
    id: 3,
    name: "Range Rover Sport",
    type: "Luxury SUV",
<<<<<<< HEAD
    price: 149,
    originalPrice: 169,
=======
    price: 4999,
    originalPrice: 6000,
>>>>>>> aa15dce (updatedfronted)
    image: "/range-rover-sport-luxury-suv.jpg",
    rating: 4.9,
    reviews: 156,
    features: ["AWD", "7 Seats", "Premium Interior", "Panoramic Roof"],
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 7,
<<<<<<< HEAD
    location: "Downtown",
=======
    location: "Coimbatore airport",
>>>>>>> aa15dce (updatedfronted)
    available: true,
  },
  {
    id: 4,
    name: "Honda Civic",
    type: "Compact Car",
<<<<<<< HEAD
    price: 45,
    originalPrice: 55,
=======
    price: 1500,
    originalPrice: 1999,
>>>>>>> aa15dce (updatedfronted)
    image: "/honda-civic-compact-car.png",
    rating: 4.4,
    reviews: 67,
    features: ["Manual", "5 Seats", "Fuel Efficient", "USB Ports"],
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
<<<<<<< HEAD
    location: "City Center",
=======
    location: "Ukkadam",
>>>>>>> aa15dce (updatedfronted)
    available: true,
  },
  {
    id: 5,
    name: "Mercedes C-Class",
    type: "Luxury Sedan",
<<<<<<< HEAD
    price: 95,
    originalPrice: 110,
=======
    price: 9500,
    originalPrice: 12000,
>>>>>>> aa15dce (updatedfronted)
    image: "/mercedes-c-class-luxury-sedan.jpg",
    rating: 4.7,
    reviews: 98,
    features: ["Automatic", "5 Seats", "Leather Interior", "Sunroof"],
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
<<<<<<< HEAD
    location: "Airport",
=======
    location: "Avinashi road",
>>>>>>> aa15dce (updatedfronted)
    available: false,
  },
  {
    id: 6,
    name: "Ford Explorer",
    type: "SUV",
<<<<<<< HEAD
    price: 79,
    originalPrice: 89,
=======
    price: 8799,
    originalPrice: 9999,
>>>>>>> aa15dce (updatedfronted)
    image: "/ford-explorer-suv.png",
    rating: 4.5,
    reviews: 112,
    features: ["AWD", "7 Seats", "Cargo Space", "Towing Capacity"],
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 7,
<<<<<<< HEAD
    location: "Downtown",
=======
    location: "Coimbatore",
    available: true,
  },
  {
    id: 7,
    name: "Maruti Swift",
    type: "Hatchback",
    price: 1200,
    originalPrice: 1500,
    image: "/swift.webp",
    rating: 4.3,
    reviews: 245,
    features: ["Manual", "5 Seats", "Fuel Efficient", "AC"],
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    location: "Coimbatore",
    available: true,
  },
  {
    id: 8,
    name: "Hyundai i20",
    type: "Hatchback",
    price: 1400,
    originalPrice: 1700,
    image: "/i20.webp",
    rating: 4.4,
    reviews: 189,
    features: ["Manual", "5 Seats", "Music System", "Power Steering"],
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    location: "Airport",
    available: true,
  },
  {
    id: 9,
    name: "Tata Nexon",
    type: "Compact SUV",
    price: 1800,
    originalPrice: 2200,
    image: "/nexon.webp",
    rating: 4.2,
    reviews: 156,
    features: ["Manual", "5 Seats", "Touchscreen", "Safety Features"],
    fuel: "Diesel",
    transmission: "Manual",
    seats: 5,
    location: "Ukkadam",
    available: true,
  },
  {
    id: 10,
    name: "Maruti Dzire",
    type: "Sedan",
    price: 1600,
    originalPrice: 1900,
    image: "/Dzire.webp",
    rating: 4.1,
    reviews: 203,
    features: ["Manual", "5 Seats", "Boot Space", "Mileage"],
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    location: "Coimbatore",
    available: true,
  },
  {
    id: 11,
    name: "Hyundai Creta",
    type: "SUV",
    price: 2500,
    originalPrice: 3000,
    image: "/creta.webp",
    rating: 4.5,
    reviews: 178,
    features: ["Manual", "5 Seats", "Sunroof", "Touchscreen"],
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    location: "Avinashi road",
    available: true,
  },
  {
    id: 12,
    name: "Maruti Ertiga",
    type: "MPV",
    price: 2000,
    originalPrice: 2400,
    image: "/ertiga.webp",
    rating: 4.0,
    reviews: 167,
    features: ["Manual", "7 Seats", "Spacious", "Family Car"],
    fuel: "Petrol",
    transmission: "Manual",
    seats: 7,
    location: "Coimbatore",
    available: true,
  },
  {
    id: 13,
    name: "Honda City",
    type: "Sedan",
    price: 2200,
    originalPrice: 2600,
    image: "/New-Honda-All-City.webp",
    rating: 4.6,
    reviews: 234,
    features: ["Manual", "5 Seats", "Premium", "Comfort"],
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    location: "Airport",
    available: true,
  },
  {
    id: 14,
    name: "Mahindra XUV300",
    type: "Compact SUV",
    price: 1900,
    originalPrice: 2300,
    image: "/Mahindra XUV300.webp",
    rating: 4.2,
    reviews: 145,
    features: ["Manual", "5 Seats", "Safety", "Features"],
    fuel: "Diesel",
    transmission: "Manual",
    seats: 5,
    location: "Coimbatore",
    available: true,
  },
  {
    id: 15,
    name: "Kia Seltos",
    type: "SUV",
    price: 2800,
    originalPrice: 3200,
    image: "/Kiaseltos.webp",
    rating: 4.4,
    reviews: 198,
    features: ["Manual", "5 Seats", "Premium", "Technology"],
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    location: "Ukkadam",
    available: true,
  },
  {
    id: 16,
    name: "Maruti Baleno",
    type: "Hatchback",
    price: 1300,
    originalPrice: 1600,
    image: "/suzuki-baleno.webp",
    rating: 4.3,
    reviews: 221,
    features: ["Manual", "5 Seats", "Efficient", "Reliable"],
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    location: "Coimbatore",
>>>>>>> aa15dce (updatedfronted)
    available: true,
  },
]

export default function CarsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedTransmission, setSelectedTransmission] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
<<<<<<< HEAD
  const [priceRange, setPriceRange] = useState([0, 200])
=======
  const [priceRange, setPriceRange] = useState([0, 10000])
>>>>>>> aa15dce (updatedfronted)
  const [showFilters, setShowFilters] = useState(false)

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "all" || car.type.toLowerCase().includes(selectedType.toLowerCase())
    const matchesTransmission =
      selectedTransmission === "all" || car.transmission.toLowerCase() === selectedTransmission
    const matchesLocation = selectedLocation === "all" || car.location.toLowerCase() === selectedLocation.toLowerCase()
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1]

    return matchesSearch && matchesType && matchesTransmission && matchesLocation && matchesPrice
  })

  return (
    <>
      <Navigation />
      <div className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Available Cars</h1>
            <p className="text-muted-foreground">Find the perfect car for your journey</p>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search cars by name or type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:w-auto">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Filters */}
            {showFilters && (
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Car Type</label>
                      <Select value={selectedType} onValueChange={setSelectedType}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="sedan">Sedan</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="compact">Compact</SelectItem>
                          <SelectItem value="luxury">Luxury</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Transmission</label>
                      <Select value={selectedTransmission} onValueChange={setSelectedTransmission}>
                        <SelectTrigger>
                          <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="automatic">Automatic</SelectItem>
                          <SelectItem value="manual">Manual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Location</label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Locations" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Locations</SelectItem>
                          <SelectItem value="downtown">Downtown</SelectItem>
                          <SelectItem value="airport">Airport</SelectItem>
                          <SelectItem value="city center">City Center</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm font-medium text-foreground">
                        Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                      </label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
<<<<<<< HEAD
                        max={200}
                        min={0}
                        step={10}
=======
                        max={10000}
                        min={0}
                        step={100}
>>>>>>> aa15dce (updatedfronted)
                        className="w-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredCars.length} of {cars.length} cars
            </p>
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredCars.map((car) => (
              <Card key={car.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    {!car.available && <Badge variant="destructive">Not Available</Badge>}
                    {car.originalPrice > car.price && (
                      <Badge className="bg-green-500 hover:bg-green-600 ml-2">
                        Save ₹{car.originalPrice - car.price}
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-full">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{car.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">({car.reviews})</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{car.name}</h3>
                      <p className="text-muted-foreground">{car.type}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {car.seats} seats
                      </div>
                      <div className="flex items-center">
                        <Settings className="h-4 w-4 mr-1" />
                        {car.transmission}
                      </div>
                      <div className="flex items-center">
                        <Fuel className="h-4 w-4 mr-1" />
                        {car.fuel}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {car.location}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {car.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                      {car.features.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          +{car.features.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-primary">₹{car.price}</span>
                          <span className="text-muted-foreground">/day</span>
                          {car.originalPrice > car.price && (
                            <span className="text-sm text-muted-foreground line-through">₹{car.originalPrice}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/cars/${car.id}`}>View Details</Link>
                        </Button>
                        <Button size="sm" disabled={!car.available} asChild={car.available}>
                          {car.available ? <Link href={`/booking/${car.id}`}>Book Now</Link> : "Unavailable"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          {filteredCars.length > 0 && (
            <div className="text-center">
              <Button variant="outline" size="lg">
                Load More Cars
              </Button>
            </div>
          )}

          {/* No Results */}
          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <Car className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No cars found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search criteria or filters</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedType("all")
                  setSelectedTransmission("all")
                  setSelectedLocation("all")
<<<<<<< HEAD
                  setPriceRange([0, 200])
=======
                  setPriceRange([0, 10000])
>>>>>>> aa15dce (updatedfronted)
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
