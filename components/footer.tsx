import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold">CarRental</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
<<<<<<< HEAD
              Your trusted partner for premium car rental services worldwide. Experience luxury, comfort, and
=======
              Your trusted partner for  car rental services worldwide. Experience luxury, comfort, and
>>>>>>> aa15dce (updatedfronted)
              reliability with every journey.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>
                <Link href="/cars" className="hover:text-primary transition-colors">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-primary transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>
                <Link href="/help" className="hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="hover:text-primary transition-colors">
                  Insurance Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-background/80 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
<<<<<<< HEAD
                <span>1-800-CAR-RENT</span>
=======
                <span>1-800-998-1529</span>
>>>>>>> aa15dce (updatedfronted)
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>support@carrental.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-primary mt-0.5" />
                <span>
<<<<<<< HEAD
                  123 Business Ave
                  <br />
                  Suite 100
                  <br />
                  New York, NY 10001
=======
                  Bannari amman institute of technology
                  <br />
                  Sathyamangalam
                  <br />
                  Erode-638401
>>>>>>> aa15dce (updatedfronted)
                </span>
              </div>
              <div className="pt-2">
                <p className="text-primary font-medium">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">&copy; 2024 CarRental. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/sitemap" className="text-background/60 hover:text-primary text-sm transition-colors">
                Sitemap
              </Link>
              <Link href="/accessibility" className="text-background/60 hover:text-primary text-sm transition-colors">
                Accessibility
              </Link>
              <Link href="/cookies" className="text-background/60 hover:text-primary text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
