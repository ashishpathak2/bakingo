"use client"
import React, { useState } from 'react';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
// import { toast } from './ui/use-toast';
const Footer = () => {
  const [email, setEmail] = useState('');
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // toast({
      //   title: "Thank you for subscribing!",
      //   description: "You'll receive our latest updates and special offers.",
      // });
      setEmail('');
    }
  };
  return (
    <footer className="bg-white border border-t-1 w-full py-12 mt-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-semibold text-footer-text">Bakingo</h3>
            <p className="text-gray-600 leading-relaxed">
              Crafting moments of joy through artisanal cakes and pastries since 2010.
            </p>
          </div>
          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-playfair text-xl font-semibold text-footer-text">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+1234567890" className="flex items-center space-x-3 text-gray-600 hover:text-footer-secondary transition-colors duration-300">
                <Phone size={18} />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:hello@sweetdelights.com" className="flex items-center space-x-3 text-gray-600 hover:text-footer-secondary transition-colors duration-300">
                <Mail size={18} />
                <span>hello@sweetdelights.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={18} />
                <span>123 Baker Street, Cake City</span>
              </div>
            </div>
          </div>
          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="font-playfair text-xl font-semibold text-footer-text">Hours</h4>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center space-x-3">
                <Clock size={18} />
                <div>
                  <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat - Sun: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-playfair text-xl font-semibold text-footer-text">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/90 border-footer-secondary focus:border-footer-accent transition-colors duration-300"
                />
                <Button 
                  type="submit"
                  className="bg-footer-secondary hover:bg-footer-accent text-white transition-colors duration-300 flex items-center space-x-2"
                >
                  <span>Subscribe</span>
                  <Send size={18} />
                </Button>
              </div>
            </form>
          </div>
        </div>
        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-footer-secondary transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-footer-secondary transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-footer-secondary transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Bakingo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;