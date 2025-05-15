"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Twitter, ArrowUpRight, Phone } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

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
        url: 'https://www.linkedin.com/company/liflif-kenya/',
        color: 'hover:text-blue-600'
      }
    ];
  
    const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
      <li>
        <Link 
          href={href} 
          className="text-blue-100/70 hover:text-white transition-colors duration-300 flex items-center group"
        >
          <span>{children}</span>
          <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
        </Link>
      </li>
    );
    
    return (
      <footer className="relative bg-gradient-to-br from-blue-900 to-blue-950 pt-24 pb-12 border-t border-blue-800/30">
        {/* Decorative elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute left-0 top-1/4 w-72 h-72 rounded-full bg-blue-500/5 filter blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 w-80 h-80 rounded-full bg-blue-400/5 filter blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/logo.svg"
                  alt="LIFLIF Logo"
                  width={120}
                  height={40}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-blue-100/80 mb-6 leading-relaxed">
                Revolutionizing last-mile delivery with cutting-edge technology and
                unmatched efficiency.
              </p>
              {/* Social Links with enhanced hover effects */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-blue-800/30 p-2 rounded-full text-blue-100/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
  
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 pb-2 border-b border-blue-700/30">Product</h4>
              <ul className="space-y-4">
                <FooterLink href="#features">Features</FooterLink>
              </ul>
            </div>
  
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 pb-2 border-b border-blue-700/30">Company</h4>
              <ul className="space-y-4">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="#blog">Blog</FooterLink>
                <FooterLink href="#partners">Partners</FooterLink>
              </ul>
            </div>
  
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 pb-2 border-b border-blue-700/30">Contact</h4>
              
              {/* Contact information with improved styling */}
              <div className="space-y-5">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Email Us</p>
                    <a href="mailto:support@liflif.com" className="text-blue-100/70 hover:text-blue-300 transition-colors">
                      support@liflif.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Call Us</p>
                    <a href="tel: +254 700 425 527" className="text-blue-100/70 hover:text-blue-300 transition-colors">
                      +254 700 425 527
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Visit Us</p>
                    <address className="text-blue-100/70 not-italic">
                      Nairobi, Kenya
                    </address>
                  </div>
                </div>
              </div>
              
              {/* Newsletter signup */}
              <div className="mt-6 pt-6 border-t border-blue-800/30">
                <p className="text-blue-100 text-sm mb-3">Stay updated with our newsletter</p>
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-blue-800/30 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white flex-1"
                    aria-label="Email address for newsletter"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg px-4 py-2 text-sm transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
  
          {/* Bottom Bar with improved styling */}
          <div className="border-t border-blue-800/30 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-blue-100/60 mb-4 md:mb-0 text-sm">
                &copy; 2025 LIFLIF Logistics. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <Link href="#privacy" className="text-blue-100/60 hover:text-white transition-colors text-sm whitespace-nowrap">
                  Privacy Policy
                </Link>
                <Link href="#terms" className="text-blue-100/60 hover:text-white transition-colors text-sm whitespace-nowrap">
                  Terms of Service
                </Link>
                <Link href="#cookies" className="text-blue-100/60 hover:text-white transition-colors text-sm whitespace-nowrap">
                  Cookie Policy
                </Link>
                <Link href="#accessibility" className="text-blue-100/60 hover:text-white transition-colors text-sm whitespace-nowrap">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;