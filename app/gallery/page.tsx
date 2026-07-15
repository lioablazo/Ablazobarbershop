'use client';

import { useState } from 'react';
import GalleryGrid from '@/components/GalleryGrid';
import GalleryLightbox from '@/components/GalleryLightbox';
import SectionHeading from '@/components/SectionHeading';
import { GALLERY_IMAGES } from '@/lib/constants';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredImages =
    filter === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-dark-secondary to-dark">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-5xl md:text-6xl mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Showcasing our best work and transformations
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-dark">
        <div className="container flex justify-center gap-4 flex-wrap">
          {['all', 'haircut', 'beard', 'interior'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                filter === category
                  ? 'bg-primary text-dark'
                  : 'bg-dark-secondary text-white border border-primary/20 hover:border-primary/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-dark">
        <div className="container">
          <GalleryGrid images={filteredImages} onImageClick={setSelectedIndex} />
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <GalleryLightbox
          images={filteredImages}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </main>
  );
};

export default GalleryPage;
