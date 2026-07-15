'use client';

import AccordionItem from '@/components/AccordionItem';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import { FAQS, BUSINESS_INFO } from '@/lib/constants';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            We'd love to hear from you. Get in touch with us today.
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                content: BUSINESS_INFO.phone,
                link: `tel:${BUSINESS_INFO.phone}`,
              },
              {
                icon: Mail,
                title: 'Email Us',
                content: BUSINESS_INFO.email,
                link: `mailto:${BUSINESS_INFO.email}`,
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                content: BUSINESS_INFO.address,
                link: '#',
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-secondary p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-bebas text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.content}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map */}
      <section className="py-20 bg-dark-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-bebas text-3xl mb-6">Send us a Message</h2>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-bebas text-3xl mb-6">Location</h2>
              <div className="rounded-lg overflow-hidden border border-primary/20 h-96">
                <iframe
                  src={BUSINESS_INFO.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-gray-400 text-sm mt-4">Click on the map to get directions</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-dark">
        <div className="container">
          <SectionHeading title="Frequently Asked Questions" subtitle="Find answers to common questions" />

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
