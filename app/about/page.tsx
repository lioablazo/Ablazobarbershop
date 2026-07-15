'use client';

import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';

const AboutPage = () => {
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
            About Ablazo Cut
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Our story of excellence and commitment to style
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1622287566021-d5e8d9c16dab?w=500&h=500&fit=crop"
              alt="Barbershop Interior"
              className="rounded-lg"
            />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-bebas text-4xl mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Founded in 2018, Ablazo Cut was born from a passion for exceptional barbering and a commitment
                to providing our community with premium grooming services. What started as a small shop has
                grown into a destination for men seeking professional, high-quality haircuts and grooming.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We believe that a great haircut is more than just cutting hair—it's about understanding your
                style, listening to your needs, and delivering excellence with every snip. Our barbers are
                continuously trained in the latest techniques and trends to ensure you always look your best.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we're proud to serve thousands of satisfied customers and continue our mission to be
                the premier barbershop in the community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-dark-secondary">
        <div className="container">
          <SectionHeading title="Our Values" subtitle="What drives us every day" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in everything we do, from our haircuts to our customer service.',
              },
              {
                title: 'Professionalism',
                description: 'Our barbers are certified and dedicated to their craft, treating every customer with respect and care.',
              },
              {
                title: 'Community',
                description: 'We're more than a barbershop—we're a gathering place where friendships are built and trust is earned.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-dark p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="font-bebas text-2xl mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
