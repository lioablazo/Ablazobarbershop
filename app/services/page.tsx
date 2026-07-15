'use client';

import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { SERVICES } from '@/lib/constants';
import { motion } from 'framer-motion';

const ServicesPage = () => {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Comprehensive grooming services tailored to your needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-dark-secondary">
        <div className="container">
          <SectionHeading
            title="Service Details"
            subtitle="Everything you need to know about our services"
            centered
          />

          <div className="max-w-3xl mx-auto space-y-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-dark p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bebas text-2xl mb-3">{service.name}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <p className="text-sm text-gray-500">
                      This service takes approximately {service.duration} minutes and includes our premium care
                      package.
                    </p>
                  </div>
                  <div className="ml-6 text-right">
                    <p className="text-sm text-gray-500 mb-2">Starting at</p>
                    <p className="font-bebas text-4xl text-primary">${service.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
