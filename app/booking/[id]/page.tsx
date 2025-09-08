"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Car, MapPin, Shield, Clock, CheckCircle, ArrowLeft, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Mock car data
const carData = {
  1: {
    id: 1,
    name: "BMW 3 Series",
    type: "Luxury Sedan",
    price: 89,
    image: "/bmw-3-series-luxury-sedan.jpg",
    location: "Downtown",
    specifications: {
      seats: 5,
      transmission: "Automatic",
      fuelType: "Petrol",
    },
  },
}

export default function BookingPage() {
  const params = useParams()
  const carId = params.id as string
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    // Rental Details
    pickupDate: "",
    returnDate: "",
    pickupTime: "10:00",
    returnTime: "10:00",
    pickupLocation: "Downtown",
    returnLocation: "Downtown",

    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    licenseNumber: "",
    licenseExpiry: "",

    // Additional Options
    additionalDriver: false,
    gps: false,
    childSeat: false,
    insurance: false,

    // Special Requests
    specialRequests: "",

    // Payment
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    billingAddress: "",
    city: "",
    zipCode: "",

    // Terms
    termsAccepted: false,
    newsletterOptIn: false,
  })

  const car = carData[carId as keyof typeof carData]

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Car className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-foreground mb-2">Car not found</h2>
          <p className="text-muted-foreground mb-4">The car you're trying to book doesn't exist.</p>
          <Button asChild>
            <Link href="/cars">Browse All Cars</Link>
          </Button>
        </div>
      </div>
    )
  }

  const calculateDays = () => {
    if (!bookingData.pickupDate || !bookingData.returnDate) return 0
    const pickup = new Date(bookingData.pickupDate)
    const returnDate = new Date(bookingData.returnDate)
    const diffTime = Math.abs(returnDate.getTime() - pickup.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const calculateTotal = () => {
    const days = calculateDays()
    let total = car.price * days

    if (bookingData.additionalDriver) total += 15 * days
    if (bookingData.gps) total += 10 * days
    if (bookingData.childSeat) total += 8 * days
    if (bookingData.insurance) total += 25 * days

    return total
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    // In a real app, this would submit to an API
    setCurrentStep(5) // Confirmation step
  }

  return (
    <>
      <Navigation />
      <div className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation */}
          <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Car className="h-8 w-8 text-primary mr-2" />
                    <span className="text-xl font-bold text-foreground">CarRental</span>
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                  <Button size="sm">Sign Up</Button>
                </div>
              </div>
            </div>
          </nav>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href={`/cars/${carId}`} className="hover:text-primary flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Car Details
              </Link>
              <span>/</span>
              <span>Booking</span>
            </div>

            {currentStep < 5 && (
              <>
                {/* Progress Steps */}
                <div className="mb-8">
                  <div className="flex items-center justify-center space-x-4">
                    {[
                      { step: 1, title: "Rental Details" },
                      { step: 2, title: "Personal Info" },
                      { step: 3, title: "Extras & Options" },
                      { step: 4, title: "Payment" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                            currentStep >= item.step
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {item.step}
                        </div>
                        <span
                          className={`ml-2 text-sm ${currentStep >= item.step ? "text-foreground" : "text-muted-foreground"}`}
                        >
                          {item.title}
                        </span>
                        {item.step < 4 && <div className="w-8 h-px bg-border mx-4" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Form */}
                  <div className="lg:col-span-2">
                    {/* Step 1: Rental Details */}
                    {currentStep === 1 && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Rental Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="pickupDate">Pick-up Date</Label>
                              <Input
                                id="pickupDate"
                                type="date"
                                value={bookingData.pickupDate}
                                onChange={(e) => handleInputChange("pickupDate", e.target.value)}
                                min={new Date().toISOString().split("T")[0]}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="pickupTime">Pick-up Time</Label>
                              <Select
                                value={bookingData.pickupTime}
                                onValueChange={(value) => handleInputChange("pickupTime", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {Array.from({ length: 24 }, (_, i) => {
                                    const hour = i.toString().padStart(2, "0")
                                    return (
                                      <SelectItem key={hour} value={`${hour}:00`}>
                                        {hour}:00
                                      </SelectItem>
                                    )
                                  })}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="returnDate">Return Date</Label>
                              <Input
                                id="returnDate"
                                type="date"
                                value={bookingData.returnDate}
                                onChange={(e) => handleInputChange("returnDate", e.target.value)}
                                min={bookingData.pickupDate || new Date().toISOString().split("T")[0]}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="returnTime">Return Time</Label>
                              <Select
                                value={bookingData.returnTime}
                                onValueChange={(value) => handleInputChange("returnTime", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {Array.from({ length: 24 }, (_, i) => {
                                    const hour = i.toString().padStart(2, "0")
                                    return (
                                      <SelectItem key={hour} value={`${hour}:00`}>
                                        {hour}:00
                                      </SelectItem>
                                    )
                                  })}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="pickupLocation">Pick-up Location</Label>
                              <Select
                                value={bookingData.pickupLocation}
                                onValueChange={(value) => handleInputChange("pickupLocation", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Downtown">Downtown</SelectItem>
                                  <SelectItem value="Airport">Airport</SelectItem>
                                  <SelectItem value="City Center">City Center</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="returnLocation">Return Location</Label>
                              <Select
                                value={bookingData.returnLocation}
                                onValueChange={(value) => handleInputChange("returnLocation", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Downtown">Downtown</SelectItem>
                                  <SelectItem value="Airport">Airport</SelectItem>
                                  <SelectItem value="City Center">City Center</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <Button onClick={nextStep} disabled={!bookingData.pickupDate || !bookingData.returnDate}>
                              Continue
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Step 2: Personal Information */}
                    {currentStep === 2 && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Personal Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <Input
                                id="firstName"
                                value={bookingData.firstName}
                                onChange={(e) => handleInputChange("firstName", e.target.value)}
                                placeholder="Enter your first name"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input
                                id="lastName"
                                value={bookingData.lastName}
                                onChange={(e) => handleInputChange("lastName", e.target.value)}
                                placeholder="Enter your last name"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address</Label>
                              <Input
                                id="email"
                                type="email"
                                value={bookingData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                placeholder="Enter your email"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={bookingData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                placeholder="Enter your phone number"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="dateOfBirth">Date of Birth</Label>
                              <Input
                                id="dateOfBirth"
                                type="date"
                                value={bookingData.dateOfBirth}
                                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                              />
                            </div>
                          </div>

                          <Separator />

                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Driver's License Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="licenseNumber">License Number</Label>
                                <Input
                                  id="licenseNumber"
                                  value={bookingData.licenseNumber}
                                  onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                                  placeholder="Enter license number"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="licenseExpiry">License Expiry Date</Label>
                                <Input
                                  id="licenseExpiry"
                                  type="date"
                                  value={bookingData.licenseExpiry}
                                  onChange={(e) => handleInputChange("licenseExpiry", e.target.value)}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <Button variant="outline" onClick={prevStep}>
                              Back
                            </Button>
                            <Button
                              onClick={nextStep}
                              disabled={!bookingData.firstName || !bookingData.lastName || !bookingData.email}
                            >
                              Continue
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Step 3: Extras & Options */}
                    {currentStep === 3 && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Extras & Options</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center space-x-3">
                                <Checkbox
                                  id="additionalDriver"
                                  checked={bookingData.additionalDriver}
                                  onCheckedChange={(checked) =>
                                    handleInputChange("additionalDriver", checked as boolean)
                                  }
                                />
                                <div>
                                  <Label htmlFor="additionalDriver" className="font-medium">
                                    Additional Driver
                                  </Label>
                                  <p className="text-sm text-muted-foreground">Add an additional authorized driver</p>
                                </div>
                              </div>
                              <span className="font-medium">+$15/day</span>
                            </div>

                            <div className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center space-x-3">
                                <Checkbox
                                  id="gps"
                                  checked={bookingData.gps}
                                  onCheckedChange={(checked) => handleInputChange("gps", checked as boolean)}
                                />
                                <div>
                                  <Label htmlFor="gps" className="font-medium">
                                    GPS Navigation
                                  </Label>
                                  <p className="text-sm text-muted-foreground">Portable GPS navigation system</p>
                                </div>
                              </div>
                              <span className="font-medium">+$10/day</span>
                            </div>

                            <div className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center space-x-3">
                                <Checkbox
                                  id="childSeat"
                                  checked={bookingData.childSeat}
                                  onCheckedChange={(checked) => handleInputChange("childSeat", checked as boolean)}
                                />
                                <div>
                                  <Label htmlFor="childSeat" className="font-medium">
                                    Child Safety Seat
                                  </Label>
                                  <p className="text-sm text-muted-foreground">Safety seat for children</p>
                                </div>
                              </div>
                              <span className="font-medium">+$8/day</span>
                            </div>

                            <div className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center space-x-3">
                                <Checkbox
                                  id="insurance"
                                  checked={bookingData.insurance}
                                  onCheckedChange={(checked) => handleInputChange("insurance", checked as boolean)}
                                />
                                <div>
                                  <Label htmlFor="insurance" className="font-medium">
                                    Premium Insurance
                                  </Label>
                                  <p className="text-sm text-muted-foreground">Additional coverage and protection</p>
                                </div>
                              </div>
                              <span className="font-medium">+$25/day</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="specialRequests">Special Requests</Label>
                            <Textarea
                              id="specialRequests"
                              value={bookingData.specialRequests}
                              onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                              placeholder="Any special requests or requirements..."
                              rows={3}
                            />
                          </div>

                          <div className="flex justify-between">
                            <Button variant="outline" onClick={prevStep}>
                              Back
                            </Button>
                            <Button onClick={nextStep}>Continue</Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Step 4: Payment */}
                    {currentStep === 4 && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Payment Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="cardName">Cardholder Name</Label>
                              <Input
                                id="cardName"
                                value={bookingData.cardName}
                                onChange={(e) => handleInputChange("cardName", e.target.value)}
                                placeholder="Name on card"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cardNumber">Card Number</Label>
                              <Input
                                id="cardNumber"
                                value={bookingData.cardNumber}
                                onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                                placeholder="1234 5678 9012 3456"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="expiryDate">Expiry Date</Label>
                                <Input
                                  id="expiryDate"
                                  value={bookingData.expiryDate}
                                  onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                                  placeholder="MM/YY"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cvv">CVV</Label>
                                <Input
                                  id="cvv"
                                  value={bookingData.cvv}
                                  onChange={(e) => handleInputChange("cvv", e.target.value)}
                                  placeholder="123"
                                />
                              </div>
                            </div>
                          </div>

                          <Separator />

                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Billing Address</h3>
                            <div className="space-y-2">
                              <Label htmlFor="billingAddress">Address</Label>
                              <Input
                                id="billingAddress"
                                value={bookingData.billingAddress}
                                onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                                placeholder="Street address"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="city">City</Label>
                                <Input
                                  id="city"
                                  value={bookingData.city}
                                  onChange={(e) => handleInputChange("city", e.target.value)}
                                  placeholder="City"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="zipCode">ZIP Code</Label>
                                <Input
                                  id="zipCode"
                                  value={bookingData.zipCode}
                                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                                  placeholder="ZIP code"
                                />
                              </div>
                            </div>
                          </div>

                          <Separator />

                          <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="termsAccepted"
                                checked={bookingData.termsAccepted}
                                onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                              />
                              <Label htmlFor="termsAccepted" className="text-sm">
                                I agree to the{" "}
                                <Link href="/terms" className="text-primary hover:underline">
                                  Terms and Conditions
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy" className="text-primary hover:underline">
                                  Privacy Policy
                                </Link>
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="newsletterOptIn"
                                checked={bookingData.newsletterOptIn}
                                onCheckedChange={(checked) => handleInputChange("newsletterOptIn", checked as boolean)}
                              />
                              <Label htmlFor="newsletterOptIn" className="text-sm">
                                Subscribe to our newsletter for deals and updates
                              </Label>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <Button variant="outline" onClick={prevStep}>
                              Back
                            </Button>
                            <Button onClick={handleSubmit} disabled={!bookingData.termsAccepted}>
                              Complete Booking
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* Booking Summary */}
                  <div className="space-y-6">
                    <Card className="sticky top-4">
                      <CardHeader>
                        <CardTitle>Booking Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex space-x-4">
                          <img
                            src={car.image || "/placeholder.svg"}
                            alt={car.name}
                            className="w-20 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{car.name}</h3>
                            <p className="text-sm text-muted-foreground">{car.type}</p>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <MapPin className="h-3 w-3 mr-1" />
                              {car.location}
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Pick-up:</span>
                            <span>{bookingData.pickupDate || "Not selected"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Return:</span>
                            <span>{bookingData.returnDate || "Not selected"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span>{calculateDays()} days</span>
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Car rental ({calculateDays()} days)</span>
                            <span>${car.price * calculateDays()}</span>
                          </div>
                          {bookingData.additionalDriver && (
                            <div className="flex justify-between">
                              <span>Additional driver</span>
                              <span>+${15 * calculateDays()}</span>
                            </div>
                          )}
                          {bookingData.gps && (
                            <div className="flex justify-between">
                              <span>GPS Navigation</span>
                              <span>+${10 * calculateDays()}</span>
                            </div>
                          )}
                          {bookingData.childSeat && (
                            <div className="flex justify-between">
                              <span>Child seat</span>
                              <span>+${8 * calculateDays()}</span>
                            </div>
                          )}
                          {bookingData.insurance && (
                            <div className="flex justify-between">
                              <span>Premium insurance</span>
                              <span>+${25 * calculateDays()}</span>
                            </div>
                          )}
                        </div>

                        <Separator />

                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span className="text-primary">${calculateTotal()}</span>
                        </div>

                        <div className="space-y-2 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <Shield className="h-3 w-3 mr-1" />
                            <span>Fully insured</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>24/7 support</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            <span>Free cancellation</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </>
            )}

            {/* Confirmation Step */}
            {currentStep === 5 && (
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-foreground">Booking Confirmed!</h1>
                  <p className="text-lg text-muted-foreground">Your car rental has been successfully booked.</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Booking Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-left">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Booking ID:</span>
                        <p className="text-muted-foreground">CR-{Date.now().toString().slice(-6)}</p>
                      </div>
                      <div>
                        <span className="font-medium">Car:</span>
                        <p className="text-muted-foreground">{car.name}</p>
                      </div>
                      <div>
                        <span className="font-medium">Pick-up:</span>
                        <p className="text-muted-foreground">
                          {bookingData.pickupDate} at {bookingData.pickupTime}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium">Return:</span>
                        <p className="text-muted-foreground">
                          {bookingData.returnDate} at {bookingData.returnTime}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium">Total Amount:</span>
                        <p className="text-primary font-semibold">${calculateTotal()}</p>
                      </div>
                      <div>
                        <span className="font-medium">Status:</span>
                        <Badge className="bg-green-100 text-green-800">Confirmed</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="text-left">
                      <h3 className="font-medium text-blue-900">What's Next?</h3>
                      <ul className="text-sm text-blue-800 mt-1 space-y-1">
                        <li>• A confirmation email has been sent to {bookingData.email}</li>
                        <li>• Please bring your driver's license and credit card</li>
                        <li>• Arrive 15 minutes early for vehicle inspection</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button asChild>
                    <Link href="/dashboard">View My Bookings</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/cars">Book Another Car</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
