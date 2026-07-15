'use client';

import BarberCard from '@/components/BarberCard';
import SectionHeading from '@/components/SectionHeading';
import { BARBERS } from '@/lib/constants';
import { motion } from 'framer-motion';

const TeamPage = () => {
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
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Expert barbers dedicated to your style and confidence
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BARBERS.map((barber, index) => (
              <motion.div
                key={barber.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BarberCard barber={barber} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="py-20 bg-dark-secondary">
        <div className="container">
          <SectionHeading
            title="Why Our Barbers Stand Out"
            subtitle="Professional, experienced, and passionate about their craft"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Certified Professionals',
                description: 'All our barbers are certified and regularly complete continuing education to stay current with trends.',
              },
              {
                title: 'Years of Experience',
                description: 'Our team collectively has over 30 years of barbering experience across various styles and techniques.',
              },
              {
                title: 'Personalized Service',
                description: 'We take time to listen to each client and provide personalized recommendations for their unique style.',
              },
              {
                title: 'Passionate Artists',
                description: 'Our barbers view their work as an art form and take pride in delivering exceptional results every time.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-dark p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="font-bebas text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
