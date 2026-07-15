'use client';

import { motion } from 'framer-motion';
import { Service } from '@/types';
import { LucideIcon, Scissors } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-dark-secondary p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
    >
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
        <Scissors size={32} className="text-primary" />
      </div>

      <h3 className="font-bebas text-2xl mb-3">{service.name}</h3>
      <p className="text-gray-400 text-sm mb-6">{service.description}</p>

      <div className="flex items-center justify-between pt-6 border-t border-primary/20">
        <div>
          <p className="text-xs text-gray-500 mb-1">Duration</p>
          <p className="font-semibold">{service.duration} min</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Price</p>
          <p className="font-bebas text-2xl text-primary">${service.price}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
