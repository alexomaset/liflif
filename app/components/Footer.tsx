"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import Image from 'next/image';

const Footer = () => {
    const socialLinks = [
      {
        name: 'Facebook',
        icon: <Facebook className="h-5 w-5" />,
        url: 'https://facebook.com/liflif',
        color: 'hover:text-blue-500'
      },
      {
        name: 'Twitter',
        icon: <Twitter className="h-5 w-5" />,
        url: 'https://twitter.com/liflif',
        color: 'hover:text-blue-400'
      },
      {
        name: 'Instagram',
        icon: <Instagram className="h-5 w-5" />,
        url: 'https://instagram.com/liflif',
        color: 'hover:text-pink-500'
      },
      {
        name: 'LinkedIn',
        icon: <Linkedin className="h-5 w-5" />,
        url: 'https://linkedin.com/company/liflif',
        color: 'hover:text-blue-600'
      }
    ];
  
    return (
      <footer className="relative bg-gray-900 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/logo.svg"
                  alt="LIFLIF Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6">
                Revolutionizing last-mile delivery with cutting-edge technology and
                unmatched efficiency.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
  
            <div>
              <h4 className="text-white font-semibold mb-6">Product</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <p className="text-gray-400 mb-2">support@liflif.com</p>
              <p className="text-gray-400 mb-6">+254 (0) 797 586 660</p>
              {/* Additional Contact Links */}
              <div className="space-y-3">
                <a 
                  href="#" 
                  className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Find our offices</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  <span>Contact sales</span>
                </a>
              </div>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                © 2025 LIFLIF Logistics. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;