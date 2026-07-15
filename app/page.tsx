'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import BarberCard from '@/components/BarberCard';
import { SERVICES, TESTIMONIALS, BARBERS, BUSINESS_INFO } from '@/lib/constants';
import { ArrowRight, MapPin, Phone, Clock } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen bg-gradient-to-br from-dark via-dark-secondary to-dark flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute -bottom-8 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bebas text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight"
          >
            LOOK SHARP<br />
            <span className="text-primary">FEEL CONFIDENT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Experience premium barbershop services with expert barbers dedicated to your style and
            comfort.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/booking" size="lg">
              Book Appointment <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Services
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark">
        <div className="container">
          <SectionHeading
            title="Why Choose Ablazo Cut"
            subtitle="Excellence in every cut, professionalism in every interaction"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Barbers',
                description: 'Our team consists of highly skilled and certified barbers with years of experience.',
                icon: '✂️',
              },
              {
                title: 'Premium Service',
                description: 'We use only the highest quality tools and products for the best results.',
                icon: '⭐',
              },
              {
                title: 'Comfortable Atmosphere',
                description: 'Relax in our modern, clean, and welcoming barbershop environment.',
                icon: '🏠',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-dark-secondary p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bebas text-2xl mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-dark-secondary">
        <div className="container">
          <SectionHeading
            title="Our Services"
            subtitle="Professional grooming for every style and need"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/services" variant="primary" size="lg">
              View All Services <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Meet the Team Preview */}
      <section className="py-20 bg-dark">
        <div className="container">
          <SectionHeading
            title="Meet Our Barbers"
            subtitle="Meet the skilled professionals behind your perfect look"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BARBERS.map((barber) => (
              <BarberCard key={barber.id} barber={barber} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/team" variant="secondary" size="lg">
              Meet Full Team
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-secondary">
        <div className="container">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Real reviews from real customers"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-primary/10 border-y border-primary/20">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-bebas text-4xl md:text-5xl mb-6"
          >
            Ready to Transform Your Look?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          >
            Book your appointment today and experience the Ablazo Cut difference.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button href="/booking" size="lg">
              Book Now <ArrowRight size={20} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-12 bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.a
              href={`tel:${BUSINESS_INFO.phone}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 hover:text-primary transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Call Us</p>
                <p className="font-semibold">{BUSINESS_INFO.phone}</p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-semibold">{BUSINESS_INFO.address}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Hours</p>
                <p className="font-semibold">Mon - Fri: 9AM - 7PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
