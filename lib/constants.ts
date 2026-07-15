import { Service, Barber, Testimonial, FAQ, GalleryImage } from '@/types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Regular Haircut',
    description: 'Classic and timeless haircut for all ages',
    duration: 30,
    price: 25,
    icon: 'Scissors',
  },
  {
    id: '2',
    name: 'Skin Fade',
    description: 'Smooth fade from skin to longer hair on top',
    duration: 40,
    price: 35,
    icon: 'Scissors',
  },
  {
    id: '3',
    name: 'Taper Fade',
    description: 'Gradual fade with more hair at the sides',
    duration: 40,
    price: 35,
    icon: 'Scissors',
  },
  {
    id: '4',
    name: 'Buzz Cut',
    description: 'Short, clean, and simple haircut',
    duration: 20,
    price: 20,
    icon: 'Scissors',
  },
  {
    id: '5',
    name: 'Beard Trim',
    description: 'Professional beard styling and trimming',
    duration: 25,
    price: 20,
    icon: 'Scissors',
  },
  {
    id: '6',
    name: 'Hair Wash',
    description: 'Relaxing hair wash with scalp massage',
    duration: 15,
    price: 10,
    icon: 'Scissors',
  },
  {
    id: '7',
    name: 'Kids Haircut',
    description: 'Gentle and quick haircut for children',
    duration: 25,
    price: 18,
    icon: 'Scissors',
  },
  {
    id: '8',
    name: 'Hair + Beard Package',
    description: 'Complete grooming package - haircut and beard trim',
    duration: 60,
    price: 50,
    icon: 'Scissors',
  },
];

export const BARBERS: Barber[] = [
  {
    id: '1',
    name: 'Marcus Johnson',
    position: 'Head Barber',
    experience: 12,
    specialty: 'Skin Fades & Design Work',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    socialMedia: {
      instagram: '@marcus_barber',
      facebook: 'Marcus Johnson Barber',
    },
  },
  {
    id: '2',
    name: 'James Williams',
    position: 'Senior Barber',
    experience: 8,
    specialty: 'Classic Cuts & Beard Work',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    socialMedia: {
      instagram: '@james_cuts',
    },
  },
  {
    id: '3',
    name: 'David Martinez',
    position: 'Barber',
    experience: 5,
    specialty: 'Modern Styles & Kids Cuts',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    socialMedia: {
      instagram: '@david_barber_',
      twitter: '@davidcuts',
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    rating: 5,
    review: 'Ablazo Cut is the best barbershop in town. The barbers are skilled and professional. Highly recommend!',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Chris Anderson',
    rating: 5,
    review: 'Great atmosphere, amazing service. Marcus gave me the best fade I\'ve ever had. Will definitely be back!',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Ryan Cooper',
    rating: 5,
    review: 'Clean place, friendly staff, and excellent haircuts. This is my new regular spot.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
  },
  {
    id: '4',
    name: 'Michael Brown',
    rating: 5,
    review: 'Professional barbers who really know their craft. The attention to detail is incredible.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
];

export const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'Do you accept walk-ins?',
    answer: 'Yes! We welcome walk-ins during all business hours. However, we recommend booking an appointment online to minimize wait times.',
  },
  {
    id: '2',
    question: 'What is your appointment cancellation policy?',
    answer: 'We require 24-hour notice for cancellations. Cancellations made less than 24 hours before the appointment may incur a $10 fee.',
  },
  {
    id: '3',
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit cards (Visa, Mastercard, American Express), and digital payments (Apple Pay, Google Pay).',
  },
  {
    id: '4',
    question: 'Is parking available?',
    answer: 'Yes! Free parking is available in our parking lot behind the shop. Street parking is also available nearby.',
  },
  {
    id: '5',
    question: 'What are your business hours?',
    answer: 'Monday - Friday: 9:00 AM - 7:00 PM | Saturday: 9:00 AM - 6:00 PM | Sunday: 11:00 AM - 5:00 PM',
  },
  {
    id: '6',
    question: 'How long does a typical haircut take?',
    answer: 'Most haircuts take 30-40 minutes depending on the style and complexity. Beard trims typically take 15-25 minutes.',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1605629921519-5e51ce6b351c?w=500&h=500&fit=crop',
    alt: 'Fade Haircut',
    category: 'haircut',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1599475266348-bf5fc36d65b7?w=500&h=500&fit=crop',
    alt: 'Beard Grooming',
    category: 'beard',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1622287566021-d5e8d9c16dab?w=500&h=500&fit=crop',
    alt: 'Barbershop Interior',
    category: 'interior',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1615451234911-4eb1a0f01d27?w=500&h=500&fit=crop',
    alt: 'Modern Fade',
    category: 'haircut',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1599475266348-bf5fc36d65b7?w=500&h=500&fit=crop',
    alt: 'Beard Styling',
    category: 'beard',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1622287566021-d5e8d9c16dab?w=500&h=500&fit=crop',
    alt: 'Shop Ambiance',
    category: 'interior',
  },
];

export const BUSINESS_INFO = {
  name: 'Ablazo Cut',
  tagline: 'Look Sharp. Feel Confident.',
  description: 'Premium barbershop offering expert grooming services with a focus on quality, style, and customer satisfaction.',
  phone: '+1 (555) 123-4567',
  email: 'info@ablazocut.com',
  address: '123 Main Street, Your City, ST 12345',
  hours: {
    monday: '9:00 AM - 7:00 PM',
    tuesday: '9:00 AM - 7:00 PM',
    wednesday: '9:00 AM - 7:00 PM',
    thursday: '9:00 AM - 7:00 PM',
    friday: '9:00 AM - 7:00 PM',
    saturday: '9:00 AM - 6:00 PM',
    sunday: '11:00 AM - 5:00 PM',
  },
  socialMedia: {
    facebook: 'https://facebook.com/ablazocut',
    instagram: 'https://instagram.com/ablazocut',
    twitter: 'https://twitter.com/ablazocut',
  },
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s123%20Main%20Street!5e0!3m2!1sen!2sus!4v1234567890',
};
