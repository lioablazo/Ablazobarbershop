'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-secondary border-t border-primary/20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bebas text-2xl mb-4">ABLAZO CUT</h3>
            <p className="text-gray-400 text-sm mb-4">{BUSINESS_INFO.description}</p>
            <div className="flex gap-4">
              <a
                href={BUSINESS_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-primary" />
              </a>
              <a
                href={BUSINESS_INFO.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-primary" />
              </a>
              <a
                href={BUSINESS_INFO.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-xl mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-primary transition-colors duration-300">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bebas text-xl mb-4">HOURS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Mon - Fri: {BUSINESS_INFO.hours.monday}</li>
              <li>Saturday: {BUSINESS_INFO.hours.saturday}</li>
              <li>Sunday: {BUSINESS_INFO.hours.sunday}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bebas text-xl mb-4">CONTACT</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Phone size={16} className="text-primary" />
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Mail size={16} className="text-primary" />
                {BUSINESS_INFO.email}
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                {BUSINESS_INFO.address}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {currentYear} Ablazo Cut. All rights reserved. | Built with passion for style.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
