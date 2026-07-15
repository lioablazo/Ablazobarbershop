'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial } from '@/types';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-dark-secondary p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <div className="flex gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} size={14} className="fill-primary text-primary" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.review}"</p>
    </motion.div>
  );
};

export default TestimonialCard;
