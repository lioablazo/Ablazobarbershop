'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dark pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="font-bebas text-8xl md:text-9xl text-primary mb-4">404</h1>
        <h2 className="font-bebas text-4xl md:text-5xl mb-4">Page Not Found</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Button href="/" size="lg">
          Back to Home
        </Button>
      </motion.div>
    </main>
  );
};

export default NotFound;
