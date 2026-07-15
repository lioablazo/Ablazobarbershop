'use client';

import { motion } from 'framer-motion';
import { Barber } from '@/types';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface BarberCardProps {
  barber: Barber;
}

const BarberCard = ({ barber }: BarberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={barber.photo}
          alt={barber.name}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex gap-3">
            {barber.socialMedia.instagram && (
              <a
                href={`https://instagram.com/${barber.socialMedia.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
              >
                <Instagram size={18} className="text-dark" />
              </a>
            )}
            {barber.socialMedia.facebook && (
              <a
                href={barber.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
              >
                <Facebook size={18} className="text-dark" />
              </a>
            )}
            {barber.socialMedia.twitter && (
              <a
                href={`https://twitter.com/${barber.socialMedia.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
              >
                <Twitter size={18} className="text-dark" />
              </a>
            )}
          </div>
        </div>
      </div>
      <h3 className="font-bebas text-2xl mb-1">{barber.name}</h3>
      <p className="text-primary text-sm mb-2">{barber.position}</p>
      <p className="text-gray-400 text-sm mb-2">{barber.specialty}</p>
      <p className="text-xs text-gray-500">{barber.experience} years experience</p>
    </motion.div>
  );
};

export default BarberCard;
