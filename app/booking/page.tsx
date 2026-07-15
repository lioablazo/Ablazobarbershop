'use client';

import BookingForm from '@/components/BookingForm';
import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';

const BookingPage = () => {
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
            Book Your Appointment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Reserve your spot with one of our expert barbers
          </motion.p>
        </div>
      </section>

      {/* Info */}
      <section className="py-12 bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Calendar, title: 'Easy Scheduling', desc: 'Book at a time that works for you' },
              { icon: Users, title: 'Choose Your Barber', desc: 'Select your preferred barber' },
              { icon: Clock, title: 'Save Time', desc: 'No long waits or queues' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-bebas text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-dark-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <BookingForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
