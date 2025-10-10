"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Car,
  Star,
  Users,
  Fuel,
  Settings,
  MapPin,
  Shield,
  Wifi,
  Snowflake,
  Music,
  NavigationIcon,
  Bluetooth,
  Camera,
  ArrowLeft,
  Heart,
  Share2,
  Calendar,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Mock data - in a real app, this would come from an API
const carData = {
  1: {
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
    images: [
      "/bmw-3-series-luxury-sedan.jpg",
      "/placeholder.svg?height=400&width=600&text=BMW+Interior",
      "/placeholder.svg?height=400&width=600&text=BMW+Dashboard",
      "/placeholder.svg?height=400&width=600&text=BMW+Trunk",
    ],
    rating: 4.8,
    reviews: 124,
    location: "Downtown",
    available: true,
    description:
      "Experience luxury and performance with the BMW 3 Series. This premium sedan combines elegant design with cutting-edge technology and exceptional driving dynamics.",
    specifications: {
      year: "2023",
      make: "BMW",
      model: "3 Series",
      engine: "2.0L Turbo",
      horsepower: "255 HP",
      transmission: "8-Speed Automatic",
      drivetrain: "RWD",
      fuelType: "Petrol",
      fuelEconomy: "26 city / 36 hwy mpg",
      seats: 5,
      doors: 4,
      luggage: "17 cu ft",
      color: "Mineral Grey Metallic",
    },
    features: [
      { icon: Wifi, name: "WiFi Hotspot" },
      { icon: Snowflake, name: "Climate Control" },
      { icon: Music, name: "Premium Audio" },
      { icon: NavigationIcon, name: "GPS Navigation" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "Backup Camera" },
      { icon: Shield, name: "Advanced Safety" },
      { icon: Users, name: "Leather Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
      "Additional Driver",
    ],
    policies: {
      minAge: 25,
      license: "Valid driver's license required",
      deposit: "$500 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
  2: {
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
    images: [
      "/toyota-camry-midsize-sedan.jpg",
      "/placeholder.svg?height=400&width=600&text=Toyota+Interior",
      "/placeholder.svg?height=400&width=600&text=Toyota+Dashboard",
      "/placeholder.svg?height=400&width=600&text=Toyota+Trunk",
    ],
    rating: 4.6,
    reviews: 89,
    location: "Airport",
    available: true,
    description:
      "The Toyota Camry offers excellent fuel efficiency and reliability. Perfect for both city driving and long trips with its comfortable interior and smooth ride.",
    specifications: {
      year: "2023",
      make: "Toyota",
      model: "Camry",
      engine: "2.5L Hybrid",
      horsepower: "208 HP",
      transmission: "CVT Automatic",
      drivetrain: "FWD",
      fuelType: "Hybrid",
      fuelEconomy: "51 city / 53 hwy mpg",
      seats: 5,
      doors: 4,
      luggage: "15.1 cu ft",
      color: "Silver Sky Metallic",
    },
    features: [
      { icon: Wifi, name: "WiFi Hotspot" },
      { icon: Snowflake, name: "Climate Control" },
      { icon: Music, name: "Premium Audio" },
      { icon: NavigationIcon, name: "GPS Navigation" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "Backup Camera" },
      { icon: Shield, name: "Safety Sense" },
      { icon: Users, name: "Cloth Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
      "Additional Driver",
    ],
    policies: {
      minAge: 21,
      license: "Valid driver's license required",
      deposit: "$300 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
  3: {
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
    images: [
      "/range-rover-sport-luxury-suv.jpg",
      "/placeholder.svg?height=400&width=600&text=Range+Rover+Interior",
      "/placeholder.svg?height=400&width=600&text=Range+Rover+Dashboard",
      "/placeholder.svg?height=400&width=600&text=Range+Rover+Cargo",
    ],
    rating: 4.9,
    reviews: 156,
    location: "Downtown",
    available: true,
    description:
      "Experience ultimate luxury and capability with the Range Rover Sport. This premium SUV combines off-road prowess with sophisticated comfort and cutting-edge technology.",
    specifications: {
      year: "2023",
      make: "Land Rover",
      model: "Range Rover Sport",
      engine: "3.0L Turbo",
      horsepower: "355 HP",
      transmission: "8-Speed Automatic",
      drivetrain: "AWD",
      fuelType: "Petrol",
      fuelEconomy: "19 city / 26 hwy mpg",
      seats: 7,
      doors: 5,
      luggage: "27.5 cu ft",
      color: "Fuji White",
    },
    features: [
      { icon: Wifi, name: "WiFi Hotspot" },
      { icon: Snowflake, name: "Climate Control" },
      { icon: Music, name: "Meridian Audio" },
      { icon: NavigationIcon, name: "GPS Navigation" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "360° Camera" },
      { icon: Shield, name: "Terrain Response" },
      { icon: Users, name: "Leather Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
      "Additional Driver",
    ],
    policies: {
      minAge: 25,
      license: "Valid driver's license required",
      deposit: "$1000 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
  4: {
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
    images: [
      "/honda-civic-compact-car.png",
      "/placeholder.svg?height=400&width=600&text=Honda+Interior",
      "/placeholder.svg?height=400&width=600&text=Honda+Dashboard",
      "/placeholder.svg?height=400&width=600&text=Honda+Trunk",
    ],
    rating: 4.4,
    reviews: 67,
    location: "City Center",
    available: true,
    description:
      "The Honda Civic delivers exceptional value with its fuel-efficient engine, spacious interior, and advanced safety features. Perfect for urban commuting and weekend getaways.",
    specifications: {
      year: "2023",
      make: "Honda",
      model: "Civic",
      engine: "1.5L Turbo",
      horsepower: "180 HP",
      transmission: "6-Speed Manual",
      drivetrain: "FWD",
      fuelType: "Petrol",
      fuelEconomy: "31 city / 40 hwy mpg",
      seats: 5,
      doors: 4,
      luggage: "14.8 cu ft",
      color: "Rallye Red",
    },
    features: [
      { icon: Wifi, name: "WiFi Hotspot" },
      { icon: Snowflake, name: "Climate Control" },
      { icon: Music, name: "Audio System" },
      { icon: NavigationIcon, name: "GPS Navigation" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "Backup Camera" },
      { icon: Shield, name: "Honda Sensing" },
      { icon: Users, name: "Cloth Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
      "Additional Driver",
    ],
    policies: {
      minAge: 21,
      license: "Valid driver's license required",
      deposit: "$200 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
  5: {
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
    images: [
      "/mercedes-c-class-luxury-sedan.jpg",
      "/placeholder.svg?height=400&width=600&text=Mercedes+Interior",
      "/placeholder.svg?height=400&width=600&text=Mercedes+Dashboard",
      "/placeholder.svg?height=400&width=600&text=Mercedes+Trunk",
    ],
    rating: 4.7,
    reviews: 98,
    location: "Airport",
    available: false,
    description:
      "The Mercedes C-Class represents the perfect balance of luxury and performance. With its elegant design, premium materials, and advanced technology, it delivers an exceptional driving experience.",
    specifications: {
      year: "2023",
      make: "Mercedes-Benz",
      model: "C-Class",
      engine: "2.0L Turbo",
      horsepower: "255 HP",
      transmission: "9-Speed Automatic",
      drivetrain: "RWD",
      fuelType: "Petrol",
      fuelEconomy: "24 city / 35 hwy mpg",
      seats: 5,
      doors: 4,
      luggage: "12.6 cu ft",
      color: "Obsidian Black Metallic",
    },
    features: [
      { icon: Wifi, name: "WiFi Hotspot" },
      { icon: Snowflake, name: "Climate Control" },
      { icon: Music, name: "Burmester Audio" },
      { icon: NavigationIcon, name: "GPS Navigation" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "360° Camera" },
      { icon: Shield, name: "Active Safety" },
      { icon: Users, name: "Leather Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
      "Additional Driver",
    ],
    policies: {
      minAge: 25,
      license: "Valid driver's license required",
      deposit: "$500 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
  6: {
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
    images: [
      "/ford-explorer-suv.png",
      "/placeholder.svg?height=400&width=600&text=Ford+Interior",
      "/placeholder.svg?height=400&width=600&text=Ford+Dashboard",
      "/placeholder.svg?height=400&width=600&text=Ford+Cargo",
    ],
    rating: 4.5,
    reviews: 112,
    location: "Downtown",
    available: true,
    description:
      "The Ford Explorer offers spacious seating for up to 7 passengers and impressive cargo capacity. With its powerful engine and advanced safety features, it's perfect for family adventures.",
    specifications: {
      year: "2023",
      make: "Ford",
      model: "Explorer",
      engine: "2.3L Turbo",
      horsepower: "300 HP",
      transmission: "10-Speed Automatic",
      drivetrain: "AWD",
      fuelType: "Petrol",
      fuelEconomy: "20 city / 27 hwy mpg",
      seats: 7,
      doors: 5,
      luggage: "18.2 cu ft",
      color: "Oxford White",
    },
    features: [
      { icon: Wifi, name: "WiFi Hotspot" },
      { icon: Snowflake, name: "Climate Control" },
      { icon: Music, name: "B&O Audio" },
      { icon: NavigationIcon, name: "GPS Navigation" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "360° Camera" },
      { icon: Shield, name: "Co-Pilot360" },
      { icon: Users, name: "Leather Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
      "Additional Driver",
    ],
    policies: {
      minAge: 25,
      license: "Valid driver's license required",
      deposit: "$400 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
<<<<<<< HEAD
=======
  7: {
    id: 7,
    name: "Maruti Swift",
    type: "Hatchback",
    price: 1200,
    originalPrice: 1500,
    images: [
      "/honda-civic-compact-car.png",
      "/honda-civic-compact-car.png",
      "/honda-civic-compact-car.png",
      "/honda-civic-compact-car.png",
    ],
    rating: 4.3,
    reviews: 245,
    location: "Coimbatore",
    available: true,
    description: "The Maruti Swift is India's most popular hatchback, known for its reliability, fuel efficiency, and easy maintenance. Perfect for city driving and daily commutes.",
    specifications: {
      year: "2023",
      make: "Maruti Suzuki",
      model: "Swift",
      engine: "1.2L K-Series",
      horsepower: "82 HP",
      transmission: "5-Speed Manual",
      drivetrain: "FWD",
      fuelType: "Petrol",
      fuelEconomy: "23.2 kmpl",
      seats: 5,
      doors: 4,
      luggage: "268 liters",
      color: "Pearl Arctic White",
    },
    features: [
      { icon: Music, name: "Music System" },
      { icon: Snowflake, name: "AC" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "Rear Camera" },
      { icon: Shield, name: "Safety Features" },
      { icon: Users, name: "Comfortable Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
    ],
    policies: {
      minAge: 21,
      license: "Valid driver's license required",
      deposit: "₹2000 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
  8: {
    id: 8,
    name: "Hyundai i20",
    type: "Hatchback",
    price: 1400,
    originalPrice: 1700,
    images: [
      "/honda-civic-compact-car.png",
      "/honda-civic-compact-car.png",
      "/honda-civic-compact-car.png",
      "/honda-civic-compact-car.png",
    ],
    rating: 4.4,
    reviews: 189,
    location: "Airport",
    available: true,
    description: "The Hyundai i20 offers a perfect blend of style, comfort, and technology. With its premium features and smooth ride, it's ideal for both city and highway driving.",
    specifications: {
      year: "2023",
      make: "Hyundai",
      model: "i20",
      engine: "1.2L Kappa",
      horsepower: "83 HP",
      transmission: "5-Speed Manual",
      drivetrain: "FWD",
      fuelType: "Petrol",
      fuelEconomy: "20.35 kmpl",
      seats: 5,
      doors: 4,
      luggage: "311 liters",
      color: "Polar White",
    },
    features: [
      { icon: Music, name: "Premium Audio" },
      { icon: Snowflake, name: "Climate Control" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "Rear Camera" },
      { icon: Shield, name: "Safety Features" },
      { icon: Users, name: "Premium Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
    ],
    policies: {
      minAge: 21,
      license: "Valid driver's license required",
      deposit: "₹2500 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
  9: {
    id: 9,
    name: "Tata Nexon",
    type: "Compact SUV",
    price: 1800,
    originalPrice: 2200,
    images: [
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
    ],
    rating: 4.2,
    reviews: 156,
    location: "Ukkadam",
    available: true,
    description: "The Tata Nexon is India's first 5-star safety rated car. With its bold design, advanced features, and robust build quality, it's perfect for adventurous drives.",
    specifications: {
      year: "2023",
      make: "Tata",
      model: "Nexon",
      engine: "1.5L Revotorq",
      horsepower: "110 HP",
      transmission: "6-Speed Manual",
      drivetrain: "FWD",
      fuelType: "Diesel",
      fuelEconomy: "21.5 kmpl",
      seats: 5,
      doors: 4,
      luggage: "350 liters",
      color: "Calgary White",
    },
    features: [
      { icon: Music, name: "JBL Audio" },
      { icon: Snowflake, name: "Climate Control" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "Rear Camera" },
      { icon: Shield, name: "5-Star Safety" },
      { icon: Users, name: "Premium Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
    ],
    policies: {
      minAge: 21,
      license: "Valid driver's license required",
      deposit: "₹3000 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
  10: {
    id: 10,
    name: "Maruti Dzire",
    type: "Sedan",
    price: 1600,
    originalPrice: 1900,
    images: [
      "/toyota-camry-midsize-sedan.jpg",
      "/toyota-camry-midsize-sedan.jpg",
      "/toyota-camry-midsize-sedan.jpg",
      "/toyota-camry-midsize-sedan.jpg",
    ],
    rating: 4.1,
    reviews: 203,
    location: "Coimbatore",
    available: true,
    description: "The Maruti Dzire is India's best-selling sedan, offering excellent value for money with its spacious interior, fuel efficiency, and low maintenance costs.",
    specifications: {
      year: "2023",
      make: "Maruti Suzuki",
      model: "Dzire",
      engine: "1.2L K-Series",
      horsepower: "90 HP",
      transmission: "5-Speed Manual",
      drivetrain: "FWD",
      fuelType: "Petrol",
      fuelEconomy: "23.26 kmpl",
      seats: 5,
      doors: 4,
      luggage: "378 liters",
      color: "Pearl Arctic White",
    },
    features: [
      { icon: Music, name: "Music System" },
      { icon: Snowflake, name: "AC" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "Rear Camera" },
      { icon: Shield, name: "Safety Features" },
      { icon: Users, name: "Comfortable Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
    ],
    policies: {
      minAge: 21,
      license: "Valid driver's license required",
      deposit: "₹2500 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
  11: {
    id: 11,
    name: "Hyundai Creta",
    type: "SUV",
    price: 2500,
    originalPrice: 3000,
    images: [
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
    ],
    rating: 4.5,
    reviews: 178,
    location: "Avinashi road",
    available: true,
    description: "The Hyundai Creta is a premium compact SUV that combines style, comfort, and performance. With its modern design and advanced features, it's perfect for both city and highway driving.",
    specifications: {
      year: "2023",
      make: "Hyundai",
      model: "Creta",
      engine: "1.5L CRDi",
      horsepower: "115 HP",
      transmission: "6-Speed Manual",
      drivetrain: "FWD",
      fuelType: "Diesel",
      fuelEconomy: "21.4 kmpl",
      seats: 5,
      doors: 4,
      luggage: "433 liters",
      color: "Polar White",
    },
    features: [
      { icon: Music, name: "Premium Audio" },
      { icon: Snowflake, name: "Climate Control" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "360° Camera" },
      { icon: Shield, name: "Advanced Safety" },
      { icon: Users, name: "Premium Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
    ],
    policies: {
      minAge: 21,
      license: "Valid driver's license required",
      deposit: "₹4000 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
  12: {
    id: 12,
    name: "Maruti Ertiga",
    type: "MPV",
    price: 2000,
    originalPrice: 2400,
    images: [
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
    ],
    rating: 4.0,
    reviews: 167,
    location: "Coimbatore",
    available: true,
    description: "The Maruti Ertiga is a spacious 7-seater MPV perfect for family trips. With its comfortable seating and ample luggage space, it's ideal for group travel.",
    specifications: {
      year: "2023",
      make: "Maruti Suzuki",
      model: "Ertiga",
      engine: "1.5L K-Series",
      horsepower: "105 HP",
      transmission: "5-Speed Manual",
      drivetrain: "FWD",
      fuelType: "Petrol",
      fuelEconomy: "19.34 kmpl",
      seats: 7,
      doors: 4,
      luggage: "209 liters",
      color: "Pearl Arctic White",
    },
    features: [
      { icon: Music, name: "Music System" },
      { icon: Snowflake, name: "AC" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "Rear Camera" },
      { icon: Shield, name: "Safety Features" },
      { icon: Users, name: "Spacious Seating" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
    ],
    policies: {
      minAge: 21,
      license: "Valid driver's license required",
      deposit: "₹3000 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
  13: {
    id: 13,
    name: "Honda City",
    type: "Sedan",
    price: 2200,
    originalPrice: 2600,
    images: [
      "/toyota-camry-midsize-sedan.jpg",
      "/toyota-camry-midsize-sedan.jpg",
      "/toyota-camry-midsize-sedan.jpg",
      "/toyota-camry-midsize-sedan.jpg",
    ],
    rating: 4.6,
    reviews: 234,
    location: "Airport",
    available: true,
    description: "The Honda City is a premium sedan known for its reliability, comfort, and advanced features. With its refined engine and luxurious interior, it offers an exceptional driving experience.",
    specifications: {
      year: "2023",
      make: "Honda",
      model: "City",
      engine: "1.5L i-VTEC",
      horsepower: "121 HP",
      transmission: "5-Speed Manual",
      drivetrain: "FWD",
      fuelType: "Petrol",
      fuelEconomy: "17.8 kmpl",
      seats: 5,
      doors: 4,
      luggage: "506 liters",
      color: "Radiant Red Metallic",
    },
    features: [
      { icon: Music, name: "Premium Audio" },
      { icon: Snowflake, name: "Climate Control" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "Rear Camera" },
      { icon: Shield, name: "Honda Sensing" },
      { icon: Users, name: "Premium Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
    ],
    policies: {
      minAge: 21,
      license: "Valid driver's license required",
      deposit: "₹3500 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
  14: {
    id: 14,
    name: "Mahindra XUV300",
    type: "Compact SUV",
    price: 1900,
    originalPrice: 2300,
    images: [
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
    ],
    rating: 4.2,
    reviews: 145,
    location: "Coimbatore",
    available: true,
    description: "The Mahindra XUV300 is a feature-rich compact SUV with a powerful diesel engine and advanced safety features. It's perfect for those who want performance and safety in a compact package.",
    specifications: {
      year: "2023",
      make: "Mahindra",
      model: "XUV300",
      engine: "1.5L mHawk",
      horsepower: "115 HP",
      transmission: "6-Speed Manual",
      drivetrain: "FWD",
      fuelType: "Diesel",
      fuelEconomy: "20 kmpl",
      seats: 5,
      doors: 4,
      luggage: "257 liters",
      color: "Dual Tone White",
    },
    features: [
      { icon: Music, name: "Premium Audio" },
      { icon: Snowflake, name: "Climate Control" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "Rear Camera" },
      { icon: Shield, name: "Advanced Safety" },
      { icon: Users, name: "Premium Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
    ],
    policies: {
      minAge: 21,
      license: "Valid driver's license required",
      deposit: "₹3000 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
  15: {
    id: 15,
    name: "Kia Seltos",
    type: "SUV",
    price: 2800,
    originalPrice: 3200,
    images: [
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
      "/ford-explorer-suv.png",
    ],
    rating: 4.4,
    reviews: 198,
    location: "Ukkadam",
    available: true,
    description: "The Kia Seltos is a premium compact SUV that combines style, technology, and performance. With its modern design and advanced features, it offers a luxurious driving experience.",
    specifications: {
      year: "2023",
      make: "Kia",
      model: "Seltos",
      engine: "1.5L CRDi",
      horsepower: "115 HP",
      transmission: "6-Speed Manual",
      drivetrain: "FWD",
      fuelType: "Diesel",
      fuelEconomy: "21 kmpl",
      seats: 5,
      doors: 4,
      luggage: "433 liters",
      color: "Aurora Black Pearl",
    },
    features: [
      { icon: Music, name: "Bose Audio" },
      { icon: Snowflake, name: "Climate Control" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "360° Camera" },
      { icon: Shield, name: "Advanced Safety" },
      { icon: Users, name: "Premium Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
    ],
    policies: {
      minAge: 21,
      license: "Valid driver's license required",
      deposit: "₹4000 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
  16: {
    id: 16,
    name: "Maruti Baleno",
    type: "Hatchback",
    price: 1300,
    originalPrice: 1600,
    images: [
      "/honda-civic-compact-car.png",
      "/honda-civic-compact-car.png",
      "/honda-civic-compact-car.png",
      "/honda-civic-compact-car.png",
    ],
    rating: 4.3,
    reviews: 221,
    location: "Coimbatore",
    available: true,
    description: "The Maruti Baleno is a premium hatchback that offers excellent value for money. With its spacious interior, fuel efficiency, and modern features, it's perfect for urban driving.",
    specifications: {
      year: "2023",
      make: "Maruti Suzuki",
      model: "Baleno",
      engine: "1.2L K-Series",
      horsepower: "90 HP",
      transmission: "5-Speed Manual",
      drivetrain: "FWD",
      fuelType: "Petrol",
      fuelEconomy: "22.35 kmpl",
      seats: 5,
      doors: 4,
      luggage: "339 liters",
      color: "Pearl Arctic White",
    },
    features: [
      { icon: Music, name: "Music System" },
      { icon: Snowflake, name: "AC" },
      { icon: Bluetooth, name: "Bluetooth" },
      { icon: Camera, name: "Rear Camera" },
      { icon: Shield, name: "Safety Features" },
      { icon: Users, name: "Comfortable Seats" },
    ],
    included: [
      "Comprehensive Insurance",
      "24/7 Roadside Assistance",
      "Free Cancellation",
      "Unlimited Mileage",
    ],
    policies: {
      minAge: 21,
      license: "Valid driver's license required",
      deposit: "₹2000 security deposit",
      fuel: "Return with same fuel level",
      smoking: "No smoking policy",
    },
  },
>>>>>>> aa15dce (updatedfronted)
}

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Excellent car! Very comfortable and smooth ride. The BMW was in perfect condition and the service was outstanding.",
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    date: "1 month ago",
    comment:
      "Great experience renting this BMW. Powerful engine, luxurious interior, and all the tech features worked perfectly.",
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 4,
    date: "2 months ago",
    comment:
      "Beautiful car with great performance. Only minor issue was the pickup process took a bit longer than expected.",
  },
]

const similarCars = [
  {
    id: 2,
    name: "Mercedes C-Class",
    type: "Luxury Sedan",
<<<<<<< HEAD
    price: 95,
=======
    price: 9500,
>>>>>>> aa15dce (updatedfronted)
    image: "/mercedes-c-class-luxury-sedan.jpg",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Audi A4",
    type: "Luxury Sedan",
<<<<<<< HEAD
    price: 85,
=======
    price: 8500,
>>>>>>> aa15dce (updatedfronted)
    image: "/placeholder.svg?height=200&width=300&text=Audi+A4",
    rating: 4.6,
  },
]

export default function CarDetailsPage() {
  const params = useParams()
  const carId = params.id as string
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const car = carData[carId as keyof typeof carData]

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Car className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-foreground mb-2">Car not found</h2>
          <p className="text-muted-foreground mb-4">The car you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/cars">Browse All Cars</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navigation />
      <div className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/cars" className="hover:text-primary flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Cars
            </Link>
            <span>/</span>
            <span>{car.name}</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={car.images[selectedImage] || "/placeholder.svg"}
                    alt={car.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {!car.available && <Badge variant="destructive">Not Available</Badge>}
                    {car.originalPrice > car.price && (
                      <Badge className="bg-green-500 hover:bg-green-600">Save ₹{car.originalPrice - car.price}</Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" onClick={() => setIsFavorite(!isFavorite)}>
                      <Heart className={`h-4 w-4 ${isFavorite ? "fill-current text-red-500" : ""}`} />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-2 overflow-x-auto">
                  {car.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${car.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Car Details Tabs */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="specifications">Specs</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>About This Car</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{car.description}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {car.included.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <Shield className="h-4 w-4 text-green-500 mr-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="specifications" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Technical Specifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(car.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                            <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                            <span className="text-muted-foreground">{value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="features" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Features & Amenities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {car.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <feature.icon className="h-5 w-5 text-primary" />
                            </div>
                            <span className="font-medium">{feature.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Customer Reviews</span>
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span className="ml-1 font-semibold">{car.rating}</span>
                          <span className="text-muted-foreground ml-1">({car.reviews} reviews)</span>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{review.name}</span>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                          <Separator />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Booking Card */}
            <div className="space-y-6">
              {/* Booking Card */}
              <Card className="sticky top-4">
                <CardHeader>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h1 className="text-2xl font-bold text-foreground">{car.name}</h1>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 font-medium">{car.rating}</span>
                        <span className="text-muted-foreground text-sm ml-1">({car.reviews})</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{car.type}</p>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {car.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-primary">₹{car.price}</span>
                        <span className="text-muted-foreground">/day</span>
                        {car.originalPrice > car.price && (
                          <span className="text-lg text-muted-foreground line-through">₹{car.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    {car.originalPrice > car.price && (
                      <p className="text-sm text-green-600 font-medium">
                        You save ₹{car.originalPrice - car.price} per day!
                      </p>
                    )}
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        {car.specifications.seats} seats
                      </div>
                      <div className="flex items-center">
                        <Settings className="h-4 w-4 mr-2 text-muted-foreground" />
                        {car.specifications.transmission}
                      </div>
                      <div className="flex items-center">
                        <Fuel className="h-4 w-4 mr-2 text-muted-foreground" />
                        {car.specifications.fuelType}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        {car.specifications.year}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <Button className="w-full" size="lg" disabled={!car.available} asChild={car.available}>
                      {car.available ? <Link href={`/booking/${car.id}`}>Book Now</Link> : "Not Available"}
                    </Button>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 bg-transparent">
                        <Clock className="h-4 w-4 mr-2" />
                        Quick Quote
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        <Calendar className="h-4 w-4 mr-2" />
                        Check Dates
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <h4 className="font-medium text-foreground">Rental Policies</h4>
                    <ul className="space-y-1">
                      <li>• Minimum age: {car.policies.minAge} years</li>
                      <li>• {car.policies.license}</li>
                      <li>• {car.policies.deposit}</li>
                      <li>• {car.policies.fuel}</li>
                      <li>• {car.policies.smoking}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Similar Cars */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Similar Cars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {similarCars.map((similarCar) => (
                <Card key={similarCar.id} className="group hover:shadow-lg transition-shadow">
                  <div className="flex">
                    <div className="w-1/3">
                      <img
                        src={similarCar.image || "/placeholder.svg"}
                        alt={similarCar.name}
                        className="w-full h-32 object-cover rounded-l-lg"
                      />
                    </div>
                    <CardContent className="w-2/3 p-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">{similarCar.name}</h3>
                        <p className="text-sm text-muted-foreground">{similarCar.type}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="ml-1 text-sm">{similarCar.rating}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-primary">₹{similarCar.price}</span>
                            <span className="text-sm text-muted-foreground">/day</span>
                          </div>
                        </div>
                        <Button size="sm" className="w-full" asChild>
                          <Link href={`/cars/${similarCar.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
