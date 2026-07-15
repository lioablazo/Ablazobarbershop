'use client';

import { motion } from 'framer-motion';
import { GalleryImage } from '@/types';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

const GalleryGrid = ({ images, onImageClick }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          onClick={() => onImageClick(index)}
          className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-sm font-semibold">{image.alt}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;
